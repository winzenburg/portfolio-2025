import ResponsiveNav from "@/components/ResponsiveNav";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function WeeklyRhythm() {
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
            <span>December 25, 2025</span>
            <span>•</span>
            <span>9 min read</span>
          </div>

          {/* Article Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The Weekly Rhythm: A 60-Minute Operating System That Actually Ships
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Most "weekly planning" fails because it tries to plan everything. The goal isn't comprehensive planning—it's deciding what the week is for. Here's the 60-minute weekly cadence I've refined over years of leading product teams, and why simplicity beats thoroughness every time.
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_blockquote]:my-8 [&_blockquote:last-child]:mb-0 [&_ul]:my-6 [&_ol]:my-6 [&_ul]:pl-6 [&_ol]:pl-6 [&_ul]:list-disc [&_ol]:list-decimal [&_li]:my-2 [&_li]:marker:text-cyan-400 [&_li]:text-slate-200">
            <p className="text-slate-300 leading-relaxed mb-6">
              Weekly cadence is one of those ideas that sounds obvious and still fails in practice. I've watched it fail across dozens of teams, and the failure modes are remarkably consistent. Teams either don't plan at all and everything becomes reactive, or they plan too much and the plan becomes fantasy, or they plan tasks instead of outcomes and end up with busy weeks where nothing actually finishes.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              A weekly rhythm works when it's small, repeatable, and tied to outcomes. This article is a deep dive into how I run weekly planning, issue-solving, and review in about 60 minutes per week total. If you want the big picture first, start with my article on the Business Operating System—this is the tactical implementation of that framework.
            </p>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "Weekly planning isn't about planning everything. It's about deciding what the week is for."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Three Moves
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              You only need three moves to run an effective week: Plan, Solve, and Review. Everything else is optional. I've seen teams add elaborate rituals, multiple check-ins, and detailed tracking systems—and I've watched those same teams abandon everything when the overhead becomes unbearable. Keep it simple, and it actually gets done.
            </p>

            {/* Three Moves Card */}
            <div className="my-10 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">The Complete Weekly System</div>
                <div className="text-3xl font-bold text-white">Plan → Solve → Review</div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-cyan-400 mb-1">15-30 min</div>
                  <div className="text-sm text-slate-400">Plan the week</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400 mb-1">30-45 min</div>
                  <div className="text-sm text-slate-400">Solve top issues</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400 mb-1">10-20 min</div>
                  <div className="text-sm text-slate-400">Review and learn</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Move 1: Plan (15–30 Minutes)
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Planning has one job: turn strategy into a week you can actually finish. This isn't about comprehensive planning or covering all your bases. It's about creating clarity on what matters and protecting the time to make it happen.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The inputs you need are simple: a focus metric (or one key result), last week's completion rate, last week's learning note, and calendar reality—how much time do you actually have available. Without that last one, you're planning in a vacuum.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-10 mb-4">
              The Non-Negotiable Outputs
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Every planning session must produce four things: one focus metric for the week, 1–3 outcomes with "done looks like" definitions, one issue to solve, and time blocks protected on the calendar to actually do the work.
            </p>

            {/* Planning Outputs */}
            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">Required Planning Outputs</div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>One focus metric</strong> — What number will you move this week?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>1–3 outcomes</strong> — What will exist by Friday that doesn't exist today?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>One issue to solve</strong> — What's blocking progress?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Time blocks protected</strong> — When will the work actually happen?</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mt-10 mb-4">
              The Questions That Matter
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              I've found that planning becomes efficient when you ask four questions in order: What metric matters this week? What 1–3 outcomes will move it? What issue is most likely to block those outcomes? And where will the work happen on the calendar?
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              If you can answer those four questions, you have a real plan. Everything beyond that is refinement. I've watched teams spend two hours in planning sessions that could have taken twenty minutes if they'd focused on these essentials.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-10 mb-4">
              Avoid Planning Task Lists
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              A plan that looks like "work on onboarding," "talk to users," and "fix bugs" is a trap. Those are categories of work, not outcomes. You can "work on" something forever without producing anything.
            </p>

            {/* Task vs Outcome Comparison */}
            <div className="my-12 grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/30 border border-red-900/30 rounded-lg p-6">
                <div className="text-red-400 font-semibold mb-4 uppercase text-sm tracking-wider">Tasks (Avoid)</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">"Work on onboarding"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">"Talk to users"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">"Fix bugs"</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-6">
                <div className="text-cyan-400 font-semibold mb-4 uppercase text-sm tracking-wider">Outcomes (Target)</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">"Ship onboarding checklist + empty state with one next action"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">"Run 5 walkthroughs, extract top 3 friction points"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">"Fix 3 bugs blocking primary action + add regression tests"</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              The difference is that outcomes have a finish line. You know when they're done. Tasks don't. Rewriting tasks into outcomes is the single highest-leverage improvement most teams can make to their weekly planning.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-10 mb-4">
              Protect the Week from Over-commitment
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Weekly planning fails when you ignore time constraints. Two rules help: never commit to more than 3 outcomes, and schedule 2–4 deep work blocks before you add anything else. If the calendar can't hold the work, the plan is fantasy. Better to know that on Monday than discover it on Friday.
            </p>

            {/* Section Divider */}
            <div className="my-16 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              <div className="text-slate-500 text-sm">•••</div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Move 2: Solve (30–45 Minutes)
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              This is the weekly issues meeting. Its purpose is not discussion—it's resolution. I've sat in countless meetings where the same issues got raised week after week without ever being solved. Those meetings are worse than useless because they create the illusion of progress.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The inputs are simple: open issues captured during the week, this week's outcomes, and the focus metric. The output is equally simple: 1–3 issues selected, 1–3 next actions total with owners and "done looks like" definitions.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-10 mb-4">
              The Meeting Structure
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              I use a simple three-step structure: Identify, Discuss, Solve. In the Identify phase, you list issues, cluster duplicates, and select the top 1–3 by impact and urgency. In Discuss, you align on what's true—evidence, impact, constraints—while avoiding drifting into solutions too early. In Solve, you decide the smallest next actions that reduce uncertainty or remove the block.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-10 mb-4">
              The Anti-Bloat Rules
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              These rules keep the meeting from turning into a two-hour debate. If you can't agree in 10 minutes, escalate to a deeper root-cause workflow for the top issue. Actions are capped at 1–3 total, not 12 "follow-ups." Every action has a definition of done and a date.
            </p>

            {/* Anti-Bloat Rules Card */}
            <div className="my-10 bg-red-900/10 border border-red-900/30 rounded-lg p-8">
              <div className="text-red-400 font-semibold mb-4 uppercase text-sm tracking-wider">Anti-Bloat Rules</div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-red-400 font-bold text-xl">1</span>
                  <div>
                    <div className="text-white font-semibold mb-1">10-minute escalation rule</div>
                    <div className="text-slate-400 text-sm">If you can't agree in 10 minutes, escalate to deeper problem-solving.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-400 font-bold text-xl">2</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Action cap</div>
                    <div className="text-slate-400 text-sm">1–3 total actions, not 12 "follow-ups."</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-400 font-bold text-xl">3</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Definition of done required</div>
                    <div className="text-slate-400 text-sm">Every action has a done looks like and a date.</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              The hardest part of this meeting is saying no. When someone raises an issue that's clearly important but not in the top 3, you have to park it. This feels uncomfortable, but it's what makes the meeting work. Solving three issues completely beats discussing ten issues partially.
            </p>

            {/* Section Divider */}
            <div className="my-16 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              <div className="text-slate-500 text-sm">•••</div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Move 3: Review (10–20 Minutes)
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Review is the compounding step. Without it, you repeat the same week forever. This is the meeting that gets skipped most often, and it's the one that matters most for long-term improvement.
            </p>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "The review is where compounding happens. Without it, you repeat the same week forever."
              </p>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              The output is just two sentences: your key learning (what changed, why, what it implies) and your next experiment (what you will change next week). Then you add one system improvement—tighten definitions of done, split outcomes smaller, add a checklist for a recurring process, or adjust the calendar so deep work happens earlier.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-10 mb-4">
              The Two-Sentence Review
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              I've found that constraining the review to two sentences forces clarity. If you can't summarize your learning in one sentence, you probably don't know what you learned. If you can't describe your next experiment in one sentence, it's probably too vague to actually run.
            </p>

            {/* Review Example */}
            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">Example Review</div>
              <div className="space-y-4 text-slate-300">
                <div>
                  <span className="text-cyan-400 font-semibold">Key Learning:</span> Users who see the empty state copy complete onboarding 2x faster than those who see the feature checklist first.
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">Next Experiment:</span> Replace the multi-step onboarding with a single screen focused on one primary action.
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">System Improvement:</span> Add "empty state copy" to the launch checklist for all new features.
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Running This in Practice
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              If you want a "just do it" starting point, use a single weekly note with your focus metric, 1–3 outcomes, top issue, and end-of-week review. That's it. You don't need a tool or a template—though both can help once the habit is established.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The key is keeping the documents short and repeatable. The moment your weekly note becomes a chore, you'll stop doing it. Better a simple system you actually use than an elaborate one you abandon after three weeks.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Trade-offs
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              You will feel under-committed at first. 1–3 outcomes can feel "too small" when you're used to planning ten things. But finishing compounds. Every week you complete what you commit to builds confidence and momentum. Every week you over-commit and fail erodes both.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              This rhythm doesn't replace strategy—it makes strategy executable. And the system is only as honest as your review. If you rationalize misses instead of learning from them, you lose the loop entirely.
            </p>

            {/* Takeaways Card */}
            <div className="my-10 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-8">
              <div className="text-cyan-400 font-semibold mb-4 uppercase text-sm tracking-wider">Key Takeaways</div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Weekly planning is not about planning everything—it's about deciding what the week is for</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Keep the cadence small: plan, solve, review—that's enough</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Outcomes beat task lists. Always write "done looks like"</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Protect time on the calendar before committing to outcomes</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">The review is where compounding happens: one learning + one experiment per week</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700/50 rounded-lg p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Implement This Rhythm?</h3>
              <p className="text-slate-300 mb-6">I help design teams adopt operating systems that ship faster without burning out. The key is finding the right balance for your context.</p>
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
            <Link href="/articles/rocks-not-tasks">
              <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold">
                Read Next: Rocks, Not Tasks: How to Commit to 1–3 Weekly Outcomes
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
