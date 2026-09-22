import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";
import PageSeo from "@/components/PageSeo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SiteLayout from "@/components/SiteLayout";
import { Section, SectionHeading, SectionTitle } from "@/components/Section";
import { cn } from "@/lib/utils";
import { trackArticleCardClick, trackCategoryFilter } from "@/lib/analytics";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  category: string;
  heroImage: string;
}

/**
 * ADDING A NEW ARTICLE?
 *
 * Follow these steps:
 * 1. Create article component: /client/src/pages/articles/YourArticle.tsx
 *    - Use ARTICLE_TEMPLATE.tsx as starting point
 *    - Component name must be PascalCase (e.g., AITechStack)
 *
 * 2. Add article metadata below (in chronological order, newest first):
 *    - id: Increment from last article
 *    - title: Full article title
 *    - excerpt: 2-3 sentence preview
 *    - date: "Month DD, YYYY" (must match component)
 *    - readTime: "X min read" (must match component)
 *    - slug: "kebab-case" (must match file name and route)
 *    - category: Choose from existing or add new
 *
 * 3. Update category counts in hero section if needed
 *
 * 4. Test locally before deploying:
 *    - Articles index: /articles
 *    - Your article: /articles/your-slug
 *
 * 5. Indexability: include Helmet meta on the article page. `pnpm build:web`
 *    regenerates sitemap.xml and per-article HTML shells for crawlers.
 *
 * See ARTICLES_WORKFLOW.md for complete documentation.
 */

const articles: Article[] = [
  {
    id: "55",
    title: "The Agent Layer Is Becoming the Business Layer",
    excerpt: "The companies that win with AI won't be the ones with the most agents. They'll be the ones that can say exactly what each agent is for, what it's allowed to touch, and when a person takes the wheel.",
    date: "August 11, 2026",
    readTime: "6 min read",
    slug: "the-agent-layer-is-becoming-the-business-layer",
    category: "AI Workflow",
    heroImage: "/images/articles/the-agent-layer-is-becoming-the-business-layer-hero.webp"
  },
  {
    id: "54",
    title: "AI Won't Get You to UX Maturity Level 5. It Will Get You to Level 3.",
    excerpt: "Everyone wants to jump straight to Level 5. That jump doesn't happen. The real opportunity is using AI to do the discovery work the business has never funded, and actually move the needle on what gets built.",
    date: "July 9, 2026",
    readTime: "7 min read",
    slug: "ai-ux-maturity-level-3",
    category: "Product Design",
    heroImage: "/images/articles/ai-ux-maturity-level-3-hero.webp"
  },
  {
    id: "53",
    title: "The Interface Problem Nobody Is Talking About",
    excerpt: "Enterprise AI keeps stalling at the prompt box. Nine interface patterns from Canva, Notion, Glean, Abridge, and others, for teams building products non-technical people will actually use.",
    date: "June 3, 2026",
    readTime: "16 min read",
    slug: "interface-problem-ai-ux",
    category: "Product Design",
    heroImage: "/images/articles/interface-problem-hero.webp"
  },
  {
    id: "52",
    title: "AI Isn't a Feature. It's a Workflow Problem.",
    excerpt: "Most teams aren't falling behind because they lack access to AI. They're asking the wrong question. The shift from AI as a feature to AI as a workflow redesign problem is where the real advantage lives.",
    date: "May 29, 2026",
    readTime: "7 min read",
    slug: "ai-isnt-a-feature-workflow",
    category: "Product Design",
    heroImage: "/images/articles/ai-isnt-a-feature-workflow-hero.webp"
  },
  {
    id: "51",
    title: "Asking Better Strategic Questions About AI in Product Design",
    excerpt: "I've spent 20+ years inside enterprise product and design organizations. The pattern right now is consistent: a lot of noise, most of it fear-driven, and most of the questions being asked are the wrong ones.",
    date: "March 7, 2026",
    readTime: "6 min read",
    slug: "strategic-questions-ai-product-design",
    category: "Product Design",
    heroImage: "/images/articles/strategic-questions-ai-hero.webp"
  },
  {
    id: "50",
    title: "Integration Documentation That Developers Actually Read",
    excerpt: "Last week, a developer integrated our API in 18 minutes. Another took 3 hours on the same integration. Same API. Same endpoints. Different documentation. Developer experience is a design problem.",
    date: "February 29, 2026",
    readTime: "10 min read",
    slug: "integration-docs-that-work",
    category: "Engineering",
    heroImage: "/images/articles/integration-docs-hero.webp"
  },
  {
    id: "49",
    title: "Compound Intelligence: How Documentation Makes Codebases Learn",
    excerpt: "My codebase got smarter last month without me touching a line of code. An autonomous agent documented its learnings. The next agent read that file and made better decisions. This is compound intelligence.",
    date: "February 22, 2026",
    readTime: "13 min read",
    slug: "compound-intelligence",
    category: "AI Workflow",
    heroImage: "/images/articles/compound-intelligence-hero.webp"
  },
  {
    id: "48",
    title: "Fresh Context Per Iteration: Why Autonomous Agents Don't Break Like Long Sessions",
    excerpt: "I spent 4 hours in an interactive AI session yesterday. By hour 3, the agent was making mistakes it wouldn't have made in hour 1. Context pollution had set in. Meanwhile, an autonomous agent built a feature overnight with zero context drift.",
    date: "February 15, 2026",
    readTime: "12 min read",
    slug: "fresh-context-per-iteration",
    category: "AI Workflow",
    heroImage: "/images/articles/fresh-context-per-iteration-hero.webp"
  },
  {
    id: "47",
    title: "Self-Validating AI Agents: When Acceptance Criteria Become Tests",
    excerpt: "Last night, an autonomous agent built a feature, tested it against 23 acceptance criteria, found 2 failures, fixed them, retested, and committed, all while I slept. Self-validation isn't magic. It's well-written acceptance criteria.",
    date: "February 8, 2026",
    readTime: "11 min read",
    slug: "self-validating-ai-agents",
    category: "AI Workflow",
    heroImage: "/images/articles/self-validating-ai-agents-hero.webp"
  },
  {
    id: "46",
    title: "Writing PRDs That AI Agents Can Execute",
    excerpt: "I spent 45 minutes writing a PRD. The autonomous agent built the feature perfectly overnight for $42. Then I wrote another PRD in 20 minutes. The agent failed three times and wasted $60. The difference? Acceptance criteria specificity.",
    date: "February 1, 2026",
    readTime: "13 min read",
    slug: "writing-prds-for-ai-agents",
    category: "AI Workflow",
    heroImage: "/images/articles/writing-prds-for-ai-hero.webp"
  },
  {
    id: "45",
    title: "Choosing Your AI Coding Mode: Interactive vs Autonomous",
    excerpt: "Last week, I wasted $60 and 8 hours trying to build a feature autonomously that should have been interactive. The mode wasn't wrong, my choice was. Here's the decision framework I should have used.",
    date: "January 25, 2026",
    readTime: "11 min read",
    slug: "choosing-ai-coding-mode",
    category: "AI Workflow",
    heroImage: "/images/articles/choosing-ai-coding-mode-hero.webp"
  },
  {
    id: "44",
    title: "The Economics of AI-Assisted Coding: When $40 Beats 6 Hours",
    excerpt: "Last month, I spent $42 on API calls to build a feature that would have cost me $600 in time. The ROI was 14x. But the real story isn't about saving money, it's about what becomes possible when implementation stops being the constraint.",
    date: "January 18, 2026",
    readTime: "12 min read",
    slug: "ai-coding-economics",
    category: "AI Workflow",
    heroImage: "/images/articles/ai-coding-economics-hero.webp"
  },
  {
    id: "43",
    title: "Autonomous AI Coding: Building Features Overnight",
    excerpt: "I went to bed with a PRD and five user stories. When I woke up, the feature was built, tested, and committed. Total cost: $42. Total time I spent coding: zero hours.",
    date: "January 11, 2026",
    readTime: "14 min read",
    slug: "autonomous-ai-coding",
    category: "AI Workflow",
    heroImage: "/images/articles/autonomous-ai-coding-hero.webp"
  },
  {
    id: "42",
    title: "The Business Operating System: A Weekly Loop for Shipping and Learning",
    excerpt: "Most teams don't fail because they lack ideas. They fail because they can't translate decisions into weekly outcomes. Here's the operating system that keeps execution honest.",
    date: "December 30, 2025",
    readTime: "12 min read",
    slug: "business-operating-system",
    category: "Business Strategy",
    heroImage: "/images/articles/business-operating-system-hero.webp"
  },
  {
    id: "41",
    title: "The Weekly Rhythm: A 60-Minute Operating System That Actually Ships",
    excerpt: "Most weekly planning fails because it tries to plan everything. The goal isn't comprehensive planning, it's deciding what the week is for.",
    date: "December 25, 2025",
    readTime: "9 min read",
    slug: "weekly-rhythm",
    category: "Business Strategy",
    heroImage: "/images/articles/weekly-rhythm-hero.webp"
  },
  {
    id: "40",
    title: "Rocks, Not Tasks: How to Commit to 1-3 Weekly Outcomes",
    excerpt: "The fastest way to sabotage a week is to commit to tasks instead of outcomes. Here's how to define weekly outcomes that actually finish.",
    date: "December 23, 2025",
    readTime: "8 min read",
    slug: "rocks-not-tasks",
    category: "Business Strategy",
    heroImage: "/images/articles/rocks-not-tasks-hero.webp"
  },
  {
    id: "39",
    title: "Docs as the System of Record: Making Decisions Traceable and Reusable",
    excerpt: "When knowledge lives in chat threads, personal notes, and scattered docs, you lose context, repeatability, and auditability. Here's the fix.",
    date: "December 18, 2025",
    readTime: "8 min read",
    slug: "docs-as-system-of-record",
    category: "Business Strategy",
    heroImage: "/images/articles/docs-system-of-record-hero.webp"
  },
  {
    id: "38",
    title: "Maker vs Manager: How to Protect Deep Work in a Weekly Operating System",
    excerpt: "You don't have an execution problem. You have a calendar problem. Here's how to design weeks so outcomes actually ship.",
    date: "December 16, 2025",
    readTime: "7 min read",
    slug: "maker-vs-manager",
    category: "Business Strategy",
    heroImage: "/images/articles/maker-vs-manager-hero.webp"
  },
  {
    id: "37",
    title: "AI Cost Control That Doesn't Break Velocity",
    excerpt: "Most AI cost overruns come from retries and rework, not expensive calls. Here's how to build AI systems that stay both affordable and fast.",
    date: "December 11, 2025",
    readTime: "8 min read",
    slug: "ai-cost-control",
    category: "AI Workflow",
    heroImage: "/images/articles/ai-cost-control-hero.webp"
  },
  {
    id: "36",
    title: "Quality Gates for AI Outputs: Schema, Normalization, and Readable Rendering",
    excerpt: "AI output is raw material, not finished product. Treat it like untrusted input and run it through gates: validate, normalize, render.",
    date: "December 9, 2025",
    readTime: "8 min read",
    slug: "quality-gates-for-ai",
    category: "AI Workflow",
    heroImage: "/images/articles/quality-gates-ai-hero.webp"
  },
  {
    id: "35",
    title: "Debugging AI Workflows Without Chaos: Evidence, Snapshots, and Minimal Endpoints",
    excerpt: "AI failures feel random until you can reproduce them. Here's the minimal evidence system that explains what happened and how to recover.",
    date: "December 4, 2025",
    readTime: "9 min read",
    slug: "debugging-ai-workflows",
    category: "AI Workflow",
    heroImage: "/images/articles/debugging-ai-workflows-hero.webp"
  },
  {
    id: "34",
    title: "The Technical Stack: Modern Web Standards for Product Creation Platforms",
    excerpt: "Building a systematic approach to SaaS product creation with a production-ready platform, not a prototype.",
    date: "December 7, 2024",
    readTime: "11 min read",
    slug: "technical-stack",
    category: "Engineering",
    heroImage: "/images/articles/tech-stack.webp"
  },
  {
    id: "33",
    title: "The Supabase MCP Blueprint: Production-Grade Backends in Minutes, Not Weeks",
    excerpt: "Backend design is usually trial-and-error. We turned it into a repeatable blueprint using Supabase MCP.",
    date: "December 7, 2024",
    readTime: "18 min read",
    slug: "supabase-mcp-blueprint",
    category: "Engineering",
    heroImage: "/images/articles/supabase-mcp-hero.webp"
  },
  {
    id: "32",
    title: "The Solution: A Dual-Filter Validation Framework",
    excerpt: "Heat gets you in. Durability makes it a real SaaS business.",
    date: "December 7, 2024",
    readTime: "8 min read",
    slug: "dual-filter-validation",
    category: "Business Strategy",
    heroImage: "/images/articles/dual-filter-hero.webp"
  },
  {
    id: "31",
    title: "The Security & Bug Gate: Two-Tier Code Review for AI-Generated Features",
    excerpt: "AI can ship features fast, but it can also ship vulnerabilities. Here's our quality firewall.",
    date: "December 7, 2024",
    readTime: "13 min read",
    slug: "security-bug-gate",
    category: "Engineering",
    heroImage: "/images/articles/security-gate-hero.webp"
  },
  {
    id: "30",
    title: "The Rules and Agents System: Making the Process Repeatable",
    excerpt: "What if your product creation process was as systematic as your code?",
    date: "December 7, 2024",
    readTime: "9 min read",
    slug: "rules-and-agents",
    category: "AI Workflow",
    heroImage: "/images/articles/rules-agents-system-diagram.webp"
  },
  {
    id: "29",
    title: "The Rule Consolidation: How We Kept 40+ Rules Manageable Without Losing Power",
    excerpt: "Most systems collapse under their own complexity. Here's how we prevented that with a unified taxonomy and single foreman orchestrator.",
    date: "December 7, 2024",
    readTime: "10 min read",
    slug: "rule-consolidation",
    category: "AI Workflow",
    heroImage: "/images/articles/rule-consolidation-hero.webp"
  },
  {
    id: "28",
    title: "The Results: What We've Learned Building This System",
    excerpt: "Building a systematic product creation engine. Here's what works, what doesn't, and what we've learned.",
    date: "December 7, 2024",
    readTime: "9 min read",
    slug: "system-results",
    category: "Business Strategy",
    heroImage: "/images/articles/results-hero.webp"
  },
  {
    id: "27",
    title: "The Problem: Why Most SaaS Startups Fail Before They Even Start",
    excerpt: "Exploring why 90% of SaaS startups fail and how the problem isn't the idea, it's the process.",
    date: "December 7, 2024",
    readTime: "7 min read",
    slug: "saas-problem",
    category: "Business Strategy",
    heroImage: "/images/articles/saas-problem-hero.webp"
  },
  {
    id: "26",
    title: "The Portfolio Approach: Managing Multiple Bets, Killing Fast, Prioritizing by Expected Value",
    excerpt: "You're not building one product. You're managing a portfolio of bets.",
    date: "December 7, 2024",
    readTime: "8 min read",
    slug: "portfolio-approach",
    category: "Business Strategy",
    heroImage: "/images/articles/portfolio-hero.webp"
  },
  {
    id: "25",
    title: "Personalization with Privacy: How We Design Adaptive UX That Respects Consent",
    excerpt: "Personalization can feel creepy. Here's how to make it thoughtful, transparent, and opt-in.",
    date: "December 7, 2024",
    readTime: "16 min read",
    slug: "personalization-privacy",
    category: "Design Systems",
    heroImage: "/images/articles/personalization-hero.webp"
  },
  {
    id: "24",
    title: "The Open Source Vision: Building a Community Around Product Creation",
    excerpt: "What if the entire product creation process was open source? Explore the benefits of a community-driven, transparent approach to building successful SaaS products.",
    date: "December 7, 2024",
    readTime: "10 min read",
    slug: "open-source-vision",
    category: "Business Strategy",
    heroImage: "/images/articles/open-source-hero.webp"
  },
  {
    id: "23",
    title: "Micro-Interactions Done Right: Apple-Style Motion That Guides Without Distracting",
    excerpt: "Bad animations annoy. Great ones are invisible. Here's our playbook for refined, goal-driven micro-interactions.",
    date: "December 7, 2024",
    readTime: "13 min read",
    slug: "micro-interactions",
    category: "Design Systems",
    heroImage: "/images/articles/micro-interactions-hero.webp"
  },
  {
    id: "22",
    title: "The Kill/Greenlight Ritual: How We Stay Ruthless About Portfolio Quality",
    excerpt: "Most founders can't kill ideas because of sunk costs. We make tough decisions systematically, not emotionally, using weekly reviews and clear kill criteria.",
    date: "December 7, 2024",
    readTime: "19 min read",
    slug: "kill-greenlight-ritual",
    category: "Business Strategy",
    heroImage: "/images/articles/kill-greenlight-hero.webp"
  },
  {
    id: "21",
    title: "The Hub Evolution: From Static Docs to Real-Time Portfolio Intelligence",
    excerpt: "Most docs systems are graveyards. Ours is a living strategy layer that surfaces portfolio status, filters ideas, and drives kill/greenlight decisions.",
    date: "December 7, 2024",
    readTime: "15 min read",
    slug: "hub-evolution",
    category: "AI Workflow",
    heroImage: "/images/articles/hub-evolution-hero.webp"
  },
  {
    id: "20",
    title: "The Hub: A Meta-Project for Managing Your Product Portfolio",
    excerpt: "What if you had a dashboard for managing your entire product portfolio?",
    date: "December 7, 2024",
    readTime: "9 min read",
    slug: "the-hub",
    category: "AI Workflow",
    heroImage: "/images/articles/hub-hero.webp"
  },
  {
    id: "19",
    title: "Gamification That Doesn't Manipulate: Designing Habit Loops with Industry-Appropriate Mascots",
    excerpt: "Gamification is often manipulative. Here's how to make it helpful, respectful, and tailored to your industry.",
    date: "December 7, 2024",
    readTime: "17 min read",
    slug: "gamification-done-right",
    category: "Design Systems",
    heroImage: "/images/articles/gamification-hero.webp"
  },
  {
    id: "18",
    title: "The Documentation System: Making Knowledge Repeatable and Auditable",
    excerpt: "Knowledge gets lost. Processes aren't repeatable. What if every decision was documented and auditable?",
    date: "December 7, 2024",
    readTime: "8 min read",
    slug: "documentation-system",
    category: "AI Workflow",
    heroImage: "/images/articles/docs-system-hero.webp"
  },
  {
    id: "17",
    title: "The Dev Quality Assistant: Test Planning Before Code Touches the Repo",
    excerpt: "Most teams treat testing as an afterthought. We make it a build prerequisite.",
    date: "December 7, 2024",
    readTime: "14 min read",
    slug: "dev-quality-assistant",
    category: "Engineering",
    heroImage: "/images/articles/dev-quality-hero.webp"
  },
  {
    id: "16",
    title: "The Complete Workflow: Discovery to Deployment in 2025",
    excerpt: "Our current end-to-end SaaS creation system, from validating ideas to shipping code, with 25 agents, 8 quality gates, and zero guesswork.",
    date: "December 7, 2024",
    readTime: "18 min read",
    slug: "complete-workflow-2025",
    category: "AI Workflow",
    heroImage: "/images/articles/complete-workflow-hero.webp"
  },
  {
    id: "15",
    title: "Brand-First Validation: Why We Design the Brand System Before Writing Code",
    excerpt: "Most teams bolt branding on at the end. We make it a pre-build artifact that informs every UI decision.",
    date: "December 7, 2024",
    readTime: "12 min read",
    slug: "brand-first-validation",
    category: "Design Systems",
    heroImage: "/images/articles/brand-first-hero.webp"
  },
  {
    id: "14",
    title: "The AI Tool Stack: How We Coordinate 7 AIs Without Chaos",
    excerpt: "Using multiple AI tools sounds like a nightmare. Here's how we orchestrate Manus, ChatGPT, Claude, ElevenLabs, Midjourney, Glif, and Lindy with clear lanes and zero overlap.",
    date: "December 7, 2024",
    readTime: "18 min read",
    slug: "ai-tool-stack",
    category: "AI Workflow",
    heroImage: "/images/articles/ai-tool-stack-hero.webp"
  },
  {
    id: "13",
    title: "The AI Orchestration: How to Connect Multiple AI Tools in a Systematic Workflow",
    excerpt: "AI tools are powerful, but they're islands. Here's how to orchestrate them into a systematic, auditable workflow.",
    date: "December 7, 2024",
    readTime: "10 min read",
    slug: "ai-orchestration",
    category: "AI Workflow",
    heroImage: "/images/articles/ai-orchestration-hero.webp"
  },
  {
    id: "12",
    title: "Never Ship Outdated Code: How We Use Context7 to Query Live Documentation",
    excerpt: "Most AI code generation uses stale training data. We query live docs via Context7 MCP to ensure code suggestions match the latest version of every library.",
    date: "December 7, 2024",
    readTime: "17 min read",
    slug: "context7-live-docs",
    category: "Engineering",
    heroImage: "/images/articles/context7-hero.webp"
  },
  {
    id: "11",
    title: "From Manual to Automated: How We Use Lindy AI to Execute Validation at Scale",
    excerpt: "Most founders manually manage waitlists and outreach. We automate execution with Lindy while keeping Cursor as our documentation system of record.",
    date: "December 7, 2024",
    readTime: "18 min read",
    slug: "lindy-automated-validation",
    category: "AI Workflow",
    heroImage: "/images/articles/lindy-hero.webp"
  },
  {
    id: "10",
    title: "80% Faster Creatives: How We Use Glif to Batch-Generate Validation Assets",
    excerpt: "Most founders get stuck on 'we need 10 ad variants' and spend days in Canva. We batch-generate creatives with Glif, refine with Midjourney, and ship in hours.",
    date: "December 7, 2024",
    readTime: "16 min read",
    slug: "glif-batch-creatives",
    category: "AI Workflow",
    heroImage: "/images/articles/glif-hero.webp"
  },
  {
    id: "9",
    title: "Scaling Strategy: Building a Portfolio of AI-Powered Businesses",
    excerpt: "After successfully launching and monetizing an MVP, most founders face a choice: Scale one product or build a portfolio. Here's the portfolio approach that creates compounding value through interconnected niche businesses, 90%+ automation, and strategic leverage.",
    date: "August 14, 2025",
    readTime: "6 min read",
    slug: "scaling-strategy",
    category: "Business Strategy",
    heroImage: "/images/articles/scaling-strategy-hero.webp"
  },
  {
    id: "8",
    title: "Monetization Strategy: Generating Revenue from Day One",
    excerpt: "Monetization isn't an afterthought, it's a critical component of product strategy from day one. Learn the modular pricing framework and pre-selling strategy that allows you to generate revenue before building, validate demand with real dollars, and scale systematically.",
    date: "July 21, 2025",
    readTime: "5 min read",
    slug: "monetization-strategy",
    category: "Business Strategy",
    heroImage: "/images/articles/monetization-strategy-hero.webp"
  },
  {
    id: "7",
    title: "The MVP Strategy: Launching Products That Sell Themselves",
    excerpt: "Most MVPs try to do too much. The result: Delayed launches, complex products, unclear value. The alternative: Ship the minimum that creates genuine value. Make it so good people can't help but share it. Learn the virality-by-design framework.",
    date: "June 26, 2025",
    readTime: "8 min read",
    slug: "mvp-strategy",
    category: "Business Strategy",
    heroImage: "/images/articles/mvp-strategy-hero.webp"
  },
  {
    id: "6",
    title: "The Audience-First Go-to-Market Strategy: Building Community Before Launch",
    excerpt: "Most products launch to silence. The pattern: Build for months, announce launch, hear crickets. The issue isn't product quality, it's lack of audience. Here's what works: Build community before launch. Use one platform. Master it. Then expand.",
    date: "June 2, 2025",
    readTime: "5 min read",
    slug: "audience-first-go-to-market",
    category: "Business Strategy",
    heroImage: "/images/articles/audience-first-go-to-market-hero.webp"
  },
  {
    id: "5",
    title: "AI-Powered Market Validation: Finding Underserved Niches and De-Risking Products",
    excerpt: "Building products without validating market demand wastes time and capital. I've seen teams spend 6-12 months building products nobody wants. The pattern repeats: great execution, wrong market. The solution: validate demand before writing code with AI-powered validation.",
    date: "May 8, 2025",
    readTime: "6 min read",
    slug: "ai-powered-market-validation",
    category: "Business Strategy",
    heroImage: "/images/articles/ai-powered-market-validation-hero.webp"
  },
  {
    id: "4",
    title: "The AI-Augmented Workflow: How I Deliver Enterprise-Grade UX 4-6x Faster",
    excerpt: "Speed matters in competitive markets. Traditional UX design cycles take 8-12 weeks. I deliver comparable enterprise-grade outcomes in 2-3 weeks. Not by cutting corners, by strategically implementing AI throughout the entire design process. Here's the framework.",
    date: "March 17, 2025",
    readTime: "5 min read",
    slug: "ai-augmented-workflow",
    category: "AI Workflow",
    heroImage: "/images/articles/ai-augmented-workflow-hero.webp"
  },
  {
    id: "3",
    title: "How I Built an Enterprise Design System in 4 Weeks (Not 12 Months)",
    excerpt: "Most teams spend 12-18 months building enterprise design systems. I built one in 4 weeks. 48 production-ready components. 63,813 lines of code. 100% WCAG 2.2 AA compliance. Not by cutting corners, by strategically implementing AI where it accelerates work.",
    date: "February 24, 2025",
    readTime: "7 min read",
    slug: "design-system-4-weeks",
    category: "Design Systems",
    heroImage: "/images/articles/design-system-4-weeks-hero.webp"
  },
  {
    id: "2",
    title: "The AI-Powered Design Tech Stack: My Exact Workflow",
    excerpt: "After publishing how I built a design system in 4 weeks instead of 12 months, the most common question was: 'What tools did you actually use?' Here's my complete tech stack and exactly how each tool fits into the workflow, from Cursor to V0 to automated testing.",
    date: "February 3, 2025",
    readTime: "8 min read",
    slug: "ai-tech-stack",
    category: "Design Systems",
    heroImage: "/images/articles/ai-tech-stack-hero.webp"
  },
  {
    id: "1",
    title: "Why Most Design Systems Fail (And How to Fix Them)",
    excerpt: "Here's the pattern I've seen repeatedly: Company invests 12-18 months and nearly $1 million building a design system. Six months after launch, adoption sits below 20%. The system becomes shelfware. The data shows three core problems that kill design systems, and three AI-powered solutions that work.",
    date: "January 15, 2025",
    readTime: "9 min read",
    slug: "design-systems-fail",
    category: "Design Systems",
    heroImage: "/images/articles/design-systems-fail-hero.webp"
  }
];


/**
 * One source of truth per category, so the filter pill and the card badge can
 * never drift apart. Previously the pill list had a Product Design entry that
 * the badge switch did not, so those cards rendered with AI Workflow styling.
 */
interface CategoryStyle {
  pillActive: string;
  pillIdle: string;
  badge: string;
}

const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  "Design Systems": {
    pillActive: "bg-blue-500 text-white border-blue-500",
    pillIdle: "border-blue-700/50 bg-blue-900/30 text-blue-300 hover:bg-blue-800/50",
    badge: "border-blue-700/50 bg-blue-900/30 text-blue-300",
  },
  "Business Strategy": {
    pillActive: "bg-cyan-500 text-foreground border-cyan-500",
    pillIdle: "border-cyan-700/50 bg-cyan-900/30 text-cyan-300 hover:bg-cyan-800/50",
    badge: "border-cyan-700/50 bg-cyan-900/30 text-cyan-300",
  },
  "AI Workflow": {
    pillActive: "bg-purple-500 text-white border-purple-500",
    pillIdle: "border-purple-700/50 bg-purple-900/30 text-purple-300 hover:bg-purple-800/50",
    badge: "border-purple-700/50 bg-purple-900/30 text-purple-300",
  },
  Engineering: {
    pillActive: "bg-emerald-500 text-foreground border-emerald-500",
    pillIdle: "border-emerald-700/50 bg-emerald-900/30 text-emerald-300 hover:bg-emerald-800/50",
    badge: "border-emerald-700/50 bg-emerald-900/30 text-emerald-300",
  },
  "Product Design": {
    pillActive: "bg-rose-500 text-white border-rose-500",
    pillIdle: "border-rose-700/50 bg-rose-900/30 text-rose-300 hover:bg-rose-800/50",
    badge: "border-rose-700/50 bg-rose-900/30 text-rose-300",
  },
};

const NEUTRAL_BADGE = "border-border/60 bg-background/60 text-muted-foreground";

const ALL = "All";

const CATEGORY_ORDER: string[] = [
  ALL,
  "Design Systems",
  "Business Strategy",
  "AI Workflow",
  "Engineering",
  "Product Design",
];

function ArticleMeta({ article }: { article: Article }) {
  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <span className="flex items-center gap-2">
        <Calendar className="h-4 w-4" aria-hidden="true" />
        {article.date}
      </span>
      <span className="flex items-center gap-2">
        <Clock className="h-4 w-4" aria-hidden="true" />
        {article.readTime}
      </span>
    </div>
  );
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border px-3 py-1 text-xs font-semibold",
        CATEGORY_STYLES[category]?.badge ?? NEUTRAL_BADGE,
      )}
    >
      {category}
    </span>
  );
}

/** The newest piece, given room so the index has a clear entry point. */
function FeaturedArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      onClick={() =>
        trackArticleCardClick(article.slug, article.title, article.category)
      }
      className="group grid overflow-hidden rounded-2xl border border-border/60 bg-background/40 transition-colors hover:border-primary/50 hover:bg-background/70 lg:grid-cols-2"
    >
      <div className="aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full">
        <img
          loading="lazy"
          src={article.heroImage}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center p-8 md:p-10">
        <div className="mb-5 flex flex-wrap items-center gap-4">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Latest
          </span>
          <CategoryBadge category={article.category} />
        </div>
        <h3 className="text-2xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary md:text-3xl">
          {article.title}
        </h3>
        <p className="mt-5 leading-relaxed text-muted-foreground">{article.excerpt}</p>
        <div className="mt-7 flex items-center justify-between gap-4 border-t border-border/60 pt-5">
          <ArticleMeta article={article} />
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Read
            <ArrowRight
              className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      onClick={() =>
        trackArticleCardClick(article.slug, article.title, article.category)
      }
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-background/40 transition-colors hover:border-primary/50 hover:bg-background/70"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          loading="lazy"
          src={article.heroImage}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4">
          <CategoryBadge category={article.category} />
        </div>
        <h3 className="mb-3 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
          {article.title}
        </h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-border/60 pt-4">
          <ArticleMeta article={article} />
          <ArrowRight
            className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:text-primary motion-safe:group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState<string>(ALL);

  const filteredArticles =
    selectedCategory === ALL
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const getCategoryCount = (category: string) =>
    category === ALL
      ? articles.length
      : articles.filter((article) => article.category === category).length;

  const handleCategoryChange = (category: string) => {
    trackCategoryFilter(category);
    setSelectedCategory(category);
  };

  const [featured, ...rest] = filteredArticles;

  return (
    <SiteLayout currentPage="articles">
      <PageSeo
        title="Articles on AI Design Workflows, DesignOps & Product Strategy | Ryan Winzenburg"
        description="Articles on AI-augmented design workflows, design operations, design systems, UX leadership, and product strategy from 25 years of enterprise design leadership."
        path="/articles"
        ogImage="/images/articles-hero.webp"
      />

      <PageHero
        titleId="articles-hero-title"
        eyebrow="Articles"
        eyebrowNote={`${articles.length} pieces`}
        media={{ src: "/images/articles-hero.webp", position: "object-center" }}
        title="Writing on product experience, operating models, and AI-enabled delivery"
        lede="First-person pieces from enterprise product work. What I tried, what broke, and what I would do differently."
        actions={
          <>
            <Button size="lg" asChild>
              <Link href="/resources">Get the skill packs</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/subscribe">Weekly pulse</Link>
            </Button>
          </>
        }
      />

      <Section labelledBy="articles-index-heading">
        <SectionHeading
          id="articles-index-heading"
          eyebrow="The archive"
          title="Browse by topic"
          lede="Filtering is instant. Every piece stays on one page, newest first."
        />

        <div
          role="group"
          aria-label="Filter articles by category"
          className="mb-12 flex flex-wrap gap-3"
        >
          {CATEGORY_ORDER.map((category) => {
            const isSelected = selectedCategory === category;
            const style = CATEGORY_STYLES[category];
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isSelected}
                onClick={() => handleCategoryChange(category)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                  isSelected
                    ? (style?.pillActive ?? "border-primary bg-background text-foreground")
                    : (style?.pillIdle ??
                        "border-border/60 bg-background/40 text-muted-foreground hover:border-border hover:text-foreground"),
                )}
              >
                {category}{" "}
                <span className="font-normal opacity-70">
                  {getCategoryCount(category)}
                </span>
              </button>
            );
          })}
        </div>

        {filteredArticles.length === 0 ? (
          <div className="rounded-xl border border-border/60 bg-background/40 px-6 py-20 text-center">
            <p className="text-lg text-foreground">
              Nothing published in {selectedCategory} yet.
            </p>
            <p className="mt-3 text-muted-foreground">
              Try another topic, or browse everything.
            </p>
            <Button className="mt-7" variant="outline" onClick={() => handleCategoryChange(ALL)}>
              Show all articles
            </Button>
          </div>
        ) : (
          <>
            {featured ? (
              <Reveal className="mb-12">
                <FeaturedArticleCard article={featured} />
              </Reveal>
            ) : null}
            {rest.length > 0 ? (
              <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {rest.map((article) => (
                  <li key={article.id} className="flex">
                    <ArticleCard article={article} />
                  </li>
                ))}
              </ul>
            ) : null}
          </>
        )}
      </Section>

      <Section tone="muted" compact labelledBy="articles-newsletter-heading">
        <h2 id="articles-newsletter-heading" className="sr-only">
          Newsletter
        </h2>
        <div className="mx-auto max-w-3xl">
          <NewsletterSignup />
        </div>
      </Section>

      <Section labelledBy="articles-cta-heading">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle id="articles-cta-heading">
            Working on something the writing doesn&apos;t cover?
          </SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            If your product organization is dealing with a hard experience,
            operating model, or AI adoption problem, I&apos;d like to hear what
            you&apos;re working on.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact?intent=consulting">Get in touch</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/subscribe">Subscribe to the weekly pulse</Link>
            </Button>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
