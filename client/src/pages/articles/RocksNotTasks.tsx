import ResponsiveNav from "@/components/ResponsiveNav";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function RocksNotTasks() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ResponsiveNav currentPage="articles" />

      {/* Article Header */}
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Link */}
          <Link href="/articles">
            <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </a>
          </Link>

          {/* Article Meta */}
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
            <span>December 23, 2025</span>
            <span>•</span>
            <span>8 min read</span>
          </div>

          {/* Article Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Rocks, Not Tasks: How to Commit to 1–3 Weekly Outcomes
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              The fastest way to sabotage a week is to commit to tasks instead of outcomes. "We'll work on onboarding" is a promise you can always claim you kept. That's exactly why it's dangerous. Here's how I've learned to define weekly outcomes that actually finish—and why the constraint of 1–3 is what makes it work.
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_blockquote]:my-8 [&_blockquote:last-child]:mb-0 [&_ul]:my-6 [&_ol]:my-6 [&_ul]:pl-6 [&_ol]:pl-6 [&_ul]:list-disc [&_ol]:list-decimal [&_li]:my-2 [&_li]:marker:text-cyan-400 [&_li]:text-slate-200">
            <p className="text-slate-300 leading-relaxed mb-6">
              I've watched this pattern play out more times than I can count. A team starts the week with a long list of things they're going to "work on." By Friday, they've touched everything and finished nothing. The next Monday, they do it again. Months pass. Major initiatives stay perpetually "in progress."
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The problem isn't effort or talent. It's the way commitments are framed. Outcomes force clarity: what will exist by Friday that doesn't exist today? How will we know it's done? What metric should move if it worked? Tasks avoid these questions entirely, which is why they feel safer—and why they fail.
            </p>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "If you can't write 'done looks like,' you don't have a Rock. You have a wish."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What a Rock Actually Is
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              A Rock is a weekly outcome—a shippable result with a definition of done. I borrowed the term from EOS (Entrepreneurial Operating System), but the concept applies regardless of what framework you use. The key is that a Rock produces something tangible. It has a finish line. You can look at it on Friday and definitively say whether it happened or not.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              This is the critical distinction. "Work on onboarding" isn't a Rock because you can always claim you did it. You touched onboarding for twenty minutes, didn't you? Check. But "Ship a single-step onboarding with one primary CTA and an empty state" is a Rock because it either exists on Friday or it doesn't. There's no ambiguity.
            </p>

            {/* Not a Rock vs Rock */}
            <div className="my-12 grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/30 border border-red-900/30 rounded-lg p-6">
                <div className="text-red-400 font-semibold mb-4 uppercase text-sm tracking-wider">Not a Rock</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">"Work on onboarding"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">"Fix bugs"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">"Improve performance"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">"Research competitors"</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-6">
                <div className="text-cyan-400 font-semibold mb-4 uppercase text-sm tracking-wider">A Rock</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">"Ship single-step onboarding with one CTA + empty state"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">"Fix 3 bugs blocking primary action + add regression tests"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">"Reduce page load from 2.8s → 1.8s on top 3 routes"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">"Document 5 competitor pricing models with feature comparison"</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The "Done Looks Like" Rule
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Every Rock must include a definition of done. This isn't optional—it's what separates outcomes from activities. "Done looks like" forces you to describe the end state in concrete terms that anyone could verify.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              I've found that writing "done looks like" is the best way to expose vague thinking. If you can't articulate what done looks like, you probably don't have enough clarity to execute effectively. Better to discover that on Monday than on Friday.
            </p>

            {/* Done Looks Like Examples */}
            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">"Done Looks Like" Examples</div>
              <div className="space-y-4 text-slate-300">
                <div>
                  <span className="text-cyan-400 font-semibold">Onboarding:</span> "Done looks like: new users can complete the first action in under 60 seconds."
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">Error handling:</span> "Done looks like: error state includes recovery copy and logs a structured error event."
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">Conversion:</span> "Done looks like: conversion rate improves from 4% → 6% over 7 days."
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">Documentation:</span> "Done looks like: API reference covers all public endpoints with examples."
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Why Only 1–3 Rocks?
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Execution is constrained by time, attention, integration cost, and decision overhead. Most teams dramatically underestimate these constraints, which is why they over-commit week after week.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              More than 3 outcomes creates predictable failure modes: partial completion across many items, constant context switching, and the dreaded "busy week, nothing finished" syndrome. I've seen this pattern so many times that I now treat it as a near-certainty when teams commit to more than 3 weekly outcomes.
            </p>

            {/* Why 1-3 Card */}
            <div className="my-10 bg-red-900/10 border border-red-900/30 rounded-lg p-8">
              <div className="text-red-400 font-semibold mb-4 uppercase text-sm tracking-wider">What Happens With 4+ Rocks</div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-red-400 font-bold text-xl">1</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Partial completion</div>
                    <div className="text-slate-400 text-sm">Everything gets touched, nothing gets finished. Progress is scattered across many half-done items.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-400 font-bold text-xl">2</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Context switching</div>
                    <div className="text-slate-400 text-sm">Jumping between many outcomes destroys deep work and increases cognitive load.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-400 font-bold text-xl">3</span>
                  <div>
                    <div className="text-white font-semibold mb-1">"Busy week, nothing finished"</div>
                    <div className="text-slate-400 text-sm">The calendar was full. The team worked hard. But nothing actually shipped.</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Three outcomes is a forcing function. It makes you choose. And choosing—saying no to good things so you can say yes to the best things—is the discipline that separates teams that ship from teams that just stay busy.
            </p>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "Three outcomes is a forcing function. It makes you choose."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              How to Pick Rocks
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              I use a simple three-part filter when selecting weekly outcomes. Each Rock should move the focus metric, unblock other work, and be finishable in one week. If it fails any of these tests, it's either not the right Rock or it needs to be split.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The third criterion is where most teams struggle. They pick Rocks that are really multi-week projects dressed up as weekly outcomes. "Refactor onboarding" sounds like a Rock, but it probably isn't. "Extract the onboarding step component and add one test" is closer to what can actually finish in a week.
            </p>

            {/* Filter Card */}
            <div className="my-10 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-8">
              <div className="text-cyan-400 font-semibold mb-4 uppercase text-sm tracking-wider">The Rock Filter</div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-cyan-400 font-bold text-xl">1</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Moves the focus metric</div>
                    <div className="text-slate-300 text-sm">Is there a direct line between this outcome and the number you're trying to move?</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-cyan-400 font-bold text-xl">2</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Unblocks other work</div>
                    <div className="text-slate-300 text-sm">Does completing this enable something else that matters?</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-cyan-400 font-bold text-xl">3</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Finishable in one week</div>
                    <div className="text-slate-300 text-sm">Can this actually be done with the time available? If not, split it.</div>
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
              The Most Common Mistake: Scope Creep Disguised as a Rock
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              These are fake Rocks: "Refactor onboarding," "Launch the new pipeline," "Rebuild the dashboard." They sound specific, but they hide multi-week projects inside one-week labels. I've seen teams commit to Rocks like these and then feel demoralized when they don't complete them—as if the problem were their execution rather than their scoping.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The fix is aggressive scoping down. "Refactor onboarding" becomes "Extract the onboarding step component and add one test." "Launch the new pipeline" becomes "Ship Step 1 with in-progress status and a retry button." "Rebuild the dashboard" becomes "Add one new card state and wire it to real data."
            </p>

            {/* Fake vs Real Rocks */}
            <div className="my-12 grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/30 border border-red-900/30 rounded-lg p-6">
                <div className="text-red-400 font-semibold mb-4 uppercase text-sm tracking-wider">Fake Rocks (Multi-week projects)</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">"Refactor onboarding"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">"Launch the new pipeline"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">"Rebuild the dashboard"</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-6">
                <div className="text-cyan-400 font-semibold mb-4 uppercase text-sm tracking-wider">Real Rocks (One-week outcomes)</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">"Extract onboarding step component + add one test"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">"Ship Step 1 with in-progress status + retry button"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">"Add one new card state, wire to real data"</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Writing Rocks in 5 Minutes
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              I use a simple template for each Rock that takes about a minute to fill out. The discipline of writing it down forces clarity that thinking alone doesn't provide.
            </p>

            {/* Rock Template */}
            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">Rock Template</div>
              <div className="space-y-4 text-slate-300 font-mono text-sm">
                <div><span className="text-cyan-400">Rock:</span> [What will exist by Friday]</div>
                <div><span className="text-cyan-400">Why it matters:</span> [Which metric it moves]</div>
                <div><span className="text-cyan-400">Done looks like:</span> [Verifiable end state]</div>
                <div><span className="text-cyan-400">Risk/unknown:</span> [What could block this]</div>
                <div><span className="text-cyan-400">Smallest test:</span> [How to reduce risk early]</div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              After filling out the template, run two sanity checks: Can we ship this in a week with the time we have? And if we finish only this Rock, would it still be a good week? If the answer to either question is no, you need to adjust.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Trade-offs
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Tight Rocks can feel "too small" to people accustomed to ambitious planning. They're not. Finishing compounds. Every completed Rock builds momentum and credibility. Every failed Rock erodes both. Small and done beats ambitious and incomplete every time.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Outcome-driven weeks can surface uncomfortable truths—your plan was too big, your estimates were off, your priorities weren't clear. This is a feature, not a bug. Better to learn these things weekly than quarterly.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              And yes, some weeks require emergency work. The system still helps by forcing you to define the outcome of that emergency work. Even in crisis mode, you can have a Rock.
            </p>

            {/* Takeaways Card */}
            <div className="my-10 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-8">
              <div className="text-cyan-400 font-semibold mb-4 uppercase text-sm tracking-wider">Key Takeaways</div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Task lists create motion; Rocks create outcomes</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Limit commitments to 1–3 weekly outcomes</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Every Rock needs "done looks like"</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Tie Rocks to the focus metric to prevent random work</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Split big Rocks until they're finishable in one week</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700/50 rounded-lg p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Struggling with Execution Velocity?</h3>
              <p className="text-slate-300 mb-6">I help teams implement operating systems that ship consistently. The key is finding the right constraints for your context.</p>
              <Link href="/contact">
                <a className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors">
                  Let's Talk →
                </a>
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <NewsletterSignup />
          </div>

          {/* Next Article */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4">Next in This Series</p>
            <Link href="/articles/docs-as-system-of-record">
              <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold">
                Read Next: Docs as the System of Record: Making Decisions Traceable
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
