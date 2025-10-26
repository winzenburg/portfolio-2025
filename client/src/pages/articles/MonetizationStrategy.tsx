import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
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
                <span>July 21, 2025</span>
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

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-blue-500">
              <p className="text-2xl text-blue-400 font-semibold italic leading-relaxed">
                "Monetization isn't an afterthought—it's the validation that your product solves a real problem worth paying for."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Modular Pricing Framework
            </h2>

            <h3 className="text-2xl font-bold text-blue-400 mt-8 mb-4">
              Step 1: Customer Segmentation
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Understand who pays and why</strong>:
            </p>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span><strong className="text-white">Solo users:</strong> Price-sensitive, need core functionality</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span><strong className="text-white">Small teams:</strong> Value collaboration, moderate budgets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span><strong className="text-white">Enterprises:</strong> Need scale, compliance, support</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Data to gather</strong>:
            </p>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span className="text-slate-300">Budget ranges by segment</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span className="text-slate-300">Feature priorities by segment</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span className="text-slate-300">Support expectations</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span className="text-slate-300">Buying process (self-serve vs. sales)</span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-400 mt-8 mb-4">
              Step 2: Tier Creation
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">The 3-tier model</strong> (most common):
            </p>

            {/* Pricing Tiers Comparison */}
            <div className="my-10 grid md:grid-cols-3 gap-6">
              <div className="bg-slate-900/30 border border-slate-700 rounded-lg p-6">
                <div className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Free Tier (optional)</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span className="text-slate-300">Limited usage (e.g., 3 projects)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span className="text-slate-300">Core functionality only</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span className="text-slate-300">Community support</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span className="text-slate-300">Upgrade prompts</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-700/50 rounded-lg p-6">
                <div className="text-blue-400 font-semibold mb-4 uppercase text-sm tracking-wider">Pro Tier (Most Popular)</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span className="text-slate-300">Unlimited usage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span className="text-slate-300">Advanced features</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span className="text-slate-300">Email support</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span className="text-white font-semibold">$29-99/month</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/50 border border-purple-700/50 rounded-lg p-6">
                <div className="text-purple-400 font-semibold mb-4 uppercase text-sm tracking-wider">Enterprise Tier</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400">✓</span>
                    <span className="text-slate-300">Custom limits</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400">✓</span>
                    <span className="text-slate-300">White-label options</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400">✓</span>
                    <span className="text-slate-300">Dedicated support + SSO</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400">✓</span>
                    <span className="text-white font-semibold">$500-5000+/month</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-400 mt-8 mb-4">
              Step 3: Value-Based Pricing
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Core principle</strong>: Price based on value delivered, not cost or competition.
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Value calculation</strong>:
            </p>

            <div className="my-8 bg-blue-900/20 border border-blue-700/50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold text-xl">+</span>
                  <div>
                    <div className="text-white font-semibold">Time saved × hourly rate</div>
                    <div className="text-slate-400 text-sm">Productivity gains</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold text-xl">+</span>
                  <div>
                    <div className="text-white font-semibold">Revenue enabled</div>
                    <div className="text-slate-400 text-sm">New income streams</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold text-xl">+</span>
                  <div>
                    <div className="text-white font-semibold">Cost avoided</div>
                    <div className="text-slate-400 text-sm">Expenses eliminated</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold text-xl">+</span>
                  <div>
                    <div className="text-white font-semibold">Risk reduced</div>
                    <div className="text-slate-400 text-sm">Problems prevented</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Pricing Example */}
            <div className="my-10 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">Value Pricing Example</div>
                <div className="text-white font-semibold mb-4">Tool saves 10 hours/month at $100/hour</div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">$1,000</div>
                  <div className="text-sm text-slate-400">Monthly value delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">$100-200</div>
                  <div className="text-sm text-slate-400">Optimal price (10-20%)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">No-brainer</div>
                  <div className="text-sm text-slate-400">Customer decision</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-400 mt-8 mb-4">
              Step 4: Pricing Psychology
            </h3>

            {/* Psychology Comparison */}
            <div className="my-10 grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-900/20 to-green-900/20 border border-green-700/50 rounded-lg p-6">
                <div className="text-green-400 font-semibold mb-4 uppercase text-sm tracking-wider">What Works</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-slate-300">Annual plans (2 months free → 83% take annual)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-slate-300">Tiered pricing (most choose middle option)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-slate-300">Clear feature differentiation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-slate-300">Remove vs. add framing ("Unlimited" not "No limits")</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/30 border border-red-900/30 rounded-lg p-6">
                <div className="text-red-400 font-semibold mb-4 uppercase text-sm tracking-wider">What Doesn't Work</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">Too many tiers (3-4 max)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">Confusing feature matrices</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">Hidden costs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">Unclear upgrade paths</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Divider */}
            <div className="my-16 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              <div className="text-slate-500 text-sm">•••</div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Pre-Selling Strategy
            </h2>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-blue-500">
              <p className="text-2xl text-blue-400 font-semibold italic leading-relaxed">
                "Sell before building. People voting with wallets, not words."
              </p>
            </div>

            <h3 className="text-2xl font-bold text-blue-400 mt-8 mb-4">
              Why It Works
            </h3>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold text-xl">1</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Validates demand</div>
                    <div className="text-slate-300 text-sm">People voting with wallets, not words</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold text-xl">2</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Generates capital</div>
                    <div className="text-slate-300 text-sm">Fund development with revenue</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold text-xl">3</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Creates urgency</div>
                    <div className="text-slate-300 text-sm">Limited-time offers drive action</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold text-xl">4</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Builds advocates</div>
                    <div className="text-slate-300 text-sm">Early buyers become evangelists</div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-400 mt-8 mb-4">
              Implementation
            </h3>

            <div className="space-y-4 mb-8">
              <div className="bg-slate-900/50 border-l-4 border-blue-500 p-4">
                <h4 className="text-white font-semibold mb-2">Step 1: Create Compelling Pre-Sale Offer</h4>
                <div className="text-slate-300 text-sm space-y-1">
                  <div>• Lifetime deals (limited quantity)</div>
                  <div>• Founding member pricing (lock in forever rate)</div>
                  <div>• Early access + discount</div>
                  <div>• Input on roadmap</div>
                </div>
              </div>
              <div className="bg-slate-900/50 border-l-4 border-blue-500 p-4">
                <h4 className="text-white font-semibold mb-2">Step 2: Build Landing Page</h4>
                <div className="text-slate-300 text-sm space-y-1">
                  <div>• Clear value proposition</div>
                  <div>• Specific launch timeline</div>
                  <div>• Pre-sale offer details</div>
                  <div>• Trust signals (social proof, background)</div>
                  <div>• Payment processing ready</div>
                </div>
              </div>
              <div className="bg-slate-900/50 border-l-4 border-blue-500 p-4">
                <h4 className="text-white font-semibold mb-2">Step 3: Drive Traffic</h4>
                <div className="text-slate-300 text-sm space-y-1">
                  <div>• Audience built during validation</div>
                  <div>• Creator partnerships</div>
                  <div>• Paid acquisition</div>
                  <div>• PR and outreach</div>
                </div>
              </div>
              <div className="bg-slate-900/50 border-l-4 border-blue-500 p-4">
                <h4 className="text-white font-semibold mb-2">Step 4: Deliver and Communicate</h4>
                <div className="text-slate-300 text-sm space-y-1">
                  <div>• Regular development updates</div>
                  <div>• Involve buyers in decisions</div>
                  <div>• Over-communicate timeline</div>
                  <div>• Deliver value early</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-400 mt-8 mb-4">
              Success Metrics
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Pre-sale targets</strong>:
            </p>

            {/* Pre-sale Targets Stats */}
            <div className="my-10 grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-700/50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50-100</div>
                <div className="text-slate-400 text-sm">Buyers validates demand</div>
              </div>
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-700/50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">$10K-50K</div>
                <div className="text-slate-400 text-sm">Funds MVP development</div>
              </div>
              <div className="bg-slate-900/50 border border-red-900/50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">&lt;10</div>
                <div className="text-slate-400 text-sm">Signals weak demand (pivot)</div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Conversion rates</strong>:
            </p>

            {/* Conversion Rates */}
            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Landing page: Visitor to buyer</span>
                  <span className="text-blue-400 font-semibold">2-5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Email list: Subscriber to buyer</span>
                  <span className="text-blue-400 font-semibold">10-20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Pre-sale to full price retention</span>
                  <span className="text-green-400 font-semibold">70-90%</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Combined Approach
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              When you combine modular pricing with pre-selling, you create a revenue engine from day one.
            </p>

            {/* Timeline */}
            <div className="my-10 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">Timeline</div>
              <div className="space-y-3 text-slate-300 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">Weeks 1-2:</span>
                  <span>Validation</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">Week 3:</span>
                  <span>Pre-sale setup</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">Week 4:</span>
                  <span>Pre-sale launch</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">Weeks 5-12:</span>
                  <span>Development</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">Week 13:</span>
                  <span>Launch</span>
                </div>
              </div>
            </div>

            {/* Revenue Projection */}
            <div className="my-10 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-green-900/20 border border-blue-700/50 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">Revenue Generation</div>
                <div className="text-white font-semibold">The Compounding Effect</div>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">$10K-50K</div>
                  <div className="text-sm text-slate-400">Pre-sales</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">$5K-20K</div>
                  <div className="text-sm text-slate-400">Launch month MRR</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">$15K-50K</div>
                  <div className="text-sm text-slate-400">Month 3 MRR</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">$30K-100K</div>
                  <div className="text-sm text-slate-400">Month 6 MRR</div>
                </div>
              </div>
            </div>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-blue-500">
              <p className="text-2xl text-blue-400 font-semibold italic leading-relaxed">
                "Revenue funds growth. Growth drives revenue. This is the compounding effect of getting monetization right from day one."
              </p>
            </div>
          </div>

          {/* Next Article */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4">What's Next?</p>
            <Link href="/articles/scaling-strategy">
              <a className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-lg font-semibold">
                Read Next: Scaling Strategy - Building a Portfolio of AI-Powered Businesses
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Building a Monetization Strategy?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              I've helped companies implement these frameworks to generate revenue from day one. Let's discuss your specific product and market.
            </p>
            <Link href="/contact">
              <a className="inline-block bg-blue-500 hover:bg-blue-400 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors">
                Schedule a Discovery Call →
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
