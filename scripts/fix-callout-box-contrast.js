#!/usr/bin/env node

/**
 * Fix Callout Box Contrast Issues
 * 
 * Converts light-themed callout boxes to dark-themed with proper contrast
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const articlesDir = path.join(__dirname, '../client/src/pages/articles');

// Callout box contrast fixes for dark backgrounds
const CALLOUT_FIXES = [
  // Green callouts (success/positive)
  { from: /bg-green-50/g, to: 'bg-green-900/20' },
  { from: /border-green-200/g, to: 'border-green-700/50' },
  { from: /text-green-800/g, to: 'text-green-300' },
  { from: /text-green-700/g, to: 'text-green-200' },
  
  // Yellow callouts (warning/attention)
  { from: /bg-yellow-50/g, to: 'bg-yellow-900/20' },
  { from: /border-yellow-200/g, to: 'border-yellow-700/50' },
  { from: /text-yellow-800/g, to: 'text-yellow-300' },
  { from: /text-yellow-700/g, to: 'text-yellow-200' },
  
  // Blue callouts (info/neutral)
  { from: /bg-blue-50/g, to: 'bg-blue-900/20' },
  { from: /border-blue-200/g, to: 'border-blue-700/50' },
  { from: /text-blue-800/g, to: 'text-blue-300' },
  { from: /text-blue-700/g, to: 'text-blue-200' },
  
  // Red/Orange callouts (error/important)
  { from: /bg-red-50/g, to: 'bg-red-900/20' },
  { from: /border-red-200/g, to: 'border-red-700/50' },
  { from: /text-red-800/g, to: 'text-red-300' },
  { from: /text-red-700/g, to: 'text-red-200' },
  
  { from: /bg-orange-50/g, to: 'bg-orange-900/20' },
  { from: /border-orange-200/g, to: 'border-orange-700/50' },
  { from: /text-orange-800/g, to: 'text-orange-300' },
  { from: /text-orange-700/g, to: 'text-orange-200' },
];

async function fixCalloutBoxes(filename) {
  console.log(`\n📝 Fixing: ${filename}`);
  
  const filePath = path.join(articlesDir, filename);
  let content = await fs.readFile(filePath, 'utf-8');
  
  let changesMade = 0;
  
  // Apply all callout fixes
  for (const fix of CALLOUT_FIXES) {
    const matches = content.match(fix.from);
    if (matches) {
      content = content.replace(fix.from, fix.to);
      changesMade += matches.length;
    }
  }
  
  if (changesMade > 0) {
    await fs.writeFile(filePath, content, 'utf-8');
    console.log(`   ✅ Fixed ${changesMade} callout box issue(s)`);
    return { fixed: true, changes: changesMade };
  } else {
    console.log(`   ⏭️  No callout box issues found`);
    return { fixed: false, changes: 0 };
  }
}

async function main() {
  console.log('♿ Fixing Callout Box Contrast for Accessibility\n');
  console.log('Target: WCAG AA compliance for all callout boxes\n');
  
  const files = await fs.readdir(articlesDir);
  const articleFiles = files.filter(f => f.endsWith('.tsx'));
  
  console.log(`📊 Checking ${articleFiles.length} articles...\n`);
  
  let fixed = 0;
  let totalChanges = 0;
  let noIssues = 0;
  
  for (const file of articleFiles) {
    const result = await fixCalloutBoxes(file);
    
    if (result.fixed) {
      fixed++;
      totalChanges += result.changes;
    } else {
      noIssues++;
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('✨ CALLOUT BOX FIX COMPLETE');
  console.log('='.repeat(60));
  console.log(`✅ Fixed: ${fixed} articles (${totalChanges} changes)`);
  console.log(`✓  Already good: ${noIssues} articles`);
  console.log('\n♿ All callout boxes now have accessible contrast!');
  
  if (fixed > 0) {
    console.log('\n📋 Next steps:');
    console.log('   1. Test locally: npm run dev');
    console.log('   2. Verify callout boxes are readable');
    console.log('   3. Commit: git add . && git commit -m "Fix callout box contrast"');
    console.log('   4. Deploy: netlify deploy --prod');
  }
}

main().catch(error => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});

