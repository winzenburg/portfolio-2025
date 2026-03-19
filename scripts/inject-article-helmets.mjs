/**
 * Batch-injects per-article <Helmet> SEO blocks into every article .tsx file
 * that doesn't already have one.
 *
 * Run:  node scripts/inject-article-helmets.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ARTICLES_DIR = join(__dirname, "../client/src/pages/articles");

// ─── Article metadata (source of truth: Articles.tsx) ────────────────────────
const articles = [
  {
    file: "CompoundIntelligence.tsx",
    slug: "compound-intelligence",
    title: "Compound Intelligence: How Documentation Makes Codebases Learn",
    description: "My codebase got smarter last month without me touching a line of code. An autonomous agent documented its learnings. The next agent read that file and made better decisions. This is compound intelligence.",
    heroImage: "/images/articles/compound-intelligence-hero.png",
    date: "2026-02-22",
  },
  {
    file: "FreshContextPerIteration.tsx",
    slug: "fresh-context-per-iteration",
    title: "Fresh Context Per Iteration: Why Autonomous Agents Don't Break Like Long Sessions",
    description: "I spent 4 hours in an interactive AI session yesterday. By hour 3, the agent was making mistakes it wouldn't have made in hour 1. Context pollution had set in. Meanwhile, an autonomous agent built a feature overnight with zero context drift.",
    heroImage: "/images/articles/fresh-context-per-iteration-hero.png",
    date: "2026-02-15",
  },
  {
    file: "SelfValidatingAIAgents.tsx",
    slug: "self-validating-ai-agents",
    title: "Self-Validating AI Agents: When Acceptance Criteria Become Tests",
    description: "Last night, an autonomous agent built a feature, tested it against 23 acceptance criteria, found 2 failures, fixed them, retested, and committed—all while I slept. Self-validation isn't magic. It's well-written acceptance criteria.",
    heroImage: "/images/articles/self-validating-ai-agents-hero.png",
    date: "2026-02-08",
  },
  {
    file: "WritingPRDsForAI.tsx",
    slug: "writing-prds-for-ai-agents",
    title: "Writing PRDs That AI Agents Can Execute",
    description: "I spent 45 minutes writing a PRD. The autonomous agent built the feature perfectly overnight for $42. Then I wrote another PRD in 20 minutes. The agent failed three times and wasted $60. The difference? Acceptance criteria specificity.",
    heroImage: "/images/articles/writing-prds-for-ai-hero.png",
    date: "2026-02-01",
  },
  {
    file: "ChoosingAICodingMode.tsx",
    slug: "choosing-ai-coding-mode",
    title: "Choosing Your AI Coding Mode: Interactive vs Autonomous",
    description: "Last week, I wasted $60 and 8 hours trying to build a feature autonomously that should have been interactive. The mode wasn't wrong—my choice was. Here's the decision framework I should have used.",
    heroImage: "/images/articles/choosing-ai-coding-mode-hero.png",
    date: "2026-01-25",
  },
  {
    file: "AICodingEconomics.tsx",
    slug: "ai-coding-economics",
    title: "The Economics of AI-Assisted Coding: When $40 Beats 6 Hours",
    description: "Last month, I spent $42 on API calls to build a feature that would have cost me $600 in time. The ROI was 14x. But the real story isn't about saving money—it's about what becomes possible when implementation stops being the constraint.",
    heroImage: "/images/articles/ai-coding-economics-hero.png",
    date: "2026-01-18",
  },
  {
    file: "AutonomousAICoding.tsx",
    slug: "autonomous-ai-coding",
    title: "Autonomous AI Coding: Building Features Overnight",
    description: "I went to bed with a PRD and five user stories. When I woke up, the feature was built, tested, and committed. Total cost: $42. Total time I spent coding: zero hours.",
    heroImage: "/images/articles/autonomous-ai-coding-hero.png",
    date: "2026-01-11",
  },
  {
    file: "BusinessOperatingSystem.tsx",
    slug: "business-operating-system",
    title: "The Business Operating System: A Weekly Loop for Shipping and Learning",
    description: "Most teams don't fail because they lack ideas. They fail because they can't translate decisions into weekly outcomes. Here's the operating system that keeps execution honest.",
    heroImage: "/images/articles/business-operating-system-hero.png",
    date: "2025-12-30",
  },
  {
    file: "WeeklyRhythm.tsx",
    slug: "weekly-rhythm",
    title: "The Weekly Rhythm: A 60-Minute Operating System That Actually Ships",
    description: "Most weekly planning fails because it tries to plan everything. The goal isn't comprehensive planning—it's deciding what the week is for.",
    heroImage: "/images/articles/weekly-rhythm-hero.png",
    date: "2025-12-25",
  },
  {
    file: "RocksNotTasks.tsx",
    slug: "rocks-not-tasks",
    title: "Rocks, Not Tasks: How to Commit to 1–3 Weekly Outcomes",
    description: "The fastest way to sabotage a week is to commit to tasks instead of outcomes. Here's how to define weekly outcomes that actually finish.",
    heroImage: "/images/articles/rocks-not-tasks-hero.png",
    date: "2025-12-23",
  },
  {
    file: "DocsAsSystemOfRecord.tsx",
    slug: "docs-as-system-of-record",
    title: "Docs as the System of Record: Making Decisions Traceable and Reusable",
    description: "When knowledge lives in chat threads, personal notes, and scattered docs, you lose context, repeatability, and auditability. Here's the fix.",
    heroImage: "/images/articles/docs-system-of-record-hero.png",
    date: "2025-12-18",
  },
  {
    file: "MakerVsManager.tsx",
    slug: "maker-vs-manager",
    title: "Maker vs Manager: How to Protect Deep Work in a Weekly Operating System",
    description: "You don't have an execution problem. You have a calendar problem. Here's how to design weeks so outcomes actually ship.",
    heroImage: "/images/articles/maker-vs-manager-hero.png",
    date: "2025-12-16",
  },
  {
    file: "AICostControl.tsx",
    slug: "ai-cost-control",
    title: "AI Cost Control That Doesn't Break Velocity",
    description: "Most AI cost overruns come from retries and rework, not expensive calls. Here's how to build AI systems that stay both affordable and fast.",
    heroImage: "/images/articles/ai-cost-control-hero.png",
    date: "2025-12-11",
  },
  {
    file: "QualityGatesForAI.tsx",
    slug: "quality-gates-for-ai",
    title: "Quality Gates for AI Outputs: Schema, Normalization, and Readable Rendering",
    description: "AI output is raw material, not finished product. Treat it like untrusted input and run it through gates: validate, normalize, render.",
    heroImage: "/images/articles/quality-gates-ai-hero.png",
    date: "2025-12-09",
  },
  {
    file: "DebuggingAIWorkflows.tsx",
    slug: "debugging-ai-workflows",
    title: "Debugging AI Workflows Without Chaos: Evidence, Snapshots, and Minimal Endpoints",
    description: "AI failures feel random until you can reproduce them. Here's the minimal evidence system that explains what happened and how to recover.",
    heroImage: "/images/articles/debugging-ai-workflows-hero.png",
    date: "2025-12-04",
  },
  {
    file: "TheTechnicalStackModernWebStandardsForProductCreationPlatforms.tsx",
    slug: "technical-stack",
    title: "The Technical Stack: Modern Web Standards for Product Creation Platforms",
    description: "Building a systematic approach to SaaS product creation with a production-ready platform, not a prototype.",
    heroImage: "/images/articles/tech-stack.png",
    date: "2024-12-07",
  },
  {
    file: "TheSupabaseMcpProductionBackendsInMinutes.tsx",
    slug: "supabase-mcp-blueprint",
    title: "The Supabase MCP Blueprint: Production-Grade Backends in Minutes, Not Weeks",
    description: "Backend design is usually trial-and-error. We turned it into a repeatable blueprint using Supabase MCP.",
    heroImage: "/images/articles/supabase-mcp-hero.png",
    date: "2024-12-07",
  },
  {
    file: "TheSolutionADualFilterValidationFramework.tsx",
    slug: "dual-filter-validation",
    title: "The Solution: A Dual-Filter Validation Framework",
    description: "Heat gets you in. Durability makes it a real SaaS business. Here's the dual-filter framework for validating product ideas that actually work.",
    heroImage: "/images/articles/dual-filter-hero.png",
    date: "2024-12-07",
  },
  {
    file: "TheSecurityAndBugGateTwoTierCodeReviewForAi.tsx",
    slug: "security-bug-gate",
    title: "The Security & Bug Gate: Two-Tier Code Review for AI-Generated Features",
    description: "AI can ship features fast, but it can also ship vulnerabilities. Here's our quality firewall for AI-generated code.",
    heroImage: "/images/articles/security-gate-hero.png",
    date: "2024-12-07",
  },
  {
    file: "TheRulesAndAgentsSystemMakingTheProcessRepeatable.tsx",
    slug: "rules-and-agents",
    title: "The Rules and Agents System: Making the Process Repeatable",
    description: "What if your product creation process was as systematic as your code? Here's how rules and agents make the entire workflow repeatable.",
    heroImage: "/images/articles/rules-agents-system-diagram.png",
    date: "2024-12-07",
  },
  {
    file: "TheRuleConsolidationHowWeKept40PlusRulesManageable.tsx",
    slug: "rule-consolidation",
    title: "The Rule Consolidation: How We Kept 40+ Rules Manageable Without Losing Power",
    description: "Most systems collapse under their own complexity. Here's how we prevented that with a unified taxonomy and single foreman orchestrator.",
    heroImage: "/images/articles/rule-consolidation-hero.png",
    date: "2024-12-07",
  },
  {
    file: "TheResultsWhatWeVeLearnedBuildingThisSystem.tsx",
    slug: "system-results",
    title: "The Results: What We've Learned Building This System",
    description: "Building a systematic product creation engine. Here's what works, what doesn't, and what we've learned.",
    heroImage: "/images/articles/results-hero.png",
    date: "2024-12-07",
  },
  {
    file: "TheProblemWhyMostSaasStartupsFailBeforeTheyEvenStart.tsx",
    slug: "saas-problem",
    title: "The Problem: Why Most SaaS Startups Fail Before They Even Start",
    description: "Exploring why 90% of SaaS startups fail and how the problem isn't the idea—it's the process.",
    heroImage: "/images/articles/saas-problem-hero.png",
    date: "2024-12-07",
  },
  {
    file: "ThePortfolioApproachManagingMultipleBetsKillingFastPrioritizingByExpectedValue.tsx",
    slug: "portfolio-approach",
    title: "The Portfolio Approach: Managing Multiple Bets, Killing Fast, Prioritizing by Expected Value",
    description: "You're not building one product. You're managing a portfolio of bets. Here's how to manage them systematically.",
    heroImage: "/images/articles/portfolio-hero.png",
    date: "2024-12-07",
  },
  {
    file: "ThePersonalizationWithPrivacyAdaptiveUxWithConsent.tsx",
    slug: "personalization-privacy",
    title: "Personalization with Privacy: How We Design Adaptive UX That Respects Consent",
    description: "Personalization can feel creepy. Here's how to make it thoughtful, transparent, and opt-in.",
    heroImage: "/images/articles/personalization-hero.png",
    date: "2024-12-07",
  },
  {
    file: "TheOpenSourceVisionBuildingACommunityAroundProductCreation.tsx",
    slug: "open-source-vision",
    title: "The Open Source Vision: Building a Community Around Product Creation",
    description: "What if the entire product creation process was open source? Explore the benefits of a community-driven, transparent approach to building successful SaaS products.",
    heroImage: "/images/articles/open-source-hero.png",
    date: "2024-12-07",
  },
  {
    file: "TheMicroInteractionsAppleStyleMotionThatGuides.tsx",
    slug: "micro-interactions",
    title: "Micro-Interactions Done Right: Apple-Style Motion That Guides Without Distracting",
    description: "Bad animations annoy. Great ones are invisible. Here's our playbook for refined, goal-driven micro-interactions.",
    heroImage: "/images/articles/micro-interactions-hero.png",
    date: "2024-12-07",
  },
  {
    file: "TheKillGreenlightRitualStayingRuthlessAboutPortfolioQuality.tsx",
    slug: "kill-greenlight-ritual",
    title: "The Kill/Greenlight Ritual: How We Stay Ruthless About Portfolio Quality",
    description: "Most founders can't kill ideas because of sunk costs. We make tough decisions systematically, not emotionally, using weekly reviews and clear kill criteria.",
    heroImage: "/images/articles/kill-greenlight-hero.png",
    date: "2024-12-07",
  },
  {
    file: "TheHubEvolutionFromStaticDocsToDecisionDashboard.tsx",
    slug: "hub-evolution",
    title: "The Hub Evolution: From Static Docs to Real-Time Portfolio Intelligence",
    description: "Most docs systems are graveyards. Ours is a living strategy layer that surfaces portfolio status, filters ideas, and drives kill/greenlight decisions.",
    heroImage: "/images/articles/hub-evolution-hero.png",
    date: "2024-12-07",
  },
  {
    file: "TheHubAMetaProjectForManagingYourProductPortfolio.tsx",
    slug: "the-hub",
    title: "The Hub: A Meta-Project for Managing Your Product Portfolio",
    description: "What if you had a dashboard for managing your entire product portfolio? Here's how we built it.",
    heroImage: "/images/articles/hub-hero.png",
    date: "2024-12-07",
  },
  {
    file: "TheGamificationThatDoesntManipulateHabitLoopsDoneRight.tsx",
    slug: "gamification-done-right",
    title: "Gamification That Doesn't Manipulate: Designing Habit Loops with Industry-Appropriate Mascots",
    description: "Gamification is often manipulative. Here's how to make it helpful, respectful, and tailored to your industry.",
    heroImage: "/images/articles/gamification-hero.png",
    date: "2024-12-07",
  },
  {
    file: "TheDocumentationSystemMakingKnowledgeRepeatableAndAuditable.tsx",
    slug: "documentation-system",
    title: "The Documentation System: Making Knowledge Repeatable and Auditable",
    description: "Knowledge gets lost. Processes aren't repeatable. What if every decision was documented and auditable?",
    heroImage: "/images/articles/docs-system-hero.png",
    date: "2024-12-07",
  },
  {
    file: "TheDevQualityAssistantTestPlanningBeforeCode.tsx",
    slug: "dev-quality-assistant",
    title: "The Dev Quality Assistant: Test Planning Before Code Touches the Repo",
    description: "Most teams treat testing as an afterthought. We make it a build prerequisite.",
    heroImage: "/images/articles/dev-quality-hero.png",
    date: "2024-12-07",
  },
  {
    file: "TheCompleteWorkflowDiscoveryToDeploymentIn2025.tsx",
    slug: "complete-workflow-2025",
    title: "The Complete Workflow: Discovery to Deployment in 2025",
    description: "Our current end-to-end SaaS creation system, from validating ideas to shipping code—with 25 agents, 8 quality gates, and zero guesswork.",
    heroImage: "/images/articles/complete-workflow-hero.png",
    date: "2024-12-07",
  },
  {
    file: "TheBrandFirstValidationDesigningIdentityBeforeCode.tsx",
    slug: "brand-first-validation",
    title: "Brand-First Validation: Why We Design the Brand System Before Writing Code",
    description: "Most teams bolt branding on at the end. We make it a pre-build artifact that informs every UI decision.",
    heroImage: "/images/articles/brand-first-hero.png",
    date: "2024-12-07",
  },
  {
    file: "TheAiToolStackCoordinatingSevenAisWithoutChaos.tsx",
    slug: "ai-tool-stack",
    title: "The AI Tool Stack: How We Coordinate 7 AIs Without Chaos",
    description: "Using multiple AI tools sounds like a nightmare. Here's how we orchestrate Manus, ChatGPT, Claude, ElevenLabs, Midjourney, Glif, and Lindy with clear lanes and zero overlap.",
    heroImage: "/images/articles/ai-tool-stack-hero.png",
    date: "2024-12-07",
  },
  {
    file: "TheAiOrchestrationHowToConnectMultipleAiToolsInASystematicWorkflow.tsx",
    slug: "ai-orchestration",
    title: "The AI Orchestration: How to Connect Multiple AI Tools in a Systematic Workflow",
    description: "AI tools are powerful, but they're islands. Here's how to orchestrate them into a systematic, auditable workflow.",
    heroImage: "/images/articles/ai-orchestration-hero.png",
    date: "2024-12-07",
  },
  {
    file: "NeverShipOutdatedCodeHowWeUseContext7ToQueryLiveDocs.tsx",
    slug: "context7-live-docs",
    title: "Never Ship Outdated Code: How We Use Context7 to Query Live Documentation",
    description: "Most AI code generation uses stale training data. We query live docs via Context7 MCP to ensure code suggestions match the latest version of every library.",
    heroImage: "/images/articles/context7-hero.png",
    date: "2024-12-07",
  },
  {
    file: "FromManualToAutomatedHowWeUseLindyToExecuteValidation.tsx",
    slug: "lindy-automated-validation",
    title: "From Manual to Automated: How We Use Lindy AI to Execute Validation at Scale",
    description: "Most founders manually manage waitlists and outreach. We automate execution with Lindy while keeping Cursor as our documentation system of record.",
    heroImage: "/images/articles/lindy-hero.png",
    date: "2024-12-07",
  },
  {
    file: "EightyPercentFasterCreativesHowWeUseGlifToBatchGenerateAssets.tsx",
    slug: "glif-batch-creatives",
    title: "80% Faster Creatives: How We Use Glif to Batch-Generate Validation Assets",
    description: "Most founders get stuck on 'we need 10 ad variants' and spend days in Canva. We batch-generate creatives with Glif, refine with Midjourney, and ship in hours.",
    heroImage: "/images/articles/glif-hero.png",
    date: "2024-12-07",
  },
  {
    file: "ScalingStrategy.tsx",
    slug: "scaling-strategy",
    title: "Scaling Strategy: Building a Portfolio of AI-Powered Businesses",
    description: "After successfully launching and monetizing an MVP, most founders face a choice: Scale one product or build a portfolio. Here's the portfolio approach that creates compounding value.",
    heroImage: "/images/articles/scaling-strategy-hero.png",
    date: "2025-08-14",
  },
  {
    file: "MonetizationStrategy.tsx",
    slug: "monetization-strategy",
    title: "Monetization Strategy: Generating Revenue from Day One",
    description: "Monetization isn't an afterthought—it's a critical component of product strategy from day one. Learn the modular pricing framework that generates revenue before building.",
    heroImage: "/images/articles/monetization-strategy-hero.png",
    date: "2025-07-21",
  },
  {
    file: "MVPStrategy.tsx",
    slug: "mvp-strategy",
    title: "The MVP Strategy: Launching Products That Sell Themselves",
    description: "Most MVPs try to do too much. The result: Delayed launches, complex products, unclear value. Here's the virality-by-design framework for the minimum that creates genuine value.",
    heroImage: "/images/articles/mvp-strategy-hero.png",
    date: "2025-06-26",
  },
  {
    file: "AudienceFirstGoToMarket.tsx",
    slug: "audience-first-go-to-market",
    title: "The Audience-First Go-to-Market Strategy: Building Community Before Launch",
    description: "Most products launch to silence. Here's what works: Build community before launch. Use one platform. Master it. Then expand.",
    heroImage: "/images/articles/audience-first-go-to-market-hero.png",
    date: "2025-06-02",
  },
  {
    file: "AiPoweredMarketValidation.tsx",
    slug: "ai-powered-market-validation",
    title: "AI-Powered Market Validation: Finding Underserved Niches and De-Risking Products",
    description: "Building products without validating market demand wastes time and capital. Here's how to validate demand before writing code with AI-powered validation.",
    heroImage: "/images/articles/ai-powered-market-validation-hero.png",
    date: "2025-05-08",
  },
  {
    file: "AIAugmentedWorkflow.tsx",
    slug: "ai-augmented-workflow",
    title: "The AI-Augmented Workflow: How I Deliver Enterprise-Grade UX 4-6x Faster",
    description: "Speed matters in competitive markets. Traditional UX design cycles take 8-12 weeks. I deliver comparable enterprise-grade outcomes in 2-3 weeks using AI throughout the design process.",
    heroImage: "/images/articles/ai-augmented-workflow-hero.png",
    date: "2025-03-17",
  },
  {
    file: "DesignSystem4Weeks.tsx",
    slug: "design-system-4-weeks",
    title: "How I Built an Enterprise Design System in 4 Weeks (Not 12 Months)",
    description: "Most teams spend 12-18 months building enterprise design systems. I built one in 4 weeks. 48 production-ready components. 63,813 lines of code. 100% WCAG 2.2 AA compliance.",
    heroImage: "/images/articles/design-system-4-weeks-hero.png",
    date: "2025-02-24",
  },
  {
    file: "AITechStack.tsx",
    slug: "ai-tech-stack",
    title: "The AI-Powered Design Tech Stack: My Exact Workflow",
    description: "After publishing how I built a design system in 4 weeks instead of 12 months, the most common question was: What tools did you actually use? Here's my complete tech stack.",
    heroImage: "/images/articles/ai-tech-stack-hero.png",
    date: "2025-02-03",
  },
  {
    file: "DesignSystemsFail.tsx",
    slug: "design-systems-fail",
    title: "Why Most Design Systems Fail (And How to Fix Them)",
    description: "Company invests 12-18 months and nearly $1 million building a design system. Six months after launch, adoption sits below 20%. Here's the data on what kills design systems—and three AI-powered solutions.",
    heroImage: "/images/articles/design-systems-fail-hero.png",
    date: "2025-01-15",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function escapeForAttr(str) {
  return str.replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function buildHelmetBlock(article) {
  const { slug, title, description, heroImage, date } = article;
  const url = `https://winzenburg.com/articles/${slug}`;
  const imageUrl = `https://winzenburg.com${heroImage}`;
  const safeTitle = escapeForAttr(title);
  const safeDesc = escapeForAttr(description);

  const ldJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    author: { "@type": "Person", name: "Ryan Winzenburg", url: "https://winzenburg.com" },
    datePublished: date,
    url,
    image: imageUrl,
  });

  return `
      <Helmet>
        <title>${safeTitle} | Ryan Winzenburg</title>
        <meta name="description" content="${safeDesc}" />
        <meta property="og:title" content="${safeTitle}" />
        <meta property="og:description" content="${safeDesc}" />
        <meta property="og:url" content="${url}" />
        <meta property="og:image" content="${imageUrl}" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="${url}" />
        <script type="application/ld+json">{JSON.stringify(${ldJson})}</script>
      </Helmet>`;
}

// ─── Process files ────────────────────────────────────────────────────────────

let updated = 0;
let skipped = 0;

for (const article of articles) {
  const filePath = join(ARTICLES_DIR, article.file);
  let source;

  try {
    source = readFileSync(filePath, "utf8");
  } catch {
    console.warn(`⚠️  File not found: ${article.file}`);
    continue;
  }

  // Skip files that already have Helmet
  if (source.includes("react-helmet-async")) {
    console.log(`✓  Already has Helmet: ${article.file}`);
    skipped++;
    continue;
  }

  // 1. Add import after the last existing import line
  const importInsertPoint = source.lastIndexOf("\nimport ");
  const afterLastImport = source.indexOf("\n", importInsertPoint + 1);
  const helmetImport = `\nimport { Helmet } from "react-helmet-async";`;
  source =
    source.slice(0, afterLastImport) +
    helmetImport +
    source.slice(afterLastImport);

  // 2. Inject <Helmet> block right after <ResponsiveNav .../>
  //    The consistent pattern is: <ResponsiveNav currentPage="articles" />\n
  const navTag = `<ResponsiveNav currentPage="articles" />`;
  const navIdx = source.indexOf(navTag);
  if (navIdx === -1) {
    console.warn(`⚠️  No ResponsiveNav found in: ${article.file}`);
    continue;
  }

  const afterNav = navIdx + navTag.length;
  const helmetBlock = buildHelmetBlock(article);
  source = source.slice(0, afterNav) + helmetBlock + source.slice(afterNav);

  writeFileSync(filePath, source, "utf8");
  console.log(`✅  Updated: ${article.file}`);
  updated++;
}

console.log(`\nDone. Updated: ${updated}  Skipped (already had Helmet): ${skipped}`);
