#!/usr/bin/env node

/**
 * Redesign Comparison Boxes
 * 
 * Converts muddy yellow/red/green comparison boxes to clean cyan brand style
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const articlesDir = path.join(__dirname, '../client/src/pages/articles');

// Redesign comparison boxes to match brand aesthetic
const COMPARISON_BOX_FIXES = [
  // Replace muddy yellow backgrounds with clean slate
  { from: /bg-yellow-900\/20/g, to: 'bg-slate-800/50' },
  { from: /border-yellow-700\/50/g, to: 'border-slate-700' },
  { from: /text-yellow-300/g, to: 'text-cyan-400' },
  { from: /text-yellow-200/g, to: 'text-slate-200' },
  
  // Replace muddy green backgrounds with clean slate
  { from: /bg-green-900\/20/g, to: 'bg-slate-800/50' },
  { from: /border-green-700\/50/g, to: 'border-slate-700' },
  { from: /text-green-300/g, to: 'text-cyan-400' },
  { from: /text-green-200/g, to: 'text-slate-200' },
  
  // Replace dark, hard-to-read text with readable colors
  { from: /text-red-600/g, to: 'text-red-300' },
  { from: /text-red-700/g, to: 'text-red-200' },
  { from: /text-green-600/g, to: 'text-green-300' },
  { from: /text-green-700/g, to: 'text-green-200' },
  { from: /text-yellow-600/g, to: 'text-yellow-300' },
  { from: /text-yellow-700/g, to: 'text-yellow-200' },
  { from: /text-blue-600/g, to: 'text-blue-300' },
  { from: /text-blue-700/g, to: 'text-blue-200' },
  
  // Replace muddy blue backgrounds
  { from: /bg-blue-900\/20/g, to: 'bg-slate-800/50' },
  { from: /border-blue-700\/50/g, to: 'border-slate-700' },
  { from: /text-blue-300/g, to: 'text-cyan-400' },
  { from: /text-blue-200/g, to: 'text-slate-200' },
];

async function redesignComparisonBoxes(filename) {
  console.log(`\n📝 Redesigning: ${filename}`);
  
  const filePath = path.join(articlesDir, filename);
  let content = await fs.readFile(filePath, 'utf-8');
  
  let changesMade = 0;
  
  // Apply all redesign fixes
  for (const fix of COMPARISON_BOX_FIXES) {
    const matches = content.match(fix.from);
    if (matches) {
      content = content.replace(fix.from, fix.to);
      changesMade += matches.length;
    }
  }
  
  if (changesMade > 0) {
    await fs.writeFile(filePath, content, 'utf-8');
    console.log(`   ✅ Redesigned ${changesMade} element(s)`);
    return { fixed: true, changes: changesMade };
  } else {
    console.log(`   ⏭️  No comparison boxes to redesign`);
    return { fixed: false, changes: 0 };
  }
}

async function main() {
  console.log('🎨 Redesigning Comparison Boxes to Brand Aesthetic\n');
  console.log('New Style: Clean slate backgrounds with cyan accents\n');
  
  const files = await fs.readdir(articlesDir);
  const articleFiles = files.filter(f => f.endsWith('.tsx'));
  
  console.log(`📊 Checking ${articleFiles.length} articles...\n`);
  
  let fixed = 0;
  let totalChanges = 0;
  let noIssues = 0;
  
  for (const file of articleFiles) {
    const result = await redesignComparisonBoxes(file);
    
    if (result.fixed) {
      fixed++;
      totalChanges += result.changes;
    } else {
      noIssues++;
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('✨ REDESIGN COMPLETE');
  console.log('='.repeat(60));
  console.log(`✅ Redesigned: ${fixed} articles (${totalChanges} changes)`);
  console.log(`✓  Already good: ${noIssues} articles`);
  console.log('\n🎨 All comparison boxes now match your brand aesthetic!');
  
  if (fixed > 0) {
    console.log('\n📋 Next steps:');
    console.log('   1. Test locally: npm run dev');
    console.log('   2. Verify clean, readable design');
    console.log('   3. Commit: git add . && git commit -m "Redesign comparison boxes"');
    console.log('   4. Deploy: netlify deploy --prod');
  }
}

main().catch(error => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});

