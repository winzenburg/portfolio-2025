import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";
import ResponsiveNav from "@/components/ResponsiveNav";
import { Link } from "wouter";

export default function DevQualityAssistant() {
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
              alt="Developer planning tests before coding"
              className="w-full h-auto"
            />
          </div>

          {/* Article Meta */}
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
            <span>December 2, 2024</span>
            <span>•</span>
            <span>7-9 min read</span>
          </div>

          {/* Article Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The Dev Quality Assistant: Test Planning Before Code Touches the Repo
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Most teams treat testing as an afterthought. I learned the hard way why that's expensive. Here's how we made it a build prerequisite instead—and shipped a feature in 3 days that would've normally taken 3 weeks.
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none prose-p:mb-6">
            <p className="text-slate-300 leading-relaxed mb-6">
              Last month, I watched our team ship a feature in 3 days that would've normally taken 3 weeks. Same quality, same thoroughness, but zero of the usual "oh crap, we broke production" moments.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The difference? We planned our tests before we wrote a single line of code.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              I know, I know. Planning tests first sounds about as exciting as flossing. But here's the thing—it's the difference between shipping with confidence and shipping with anxiety.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Let me tell you about the cycle I've lived through dozens of times (and you probably have too):
            </p>

            <ol className="text-slate-300 leading-relaxed mb-6 space-y-2">
              <li>Product creates a PRD for a shiny new feature</li>
              <li>Engineering gets excited and starts building immediately</li>
              <li>Feature gets shipped to staging looking beautiful</li>
              <li>QA finds 5 critical bugs that make you question your life choices</li>
              <li>Engineering scrambles to fix them (usually late at night)</li>
              <li>More bugs surface in production because Murphy's Law is real</li>
              <li>Team realizes there are no tests covering the edge cases</li>
              <li>Someone says "we should really write tests" (spoiler: they never get written)</li>
              <li>Rinse and repeat until you're all dead inside</li>
            </ol>

            <p className="text-slate-300 leading-relaxed mb-6">
              Sound familiar? The result is fragile code, manual testing bottlenecks, and that constant low-level anxiety that something's going to break.
            </p>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "We flipped this. In our product creation pipeline, the dev quality plan is a mandatory gate between product spec and implementation. No code gets written until we've mapped out what 'correct' looks like."
              </p>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              This isn't about perfectionism or slowing teams down. It's about <strong className="text-white">defining correctness before building</strong>, the same way you wouldn't start construction without blueprints.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Here's what I'll show you: exactly how we use the Dev Quality Assistant to pre-plan tests, why it's become non-negotiable in our build process, and how you can steal our approach for your own workflow.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Problem: Test-After-Build (And Why It's Expensive)
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Let me paint you a picture of how this usually goes wrong.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              The Typical Pattern (You've Been Here)
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Product writes a PRD: "Users should be able to archive projects." Seems simple enough, right?
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Engineering implements it. Archive endpoint? Check. UI updates? Check. Manual testing shows it works. Ship it!
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Then the bug reports start rolling in: "I archived a project and lost all my tasks."
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Oops. Nobody thought about cascading deletes. Cue the post-mortem, the emergency fix, and the promise to "write tests next time."
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Plot twist: Next time never comes because there's always a new feature to ship.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              Why This Pattern Fails Every Single Time
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">No Tests == No Definition of "Done"</strong>: Without tests, "done" means "it worked when I tried it once." You're essentially shipping undefined behavior and hoping for the best.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Edge Cases Are Afterthoughts</strong>: Humans are notoriously bad at remembering edge cases when we're in the flow of building. "What if the project has 1,000 tasks?" "What if the user is a viewer, not an owner?" These questions only surface after the bugs do.
            </p>

            {/* Stats Card */}
            <div className="my-10 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-8">
              <div className="text-center mb-4">
                <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">Edge Cases Caught</div>
                <div className="text-5xl font-bold text-cyan-400 mb-2">27</div>
                <div className="text-slate-300 text-sm">During planning phase in the last 3 months</div>
                <div className="text-slate-400 text-xs mt-2">vs. catching them in production (expensive and embarrassing)</div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Tests Become Debt</strong>: If tests are optional, they never get written. There's always a new feature, a new deadline, a new fire to put out. Testing becomes "we should really do this someday" debt that compounds faster than credit card interest.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Manual Testing Doesn't Scale</strong>: Every new feature adds to the manual test matrix. Eventually, QA becomes a bottleneck and teams start cutting corners. I've been there—it's not pretty.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Solution: Dev Quality Plan as a Pre-Code Gate
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Here's what we changed: We treat the dev quality plan the same way we treat the PRD—<strong className="text-white">it's a mandatory deliverable before implementation starts</strong>.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Our pipeline now looks like this:
            </p>

            <ol className="text-slate-300 leading-relaxed mb-6 space-y-2">
              <li><strong className="text-white">Product Spec (PRD/ADR)</strong> → What we're building and why</li>
              <li><strong className="text-cyan-400">Dev Quality Plan</strong> ← NEW GATE (what tests, quality checks, deploy steps)</li>
              <li><strong className="text-white">Implementation</strong> → Write code guided by the test plan</li>
              <li><strong className="text-white">Quality Checks</strong> → Run lint, tests, deploy checklist</li>
              <li><strong className="text-white">Ship</strong> (with actual confidence this time)</li>
            </ol>

            <p className="text-slate-300 leading-relaxed mb-6">
              The dev quality plan sits between spec and code. It's the bridge that translates "what we're building" into "how we know it's correct."
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              What Goes in the Plan (The Four Required Sections)
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Our dev quality plan (we call it Rule 125, template at <code className="text-cyan-400 bg-slate-900 px-2 py-1 rounded">docs/templates/DEV-QUALITY-TEMPLATE.md</code>) has four sections that we never skip:
            </p>

            <h4 className="text-xl font-bold text-white mt-6 mb-3">1. Feature Snapshot</h4>
            
            <p className="text-slate-300 leading-relaxed mb-6">
              This grounds everything in context:
            </p>
            <ul className="text-slate-300 leading-relaxed mb-6 space-y-1">
              <li>Brief description (one paragraph—no novels)</li>
              <li>Affected surfaces (API, UI, database, third-party integrations)</li>
              <li>Owners (which engineers, which agents, who's responsible for what)</li>
            </ul>

            <h4 className="text-xl font-bold text-white mt-6 mb-3">2. Automated Test Suggestions (The Meat and Potatoes)</h4>

            <p className="text-slate-300 leading-relaxed mb-6">
              This is where the magic happens. We map out three tiers of tests:
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Functional Tests (The Happy Path)</strong>:
            </p>
            <ul className="text-slate-300 leading-relaxed mb-6 space-y-1">
              <li>What acceptance criteria from the PRD need test coverage?</li>
              <li>For each criterion, what's the specific test scenario?</li>
              <li>What tooling makes sense (unit, integration, e2e)?</li>
              <li>Where exactly should we implement this (file path, test suite)?</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Edge Case Tests (The Unhappy Path)</strong>:
            </p>
            <ul className="text-slate-300 leading-relaxed mb-6 space-y-1">
              <li>Error handling (invalid input, missing data, timeouts)</li>
              <li>Boundary values (empty arrays, max string length, negative numbers)</li>
              <li>Permissions (user not authenticated, wrong role, cross-org access)</li>
              <li>Localization fun (timezones, date formats, currencies)</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Regression / Non-Functional Tests</strong>:
            </p>
            <ul className="text-slate-300 leading-relaxed mb-6 space-y-1">
              <li>Performance (load time, query efficiency)</li>
              <li>Accessibility (keyboard nav, screen reader, WCAG compliance)</li>
              <li>Contract tests (API shape, backward compatibility)</li>
            </ul>

            {/* Example Table */}
            <div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
              <h5 className="text-white font-semibold mb-4">Real Example: "Archive Project" Feature</h5>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 text-cyan-400">Test</th>
                      <th className="text-left py-2 text-cyan-400">Purpose</th>
                      <th className="text-left py-2 text-cyan-400">Type</th>
                      <th className="text-left py-2 text-cyan-400">Where</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-2">Archive sets `archived_at` timestamp</td>
                      <td className="py-2">Verify archive behavior</td>
                      <td className="py-2">Unit</td>
                      <td className="py-2 text-cyan-400">`projects.test.ts`</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2">Archived projects don't appear in default list</td>
                      <td className="py-2">Verify UI filtering</td>
                      <td className="py-2">Integration</td>
                      <td className="py-2 text-cyan-400">`project-list.test.tsx`</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2">Archiving requires owner/admin role</td>
                      <td className="py-2">Verify permissions</td>
                      <td className="py-2">Integration</td>
                      <td className="py-2 text-cyan-400">`api/archive.test.ts`</td>
                    </tr>
                    <tr>
                      <td className="py-2">User can unarchive and restore project</td>
                      <td className="py-2">Verify reversibility</td>
                      <td className="py-2">E2E</td>
                      <td className="py-2 text-cyan-400">`e2e/archive.spec.ts`</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h4 className="text-xl font-bold text-white mt-6 mb-3">3. Code Quality & Lint Guidance</h4>

            <p className="text-slate-300 leading-relaxed mb-6">
              This covers the non-testing quality stuff for the specific feature:
            </p>
            
            <ul className="text-slate-300 leading-relaxed mb-6 space-y-1">
              <li><strong className="text-white">State management</strong>: How should state be handled? (Context, Zustand, server state)</li>
              <li><strong className="text-white">Data fetching</strong>: Use tRPC, React Query, or plain fetch?</li>
              <li><strong className="text-white">Security</strong>: What auth checks are required?</li>
              <li><strong className="text-white">Accessibility</strong>: Any ARIA labels, keyboard shortcuts, focus management?</li>
              <li><strong className="text-white">Error handling</strong>: How should errors be displayed? Logged?</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              Plus references to existing lint rules (ESLint configs, Prettier, TypeScript strict mode, custom rules).
            </p>

            <h4 className="text-xl font-bold text-white mt-6 mb-3">4. Deployment Confidence Checklist</h4>

            <p className="text-slate-300 leading-relaxed mb-6">
              Step-by-step pre-push and post-deploy checks that make "done" unambiguous:
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Pre-Push</strong>:
            </p>
            <ul className="text-slate-300 leading-relaxed mb-6 space-y-1">
              <li>All tests pass (<code className="text-cyan-400 bg-slate-900 px-2 py-1 rounded">npm test</code>)</li>
              <li>No TypeScript errors (<code className="text-cyan-400 bg-slate-900 px-2 py-1 rounded">npm run type-check</code>)</li>
              <li>Linting passes (<code className="text-cyan-400 bg-slate-900 px-2 py-1 rounded">npm run lint</code>)</li>
              <li>Feature flag created (if applicable)</li>
              <li>Database migrations run successfully</li>
              <li>Docs updated (API docs, user guide)</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Post-Deploy</strong>:
            </p>
            <ul className="text-slate-300 leading-relaxed mb-6 space-y-1">
              <li>Smoke test in production (archive a test project)</li>
              <li>Check error logs (Sentry, CloudWatch)</li>
              <li>Monitor key metrics (archive event count, API latency)</li>
              <li>Watch for support tickets (the ultimate quality metric)</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Rollback Plan</strong>:
            </p>
            <ul className="text-slate-300 leading-relaxed mb-6 space-y-1">
              <li>Toggle feature flag off (if flagged)</li>
              <li>Revert database migration (if needed)</li>
              <li>Communicate to users (status page, email)</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Enforcement Mechanism (Making It Actually Happen)
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Here's the critical part: <strong className="text-white">the dev quality plan is a hard blocker</strong>.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              In <code className="text-cyan-400 bg-slate-900 px-2 py-1 rounded">000-orchestration.mdc</code> (our central foreman), we added:
            </p>

            <div className="my-8 bg-slate-900 border border-slate-700 rounded-lg p-6">
              <pre className="text-cyan-400 text-sm">
{`MANDATORY BUILD OUTPUTS:
- Before implementation: DEV-QUALITY-<feature-slug>.md must exist
- Before merging: All tests from the plan must pass
- Before deploying: Deployment checklist must be completed`}
              </pre>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              If the Dev Quality Assistant hasn't completed the plan, the Implementer can't start coding. Period. It's a hard gate, not a suggestion.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              And honestly? This was the key. Without enforcement, it's just another best practice that gets ignored when deadlines loom.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Real-World Example: Building a Multi-Tenant Invite System
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Let me walk you through a real dev quality plan we created last month. This should make it concrete.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Context</strong>: We needed to add the ability for organization owners to invite new members via email. Sounds simple, right? (Famous last words...)
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              Step 1: Feature Snapshot
            </h3>

            <div className="my-8 bg-slate-900/30 border-l-4 border-cyan-500 p-6">
              <h5 className="text-white font-semibold mb-4">Feature Snapshot</h5>
              <p className="text-slate-300 mb-4"><strong className="text-white">Description</strong>: Organization owners and admins can invite new members via email. Invites are sent via Resend, stored in `org_invites` table, and can be accepted via magic link.</p>
              
              <p className="text-slate-300 mb-2"><strong className="text-white">Affected surfaces</strong>:</p>
              <ul className="text-slate-300 text-sm space-y-1 mb-4">
                <li>New API route: `POST /api/orgs/{id}/invites`</li>
                <li>New database table: `org_invites`</li>
                <li>New email template: `invite-email.tsx`</li>
                <li>UI: New "Invite Member" modal in org settings</li>
              </ul>

              <p className="text-slate-300"><strong className="text-white">Owners</strong>: @engineeringArchitect, @implementer, @testEngineer</p>
            </div>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              Step 2: Automated Test Suggestions
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Functional Tests</strong>:
            </p>
            <ol className="text-slate-300 leading-relaxed mb-6 space-y-1">
              <li><strong className="text-white">Owner can send invite</strong> → Integration → <code className="text-cyan-400 bg-slate-900 px-2 py-1 rounded">api/invites.test.ts</code></li>
              <li><strong className="text-white">Invite email is sent via Resend</strong> → Integration → <code className="text-cyan-400 bg-slate-900 px-2 py-1 rounded">api/invites.test.ts</code> (mock Resend)</li>
              <li><strong className="text-white">Invite token is valid for 7 days</strong> → Unit → <code className="text-cyan-400 bg-slate-900 px-2 py-1 rounded">invites.test.ts</code></li>
              <li><strong className="text-white">Accepting invite adds user to org</strong> → E2E → <code className="text-cyan-400 bg-slate-900 px-2 py-1 rounded">e2e/invites.spec.ts</code></li>
              <li><strong className="text-white">User sees new org in org switcher</strong> → E2E → <code className="text-cyan-400 bg-slate-900 px-2 py-1 rounded">e2e/invites.spec.ts</code></li>
            </ol>

            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Edge Case Tests</strong> (this is where we catch the expensive bugs):
            </p>
            <ol className="text-slate-300 leading-relaxed mb-6 space-y-1">
              <li><strong className="text-white">Non-owner cannot send invite</strong> → Returns 403 → Integration → <code className="text-cyan-400 bg-slate-900 px-2 py-1 rounded">api/invites.test.ts</code></li>
              <li><strong className="text-white">Inviting existing member returns error</strong> → Integration → <code className="text-cyan-400 bg-slate-900 px-2 py-1 rounded">api/invites.test.ts</code></li>
              <li><strong className="text-white">Expired invite token returns error</strong> → Unit → <code className="text-cyan-400 bg-slate-900 px-2 py-1 rounded">invites.test.ts</code></li>
              <li><strong className="text-white">Malformed email returns 400</strong> → Integration → <code className="text-cyan-400 bg-slate-900 px-2 py-1 rounded">api/invites.test.ts</code></li>
              <li><strong className="text-white">User already in 5 orgs (limit) cannot accept</strong> → E2E → <code className="text-cyan-400 bg-slate-900 px-2 py-1 rounded">e2e/invites.spec.ts</code></li>
              <li><strong className="text-white">Invite to non-existent org returns 404</strong> → Integration → <code className="text-cyan-400 bg-slate-900 px-2 py-1 rounded">api/invites.test.ts</code></li>
            </ol>

            {/* Comparison Card */}
            <div className="my-10 grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/30 border border-red-900/30 rounded-lg p-6">
                <div className="text-red-400 font-semibold mb-2 uppercase text-sm tracking-wider">Without Planning</div>
                <div className="text-slate-400 text-sm">These 6 edge cases would've been production bugs discovered by users</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-700/50 rounded-lg p-6">
                <div className="text-cyan-400 font-semibold mb-2 uppercase text-sm tracking-wider">With Planning</div>
                <div className="text-slate-300 text-sm font-semibold">Caught during implementation, fixed before shipping</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              The Result
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Total time to create the dev quality plan: <strong className="text-white">45 minutes</strong>.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Time saved during implementation:
            </p>
            <ul className="text-slate-300 leading-relaxed mb-6 space-y-1">
              <li>Engineer knew exactly what tests to write (no guessing games)</li>
              <li>Caught 3 edge cases during coding that would've been production bugs</li>
              <li>Deployment was confident (all checklists passed)</li>
              <li>Zero bugs reported in the first two weeks</li>
            </ul>

            {/* ROI Stats Card */}
            <div className="my-10 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-8">
              <div className="text-center mb-4">
                <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">Time Saved Per Feature</div>
                <div className="text-5xl font-bold text-cyan-400 mb-2">~10 hours</div>
                <div className="text-slate-300 text-sm">45 minutes of planning saves 10+ hours of debugging and rework</div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">ROI: 45 minutes of planning saved ~10 hours of debugging and rework.</strong>
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Those are the kind of numbers that make you a believer.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              How to Implement This (Without Overthinking It)
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Here's your practical roadmap for adding the Dev Quality Assistant to your workflow:
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              1. Create the Template
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Start with our template or build your own. The key sections you can't skip:
            </p>
            <ul className="text-slate-300 leading-relaxed mb-6 space-y-1">
              <li>Feature snapshot</li>
              <li>Automated test suggestions (functional, edge, regression)</li>
              <li>Code quality & lint guidance</li>
              <li>Deployment confidence checklist</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              Don't overthink this. A simple Markdown template is fine.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              2. Make It a Hard Gate
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Add a workflow rule: "No implementation starts until the dev quality plan exists."
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              This could be:
            </p>
            <ul className="text-slate-300 leading-relaxed mb-6 space-y-1">
              <li>A Jira/Linear workflow state (Spec → Quality Plan → Implementation)</li>
              <li>A pull request template check ("Link to dev quality plan")</li>
              <li>A code review requirement (if no plan exists, PR gets blocked)</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              The key: someone is accountable for completing the plan before code starts.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              3. Assign Ownership
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Designate who creates the dev quality plan. Your options:
            </p>
            <ul className="text-slate-300 leading-relaxed mb-6 space-y-1">
              <li><strong className="text-white">Test Engineer</strong> (if you have one)</li>
              <li><strong className="text-white">Dev Quality Assistant</strong> (an AI agent guided by the template)</li>
              <li><strong className="text-white">Tech Lead</strong> (for complex features)</li>
              <li><strong className="text-white">Implementer</strong> (for simple features)</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              We use a mix depending on complexity, but someone's always on the hook.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              4. Use the Plan as a Living Checklist
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              As the engineer implements the feature, they use the plan as their definition of done:
            </p>
            <ul className="text-slate-300 leading-relaxed mb-6 space-y-1">
              <li>Write the test for "Owner can send invite" → Check</li>
              <li>Write the test for "Non-owner gets 403" → Check</li>
              <li>Add PostHog logging → Check</li>
              <li>Verify modal accessibility → Check</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              The plan becomes their roadmap to shipping with confidence.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              5. Update the Plan as You Learn
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Sometimes during implementation, you discover new edge cases or realize a test isn't feasible. That's fine—update the plan.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The goal isn't a perfect plan upfront. It's a <em className="text-cyan-400">living</em> plan that guides quality decisions.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Real-World Results (The Numbers)
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Since implementing the Dev Quality Assistant three months ago, here's what we've seen:
            </p>

            {/* Results Grid */}
            <div className="my-10 grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-slate-700 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">18</div>
                <div className="text-slate-300 text-sm">dev quality plans created</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/20 to-green-900/20 border border-cyan-700/50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">27</div>
                <div className="text-slate-300 text-sm">edge cases caught during planning</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-700/50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
                <div className="text-slate-300 text-sm">features shipped without test coverage</div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Impact on velocity</strong>:
            </p>
            <ul className="text-slate-300 leading-relaxed mb-6 space-y-1">
              <li>Time to create plan: 30-60 minutes per feature</li>
              <li>Time saved debugging: ~8 hours per feature (average)</li>
              <li>Time saved in QA: ~4 hours per feature (fewer manual test cycles)</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Net result</strong>: ~10-12 hours saved per feature, plus higher quality and way fewer 3am "production is down" Slack messages.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Trade-Offs and Limitations (Being Honest)
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              The Dev Quality Assistant isn't free. Here's what it costs:
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Upfront Time Investment</strong>: 30-60 minutes per feature to create the plan. For small features (one-line changes), this can feel like overkill.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Requires Testing Knowledge</strong>: Not everyone knows how to design good tests. Junior engineers might struggle to map acceptance criteria to test cases. You need training or an experienced Test Engineer to guide.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Can Create Rigidity</strong>: If the plan is too detailed, it constrains implementation choices. You need to balance guidance with flexibility.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Doesn't Catch Everything</strong>: The plan only covers what you think to test. Novel bugs or edge cases you didn't anticipate still slip through. You still need exploratory testing and user feedback.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
              When to Skip It
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              We use lighter plans (or skip entirely) for:
            </p>
            <ul className="text-slate-300 leading-relaxed mb-6 space-y-1">
              <li><strong className="text-white">Prototypes / spikes</strong> (not production-ready)</li>
              <li><strong className="text-white">Trivial changes</strong> (copy updates, styling tweaks)</li>
              <li><strong className="text-white">Internal tools</strong> (lower quality bar)</li>
              <li><strong className="text-white">Reversible experiments</strong> (easy to rollback)</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              But anything touching user data, payments, or core workflows gets the full treatment.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What's Next for Us
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              The Dev Quality Assistant has become one of our most valuable practices. It's the reason we ship features with confidence and rarely see "how did this bug make it to production?" post-mortems.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              We're now working on:
            </p>
            <ul className="text-slate-300 leading-relaxed mb-6 space-y-1">
              <li><strong className="text-white">AI-generated plans</strong>: Using Claude to auto-generate test suggestions from PRDs</li>
              <li><strong className="text-white">Test coverage tracking</strong>: Dashboards showing which features have full vs. partial coverage</li>
              <li><strong className="text-white">Quality scores</strong>: Numeric scoring for test completeness, lint compliance, deployment readiness</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Your Turn
            </h2>

            {/* Pull Quote */}
            <div className="my-12 pl-6 border-l-4 border-cyan-500">
              <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
                "Most teams treat testing as an afterthought. We make it a build prerequisite. The difference shows up in production."
              </p>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              If you want to ship higher-quality code faster, I encourage you to implement a Dev Quality Assistant. Start with a simple template, make it a gate before implementation, and use it as a checklist.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The question isn't whether this takes time upfront—it does. The question is whether you'd rather spend 45 minutes planning tests or 10 hours debugging production issues.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              What if every feature had a clear definition of "done" before the first line of code was written? That's the promise of planning quality upfront.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              And honestly? Once you experience shipping with this level of confidence, it's hard to go back to the old way.
            </p>

            {/* Section Divider */}
            <div className="my-16 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              <div className="text-slate-500 text-sm">•••</div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700/50 rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Ship with Confidence?</h3>
            <p className="text-slate-300 mb-6">Get my complete Dev Quality Assistant template and implementation guide. Plus weekly insights on AI-powered development workflows.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <a className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors">
                  Get the Template
                </a>
              </Link>
              <Link href="/newsletter">
                <a className="inline-block border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                  Subscribe to Updates
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