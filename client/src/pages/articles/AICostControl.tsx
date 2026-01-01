import ResponsiveNav from "@/components/ResponsiveNav";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function AICostControl() {
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
            <span>December 11, 2025</span>
            <span>•</span>
            <span>8 min read</span>
          </div>

          {/* Article Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              AI Cost Control That Doesn't Break Velocity
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Most AI cost overruns don't come from one expensive call—they come from retries and rework. Teams think AI cost control means "use a cheaper model." In practice, the biggest spend multipliers are reliability problems disguised as cost problems. Here's how I've built AI systems that stay both affordable and fast.
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_blockquote]:my-8 [&_blockquote:last-child]:mb-0 [&_ul]:my-6 [&_ol]:my-6 [&_ul]:pl-6 [&_ol]:pl-6 [&_ul]:list-disc [&_ol]:list-decimal [&_li]:my-2 [&_li]:marker:text-cyan-400 [&_li]:text-slate-200">
            <p className="text-slate-300 leading-relaxed mb-6">
              I learned this lesson the expensive way. When I first started building AI-powered workflows, I watched costs spike in ways that seemed random. One week would be cheap, the next week would blow the budget. It took months of digging through logs to understand what was actually happening.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The pattern was consistent: most of the cost wasn't coming from the initial calls. It was coming from repeated retries because the status UX was unclear and users kept re-triggering operations. It was coming from regenerating outputs instead of importing existing ones. It was coming from sending the same prompts repeatedly because nothing was cached. And it was coming from storing outputs poorly so they couldn't be reused.
            </p>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "Cost control starts with reliability. Reliability reduces cost more than model switching."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Three Levers of AI Cost
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              After debugging too many cost spikes, I've come to see AI cost through three levers: reduce calls, reduce tokens, and reduce waste. Each lever has different techniques, and the combination of all three is what keeps costs manageable at scale.
            </p>

            {/* Three Levers */}
            <div className="my-10 grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-6">
                <div className="text-cyan-400 font-semibold mb-2 uppercase text-sm tracking-wider">Lever 1</div>
                <div className="text-white font-bold text-xl mb-3">Reduce Calls</div>
                <div className="text-slate-300 text-sm">Don't call the model if you don't have to. Fetch existing results. Import artifacts. Avoid redundant operations.</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-6">
                <div className="text-cyan-400 font-semibold mb-2 uppercase text-sm tracking-wider">Lever 2</div>
                <div className="text-white font-bold text-xl mb-3">Reduce Tokens</div>
                <div className="text-slate-300 text-sm">Keep prompts small. Pass references, not full text. Summarize once, then reuse the summary.</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-6">
                <div className="text-cyan-400 font-semibold mb-2 uppercase text-sm tracking-wider">Lever 3</div>
                <div className="text-white font-bold text-xl mb-3">Reduce Waste</div>
                <div className="text-slate-300 text-sm">Store outputs durably. Make them readable. Enable reuse. If you can't reuse, you'll pay forever.</div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mt-10 mb-4">
              Lever 1: Reduce Calls
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              The most expensive call is the one you didn't need to make. Before every AI operation, ask three questions: Can we fetch an existing result? Can we import a downloaded artifact? Does the output already exist?
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              This sounds obvious, but it's remarkable how many systems lack these pathways. Users trigger regeneration because there's no way to fetch what was already generated. Operations run twice because the first result wasn't stored in a discoverable way. The "just run it again" pattern becomes the default, and costs multiply.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-10 mb-4">
              Lever 2: Reduce Tokens
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Keep prompts as small as they can be while still producing good outputs. This means avoiding dumping entire document trees into a single prompt. Pass references instead of full text when the model can work with references. Summarize once and then reuse that summary rather than re-summarizing every time.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              I've seen prompts that include thousands of tokens of context that the model never actually uses. The context is there "just in case," but it adds up fast. Being disciplined about what goes into a prompt requires more design work upfront but pays off in every subsequent call.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-10 mb-4">
              Lever 3: Reduce Waste
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Waste is output that isn't stored, output that isn't readable, and output that can't be debugged. If your system can't reuse outputs, you'll pay for regeneration forever. Every output should be stored, normalized, and accessible for reuse.
            </p>

            {/* Section Divider */}
            <div className="my-16 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              <div className="text-slate-500 text-sm">•••</div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Budgeting That Actually Works
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              The simplest reliable budget system is per-run caps. Instead of trying to predict monthly costs and getting surprised, set explicit limits at the operation level: "This workflow run can spend at most X units." "This step can spend at most Y units."
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              If you exceed the cap, the system should stop the run, mark the step failed with recovery instructions, and allow import or fetch-by-id as a cheap recovery path. This turns cost control into a deterministic behavior rather than a monthly surprise. You know exactly when and where spending will stop.
            </p>

            {/* Budget System */}
            <div className="my-10 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">Per-Run Budget System</div>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-start gap-4">
                  <span className="text-cyan-400 font-bold">Set caps:</span>
                  <span>"This workflow can spend at most X units" / "This step can spend at most Y units"</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-cyan-400 font-bold">On exceed:</span>
                  <span>Stop the run → Mark step failed with recovery instructions → Allow import/fetch as cheap recovery</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-cyan-400 font-bold">Result:</span>
                  <span>Cost control becomes deterministic behavior, not monthly surprise</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Caching: The Underrated Superpower
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Cache at the right granularity. Deterministic transforms like normalization and parsing should always be cached—you'll get the same result every time, so there's no reason to redo them. Stable inputs like summaries should be cached because they change rarely. Fetch-by-id results should be cached because the external system is the source of truth.
            </p>

            {/* Caching Strategy */}
            <div className="my-12 grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-6">
                <div className="text-cyan-400 font-semibold mb-4 uppercase text-sm tracking-wider">Cache These</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">Deterministic transforms (normalization, parsing)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">Stable inputs (summaries that rarely change)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">Fetch-by-id results (external system is source of truth)</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/30 border border-red-900/30 rounded-lg p-6">
                <div className="text-red-400 font-semibold mb-4 uppercase text-sm tracking-wider">Be Careful With</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">!</span>
                    <span className="text-slate-400">User-private context (requires tenant/user isolation)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">!</span>
                    <span className="text-slate-400">Secrets or credentials (never cache these)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">!</span>
                    <span className="text-slate-400">Time-sensitive data (stale caches cause bugs)</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Avoid caching anything that depends on secrets or user-private context unless you isolate by tenant or user. This sounds obvious but it's easy to accidentally cache something that contains PII or credentials, creating both a security risk and a correctness bug when the wrong data gets served to the wrong user.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Import-First Pattern
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              If you can import outputs, you get three benefits that compound. You don't rerun steps when something fails to save—you just import the result that was generated. You can re-materialize documents without regenerating content. And you can debug without repeating the expensive operation.
            </p>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "Import-first is a cost strategy disguised as a reliability strategy."
              </p>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              This is why I always build import pathways alongside generation pathways. The import path handles failures gracefully, reduces cost, and improves debuggability. It's more work to build both, but the payoff is enormous in production systems that need to stay reliable and affordable.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A Cost Checklist for AI Steps
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Before shipping any AI-powered step, I run through a checklist that ensures cost control is built in from the start. This prevents the "we'll optimize later" trap that usually means "we'll spend 3x more than necessary until someone notices."
            </p>

            {/* Cost Checklist */}
            <div className="my-10 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">AI Step Cost Checklist</div>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">□</span>
                  <span>Is there a fetch-by-id pathway? (Don't regenerate what exists)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">□</span>
                  <span>Is there a manual import pathway? (Recovery without regeneration)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">□</span>
                  <span>Are outputs stored durably and reusable? (No orphaned results)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">□</span>
                  <span>Do retries require idempotency? (Same input → same cost)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">□</span>
                  <span>Is there a step-level budget cap? (Predictable spend)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">□</span>
                  <span>Is output normalized so humans can use it? (No regenerating for format)</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Trade-offs
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Strict caps can make the system feel "fragile" until recovery paths exist. Users will hit the cap and get stuck if there's no way to proceed without regeneration. This is why import-first is so important—it's the escape hatch that makes strict budgets workable.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Caching can introduce stale behavior if you don't key caches properly. A cache that returns outdated data is worse than no cache at all because it adds debugging complexity on top of the original problem. Cache invalidation strategy needs to be designed upfront, not bolted on later.
            </p>

            {/* Takeaways Card */}
            <div className="my-10 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-8">
              <div className="text-cyan-400 font-semibold mb-4 uppercase text-sm tracking-wider">Key Takeaways</div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Reliability reduces cost more than model switching</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Budget caps + import-first + caching is the practical trio</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Build recovery paths so cost control doesn't reduce velocity</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Most cost overruns come from retries and rework, not expensive calls</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700/50 rounded-lg p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Building AI Systems at Scale?</h3>
              <p className="text-slate-300 mb-6">I help teams design AI workflows that stay both affordable and fast. The key is building cost control into the architecture from the start.</p>
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
            <Link href="/articles/quality-gates-for-ai">
              <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold">
                Read Next: Quality Gates for AI Outputs
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
