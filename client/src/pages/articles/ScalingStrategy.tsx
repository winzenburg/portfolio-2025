import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
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
                <span>August 14, 2025</span>
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

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-blue-500">
              <p className="text-2xl text-blue-400 font-semibold italic leading-relaxed">
                "Build interconnected niche businesses instead of one horizontal platform."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Portfolio Strategy
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Core insight</strong>: Build interconnected niche businesses instead of one horizontal platform.
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Why it works</strong>:
            </p>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Diversified revenue streams</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Shared infrastructure and learnings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Cross-promotion opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Risk mitigation</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Step 1: Identify Complementary Niches
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Pattern recognition</strong>: Find related pain points within target audience.
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Example</strong>:
            </p>

            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6 my-8">
              <p className="text-blue-300 font-semibold mb-4">Portfolio Example:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">1</span>
                  <span>Core product: AI-powered design system builder</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">2</span>
                  <span>Complementary 1: Design-to-code automation tool</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">3</span>
                  <span>Complementary 2: Design system analytics platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">4</span>
                  <span>Complementary 3: Component marketplace</span>
                </li>
              </ul>
            </div>

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

            {/* Build vs Acquire Comparison */}
            <div className="my-10 grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 border border-blue-900/50 rounded-lg p-6">
                <div className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Build When</div>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Low technical complexity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Clear product-market fit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>4-8 week timeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Leverage existing infrastructure</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-lg p-6">
                <div className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Acquire When</div>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Existing traction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Complementary audience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Faster than building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Strategic positioning</span>
                  </li>
                </ul>
              </div>
            </div>

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

            {/* Section Divider */}
            <div className="my-16 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              <div className="text-slate-500 text-sm">•••</div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The 90%+ Automation Strategy
            </h2>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-blue-500">
              <p className="text-2xl text-blue-400 font-semibold italic leading-relaxed">
                "Minimize manual operations through AI and automation. The goal: 90%+ automation across all business operations."
              </p>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Core principle</strong>: Minimize manual operations through AI and automation.
            </p>

            {/* Automation Target Card */}
            <div className="my-10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-700/50 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">Automation Target</div>
                <div className="text-5xl font-bold text-white mb-2">90%+</div>
                <div className="text-slate-300">Of all business operations automated</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Marketing Automation
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">AI-powered content</strong>:
            </p>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span>Blog posts generated from product updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span>Social media content from user wins</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span>Email campaigns from behavior triggers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span>SEO optimization automated</span>
                </li>
              </ul>
            </div>

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

            <div className="space-y-4 mb-8">
              <div className="bg-slate-900/50 border-l-4 border-blue-500 p-6">
                <h4 className="text-white font-semibold mb-3 text-lg">Months 1-6: Optimize Core Product</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Achieve product-market fit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Build automation infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Document processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">→</span>
                    <span className="font-semibold text-white">Hit $30K-100K MRR</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 border-l-4 border-blue-500 p-6">
                <h4 className="text-white font-semibold mb-3 text-lg">Months 7-12: Launch Product #2</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Leverage existing infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Cross-sell to existing users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Expand market reach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">→</span>
                    <span className="font-semibold text-white">Portfolio revenue: $60K-200K MRR</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 border-l-4 border-blue-500 p-6">
                <h4 className="text-white font-semibold mb-3 text-lg">Months 13-18: Acquire or Build Product #3</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Fill portfolio gaps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Expand audience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Increase cross-sell opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">→</span>
                    <span className="font-semibold text-white">Portfolio revenue: $100K-400K MRR</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-l-4 border-blue-400 p-6">
                <h4 className="text-white font-semibold mb-3 text-lg">Months 19-24: Optimize and Scale</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Improve automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Expand team strategically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">→</span>
                    <span className="font-semibold text-white">Consider exits or continued growth</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What We Learned
            </h2>

            {/* Key Mistakes Summary */}
            <div className="my-10 bg-red-900/10 border border-red-900/30 rounded-lg p-8">
              <div className="text-red-400 font-semibold mb-6 uppercase text-sm tracking-wider">Avoid These Mistakes</div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-red-400 font-bold text-xl">1</span>
                  <div>
                    <div className="text-white font-semibold mb-2">Building too many products too fast</div>
                    <div className="text-slate-400 text-sm">Diluted focus. Better to nail one product before expanding.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-400 font-bold text-xl">2</span>
                  <div>
                    <div className="text-white font-semibold mb-2">Not building shared infrastructure</div>
                    <div className="text-slate-400 text-sm">Each product on different stack. Integration nightmare. Now: shared infrastructure from day one.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-400 font-bold text-xl">3</span>
                  <div>
                    <div className="text-white font-semibold mb-2">Under-investing in automation</div>
                    <div className="text-slate-400 text-sm">Manual operations don't scale. Front-load automation investment.</div>
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
              The Competitive Reality
            </h2>

            {/* Traditional vs AI-First Comparison */}
            <div className="my-12 grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/30 border border-red-900/30 rounded-lg p-6">
                <div className="text-red-400 font-semibold mb-4 uppercase text-sm tracking-wider">Traditional Single-Product Approach</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">Revenue concentration risk</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">Linear scaling challenges</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">Limited cross-sell opportunities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">Slower growth trajectory</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-700/50 rounded-lg p-6">
                <div className="text-blue-400 font-semibold mb-4 uppercase text-sm tracking-wider">AI-First Portfolio Approach</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span className="text-slate-300">Diverse revenue streams</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span className="text-slate-300">90%+ operational efficiency</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span className="text-slate-300">Compounding advantages</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span className="text-slate-300">Strategic optionality</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-blue-500">
              <p className="text-2xl text-blue-400 font-semibold italic leading-relaxed">
                "The window: AI-first companies have a 2-3 year advantage. Then it becomes table stakes."
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Building an AI-Powered Portfolio?</h3>
            <p className="text-slate-300 mb-6">I've implemented this scaling strategy across multiple businesses. Let's discuss how to apply these principles to your specific context.</p>
            <Link href="/contact">
              <a className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Schedule a Discovery Call
              </a>
            </Link>
          </div>

          {/* Next Article */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4">What's Next?</p>
            <Link href="/articles/design-system-4-weeks">
              <a className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-lg font-semibold">
                Read Next: How I Built an Enterprise Design System in 4 Weeks
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
