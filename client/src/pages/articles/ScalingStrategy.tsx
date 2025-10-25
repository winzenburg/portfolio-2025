import { ArrowLeft, Calendar, Clock } from "lucide-react";
import ResponsiveNav from "@/components/ResponsiveNav";
import { Link } from "wouter";

export default function ScalingStrategy() {
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
              src="/portfolio-2025/images/articles/scaling-hero.png"
              alt="Scaling Strategy"
              className="w-full h-auto"
            />
          </div>

          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>October 20, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Scaling Strategy: Building a Portfolio of AI-Powered Businesses
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              After successfully launching and monetizing an MVP, most founders face a choice: Scale one product or build a portfolio.
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed mb-6">
              Here's the portfolio approach that creates compounding value.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Portfolio Strategy
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Core insight</strong>: Build interconnected niche businesses instead of one horizontal platform.
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Why it works</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Diversified revenue streams</li>
              <li>Shared infrastructure and learnings</li>
              <li>Cross-promotion opportunities</li>
              <li>Risk mitigation</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Step 1: Identify Complementary Niches
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Pattern recognition</strong>: Find related pain points within target audience.
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Example</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Core product: AI-powered design system builder</li>
              <li>Complementary 1: Design-to-code automation tool</li>
              <li>Complementary 2: Design system analytics platform</li>
              <li>Complementary 3: Component marketplace</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Selection criteria</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Same target audience</li>
              <li>Shared infrastructure</li>
              <li>Cross-sell potential</li>
              <li>Non-competitive positioning</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Step 2: Build vs. Acquire
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Build when</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Low technical complexity</li>
              <li>Clear product-market fit</li>
              <li>4-8 week timeline</li>
              <li>Leverage existing infrastructure</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Acquire when</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Existing traction</li>
              <li>Complementary audience</li>
              <li>Faster than building</li>
              <li>Strategic positioning</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Acquisition framework</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Target: 2-3x annual revenue</li>
              <li>Validate: Metrics, code quality, customer satisfaction</li>
              <li>Integrate: Shared infrastructure, cross-promotion</li>
              <li>Grow: Apply portfolio advantages</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Step 3: Create Unified Brand
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Purpose</strong>: Build trust across portfolio
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Implementation</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Consistent design language</li>
              <li>Shared brand elements</li>
              <li>Cross-product navigation</li>
              <li>Unified support</li>
              <li>Single billing</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">The advantage</strong>: Users trust new products because they trust the brand.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The 90%+ Automation Strategy
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Core principle</strong>: Minimize manual operations through AI and automation.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Marketing Automation
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">AI-powered content</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Blog posts generated from product updates</li>
              <li>Social media content from user wins</li>
              <li>Email campaigns from behavior triggers</li>
              <li>SEO optimization automated</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Tools</strong>: ChatGPT/Claude for content, Buffer for scheduling, analytics for optimization
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Sales Automation
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Self-serve pipeline</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>AI chatbot for qualification</li>
              <li>Automated onboarding flows</li>
              <li>In-app upgrade prompts</li>
              <li>Expansion revenue triggers</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Enterprise sales</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>AI-generated proposals</li>
              <li>Automated follow-ups</li>
              <li>Contract templates</li>
              <li>ROI calculators</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Customer Support Automation
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">AI-first support</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Chatbot handles 80% of questions</li>
              <li>Automated help article suggestions</li>
              <li>Proactive issue detection</li>
              <li>Escalation only when necessary</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Human support</strong>: Complex issues, strategic accounts, feedback synthesis
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Back-Office Automation
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Operational efficiency</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Accounting: AI categorization, reconciliation</li>
              <li>HR: Automated onboarding, benefits administration</li>
              <li>Analytics: Automated reporting dashboards</li>
              <li>Compliance: Automated monitoring</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Scaling Timeline
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Months 1-6</strong>: Optimize core product<br/>
              - Achieve product-market fit<br/>
              - Build automation infrastructure<br/>
              - Document processes<br/>
              - Hit $30K-100K MRR
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Months 7-12</strong>: Launch product #2<br/>
              - Leverage existing infrastructure<br/>
              - Cross-sell to existing users<br/>
              - Expand market reach<br/>
              - Portfolio revenue: $60K-200K MRR
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Months 13-18</strong>: Acquire or build product #3<br/>
              - Fill portfolio gaps<br/>
              - Expand audience<br/>
              - Increase cross-sell opportunities<br/>
              - Portfolio revenue: $100K-400K MRR
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Months 19-24</strong>: Optimize and scale<br/>
              - Improve automation<br/>
              - Expand team strategically<br/>
              - Consider exits or continued growth
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What We Learned
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Mistake #1</strong>: Building too many products too fast<br/>
              Diluted focus. Better to nail one product before expanding.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Mistake #2</strong>: Not building shared infrastructure<br/>
              Each product on different stack. Integration nightmare. Now: shared infrastructure from day one.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Mistake #3</strong>: Under-investing in automation<br/>
              Manual operations don't scale. Front-load automation investment.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Competitive Reality
            </h2>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">AI-first portfolio approach</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Diverse revenue streams</li>
              <li>Operational efficiency</li>
              <li>Compounding advantages</li>
              <li>Strategic optionality</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Traditional single-product approach</strong>:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li>Revenue concentration risk</li>
              <li>Linear scaling challenges</li>
              <li>Limited cross-sell</li>
              <li>Slower growth trajectory</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">The window</strong>: AI-first companies have 2-3 year advantage. Then it becomes table stakes.
            </p>
          </div>

          {/* Next Article */}
          <div className="mt-16 pt-8 border-t border-slate-700">
            <p className="text-sm text-slate-400 mb-4">Next Article</p>
            <Link href="/articles/design-system-4-weeks">
              <a className="group">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                  How I Built an Enterprise Design System in 4 Weeks (Not 12 Months)
                </h3>
                <p className="text-slate-300">
                  Discover the AI-augmented framework for building production-ready design systems.
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
