import ResponsiveNav from "@/components/ResponsiveNav";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function DocsAsSystemOfRecord() {
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
            <span>December 18, 2025</span>
            <span>•</span>
            <span>8 min read</span>
          </div>

          {/* Article Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Docs as the System of Record: Making Decisions Traceable and Reusable
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Most teams don't have a documentation problem. They have a memory problem. When knowledge lives in chat threads, personal notes, and scattered docs, you lose context, repeatability, and auditability. Here's how I've built documentation systems that compound rather than rot—and why conventions matter more than tools.
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_blockquote]:my-8 [&_blockquote:last-child]:mb-0 [&_ul]:my-6 [&_ol]:my-6 [&_ul]:pl-6 [&_ol]:pl-6 [&_ul]:list-disc [&_ol]:list-decimal [&_li]:my-2 [&_li]:marker:text-cyan-400 [&_li]:text-slate-200">
            <p className="text-slate-300 leading-relaxed mb-6">
              I've watched this pattern unfold at company after company. A decision gets made in a Slack thread. Three months later, someone asks why we chose approach A over approach B. Nobody remembers. The original thread is buried in search results. The people who made the decision have moved on or forgotten the context.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              When knowledge lives in chat threads, personal notes, and scattered docs, you lose three things: context (why did we decide this?), repeatability (how do we do this again?), and auditability (what evidence supported the call?). These losses compound over time. Each forgotten decision makes the next one harder to make well.
            </p>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "Spreadsheets and chats rot. A docs-as-record approach turns decisions and artifacts into a durable knowledge system that compounds over time."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What "System of Record" Actually Means
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              A system of record is the place you trust most, the place you update first, and the place you can audit later. For most teams, this ends up being a mix of different tools with no clear hierarchy. Decisions live in Slack, tasks live in Jira, specs live in Notion, and code lives in GitHub. When these systems conflict, nobody knows which one is authoritative.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              A docs-as-system-of-record approach solves this by making documents the authoritative source for certain categories of information. For a workflow-driven team, this typically means workflow artifacts (outputs), decisions (proceed/pivot/kill), checklists and playbooks (how work is done), and links between related documents.
            </p>

            {/* What System of Record Stores */}
            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">What a System of Record Should Store</div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Workflow artifacts</strong> — The outputs of your processes (research docs, design specs, test results)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Decisions</strong> — What was decided and why (proceed, pivot, or kill)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Checklists and playbooks</strong> — How recurring work gets done</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Links</strong> — Connections between related documents that create a knowledge graph</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Why Docs Work as a Record
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              I've experimented with many approaches to building systems of record—databases, wikis, specialized tools, custom applications. Documents keep winning for a simple reason: they succeed because they're human-readable, portable, easy to link, and easy to diff and review.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              When I need to understand a decision from six months ago, I want to read prose that explains the context, not decode a database row. When I need to share that decision with a new team member, I want to send a link, not grant permissions to a specialized tool. When I need to review what changed, I want to see a diff, not compare snapshots in a custom interface.
            </p>

            {/* Why Docs Work */}
            <div className="my-10 grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-6">
                <div className="text-cyan-400 font-semibold mb-4 uppercase text-sm tracking-wider">Docs Succeed When...</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">Human-readable (context is preserved)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">Portable (easy to share and access)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">Easy to link (creates knowledge graph)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-slate-300">Easy to diff and review (changes visible)</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/30 border border-red-900/30 rounded-lg p-6">
                <div className="text-red-400 font-semibold mb-4 uppercase text-sm tracking-wider">Docs Fail When...</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">Naming is inconsistent</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">Location is inconsistent</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">Documents don't link to each other</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-slate-400">No clear ownership or update cadence</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              The key insight is that docs fail for convention reasons, not tool reasons. If naming is inconsistent, you can't find things. If location is inconsistent, you don't know where to look. If documents don't link to each other, you lose the relationships between ideas. So the "docs as record" system is mostly conventions.
            </p>

            {/* Section Divider */}
            <div className="my-16 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              <div className="text-slate-500 text-sm">•••</div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Conventions That Make It Real
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              After years of iteration across multiple teams and products, I've settled on three conventions that make docs-as-record work: consistent naming, consistent location, and cross-linking. Each is simple in concept but requires discipline in practice.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-10 mb-4">
              1. Consistent Naming
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Use predictable prefixes that tell you what type of document you're looking at before you open it. I use prefixes like CHECKLIST, RESULTS, PLAN, and DECISION. When you see a document called DECISION-api-versioning-strategy, you immediately know what you're going to find inside.
            </p>

            {/* Naming Conventions */}
            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">Example Naming Prefixes</div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <code className="text-cyan-400 bg-slate-800/50 px-2 py-1 rounded">CHECKLIST-*</code>
                  <span className="text-slate-300">Recurring process steps</span>
                </div>
                <div className="flex items-start gap-3">
                  <code className="text-cyan-400 bg-slate-800/50 px-2 py-1 rounded">RESULTS-*</code>
                  <span className="text-slate-300">Outputs and findings</span>
                </div>
                <div className="flex items-start gap-3">
                  <code className="text-cyan-400 bg-slate-800/50 px-2 py-1 rounded">PLAN-*</code>
                  <span className="text-slate-300">Forward-looking intentions</span>
                </div>
                <div className="flex items-start gap-3">
                  <code className="text-cyan-400 bg-slate-800/50 px-2 py-1 rounded">DECISION-*</code>
                  <span className="text-slate-300">Choices with rationale</span>
                </div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Prefixes make search and discovery possible. When someone asks "do we have a checklist for X?", you can search for "CHECKLIST X" and find it immediately. When you're reviewing past decisions, you can filter to DECISION-* documents and see them all.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-10 mb-4">
              2. Consistent Location
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Group documents by lifecycle stage: discovery docs in one place, validation docs in one place, ops/process docs in one place. Location is half the UX of documentation. If people have to think about where something might be, they won't look for it.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              I typically use a folder structure that mirrors the workflow: discovery → validation → build → ops. Each folder has predictable types of documents. When someone needs a validation artifact, they know to look in the validation folder. When they need an operational checklist, they know to look in ops.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-10 mb-4">
              3. Cross-linking
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              A document is more useful when it points to its inputs (evidence), its outputs (artifacts), and related decisions. Links create a knowledge graph without a database. You can trace from a decision to the evidence that informed it, to the artifacts it produced, to the follow-up decisions it enabled.
            </p>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "Links create a knowledge graph without a database."
              </p>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Cross-linking requires discipline but pays off enormously. When you're reviewing a past decision, you can see what evidence supported it. When you're updating a checklist, you can see which results documents were produced by following it. The documentation becomes navigable rather than just searchable.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Document Checklist
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              For any new initiative, I create a set of linked documents that together capture the full lifecycle. This isn't overhead—it's the minimum artifact set that makes the work traceable and reusable.
            </p>

            {/* Document Checklist */}
            <div className="my-10 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-8">
              <div className="text-cyan-400 font-semibold mb-4 uppercase text-sm tracking-wider">Standard Document Set</div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-cyan-400 font-bold text-xl">1</span>
                  <div>
                    <div className="text-white font-semibold mb-1">One-page plan</div>
                    <div className="text-slate-300 text-sm">What we're trying to accomplish and how</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-cyan-400 font-bold text-xl">2</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Checklist for recurring work</div>
                    <div className="text-slate-300 text-sm">The steps we'll follow repeatedly</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-cyan-400 font-bold text-xl">3</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Results log</div>
                    <div className="text-slate-300 text-sm">What happened, what was learned</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-cyan-400 font-bold text-xl">4</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Decision note</div>
                    <div className="text-slate-300 text-sm">What was decided and why</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700">
                <div className="text-slate-400 text-sm">Then link them together so you can navigate the full story.</div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Limitations and Trade-offs
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Docs alone don't give you perfect dashboards. If you need real-time metrics or automated reporting, you'll want indexing and optional database layers on top of the document system. The docs serve as the source of truth while other systems provide views into that truth.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Docs also require discipline. The payoff is compounding knowledge and less rework, but only if people actually maintain the conventions. This means building documentation habits into your regular workflow rather than treating it as a separate activity that happens "when you have time."
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              I've found the best way to maintain discipline is to make docs part of the definition of done. An outcome isn't complete until the relevant documents exist and are linked. A decision isn't finalized until it's captured in a DECISION doc. This sounds bureaucratic but it's actually liberating—you know exactly what "done" means.
            </p>

            {/* Takeaways Card */}
            <div className="my-10 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-8">
              <div className="text-cyan-400 font-semibold mb-4 uppercase text-sm tracking-wider">Key Takeaways</div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Systems fail when knowledge is scattered and un-auditable</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Docs as record works when naming, location, and links are consistent</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">The compounding effect comes from turning results into checklists and reusable templates</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-slate-300">Make docs part of definition of done, not a separate activity</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700/50 rounded-lg p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Building Your Knowledge System?</h3>
              <p className="text-slate-300 mb-6">I help teams design documentation systems that compound rather than rot. The conventions are simple, but getting them adopted requires the right approach.</p>
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
            <Link href="/articles/maker-vs-manager">
              <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold">
                Read Next: Maker vs Manager: How to Protect Deep Work
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
