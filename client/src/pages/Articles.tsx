import ResponsiveNav from "@/components/ResponsiveNav";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  category: string;
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
    id: "9",
    title: "Scaling Strategy: Building a Portfolio of AI-Powered Businesses",
    excerpt: "After successfully launching and monetizing an MVP, most founders face a choice: Scale one product or build a portfolio. Here's the portfolio approach that creates compounding value through interconnected niche businesses, 90%+ automation, and strategic leverage.",
    date: "August 14, 2025",
    readTime: "6 min read",
    slug: "scaling-strategy",
    category: "Business Strategy"
  },
  {
    id: "8",
    title: "Monetization Strategy: Generating Revenue from Day One",
    excerpt: "Monetization isn't an afterthought—it's a critical component of product strategy from day one. Learn the modular pricing framework and pre-selling strategy that allows you to generate revenue before building, validate demand with real dollars, and scale systematically.",
    date: "July 21, 2025",
    readTime: "5 min read",
    slug: "monetization-strategy",
    category: "Business Strategy"
  },
  {
    id: "7",
    title: "The MVP Strategy: Launching Products That Sell Themselves",
    excerpt: "Most MVPs try to do too much. The result: Delayed launches, complex products, unclear value. The alternative: Ship the minimum that creates genuine value. Make it so good people can't help but share it. Learn the virality-by-design framework.",
    date: "June 26, 2025",
    readTime: "5 min read",
    slug: "mvp-strategy",
    category: "Business Strategy"
  },
  {
    id: "6",
    title: "The Audience-First Go-to-Market Strategy: Building Community Before Launch",
    excerpt: "Most products launch to silence. The pattern: Build for months, announce launch, hear crickets. The issue isn't product quality—it's lack of audience. Here's what works: Build community before launch. Use one platform. Master it. Then expand.",
    date: "June 2, 2025",
    readTime: "5 min read",
    slug: "audience-first-go-to-market",
    category: "Business Strategy"
  },
  {
    id: "5",
    title: "AI-Powered Market Validation: Finding Underserved Niches and De-Risking Products",
    excerpt: "Building products without validating market demand wastes time and capital. I've seen teams spend 6-12 months building products nobody wants. The pattern repeats: great execution, wrong market. The solution: validate demand before writing code with AI-powered validation.",
    date: "May 8, 2025",
    readTime: "6 min read",
    slug: "ai-powered-market-validation",
    category: "Business Strategy"
  },
  {
    id: "4",
    title: "The AI-Augmented Workflow: How I Deliver Enterprise-Grade UX 4-6x Faster",
    excerpt: "Speed matters in competitive markets. Traditional UX design cycles take 8-12 weeks. I deliver comparable enterprise-grade outcomes in 2-3 weeks. Not by cutting corners—by strategically implementing AI throughout the entire design process. Here's the framework.",
    date: "March 17, 2025",
    readTime: "5 min read",
    slug: "ai-augmented-workflow",
    category: "AI Workflow"
  },
  {
    id: "3",
    title: "How I Built an Enterprise Design System in 4 Weeks (Not 12 Months)",
    excerpt: "Most teams spend 12-18 months building enterprise design systems. I built one in 4 weeks. 48 production-ready components. 63,813 lines of code. 100% WCAG 2.2 AA compliance. Not by cutting corners—by strategically implementing AI where it accelerates work.",
    date: "February 24, 2025",
    readTime: "7 min read",
    slug: "design-system-4-weeks",
    category: "Design Systems"
  },
  {
    id: "2",
    title: "The AI-Powered Design Tech Stack: My Exact Workflow",
    excerpt: "After publishing how I built a design system in 4 weeks instead of 12 months, the most common question was: 'What tools did you actually use?' Here's my complete tech stack and exactly how each tool fits into the workflow—from Cursor to V0 to automated testing.",
    date: "February 3, 2025",
    readTime: "8 min read",
    slug: "ai-tech-stack",
    category: "Design Systems"
  },
  {
    id: "1",
    title: "Why Most Design Systems Fail (And How to Fix Them)",
    excerpt: "Here's the pattern I've seen repeatedly: Company invests 12-18 months and nearly $1 million building a design system. Six months after launch, adoption sits below 20%. The system becomes shelfware. The data shows three core problems that kill design systems—and three AI-powered solutions that work.",
    date: "January 15, 2025",
    readTime: "9 min read",
    slug: "design-systems-fail",
    category: "Design Systems"
  }
];

export default function Articles() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <ResponsiveNav currentPage="articles" />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Articles
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            Insights on AI-augmented UX workflows, design systems, and strategic product development.
            Learn how to leverage AI to build better products faster.
          </p>

          {/* Category Pills - UPDATE COUNTS when adding articles */}
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-blue-900/30 border border-blue-700/50 text-blue-300 rounded-full text-sm font-semibold">
              Design Systems (3)
            </span>
            <span className="px-4 py-2 bg-cyan-900/30 border border-cyan-700/50 text-cyan-300 rounded-full text-sm font-semibold">
              Business Strategy (5)
            </span>
            <span className="px-4 py-2 bg-purple-900/30 border border-purple-700/50 text-purple-300 rounded-full text-sm font-semibold">
              AI Workflow (1)
            </span>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-6 pb-32">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8 hover:border-blue-500/50 transition-all duration-300 group"
              >
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
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h2>

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
              </article>
            ))}
          </div>
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
              Get in Touch
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
