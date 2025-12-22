import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";
import ResponsiveNav from "@/components/ResponsiveNav";
import { Link } from "wouter";

export default function RuleConsolidation() {
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

          {/* Hero Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img
              src="/images/articles/placeholder.png"
              alt="Rule Consolidation"
              className="w-full h-auto"
            />
          </div>

          {/* Article Meta */}
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
            <span>December 2, 2025</span>
            <span>•</span>
            <span>8 min read</span>
          </div>

          {/* Article Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The Rule Consolidation: How We Kept 40+ Rules Manageable Without Losing Power
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              I watched our governance system almost collapse under its own complexity. Here's how we saved it with taxonomy, a single foreman, and some hard-won lessons about scaling systems.
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_blockquote]:my-8 [&_blockquote:last-child]:mb-0">
            <p className="text-slate-300 leading-relaxed mb-6">
              Picture this: 3 AM, launch week, and I'm staring at our multi-agent system trying to figure out why it's giving contradictory advice about ChatGPT integration. Plot twist: we had <em>five different rules</em> covering the same thing, scattered across different folders, with different approaches.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              That's when it hit me—we'd built something powerful, but we were drowning in our own success. Forty-seven rules covering discovery, validation, build, and scale phases. Multiple agents getting confused about which rule was canonical. The orchestrator trying to track everything and failing spectacularly.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Sound familiar? Whether you're building a complex AI system, managing a growing codebase, or just trying to keep your team's processes from turning into spaghetti, you've probably been here. Systems that start elegant inevitably accumulate cruft, duplication, and contradictions as they scale.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Here's the thing though: <strong className="text-white">we didn't simplify by cutting capabilities</strong>. We consolidated without losing a single feature, validation gate, or quality check. And more importantly, we built systems to keep it that way.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Let me walk you through exactly how we went from chaos to clarity—and the framework you can use for any complex system.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Complexity Crisis (Or: How I Learned to Stop Worrying and Love Taxonomy)
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Six months ago, I was that person. You know the one—frantically grep-ing through dozens of files, trying to find the "real" rule about data moat guidance. Was it in the 003 series? The 170s? The 180s?
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              (Spoiler alert: it was in all three, with slightly different advice.)
            </p>

            {/* Symptoms Card */}
            <div className="my-8 bg-red-900/20 border border-red-700/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-400 mb-4">The Symptoms of Rule Sprawl</h3>
              <ul className="space-y-3 text-red-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong className="text-white">Duplicate rules everywhere:</strong> Cursor agent responsibilities in both 003 and 028 series</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong className="text-white">Unclear ownership:</strong> Six different Hub implementation rules (132, 133, 134, 136, 137, 200)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong className="text-white">Numbering collisions:</strong> Two different rules both labeled 198</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong className="text-white">Agent confusion:</strong> "How do I integrate ChatGPT?" had five different answers</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              The system was still powerful—it enforced quality gates, captured institutional knowledge, guided our workflow. But it was becoming unmaintainable. And here's what I learned the hard way: <em>unmaintainable systems don't gradually decline, they collapse suddenly</em>.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Breakthrough: Three Concepts That Changed Everything
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              The solution came from borrowing ideas from everywhere—military command structures, software architecture, even how libraries organize books. Three interlocking concepts saved us:
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              1. Four-Tier Taxonomy (Because Everything Needs a Home)
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              We reorganized all rules into four clear tiers based on <em>how they're used</em>, not what they're about:
            </p>

            {/* Taxonomy Grid */}
            <div className="my-8 grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/30 border border-cyan-700/50 rounded-lg p-6">
                <h4 className="font-semibold text-cyan-400 mb-2">Core Guardrails (000–099)</h4>
                <p className="text-slate-300 text-sm">Always-on constraints that gate every phase. Accessibility standards, testing requirements, document quality. These never get ignored.</p>
              </div>
              <div className="bg-slate-900/30 border border-slate-700 rounded-lg p-6">
                <h4 className="font-semibold text-blue-400 mb-2">Stack & Integrations (100–199)</h4>
                <p className="text-slate-300 text-sm">Technology conventions that activate only when a specific agent is working. Next.js patterns, Drizzle schemas, tRPC conventions.</p>
              </div>
              <div className="bg-slate-900/30 border border-purple-700/50 rounded-lg p-6">
                <h4 className="font-semibold text-purple-400 mb-2">Playbooks (200–260)</h4>
                <p className="text-slate-300 text-sm">Step-by-step workflows with explicit handoffs. How-to guides that orchestrate multiple agents in sequence.</p>
              </div>
              <div className="bg-slate-900/30 border border-slate-700 rounded-lg p-6">
                <h4 className="font-semibold text-green-400 mb-2">Discovery Pack (300–340)</h4>
                <p className="text-slate-300 text-sm">Templates and AI orchestration specific to the heat filter phase. Only loaded when Discovery pod is active.</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              This taxonomy gave us a mental model: "Is this a universal constraint? A specialist's tool? A workflow? Or a discovery template?" Every rule now had a clear home. No more guessing.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              2. Single Foreman Orchestrator (One Boss to Rule Them All)
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              We designated <code className="text-cyan-400 bg-slate-900/50 px-2 py-1 rounded">000-orchestration.mdc</code> as the single "foreman" managing the entire workflow. Instead of each agent trying to figure out which rules apply, the foreman:
            </p>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>References the rule-agent matrix to see who owns what</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Enforces mandatory outputs at each phase gate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Calls specialist agents with links to their canonical rules</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Keeps a conversational, high-level view without restating details</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              This gave us one place to understand the end-to-end flow. Every other rule became a specialist's handbook that the foreman calls when needed. Simple. Clean. It actually works.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              3. Rule-Agent Matrix (Our Rosetta Stone)
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              The matrix became our single source of truth—a simple table that maps every rule to its purpose:
            </p>

            {/* Matrix Table */}
            <div className="my-8 overflow-x-auto">
              <table className="min-w-full bg-slate-900/30 border border-slate-800 text-sm rounded-lg">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="px-4 py-3 border-b border-slate-700 text-left font-medium text-slate-300">Rule</th>
                    <th className="px-4 py-3 border-b border-slate-700 text-left font-medium text-slate-300">Type</th>
                    <th className="px-4 py-3 border-b border-slate-700 text-left font-medium text-slate-300">Phase</th>
                    <th className="px-4 py-3 border-b border-slate-700 text-left font-medium text-slate-300">Primary Agents</th>
                    <th className="px-4 py-3 border-b border-slate-700 text-left font-medium text-slate-300">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border-b border-slate-800 font-mono text-xs text-cyan-400">000-orchestration</td>
                    <td className="px-4 py-3 border-b border-slate-800 text-slate-300">Core</td>
                    <td className="px-4 py-3 border-b border-slate-800 text-slate-300">All</td>
                    <td className="px-4 py-3 border-b border-slate-800 text-slate-300">Orchestrator</td>
                    <td className="px-4 py-3 border-b border-slate-800 text-green-400">Active</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-b border-slate-800 font-mono text-xs text-cyan-400">118-brand-landscape</td>
                    <td className="px-4 py-3 border-b border-slate-800 text-slate-300">Stack</td>
                    <td className="px-4 py-3 border-b border-slate-800 text-slate-300">Validation → Build</td>
                    <td className="px-4 py-3 border-b border-slate-800 text-slate-300">Brand Strategist</td>
                    <td className="px-4 py-3 border-b border-slate-800 text-green-400">Active</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-b border-slate-800 font-mono text-xs text-cyan-400">050-manus-integration</td>
                    <td className="px-4 py-3 border-b border-slate-800 text-slate-300">Meta</td>
                    <td className="px-4 py-3 border-b border-slate-800 text-slate-300">N/A</td>
                    <td className="px-4 py-3 border-b border-slate-800 text-slate-300">(see 190)</td>
                    <td className="px-4 py-3 border-b border-slate-800 text-red-400">Deprecated</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Every rule appears exactly once. Deprecated rules point to their canonical replacement. The matrix shows which agent should care about which rule, and at what phase it applies.
            </p>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "The matrix became our navigation system—one table that prevents duplication and confusion."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Consolidation Process (Or: How to Untangle Spaghetti Code)
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Here's how we actually executed the consolidation. Fair warning: this took about 40 hours of focused work, but it was worth every minute.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              Step 1: Inventory & Mapping
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              We listed every rule file and its purpose. This became our "streamlining blueprint." For each cluster of overlapping rules, we asked:
            </p>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Which file becomes the canonical source?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>What unique content needs to be merged in?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>What gets deprecated vs. deleted?</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Boring? Absolutely. Essential? You bet.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              Step 2: Merge & Deprecate (The Hard Part)
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Let me show you how this worked in practice with our AI tool integration mess.
            </p>

            {/* Before/After Comparison */}
            <div className="my-8 grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/30 border border-red-900/30 rounded-lg p-6">
                <div className="text-red-400 font-semibold mb-3 uppercase text-sm tracking-wider">Before: The AI Tool Integration Disaster</div>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li><code className="text-red-400">050-manus-integration.mdc</code></li>
                  <li><code className="text-red-400">060-chatgpt-refinement.mdc</code></li>
                  <li><code className="text-red-400">070-elevenlabs-integration.mdc</code></li>
                  <li><code className="text-red-400">080-midjourney-canva.mdc</code></li>
                  <li className="text-slate-400">Plus duplicates in the 300s for discovery-specific prompts</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-700/50 rounded-lg p-6">
                <div className="text-cyan-400 font-semibold mb-3 uppercase text-sm tracking-wider">After: One Canonical Source</div>
                <div className="text-sm text-slate-300 font-mono bg-slate-900/50 p-3 rounded">
                  <div className="text-cyan-400"># Rule 190: AI Tool Integrations</div>
                  <div className="mt-2">## Manus.im Integration</div>
                  <div>- When to use: Narrative clustering, insight synthesis</div>
                  <div>- API patterns: ...</div>
                  <div className="mt-2">## ChatGPT Integration</div>
                  <div>- When to use: Refinement, persona synthesis</div>
                  <div>- API patterns: ...</div>
                </div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Then we replaced the old files with one-line pointers:
            </p>

            <div className="my-6 bg-slate-800/50 border-l-4 border-yellow-400 p-4">
              <code className="text-sm text-cyan-400">
                # Rule 050: Manus Integration (DEPRECATED)<br />
                &gt; This rule has been merged into `190-ai-tool-integrations.mdc`. See the Manus section.
              </code>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Same story with the Hub implementation chaos. Six separate rules became one comprehensive <code className="text-cyan-400 bg-slate-900/50 px-2 py-1 rounded">200-hub-implementation.mdc</code> with subsections for document discovery, workflow linkage, UI conventions, and API patterns.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Now there's one place to learn how the Hub works. Revolutionary, I know.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              Step 3: Fix the Numbering Collisions
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              We had two rules with the 198 prefix. Simple fix, tedious execution:
            </p>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><code className="text-cyan-400">198-ai-prompt-templates.mdc</code> → <code className="text-green-400">199-ai-prompt-templates.mdc</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><code className="text-cyan-400">199-ai-error-handling.mdc</code> → <code className="text-green-400">201-ai-error-handling.mdc</code></span>
                </li>
              </ul>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Then came the fun part: updating every reference across the entire codebase. Matrix, playbooks, orchestrator, agent prompts—everything.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              Step 4: Update All References (The Tedious But Critical Part)
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              This is where most consolidation efforts die. You merge the rules but forget to update the references, and suddenly nothing works.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              We used grep to find every mention of deprecated rule numbers:
            </p>

            <div className="my-6 bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm">
              # Find all references to the old rule<br />
              grep -r "050-manus" .cursor/rules docs<br /><br />
              # Update each file to reference 190-ai-tool-integrations instead
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              We updated the orchestrator, the matrix, all playbooks, agent documentation—everything that might reference the old rules. It took a full day, but it was worth it.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              Step 5: Document the System (So This Never Happens Again)
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              We created <code className="text-cyan-400 bg-slate-900/50 px-2 py-1 rounded">docs/rules/change-control.md</code>—a lightweight checklist for future changes:
            </p>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <ol className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">1.</span>
                  <span><strong className="text-white">Before You Edit:</strong> Clarify tier, identify owners, check for duplicates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">2.</span>
                  <span><strong className="text-white">While Editing:</strong> Use standard format, include lifecycle/agents/deliverables sections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">3.</span>
                  <span><strong className="text-white">After Saving:</strong> Update matrix, patch orchestrator, log in blueprint</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">4.</span>
                  <span><strong className="text-white">Acceptance Tests:</strong> Verify no duplicates, test all links</span>
                </li>
              </ol>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              This checklist ensures future additions don't reintroduce the chaos we just cleaned up. Because humans forget, but checklists don't.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Results (Or: What 40 Hours of Tedium Gets You)
            </h2>

            {/* Results Comparison */}
            <div className="my-10 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-8">
              <h3 className="text-lg font-semibold mb-6 text-center text-white">Before vs. After</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-red-400 mb-3">Before: The Chaos</h4>
                  <ul className="text-sm space-y-2 text-red-300">
                    <li>• 47 rule files (many duplicated)</li>
                    <li>• 6 different Hub implementation rules</li>
                    <li>• 9 different AI tool rules</li>
                    <li>• 3 different data moat rules</li>
                    <li>• 400+ line orchestrator trying to explain everything</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-3">After: The Order</h4>
                  <ul className="text-sm space-y-2 text-cyan-300">
                    <li>• 38 active rules + 9 deprecated pointers</li>
                    <li>• 1 canonical Hub implementation rule</li>
                    <li>• 1 canonical AI tool integration rule</li>
                    <li>• 1 moat & expansion strategy rule</li>
                    <li>• 200-line orchestrator that links to specialists</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="my-10 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-8">
              <div className="text-center">
                <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">Impact</div>
                <div className="text-3xl font-bold text-white mb-2">Zero capability loss</div>
                <p className="text-slate-300">
                  Every check, gate, and process preserved. Clear ownership through the matrix. Single source of truth for each concern.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              How You Can Do This (The Framework That Actually Works)
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Whether you're managing a multi-agent AI system, a complex codebase, or a team with scattered process docs, here's how to apply these principles:
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              1. Create Your Taxonomy
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Group your rules/docs/processes into tiers based on <em>how they're used</em>:
            </p>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong className="text-white">Universal constraints</strong> (apply to everyone, always)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong className="text-white">Specialist tools</strong> (apply to specific roles/agents)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong className="text-white">Workflows</strong> (multi-step processes with handoffs)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong className="text-white">Templates</strong> (reusable starting points)</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              2. Designate a "Foreman" Document
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Create one top-level document that orchestrates everything else. It should explain the high-level flow, reference (but not repeat) specialist rules, enforce phase gates, and be readable by a human in 5-10 minutes.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              3. Build Your Matrix
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Create a single table mapping every rule to its tier, phase, owner, purpose, and status. This becomes your navigation system and prevents duplication.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              4. Consolidate Ruthlessly
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Find overlapping rules and merge them. Use sections and anchor links to preserve findability. Replace old files with pointers to the canonical source.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              5. Document the Change Process
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Write down how to add/modify/retire rules in the future. Make it a checklist, not a philosophy doc. Include acceptance criteria before merging.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              6. Enforce at Review Time
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              If you have code review or doc review, add a check: "Does this follow the change-control checklist?" Make consolidation a habit, not a one-time cleanup.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Trade-Offs and Gotchas (What I Wish Someone Had Told Me)
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              This approach isn't free. Here are the costs I didn't anticipate:
            </p>

            {/* Hidden Costs */}
            <div className="my-8 bg-slate-800/50 border-l-4 border-yellow-400 p-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">The Hidden Costs</h3>
              <ul className="space-y-2 text-cyan-400">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span><strong className="text-white">Upfront Investment:</strong> 40 hours of focused work—not trivial</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span><strong className="text-white">Requires Discipline:</strong> System only works if people follow the checklist</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span><strong className="text-white">Anchor Complexity:</strong> Big files with sections mean agents need to know which section to read</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span><strong className="text-white">Regular Maintenance:</strong> Matrix needs periodic review every 3-6 months</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Also, this works because our rules are systematic and have clear ownership. If your docs are more exploratory or narrative, a wiki or graph-based system might fit better.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              But here's what surprised me: the system got <em>stronger</em> after consolidation. Since cleaning up, we've confidently added brand system blueprints, dev quality rules, Supabase integration, gamification playbooks, micro-interactions guidance—each following the change-control checklist and landing in the right tier.
            </p>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "Most systems collapse under their own complexity. Ours got stronger."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What's Next (The Promise of Systematic Consolidation)
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Here's the thing about good systems: they make the next decision easier. Since consolidating, every new rule gets added without drama. We know which tier it belongs in, which agents own it, and how to link it properly.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The real test came when we needed to add five new rules in one week (brand blueprints, quality assistants, personalization playbooks). Instead of chaos, it took 30 minutes each. The taxonomy held. The foreman stayed clean. The matrix stayed current.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              That's the promise of systematic consolidation: governance that scales without becoming unmaintainable.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              If you're managing any complex system of rules, processes, or documentation, remember this framework: taxonomy + foreman + matrix + discipline. It's not glamorous work, but it's the difference between systems that collapse and systems that compound.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              What if your governance system could handle infinite complexity without breaking? That's what happens when you stop managing rules and start architecting systems.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Real talk: the consolidation was tedious. But watching our multi-agent system confidently navigate 38 rules without confusion? Seeing new contributors add rules correctly on their first try? That's the compound interest of good systems design.
            </p>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "Your future self will thank you for doing the boring work now."
              </p>
            </div>

            {/* Section Divider */}
            <div className="my-16 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              <div className="text-slate-500 text-sm">•••</div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            </div>

            <div className="my-12 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-8">
              <div className="text-center">
                <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">The Fundamental Shift</div>
                <p className="text-2xl font-semibold text-white mb-2">
                  From "we need to find the right rule somewhere"
                </p>
                <p className="text-xl text-slate-300">
                  to "check the matrix, find the canonical source"
                </p>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700/50 rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Want More AI Workflow Insights?</h3>
            <p className="text-slate-300 mb-6">Get practical frameworks for building scalable AI systems that actually work in production.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <a className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors">
                  Subscribe for Updates →
                </a>
              </Link>
              <Link href="/articles">
                <a className="inline-block border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold px-8 py-3 rounded-lg transition-colors">
                  Browse More Articles
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
            <p className="text-slate-400 mb-4">What's Next?</p>
            <Link href="/articles">
              <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold">
                Browse More Articles
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}