#!/usr/bin/env node

/**
 * Batch Article Rewrite Script
 * 
 * Process multiple articles from a configuration file or directory.
 * Useful when you have several project articles to rewrite at once.
 * 
 * Usage:
 *   node batch-rewrite-articles.js --config batch-config.json
 *   node batch-rewrite-articles.js --dir ./source-articles/ --output ./client/src/pages/articles/
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'fs';
import { resolve, join, basename, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Anthropic from '@anthropic-ai/sdk';
import { loadVoiceAndToneFiles } from './load-voice-tone.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Parse command line arguments
const args = process.argv.slice(2);
const getArg = (flag) => {
  const index = args.indexOf(flag);
  return index !== -1 && args[index + 1] ? args[index + 1] : null;
};

const hasFlag = (flag) => args.includes(flag);

const configFile = getArg('--config');
const sourceDir = getArg('--dir');
const outputDir = getArg('--output');
const help = hasFlag('--help') || hasFlag('-h');

// Show help
if (help) {
  console.log(`
Batch Article Rewrite Script

Usage:
  node batch-rewrite-articles.js [options]

Options:
  --config <file>        JSON config file with article list
  --dir <directory>      Directory containing source articles
  --output <directory>   Output directory for rewritten articles
  -h, --help             Show this help message

Config File Format (batch-config.json):
  {
    "articles": [
      {
        "input": "path/to/source1.md",
        "output": "NewArticle1.tsx",
        "metadata": {
          "title": "Article Title",
          "category": "AI Workflow",
          "date": "December 7, 2024",
          "readTime": "7 min read"
        }
      },
      {
        "input": "path/to/source2.md",
        "output": "NewArticle2.tsx",
        "metadata": { ... }
      }
    ]
  }

Directory Mode:
  Processes all .md files in source directory:
  node batch-rewrite-articles.js --dir ./source-articles/ --output ./output/

Examples:
  # Using config file
  node batch-rewrite-articles.js --config batch-config.json

  # Process directory
  node batch-rewrite-articles.js --dir ./drafts/ --output ./client/src/pages/articles/
`);
  process.exit(0);
}

/**
 * Build prompt for Claude
 */
function buildPrompt(articleContent, metadata, voiceToneGuidelines) {
  const metadataContext = metadata ? `
=== ARTICLE METADATA ===

Title: ${metadata.title || 'Not specified'}
Category: ${metadata.category || 'Not specified'}
Target Date: ${metadata.date || 'Not specified'}
Target Read Time: ${metadata.readTime || '7-9 min'}

Use this metadata when generating the article component.
` : '';

  return `You are helping Ryan Winzenburg rewrite an article from his project site into his authentic brand voice for winzenburg.com.

${voiceToneGuidelines}

=== YOUR TASK ===

Transform the article below from its current style (likely technical/dry) into Ryan's authentic "Playful Thought Leader" voice while maintaining technical accuracy and adding strategic insights.

${metadataContext}

=== TRANSFORMATION REQUIREMENTS ===

1. VOICE AND TONE:
   - Write as Ryan in first person ("I've learned...", "Here's what I discovered...")
   - Use conversational, coffee-shop-friend tone
   - Include personal anecdotes and experiences (infer from the technical content what Ryan might have experienced)
   - Add self-deprecating humor about failures
   - Use casual transitions: "Here's the thing...", "Plot twist:", "Real talk:"
   - Mix sentence lengths for rhythm (short punchy ones, then longer explanatory ones)

2. CONTENT STRUCTURE:
   - Start with a compelling hook (story, provocative statement, or pain point)
   - Transform bullet lists into narrative prose with context and examples
   - Include specific metrics and data points from the original
   - Add strategic context beyond just tactics
   - End with actionable or thought-provoking conclusion

3. TECHNICAL ACCURACY:
   - Maintain all technical accuracy from the original
   - Explain complex concepts with analogies
   - Define technical terms on first use in accessible language
   - Show authority through specifics, humility through admissions

4. VISUAL ELEMENTS:
   - Structure as long-form article with proper heading hierarchy
   - Include suggestions for pull quotes (mark with [PULL QUOTE])
   - Suggest where statistics cards could go (mark with [STATS CARD])
   - Identify places for before/after comparisons (mark with [COMPARISON])

5. FORMAT:
   - Output should be a complete React/TSX component
   - Use the same structure as existing articles in the codebase
   - Include metadata: title, date, readTime, category
   - Use Tailwind CSS classes matching the existing design system
   - Include hero image placeholder and CTA section

=== ARTICLE TO REWRITE ===

${articleContent}

=== OUTPUT FORMAT ===

Provide the complete TSX component ready to save as a .tsx file.

Remember: Sound like Ryan having coffee with a colleague, not like a content factory. Make it engaging, insightful, and genuinely helpful.`;
}

/**
 * Rewrite a single article using Claude
 */
async function rewriteArticle(articleContent, metadata, voiceToneGuidelines, anthropic) {
  const prompt = buildPrompt(articleContent, metadata, voiceToneGuidelines);

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 16000,
      temperature: 1,
      messages: [{
        role: 'user',
        content: prompt
      }]
    });

    return {
      content: message.content[0].text,
      usage: message.usage
    };
  } catch (error) {
    throw new Error(`Claude API error: ${error.message}`);
  }
}

/**
 * Load batch configuration from file
 */
function loadBatchConfig(configPath) {
  const resolvedPath = resolve(configPath);
  if (!existsSync(resolvedPath)) {
    throw new Error(`Config file not found: ${resolvedPath}`);
  }

  const configContent = readFileSync(resolvedPath, 'utf-8');
  const config = JSON.parse(configContent);

  if (!config.articles || !Array.isArray(config.articles)) {
    throw new Error('Config file must contain "articles" array');
  }

  return config.articles;
}

/**
 * Load articles from directory
 */
function loadArticlesFromDirectory(dirPath, outputDirPath) {
  const resolvedDir = resolve(dirPath);
  if (!existsSync(resolvedDir)) {
    throw new Error(`Directory not found: ${resolvedDir}`);
  }

  const files = readdirSync(resolvedDir)
    .filter(file => {
      const ext = extname(file).toLowerCase();
      return ['.md', '.txt'].includes(ext);
    })
    .map(file => {
      const baseName = basename(file, extname(file));
      // Convert filename to PascalCase for component name
      const componentName = baseName
        .split(/[-_\s]+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');

      return {
        input: join(resolvedDir, file),
        output: join(outputDirPath || resolvedDir, `${componentName}.tsx`),
        metadata: {
          title: baseName.replace(/[-_]/g, ' '),
          category: 'AI Workflow',
        }
      };
    });

  return files;
}

/**
 * Process batch of articles
 */
async function processBatch() {
  console.log('🎨 Batch Article Rewrite Script\n');
  console.log('─'.repeat(60) + '\n');

  // Validate API key
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('❌ ANTHROPIC_API_KEY environment variable not set');
    process.exit(1);
  }

  // Load voice and tone guidelines
  console.log('📚 Loading voice and tone guidelines...');
  const voiceToneGuidelines = loadVoiceAndToneFiles();
  console.log('✅ Voice and tone guidelines loaded\n');

  // Load article list
  let articles;
  if (configFile) {
    console.log(`📋 Loading batch config: ${configFile}`);
    articles = loadBatchConfig(configFile);
  } else if (sourceDir) {
    console.log(`📂 Scanning directory: ${sourceDir}`);
    articles = loadArticlesFromDirectory(sourceDir, outputDir);
  } else {
    console.error('❌ Must specify either --config or --dir');
    process.exit(1);
  }

  console.log(`📊 Found ${articles.length} article(s) to process\n`);

  // Initialize Anthropic client
  const anthropic = new Anthropic({ apiKey });

  // Process each article
  let totalInputTokens = 0;
  let totalOutputTokens = 0;
  const results = [];

  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    const articleNum = i + 1;

    console.log(`\n${'='.repeat(60)}`);
    console.log(`Processing ${articleNum}/${articles.length}: ${basename(article.input)}`);
    console.log('='.repeat(60) + '\n');

    try {
      // Read source article
      const inputPath = resolve(article.input);
      if (!existsSync(inputPath)) {
        throw new Error(`Input file not found: ${inputPath}`);
      }
      
      const articleContent = readFileSync(inputPath, 'utf-8');
      console.log(`📖 Read ${articleContent.length} characters`);

      // Rewrite article
      console.log('🤖 Calling Claude API...');
      const { content: rewrittenContent, usage } = await rewriteArticle(
        articleContent,
        article.metadata,
        voiceToneGuidelines,
        anthropic
      );

      // Save output
      const outputPath = resolve(article.output);
      writeFileSync(outputPath, rewrittenContent, 'utf-8');
      console.log(`💾 Saved to: ${outputPath}`);

      // Track usage
      totalInputTokens += usage.input_tokens;
      totalOutputTokens += usage.output_tokens;

      console.log(`📊 Tokens: ${usage.input_tokens} in / ${usage.output_tokens} out`);

      results.push({
        input: article.input,
        output: outputPath,
        success: true,
        usage
      });

      console.log('✅ Success!');

      // Rate limiting - wait 1 second between requests
      if (i < articles.length - 1) {
        console.log('\n⏱️  Waiting 1 second before next article...');
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

    } catch (error) {
      console.error(`❌ Error: ${error.message}`);
      results.push({
        input: article.input,
        output: article.output,
        success: false,
        error: error.message
      });
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('BATCH PROCESSING COMPLETE');
  console.log('='.repeat(60) + '\n');

  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;

  console.log(`✅ Successful: ${successful}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`\n📊 Total tokens: ${totalInputTokens} in / ${totalOutputTokens} out`);
  console.log(`📊 Grand total: ${totalInputTokens + totalOutputTokens} tokens\n`);

  if (failed > 0) {
    console.log('Failed articles:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`  - ${r.input}: ${r.error}`);
    });
    console.log();
  }

  console.log('📋 Next Steps:\n');
  console.log('1. Review each rewritten article for voice consistency');
  console.log('2. Add visual elements (pull quotes, stats cards)');
  console.log('3. Update Articles.tsx with metadata for each article');
  console.log('4. Test locally and deploy\n');
}

// Run the script
processBatch().catch((error) => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});

