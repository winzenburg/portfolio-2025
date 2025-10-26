import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import ResponsiveNav from "@/components/ResponsiveNav";
import { Link } from "wouter";

export default function MVPStrategy() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <ResponsiveNav currentPage="articles" />

      {/* Article Content */}
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <Link href="/articles">
            <a className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </a>
          </Link>

          {/* Hero Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img
              src="/portfolio-2025/images/articles/mvp-strategy-hero.png"
              alt="MVP Strategy"
              className="w-full h-auto"
            />
          </div>

          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>June 26, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The MVP Strategy: Launching Products That Sell Themselves
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Most MVPs try to do too much.
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed mb-6">
              The result: Delayed launches, complex products, unclear value. The alternative: Ship the minimum that creates genuine value. Make it so good people can't help but share it.
            </p>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-blue-500">
              <p className="text-2xl text-blue-400 font-semibold italic leading-relaxed">
                "Ship the minimum that creates genuine value. Make it so good people can't help but share it."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Core MVP Framework
            </h2>

            <h3 className="text-2xl font-bold text-blue-400 mt-10 mb-4">
              Component 1: Clear Value Proposition
            </h3>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-white">What it solves</strong>: Single, specific pain point<br/>
                <strong className="text-white">For whom</strong>: Clearly defined audience<br/>
                <strong className="text-white">Why now</strong>: Unique insight or approach
              </p>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">The test</strong>: Can you explain the value in one sentence? If not, simplify.
            </p>

            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6 my-8">
              <p className="text-blue-300 font-semibold mb-2">Example:</p>
              <p className="text-white text-lg">"AI-powered design system builder that goes from concept to production in 4 weeks instead of 12 months."</p>
              <p className="text-slate-400 mt-4 text-sm">Clear. Specific. Quantified.</p>
            </div>

            <h3 className="text-2xl font-bold text-blue-400 mt-10 mb-4">
              Component 2: Single Core Feature
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">The discipline</strong>: Solve one problem exceptionally well.
            </p>

            {/* Pull Quote */}
            <div className="my-10 pl-6 border-l-4 border-blue-500">
              <p className="text-xl text-blue-400 font-semibold italic leading-relaxed">
                "Don't build 10 mediocre features. Build 1 exceptional feature."
              </p>
            </div>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">Selection criteria:</div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Addresses most painful problem</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Creates immediate value</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Demonstrates clear ROI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Enables viral sharing</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-900/10 border border-red-900/30 rounded-lg p-6 my-8">
              <p className="text-red-400 font-semibold mb-2 uppercase text-sm tracking-wider">The mistake to avoid</p>
              <p className="text-slate-300">Feature bloat. Every additional feature delays launch and dilutes value.</p>
            </div>

            <h3 className="text-2xl font-bold text-blue-400 mt-10 mb-4">
              Component 3: Seamless User Experience
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Core principle</strong>: Remove friction everywhere.
            </p>

            {/* Time Metrics */}
            <div className="my-10 grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-700/50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">&lt; 2 min</div>
                <div className="text-slate-300 text-sm font-semibold">Onboarding time</div>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-700/50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">&lt; 5 min</div>
                <div className="text-slate-300 text-sm font-semibold">Time to value</div>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-700/50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">Zero</div>
                <div className="text-slate-300 text-sm font-semibold">Learning curve</div>
              </div>
            </div>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">UX priorities:</div>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span className="text-slate-300">Intuitive navigation</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span className="text-slate-300">Clear calls-to-action</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span className="text-slate-300">Minimal steps to value</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span className="text-slate-300">Mobile-optimized</span>
                </div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">The validation</strong>: Can a new user get value in 5 minutes without documentation? If no, simplify.
            </p>

            <h3 className="text-2xl font-bold text-blue-400 mt-10 mb-4">
              Component 4: Built-in Feedback Mechanisms
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Purpose</strong>: Learn and iterate quickly.
            </p>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">Implementation:</div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>In-app feedback buttons</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>NPS surveys at key moments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Usage analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Direct user interviews</span>
                </li>
              </ul>
            </div>

            {/* Pull Quote */}
            <div className="my-10 pl-6 border-l-4 border-blue-500">
              <p className="text-xl text-blue-400 font-semibold italic leading-relaxed">
                "Measure everything. Iterate based on data."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Virality-by-Design Principles
            </h2>

            <h3 className="text-2xl font-bold text-blue-400 mt-10 mb-4">
              Principle 1: Make Sharing Effortless
            </h3>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">Implementation:</div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Social sharing buttons everywhere</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Pre-written share text</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Referral incentives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Collaborative features</span>
                </li>
              </ul>
            </div>

            {/* Growth Stats */}
            <div className="my-10 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-700/50 rounded-lg p-8">
              <div className="text-center">
                <div className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">The Data Shows</div>
                <div className="text-4xl font-bold text-white mb-2">3-5x Faster</div>
                <div className="text-slate-300">Products with built-in sharing grow faster than those without</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-400 mt-10 mb-4">
              Principle 2: Create "Wow Moments"
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Design for delight</strong>: Moments where product value becomes undeniable.
            </p>

            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6 my-8">
              <p className="text-blue-300 font-semibold mb-4">Examples:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span>Design system generating complete component in 30 seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span>Analysis completing that would take hours manually</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span>Automated task finishing while user watches</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">The psychological trigger</strong>: Surprise and delight drives organic sharing.
            </p>

            <h3 className="text-2xl font-bold text-blue-400 mt-10 mb-4">
              Principle 3: Build Community Features
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Why it matters</strong>: Users who connect with other users stay longer.
            </p>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">Implementation:</div>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span className="text-slate-300">User forums or communities</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span className="text-slate-300">Collaboration features</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span className="text-slate-300">User-generated content</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span className="text-slate-300">Success story sharing</span>
                </div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Network effects</strong>: Value increases as more people use it.
            </p>

            <h3 className="text-2xl font-bold text-blue-400 mt-10 mb-4">
              Principle 4: Incentivize Sharing
            </h3>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">What works:</div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Referral bonuses (discount, free months)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Feature unlocks for referrals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Recognition for top contributors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Exclusive access for advocates</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">The balance</strong>: Incentives should feel like bonuses, not bribes.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Launch Strategy
            </h2>

            {/* Launch Timeline */}
            <div className="space-y-4 mb-10">
              <div className="bg-slate-900/50 border-l-4 border-blue-500 p-4">
                <h4 className="text-white font-semibold mb-2">Week 1: Private Beta</h4>
                <p className="text-slate-300">Launch to 50-100 users. Focus on core feature validation and early feedback.</p>
              </div>
              <div className="bg-slate-900/50 border-l-4 border-blue-500 p-4">
                <h4 className="text-white font-semibold mb-2">Week 2: Iterate Fast</h4>
                <p className="text-slate-300">Gather feedback, fix critical issues, refine user experience based on real usage.</p>
              </div>
              <div className="bg-slate-900/50 border-l-4 border-blue-500 p-4">
                <h4 className="text-white font-semibold mb-2">Week 3: Expand</h4>
                <p className="text-slate-300">Grow to 500-1000 users. Monitor performance and scale infrastructure.</p>
              </div>
              <div className="bg-slate-900/50 border-l-4 border-blue-500 p-4">
                <h4 className="text-white font-semibold mb-2">Week 4: Public Launch</h4>
                <p className="text-slate-300">Go public with refined product. Activate marketing and growth channels.</p>
              </div>
            </div>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-blue-500">
              <p className="text-2xl text-blue-400 font-semibold italic leading-relaxed">
                "Perfect is the enemy of shipped. Launch imperfect, iterate based on real usage."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What We Learned
            </h2>

            {/* Lessons Learned */}
            <div className="my-10 bg-red-900/10 border border-red-900/30 rounded-lg p-8">
              <div className="text-red-400 font-semibold mb-6 uppercase text-sm tracking-wider">Key Mistakes to Avoid</div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-red-400 font-bold text-xl">1</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Building too many features before launch</div>
                    <div className="text-slate-400 text-sm">Delayed our launch by 2 months. Users only wanted the core feature.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-400 font-bold text-xl">2</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Ignoring user feedback</div>
                    <div className="text-slate-400 text-sm">Built features users didn't ask for. Wasted development time.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-400 font-bold text-xl">3</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Launching without distribution plan</div>
                    <div className="text-slate-400 text-sm">Great product, no audience. Now build audience in parallel with product.</div>
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

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-700/50 rounded-lg p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Building an MVP That Sells Itself?</h3>
              <p className="text-slate-300 mb-6">I've helped teams launch products that achieve product-market fit faster. Let's discuss your MVP strategy and go-to-market approach.</p>
              <Link href="/contact">
                <a className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                  Schedule a Strategy Call →
                </a>
              </Link>
            </div>
          </div>

          {/* Next Article */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4">What's Next?</p>
            <Link href="/articles/monetization-strategy">
              <a className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-lg font-semibold">
                Read Next: Monetization Strategy - How to Generate Revenue from Day One
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
