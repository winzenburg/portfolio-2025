import ResponsiveNav from "@/components/ResponsiveNav";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";
import NewsletterSignup from "@/components/NewsletterSignup";
import { useState } from "react";

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
 * See ARTICLES_WORKFLOW.md for complete documentation.
 */

const articles: Article[] = [
  {
    id: "34",
    title: "The Technical Stack: Modern Web Standards for Product Creation Platforms",
    excerpt: "Building a systematic approach to SaaS product creation with a production-ready platform, not a prototype.",
    date: "December 7, 2024",
    readTime: "11 min read",
    slug: "technical-stack",
    category: "Engineering",
    heroImage: "/images/articles/tech-stack.png"
  },
  {
    id: "33",
    title: "The Supabase MCP Blueprint: Production-Grade Backends in Minutes, Not Weeks",
    excerpt: "Backend design is usually trial-and-error. We turned it into a repeatable blueprint using Supabase MCP.",
    date: "December 7, 2024",
    readTime: "18 min read",
    slug: "supabase-mcp-blueprint",
    category: "Engineering",
    heroImage: "/images/articles/supabase-mcp-hero.png"
  },
  {
    id: "32",
    title: "The Solution: A Dual-Filter Validation Framework",
    excerpt: "Heat gets you in. Durability makes it a real SaaS business.",
    date: "December 7, 2024",
    readTime: "8 min read",
    slug: "dual-filter-validation",
    category: "Business Strategy",
    heroImage: "/images/articles/dual-filter-hero.png"
  },
  {
    id: "31",
    title: "The Security & Bug Gate: Two-Tier Code Review for AI-Generated Features",
    excerpt: "AI can ship features fast, but it can also ship vulnerabilities. Here's our quality firewall.",
    date: "December 7, 2024",
    readTime: "13 min read",
    slug: "security-bug-gate",
    category: "Engineering",
    heroImage: "/images/articles/security-gate-hero-v2.png"
  },
  {
    id: "30",
    title: "The Rules and Agents System: Making the Process Repeatable",
    excerpt: "What if your product creation process was as systematic as your code?",
    date: "December 7, 2024",
    readTime: "9 min read",
    slug: "rules-and-agents",
    category: "AI Workflow",
    heroImage: "/images/articles/rules-agents-hero.png"
  },
  {
    id: "29",
    title: "The Rule Consolidation: How We Kept 40+ Rules Manageable Without Losing Power",
    excerpt: "Most systems collapse under their own complexity. Here's how we prevented that with a unified taxonomy and single foreman orchestrator.",
    date: "December 7, 2024",
    readTime: "10 min read",
    slug: "rule-consolidation",
    category: "AI Workflow",
    heroImage: "/images/articles/rule-consolidation-hero.png"
  },
  {
    id: "28",
    title: "The Results: What We've Learned Building This System",
    excerpt: "Building a systematic product creation engine. Here's what works, what doesn't, and what we've learned.",
    date: "December 7, 2024",
    readTime: "9 min read",
    slug: "system-results",
    category: "Business Strategy",
    heroImage: "/images/articles/results-hero.png"
  },
  {
    id: "27",
    title: "The Problem: Why Most SaaS Startups Fail Before They Even Start",
    excerpt: "Exploring why 90% of SaaS startups fail and how the problem isn't the idea—it's the process.",
    date: "December 7, 2024",
    readTime: "7 min read",
    slug: "saas-problem",
    category: "Business Strategy",
    heroImage: "/images/articles/saas-problem-hero.png"
  },
  {
    id: "26",
    title: "The Portfolio Approach: Managing Multiple Bets, Killing Fast, Prioritizing by Expected Value",
    excerpt: "You're not building one product. You're managing a portfolio of bets.",
    date: "December 7, 2024",
    readTime: "8 min read",
    slug: "portfolio-approach",
    category: "Business Strategy",
    heroImage: "/images/articles/portfolio-hero.png"
  },
  {
    id: "25",
    title: "Personalization with Privacy: How We Design Adaptive UX That Respects Consent",
    excerpt: "Personalization can feel creepy. Here's how to make it thoughtful, transparent, and opt-in.",
    date: "December 7, 2024",
    readTime: "16 min read",
    slug: "personalization-privacy",
    category: "Design Systems",
    heroImage: "/images/articles/personalization-hero.png"
  },
  {
    id: "24",
    title: "The Open Source Vision: Building a Community Around Product Creation",
    excerpt: "What if the entire product creation process was open source? Explore the benefits of a community-driven, transparent approach to building successful SaaS products.",
    date: "December 7, 2024",
    readTime: "10 min read",
    slug: "open-source-vision",
    category: "Business Strategy",
    heroImage: "/images/articles/open-source-hero.png"
  },
  {
    id: "23",
    title: "Micro-Interactions Done Right: Apple-Style Motion That Guides Without Distracting",
    excerpt: "Bad animations annoy. Great ones are invisible. Here's our playbook for refined, goal-driven micro-interactions.",
    date: "December 7, 2024",
    readTime: "13 min read",
    slug: "micro-interactions",
    category: "Design Systems",
    heroImage: "/images/articles/micro-interactions-hero.png"
  },
  {
    id: "22",
    title: "The Kill/Greenlight Ritual: How We Stay Ruthless About Portfolio Quality",
    excerpt: "Most founders can't kill ideas because of sunk costs. We make tough decisions systematically, not emotionally, using weekly reviews and clear kill criteria.",
    date: "December 7, 2024",
    readTime: "19 min read",
    slug: "kill-greenlight-ritual",
    category: "Business Strategy",
    heroImage: "/images/articles/kill-greenlight-hero.png"
  },
  {
    id: "21",
    title: "The Hub Evolution: From Static Docs to Real-Time Portfolio Intelligence",
    excerpt: "Most docs systems are graveyards. Ours is a living strategy layer that surfaces portfolio status, filters ideas, and drives kill/greenlight decisions.",
    date: "December 7, 2024",
    readTime: "15 min read",
    slug: "hub-evolution",
    category: "AI Workflow",
    heroImage: "/images/articles/hub-evolution-hero.png"
  },
  {
    id: "20",
    title: "The Hub: A Meta-Project for Managing Your Product Portfolio",
    excerpt: "What if you had a dashboard for managing your entire product portfolio?",
    date: "December 7, 2024",
    readTime: "9 min read",
    slug: "the-hub",
    category: "AI Workflow",
    heroImage: "/images/articles/hub-hero.png"
  },
  {
    id: "19",
    title: "Gamification That Doesn't Manipulate: Designing Habit Loops with Industry-Appropriate Mascots",
    excerpt: "Gamification is often manipulative. Here's how to make it helpful, respectful, and tailored to your industry.",
    date: "December 7, 2024",
    readTime: "17 min read",
    slug: "gamification-done-right",
    category: "Design Systems",
    heroImage: "/images/articles/gamification-hero.png"
  },
  {
    id: "18",
    title: "The Documentation System: Making Knowledge Repeatable and Auditable",
    excerpt: "Knowledge gets lost. Processes aren't repeatable. What if every decision was documented and auditable?",
    date: "December 7, 2024",
    readTime: "8 min read",
    slug: "documentation-system",
    category: "AI Workflow",
    heroImage: "/images/articles/docs-system-hero.png"
  },
  {
    id: "17",
    title: "The Dev Quality Assistant: Test Planning Before Code Touches the Repo",
    excerpt: "Most teams treat testing as an afterthought. We make it a build prerequisite.",
    date: "December 7, 2024",
    readTime: "14 min read",
    slug: "dev-quality-assistant",
    category: "Engineering",
    heroImage: "/images/articles/dev-quality-hero.png"
  },
  {
    id: "16",
    title: "The Complete Workflow: Discovery to Deployment in 2025",
    excerpt: "Our current end-to-end SaaS creation system, from validating ideas to shipping code—with 25 agents, 8 quality gates, and zero guesswork.",
    date: "December 7, 2024",
    readTime: "18 min read",
    slug: "complete-workflow-2025",
    category: "AI Workflow",
    heroImage: "/images/articles/complete-workflow-hero.png"
  },
  {
    id: "15",
    title: "Brand-First Validation: Why We Design the Brand System Before Writing Code",
    excerpt: "Most teams bolt branding on at the end. We make it a pre-build artifact that informs every UI decision.",
    date: "December 7, 2024",
    readTime: "12 min read",
    slug: "brand-first-validation",
    category: "Design Systems",
    heroImage: "/images/articles/brand-first-hero.png"
  },
  {
    id: "14",
    title: "The AI Tool Stack: How We Coordinate 7 AIs Without Chaos",
    excerpt: "Using multiple AI tools sounds like a nightmare. Here's how we orchestrate Manus, ChatGPT, Claude, ElevenLabs, Midjourney, Glif, and Lindy with clear lanes and zero overlap.",
    date: "December 7, 2024",
    readTime: "18 min read",
    slug: "ai-tool-stack",
    category: "AI Workflow",
    heroImage: "/images/articles/ai-tool-stack-hero.png"
  },
  {
    id: "13",
    title: "The AI Orchestration: How to Connect Multiple AI Tools in a Systematic Workflow",
    excerpt: "AI tools are powerful, but they're islands. Here's how to orchestrate them into a systematic, auditable workflow.",
    date: "December 7, 2024",
    readTime: "10 min read",
    slug: "ai-orchestration",
    category: "AI Workflow",
    heroImage: "/images/articles/ai-orchestration-hero.png"
  },
  {
    id: "12",
    title: "Never Ship Outdated Code: How We Use Context7 to Query Live Documentation",
    excerpt: "Most AI code generation uses stale training data. We query live docs via Context7 MCP to ensure code suggestions match the latest version of every library.",
    date: "December 7, 2024",
    readTime: "17 min read",
    slug: "context7-live-docs",
    category: "Engineering",
    heroImage: "/images/articles/context7-hero.png"
  },
  {
    id: "11",
    title: "From Manual to Automated: How We Use Lindy AI to Execute Validation at Scale",
    excerpt: "Most founders manually manage waitlists and outreach. We automate execution with Lindy while keeping Cursor as our documentation system of record.",
    date: "December 7, 2024",
    readTime: "18 min read",
    slug: "lindy-automated-validation",
    category: "AI Workflow",
    heroImage: "/images/articles/lindy-hero.png"
  },
  {
    id: "10",
    title: "80% Faster Creatives: How We Use Glif to Batch-Generate Validation Assets",
    excerpt: "Most founders get stuck on 'we need 10 ad variants' and spend days in Canva. We batch-generate creatives with Glif, refine with Midjourney, and ship in hours.",
    date: "December 7, 2024",
    readTime: "16 min read",
    slug: "glif-batch-creatives",
    category: "AI Workflow",
    heroImage: "/images/articles/glif-hero.png"
  },
  {
    id: "9",
    title: "Scaling Strategy: Building a Portfolio of AI-Powered Businesses",
    excerpt: "After successfully launching and monetizing an MVP, most founders face a choice: Scale one product or build a portfolio. Here's the portfolio approach that creates compounding value through interconnected niche businesses, 90%+ automation, and strategic leverage.",
    date: "August 14, 2025",
    readTime: "6 min read",
    slug: "scaling-strategy",
    category: "Business Strategy",
    heroImage: "/images/articles/scaling-strategy-hero.png"
  },
  {
    id: "8",
    title: "Monetization Strategy: Generating Revenue from Day One",
    excerpt: "Monetization isn't an afterthought—it's a critical component of product strategy from day one. Learn the modular pricing framework and pre-selling strategy that allows you to generate revenue before building, validate demand with real dollars, and scale systematically.",
    date: "July 21, 2025",
    readTime: "5 min read",
    slug: "monetization-strategy",
    category: "Business Strategy",
    heroImage: "/images/articles/monetization-strategy-hero.png"
  },
  {
    id: "7",
    title: "The MVP Strategy: Launching Products That Sell Themselves",
    excerpt: "Most MVPs try to do too much. The result: Delayed launches, complex products, unclear value. The alternative: Ship the minimum that creates genuine value. Make it so good people can't help but share it. Learn the virality-by-design framework.",
    date: "June 26, 2025",
    readTime: "8 min read",
    slug: "mvp-strategy",
    category: "Business Strategy",
    heroImage: "/images/articles/mvp-strategy-hero.png"
  },
  {
    id: "6",
    title: "The Audience-First Go-to-Market Strategy: Building Community Before Launch",
    excerpt: "Most products launch to silence. The pattern: Build for months, announce launch, hear crickets. The issue isn't product quality—it's lack of audience. Here's what works: Build community before launch. Use one platform. Master it. Then expand.",
    date: "June 2, 2025",
    readTime: "5 min read",
    slug: "audience-first-go-to-market",
    category: "Business Strategy",
    heroImage: "/images/articles/audience-first-go-to-market-hero.png"
  },
  {
    id: "5",
    title: "AI-Powered Market Validation: Finding Underserved Niches and De-Risking Products",
    excerpt: "Building products without validating market demand wastes time and capital. I've seen teams spend 6-12 months building products nobody wants. The pattern repeats: great execution, wrong market. The solution: validate demand before writing code with AI-powered validation.",
    date: "May 8, 2025",
    readTime: "6 min read",
    slug: "ai-powered-market-validation",
    category: "Business Strategy",
    heroImage: "/images/articles/ai-powered-market-validation-hero.png"
  },
  {
    id: "4",
    title: "The AI-Augmented Workflow: How I Deliver Enterprise-Grade UX 4-6x Faster",
    excerpt: "Speed matters in competitive markets. Traditional UX design cycles take 8-12 weeks. I deliver comparable enterprise-grade outcomes in 2-3 weeks. Not by cutting corners—by strategically implementing AI throughout the entire design process. Here's the framework.",
    date: "March 17, 2025",
    readTime: "5 min read",
    slug: "ai-augmented-workflow",
    category: "AI Workflow",
    heroImage: "/images/articles/ai-augmented-workflow-hero.png"
  },
  {
    id: "3",
    title: "How I Built an Enterprise Design System in 4 Weeks (Not 12 Months)",
    excerpt: "Most teams spend 12-18 months building enterprise design systems. I built one in 4 weeks. 48 production-ready components. 63,813 lines of code. 100% WCAG 2.2 AA compliance. Not by cutting corners—by strategically implementing AI where it accelerates work.",
    date: "February 24, 2025",
    readTime: "7 min read",
    slug: "design-system-4-weeks",
    category: "Design Systems",
    heroImage: "/images/articles/design-system-4-weeks-hero.png"
  },
  {
    id: "2",
    title: "The AI-Powered Design Tech Stack: My Exact Workflow",
    excerpt: "After publishing how I built a design system in 4 weeks instead of 12 months, the most common question was: 'What tools did you actually use?' Here's my complete tech stack and exactly how each tool fits into the workflow—from Cursor to V0 to automated testing.",
    date: "February 3, 2025",
    readTime: "8 min read",
    slug: "ai-tech-stack",
    category: "Design Systems",
    heroImage: "/images/articles/ai-tech-stack-hero.png"
  },
  {
    id: "1",
    title: "Why Most Design Systems Fail (And How to Fix Them)",
    excerpt: "Here's the pattern I've seen repeatedly: Company invests 12-18 months and nearly $1 million building a design system. Six months after launch, adoption sits below 20%. The system becomes shelfware. The data shows three core problems that kill design systems—and three AI-powered solutions that work.",
    date: "January 15, 2025",
    readTime: "9 min read",
    slug: "design-systems-fail",
    category: "Design Systems",
    heroImage: "/images/articles/design-systems-fail-hero.png"
  }
];

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredArticles = selectedCategory === "All"
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  const getCategoryCount = (category: string) => {
    if (category === "All") return articles.length;
    return articles.filter(article => article.category === category).length;
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <ResponsiveNav currentPage="articles" />

      {/* Hero Section */}
      <section className="relative py-20 mb-16 md:mb-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/images/articles-hero.png"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto max-w-4xl bg-slate-950/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800/50">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Articles
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            Insights on AI-augmented UX workflows, design systems, and strategic product development.
            Learn how to leverage AI to build better products faster.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === "All"
                  ? 'bg-white text-slate-900 border border-white'
                  : 'bg-slate-800/50 border border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500'
              }`}
            >
              All ({getCategoryCount("All")})
            </button>
            <button
              onClick={() => setSelectedCategory("Design Systems")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === "Design Systems"
                  ? 'bg-blue-500 text-white border border-blue-500'
                  : 'bg-blue-900/30 border border-blue-700/50 text-blue-300 hover:bg-blue-800/50'
              }`}
            >
              Design Systems ({getCategoryCount("Design Systems")})
            </button>
            <button
              onClick={() => setSelectedCategory("Business Strategy")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === "Business Strategy"
                  ? 'bg-cyan-500 text-white border border-cyan-500'
                  : 'bg-cyan-900/30 border border-cyan-700/50 text-cyan-300 hover:bg-cyan-800/50'
              }`}
            >
              Business Strategy ({getCategoryCount("Business Strategy")})
            </button>
            <button
              onClick={() => setSelectedCategory("AI Workflow")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === "AI Workflow"
                  ? 'bg-purple-500 text-white border border-purple-500'
                  : 'bg-purple-900/30 border border-purple-700/50 text-purple-300 hover:bg-purple-800/50'
              }`}
            >
              AI Workflow ({getCategoryCount("AI Workflow")})
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-3xl">
          <NewsletterSignup />
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-6 pb-32">
        <div className="container mx-auto max-w-5xl">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-400 text-lg">No articles found in this category.</p>
            </div>
          ) : (
            <div className="grid gap-8">
              {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
              >
                {/* Hero Image */}
                <Link href={`/articles/${article.slug}`}>
                  <div className="w-full overflow-hidden" style={{ aspectRatio: '4/1' }}>
                    <img
                      src={article.heroImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>

                <div className="p-8">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      article.category === 'Design Systems'
                        ? 'bg-blue-900/30 border border-blue-700/50 text-blue-300'
                        : article.category === 'Business Strategy'
                        ? 'bg-cyan-900/30 border border-cyan-700/50 text-cyan-300'
                        : 'bg-purple-900/30 border border-purple-700/50 text-purple-300'
                    }`}>
                      {article.category}
                    </span>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <Link href={`/articles/${article.slug}`}>
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors cursor-pointer">
                      {article.title}
                    </h2>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link href={`/articles/${article.slug}`}>
                    <a className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Link>
                </div>
              </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900/50 border-t border-slate-700/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Accelerate Your Product Development?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how I can help you deliver enterprise-grade UX 4-6x faster.
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
              Schedule a Call
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
