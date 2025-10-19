import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";

export default function AudienceFirstGoToMarket() {
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

      {/* Article Content */}
      <article className="py-12 px-6">
        <div className="container mx-auto max-w-3xl">
          {/* Back Button */}
          <Link href="/articles">
            <a className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </a>
          </Link>

          {/* Hero Image */}
          <div className="mb-12 -mx-6 md:mx-0 md:rounded-lg overflow-hidden">
            <img 
              src="/images/articles/go-to-market-hero.png" 
              alt="Audience-First Go-to-Market Strategy" 
              className="w-full h-auto"
            />
          </div>

          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>October 18, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The Audience-First Go-to-Market Strategy: How to Build a Community Before You Launch
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Greg Isenberg's go-to-market strategy is rooted in a simple yet powerful principle: "Master ONE platform before expanding."
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed mb-6">
              This "audience-first" approach is about building a loyal and engaged community on a single platform before diversifying your marketing efforts. In the age of AI, this strategy is more effective than ever, as AI tools can help you to create high-quality content at scale and to identify and engage with your target audience with unprecedented precision.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              In this article, I'll share how I apply this audience-first approach to help my clients build a community and generate buzz before they even launch their product.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Primary Platform: Twitter/X
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              For many of the businesses I advise, Twitter (now X) is the primary platform of choice. This is because it's a hub for entrepreneurs, developers, and other key demographics for B2B and SaaS products. The strategy is to share "building in public" content, providing a behind-the-scenes look at the creation of your product.
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Content Themes:</strong>
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>"Day X of building the first AI-powered [your product]"</li>
              <li>"Here's how AI agents helped me generate [a key feature] in [a short amount of time]"</li>
              <li>"The hidden costs of [a common pain point] (and how AI eliminates them)"</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Content Calendar Framework:</strong>
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li><strong className="text-white">Monday:</strong> Technical insights (e.g., AI agent workflows, new tools you're using)</li>
              <li><strong className="text-white">Wednesday:</strong> Business insights (e.g., cost savings, time reduction, new market opportunities)</li>
              <li><strong className="text-white">Friday:</strong> Behind-the-scenes building content (e.g., progress updates, challenges you're facing)</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Creator Partnership Strategy
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Another key component of Isenberg's go-to-market strategy is the creator partnership. He advocates for partnering with creators for "MASSIVE distribution." This is about leveraging the existing audiences of influencers and thought leaders in your niche to reach a wider audience.
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Implementation:</strong>
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Identify top influencers and developer advocates in your niche</li>
              <li>Offer a compelling partnership proposal, such as 10-20% equity or 30-50% revenue share for promotion</li>
              <li>Target creators who are already discussing the topics that are relevant to your product</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Paid Acquisition Strategy
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              While organic growth is important, paid acquisition can be a powerful way to accelerate your growth. Isenberg is a proponent of the Cody Schneider Google Ads Framework, which provides a systematic approach to paid acquisition.
            </p>

            <h3 className="text-2xl font-bold text-white mt-10 mb-4">
              The Cody Schneider Google Ads Framework:
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Phase 1: Google Ads Setup</strong>
            </p>

            <ol className="list-decimal list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Start with a "clicks" campaign to gather data</li>
              <li>Target keywords that are highly relevant to your product</li>
              <li>Use phrase match keywords in quotes to ensure that your ads are only shown to relevant users</li>
              <li>Implement conversion tracking to measure the effectiveness of your campaigns</li>
            </ol>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Phase 2: Facebook/Instagram Disruption Ads</strong>
            </p>

            <ol className="list-decimal list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Create AI-generated video ads using tools like HeyGen</li>
              <li>Address specific pain points in your ad copy</li>
            </ol>

            <p className="text-slate-300 leading-relaxed mb-6">
              By combining an audience-first approach with strategic creator partnerships and targeted paid acquisition, you can build a powerful go-to-market engine that drives sustainable growth.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              In my next article, I'll explore how to translate your market research and go-to-market strategy into a compelling Minimum Viable Product (MVP). Stay tuned!
            </p>
          </div>

          {/* Next Article */}
          <div className="mt-16 pt-8 border-t border-slate-700">
            <p className="text-sm text-slate-400 mb-4">Next Article</p>
            <Link href="/articles/mvp-strategy">
              <a className="group">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                  The MVP Strategy: How to Launch a Product That Sells Itself
                </h3>
                <p className="text-slate-300">
                  Learn my framework for developing an MVP that is not only functional but also inherently shareable.
                </p>
              </a>
            </Link>
          </div>
        </div>
      </article>

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

