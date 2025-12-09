#!/usr/bin/env node

/**
 * Quick Article Layout Wrapper
 * 
 * Wraps existing article content with proper layout structure
 * without needing AI - just applies the template mechanically.
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const articlesDir = path.join(__dirname, '../client/src/pages/articles');

// Article metadata mapping
const articleMeta = {
  'NeverShipOutdatedCodeHowWeUseContext7ToQueryLiveDocs.tsx': {
    title: 'Never Ship Outdated Code: How We Use Context7 to Query Live Docs',
    date: 'December 10, 2024',
    readTime: '7 min read',
  },
  'TheAiOrchestrationHowToConnectMultipleAiToolsInASystematicWorkflow.tsx': {
    title: 'The AI Orchestration: How to Connect Multiple AI Tools in a Systematic Workflow',
    date: 'December 8, 2024',
    readTime: '9 min read',
  },
  'TheAiToolStackCoordinatingSevenAisWithoutChaos.tsx': {
    title: 'The AI Tool Stack: Coordinating Seven AIs Without Chaos',
    date: 'December 2, 2024',
    readTime: '8 min read',
  },
  'TheBrandFirstValidationDesigningIdentityBeforeCode.tsx': {
    title: 'The Brand-First Validation: Designing Identity Before Code',
    date: 'November 28, 2024',
    readTime: '6 min read',
  },
  'TheCompleteWorkflowDiscoveryToDeploymentIn2025.tsx': {
    title: 'The Complete Workflow: Discovery to Deployment in 2025',
    date: 'December 15, 2024',
    readTime: '12 min read',
  },
  'TheDevQualityAssistantTestPlanningBeforeCode.tsx': {
    title: 'The Dev Quality Assistant: Test Planning Before Code',
    date: 'November 25, 2024',
    readTime: '7 min read',
  },
  'TheDocumentationSystemMakingKnowledgeRepeatableAndAuditable.tsx': {
    title: 'The Documentation System: Making Knowledge Repeatable and Auditable',
    date: 'December 5, 2024',
    readTime: '8 min read',
  },
  'TheGamificationThatDoesntManipulateHabitLoopsDoneRight.tsx': {
    title: 'The Gamification That Doesn\'t Manipulate: Habit Loops Done Right',
    date: 'November 20, 2024',
    readTime: '6 min read',
  },
  'TheHubAMetaProjectForManagingYourProductPortfolio.tsx': {
    title: 'The Hub: A Meta-Project for Managing Your Product Portfolio',
    date: 'December 12, 2024',
    readTime: '8 min read',
  },
  'TheHubEvolutionFromStaticDocsToDecisionDashboard.tsx': {
    title: 'The Hub Evolution: From Static Docs to Decision Dashboard',
    date: 'December 14, 2024',
    readTime: '7 min read',
  },
  'TheKillGreenlightRitualStayingRuthlessAboutPortfolioQuality.tsx': {
    title: 'The Kill/Greenlight Ritual: Staying Ruthless About Portfolio Quality',
    date: 'December 1, 2024',
    readTime: '6 min read',
  },
  'TheMicroInteractionsAppleStyleMotionThatGuides.tsx': {
    title: 'The Micro-Interactions: Apple-Style Motion That Guides',
    date: 'November 18, 2024',
    readTime: '7 min read',
  },
  'TheOpenSourceVisionBuildingACommunityAroundProductCreation.tsx': {
    title: 'The Open Source Vision: Building a Community Around Product Creation',
    date: 'November 15, 2024',
    readTime: '8 min read',
  },
  'ThePersonalizationWithPrivacyAdaptiveUxWithConsent.tsx': {
    title: 'The Personalization with Privacy: Adaptive UX with Consent',
    date: 'November 22, 2024',
    readTime: '6 min read',
  },
  'ThePortfolioApproachManagingMultipleBetsKillingFastPrioritizingByExpectedValue.tsx': {
    title: 'The Portfolio Approach: Managing Multiple Bets, Killing Fast, Prioritizing by Expected Value',
    date: 'December 3, 2024',
    readTime: '9 min read',
  },
  'TheProblemWhyMostSaasStartupsFailBeforeTheyEvenStart.tsx': {
    title: 'The Problem: Why Most SaaS Startups Fail Before They Even Start',
    date: 'November 10, 2024',
    readTime: '7 min read',
  },
  'TheResultsWhatWeVeLearnedBuildingThisSystem.tsx': {
    title: 'The Results: What We\'ve Learned Building This System',
    date: 'December 18, 2024',
    readTime: '8 min read',
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
  'TheSecurityAndBugGateTwoTierCodeReviewForAi.tsx': {
    title: 'The Security and Bug Gate: Two-Tier Code Review for AI',
    date: 'November 27, 2024',
    readTime: '7 min read',
  },
  'TheSolutionADualFilterValidationFramework.tsx': {
    title: 'The Solution: A Dual-Filter Validation Framework',
    date: 'November 12, 2024',
    readTime: '8 min read',
  },
  'TheSupabaseMcpProductionBackendsInMinutes.tsx': {
    title: 'The Supabase MCP: Production Backends in Minutes',
    date: 'November 24, 2024',
    readTime: '7 min read',
  },
  'TheTechnicalStackModernWebStandardsForProductCreationPlatforms.tsx': {
    title: 'The Technical Stack: Modern Web Standards for Product Creation Platforms',
    date: 'November 26, 2024',
    readTime: '9 min read',
  },
};

function wrapArticle(filename, content) {
  const meta = articleMeta[filename];
  if (!meta) {
    console.log(`   ⚠️  No metadata for ${filename}, skipping`);
    return null;
  }

  // Extract the component name (try both patterns)
  let componentMatch = content.match(/export default function (\w+)/);
  if (!componentMatch) {
    // Try alternate pattern: const Article = () => { ... }; export default Article;
    componentMatch = content.match(/(?:const|function) (\w+)(?:\s*:\s*React\.FC)?(?:\s*=)?/);
  }
  if (!componentMatch) {
    console.log(`   ⚠️  No component found in ${filename}, skipping`);
    return null;
  }
  const componentName = componentMatch[1] === 'Article' ? filename.replace('.tsx', '') : componentMatch[1];

  // Extract the body content (everything inside the return statement)
  const returnMatch = content.match(/return \(([\s\S]*)\);?\s*\}/);
  if (!returnMatch) {
    console.log(`   ⚠️  No return statement found in ${filename}, skipping`);
    return null;
  }
  const bodyContent = returnMatch[1].trim();

  // Create wrapped version
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
          <div className="prose prose-invert prose-lg max-w-none">
            ${bodyContent}
          </div>

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

async function main() {
  const files = await fs.readdir(articlesDir);
  const needsLayout = [];
  
  for (const file of files) {
    if (!file.endsWith('.tsx')) continue;
    const content = await fs.readFile(path.join(articlesDir, file), 'utf-8');
    if (!content.includes('ResponsiveNav')) {
      needsLayout.push(file);
    }
  }

  console.log(`📦 Wrapping ${needsLayout.length} articles with layout...\n`);

  let wrapped = 0;
  let skipped = 0;

  for (const file of needsLayout) {
    console.log(`📝 ${file}`);
    const filePath = path.join(articlesDir, file);
    const content = await fs.readFile(filePath, 'utf-8');
    const wrappedContent = wrapArticle(file, content);
    
    if (wrappedContent) {
      await fs.writeFile(filePath, wrappedContent, 'utf-8');
      console.log(`   ✅ Wrapped successfully\n`);
      wrapped++;
    } else {
      skipped++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('✨ LAYOUT WRAPPING COMPLETE');
  console.log('='.repeat(60));
  console.log(`📊 Wrapped: ${wrapped} articles`);
  console.log(`⏭️  Skipped: ${skipped} articles`);
  console.log('\n📋 Next: Review articles and add pull quotes/stat cards manually');
}

main().catch(error => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});

