---
title: "The Dev Quality Assistant: Test Planning Before Code Touches the Repo"
description: "Most teams treat testing as an afterthought. We make it a build prerequisite."
publishedAt: "2025-12-02T00:00:00.000Z"
category: "Engineering"
tags: "testing, quality-assurance, development, process"
---

# The Dev Quality Assistant: Test Planning Before Code Touches the Repo

## Most teams treat testing as an afterthought. We make it a build prerequisite.

Here's the cycle I've lived through dozens of times:

1. Product creates a PRD for a new feature
2. Engineering starts building immediately
3. Feature gets shipped to staging
4. QA finds 5 critical bugs
5. Engineering scrambles to fix them
6. More bugs surface in production
7. Team realizes there are no tests covering the edge cases
8. Someone says "we should write tests"
9. Tests never get written because there's always a new feature to ship

The result? Fragile code, manual testing bottlenecks, and a constant fear of breaking things.

We flipped this. In our product creation pipeline, **the dev quality plan is a mandatory gate between product spec and implementation**. No code gets written until we've mapped out:

- What automated tests should exist (functional, edge cases, regression)
- What code quality checks should pass (linting, formatting, type safety)
- What the deployment confidence checklist looks like (pre-push steps, rollback plan, metrics to watch)

This isn't about perfectionism. It's about **defining correctness before building**, the same way you wouldn't start construction without blueprints.

In this article, I'll show you exactly how we use the Dev Quality Assistant to pre-plan tests, why it's become a non-negotiable part of our build process, and how you can implement it in your own workflow.

## The Problem: Test-After-Build

Let's start with why the traditional flow fails.

### The Typical Pattern

1. **Product writes PRD** → "Users should be able to archive projects"
2. **Engineering implements** → Writes the archive endpoint, updates UI
3. **Manual testing** → QA clicks around, finds it works
4. **Ship to production** → Users start archiving projects
5. **Bug reports** → "I archived a project and lost all my tasks"
6. **Post-mortem** → Realizes cascading delete wasn't handled
7. **Fix + write tests** → Engineer fixes the bug and *finally* writes tests
8. **Repeat forever**

### Why This Fails

**No Test == No Definition of "Done"**: Without tests, "done" means "it worked when I tried it once." You're shipping undefined behavior.

**Edge Cases Are Afterthoughts**: Humans are bad at remembering edge cases when building. "What if the project has 1,000 tasks?" "What if the user is a viewer, not an owner?" These only come up after bugs.

**Tests Become Debt**: If tests are optional, they never get written. There's always a new feature. Testing becomes "we should really do this someday" debt.

**Manual Testing Doesn't Scale**: Every new feature adds to the manual test matrix. Eventually, QA becomes a bottleneck and teams start cutting corners.

**No Rollback Confidence**: Without tests, you don't know what will break when you roll back a deploy. Fear of breaking things makes you ship slower.

## The Solution: Dev Quality Plan as a Pre-Code Gate

We treat the dev quality plan the same way we treat the PRD: **it's a mandatory deliverable before implementation starts**.

Here's how it fits into our pipeline:

1. **Product Spec (PRD/ADR)** → What we're building and why
2. **Dev Quality Plan** ← NEW GATE (what tests, quality checks, deploy steps)
3. **Implementation** → Write code guided by the test plan
4. **Quality Checks** → Run lint, tests, deploy checklist
5. **Ship**

The dev quality plan sits between spec and code. It's the bridge that translates "what we're building" into "how we know it's correct."

### What the Plan Contains

Our dev quality plan (Rule 125, template at `docs/templates/DEV-QUALITY-TEMPLATE.md`) has four required sections:

#### 1. Feature Snapshot

- Brief description (one paragraph)
- Affected surfaces (API, UI, database, third-party integrations)
- Owners (which engineers, which agents)

This grounds the plan in context.

#### 2. Automated Test Suggestions

The core of the plan. We map out:

**Functional Tests** (happy path):
- What acceptance criteria from the PRD need test coverage?
- For each criterion, what's the test scenario?
- What tooling (unit, integration, e2e)?
- Where to implement (file path, test suite)?

**Edge Case Tests** (unhappy path):
- Error handling (invalid input, missing data, timeouts)
- Boundary values (empty arrays, max string length, negative numbers)
- Permissions (user not authenticated, wrong role, cross-org access)
- Localization (timezones, date formats, currencies)

**Regression / Non-Functional Tests**:
- Performance (load time, query efficiency)
- Accessibility (keyboard nav, screen reader, WCAG compliance)
- Contract tests (API shape, backward compatibility)

For each test, we specify:
- **Purpose**: What behavior this verifies
- **Type**: Unit / Integration / E2E
- **Where to implement**: File path or test suite

**Example** (for an "Archive Project" feature):

| Test | Purpose | Type | Where |
|------|---------|------|-------|
| Archive sets `archived_at` timestamp | Verify archive behavior | Unit | `projects.test.ts` |
| Archived projects don't appear in default list | Verify UI filtering | Integration | `project-list.test.tsx` |
| Archiving requires owner/admin role | Verify permissions | Integration | `api/archive.test.ts` |
| Archiving project with 1,000 tasks succeeds | Verify performance | E2E | `e2e/archive.spec.ts` |
| User can unarchive and restore project | Verify reversibility | E2E | `e2e/archive.spec.ts` |

#### 3. Code Quality & Lint Guidance

This section covers best practices for the specific feature:

- **State management**: How should state be handled? (Context, Zustand, server state)
- **Data fetching**: Use tRPC, React Query, or plain fetch?
- **Security**: What auth checks are required?
- **Accessibility**: Any ARIA labels, keyboard shortcuts, focus management?
- **Error handling**: How should errors be displayed? Logged?

Plus references to existing lint rules:
- ESLint configs (no-unused-vars, no-console, etc.)
- Prettier formatting
- TypeScript strict mode
- Custom rules (e.g., "all API routes must validate input")

**Example**:
- Use `useArchiveProject` mutation from tRPC
- Display confirmation modal before archiving (prevent accidental clicks)
- Log archive events to PostHog for analytics
- Ensure archived badge has `aria-label="Archived project"`
- All errors should show toast notification and log to Sentry

#### 4. Deployment Confidence Checklist

Step-by-step pre-push and post-deploy checks:

**Pre-Push**:
- [ ] All tests pass (`npm test`)
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] Linting passes (`npm run lint`)
- [ ] Feature flag created (if applicable)
- [ ] Database migrations run successfully
- [ ] Docs updated (API docs, user guide)

**Post-Deploy**:
- [ ] Smoke test in production (archive a test project)
- [ ] Check error logs (Sentry, CloudWatch)
- [ ] Monitor key metrics (archive event count, API latency)
- [ ] Watch for support tickets

**Rollback Plan**:
- [ ] Toggle feature flag off (if flagged)
- [ ] Revert database migration (if needed)
- [ ] Communicate to users (status page, email)

This checklist becomes the engineer's "definition of done."

## The Enforcement Mechanism

Here's the critical part: **the dev quality plan is a hard blocker**.

In `000-orchestration.mdc` (our central foreman), we added:

```markdown
MANDATORY BUILD OUTPUTS:
- Before implementation: DEV-QUALITY-<feature-slug>.md must exist
- Before merging: All tests from the plan must pass
- Before deploying: Deployment checklist must be completed
```

If the Dev Quality Assistant hasn't completed the plan, the Implementer can't start coding. It's a hard gate.

## Real-World Example: Building a Multi-Tenant Invite System

Let me walk you through a real dev quality plan we created last month.

**Context**: We needed to add the ability for organization owners to invite new members via email.

### Step 1: Feature Snapshot

```markdown
## Feature Snapshot

**Description**: Organization owners and admins can invite new members via email. Invites are sent via Resend, stored in `org_invites` table, and can be accepted via magic link.

**Affected surfaces**:
- New API route: `POST /api/orgs/{id}/invites`
- New database table: `org_invites`
- New email template: `invite-email.tsx`
- UI: New "Invite Member" modal in org settings

**Owners**: @engineeringArchitect, @implementer, @testEngineer
```

### Step 2: Automated Test Suggestions

**Functional Tests**:
1. **Owner can send invite** → Integration → `api/invites.test.ts`
2. **Invite email is sent via Resend** → Integration → `api/invites.test.ts` (mock Resend)
3. **Invite token is valid for 7 days** → Unit → `invites.test.ts`
4. **Accepting invite adds user to org** → E2E → `e2e/invites.spec.ts`
5. **User sees new org in org switcher** → E2E → `e2e/invites.spec.ts`

**Edge Case Tests**:
1. **Non-owner cannot send invite** → Returns 403 → Integration → `api/invites.test.ts`
2. **Inviting existing member returns error** → Integration → `api/invites.test.ts`
3. **Expired invite token returns error** → Unit → `invites.test.ts`
4. **Malformed email returns 400** → Integration → `api/invites.test.ts`
5. **User already in 5 orgs (limit) cannot accept** → E2E → `e2e/invites.spec.ts`
6. **Invite to non-existent org returns 404** → Integration → `api/invites.test.ts`

**Regression Tests**:
1. **Invite email renders correctly** → Visual snapshot → `emails/invite.test.tsx`
2. **Accepting invite doesn't break existing sessions** → E2E → `e2e/invites.spec.ts`
3. **Org member count updates** → Integration → `api/invites.test.ts`

### Step 3: Code Quality & Lint Guidance

```markdown
## Code Quality

**Security**:
- Verify requester is owner/admin before creating invite
- Use cryptographically secure token (crypto.randomBytes)
- Never expose org data in invite token (use separate lookup)

**Data fetching**:
- Use tRPC mutation: `org.inviteember`
- Invalidate org members query on success

**Error handling**:
- Display toast on error (don't fail silently)
- Log all invite events to PostHog (invite_sent, invite_accepted)
- Log errors to Sentry

**Accessibility**:
- Modal has `role="dialog"` and `aria-labelledby`
- Form inputs have associated labels
- Error messages linked to inputs via `aria-describedby`

**Lint rules**:
- No console.log (use logger)
- Email validation via zod schema
- TypeScript strict mode (no `any`)
```

### Step 4: Deployment Confidence Checklist

```markdown
## Pre-Push Checklist
- [ ] All 14 tests pass
- [ ] TypeScript compiles with no errors
- [ ] Linting passes
- [ ] Database migration created and tested locally
- [ ] Resend API key added to env (staging and production)
- [ ] Email template renders in email client (Gmail, Outlook)

## Post-Deploy Checklist
- [ ] Smoke test: Send invite to test email, verify receipt
- [ ] Smoke test: Accept invite, verify org membership added
- [ ] Check Sentry for any new errors
- [ ] Check PostHog for `invite_sent` and `invite_accepted` events
- [ ] Monitor Resend dashboard for delivery rates

## Rollback Plan
- [ ] Disable invite UI (hide button via feature flag)
- [ ] If data corruption: rollback migration
- [ ] Notify any invited users via email
```

### The Result

Total time to create the dev quality plan: **45 minutes**.

Time saved during implementation:
- Engineer knew exactly what tests to write (no guessing)
- Caught 3 edge cases during coding (non-owner access, expired token, org limit) that would have been production bugs
- Deployment was confident (all checklists passed)
- Zero bugs reported in the first two weeks

**ROI: 45 minutes of planning saved ~10 hours of debugging and rework.**

## Practical Application: How to Implement This

Here's how to add the Dev Quality Assistant to your workflow:

### 1. Create the Template

Start with our template (`docs/templates/DEV-QUALITY-TEMPLATE.md`) or build your own. The key sections:

- Feature snapshot
- Automated test suggestions (functional, edge, regression)
- Code quality & lint guidance
- Deployment confidence checklist

### 2. Make It a Hard Gate

Add a workflow rule: "No implementation starts until the dev quality plan exists."

This could be:
- A Jira/Linear workflow state (Spec → Quality Plan → Implementation)
- A pull request template check ("Link to dev quality plan")
- A code review requirement (if no plan exists, PR gets blocked)

### 3. Assign Ownership

Designate who creates the dev quality plan. Options:

- **Test Engineer** (if you have one)
- **Dev Quality Assistant** (an AI agent guided by the template)
- **Tech Lead** (for complex features)
- **Implementer** (for simple features)

The key: someone is accountable for completing the plan before code starts.

### 4. Use the Plan as a Checklist

As the engineer implements the feature, they use the plan as a checklist:

- Write the test for "Owner can send invite" → Check
- Write the test for "Non-owner gets 403" → Check
- Add PostHog logging → Check
- Verify modal accessibility → Check

The plan becomes the definition of "done."

### 5. Update the Plan as You Learn

Sometimes during implementation, you discover new edge cases or realize a test isn't feasible. That's fine—update the plan. The goal isn't a perfect plan, it's a *living* plan that guides quality.

### 6. Automate the Checklist

Some checks can be automated:

- **Test coverage**: Fail CI if coverage drops below threshold
- **Linting**: Run in CI, block merge if linting fails
- **Type checking**: Run in CI, block merge if TS errors
- **Pre-push checklist**: Use git hooks to remind engineers

Automation ensures the plan isn't just a document—it's enforced.

## Real-World Results

Since implementing the Dev Quality Assistant, here's what we've seen:

**In the past 3 months**:
- 18 dev quality plans created
- Zero features shipped without test coverage
- 27 edge cases caught during planning (before coding)
- 5 accessibility issues prevented (keyboard nav, screen reader)
- 3 performance regressions caught in testing (not production)

**Impact on velocity**:
- Time to create plan: 30-60 minutes per feature
- Time saved debugging: ~8 hours per feature (average)
- Time saved in QA: ~4 hours per feature (fewer manual test cycles)

**Net result**: ~10-12 hours saved per feature, plus higher quality and fewer production incidents.

## Trade-Offs and Limitations

The Dev Quality Assistant isn't free:

**Upfront Time Investment**:
- 30-60 minutes per feature to create the plan
- For small features (one-line changes), this can feel like overkill

**Requires Testing Knowledge**:
- Not everyone knows how to design good tests
- Junior engineers might struggle to map acceptance criteria to test cases
- Need training or an experienced Test Engineer to guide

**Can Create Rigidity**:
- If the plan is too detailed, it constrains implementation choices
- Need to balance guidance with flexibility

**Doesn't Catch Everything**:
- The plan only covers what you think to test
- Novel bugs or edge cases you didn't anticipate still slip through
- Still need exploratory testing and user feedback

**Can Slow Down Experimentation**:
- For early-stage prototypes or throwaway spikes, a full test plan is overkill
- Need to calibrate: lightweight plan for experiments, full plan for production features

### When to Skip It

We use lighter plans (or skip entirely) for:

- **Prototypes / spikes** (not production-ready)
- **Trivial changes** (copy updates, styling tweaks)
- **Internal tools** (lower quality bar)
- **Reversible experiments** (easy to rollback)

But anything touching user data, payments, or core workflows gets the full plan.

## Takeaways

Here's what to remember about the Dev Quality Assistant:

1. **Plan Tests Before Code**: Define what "correct" looks like before building. Tests are the specification.

2. **Three Test Tiers**: Functional (happy path), edge cases (unhappy path), regression/non-functional (performance, accessibility).

3. **Include Quality Guidance**: Beyond tests, specify lint rules, security checks, error handling, and accessibility requirements.

4. **Deployment Checklist**: Pre-push and post-deploy steps, plus a rollback plan. Make "done" unambiguous.

5. **Make It a Hard Gate**: Don't let implementation start without the plan. Enforce via workflow, PR templates, or code review.

6. **Use It as a Living Checklist**: The plan isn't static. Update it as you learn during implementation.

## What's Next?

The Dev Quality Assistant has become one of our most valuable practices. It's the reason we ship features with confidence and rarely see "how did this bug make it to production?" post-mortems.

We're now working on:

- **AI-generated plans**: Using Claude to auto-generate test suggestions from PRDs
- **Test coverage tracking**: Dashboards showing which features have full vs. partial coverage
- **Quality scores**: Numeric scoring for test completeness, lint compliance, deployment readiness

**Most teams treat testing as an afterthought. We make it a build prerequisite.**

If you want to ship higher-quality code faster, I encourage you to implement a Dev Quality Assistant. Start with a simple template, make it a gate before implementation, and use it as a checklist.

What if every feature had a clear definition of "done" before code was written? That's the promise of planning quality upfront.

