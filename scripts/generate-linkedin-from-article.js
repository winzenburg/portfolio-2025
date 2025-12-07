#!/usr/bin/env node

/**
 * Generate LinkedIn Posts from Website Articles
 * 
 * This script:
 * 1. Reads a website article TSX file
 * 2. Extracts the text content (strips JSX)
 * 3. Uses Claude API to rewrite it for LinkedIn (Tuesday, Wednesday, Thursday formats)
 * 4. Saves the generated posts to linkedin-posts directory
 * 
 * Usage:
 *   node scripts/generate-linkedin-from-article.js <article-slug> [week-number]
 *   node scripts/generate-linkedin-from-article.js design-systems-fail 1
 */

import { config } from 'dotenv';
import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, join, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { loadVoiceAndToneFiles } from './load-voice-tone.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
config({ path: resolve(__dirname, '../.env') });


// Initialize Claude client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('❌ Error: ANTHROPIC_API_KEY not found in .env file');
  console.error('\nPlease add your Anthropic API key to .env:');
  console.error('  ANTHROPIC_API_KEY=your-api-key-here');
  console.error('\nGet your API key at: https://console.anthropic.com/');
  process.exit(1);
}

// Get article slug and week number from command line
const articleSlug = process.argv[2];
const weekNumber = process.argv[3] || '1';

if (!articleSlug) {
  console.error('❌ Error: Article slug required');
  console.error('\nUsage:');
  console.error('  node scripts/generate-linkedin-from-article.js <article-slug> [week-number]');
  console.error('\nExample:');
  console.error('  node scripts/generate-linkedin-from-article.js design-systems-fail 1');
  console.error('\nAvailable articles:');
  console.error('  - design-systems-fail');
  console.error('  - design-system-4-weeks');
  console.error('  - ai-augmented-workflow');
  console.error('  - ai-powered-market-validation');
  console.error('  - ai-tech-stack');
  console.error('  - audience-first-go-to-market');
  console.error('  - monetization-strategy');
  console.error('  - mvp-strategy');
  console.error('  - scaling-strategy');
  process.exit(1);
}

// Map article slugs to file names
const articleMap = {
  'design-systems-fail': 'DesignSystemsFail.tsx',
  'design-system-4-weeks': 'DesignSystem4Weeks.tsx',
  'ai-augmented-workflow': 'AIAugmentedWorkflow.tsx',
  'ai-powered-market-validation': 'AiPoweredMarketValidation.tsx',
  'ai-tech-stack': 'AITechStack.tsx',
  'audience-first-go-to-market': 'AudienceFirstGoToMarket.tsx',
  'monetization-strategy': 'MonetizationStrategy.tsx',
  'mvp-strategy': 'MVPStrategy.tsx',
  'scaling-strategy': 'ScalingStrategy.tsx',
};

const articleFileName = articleMap[articleSlug];
if (!articleFileName) {
  console.error(`❌ Error: Article "${articleSlug}" not found`);
  console.error(`\nAvailable articles: ${Object.keys(articleMap).join(', ')}`);
  process.exit(1);
}

// Paths
const articlePath = resolve(__dirname, '../client/src/pages/articles', articleFileName);
const linkedinPostsDir = resolve(__dirname, './linkedin-posts');

if (!existsSync(articlePath)) {
  console.error(`❌ Error: Article file not found: ${articlePath}`);
  process.exit(1);
}

console.log(`📖 Reading article: ${articleFileName}`);
console.log(`📅 Generating LinkedIn posts for Week ${weekNumber}\n`);

/**
 * Extract text content from TSX file
 * Removes JSX tags, extracts text from paragraphs and headings
 */
function extractArticleText(tsxContent) {
  // Remove imports and component definition
  let text = tsxContent
    .replace(/import.*?from.*?['"];?\n/g, '')
    .replace(/export default function.*?\{/s, '')
    .replace(/return\s*\(/s, '');

  // Extract text from JSX elements
  // Get all paragraph text
  const paragraphMatches = text.match(/<p[^>]*>(.*?)<\/p>/gs);
  const paragraphs = paragraphMatches
    ? paragraphMatches.map(p => {
        // Remove JSX attributes and tags, keep text
        return p
          .replace(/<[^>]+>/g, '')
          .replace(/\{.*?\}/g, '') // Remove JSX expressions
          .trim();
      })
      .filter(p => p.length > 20) // Filter out very short fragments
    : [];

  // Get headings
  const headingMatches = text.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gs);
  const headings = headingMatches
    ? headingMatches.map(h => {
        return h
          .replace(/<[^>]+>/g, '')
          .replace(/\{.*?\}/g, '')
          .trim();
      })
    : [];

  // Combine into article text
  const articleText = [...headings, ...paragraphs].join('\n\n');

  // Extract title and subtitle
  const titleMatch = text.match(/<h1[^>]*>(.*?)<\/h1>/s);
  const title = titleMatch
    ? titleMatch[1].replace(/<[^>]+>/g, '').replace(/\{.*?\}/g, '').trim()
    : '';

  const subtitleMatch = text.match(/<p[^>]*className="text-xl[^"]*">(.*?)<\/p>/s);
  const subtitle = subtitleMatch
    ? subtitleMatch[1].replace(/<[^>]+>/g, '').replace(/\{.*?\}/g, '').trim()
    : '';

  return {
    title,
    subtitle,
    content: articleText,
  };
}

/**
 * Generate LinkedIn post using Claude
 */
async function generateLinkedInPost(articleData, postType, weekNumber, articleSlug) {
  // Load all voice and tone files
  const voiceToneContent = loadVoiceAndToneFiles();
  
  const systemPrompt = `You are an expert at adapting long-form articles into LinkedIn posts. You MUST follow ALL the guidelines in the Winzenburg Voice and Tone files provided below exactly.

${voiceToneContent}

=== ADDITIONAL REQUIREMENTS ===

Your task is to rewrite a website article into a LinkedIn post format. The post must:
- Provide complete standalone value (not a teaser)
- Be optimized for LinkedIn's platform and audience
- Follow the specific format requirements for ${postType}
- Maintain first-person voice
- Include all key data points and metrics
- Create natural curiosity for implementation details on the website
- Sound unmistakably human by following the Authenticity Quick Guide

LinkedIn Format Requirements:
- Lead with narrative hooks; no bullet lists unless absolutely necessary
- Use short paragraphs (2-3 sentences max) to keep the story moving
- Keep it in first-person storytelling voice (share moments, not outlines)
- Bold headers for section breaks (use **bold**)
- Strategic use of emojis (1️⃣ 2️⃣ 3️⃣) or checkmarks (✅ ✗) when they add emphasis, not structure
- Horizontal rules (---) to separate major sections
- First 2 lines must stop the scroll (shown in feed preview)
- End with clear engagement question
- Use 2-4 hashtags max

Storytelling Requirements:
- Write as a flowing narrative with transitions; avoid bullet lists and numbered frameworks
- Show the arc: observation → tension → what you tried → what actually worked → the metric-backed payoff
- Embed details inline ("we spent 12 months and $1M") instead of isolating them in bullets
- Use conversational transitions ("Here's the twist", "Let me back up") to keep it human
- Balance stakes with optimism: acknowledge the pain, then quickly pivot to the hopeful turnaround
- Include at least one playful or self-deprecating aside that makes the reader grin
- Close with an empowering takeaway so executives feel energized, not exhausted

${postType === 'Tuesday' ? `
Tuesday - Complete LinkedIn Article Format:
- 800-1000 words (~3-4 min read)
- Complete narrative arc (problem → solution → results)
- Structure:
  1. Hook (2-3 paragraphs) - The pattern you've observed
  2. Problem Section - All core problems explained with examples
  3. Solution Section - All AI-powered solutions with real examples
  4. Results Section - Specific metrics and outcomes
  5. Mindset Shift - The fundamental change required
  6. Natural CTA - Transition to implementation details on website
  7. Engagement Question - Drive comments and discussion
` : postType === 'Thursday' ? `
Thursday - Case Study Story Format:
- 500 words (~2 min read)
- Story-driven narrative
- Structure:
  1. Opening quote or moment
  2. The situation (where they were stuck)
  3. The diagnosis (what was wrong)
  4. The transformation (what changed)
  5. The results (specific metrics)
  6. The lesson (what this teaches us)
  7. Link to full case study (mention article URL)
` : ''}

Authenticity Requirements:
- Include at least two of these recurring phrases: "Here's the thing though...", "Real talk:", "Plot twist:", "Spoiler alert:", "Let me back up for a second..."
- Reference at least one real moment with a concrete timestamp, metric, or count (e.g., "Last Tuesday at 3 PM...")
- Admit at least one mistake, limitation, or learning (e.g., "I screwed this up twice before...")
- Allow imperfect thinking: occasional tangents, backtracking, or parenthetical asides
- Use conversational quirks: sentence fragments, one-sentence paragraphs, em-dashes, rhetorical questions, contractions
- Vary sentence length (short, medium, long) throughout the post
- Show real emotions ("This blew my mind", "Not gonna lie, I was frustrated...")
- Use specific numbers (6-hour task → 22 minutes, 23 PMs, etc.)
- Absolutely avoid corporate/AI tells: never open with "In today's fast-paced world..." or similar, and never use transitions like "Furthermore", "Moreover", "Additionally", "Subsequently", "In conclusion"
- Do not use phrases such as "It's important to note...", "One might consider...", "Users may find...", "Consider the following..."

IMPORTANT: The voice and tone guidelines above are your PRIMARY source of truth. Follow them exactly. The requirements below are supplementary:

Output ONLY the LinkedIn post content. Do not include any meta information, explanations, or markdown formatting beyond what's specified above.`;

  const articleUrl = `https://winzenburg.github.io/portfolio-2025/articles/${articleSlug}`;

  const userPrompt = `Rewrite this website article into a ${postType} LinkedIn post:

TITLE: ${articleData.title}

SUBTITLE: ${articleData.subtitle}

ARTICLE CONTENT:
${articleData.content}

Generate the LinkedIn post now. Include a natural CTA that mentions the full article is available at ${articleUrl} with implementation details, tools, and frameworks.`;

  try {
    // Try best model first, fallback to available model
    let message;
    const modelsToTry = [
      'claude-3-5-sonnet-20241022',
      'claude-3-5-sonnet-20240620',
      'claude-3-sonnet-20240229',
      'claude-3-haiku-20240307'
    ];
    
    for (const model of modelsToTry) {
      try {
        message = await anthropic.messages.create({
          model: model,
          max_tokens: 4096,
          system: systemPrompt,
          messages: [
            {
              role: 'user',
              content: userPrompt,
            },
          ],
        });
        break; // Success, exit loop
      } catch (error) {
        if (model === modelsToTry[modelsToTry.length - 1]) {
          // Last model failed, throw error
          throw error;
        }
        // Try next model
        continue;
      }
    }

    const content = message.content[0];
    if (content.type === 'text') {
      return content.text;
    }
    throw new Error('Unexpected response format from Claude');
  } catch (error) {
    console.error(`❌ Error generating ${postType} post:`, error.message);
    throw error;
  }
}

// Main execution
(async function() {
  try {
    // Read article file
    const tsxContent = readFileSync(articlePath, 'utf-8');
    const articleData = extractArticleText(tsxContent);

    console.log(`📝 Extracted article: "${articleData.title}"`);
    console.log(`📊 Content length: ${articleData.content.length} characters\n`);

    // Generate Tuesday post (Complete LinkedIn Article)
    console.log('🤖 Generating Tuesday post (Complete LinkedIn Article)...');
    const tuesdayPost = await generateLinkedInPost(articleData, 'Tuesday', weekNumber, articleSlug);
    
    const tuesdayFileName = `STRATEGIC-week${weekNumber}-tuesday.txt`;
    const tuesdayPath = join(linkedinPostsDir, tuesdayFileName);
    writeFileSync(tuesdayPath, tuesdayPost, 'utf-8');
    console.log(`✅ Saved: ${tuesdayFileName}\n`);

    // Generate Thursday post (Case Study Story)
    console.log('🤖 Generating Thursday post (Case Study Story)...');
    const thursdayPost = await generateLinkedInPost(articleData, 'Thursday', weekNumber, articleSlug);
    
    const thursdayFileName = `STRATEGIC-week${weekNumber}-thursday.txt`;
    const thursdayPath = join(linkedinPostsDir, thursdayFileName);
    writeFileSync(thursdayPath, thursdayPost, 'utf-8');
    console.log(`✅ Saved: ${thursdayFileName}\n`);

    console.log('═══════════════════════════════════════════════════');
    console.log('✨ LinkedIn posts generated successfully!');
    console.log('═══════════════════════════════════════════════════\n');
    console.log(`📁 Files saved to: ${linkedinPostsDir}`);
    console.log(`   - ${tuesdayFileName}`);
    console.log(`   - ${thursdayFileName}\n`);
    console.log('💡 Next steps:');
    console.log('   1. Review the generated posts');
    console.log('   2. Make any necessary edits');
    console.log(`   3. Test sending: pnpm email-today\n`);

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
})();

