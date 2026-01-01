import ResponsiveNav from "@/components/ResponsiveNav";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function MakerVsManager() {
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
            <span>December 16, 2025</span>
            <span>•</span>
            <span>7 min read</span>
          </div>

          {/* Article Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Maker vs Manager: How to Protect Deep Work in a Weekly Operating System
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              You don't have an execution problem. You have a calendar problem. Many teams plan good outcomes and still fail to ship them. The reason is almost always the same: the calendar never made room for the work. Here's how I design weeks so outcomes actually get completed rather than perpetually "in progress."
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_blockquote]:my-8 [&_blockquote:last-child]:mb-0 [&_ul]:my-6 [&_ol]:my-6 [&_ul]:pl-6 [&_ol]:pl-6 [&_ul]:list-disc [&_ol]:list-decimal [&_li]:my-2 [&_li]:marker:text-cyan-400 [&_li]:text-slate-200">
            <p className="text-slate-300 leading-relaxed mb-6">
              I've experienced this pattern firsthand more times than I care to admit. You start the week with clear outcomes—real Rocks with definitions of done. You're excited, focused, ready to ship. Then meetings fragment your attention. Reactive communications fill the gaps. Deep work gets pushed "to later." By Friday, you've been busy all week and completed nothing that mattered.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The problem isn't the outcomes you chose. It's that the calendar was never designed to hold them. An operating system is only as real as the time you protect for shipping. Without that protection, even the best-planned week becomes an exercise in frustration.
            </p>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "An operating system is only as real as the time you protect for shipping."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Two Modes of Work
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Paul Graham's original essay on this distinction was about engineers versus executives, but I've found it applies much more broadly. Most work falls into two modes: maker mode and manager mode. Understanding which mode you're in—and when—is the foundation of effective time design.
            </p>

            {/* Two Modes Card */}
            <div className="my-10 grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-6">
                <div className="text-cyan-400 font-semibold mb-4 uppercase text-sm tracking-wider">Maker Mode</div>
                <div className="text-white font-semibold mb-3">Focused building</div>
                <div className="space-y-2 text-sm text-slate-300">
                  <div>• Writing and coding</div>
                  <div>• Designing and prototyping</div>
                  <div>• Analysis and synthesis</div>
                  <div>• Deep thinking and problem-solving</div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <div className="text-slate-400 text-xs">Requires uninterrupted blocks of 60-180 minutes</div>
                </div>
              </div>
              <div className="bg-slate-900/30 border border-slate-700 rounded-lg p-6">
                <div className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Manager Mode</div>
                <div className="text-white font-semibold mb-3">Coordination</div>
                <div className="space-y-2 text-sm text-slate-300">
                  <div>• Meetings and syncs</div>
                  <div>• Messages and email</div>
                  <div>• Approvals and decisions</div>
                  <div>• Context switching</div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <div className="text-slate-400 text-xs">Can happen in 30-minute increments throughout the day</div>
                </div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Both modes are necessary. The failure isn't manager mode itself—it's letting manager mode consume all available time. When meetings and messages fill every gap, there's nowhere left for the deep work that produces outcomes. You end up coordinating work without ever doing work.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Time Protection Rule
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              In weekly planning, schedule 2–4 deep work blocks before committing to outcomes. This is the fundamental discipline that makes everything else work. If you can't find the blocks, reduce the commitments. A plan without time is a fantasy.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              I learned this the hard way. For years, I would commit to outcomes and then try to fit them into whatever time remained after meetings. It rarely worked. Now I invert the process: first I protect the time, then I commit to what the time can hold.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-10 mb-4">
              What a Deep Work Block Actually Looks Like
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              A deep work block is 60–180 minutes of focused time on one outcome. No meetings, no notifications, no "quick questions." You should have a clear start state (what you're beginning with) and end state (what you're producing). Anything shorter than 60 minutes isn't a block—it's a warmup.
            </p>

            {/* Deep Work Block Specs */}
            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">Deep Work Block Requirements</div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Duration:</strong> 60–180 minutes (less isn't a block)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Focus:</strong> One outcome only (no multitasking)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Protection:</strong> No meetings, no notifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Clarity:</strong> Clear start state and end state defined</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              The 60-minute minimum is important. It takes about 20 minutes to get into a flow state on complex work. If your block is only 30 minutes, you've just started thinking deeply when it's time to switch contexts. You end up with the cognitive costs of deep work but none of the benefits.
            </p>

            {/* Section Divider */}
            <div className="my-16 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              <div className="text-slate-500 text-sm">•••</div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Batching Manager Work
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              If manager work is unavoidable—and it usually is—batch it. Instead of checking messages throughout the day, have one window for comms. Instead of scattering admin across the week, have one window for admin. Instead of approving things whenever they come in, have one window for review and approval.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The goal is to reduce context switching. Every time you switch from maker mode to manager mode and back, you pay a cognitive tax. That tax compounds throughout the day. By batching, you pay the tax fewer times and preserve more capacity for deep work.
            </p>

            {/* Batching Pattern */}
            <div className="my-10 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-8">
              <div className="text-cyan-400 font-semibold mb-4 uppercase text-sm tracking-wider">Manager Work Windows</div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">Comms</div>
                  <div className="text-sm text-slate-400">One window for messages/email</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">Admin</div>
                  <div className="text-sm text-slate-400">One window for operational tasks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">Review</div>
                  <div className="text-sm text-slate-400">One window for approvals/feedback</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A Weekly Calendar Pattern
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Here's a simple pattern I've used successfully across different roles and contexts. You can adapt the specific days, but the structure matters: protect deep work early in the week when energy is highest, batch coordination in the middle, and reserve Friday for shipping and review.
            </p>

            {/* Weekly Pattern */}
            <div className="my-10 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">Sample Weekly Calendar</div>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-start gap-4">
                  <div className="text-cyan-400 font-semibold w-20">Monday</div>
                  <div>Planning (15-30 min) + first deep work block</div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-cyan-400 font-semibold w-20">Tue/Wed</div>
                  <div>1–2 deep work blocks per day (most productive days)</div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-cyan-400 font-semibold w-20">Thursday</div>
                  <div>Issues meeting + one deep work block</div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-cyan-400 font-semibold w-20">Friday</div>
                  <div>Ship + review + backlog cleanup</div>
                </div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Notice that meetings are pushed later in the week. Monday morning is often when I have the most mental clarity—it would be a waste to spend it in meetings. By the time Thursday arrives, the deep work should be mostly done. That's when coordination and issue-solving make sense.
            </p>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "The calendar is the execution system. Everything else is just intention."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Reality of Emergencies
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              I know what you're thinking: "This sounds great, but my week is full of emergencies." I've been there. The question is whether those emergencies are real or manufactured. Often, things labeled "urgent" can actually wait a few hours until the next comms window.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              When genuine emergencies do occur, the operating system helps rather than hinders. You can re-plan honestly because you know what you were supposed to accomplish. You can make conscious trade-offs because you know what you're giving up. The system isn't a fantasy calendar—it's a recovery mechanism that helps you respond to reality without losing all structure.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Limitations
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Teams with heavy coordination needs can't eliminate meetings. That's okay—the goal is to protect blocks, not eliminate manager mode entirely. Even roles that are inherently manager-heavy can protect some maker time for the work that requires deep focus.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The harder challenge is organizations where meeting-heavy culture is the norm. If everyone schedules over focus time, individual time protection won't work. This is a systemic issue that requires team-level agreement about when deep work happens.
            </p>

            {/* Takeaways Card */}
            <div className="my-10 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-8">
              <div className="text-cyan-400 font-semibold mb-4 uppercase text-sm tracking-wider">Key Takeaways</div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">The calendar is the execution system—protect it before committing to outcomes</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Schedule 2–4 deep work blocks (60-180 min each) before anything else</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Batch manager work to reduce context switching costs</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Push meetings later in the week when possible</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">A BOS is only as real as the time you protect for shipping</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700/50 rounded-lg p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Struggling with Time Protection?</h3>
              <p className="text-slate-300 mb-6">I help teams design operating rhythms that protect deep work while enabling necessary coordination. The key is finding the right balance for your context.</p>
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
            <Link href="/articles/ai-cost-control">
              <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold">
                Read Next: AI Cost Control That Doesn't Break Velocity
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
