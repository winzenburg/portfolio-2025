#!/usr/bin/env node

/**
 * Article Rewrite Script - Transform Articles into Brand Voice
 * 
 * Takes technical or dry articles from project sites and rewrites them
 * in Ryan's authentic brand voice using established voice and tone guidelines.
 * 
 * Usage:
 *   node rewrite-article-to-brand-voice.js --input article.md --output NewArticle.tsx
 *   node rewrite-article-to-brand-voice.js --url https://example.com/article
 *   node rewrite-article-to-brand-voice.js --interactive
 */

import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, basename, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
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

const inputFile = getArg('--input') || getArg('-i');
const outputFile = getArg('--output') || getArg('-o');
const url = getArg('--url');
const dryRun = hasFlag('--dry-run');
const interactive = hasFlag('--interactive') || (!inputFile && !url);
const help = hasFlag('--help') || hasFlag('-h');

// Show help
if (help) {
  console.log(`
Article Rewrite Script - Transform Articles into Brand Voice

Usage:
  node rewrite-article-to-brand-voice.js [options]

Options:
  -i, --input <file>     Input file path (markdown or text)
  -o, --output <file>    Output file path (defaults to stdout)
  --url <url>            Fetch article from URL
  --interactive          Interactive mode (prompts for input)
  --dry-run              Show prompt without calling API
  -h, --help             Show this help message

Examples:
  # Rewrite from file
  node rewrite-article-to-brand-voice.js -i article.md -o NewArticle.tsx

  # Rewrite from URL
  node rewrite-article-to-brand-voice.js --url https://example.com/article

  # Interactive mode
  node rewrite-article-to-brand-voice.js --interactive

  # Preview prompt only
  node rewrite-article-to-brand-voice.js -i article.md --dry-run
`);
  process.exit(0);
}

/**
 * Load article content from various sources
 */
async function loadArticleContent() {
  let content = '';
  let sourceInfo = '';

  if (url) {
    console.log(`📡 Fetching article from URL: ${url}`);
    try {
      const response = await fetch(url);
      const html = await response.text();
      
      // Basic HTML to text conversion (you might want to use a library like cheerio for better parsing)
      content = html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      
      sourceInfo = `URL: ${url}`;
      console.log(`✅ Fetched ${content.length} characters\n`);
    } catch (error) {
      console.error(`❌ Error fetching URL: ${error.message}`);
      process.exit(1);
    }
  } else if (inputFile) {
    const filePath = resolve(inputFile);
    if (!existsSync(filePath)) {
      console.error(`❌ File not found: ${filePath}`);
      process.exit(1);
    }
    
    console.log(`📖 Reading article from: ${filePath}`);
    content = readFileSync(filePath, 'utf-8');
    sourceInfo = `File: ${basename(filePath)}`;
    console.log(`✅ Loaded ${content.length} characters\n`);
  } else if (interactive) {
    console.log('📝 Interactive mode - paste your article content below.');
    console.log('   (Press Ctrl+D when finished, or Ctrl+C to cancel)\n');
    
    const readline = await import('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    
    const lines = [];
    for await (const line of rl) {
      lines.push(line);
    }
    content = lines.join('\n');
    sourceInfo = 'Interactive input';
    console.log(`\n✅ Loaded ${content.length} characters\n`);
  } else {
    console.error('❌ No input source specified. Use --input, --url, or --interactive');
    console.log('   Run with --help for usage information');
    process.exit(1);
  }

  return { content, sourceInfo };
}

/**
 * Build the prompt for Claude with voice/tone guidelines
 */
function buildPrompt(articleContent, voiceToneGuidelines) {
  return `You are helping Ryan Winzenburg rewrite an article from his project site into his authentic brand voice for winzenburg.com.

${voiceToneGuidelines}

=== YOUR TASK ===

Transform the article below from its current style (likely technical/dry) into Ryan's authentic "Playful Thought Leader" voice while maintaining technical accuracy and adding strategic insights.

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
   - Include metadata comments at top: title, date, readTime, category
   - Use Tailwind CSS classes matching the existing design system
   - Include hero image placeholder and CTA section

=== ARTICLE TO REWRITE ===

${articleContent}

=== OUTPUT FORMAT ===

Provide the complete TSX component with:
1. Component metadata in comments
2. Hero section with image and article metadata
3. Full article content in narrative prose style
4. Visual element markers for enhancement
5. Next article link (placeholder)
6. CTA section

Remember: Sound like Ryan having coffee with a colleague, not like a content factory. Make it engaging, insightful, and genuinely helpful.`;
}

/**
 * Call Claude API to rewrite the article
 */
async function rewriteArticle(prompt) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  
  if (!apiKey) {
    console.error('❌ ANTHROPIC_API_KEY environment variable not set');
    console.log('   Set it with: export ANTHROPIC_API_KEY=your_key_here');
    process.exit(1);
  }

  console.log('🤖 Calling Claude API to rewrite article...\n');
  
  const anthropic = new Anthropic({ apiKey });
  
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

    const rewrittenContent = message.content[0].text;
    
    console.log('✅ Article rewritten successfully!\n');
    console.log(`📊 Input tokens: ${message.usage.input_tokens}`);
    console.log(`📊 Output tokens: ${message.usage.output_tokens}`);
    console.log(`📊 Total tokens: ${message.usage.input_tokens + message.usage.output_tokens}\n`);
    
    return rewrittenContent;
  } catch (error) {
    console.error('❌ Error calling Claude API:', error.message);
    if (error.status === 401) {
      console.log('   Check that your ANTHROPIC_API_KEY is valid');
    }
    process.exit(1);
  }
}

/**
 * Save output to file or stdout
 */
function saveOutput(content, outputPath) {
  if (outputPath) {
    const resolvedPath = resolve(outputPath);
    console.log(`💾 Saving to: ${resolvedPath}`);
    writeFileSync(resolvedPath, content, 'utf-8');
    console.log('✅ File saved successfully!\n');
  } else {
    console.log('\n=== REWRITTEN ARTICLE ===\n');
    console.log(content);
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🎨 Article Rewrite Script - Transform to Brand Voice\n');
  console.log('─'.repeat(60) + '\n');

  // Load article content
  const { content: articleContent, sourceInfo } = await loadArticleContent();

  // Load voice and tone guidelines
  console.log('📚 Loading voice and tone guidelines...');
  let voiceToneGuidelines;
  try {
    voiceToneGuidelines = loadVoiceAndToneFiles();
    console.log('✅ Voice and tone guidelines loaded\n');
  } catch (error) {
    console.error('❌ Error loading voice/tone files:', error.message);
    process.exit(1);
  }

  // Build prompt
  const prompt = buildPrompt(articleContent, voiceToneGuidelines);

  // Dry run - just show the prompt
  if (dryRun) {
    console.log('\n=== PROMPT PREVIEW (DRY RUN) ===\n');
    console.log(prompt);
    console.log('\n=== END PROMPT ===\n');
    console.log('ℹ️  Dry run complete. Remove --dry-run flag to actually rewrite the article.');
    return;
  }

  // Rewrite the article
  const rewrittenArticle = await rewriteArticle(prompt);

  // Save or display output
  saveOutput(rewrittenArticle, outputFile);

  // Show next steps
  console.log('📋 Next Steps:\n');
  console.log('1. Review the rewritten article for voice consistency');
  console.log('2. Add visual elements (pull quotes, stats cards, comparisons)');
  console.log('3. Update Articles.tsx with article metadata');
  console.log('4. Test locally: npm run dev');
  console.log('5. Deploy when satisfied\n');
  
  console.log('💡 Tip: See ARTICLE_REWRITE_WORKFLOW.md for full workflow details\n');
}

// Run the script
main().catch((error) => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});

