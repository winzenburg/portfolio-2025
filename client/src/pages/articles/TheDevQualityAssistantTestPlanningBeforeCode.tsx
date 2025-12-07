import React from 'react';
import Image from 'next/image';

interface ArticleProps {
  children?: React.ReactNode;
}

const Article: React.FC<ArticleProps> = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
          <span>AI Workflow</span>
          <span>•</span>
          <span>7-9 min read</span>
          <span>•</span>
          <span>December 2, 2024</span>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          The Dev Quality Assistant: Test Planning Before Code Touches the Repo
        </h1>
        
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          Most teams treat testing as an afterthought. I learned the hard way why that's expensive. Here's how we made it a build prerequisite instead.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-1">
          <Image
            src="/api/placeholder/800/400"
            alt="Developer planning tests before coding"
            width={800}
            height={400}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        
        <p>Last month, I watched our team ship a feature in 3 days that would've normally taken 3 weeks. Same quality, same thoroughness, but zero of the usual "oh crap, we broke production" moments.</p>

        <p>The difference? We planned our tests before we wrote a single line of code.</p>

        <p>I know, I know. Planning tests first sounds about as exciting as flossing. But here's the thing—it's the difference between shipping with confidence and shipping with anxiety.</p>

        <p>Let me tell you about the cycle I've lived through dozens of times (and you probably have too):</p>

        <ol>
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

        <p>Sound familiar? The result is fragile code, manual testing bottlenecks, and that constant low-level anxiety that something's going to break.</p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
          <p className="text-blue-800 font-medium mb-2">[PULL QUOTE]</p>
          <p className="text-blue-800 text-lg italic">"We flipped this. In our product creation pipeline, the dev quality plan is a mandatory gate between product spec and implementation. No code gets written until we've mapped out what 'correct' looks like."</p>
        </div>

        <p>This isn't about perfectionism or slowing teams down. It's about <strong>defining correctness before building</strong>, the same way you wouldn't start construction without blueprints.</p>

        <p>Here's what I'll show you: exactly how we use the Dev Quality Assistant to pre-plan tests, why it's become non-negotiable in our build process, and how you can steal our approach for your own workflow.</p>

        <h2>The Problem: Test-After-Build (And Why It's Expensive)</h2>

        <p>Let me paint you a picture of how this usually goes wrong.</p>

        <h3>The Typical Pattern (You've Been Here)</h3>

        <p>Product writes a PRD: "Users should be able to archive projects." Seems simple enough, right?</p>

        <p>Engineering implements it. Archive endpoint? Check. UI updates? Check. Manual testing shows it works. Ship it!</p>

        <p>Then the bug reports start rolling in: "I archived a project and lost all my tasks."</p>

        <p>Oops. Nobody thought about cascading deletes. Cue the post-mortem, the emergency fix, and the promise to "write tests next time."</p>

        <p>Plot twist: Next time never comes because there's always a new feature to ship.</p>

        <h3>Why This Pattern Fails Every Single Time</h3>

        <p><strong>No Tests == No Definition of "Done"</strong>: Without tests, "done" means "it worked when I tried it once." You're essentially shipping undefined behavior and hoping for the best.</p>

        <p><strong>Edge Cases Are Afterthoughts</strong>: Humans are notoriously bad at remembering edge cases when we're in the flow of building. "What if the project has 1,000 tasks?" "What if the user is a viewer, not an owner?" These questions only surface after the bugs do.</p>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <p className="text-red-800 font-medium mb-2">[STATS CARD]</p>
          <div className="text-red-800">
            <p className="text-2xl font-bold">27</p>
            <p className="text-sm">Edge cases we caught during planning phase in the last 3 months</p>
            <p className="text-xs mt-2">vs. catching them in production (expensive and embarrassing)</p>
          </div>
        </div>

        <p><strong>Tests Become Debt</strong>: If tests are optional, they never get written. There's always a new feature, a new deadline, a new fire to put out. Testing becomes "we should really do this someday" debt that compounds faster than credit card interest.</p>

        <p><strong>Manual Testing Doesn't Scale</strong>: Every new feature adds to the manual test matrix. Eventually, QA becomes a bottleneck and teams start cutting corners. I've been there—it's not pretty.</p>

        <h2>The Solution: Dev Quality Plan as a Pre-Code Gate</h2>

        <p>Here's what we changed: We treat the dev quality plan the same way we treat the PRD—<strong>it's a mandatory deliverable before implementation starts</strong>.</p>

        <p>Our pipeline now looks like this:</p>

        <ol>
          <li><strong>Product Spec (PRD/ADR)</strong> → What we're building and why</li>
          <li><strong>Dev Quality Plan</strong> ← NEW GATE (what tests, quality checks, deploy steps)</li>
          <li><strong>Implementation</strong> → Write code guided by the test plan</li>
          <li><strong>Quality Checks</strong> → Run lint, tests, deploy checklist</li>
          <li><strong>Ship</strong> (with actual confidence this time)</li>
        </ol>

        <p>The dev quality plan sits between spec and code. It's the bridge that translates "what we're building" into "how we know it's correct."</p>

        <h3>What Goes in the Plan (The Four Required Sections)</h3>

        <p>Our dev quality plan (we call it Rule 125, template at <code>docs/templates/DEV-QUALITY-TEMPLATE.md</code>) has four sections that we never skip:</p>

        <h4>1. Feature Snapshot</h4>
        
        <p>This grounds everything in context:</p>
        <ul>
          <li>Brief description (one paragraph—no novels)</li>
          <li>Affected surfaces (API, UI, database, third-party integrations)</li>
          <li>Owners (which engineers, which agents, who's responsible for what)</li>
        </ul>

        <h4>2. Automated Test Suggestions (The Meat and Potatoes)</h4>

        <p>This is where the magic happens. We map out three tiers of tests:</p>

        <p><strong>Functional Tests (The Happy Path)</strong>:</p>
        <ul>
          <li>What acceptance criteria from the PRD need test coverage?</li>
          <li>For each criterion, what's the specific test scenario?</li>
          <li>What tooling makes sense (unit, integration, e2e)?</li>
          <li>Where exactly should we implement this (file path, test suite)?</li>
        </ul>

        <p><strong>Edge Case Tests (The Unhappy Path)</strong>:</p>
        <ul>
          <li>Error handling (invalid input, missing data, timeouts)</li>
          <li>Boundary values (empty arrays, max string length, negative numbers)</li>
          <li>Permissions (user not authenticated, wrong role, cross-org access)</li>
          <li>Localization fun (timezones, date formats, currencies)</li>
        </ul>

        <p><strong>Regression / Non-Functional Tests</strong>:</p>
        <ul>
          <li>Performance (load time, query efficiency)</li>
          <li>Accessibility (keyboard nav, screen reader, WCAG compliance)</li>
          <li>Contract tests (API shape, backward compatibility)</li>
        </ul>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h5 className="font-semibold mb-3">Real Example: "Archive Project" Feature</h5>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Test</th>
                  <th className="text-left py-2">Purpose</th>
                  <th className="text-left py-2">Type</th>
                  <th className="text-left py-2">Where</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b">
                  <td className="py-2">Archive sets `archived_at` timestamp</td>
                  <td className="py-2">Verify archive behavior</td>
                  <td className="py-2">Unit</td>
                  <td className="py-2">`projects.test.ts`</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Archived projects don't appear in default list</td>
                  <td className="py-2">Verify UI filtering</td>
                  <td className="py-2">Integration</td>
                  <td className="py-2">`project-list.test.tsx`</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Archiving requires owner/admin role</td>
                  <td className="py-2">Verify permissions</td>
                  <td className="py-2">Integration</td>
                  <td className="py-2">`api/archive.test.ts`</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">User can unarchive and restore project</td>
                  <td className="py-2">Verify reversibility</td>
                  <td className="py-2">E2E</td>
                  <td className="py-2">`e2e/archive.spec.ts`</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h4>3. Code Quality & Lint Guidance</h4>

        <p>This covers the non-testing quality stuff for the specific feature:</p>
        
        <ul>
          <li><strong>State management</strong>: How should state be handled? (Context, Zustand, server state)</li>
          <li><strong>Data fetching</strong>: Use tRPC, React Query, or plain fetch?</li>
          <li><strong>Security</strong>: What auth checks are required?</li>
          <li><strong>Accessibility</strong>: Any ARIA labels, keyboard shortcuts, focus management?</li>
          <li><strong>Error handling</strong>: How should errors be displayed? Logged?</li>
        </ul>

        <p>Plus references to existing lint rules (ESLint configs, Prettier, TypeScript strict mode, custom rules).</p>

        <h4>4. Deployment Confidence Checklist</h4>

        <p>Step-by-step pre-push and post-deploy checks that make "done" unambiguous:</p>

        <p><strong>Pre-Push</strong>:</p>
        <ul>
          <li>All tests pass (<code>npm test</code>)</li>
          <li>No TypeScript errors (<code>npm run type-check</code>)</li>
          <li>Linting passes (<code>npm run lint</code>)</li>
          <li>Feature flag created (if applicable)</li>
          <li>Database migrations run successfully</li>
          <li>Docs updated (API docs, user guide)</li>
        </ul>

        <p><strong>Post-Deploy</strong>:</p>
        <ul>
          <li>Smoke test in production (archive a test project)</li>
          <li>Check error logs (Sentry, CloudWatch)</li>
          <li>Monitor key metrics (archive event count, API latency)</li>
          <li>Watch for support tickets (the ultimate quality metric)</li>
        </ul>

        <p><strong>Rollback Plan</strong>:</p>
        <ul>
          <li>Toggle feature flag off (if flagged)</li>
          <li>Revert database migration (if needed)</li>
          <li>Communicate to users (status page, email)</li>
        </ul>

        <h2>The Enforcement Mechanism (Making It Actually Happen)</h2>

        <p>Here's the critical part: <strong>the dev quality plan is a hard blocker</strong>.</p>

        <p>In <code>000-orchestration.mdc</code> (our central foreman), we added:</p>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg my-6 text-sm font-mono">
          <pre>{`MANDATORY BUILD OUTPUTS:
- Before implementation: DEV-QUALITY-<feature-slug>.md must exist
- Before merging: All tests from the plan must pass
- Before deploying: Deployment checklist must be completed`}</pre>
        </div>

        <p>If the Dev Quality Assistant hasn't completed the plan, the Implementer can't start coding. Period. It's a hard gate, not a suggestion.</p>

        <p>And honestly? This was the key. Without enforcement, it's just another best practice that gets ignored when deadlines loom.</p>

        <h2>Real-World Example: Building a Multi-Tenant Invite System</h2>

        <p>Let me walk you through a real dev quality plan we created last month. This should make it concrete.</p>

        <p><strong>Context</strong>: We needed to add the ability for organization owners to invite new members via email. Sounds simple, right? (Famous last words...)</p>

        <h3>Step 1: Feature Snapshot</h3>

        <div className="bg-gray-50 border-l-4 border-blue-400 p-6 my-6">
          <h5 className="font-semibold mb-2">Feature Snapshot</h5>
          <p><strong>Description</strong>: Organization owners and admins can invite new members via email. Invites are sent via Resend, stored in `org_invites` table, and can be accepted via magic link.</p>
          
          <p><strong>Affected surfaces</strong>:</p>
          <ul className="text-sm">
            <li>New API route: `POST /api/orgs/{id}/invites`</li>
            <li>New database table: `org_invites`</li>
            <li>New email template: `invite-email.tsx`</li>
            <li>UI: New "Invite Member" modal in org settings</li>
          </ul>

          <p><strong>Owners</strong>: @engineeringArchitect, @implementer, @testEngineer</p>
        </div>

        <h3>Step 2: Automated Test Suggestions</h3>

        <p><strong>Functional Tests</strong>:</p>
        <ol>
          <li><strong>Owner can send invite</strong> → Integration → <code>api/invites.test.ts</code></li>
          <li><strong>Invite email is sent via Resend</strong> → Integration → <code>api/invites.test.ts</code> (mock Resend)</li>
          <li><strong>Invite token is valid for 7 days</strong> → Unit → <code>invites.test.ts</code></li>
          <li><strong>Accepting invite adds user to org</strong> → E2E → <code>e2e/invites.spec.ts</code></li>
          <li><strong>User sees new org in org switcher</strong> → E2E → <code>e2e/invites.spec.ts</code></li>
        </ol>

        <p><strong>Edge Case Tests</strong> (this is where we catch the expensive bugs):</p>
        <ol>
          <li><strong>Non-owner cannot send invite</strong> → Returns 403 → Integration → <code>api/invites.test.ts</code></li>
          <li><strong>Inviting existing member returns error</strong> → Integration → <code>api/invites.test.ts</code></li>
          <li><strong>Expired invite token returns error</strong> → Unit → <code>invites.test.ts</code></li>
          <li><strong>Malformed email returns 400</strong> → Integration → <code>api/invites.test.ts</code></li>
          <li><strong>User already in 5 orgs (limit) cannot accept</strong> → E2E → <code>e2e/invites.spec.ts</code></li>
          <li><strong>Invite to non-existent org returns 404</strong> → Integration → <code>api/invites.test.ts</code></li>
        </ol>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <p className="text-yellow-800 font-medium mb-2">[COMPARISON]</p>
          <p className="text-yellow-800"><strong>Without planning</strong>: These 6 edge cases would've been production bugs discovered by users.</p>
          <p className="text-yellow-800"><strong>With planning</strong>: Caught during implementation, fixed before shipping.</p>
        </div>

        <h3>The Result</h3>

        <p>Total time to create the dev quality plan: <strong>45 minutes</strong>.</p>

        <p>Time saved during implementation:</p>
        <ul>
          <li>Engineer knew exactly what tests to write (no guessing games)</li>
          <li>Caught 3 edge cases during coding that would've been production bugs</li>
          <li>Deployment was confident (all checklists passed)</li>
          <li>Zero bugs reported in the first two weeks</li>
        </ul>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <p className="text-green-800 font-medium mb-2">[STATS CARD]</p>
          <div className="text-green-800">
            <p className="text-2xl font-bold">~10 hours</p>
            <p className="text-sm">Time saved per feature on average</p>
            <p className="text-xs mt-2">45 minutes of planning saves 10+ hours of debugging and rework</p>
          </div>
        </div>

        <p><strong>ROI: 45 minutes of planning saved ~10 hours of debugging and rework.</strong></p>

        <p>Those are the kind of numbers that make you a believer.</p>

        <h2>How to Implement This (Without Overthinking It)</h2>

        <p>Here's your practical roadmap for adding the Dev Quality Assistant to your workflow:</p>

        <h3>1. Create the Template</h3>

        <p>Start with our template or build your own. The key sections you can't skip:</p>
        <ul>
          <li>Feature snapshot</li>
          <li>Automated test suggestions (functional, edge, regression)</li>
          <li>Code quality & lint guidance</li>
          <li>Deployment confidence checklist</li>
        </ul>

        <p>Don't overthink this. A simple Markdown template is fine.</p>

        <h3>2. Make It a Hard Gate</h3>

        <p>Add a workflow rule: "No implementation starts until the dev quality plan exists."</p>

        <p>This could be:</p>
        <ul>
          <li>A Jira/Linear workflow state (Spec → Quality Plan → Implementation)</li>
          <li>A pull request template check ("Link to dev quality plan")</li>
          <li>A code review requirement (if no plan exists, PR gets blocked)</li>
        </ul>

        <p>The key: someone is accountable for completing the plan before code starts.</p>

        <h3>3. Assign Ownership</h3>

        <p>Designate who creates the dev quality plan. Your options:</p>
        <ul>
          <li><strong>Test Engineer</strong> (if you have one)</li>
          <li><strong>Dev Quality Assistant</strong> (an AI agent guided by the template)</li>
          <li><strong>Tech Lead</strong> (for complex features)</li>
          <li><strong>Implementer</strong> (for simple features)</li>
        </ul>

        <p>We use a mix depending on complexity, but someone's always on the hook.</p>

        <h3>4. Use the Plan as a Living Checklist</h3>

        <p>As the engineer implements the feature, they use the plan as their definition of done:</p>
        <ul>
          <li>Write the test for "Owner can send invite" → Check</li>
          <li>Write the test for "Non-owner gets 403" → Check</li>
          <li>Add PostHog logging → Check</li>
          <li>Verify modal accessibility → Check</li>
        </ul>

        <p>The plan becomes their roadmap to shipping with confidence.</p>

        <h3>5. Update the Plan as You Learn</h3>

        <p>Sometimes during implementation, you discover new edge cases or realize a test isn't feasible. That's fine—update the plan.</p>

        <p>The goal isn't a perfect plan upfront. It's a <em>living</em> plan that guides quality decisions.</p>

        <h2>Real-World Results (The Numbers)</h2>

        <p>Since implementing the Dev Quality Assistant three months ago, here's what we've seen:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-blue-800 text-2xl font-bold">18</p>
            <p className="text-blue-800 text-sm">dev quality plans created</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="text-green-800 text-2xl font-bold">27</p>
            <p className="text-green-800 text-sm">edge cases caught during planning</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <p className="text-purple-800 text-2xl font-bold">0</p>
            <p className="text-purple-800 text-sm">features shipped without test coverage</p>
          </div>
        </div>

        <p><strong>Impact on velocity</strong>:</p>
        <ul>
          <li>Time to create plan: 30-60 minutes per feature</li>
          <li>Time saved debugging: ~8 hours per feature (average)</li>
          <li>Time saved in QA: ~4 hours per feature (fewer manual test cycles)</li>
        </ul>

        <p><strong>Net result</strong>: ~10-12 hours saved per feature, plus higher quality and way fewer 3am "production is down" Slack messages.</p>

        <h2>Trade-Offs and Limitations (Being Honest)</h2>

        <p>The Dev Quality Assistant isn't free. Here's what it costs:</p>

        <p><strong>Upfront Time Investment</strong>: 30-60 minutes per feature to create the plan. For small features (one-line changes), this can feel like overkill.</p>

        <p><strong>Requires Testing Knowledge</strong>: Not everyone knows how to design good tests. Junior engineers might struggle to map acceptance criteria to test cases. You need training or an experienced Test Engineer to guide.</p>

        <p><strong>Can Create Rigidity</strong>: If the plan is too detailed, it constrains implementation choices. You need to balance guidance with flexibility.</p>

        <p><strong>Doesn't Catch Everything</strong>: The plan only covers what you think to test. Novel bugs or edge cases you didn't anticipate still slip through. You still need exploratory testing and user feedback.</p>

        <h3>When to Skip It</h3>

        <p>We use lighter plans (or skip entirely) for:</p>
        <ul>
          <li><strong>Prototypes / spikes</strong> (not production-ready)</li>
          <li><strong>Trivial changes</strong> (copy updates, styling tweaks)</li>
          <li><strong>Internal tools</strong> (lower quality bar)</li>
          <li><strong>Reversible experiments</strong> (easy to rollback)</li>
        </ul>

        <p>But anything touching user data, payments, or core workflows gets the full treatment.</p>

        <h2>What's Next for Us</h2>

        <p>The Dev Quality Assistant has become one of our most valuable practices. It's the reason we ship features with confidence and rarely see "how did this bug make it to production?" post-mortems.</p>

        <p>We're now working on:</p>
        <ul>
          <li><strong>AI-generated plans</strong>: Using Claude to auto-generate test suggestions from PRDs</li>
          <li><strong>Test coverage tracking</strong>: Dashboards showing which features have full vs. partial coverage</li>
          <li><strong>Quality scores</strong>: Numeric scoring for test completeness, lint compliance, deployment readiness</li>
        </ul>

        <h2>Your Turn</h2>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
          <p className="text-blue-800 font-medium mb-2">[PULL QUOTE]</p>
          <p className="text-blue-800 text-lg italic">"Most teams treat testing as an afterthought. We make it a build prerequisite. The difference shows up in production."</p>
        </div>

        <p>If you want to ship higher-quality code faster, I encourage you to implement a Dev Quality Assistant. Start with a simple template, make it a gate before implementation, and use it as a checklist.</p>

        <p>The question isn't whether this takes time upfront—it does. The question is whether you'd rather spend 45 minutes planning tests or 10 hours debugging production issues.</p>

        <p>What if every feature had a clear definition of "done" before the first line of code was written? That's the promise of planning quality upfront.</p>

        <p>And honestly? Once you experience shipping with this level of confidence, it's hard to go back to the old way.</p>

      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Ready to Ship with Confidence?
        </h3>
        <p className="text-gray-700 mb-6">
          Get my complete Dev Quality Assistant template and implementation guide. 
          Plus weekly insights on AI-powered development workflows.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Get the Template
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Subscribe to Updates
          </button>
        </div>
      </div>
    </article>
  );
};

export default Article;
