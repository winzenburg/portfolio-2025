import { ArrowLeft, Calendar, Clock } from "lucide-react";
import ResponsiveNav from "@/components/ResponsiveNav";
import { Link } from "wouter";

export default function MonetizationStrategy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <ResponsiveNav currentPage="articles" />

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
              src="/portfolio-2025/images/articles/monetization-hero.png"
              alt="Monetization Strategy"
              className="w-full h-auto"
            />
          </div>

          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>October 12, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Monetization Strategy: Generating Revenue from Day One
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Monetization isn't an afterthought. It's a critical component of product strategy from day one.
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed mb-6">
              The teams that succeed plan revenue generation before building. Here's the framework.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Modular Pricing Framework
            </h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Step 1: Customer Segmentation
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Understand who pays and why</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Solo users: Price-sensitive, need core functionality</li>
              <li>Small teams: Value collaboration, moderate budgets</li>
              <li>Enterprises: Need scale, compliance, support</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Data to gather</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Budget ranges by segment</li>
              <li>Feature priorities by segment</li>
              <li>Support expectations</li>
              <li>Buying process (self-serve vs. sales)</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Step 2: Tier Creation
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">The 3-tier model</strong> (most common):
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Free tier</strong> (optional):
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Limited usage (e.g., 3 projects)</li>
              <li>Core functionality only</li>
              <li>Community support</li>
              <li>Upgrade prompts</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Pro tier</strong> (individual/small team):
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Unlimited usage</li>
              <li>Advanced features</li>
              <li>Email support</li>
              <li>$29-99/month</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Enterprise tier</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Custom limits</li>
              <li>White-label options</li>
              <li>Dedicated support</li>
              <li>SSO, compliance</li>
              <li>Custom pricing ($500-5000+/month)</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Step 3: Value-Based Pricing
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Core principle</strong>: Price based on value delivered, not cost or competition.
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Value calculation</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Time saved × hourly rate</li>
              <li>Revenue enabled</li>
              <li>Cost avoided</li>
              <li>Risk reduced</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Example</strong>: If tool saves 10 hours/month and user's time is worth $100/hour, you deliver $1,000/month in value. Pricing at $100-200/month (10-20% of value) makes it a no-brainer.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Step 4: Pricing Psychology
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">What works</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Annual plans (2 months free → 83% take annual)</li>
              <li>Tiered pricing (most choose middle option)</li>
              <li>Clear feature differentiation</li>
              <li>Remove vs. add framing ("Unlimited" not "No limits")</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">What doesn't</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Too many tiers (3-4 max)</li>
              <li>Confusing feature matrices</li>
              <li>Hidden costs</li>
              <li>Unclear upgrade paths</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Pre-Selling Strategy
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Core insight</strong>: Sell before building.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Why It Works
            </h3>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li><strong className="text-white">Validates demand</strong>: People voting with wallets, not words</li>
              <li><strong className="text-white">Generates capital</strong>: Fund development with revenue</li>
              <li><strong className="text-white">Creates urgency</strong>: Limited-time offers drive action</li>
              <li><strong className="text-white">Builds advocates</strong>: Early buyers become evangelists</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Implementation
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Step 1: Create compelling pre-sale offer</strong>
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Lifetime deals (limited quantity)</li>
              <li>Founding member pricing (lock in forever rate)</li>
              <li>Early access + discount</li>
              <li>Input on roadmap</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Step 2: Build landing page</strong>
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Clear value proposition</li>
              <li>Specific launch timeline</li>
              <li>Pre-sale offer details</li>
              <li>Trust signals (social proof, background)</li>
              <li>Payment processing ready</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Step 3: Drive traffic</strong>
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Audience built during validation</li>
              <li>Creator partnerships</li>
              <li>Paid acquisition</li>
              <li>PR and outreach</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Step 4: Deliver and communicate</strong>
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Regular development updates</li>
              <li>Involve buyers in decisions</li>
              <li>Over-communicate timeline</li>
              <li>Deliver value early</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Success Metrics
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Pre-sale targets</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>50-100 buyers validates demand</li>
              <li>$10K-50K funds MVP development</li>
              <li>&lt;10 buyers signals weak demand (pivot)</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Conversion rates</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Landing page: 2-5% visitor to buyer</li>
              <li>Email list: 10-20% subscriber to buyer</li>
              <li>Pre-sale to full price: 70-90% retention</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Combined Approach
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Timeline</strong>:<br/>
              - Validation: Weeks 1-2<br/>
              - Pre-sale setup: Week 3<br/>
              - Pre-sale launch: Week 4<br/>
              - Development: Weeks 5-12<br/>
              - Launch: Week 13
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Revenue generation</strong>:<br/>
              - Pre-sales: $10K-50K<br/>
              - Launch month: $5K-20K MRR<br/>
              - Month 3: $15K-50K MRR<br/>
              - Month 6: $30K-100K MRR
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">The compounding effect</strong>: Revenue funds growth. Growth drives revenue.
            </p>
          </div>

          {/* Next Article */}
          <div className="mt-16 pt-8 border-t border-slate-700">
            <p className="text-sm text-slate-400 mb-4">Next Article</p>
            <Link href="/articles/scaling-strategy">
              <a className="group">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                  Scaling Strategy: Building a Portfolio of AI-Powered Businesses
                </h3>
                <p className="text-slate-300">
                  Learn the portfolio approach to building a complementary ecosystem of businesses.
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
