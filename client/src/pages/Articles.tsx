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
}

const articles: Article[] = [
  {
    id: "1",
    title: "The AI-Augmented Workflow: How I Deliver Enterprise-Grade UX 4-6x Faster",
    excerpt: "In today's competitive landscape, speed to market is not just an advantage—it's a necessity. Learn how I leverage AI tools to deliver the same high-quality, enterprise-grade UX strategy and design outcomes in a fraction of the time.",
    date: "October 18, 2025",
    readTime: "5 min read",
    slug: "ai-augmented-workflow"
  },
  {
    id: "2",
    title: "AI-Powered Market Validation: How to Find Underserved Niches and De-Risk Your Product",
    excerpt: "The foundation of any successful business is a deep understanding of the market. Discover my framework for AI-powered market validation that helps identify underserved niches and de-risk product development.",
    date: "October 18, 2025",
    readTime: "6 min read",
    slug: "ai-powered-market-validation"
  },
  {
    id: "3",
    title: "The Audience-First Go-to-Market Strategy: How to Build a Community Before You Launch",
    excerpt: "Master ONE platform before expanding. Learn how to build a loyal and engaged community on a single platform before diversifying your marketing efforts.",
    date: "October 18, 2025",
    readTime: "5 min read",
    slug: "audience-first-go-to-market"
  },
  {
    id: "4",
    title: "The MVP Strategy: How to Launch a Product That Sells Itself",
    excerpt: "Your MVP should be focused on solving a single, critical pain point. Learn my framework for developing an MVP that is not only functional but also inherently shareable.",
    date: "October 18, 2025",
    readTime: "5 min read",
    slug: "mvp-strategy"
  },
  {
    id: "5",
    title: "Monetization Strategy: How to Generate Revenue from Day One",
    excerpt: "Monetization is not an afterthought. Discover my framework for developing a monetization strategy that allows you to generate revenue from day one.",
    date: "October 18, 2025",
    readTime: "5 min read",
    slug: "monetization-strategy"
  },
  {
    id: "6",
    title: "Scaling Strategy: How to Build a Portfolio of AI-Powered Businesses",
    excerpt: "Once you've successfully launched and monetized your MVP, it's time to think about scaling. Learn the portfolio approach to building a complementary ecosystem of businesses.",
    date: "October 18, 2025",
    readTime: "6 min read",
    slug: "scaling-strategy"
  }
];

export default function Articles() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/">
              <a className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                Ryan Winzenburg
              </a>
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/work">
                <a className="text-slate-300 hover:text-white transition-colors">Work</a>
              </Link>
              <Link href="/methodology">
                <a className="text-slate-300 hover:text-white transition-colors">Methodology</a>
              </Link>
              <Link href="/about">
                <a className="text-slate-300 hover:text-white transition-colors">About</a>
              </Link>
              <Link href="/services">
                <a className="text-slate-300 hover:text-white transition-colors">Services</a>
              </Link>
              <Link href="/articles">
                <a className="text-white font-semibold">Articles</a>
              </Link>
              <Link href="/contact">
                <a className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Contact
                </a>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Articles
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Insights on AI-augmented UX workflows, design systems, and strategic product development. 
            Learn how to leverage AI to build better products faster.
          </p>
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

                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h2>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {article.excerpt}
                </p>

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

