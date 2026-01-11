import { ArrowLeft, ArrowRight } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";
import ResponsiveNav from "@/components/ResponsiveNav";
import { Link } from "wouter";

export default function WritingPRDsForAI() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ResponsiveNav currentPage="articles" />

      <article className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/articles">
            <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </a>
          </Link>

          <div className="mb-12 rounded-lg overflow-hidden">
            <img
              src="/images/articles/writing-prds-for-ai-hero.png"
              alt="Writing PRDs That AI Agents Can Execute"
              className="w-full h-auto"
            />
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
            <span>January 11, 2026</span>
            <span>•</span>
            <span>13 min read</span>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Writing PRDs That AI Agents Can Execute
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              I spent 45 minutes writing a PRD. The autonomous agent built the feature perfectly overnight for $42. Then I wrote another PRD in 20 minutes. The agent failed three times and wasted $60. The difference? Acceptance criteria specificity.
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_blockquote]:my-8 [&_blockquote:last-child]:mb-0 [&_ul]:my-6 [&_ol]:my-6 [&_ul]:pl-6 [&_ol]:pl-6 [&_ul]:list-disc [&_ol]:list-decimal [&_li]:my-2 [&_li]:marker:text-cyan-400 [&_li]:text-slate-200">
            
            <p className="text-slate-300 leading-relaxed mb-6">
              The difference between a $40 successful autonomous build and a $60 failed one isn't the agent. It's the PRD. After running 50+ autonomous builds, I've learned this the expensive way: 80% of autonomous coding success is determined before you start the build.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Traditional PRDs were written for humans. Humans can infer context, ask clarifying questions, and fill in ambiguous requirements. AI agents can't. They need atomic user stories with specific, testable acceptance criteria. No ambiguity. No inference. No "you know what I mean."
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              This article is the PRD-writing framework I wish I'd had from the start. It's based on real failures, real successes, and real money spent learning what works.
            </p>

            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "The quality of your PRD determines the quality of the autonomous build. Garbage in, garbage out—at $3 per iteration."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Atomic User Story Framework
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              An atomic user story is the smallest unit of work that delivers verifiable value. For autonomous agents, "atomic" has specific meaning:
            </p>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-white font-semibold mb-4">Characteristics of Atomic Stories:</div>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong className="text-white">Completable in one context:</strong> Can be implemented start-to-finish without breaking focus</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong className="text-white">Testable independently:</strong> Acceptance criteria can be verified without other stories</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong className="text-white">Self-contained:</strong> No external references or unspoken assumptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong className="text-white">Appropriately sized:</strong> Typically affects 1-3 files, adds/changes 20-100 lines</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              Story Size: The Goldilocks Problem
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Too big, and the agent loses focus or runs out of context. Too small, and you're just creating overhead. The sweet spot:
            </p>

            <div className="my-12 grid md:grid-cols-3 gap-6">
              <div className="bg-red-900/10 border border-red-900/30 rounded-lg p-6">
                <div className="text-red-400 font-semibold mb-4">Too Small ❌</div>
                <p className="text-slate-400 text-sm mb-3">"Add a button to the header"</p>
                <p className="text-slate-500 text-xs">Just code this yourself in 2 minutes</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-6">
                <div className="text-cyan-400 font-semibold mb-4">Just Right ✓</div>
                <p className="text-slate-300 text-sm mb-3">"Add a priority filter dropdown with 5 options that updates URL state"</p>
                <p className="text-slate-400 text-xs">Perfect autonomous scope</p>
              </div>
              <div className="bg-red-900/10 border border-red-900/30 rounded-lg p-6">
                <div className="text-red-400 font-semibold mb-4">Too Large ❌</div>
                <p className="text-slate-400 text-sm mb-3">"Build a complete user dashboard with 12 widgets"</p>
                <p className="text-slate-500 text-xs">Break into 12 atomic stories</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Writing Acceptance Criteria That Actually Work
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Acceptance criteria are the contract between you and the agent. Here's what works:
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              Rule 1: Be Specific, Not Subjective
            </h3>

            <div className="my-12 grid md:grid-cols-2 gap-6">
              <div className="bg-red-900/10 border border-red-900/30 rounded-lg p-6">
                <div className="text-red-400 font-semibold mb-4">❌ Subjective (Fails)</div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span className="text-slate-400">"Make it look good"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span className="text-slate-400">"Add nice animations"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span className="text-slate-400">"Make it user-friendly"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span className="text-slate-400">"Improve the layout"</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-6">
                <div className="text-cyan-400 font-semibold mb-4">✓ Specific (Succeeds)</div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span className="text-slate-300">"Card uses shadow-lg and rounded-lg classes"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span className="text-slate-300">"Fade-in animation: opacity 0→1 over 200ms"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span className="text-slate-300">"All buttons have min-width of 100px and aria-labels"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span className="text-slate-300">"Layout uses CSS Grid: 2 columns on desktop, 1 on mobile"</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              Rule 2: Make It Verifiable
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Can someone (human or agent) definitively say "yes, this criterion is met"? If not, rewrite it.
            </p>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <div className="text-red-400 font-semibold mb-2">❌ Not Verifiable:</div>
                  <p className="text-slate-400 text-sm">"Dropdown should have reasonable options"</p>
                </div>
                <div className="h-px bg-slate-800"></div>
                <div>
                  <div className="text-cyan-400 font-semibold mb-2">✓ Verifiable:</div>
                  <p className="text-slate-300 text-sm">"Dropdown has exactly 5 options: All, High, Medium, Low, None (in that order)"</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              Rule 3: Reference Existing Patterns
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              AI agents excel at pattern matching. Point them to similar code:
            </p>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="text-cyan-400 font-semibold mb-4">Example: Pattern References</div>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>"Follow the form validation pattern in UserSettingsForm.tsx"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>"Use the same data fetching approach as DashboardPage.tsx (React Query with error boundaries)"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>"Button styling should match PrimaryButton component (see src/components/ui/PrimaryButton.tsx)"</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Complete PRD Template
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Here's the exact format I use for autonomous builds:
            </p>

            <div className="my-8 bg-slate-900/50 border border-slate-800 rounded-lg p-6">
              <pre className="text-sm text-slate-300 overflow-x-auto">
{`# Feature: [Feature Name]

## Overview
Brief description of what this feature does and why it matters.
One paragraph maximum.

## User Stories

### Story 1: [Descriptive Title]
**Description:** What this story accomplishes in 1-2 sentences.

**Acceptance Criteria:**
- [ ] Criterion 1: Specific, testable condition
- [ ] Criterion 2: Specific, testable condition
- [ ] Criterion 3: Specific, testable condition
- [ ] Criterion 4: Specific, testable condition
- [ ] Criterion 5: Specific, testable condition

**Technical Notes:**
- Reference to similar code or patterns to follow
- Any specific libraries or approaches to use
- Edge cases to handle

**Dependencies:** Story 2 (if any)

---

### Story 2: [Next Story]
...
`}
              </pre>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Real Example: Analytics Dashboard
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Let me show you a real PRD that resulted in a successful $42 autonomous build:
            </p>

            <div className="my-10 bg-slate-900/50 border border-slate-800 rounded-lg p-8">
              <div className="text-cyan-400 font-semibold mb-4">Story 3: Analytics Chart Component</div>
              
              <div className="mb-4">
                <div className="text-white font-semibold mb-2">Description:</div>
                <p className="text-slate-300 text-sm">Create a reusable line chart component that displays time-series analytics data with hover tooltips.</p>
              </div>

              <div className="mb-4">
                <div className="text-white font-semibold mb-2">Acceptance Criteria:</div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Component file created at src/components/analytics/AnalyticsChart.tsx</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Uses Chart.js library (already in package.json) with react-chartjs-2 wrapper</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Accepts prop: data: Array&lt;{`{date: string, value: number}`}&gt;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>X-axis displays dates formatted as "MMM DD" (e.g., "Jan 15")</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Y-axis auto-scales based on data range with 10% padding above max value</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Line color is cyan-500, fill gradient from cyan-500/20 to transparent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Hover tooltip shows: "Date: [formatted date] | Value: [number with commas]"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Chart height is 300px, width is 100% of container</span>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="text-white font-semibold mb-2">Technical Notes:</div>
                <p className="text-slate-300 text-sm">Follow the chart configuration pattern used in MetricsChart.tsx. Use the same responsive options and hover behavior.</p>
              </div>

              <div>
                <div className="text-white font-semibold mb-2">Dependencies:</div>
                <p className="text-slate-400 text-sm">Story 1 (data fetching hook must exist first)</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Notice the specificity. No ambiguity about colors, sizes, formats, or behavior. The agent implemented this perfectly on the first try.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Common PRD Mistakes That Waste Money
            </h2>

            <div className="my-10 bg-red-900/10 border border-red-900/30 rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <div className="text-red-400 font-semibold mb-2">Mistake 1: Vague Criteria</div>
                  <p className="text-slate-400 text-sm mb-2"><strong>Example:</strong> "Add filtering functionality"</p>
                  <p className="text-slate-300 text-sm"><strong>Cost:</strong> Agent makes 3 wrong assumptions, fails 3 times, wastes $12</p>
                  <p className="text-cyan-400 text-sm mt-2"><strong>Fix:</strong> "Dropdown with 5 options: All, Active, Inactive, Pending, Archived"</p>
                </div>
                <div className="h-px bg-red-900/30"></div>
                <div>
                  <div className="text-red-400 font-semibold mb-2">Mistake 2: Missing Dependencies</div>
                  <p className="text-slate-400 text-sm mb-2"><strong>Example:</strong> Story 3 needs Story 1's database schema, but dependency not marked</p>
                  <p className="text-slate-300 text-sm"><strong>Cost:</strong> Agent builds Story 3 first, fails due to missing schema, wastes $8</p>
                  <p className="text-cyan-400 text-sm mt-2"><strong>Fix:</strong> Explicitly mark "Dependencies: Story 1" in Story 3</p>
                </div>
                <div className="h-px bg-red-900/30"></div>
                <div>
                  <div className="text-red-400 font-semibold mb-2">Mistake 3: Stories Too Large</div>
                  <p className="text-slate-400 text-sm mb-2"><strong>Example:</strong> "Build complete admin dashboard" (affects 20+ files)</p>
                  <p className="text-slate-300 text-sm"><strong>Cost:</strong> Agent times out or loses focus, success rate drops to 40%</p>
                  <p className="text-cyan-400 text-sm mt-2"><strong>Fix:</strong> Break into 8 atomic stories: layout, nav, widgets 1-6</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The PRD Quality Checklist
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Before running an autonomous build, verify your PRD passes this checklist:
            </p>

            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-300">Every story has 3-5 specific, testable acceptance criteria</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-300">No subjective language ("good", "nice", "reasonable")</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-300">Stories reference existing code patterns where applicable</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-300">Dependencies between stories are explicitly marked</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-300">Each story affects 1-3 files maximum</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-300">A junior developer could build this without asking questions</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-300">Technical notes provide architectural guidance</span>
                </div>
              </div>
            </div>

            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "A 45-minute PRD that costs $42 beats a 20-minute PRD that costs $60 and fails."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Time Investment Pays Off
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              I used to rush PRD writing to "save time." Then I'd watch autonomous builds fail and cost $40-80 in wasted API calls. Now I spend 45-60 minutes on PRDs. My success rate went from 60% to 95%. The math is clear:
            </p>

            <div className="my-12 grid md:grid-cols-2 gap-6">
              <div className="bg-red-900/10 border border-red-900/30 rounded-lg p-6">
                <div className="text-red-400 font-semibold mb-4">Rushed PRD</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">PRD time:</span>
                    <span className="text-white">20 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Success rate:</span>
                    <span className="text-white">60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Average cost:</span>
                    <span className="text-white">$58</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Polish time:</span>
                    <span className="text-white">90 min</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-6">
                <div className="text-cyan-400 font-semibold mb-4">Detailed PRD</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-300">PRD time:</span>
                    <span className="text-white">50 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Success rate:</span>
                    <span className="text-white">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Average cost:</span>
                    <span className="text-white">$38</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Polish time:</span>
                    <span className="text-white">20 min</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Spending an extra 30 minutes on the PRD saves 70 minutes of polish time and $20 in failed builds. That's a 2.3x ROI on PRD quality.
            </p>

            <div className="my-16 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              <div className="text-slate-500 text-sm">•••</div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Writing PRDs for AI agents isn't about documentation for its own sake. It's about translating strategic intent into executable specifications. The specificity required—acceptance criteria with no ambiguity, stories sized appropriately, dependencies marked explicitly—forces you to think clearly about what you're building.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              That clarity compounds. Clear PRDs lead to successful autonomous builds. Successful builds lead to faster shipping. Faster shipping leads to more experiments. More experiments lead to better products. It all starts with a PRD that an agent can execute without asking questions.
            </p>

            <div className="my-12 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-8">
              <div className="text-center">
                <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">The Bottom Line</div>
                <p className="text-2xl font-semibold text-white mb-4">
                  45 minutes writing a clear PRD saves hours of debugging and dollars on retries
                </p>
                <p className="text-slate-300">
                  Invest upfront. Ship overnight.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700/50 rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Write PRDs That Work?</h3>
            <p className="text-slate-300 mb-6">Let's discuss how to optimize your specifications for autonomous execution.</p>
            <Link href="/contact">
              <a className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors">
                Get in Touch →
              </a>
            </Link>
          </div>

          <div className="mt-16">
            <NewsletterSignup />
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4">What's Next?</p>
            <Link href="/articles/self-validating-ai-agents">
              <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold">
                Read Next: Self-Validating AI Agents
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
