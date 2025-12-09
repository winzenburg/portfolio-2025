
import React from 'react';
import { Calendar, Clock, Tag } from 'lucide-react';

export default function SecurityBugGateArticle() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>December 2, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>8 min read</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            <span>AI Workflow</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          The Security & Bug Gate: Two-Tier Code Review for AI
        </h1>
        
        <p className="text-xl text-gray-600 leading-relaxed">
          AI can ship features fast, but it can also ship vulnerabilities. Here's the quality firewall 
          I built after almost leaking customer data in production.
        </p>
      </header>

      {/* Hero Image Placeholder */}
      <div className="w-full h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-12 flex items-center justify-center">
        <span className="text-white text-lg font-medium">Security Gate Illustration</span>
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        
        <h2>Picture this: 3 AM, Slack is on fire, and my "perfectly safe" AI code just exposed customer data.</h2>

        <p>
          OK, that didn't actually happen. But it almost did.
        </p>

        <p>
          Three months ago, I was feeling pretty good about our AI workflow. Claude was generating clean Supabase RLS policies, 
          our features were shipping fast, and everything looked perfect in development. We pushed a new user management feature 
          to staging and called it a day.
        </p>

        <p>
          Two days later, during what was supposed to be a routine security audit, we discovered something that made my 
          stomach drop: our AI-generated RLS policy had a subtle but critical flaw. Users could read data from <em>any</em> 
          organization they'd ever been a member of—including ones they'd been removed from.
        </p>

        <p>
          The policy checked <code>organization_members</code> but didn't verify the membership was still active. One missing 
          <code>AND status = 'active'</code> clause away from a major data leak.
        </p>

        <div className="bg-red-50 border-l-4 border-red-400 p-4 my-8">
          <p className="text-red-700 font-medium mb-2">[PULL QUOTE]</p>
          <p className="text-red-700">
            "AI is optimized for helpfulness and plausibility, not correctness or security. It'll generate code that 
            seems right, compiles, and passes surface-level tests—but fails confidently in ways that are hard to spot."
          </p>
        </div>

        <p>
          Here's the thing: this wasn't a fluke. I've made every AI code generation mistake in the book. I've shipped authentication 
          checks that looked perfect but had holes. I've written database queries that worked great for happy paths but leaked 
          data on edge cases. I've skipped input validation because "it's just a quick script" (narrator: it wasn't).
        </p>

        <p>
          That near-miss forced me to completely rethink how we handle AI-generated code. The result? The Security & Bug Gate: 
          a two-tier code review system that treats all AI-generated code as unsafe until proven otherwise.
        </p>

        <p>
          Spoiler alert: it's saved us from at least a dozen production incidents since then. Here's exactly how it works.
        </p>

        <h2>The Core Insight: Default to Distrust</h2>

        <p>
          The mental shift we had to make was simple but profound:
        </p>

        <p>
          <strong>Old mindset</strong>: "This AI code looks good, let's ship it."<br />
          <strong>New mindset</strong>: "This AI code is unsafe until it passes the security checklist."
        </p>

        <p>
          I learned this the hard way, but you don't have to. AI tools like Claude, ChatGPT, Copilot, and Cursor are 
          incredible productivity multipliers—but they're also confidently wrong in ways that'll keep you up at 3 AM 
          debugging production issues.
        </p>

        <p>
          They don't reason about the stuff that actually breaks systems:
        </p>

        <ul>
          <li><strong>Multi-tenant data isolation</strong>: Can user A see user B's data?</li>
          <li><strong>Authorization edge cases</strong>: What if a user is invited to an org but hasn't accepted yet?</li>
          <li><strong>Input validation gaps</strong>: What if someone sends a 10MB string or malformed JSON?</li>
          <li><strong>Race conditions</strong>: What if two requests modify the same record simultaneously?</li>
          <li><strong>Secrets management</strong>: Did that API key get hardcoded somewhere?</li>
        </ul>

        <p>
          These aren't AI limitations—humans miss them too. But AI fails <em>confidently</em>, without the "wait, does this 
          feel right?" gut check that experienced developers have developed over years of being burned by production incidents.
        </p>

        <p>
          So we systematized the gut check.
        </p>

        <h2>Tier 1: The Everyday Prompt (5-Minute Safety Net)</h2>

        <p>
          For rapid iteration during development, I built a lightweight 5-minute review checklist that runs <em>before</em> 
          code gets committed to a feature branch. This isn't about perfection—it's about catching the obvious stuff that'll 
          bite you later.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Quick Security & Logic Check Template</h3>
          <div className="text-blue-700 space-y-4 font-mono text-sm">
            <div>
              <strong>Feature</strong>: [Brief description]<br />
              <strong>Files changed</strong>: [List]
            </div>
            
            <div>
              <strong>1. Auth & Permissions</strong><br />
              - ✅ Verified: User identity (auth.uid or session)<br />
              - ✅ Verified: Organization membership (if multi-tenant)<br />
              - ✅ Verified: Role-based access (if applicable)
            </div>
            
            <div>
              <strong>2. Data Scoping & RLS</strong><br />
              - ✅ All queries scoped by organization_id<br />
              - ✅ RLS enabled on relevant tables
            </div>
            
            <div>
              <strong>3. Input Validation</strong><br />
              - ✅ Required fields validated<br />
              - ✅ Type checking and size limits
            </div>
            
            <div>
              <strong>4. Error Handling & Secrets</strong><br />
              - ✅ Try/catch blocks where needed<br />
              - ✅ No secrets in code
            </div>
            
            <div>
              <strong>Verdict</strong>: ✅ Safe to commit | ⚠️ Fix issues first
            </div>
          </div>
        </div>

        <p>
          Last week, this simple checklist caught a classic AI mistake. Claude generated this seemingly innocent API route:
        </p>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg my-6 font-mono text-sm">
          <div className="text-red-400 mb-2">// AI-generated code (BEFORE review)</div>
          <div>export async function POST(request: Request) &#123;</div>
          <div>  const &#123; projectId, name &#125; = await request.json();</div>
          <div></div>
          <div>  const newTask = await db.insert(tasks).values(&#123;</div>
          <div>    project_id: projectId,</div>
          <div>    name: name,</div>
          <div>  &#125;);</div>
          <div></div>
          <div>  return Response.json(newTask);</div>
          <div>&#125;</div>
        </div>

        <p>
          Looks fine, right? The everyday prompt caught three critical issues:
        </p>

        <ol>
          <li>❌ <strong>Auth & Permissions</strong>: No verification of user identity. Anyone can create tasks for any project.</li>
          <li>❌ <strong>Data Scoping</strong>: No check that the project belongs to the user's organization.</li>
          <li>❌ <strong>Input Validation</strong>: No validation of name length or required fields.</li>
        </ol>

        <p>
          <strong>Time to spot and fix</strong>: 8 minutes. <strong>Potential data leak prevented</strong>: Priceless.
        </p>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg my-6 font-mono text-sm">
          <div className="text-green-400 mb-2">// After Security & Bug Gate review</div>
          <div>export async function POST(request: Request) &#123;</div>
          <div>  const session = await getServerSession();</div>
          <div>  if (!session?.user) &#123;</div>
          <div>    return Response.json(&#123; error: 'Unauthorized' &#125;, &#123; status: 401 &#125;);</div>
          <div>  &#125;</div>
          <div></div>
          <div>  const body = await request.json();</div>
          <div>  </div>
          <div>  // Input validation</div>
          <div>  if (!body.projectId || typeof body.name !== 'string' || body.name.length &gt; 500) &#123;</div>
          <div>    return Response.json(&#123; error: 'Invalid input' &#125;, &#123; status: 400 &#125;);</div>
          <div>  &#125;</div>
          <div></div>
          <div>  // Verify project belongs to user's org</div>
          <div>  const project = await db.query.projects.findFirst(&#123;</div>
          <div>    where: and(</div>
          <div>      eq(projects.id, body.projectId),</div>
          <div>      eq(projects.organization_id, session.user.organizationId)</div>
          <div>    )</div>
          <div>  &#125;);</div>
          <div></div>
          <div>  if (!project) &#123;</div>
          <div>    return Response.json(&#123; error: 'Project not found' &#125;, &#123; status: 404 &#125;);</div>
          <div>  &#125;</div>
          <div></div>
          <div>  const newTask = await db.insert(tasks).values(&#123;</div>
          <div>    project_id: body.projectId,</div>
          <div>    name: body.name.trim(),</div>
          <div>    created_by: session.user.id,</div>
          <div>    organization_id: project.organization_id,</div>
          <div>  &#125;);</div>
          <div>  </div>
          <div>  return Response.json(newTask);</div>
          <div>&#125;</div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-8">
          <p className="text-yellow-800">
            <strong>Pro tip</strong>: I now give Claude the everyday prompt and ask it to self-review before outputting code. 
            It catches about 70% of issues on the first pass. The remaining 30%? That's why humans still matter.
          </p>
        </div>

        <h2>Tier 2: The Pre-Production Gate (The Full Audit)</h2>

        <p>
          Before any feature ships to production, it goes through a comprehensive 30-60 minute security and logic audit. 
          This is where we catch the subtle stuff—the race conditions, the edge cases, the "wait, what if..." scenarios 
          that keep experienced developers awake at night.
        </p>

        <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
          <div className="text-sm font-medium text-green-800 mb-4">[STATS CARD]</div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-2xl font-bold text-green-700">31</div>
              <div className="text-sm text-green-600">Critical issues caught in 3 months</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-700">0</div>
              <div className="text-sm text-green-600">Security incidents in production</div>
            </div>
          </div>
        </div>

        <p>
          The full checklist has 8 sections:
        </p>

        <ol>
          <li><strong>High-Level Change Understanding</strong> - What does this code actually do?</li>
          <li><strong>Auth & Authorization</strong> - Can users access stuff they shouldn't?</li>
          <li><strong>Supabase & RLS / Data Tenancy</strong> - Is customer data properly isolated?</li>
          <li><strong>Input Validation & API Surface</strong> - Can someone break this with malformed input?</li>
          <li><strong>Logic Bugs, Edge Cases, and Reliability</strong> - What could go wrong at scale?</li>
          <li><strong>Secrets, Config, and Env</strong> - Any hardcoded credentials hiding in here?</li>
          <li><strong>Tests & Future Regression Protection</strong> - How do we prevent this from breaking again?</li>
          <li><strong>Risk Score & Deploy Verdict</strong> - Ship it, fix it, or kill it with fire?</li>
        </ol>

        <h3>Real Example: The Billing Integration That Almost Burned Us</h3>

        <p>
          Last month, we added Stripe subscription management. The AI-generated code looked clean, handled webhooks properly, 
          and passed all our basic tests. But the pre-production gate caught some nasty issues:
        </p>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-8">
          <h4 className="font-semibold text-red-800 mb-2">Issues Found:</h4>
          <ul className="text-red-700 space-y-2 text-sm">
            <li>⚠️ Cancel subscription endpoint didn't verify user is org owner (any member could cancel)</li>
            <li>⚠️ RLS policy allowed any org member to read subscription data (should be owner/admin only)</li>
            <li>⚠️ Race condition if two subscription events arrived simultaneously (no locking)</li>
            <li>⚠️ No handling for Stripe event duplicates (could lead to double-charges)</li>
          </ul>
        </div>

        <p>
          <strong>Risk Score</strong>: 7/10 (High)<br />
          <strong>Verdict</strong>: DO NOT SHIP<br />
          <strong>Time to review</strong>: 45 minutes. Multiple critical bugs caught before production.
        </p>

        <p>
          The authorization gap alone could have let any team member cancel their organization's subscription. The RLS leak 
          would have exposed sensitive billing information to users who shouldn't see it. These aren't theoretical issues—they're 
          the kind of bugs that end up on the front page of Hacker News for all the wrong reasons.
        </p>

        <h2>How to Implement This (Without Slowing Your Team to a Crawl)</h2>

        <p>
          Here's the thing—I've tried rigid security processes before. They either get ignored or they become such a bottleneck 
          that nothing ships. The key is making the gate fast and practical, not perfect.
        </p>

        <h3>1. Start with Templates, Not Bureaucracy</h3>

        <p>
          I keep both checklists in <code>docs/templates/</code> as copy-pasteable markdown. No fancy tools, no approval workflows, 
          just simple checklists that anyone can run. The everyday prompt takes 5 minutes. The full audit takes 30-60 minutes 
          but only runs before releases.
        </p>

        <h3>2. Make It Mandatory (But Smart About When)</h3>

        <p>
          Not every code change needs the full audit. Here's how I calibrate:
        </p>

        <ul>
          <li><strong>Everyday prompt</strong>: Required before committing to feature branches</li>
          <li><strong>Pre-production gate</strong>: Required before merging to main or releasing</li>
          <li><strong>Skip for low-risk</strong>: Copy updates, styling tweaks, internal tools</li>
        </ul>

        <h3>3. Track What You Catch (The Data Will Surprise You)</h3>

        <p>
          In the past 3 months, our gates caught:
        </p>

        <div className="grid grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800">Everyday Prompt</h4>
            <ul className="text-blue-700 text-sm mt-2 space-y-1">
              <li>12 missing auth checks</li>
              <li>8 input validation gaps</li>
              <li>2 hardcoded API keys</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800">Pre-Production Gate</h4>
            <ul className="text-purple-700 text-sm mt-2 space-y-1">
              <li>5 RLS policy leaks</li>
              <li>3 race conditions</li>
              <li>1 critical billing logic bug</li>
            </ul>
          </div>
        </div>

        <p>
          Plot twist: the everyday prompt catches way more issues than the full audit. That surprised me initially, but it 
          makes sense—most AI-generated code fails on the basics. Once you fix those, the complex stuff is usually solid.
        </p>

        <h3>4. Automate What You Can</h3>

        <p>
          Some checks don't need human judgment:
        </p>

        <ul>
          <li><strong>Secrets scanning</strong>: <code>gitleaks</code> or <code>truffleHog</code> catch hardcoded credentials</li>
          <li><strong>Linting</strong>: ESLint rules for missing error handling, unused promises</li>
          <li><strong>Type checking</strong>: Strict TypeScript mode catches many input validation gaps</li>
          <li><strong>RLS verification</strong>: Write tests that attempt cross-org data access</li>
        </ul>

        <p>
          Automation handles the easy stuff, leaving humans to focus on the subtle logic issues that actually require experience and judgment.
        </p>

        <h2>The Trade-Offs (Because Nothing Is Free)</h2>

        <p>
          Let me be honest: the Security & Bug Gate isn't all upside. Here's what it costs:
        </p>

        <h3>Time Investment</h3>
        <p>
          Everyday prompt adds 5-10 minutes per feature. Pre-production gate adds 30-60 minutes per release. For a team 
          shipping daily, this adds up. But so do 3 AM production incidents and customer data leaks.
        </p>

        <h3>Requires Security Knowledge</h3>
        <p>
          Running the checklists effectively requires understanding auth patterns, RLS policies, and common attack vectors. 
          Junior developers might miss subtle issues. AI reviewers need well-crafted prompts to be effective.
        </p>

        <h3>Can Create Review Fatigue</h3>
        <p>
          If every tiny change requires a full audit, developers get annoyed and start cutting corners. The key is calibration: 
          light reviews for most changes, full gate for high-risk releases.
        </p>

        <p>
          But here's the thing: in three months, we've had zero security incidents in production. Previously, we were averaging 
          2-3 per quarter. The gate has easily paid for itself just in saved debugging time.
        </p>

        <h2>What's Next?</h2>

        <p>
          The Security & Bug Gate has become one of our most valuable practices. It's the reason I can confidently let AI 
          generate substantial chunks of our codebase without lying awake at night worrying about what I missed.
        </p>

        <p>
          We're now working on:
        </p>

        <ul>
          <li><strong>AI-powered review</strong>: Using Claude to run the pre-production checklist automatically</li>
          <li><strong>Expanded checklist</strong>: Adding sections for performance, accessibility, and observability</li>
          <li><strong>Integration testing</strong>: Automated tests that verify the security properties we care about</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
          <p className="text-blue-700 font-medium">
            [PULL QUOTE] "AI can ship features fast, but it can also ship vulnerabilities. The Security & Bug Gate 
            is our quality firewall—and the reason I sleep better at night."
          </p>
        </div>

        <p>
          If you're using AI code generation (or just want more rigorous code review), I highly recommend implementing 
          a two-tier system. Start with the everyday prompt for rapid iteration, add the pre-production gate for releases, 
          and track what you catch.
        </p>

        <p>
          Because here's the reality: AI is going to keep getting better at writing code. But it's not getting better 
          at understanding the business context, security implications, and edge cases that make software actually work 
          in production.
        </p>

        <p>
          That's still our job. The Security & Bug Gate just makes us better at it.
        </p>

      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 mt-16 text-white">
        <h2 className="text-2xl font-bold mb-4">Want the Complete Security & Bug Gate Templates?</h2>
        <p className="text-blue-100 mb-6">
          Get both the everyday prompt and pre-production gate checklists, plus examples of common issues 
          to watch for in AI-generated code.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Download the Templates
        </button>
      </div>
    </article>
  );
}
