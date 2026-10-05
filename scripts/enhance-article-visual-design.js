#!/usr/bin/env node

/**
 * Article Visual Enhancement Script
 * 
 * Takes plain article content and wraps it with proper visual design:
 * - Consistent layout structure (nav, back button, hero, meta)
 * - Pull quotes for key insights
 * - Statistics cards for metrics
 * - Comparison cards for before/after
 * - Proper typography and spacing
 */

import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Reference article for design patterns
const REFERENCE_ARTICLE_PATH = path.join(
  __dirname,
  '../client/src/pages/articles/AIAugmentedWorkflow.tsx'
);

const DESIGN_SYSTEM_PROMPT = `You are enhancing an article's visual design to match an established design system.

CRITICAL RULES:
1. Keep ALL existing content - don't remove or significantly rewrite text
2. Wrap content in proper React/JSX structure matching the reference
3. Add visual components where appropriate:
   - Pull quotes for key insights (border-l-4 border-cyan-500 style)
   - Statistics cards for metrics (grid layout with numbers)
   - Comparison cards for before/after or traditional vs new approaches
4. Use the exact styling classes from the reference article
5. Maintain the article's voice and content - only enhance the visual presentation

LAYOUT STRUCTURE (copy exactly from reference):
- ResponsiveNav at top
- Back link to /articles
- Hero image from /images/articles/<slug>-hero.webp (do not use a shared placeholder)
- Article metadata (date, reading time)
- Title and subtitle in proper typography
- Body with prose prose-invert prose-lg styling
- NewsletterSignup at bottom
- Next article link

VISUAL COMPONENTS TO ADD:
- Pull quotes: Use for standout insights (every 3-4 paragraphs)
- Stat cards: Use when metrics/numbers are mentioned
- Comparison cards: Use for before/after, old vs new approaches
- Section headings: Ensure h2 and h3 are properly styled

Return ONLY the complete, properly formatted .tsx file content.`;

async function enhanceArticleVisuals(articlePath, referenceContent) {
  console.log(`\n📝 Enhancing: ${path.basename(articlePath)}`);
  
  // Read the current article
  const currentContent = await fs.readFile(articlePath, 'utf-8');
  
  // Check if already enhanced (has ResponsiveNav)
  if (currentContent.includes('ResponsiveNav')) {
    console.log('   ⏭️  Already enhanced, skipping');
    return { skipped: true };
  }
  
  console.log('   🤖 Calling Claude to enhance visuals...');
  
  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 16000,
    temperature: 0.3,
    messages: [
      {
        role: 'user',
        content: `I need you to enhance this article's visual design to match our design system.

REFERENCE ARTICLE (use this as the template):
${referenceContent}

ARTICLE TO ENHANCE:
${currentContent}

Instructions:
1. Keep ALL the article's existing content and voice
2. Wrap it in the exact layout structure from the reference
3. Add visual components (pull quotes, stat cards, comparison cards) where appropriate
4. Use the same styling classes and patterns
5. Return ONLY the complete .tsx file - no explanations

Important:
- Import ResponsiveNav and NewsletterSignup
- Use the article's own /images/articles/<slug>-hero.webp for the hero
- Extract a compelling subtitle from the first paragraph
- Add proper section breaks and visual hierarchy
- Identify key metrics and wrap in stat cards
- Find contrasts/comparisons and use comparison cards
- Pull out 2-3 key insights as pull quotes`,
      },
    ],
  });
  
  const enhancedContent = message.content[0].text;
  
  // Clean up any markdown code fences if Claude added them
  let cleanedContent = enhancedContent
    .replace(/^```tsx\n/, '')
    .replace(/^```typescript\n/, '')
    .replace(/^```\n/, '')
    .replace(/\n```$/, '');
  
  // Write the enhanced version
  await fs.writeFile(articlePath, cleanedContent, 'utf-8');
  
  console.log('   ✅ Enhanced successfully');
  
  return {
    skipped: false,
    inputTokens: message.usage.input_tokens,
    outputTokens: message.usage.output_tokens,
  };
}

async function main() {
  const articlesDir = path.join(__dirname, '../client/src/pages/articles');
  
  // Read reference article
  console.log('📖 Loading reference article...');
  const referenceContent = await fs.readFile(REFERENCE_ARTICLE_PATH, 'utf-8');
  
  // Get all article files
  const files = await fs.readdir(articlesDir);
  const articleFiles = files
    .filter(f => f.endsWith('.tsx'))
    .filter(f => !['AIAugmentedWorkflow.tsx', 'AiPoweredMarketValidation.tsx', 
                   'AudienceFirstGoToMarket.tsx', 'MVPStrategy.tsx', 
                   'MonetizationStrategy.tsx', 'ScalingStrategy.tsx',
                   'DesignSystem4Weeks.tsx', 'AITechStack.tsx',
                   'DesignSystemsFail.tsx'].includes(f)); // Skip existing good articles
  
  console.log(`\n🎨 Enhancing ${articleFiles.length} articles...\n`);
  
  let totalInput = 0;
  let totalOutput = 0;
  let enhanced = 0;
  let skipped = 0;
  
  // Process articles ONE AT A TIME to avoid rate limits
  for (let i = 0; i < articleFiles.length; i++) {
    const file = articleFiles[i];
    
    console.log(`\n--- Article ${i + 1} of ${articleFiles.length} ---`);
    
    const result = await enhanceArticleVisuals(
      path.join(articlesDir, file),
      referenceContent
    );
    
    if (result.skipped) {
      skipped++;
    } else {
      enhanced++;
      totalInput += result.inputTokens;
      totalOutput += result.outputTokens;
    }
    
    // Pause 10 seconds between articles to respect rate limits
    if (i + 1 < articleFiles.length) {
      console.log('   ⏸️  Pausing 10 seconds for rate limits...');
      await new Promise(resolve => setTimeout(resolve, 10000));
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('✨ ENHANCEMENT COMPLETE');
  console.log('='.repeat(60));
  console.log(`📊 Enhanced: ${enhanced} articles`);
  console.log(`⏭️  Skipped: ${skipped} articles (already enhanced)`);
  console.log(`🔢 Total input tokens: ${totalInput.toLocaleString()}`);
  console.log(`🔢 Total output tokens: ${totalOutput.toLocaleString()}`);
  
  const estimatedCost = (totalInput / 1000000 * 3) + (totalOutput / 1000000 * 15);
  console.log(`💰 Estimated cost: $${estimatedCost.toFixed(2)}`);
  console.log('\n🎉 All articles enhanced with professional visual design!');
  console.log('\n📋 Next steps:');
  console.log('   1. Review the enhanced articles locally: npm run dev');
  console.log('   2. Add real hero images to replace placeholders');
  console.log('   3. Commit and deploy: git add . && git commit -m "Enhance article visual design"');
}

main().catch(error => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});

