#!/usr/bin/env node

/**
 * Remove Placeholder Indicators
 * 
 * Removes [PULL QUOTE], [STATS CARD], [STAT CARD] and similar indicators
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const articlesDir = path.join(__dirname, '../client/src/pages/articles');

// Patterns to remove
const PLACEHOLDER_PATTERNS = [
  /\[PULL QUOTE\]\s*/gi,
  /\[STATS? CARD\]\s*/gi,
  /\[COMPARISON CARD\]\s*/gi,
  /\[VISUAL\]\s*/gi,
  /\[IMAGE\]\s*/gi,
  /\[CHART\]\s*/gi,
  /\[DIAGRAM\]\s*/gi,
  /\[CALLOUT\]\s*/gi,
];

async function cleanArticle(filename) {
  console.log(`\n📝 Cleaning: ${filename}`);
  
  const filePath = path.join(articlesDir, filename);
  let content = await fs.readFile(filePath, 'utf-8');
  
  let changesMade = 0;
  
  // Remove all placeholder patterns
  for (const pattern of PLACEHOLDER_PATTERNS) {
    const matches = content.match(pattern);
    if (matches) {
      content = content.replace(pattern, '');
      changesMade += matches.length;
    }
  }
  
  if (changesMade > 0) {
    await fs.writeFile(filePath, content, 'utf-8');
    console.log(`   ✅ Removed ${changesMade} placeholder(s)`);
    return { cleaned: true, changes: changesMade };
  } else {
    console.log(`   ⏭️  No placeholders found`);
    return { cleaned: false, changes: 0 };
  }
}

async function main() {
  console.log('🧹 Removing Placeholder Indicators\n');
  
  const files = await fs.readdir(articlesDir);
  const articleFiles = files.filter(f => f.endsWith('.tsx'));
  
  console.log(`📊 Checking ${articleFiles.length} articles...\n`);
  
  let cleaned = 0;
  let totalChanges = 0;
  let noPlaceholders = 0;
  
  for (const file of articleFiles) {
    const result = await cleanArticle(file);
    
    if (result.cleaned) {
      cleaned++;
      totalChanges += result.changes;
    } else {
      noPlaceholders++;
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('✨ CLEANUP COMPLETE');
  console.log('='.repeat(60));
  console.log(`✅ Cleaned: ${cleaned} articles (${totalChanges} placeholders removed)`);
  console.log(`✓  Already clean: ${noPlaceholders} articles`);
  
  if (cleaned > 0) {
    console.log('\n📋 Next steps:');
    console.log('   1. Test locally: npm run dev');
    console.log('   2. Commit: git add . && git commit -m "Remove placeholder indicators from articles"');
    console.log('   3. Deploy: netlify deploy --prod');
  }
}

main().catch(error => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});

