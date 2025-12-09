#!/usr/bin/env node

/**
 * Light to Dark Theme Converter
 * 
 * Converts light-themed articles to dark theme with proper layout
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const articlesDir = path.join(__dirname, '../client/src/pages/articles');

// Articles that need conversion
const ARTICLES_TO_CONVERT = [
  'TheProblemWhyMostSaasStartupsFailBeforeTheyEvenStart.tsx',
  'TheRuleConsolidationHowWeKept40PlusRulesManageable.tsx',
  'TheRulesAndAgentsSystemMakingTheProcessRepeatable.tsx',
];

// Article metadata
const ARTICLE_META = {
  'TheProblemWhyMostSaasStartupsFailBeforeTheyEvenStart.tsx': {
    title: 'The Problem: Why Most SaaS Startups Fail Before They Even Start',
    date: 'November 10, 2024',
    readTime: '7 min read',
  },
  'TheRuleConsolidationHowWeKept40PlusRulesManageable.tsx': {
    title: 'The Rule Consolidation: How We Kept 40+ Rules Manageable',
    date: 'December 7, 2024',
    readTime: '6 min read',
  },
  'TheRulesAndAgentsSystemMakingTheProcessRepeatable.tsx': {
    title: 'The Rules and Agents System: Making the Process Repeatable',
    date: 'December 6, 2024',
    readTime: '8 min read',
  },
};

function convertThemeClasses(content) {
  let converted = content;
  
  // Text colors
  converted = converted.replace(/text-gray-900/g, 'text-white');
  converted = converted.replace(/text-gray-800/g, 'text-slate-100');
  converted = converted.replace(/text-gray-700/g, 'text-slate-300');
  converted = converted.replace(/text-gray-600/g, 'text-slate-400');
  converted = converted.replace(/text-gray-500/g, 'text-slate-500');
  
  // Background gradients
  converted = converted.replace(/from-blue-50 to-indigo-50/g, 'from-cyan-900/20 to-blue-900/20');
  converted = converted.replace(/from-red-100 to-orange-100/g, 'from-red-900/20 to-orange-900/20');
  converted = converted.replace(/from-blue-100 to-indigo-100/g, 'from-cyan-900/30 to-blue-900/30');
  
  // Background colors
  converted = converted.replace(/bg-blue-100/g, 'bg-cyan-900/30');
  converted = converted.replace(/bg-blue-50/g, 'bg-cyan-900/20');
  converted = converted.replace(/bg-gray-50/g, 'bg-slate-900/50');
  converted = converted.replace(/bg-gray-100/g, 'bg-slate-900/30');
  
  // Badge/tag colors
  converted = converted.replace(/bg-blue-100 text-blue-800/g, 'bg-cyan-900/30 text-cyan-400');
  converted = converted.replace(/text-blue-800/g, 'text-cyan-400');
  
  // Borders
  converted = converted.replace(/border-gray-200/g, 'border-slate-800');
  converted = converted.replace(/border-gray-300/g, 'border-slate-700');
  converted = converted.replace(/border-blue-200/g, 'border-cyan-700/50');
  
  // Prose
  converted = converted.replace(/prose prose-lg/g, 'prose prose-invert prose-lg');
  
  return converted;
}

function wrapWithLayout(content, filename) {
  const meta = ARTICLE_META[filename];
  if (!meta) {
    console.log(`   ⚠️  No metadata for ${filename}`);
    return null;
  }

  // Extract component name
  const componentMatch = content.match(/(?:const|function) (\w+)/);
  if (!componentMatch) {
    console.log(`   ⚠️  No component found in ${filename}`);
    return null;
  }
  
  let componentName = componentMatch[1];
  if (componentName === 'Article') {
    componentName = filename.replace('.tsx', '');
  }

  // Extract the main content (everything inside the article tag)
  const articleMatch = content.match(/<article[^>]*>([\s\S]*)<\/article>/);
  if (!articleMatch) {
    console.log(`   ⚠️  No article tag found in ${filename}`);
    return null;
  }
  
  let articleContent = articleMatch[1];
  
  // Remove the old header section (everything before main content div)
  articleContent = articleContent.replace(/^[\s\S]*?(<div className="prose prose-invert prose-lg max-w-none">)/, '$1');
  
  // Convert theme classes in the content
  articleContent = convertThemeClasses(articleContent);

  return `import { ArrowLeft, ArrowRight } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";
import ResponsiveNav from "@/components/ResponsiveNav";
import { Link } from "wouter";

export default function ${componentName}() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ResponsiveNav currentPage="articles" />

      {/* Article Header */}
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Link */}
          <Link href="/articles">
            <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </a>
          </Link>

          {/* Hero Image Placeholder */}
          <div className="mb-12 rounded-lg overflow-hidden bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/30">
            <div className="aspect-video flex items-center justify-center">
              <p className="text-slate-500 text-sm">Hero image placeholder</p>
            </div>
          </div>

          {/* Article Meta */}
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
            <span>${meta.date}</span>
            <span>•</span>
            <span>${meta.readTime}</span>
          </div>

          {/* Article Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              ${meta.title}
            </h1>
          </div>

          {/* Article Body */}
          ${articleContent}

          {/* Newsletter Signup */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <NewsletterSignup />
          </div>

          {/* Next Article Link */}
          <div className="mt-12">
            <Link href="/articles">
              <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to all articles
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
`;
}

async function convertArticle(filename) {
  console.log(`\n📝 Converting: ${filename}`);
  
  const filePath = path.join(articlesDir, filename);
  const content = await fs.readFile(filePath, 'utf-8');
  
  // Check if already has ResponsiveNav
  if (content.includes('ResponsiveNav')) {
    console.log('   ⏭️  Already converted, skipping');
    return { skipped: true };
  }
  
  const converted = wrapWithLayout(content, filename);
  
  if (!converted) {
    return { skipped: true, error: true };
  }
  
  await fs.writeFile(filePath, converted, 'utf-8');
  console.log('   ✅ Converted successfully');
  
  return { skipped: false };
}

async function main() {
  console.log('🎨 Converting Light Theme Articles to Dark Theme\n');
  console.log(`📊 Converting ${ARTICLES_TO_CONVERT.length} articles...\n`);
  
  let converted = 0;
  let skipped = 0;
  let errors = 0;
  
  for (const filename of ARTICLES_TO_CONVERT) {
    const result = await convertArticle(filename);
    
    if (result.error) {
      errors++;
    } else if (result.skipped) {
      skipped++;
    } else {
      converted++;
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('✨ CONVERSION COMPLETE');
  console.log('='.repeat(60));
  console.log(`✅ Converted: ${converted} articles`);
  console.log(`⏭️  Skipped: ${skipped} articles`);
  console.log(`❌ Errors: ${errors} articles`);
  
  if (converted > 0) {
    console.log('\n🎉 All articles now have consistent dark theme design!');
    console.log('\n📋 Next steps:');
    console.log('   1. Test locally: npm run dev');
    console.log('   2. Commit: git add . && git commit -m "Convert final articles to dark theme"');
    console.log('   3. Deploy: netlify deploy --prod');
  }
}

main().catch(error => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});

