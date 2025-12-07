---
title: "The Security & Bug Gate: Two-Tier Code Review for AI-Generated Features"
description: "AI can ship features fast, but it can also ship vulnerabilities. Here's our quality firewall."
publishedAt: "2025-12-02T00:00:00.000Z"
category: "Engineering"
tags: "security, code-review, ai, quality-assurance, testing"
---

# The Security & Bug Gate: Two-Tier Code Review for AI-Generated Features

## AI-generated code is unsafe until proven otherwise.

Let me tell you about a close call we had three months ago.

We were using Claude to generate a Supabase RLS policy for a new feature. The feature seemed to work perfectly in development. The AI-generated code was clean, well-commented, and passed our basic tests. We shipped it to staging.

Two days later, during a security audit, we discovered the RLS policy had a subtle flaw: users could read data from *any* organization they'd ever been a member of—including ones they'd been removed from. The policy checked `organization_members` but didn't verify the membership was still active.

One bad `WHERE` clause away from a major data leak.

This wasn't a fluke. AI code generation tools (Claude, ChatGPT, Copilot, Cursor) are incredible productivity multipliers. But they're also confidently wrong in ways that are hard to spot. They'll generate authentication checks that look right but have holes. They'll write database queries that work for the happy path but leak data on edge cases. They'll skip input validation because "it's just a quick script."

That's when we built the Security & Bug Gate: a two-tier code review system that treats all AI-generated code as unsafe until proven otherwise.

In this article, I'll walk you through both tiers—the everyday prompt for rapid iteration and the pre-production gate for release candidates—and show you exactly how to implement them in your own workflow.

## The Core Insight: Default to Distrust

Here's the mental model shift we had to make:

**Old mindset**: "This AI code looks good, let's ship it."

**New mindset**: "This AI code is unsafe until it passes the security checklist."

AI tools are optimized for helpfulness and plausibility, not correctness or security. They'll generate code that *seems* right, that compiles, that passes surface-level tests. But they don't reason about:

- **Multi-tenant data isolation**: Can user A see user B's data?
- **Authorization edge cases**: What if a user is invited to an org but hasn't accepted yet?
- **Input validation gaps**: What if someone sends malformed JSON or a 10MB string?
- **Race conditions**: What if two requests modify the same record simultaneously?
- **Secrets management**: Did the API key get hardcoded or loaded from env?

These aren't AI limitations—humans miss them too. But AI fails *confidently*, without the "wait, does this feel right?" gut check that experienced developers have.

So we systematize the gut check.

## Tier 1: The Everyday Prompt (Development Review)

For rapid iteration during development, we use a lightweight 5-minute review checklist. This runs *before* code gets committed to a feature branch.

### The Prompt Template

Here's the core structure (full template at `docs/templates/SECURITY-DAY-TO-DAY-PROMPT.md`):

```markdown
## Quick Security & Logic Check

**Feature**: [Brief description]
**Files changed**: [List]

### 1. Auth & Permissions
- ✅ Verified: User identity (auth.uid or session)
- ✅ Verified: Organization membership (if multi-tenant)
- ✅ Verified: Role-based access (if applicable)
- ⚠️ Issue: [Describe any problems]

### 2. Data Scoping & RLS
- ✅ All queries scoped by organization_id
- ✅ RLS enabled on relevant tables
- ⚠️ Issue: [Describe any problems]

### 3. Input Validation
- ✅ Required fields validated
- ✅ Type checking (strings, numbers, arrays, etc.)
- ✅ Size limits (e.g., max string length, array length)
- ⚠️ Issue: [Describe any problems]

### 4. Error Handling
- ✅ Try/catch blocks where needed
- ✅ Errors logged (not silenced)
- ⚠️ Issue: [Describe any problems]

### 5. Secrets & Config
- ✅ No secrets in code
- ✅ Service role keys only used server-side
- ⚠️ Issue: [Describe any problems]

**Verdict**: ✅ Safe to commit | ⚠️ Fix issues first
```

### When to Use It

- Before every commit during feature development
- When adding new API routes or Edge Functions
- When modifying database queries or RLS policies
- When integrating third-party services

### What It Catches

The everyday prompt is optimized for **speed and practicality**. It catches:

- Missing auth checks
- Forgotten `organization_id` scoping
- Obvious input validation gaps
- Hardcoded secrets
- Silent error swallowing

It won't catch subtle logic bugs or complex race conditions—that's what Tier 2 is for.

### Example: Catching an Auth Gap

Here's a real example from last week. AI generated this API route:

```typescript
// AI-generated code (BEFORE review)
export async function POST(request: Request) {
  const { projectId, name } = await request.json();
  
  const newTask = await db.insert(tasks).values({
    project_id: projectId,
    name: name,
  });
  
  return Response.json(newTask);
}
```

**Everyday prompt review**:

1. ❌ **Auth & Permissions**: No verification of user identity. Anyone can create tasks for any project.
2. ❌ **Data Scoping**: No check that the project belongs to the user's organization.
3. ❌ **Input Validation**: No validation of `name` length or required fields.

**Verdict**: ⚠️ Fix issues first.

**Fixed version**:

```typescript
// After Security & Bug Gate review
export async function POST(request: Request) {
  const session = await getServerSession();
  if (!session?.user) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  
  // Input validation
  if (!body.projectId || typeof body.name !== 'string' || body.name.length > 500) {
    return Response.json({ error: 'Invalid input' }, { status: 400 });
  }

  // Verify project belongs to user's org
  const project = await db.query.projects.findFirst({
    where: and(
      eq(projects.id, body.projectId),
      eq(projects.organization_id, session.user.organizationId)
    )
  });

  if (!project) {
    return Response.json({ error: 'Project not found' }, { status: 404 });
  }

  const newTask = await db.insert(tasks).values({
    project_id: body.projectId,
    name: body.name.trim(),
    created_by: session.user.id,
    organization_id: project.organization_id,
  });
  
  return Response.json(newTask);
}
```

**Time to review & fix**: ~8 minutes. Data leak prevented.

## Tier 2: The Pre-Production Gate (Release Review)

Before any feature ships to production, it goes through a comprehensive security and logic audit. This is the full checklist—the one that takes 30-60 minutes but catches everything.

### The Full Checklist

The pre-production gate (`docs/templates/SECURITY-PRE-PRODUCTION-GATE-PROMPT.md`) has 8 sections:

#### 1. High-Level Change Understanding
- Summarize what the code does and where it fits (frontend, backend, Edge Function, DB)
- Identify high-risk areas (auth, billing, org permissions, data writes, RLS)

#### 2. Auth & Authorization / Permissions
- Missing or weak checks of auth status, user identity, role/permissions, org membership
- Code paths where users can access/modify data for orgs they don't belong to
- Non-admins performing admin actions
- Supabase-specific: Client SDK never handles sensitive operations alone

#### 3. Supabase & RLS / Data Tenancy
- Every query scoped by `organization_id`
- RLS enabled on all tables
- RLS policies use `auth.uid()` and org membership joins correctly
- No bypass policies like `USING (true)` unless non-sensitive

#### 4. Input Validation & API Surface
- Input validation (types, ranges, allowed values)
- Protection against malformed data and abuse
- `organization_id` and `user_id` derived from auth/session, not blindly trusted from client

#### 5. Logic Bugs, Edge Cases, and Reliability
- Null / undefined risks
- Race conditions (async, parallel calls, state updates)
- Error handling (missing try/catch, silent failures, ignored promises)
- Off-by-one, empty arrays, timezones

#### 6. Secrets, Config, and Env
- Secrets not committed
- Loaded from env/config
- Service role keys only server-side
- No secrets in browser runtime

#### 7. Tests & Future Regression Protection
- List specific unit and integration tests to catch the issues found
- Critical user flows for e2e testing

#### 8. Risk Score & Deploy Verdict
- **Risk Score (1-10)**:
  - 1-3: Low risk, minor issues
  - 4-6: Medium risk, must fix key items before production
  - 7-10: High risk, do NOT deploy
- **Verdict**:
  - "SAFE TO SHIP"
  - "SHIP WITH FIXES APPLIED FIRST"
  - "DO NOT SHIP"

### Example: Full Review of a Billing Integration

Here's a condensed example of a pre-production review for a Stripe integration:

**1. High-Level Change**:
- Adds subscription management endpoints
- Handles webhook events from Stripe
- Updates `subscriptions` table and user permissions
- **High-risk areas**: Billing logic, webhook signature verification, org-level permissions

**2. Auth & Authorization**:
- ✅ Webhook signature verified via `stripe.webhooks.constructEvent`
- ✅ User endpoints verify session and org membership
- ⚠️ **Issue**: Cancel subscription endpoint doesn't verify user is org owner

**3. Supabase & RLS**:
- ✅ RLS enabled on `subscriptions` table
- ⚠️ **Issue**: RLS policy allows any org member to read subscription data (should be owner/admin only)

**4. Input Validation**:
- ✅ Webhook payload validated by Stripe library
- ⚠️ **Issue**: User-facing endpoints trust `priceId` from client without verification

**5. Logic Bugs**:
- ⚠️ **Issue**: Race condition if two subscription events arrive simultaneously (no locking)
- ⚠️ **Issue**: No handling for Stripe event duplicates (idempotency)

**6. Secrets**:
- ✅ Stripe keys loaded from env
- ✅ Webhook secret stored securely

**7. Tests**:
- Missing: Unit test for webhook signature failure
- Missing: Integration test for subscription upgrade path
- Missing: E2e test for downgrade and cancellation

**8. Risk Score & Verdict**:
- **Risk Score**: 7/10 (High)
- **Verdict**: DO NOT SHIP
- **Reasoning**:
  - Authorization gap on cancel endpoint = users can cancel other orgs' subscriptions
  - RLS policy leak = members see billing details they shouldn't
  - Race condition + no idempotency = potential double-charges or missed events

**Time to review**: 45 minutes. Multiple critical bugs caught before production.

## Practical Application: How to Implement This

Here's how to add the Security & Bug Gate to your workflow:

### 1. Create the Prompt Templates

Save both templates:
- `SECURITY-DAY-TO-DAY-PROMPT.md` (5-minute checklist)
- `SECURITY-PRE-PRODUCTION-GATE-PROMPT.md` (full audit)

Make them copy-pasteable. We keep ours in `docs/templates/` so they're always available.

### 2. Make Them Mandatory Gates

**Everyday prompt**:
- Required before committing to feature branch
- Add to your pull request template: "Did you run the everyday security checklist?"
- Use a git pre-commit hook to remind developers

**Pre-production gate**:
- Required before merging to `main` or releasing
- Add to your CI/CD pipeline as a manual approval step
- Assign a "security reviewer" role (human or AI-assisted)

### 3. Train Your Team (or AI)

If you're using AI to generate code:
- Give it the everyday prompt and ask it to self-review before outputting code
- Use the pre-production prompt as a final review step

If you have a human team:
- Run a workshop on common security gaps (auth, RLS, input validation)
- Share examples of bugs caught by the gate
- Make it a habit, not a checkbox

### 4. Track What You Catch

Keep a log of issues caught by the gate:
- Missing auth checks
- RLS leaks
- Input validation gaps
- Logic bugs

Review this log monthly to identify patterns. If you keep catching the same issue, add guardrails (linters, type checkers, architecture rules) to prevent it by default.

### 5. Automate What You Can

Some checks can be automated:
- **Secrets scanning**: Use tools like `gitleaks` or `truffleHog`
- **Linting**: ESLint rules for missing error handling, unused promises
- **Type checking**: Strict TypeScript mode catches many input validation gaps
- **RLS verification**: Write tests that attempt cross-org data access

Automation catches the easy stuff, leaving humans (or AI) to focus on the subtle logic issues.

## Real-World Results

Since implementing the Security & Bug Gate, here's what we've caught:

**In the past 3 months**:
- 12 missing auth checks (everyday prompt)
- 5 RLS policy leaks (pre-production gate)
- 8 input validation gaps (everyday prompt)
- 3 race conditions (pre-production gate)
- 2 hardcoded API keys (everyday prompt)
- 1 critical billing logic bug (pre-production gate)

**Estimated value**:
- Zero security incidents in production (previously: 2-3 per quarter)
- ~40 hours saved debugging production issues
- Confidence to move faster with AI code generation

## Trade-Offs and Limitations

The Security & Bug Gate isn't free:

**Time Investment**:
- Everyday prompt: 5-10 minutes per feature
- Pre-production gate: 30-60 minutes per release
- For a team shipping daily, this adds up

**Requires Expertise**:
- Running the checklists effectively requires security and architecture knowledge
- Junior developers might miss subtle issues
- AI reviewers need good prompts to be effective

**Can Slow Velocity**:
- If the gate becomes a bottleneck (one person reviewing everything), shipping slows
- Need to balance thoroughness with speed

**False Negatives**:
- The checklist doesn't catch everything
- Novel attack vectors or complex logic bugs can slip through
- Still need penetration testing and security audits for high-stakes systems

**Can Create Review Fatigue**:
- If every tiny change requires a full audit, developers get annoyed
- Need to calibrate: everyday prompt for most changes, full gate for releases

### When to Skip It

We use lighter reviews for:
- **Internal tools** (no public exposure)
- **Prototype features** (not production-ready yet)
- **Low-risk changes** (copy updates, styling tweaks)

But anything touching auth, billing, or user data goes through the full gate.

## Takeaways

Here's what to remember about the Security & Bug Gate:

1. **Default to Distrust**: Treat AI-generated code as unsafe until it passes a security checklist. AI is optimized for plausibility, not correctness.

2. **Two-Tier Review**: Use a lightweight everyday prompt for rapid iteration and a comprehensive pre-production gate for releases.

3. **Checklist Covers 8 Areas**: Auth, RLS, input validation, logic bugs, secrets, tests, plus a risk score and deploy verdict.

4. **Make It Mandatory**: Add gates to your pull request and CI/CD process. Don't let code ship without review.

5. **Track and Learn**: Log what the gate catches and use patterns to add automated guardrails (linters, type checkers, architecture rules).

6. **Automate the Easy Stuff**: Use secrets scanning, linting, and type checking to catch surface-level issues, leaving humans to focus on subtle logic.

## What's Next?

The Security & Bug Gate has become one of our most valuable practices. It's the reason we can confidently use AI to generate code at scale without constantly shipping vulnerabilities.

We're now working on:
- **AI-powered review**: Using Claude to run the pre-production checklist automatically
- **Expanded checklist**: Adding sections for performance, accessibility, and observability
- **Integration with CI**: Automating parts of the gate in GitHub Actions

**AI can ship features fast, but it can also ship vulnerabilities. The Security & Bug Gate is our quality firewall.**

If you're using AI code generation (or just want more rigorous code review), I encourage you to implement a two-tier review system. Start with the everyday prompt, add the pre-production gate for releases, and track what you catch.

What if every line of code passed a security checklist before shipping? That's the promise of systematic code review.

