```tsx
import React from 'react';
import { Clock, Calendar, Tag, ArrowRight, ExternalLink } from 'lucide-react';

const Article = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <time dateTime="2025-12-02">December 2, 2025</time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>8 min read</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag className="w-4 h-4" />
            <span>AI Workflow</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          The Rule Consolidation: How We Kept 40+ Rules Manageable Without Losing Power
        </h1>
        
        <p className="text-xl text-gray-700 leading-relaxed">
          I watched our governance system almost collapse under its own complexity. Here's how we saved it with taxonomy, a single foreman, and some hard-won lessons about scaling systems.
        </p>
      </header>

      {/* Hero Image Placeholder */}
      <div className="w-full h-64 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg mb-12 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
            📊
          </div>
          <p>Rule consolidation visualization</p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        
        <p>
          Picture this: 3 AM, launch week, and I'm staring at our multi-agent system trying to figure out why it's giving contradictory advice about ChatGPT integration. Plot twist: we had <em>five different rules</em> covering the same thing, scattered across different folders, with different approaches.
        </p>

        <p>
          That's when it hit me—we'd built something powerful, but we were drowning in our own success. Forty-seven rules covering discovery, validation, build, and scale phases. Multiple agents getting confused about which rule was canonical. The orchestrator trying to track everything and failing spectacularly.
        </p>

        <p>
          Sound familiar? Whether you're building a complex AI system, managing a growing codebase, or just trying to keep your team's processes from turning into spaghetti, you've probably been here. Systems that start elegant inevitably accumulate cruft, duplication, and contradictions as they scale.
        </p>

        <p>
          Here's the thing though: <strong>we didn't simplify by cutting capabilities</strong>. We consolidated without losing a single feature, validation gate, or quality check. And more importantly, we built systems to keep it that way.
        </p>

        <p>
          Let me walk you through exactly how we went from chaos to clarity—and the framework you can use for any complex system.
        </p>

        <h2>The Complexity Crisis (Or: How I Learned to Stop Worrying and Love Taxonomy)</h2>

        <p>
          Six months ago, I was that person. You know the one—frantically grep-ing through dozens of files, trying to find the "real" rule about data moat guidance. Was it in the 003 series? The 170s? The 180s? 
        </p>

        <p>
          (Spoiler alert: it was in all three, with slightly different advice.)
        </p>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-3">The Symptoms of Rule Sprawl</h3>
          <ul className="text-red-700 space-y-2">
            <li><strong>Duplicate rules everywhere:</strong> Cursor agent responsibilities in both 003 and 028 series</li>
            <li><strong>Unclear ownership:</strong> Six different Hub implementation rules (132, 133, 134, 136, 137, 200)</li>
            <li><strong>Numbering collisions:</strong> Two different rules both labeled 198</li>
            <li><strong>Agent confusion:</strong> "How do I integrate ChatGPT?" had five different answers</li>
          </ul>
        </div>

        <p>
          The system was still powerful—it enforced quality gates, captured institutional knowledge, guided our workflow. But it was becoming unmaintainable. And here's what I learned the hard way: <em>unmaintainable systems don't gradually decline, they collapse suddenly</em>.
        </p>

        <h2>The Breakthrough: Three Concepts That Changed Everything</h2>

        <p>
          The solution came from borrowing ideas from everywhere—military command structures, software architecture, even how libraries organize books. Three interlocking concepts saved us:
        </p>

        <h3>1. Four-Tier Taxonomy (Because Everything Needs a Home)</h3>

        <p>
          We reorganized all rules into four clear tiers based on <em>how they're used</em>, not what they're about:
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Core Guardrails (000–099)</h4>
              <p className="text-blue-700 text-sm">Always-on constraints that gate every phase. Accessibility standards, testing requirements, document quality. These never get ignored.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Stack & Integrations (100–199)</h4>
              <p className="text-blue-700 text-sm">Technology conventions that activate only when a specific agent is working. Next.js patterns, Drizzle schemas, tRPC conventions.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Playbooks (200–260)</h4>
              <p className="text-blue-700 text-sm">Step-by-step workflows with explicit handoffs. How-to guides that orchestrate multiple agents in sequence.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Discovery Pack (300–340)</h4>
              <p className="text-blue-700 text-sm">Templates and AI orchestration specific to the heat filter phase. Only loaded when Discovery pod is active.</p>
            </div>
          </div>
        </div>

        <p>
          This taxonomy gave us a mental model: "Is this a universal constraint? A specialist's tool? A workflow? Or a discovery template?" Every rule now had a clear home. No more guessing.
        </p>

        <h3>2. Single Foreman Orchestrator (One Boss to Rule Them All)</h3>

        <p>
          We designated <code>000-orchestration.mdc</code> as the single "foreman" managing the entire workflow. Instead of each agent trying to figure out which rules apply, the foreman:
        </p>

        <ul>
          <li>References the rule-agent matrix to see who owns what</li>
          <li>Enforces mandatory outputs at each phase gate</li>
          <li>Calls specialist agents with links to their canonical rules</li>
          <li>Keeps a conversational, high-level view without restating details</li>
        </ul>

        <p>
          This gave us one place to understand the end-to-end flow. Every other rule became a specialist's handbook that the foreman calls when needed. Simple. Clean. It actually works.
        </p>

        <h3>3. Rule-Agent Matrix (Our Rosetta Stone)</h3>

        <p>
          The matrix became our single source of truth—a simple table that maps every rule to its purpose:
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full bg-white border border-gray-300 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 border-b text-left font-medium">Rule</th>
                <th className="px-4 py-3 border-b text-left font-medium">Type</th>
                <th className="px-4 py-3 border-b text-left font-medium">Phase</th>
                <th className="px-4 py-3 border-b text-left font-medium">Primary Agents</th>
                <th className="px-4 py-3 border-b text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 border-b font-mono text-xs">000-orchestration</td>
                <td className="px-4 py-3 border-b">Core</td>
                <td className="px-4 py-3 border-b">All</td>
                <td className="px-4 py-3 border-b">Orchestrator</td>
                <td className="px-4 py-3 border-b text-green-600">Active</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b font-mono text-xs">118-brand-landscape</td>
                <td className="px-4 py-3 border-b">Stack</td>
                <td className="px-4 py-3 border-b">Validation → Build</td>
                <td className="px-4 py-3 border-b">Brand Strategist</td>
                <td className="px-4 py-3 border-b text-green-600">Active</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b font-mono text-xs">050-manus-integration</td>
                <td className="px-4 py-3 border-b">Meta</td>
                <td className="px-4 py-3 border-b">N/A</td>
                <td className="px-4 py-3 border-b">(see 190)</td>
                <td className="px-4 py-3 border-b text-red-600">Deprecated</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Every rule appears exactly once. Deprecated rules point to their canonical replacement. The matrix shows which agent should care about which rule, and at what phase it applies.
        </p>

        <p>
          [PULL QUOTE] "The matrix became our navigation system—one table that prevents duplication and confusion."
        </p>

        <h2>The Consolidation Process (Or: How to Untangle Spaghetti Code)</h2>

        <p>
          Here's how we actually executed the consolidation. Fair warning: this took about 40 hours of focused work, but it was worth every minute.
        </p>

        <h3>Step 1: Inventory & Mapping</h3>

        <p>
          We listed every rule file and its purpose. This became our "streamlining blueprint." For each cluster of overlapping rules, we asked:
        </p>

        <ul>
          <li>Which file becomes the canonical source?</li>
          <li>What unique content needs to be merged in?</li>
          <li>What gets deprecated vs. deleted?</li>
        </ul>

        <p>
          Boring? Absolutely. Essential? You bet.
        </p>

        <h3>Step 2: Merge & Deprecate (The Hard Part)</h3>

        <p>
          Let me show you how this worked in practice with our AI tool integration mess.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h4 className="font-semibold mb-3">Before: The AI Tool Integration Disaster</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><code>050-manus-integration.mdc</code></li>
            <li><code>060-chatgpt-refinement.mdc</code></li>
            <li><code>070-elevenlabs-integration.mdc</code></li>
            <li><code>080-midjourney-canva.mdc</code></li>
            <li>Plus duplicates in the 300s for discovery-specific prompts</li>
          </ul>
        </div>

        <p>
          We consolidated all of this into <code>190-ai-tool-integrations.mdc</code> with clear sections:
        </p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h4 className="font-semibold mb-3">After: One Canonical Source</h4>
          <div className="text-sm text-gray-700 font-mono">
            <div># Rule 190: AI Tool Integrations</div>
            <div className="mt-2">## Manus.im Integration</div>
            <div>- When to use: Narrative clustering, insight synthesis</div>
            <div>- API patterns: ...</div>
            <div className="mt-2">## ChatGPT Integration</div>
            <div>- When to use: Refinement, persona synthesis</div>
            <div>- API patterns: ...</div>
          </div>
        </div>

        <p>
          Then we replaced the old files with one-line pointers:
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <code className="text-sm"># Rule 050: Manus Integration (DEPRECATED)<br />
          &gt; This rule has been merged into `190-ai-tool-integrations.mdc`. See the Manus section.</code>
        </div>

        <p>
          Same story with the Hub implementation chaos. Six separate rules became one comprehensive <code>200-hub-implementation.mdc</code> with subsections for document discovery, workflow linkage, UI conventions, and API patterns.
        </p>

        <p>
          Now there's one place to learn how the Hub works. Revolutionary, I know.
        </p>

        <h3>Step 3: Fix the Numbering Collisions</h3>

        <p>
          We had two rules with the 198 prefix. Simple fix, tedious execution:
        </p>

        <ul>
          <li><code>198-ai-prompt-templates.mdc</code> → <code>199-ai-prompt-templates.mdc</code></li>
          <li><code>199-ai-error-handling.mdc</code> → <code>201-ai-error-handling.mdc</code></li>
        </ul>

        <p>
          Then came the fun part: updating every reference across the entire codebase. Matrix, playbooks, orchestrator, agent prompts—everything.
        </p>

        <h3>Step 4: Update All References (The Tedious But Critical Part)</h3>

        <p>
          This is where most consolidation efforts die. You merge the rules but forget to update the references, and suddenly nothing works.
        </p>

        <p>
          We used grep to find every mention of deprecated rule numbers:
        </p>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg my-6 font-mono text-sm">
          # Find all references to the old rule<br />
          grep -r "050-manus" .cursor/rules docs<br /><br />
          # Update each file to reference 190-ai-tool-integrations instead
        </div>

        <p>
          We updated the orchestrator, the matrix, all playbooks, agent documentation—everything that might reference the old rules. It took a full day, but it was worth it.
        </p>

        <h3>Step 5: Document the System (So This Never Happens Again)</h3>

        <p>
          We created <code>docs/rules/change-control.md</code>—a lightweight checklist for future changes:
        </p>

        <ol>
          <li><strong>Before You Edit:</strong> Clarify tier, identify owners, check for duplicates</li>
          <li><strong>While Editing:</strong> Use standard format, include lifecycle/agents/deliverables sections</li>
          <li><strong>After Saving:</strong> Update matrix, patch orchestrator, log in blueprint</li>
          <li><strong>Acceptance Tests:</strong> Verify no duplicates, test all links</li>
        </ol>

        <p>
          This checklist ensures future additions don't reintroduce the chaos we just cleaned up. Because humans forget, but checklists don't.
        </p>

        <h2>The Results (Or: What 40 Hours of Tedium Gets You)</h2>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-8 my-8">
          <h3 className="text-lg font-semibold mb-6 text-center">Before vs. After</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-red-700 mb-3">Before: The Chaos</h4>
              <ul className="text-sm space-y-2 text-red-600">
                <li>• 47 rule files (many duplicated)</li>
                <li>• 6 different Hub implementation rules</li>
                <li>• 9 different AI tool rules</li>
                <li>• 3 different data moat rules</li>
                <li>• 400+ line orchestrator trying to explain everything</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-3">After: The Order</h4>
              <ul className="text-sm space-y-2 text-green-600">
                <li>• 38 active rules + 9 deprecated pointers</li>
                <li>• 1 canonical Hub implementation rule</li>
                <li>• 1 canonical AI tool integration rule</li>
                <li>• 1 moat & expansion strategy rule</li>
                <li>• 200-line orchestrator that links to specialists</li>
              </ul>
            </div>
          </div>
        </div>

        <p>
          [STATS CARD] Zero capability loss—every check, gate, and process preserved. Clear ownership through the matrix. Single source of truth for each concern.
        </p>

        <h2>How You Can Do This (The Framework That Actually Works)</h2>

        <p>
          Whether you're managing a multi-agent AI system, a complex codebase, or a team with scattered process docs, here's how to apply these principles:
        </p>

        <h3>1. Create Your Taxonomy</h3>

        <p>
          Group your rules/docs/processes into tiers based on <em>how they're used</em>:
        </p>

        <ul>
          <li><strong>Universal constraints</strong> (apply to everyone, always)</li>
          <li><strong>Specialist tools</strong> (apply to specific roles/agents)</li>
          <li><strong>Workflows</strong> (multi-step processes with handoffs)</li>
          <li><strong>Templates</strong> (reusable starting points)</li>
        </ul>

        <h3>2. Designate a "Foreman" Document</h3>

        <p>
          Create one top-level document that orchestrates everything else. It should explain the high-level flow, reference (but not repeat) specialist rules, enforce phase gates, and be readable by a human in 5-10 minutes.
        </p>

        <h3>3. Build Your Matrix</h3>

        <p>
          Create a single table mapping every rule to its tier, phase, owner, purpose, and status. This becomes your navigation system and prevents duplication.
        </p>

        <h3>4. Consolidate Ruthlessly</h3>

        <p>
          Find overlapping rules and merge them. Use sections and anchor links to preserve findability. Replace old files with pointers to the canonical source.
        </p>

        <h3>5. Document the Change Process</h3>

        <p>
          Write down how to add/modify/retire rules in the future. Make it a checklist, not a philosophy doc. Include acceptance criteria before merging.
        </p>

        <h3>6. Enforce at Review Time</h3>

        <p>
          If you have code review or doc review, add a check: "Does this follow the change-control checklist?" Make consolidation a habit, not a one-time cleanup.
        </p>

        <h2>Trade-Offs and Gotchas (What I Wish Someone Had Told Me)</h2>

        <p>
          This approach isn't free. Here are the costs I didn't anticipate:
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">The Hidden Costs</h3>
          <ul className="text-yellow-700 space-y-2">
            <li><strong>Upfront Investment:</strong> 40 hours of focused work—not trivial</li>
            <li><strong>Requires Discipline:</strong> System only works if people follow the checklist</li>
            <li><strong>Anchor Complexity:</strong> Big files with sections mean agents need to know which section to read</li>
            <li><strong>Regular Maintenance:</strong> Matrix needs periodic review every 3-6 months</li>
          </ul>
        </div>

        <p>
          Also, this works because our rules are systematic and have clear ownership. If your docs are more exploratory or narrative, a wiki or graph-based system might fit better.
        </p>

        <p>
          But here's what surprised me: the system got <em>stronger</em> after consolidation. Since cleaning up, we've confidently added brand system blueprints, dev quality rules, Supabase integration, gamification playbooks, micro-interactions guidance—each following the change-control checklist and landing in the right tier.
        </p>

        <p>
          [PULL QUOTE] "Most systems collapse under their own complexity. Ours got stronger."
        </p>

        <h2>What's Next (The Promise of Systematic Consolidation)</h2>

        <p>
          Here's the thing about good systems: they make the next decision easier. Since consolidating, every new rule gets added without drama. We know which tier it belongs in, which agents own it, and how to link it properly.
        </p>

        <p>
          The real test came when we needed to add five new rules in one week (brand blueprints, quality assistants, personalization playbooks). Instead of chaos, it took 30 minutes each. The taxonomy held. The foreman stayed clean. The matrix stayed current.
        </p>

        <p>
          That's the promise of systematic consolidation: governance that scales without becoming unmaintainable.
        </p>

        <p>
          If you're managing any complex system of rules, processes, or documentation, remember this framework: taxonomy + foreman + matrix + discipline. It's not glamorous work, but it's the difference between systems that collapse and systems that compound.
        </p>

        <p>
          What if your governance system could handle infinite complexity without breaking? That's what happens when you stop managing rules and start architecting systems.
        </p>

        <p>
          Real talk: the consolidation was tedious. But watching our multi-agent system confidently navigate 38 rules without confusion? Seeing new contributors add rules correctly on their first try? That's the compound interest of good systems design.
        </p>

        <p>
          Your future self will thank you for doing the boring work now.
        </p>

      </div>

      {/* CTA Section */}
      <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Want More AI Workflow Insights?</h3>
        <p className="text-gray-700 mb-6">
          Get practical frameworks for building scalable AI systems that actually work in production.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            Subscribe for Updates
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2">
            Browse More Articles
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

    </article>
  );
};

export default Article;
```