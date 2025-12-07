---
title: "The Complete Workflow: Discovery to Deployment in 2025"
description: "Our current end-to-end SaaS creation system, from validating ideas to shipping code—with 25 agents, 8 quality gates, and zero guesswork."
publishedAt: "2025-12-02T00:00:00.000Z"
category: "Product Creation"
tags: "workflow, saas, product-development, process, automation"
---

# The Complete Workflow: Discovery to Deployment in 2025

## From validating ideas to shipping code—with 25 agents, 8 quality gates, and zero guesswork.

After three years of iteration, failed startups, and continuous refinement, we've built something remarkable: a fully systematic SaaS creation workflow that transforms ideas into validated, defensible products with predictable outcomes.

This isn't vaporware or a framework we're "planning to implement." This is our production system, running right now, managing a portfolio of 16+ product ideas at various stages—from raw concept to production deployment.

The system has:
- **25 specialized AI agents** (human and AI-powered) coordinated by a single orchestrator
- **8 mandatory quality gates** that ideas must pass through
- **150+ rules** organized into a four-tier taxonomy
- **12 document types** that capture every decision and artifact
- **Zero ambiguity** about what "done" looks like at each stage

In this article, I'll walk you through the complete workflow—the gates, the agents, the deliverables, and the orchestration that ties it all together. By the end, you'll understand exactly how we go from "here's an idea" to "here's a deployed, validated SaaS product."

## The Big Picture: Four Phases, Eight Gates

Our workflow has four main phases with eight hard gates between them:

```
Portfolio        Discovery          Validation         Build              Scale
   ↓                ↓                    ↓                ↓                  ↓
GATE 1         GATE 2-5            GATE 6-7          GATE 8            Ongoing
Portfolio      Heat Filter         Durability +      Dev Quality +     PostHog +
Score ≥ 20     (Opp Score ≥ 8)     Brand System      Implementation    Analytics
```

Let me break down each phase.

## Phase 1: Portfolio & Idea Scoring (The First Filter)

**Goal**: Score every idea before investing any validation effort.

**Who's Involved**: Portfolio Prioritizer, Product Strategist

**What Happens**:

Every idea gets scored against 8 criteria (0-5 each, max 40 points):

1. **Frequency of the job** (daily/weekly vs. one-time)
2. **Economic buyer has budget** (budgeted vs. discretionary spend)
3. **Problem exists independent of hype** (structural vs. trend-driven)
4. **Users would be upset if it disappeared** (emotional attachment)
5. **Clear path to switching costs** (lock-in potential)
6. **Niche has compounding advantages** (network effects, data moats)
7. **Founder has unfair advantage** (domain expertise, distribution)
8. **Expansion revenue potential** (upsells, cross-sells, usage-based)

**Deliverable**:
- `/docs/portfolio/PORTFOLIO-SCORE-<slug>.md` with score and verdict

**GATE 1: Portfolio Score ≥ 20**

If the idea scores below 20, it gets **killed immediately**. We don't waste time on low-potential ideas. 

Ideas scoring 20-29 are "maybes" (low priority). Ideas scoring 30+ are "top priority" and immediately move to discovery.

**Example**: We scored 23 ideas in the last quarter. 7 were killed at this gate (scores 12-18). 16 proceeded. This gate alone saved us ~150 hours of validation work on dead-end ideas.

**Time Investment**: 15-30 minutes per idea.

## Phase 2: Discovery (The Heat Filter)

**Goal**: Prove that a tribe of real humans urgently wants this solution.

**Who's Involved**: 
- Niche Intelligence Agent
- Pain Signal Agent
- JTBD Agent (Jobs-to-be-Done)
- Opportunity & Moat Agent
- Manus Narrative Agent (AI research)
- ChatGPT Reasoning Agent (AI synthesis)

**What Happens**:

We systematically research and document four critical dimensions:

### 1. Niche Intelligence (`NICHE-INTEL-<slug>.md`)

**Agent**: Niche Intelligence Agent + Manus

The agent uses Manus.im to research:
- Community size and engagement (Reddit subs, Facebook groups, Discord servers)
- Existing solutions and their limitations
- Buyer/user demographics
- Market trends and growth signals
- Underserved segments

**Example output** (from a productivity app for burned-out remote workers):
```markdown
## Community Landscape
- r/productivity: 2.1M members, 15K active daily
- r/ADHD: 1.8M members, growing 15%/year
- "Productivity Twitter": ~500K engaged users
- Key insight: Existing tools are too rigid; users want adaptive systems
```

### 2. Pain Signals (`PAIN-SIGNALS-<slug>.md`)

**Agent**: Pain Signal Agent + Manus

The agent scores pains using MAAP framework:
- **Market size**: How many people have this pain?
- **Acuity**: How severe is it?
- **Accessibility**: Can we reach them?
- **Purchasing power**: Can/will they pay?

Each dimension scored 1-5, with commentary and evidence (Reddit threads, reviews, interviews).

**Example**:
```markdown
## Top Pain: "Productivity guilt spirals"
- Market: 8M+ burned-out remote workers
- Acuity: 4/5 (causing real distress, affecting mental health)
- Accessibility: 5/5 (active on Reddit, Twitter, productivity communities)
- Purchasing power: 4/5 ($10-30/mo budget for mental health tools)
- MAAP Score: 4.25/5
```

### 3. Jobs-to-be-Done (`JTBD-<slug>.md`)

**Agent**: JTBD Agent + ChatGPT

The agent synthesizes user interviews and community research into persona narratives and JTBD statements:

- Core job (what users are trying to accomplish)
- Functional, emotional, and social dimensions
- Current workarounds and their limitations
- Hiring/firing criteria (why users switch)

**Example**:
```markdown
## Primary Job: "Track habits without judgment"

**When**: Daily morning and evening check-ins
**I want to**: Log what I actually did (not what I planned)
**So I can**: See patterns without feeling guilty about "breaking streaks"
**Instead of**: Rigid habit trackers that make me feel worse when I slip
```

### 4. Opportunity & Moat (`OPPORTUNITY-<slug>.md`)

**Agent**: Opportunity & Moat Agent

The agent synthesizes the above three docs into:

- **Opportunity Score** (0-10 scale combining market size, acuity, accessibility)
- **Moat Thesis** (2-3 defensibility types: network effects, data moat, switching costs)
- **Whitespace Analysis** (gaps in existing solutions)

**Example**:
```markdown
## Opportunity Score: 8.5/10

Justification:
- Large, engaged community (r/productivity, ADHD Twitter)
- High acuity (mental health impact)
- Underserved (existing tools create anxiety, not relief)
- Clear WTP ($10-30/mo for mental health tools)

## Moat Thesis:
1. Data moat: Personalized habit patterns learned over time
2. Switching costs: 90+ days of logged data creates lock-in
3. Brand differentiation: "Non-judgmental" positioning vs. competitors' "streak warrior" vibe
```

**GATE 2-5: All Four Discovery Docs Must Exist + Opportunity Score ≥ 8.0**

If the Opportunity Score is below 8.0, we **pivot or kill**. The idea might be interesting, but the market signal isn't strong enough.

**Time Investment**: 8-12 hours total for all four docs (using AI to accelerate research).

## Phase 3: Validation (Proving Desirability + Durability)

**Goal**: Run low-cost experiments to confirm people will actually pay for this.

**Who's Involved**:
- Demand Validator
- Landing Builder
- Distribution Operator
- Pricing Tester
- Creative Batch Operator
- Brand Strategist

**What Happens**:

### 1. Validation Plan (`VALIDATION-PLAN-<slug>.md`)

The Demand Validator creates a plan with:
- 3-5 validation tests (fake door, waitlist, concierge MVP, prepayment)
- Success thresholds (e.g., 100 waitlist signups in 2 weeks, 10% prepayment conversion)
- Channels and budget
- Timeline (typically 2-4 weeks)

**Example tests**:
1. **Fake door ad**: Run Facebook ads to a landing page with "Join waitlist" CTA. Threshold: 5% CTR, 100+ signups.
2. **Concierge MVP**: Manually deliver the core experience to 10 users. Threshold: 8/10 would pay $15/mo.
3. **Prepayment offer**: Offer early access for $99/year (50% off). Threshold: 20 prepayments in 2 weeks.

### 2. High-Converting Landing Page (`LANDING-<slug>.md` + semantic HTML/CSS)

**Agent**: Landing Builder

Using the discovery docs (especially JTBD and pain signals), the Landing Builder creates:

- **Copy**: Benefits-first headlines, emotional subheadings, clear CTAs, social proof, objection handling
- **Semantic HTML5 + CSS package**: Accessible, mobile-first, fast-loading standalone page
- **Deployment plan**: Vercel or Netlify, linked to waitlist form (Typeform, ConvertKit, etc.)

**Example hero section**:
```html
<h1>Track your habits without the guilt</h1>
<p>A daily check-in that adapts to you—not a streak counter that judges you.</p>
<button>Join the waitlist (500+ already waiting)</button>
```

### 3. Distribution Plan (`DISTRIBUTION-<slug>.md`)

**Agent**: Distribution Operator

Maps out:
- Channels (Reddit, Twitter, Facebook groups, email outreach)
- Content calendar (posts, DMs, ads)
- Budget allocation
- Lindy AI specs for automated outreach/nurture

### 4. Pricing Test (`PRICING-TEST-<slug>.md`)

**Agent**: Pricing Tester

Designs pricing experiments:
- A/B test 3 price points ($10/mo, $20/mo, $30/mo)
- Measure conversion and willingness-to-pay
- Identify "too cheap" (low perceived value) and "too expensive" (low conversion) thresholds

### 5. Creative Batch (`CREATIVE-BATCH-<slug>.md`)

**Agent**: Creative Batch Operator + Glif

Uses Glif.app to batch-generate:
- 10-20 ad variations (headlines, visuals, CTAs)
- 5-10 social proof snippets
- 3-5 explainer graphics

All logged with prompts for reproducibility.

### 6. Validation Results (`RESULTS-<slug>.md`)

**Agent**: Demand Validator

Daily log of metrics:
- Signups, conversions, engagement
- Feedback quotes
- Pass/fail determination

**GATE 6: Validation Thresholds Must Pass**

If the validation tests don't hit thresholds (e.g., only 30 signups instead of 100, or only 2% prepayment conversion instead of 10%), we **pivot or kill**.

**Time Investment**: 2-4 weeks, $500-2,000 in ad spend.

### 7. Brand System Blueprint (`BRAND-SYSTEM-<slug>.md`)

**Agent**: Brand Strategist

Before any UI or marketing work begins, the Brand Strategist completes:

- **Competitive brand audit**: 3-5 leading brands, visual/verbal analysis
- **Whitespace analysis**: Overused tropes to avoid, gaps to own
- **Foundational design system**: Typography (type scale, weights), color tokens (primary, secondary, semantic, state colors), imagery/iconography style
- **Voice & tone guidelines**: Persona, tone sliders, messaging pillars, do/don't copy examples
- **Landing page concept**: How brand elements appear in hero section, CTAs, social proof

**GATE 7: Brand System Blueprint Must Exist**

No UI design, no code, no marketing assets until the brand system is documented.

**Time Investment**: 4-8 hours.

**Example** (from the habit tracker):
- **Primary color**: `#6B7AA1` (soft slate blue, calming)
- **Voice**: "Thoughtful therapist, not life coach"
- **Messaging pillar**: "Progress, not perfection"
- **Do**: "How did today feel?" **Don't**: "Crush your goals!"

## Phase 4: Build (Turning Validated Ideas into Shipped Code)

**Goal**: Build and ship the validated product with quality gates enforced.

**Who's Involved**:
- Product Strategist
- Engineering Architect
- Dev Quality Assistant
- Test Engineer
- Implementer
- Accessibility Agent
- Data Platform Architect
- Auth & Onboarding Architect
- Analytics Architect

**What Happens**:

### 1. Product Requirements Doc (`PRD-<feature-slug>.md`)

**Agent**: Product Strategist

Translates discovery + validation into a PRD:
- User stories and acceptance criteria
- UI/UX requirements (wireframes, flows)
- Success metrics (events, funnels, KPIs)
- Out of scope (what we're NOT building)

### 2. Architecture Decision Record (`ADR-<feature-slug>.md`)

**Agent**: Engineering Architect

Documents architectural choices:
- Tech stack decisions (Next.js, Supabase, Clerk, PostHog)
- Database schema (Drizzle ORM, Postgres)
- API design (tRPC, REST)
- Security model (RLS, auth gates)
- Trade-offs and alternatives considered

### 3. Dev Quality Plan (`DEV-QUALITY-<feature-slug>.md`)

**Agent**: Dev Quality Assistant

Before any code is written, creates:
- **Automated test suggestions**: Functional tests (happy path), edge case tests (error handling, permissions, boundaries), regression tests (performance, accessibility)
- **Code quality guidance**: Lint rules, security checks, accessibility requirements, error handling patterns
- **Deployment confidence checklist**: Pre-push steps (tests pass, linting, migrations), post-deploy checks (smoke tests, error logs, metrics), rollback plan

**GATE 8: Dev Quality Plan Must Exist Before Implementation**

No code gets written until the test plan is documented.

**Time Investment**: 30-60 minutes per feature.

### 4. Supabase Backend Design (`SUPABASE-<slug>.md`)

**Agent**: Data Platform Architect

Using Supabase MCP (Model Context Protocol) to reference latest docs:
- **PostgreSQL schema**: Tables, relationships, indexes, constraints
- **Row Level Security (RLS) policies**: Enforce multi-tenant data isolation
- **Auth integration**: Supabase Auth + profiles table
- **Migrations**: SQL scripts for versioned schema changes
- **Edge Functions**: Server-side logic (org creation, invites, webhooks)
- **Analytics schema**: Events, sessions, feature flags (for PostHog integration)

**Example RLS policy**:
```sql
-- Users can only see projects for orgs they're members of
CREATE POLICY "Users see own org projects"
ON projects FOR SELECT
USING (
  organization_id IN (
    SELECT organization_id 
    FROM organization_members 
    WHERE user_id = auth.uid()
  )
);
```

### 5. Auth & Onboarding Plan (`CLERK-<slug>.md`)

**Agent**: Auth & Onboarding Architect

Designs:
- Organization/role structure (Clerk orgs)
- Onboarding flow (signup → personal workspace → invite team)
- Permission gates (owner/admin/member/viewer roles)

### 6. Analytics Plan (`POSTHOG-<slug>.md`)

**Agent**: Analytics Architect

Defines:
- **Events**: Core actions to track (e.g., `habit_created`, `habit_completed`, `streak_extended`)
- **Event taxonomy**: Categories (auth, onboarding, core_feature, engagement, billing)
- **Funnels**: Key conversion paths (signup → first habit → 7-day retention)
- **Feature flags**: Rollout strategy, A/B tests
- **Dashboards**: KPIs to monitor (DAU, WAU, MAU, retention curves)

### 7. Implementation (`/src/features/<feature-name>/`)

**Agent**: Implementer

Writes code following:
- Next.js App Router conventions (server/client components)
- tRPC for type-safe APIs
- Drizzle for database queries
- Tailwind v4 for styling
- Feature-based folder structure (`/src/features/habits/`, `/src/features/dashboard/`)

**All code must**:
- Pass tests from the dev quality plan
- Pass linting (ESLint, Prettier, TypeScript strict mode)
- Have RLS policies enforced
- Include PostHog event tracking
- Be deployed behind feature flags

### 8. Accessibility Audit (`A11Y-AUDIT-<feature-slug>.md`)

**Agent**: Accessibility Agent

Before shipping, audits for WCAG 2.2 AA compliance:
- Keyboard navigation (tab order, focus states)
- Screen reader compatibility (ARIA labels, semantic markup)
- Color contrast (4.5:1 for text, 3:1 for UI components)
- Reduced motion support (prefers-reduced-motion)

### 9. Security & Bug Gate Review

**Agent**: Engineering Architect + Security Reviewer

Before deploying to production, runs the full Security & Bug Gate checklist:
- Auth & authorization (user identity, org membership, role checks)
- RLS / data tenancy (all queries scoped by org_id)
- Input validation (types, ranges, size limits)
- Logic bugs & edge cases (null handling, race conditions, error handling)
- Secrets management (no hardcoded keys, env vars only)
- Tests & regression protection
- **Risk score (1-10) + deploy verdict** (Safe to Ship / Ship with Fixes / Do NOT Ship)

### 10. Deployment

**Steps**:
1. Merge to `main` (triggers CI/CD)
2. Run migrations (Supabase or Drizzle)
3. Deploy to Vercel (preview → production)
4. Enable feature flag for 5% of users (canary release)
5. Monitor PostHog dashboards + Sentry error logs
6. Gradually roll out to 25% → 50% → 100%
7. Watch for support tickets, error spikes, performance regressions

**Rollback plan**: Toggle feature flag off, revert migration if needed.

## The Orchestrator: How It All Stays Coordinated

This is the magic: **one foreman orchestrates everything**.

The orchestrator (Rule `000-orchestration.mdc`) is a conversational AI agent that:

1. **References the rule-agent matrix** (`docs/rules/rule-agent-matrix.md`) to know which agent handles what
2. **Enforces mandatory gates** (Portfolio Score ≥ 20, Opportunity Score ≥ 8.0, Brand System exists, Dev Quality Plan exists)
3. **Tracks deliverables** (all 12+ document types must be complete before progressing)
4. **Calls specialist agents** (instead of restating rules, just links to canonical sources)
5. **Maintains checklist state** (what's done, what's next, what's blocked)

### Example Orchestrator Dialogue

**User**: "I have an idea for a habit tracker app."

**Orchestrator**: "Let's start with the Portfolio Score. I'll call the Portfolio Prioritizer to score it against our 8 criteria. Once scored, if it's ≥ 20, we'll move to Discovery."

*(Portfolio Prioritizer scores it: 32/40 — Top Priority)*

**Orchestrator**: "Great! Score is 32/40. Proceeding to Discovery. I'll call the Niche Intelligence Agent (using Manus) to research the community. We need 4 docs: NICHE-INTEL, PAIN-SIGNALS, JTBD, and OPPORTUNITY. This will take ~8-12 hours."

*(Discovery completes, Opportunity Score: 8.5/10)*

**Orchestrator**: "Discovery complete. Opportunity Score is 8.5/10 (above 8.0 threshold). Proceeding to Validation. I'll call the Demand Validator to create a Validation Plan. We'll need a landing page from the Landing Builder and a brand system from the Brand Strategist."

*(Validation runs for 2 weeks, thresholds pass)*

**Orchestrator**: "Validation passed! 150 waitlist signups (threshold: 100), 12% prepayment conversion (threshold: 10%). Proceeding to Build. I'll call the Product Strategist for the PRD, Engineering Architect for the ADR, and Dev Quality Assistant for the test plan."

The orchestrator keeps everyone aligned, enforces gates, and prevents work from starting out of order.

## The Hub: Real-Time Portfolio Dashboard

Everything we've documented lives in a searchable Hub (`/app/(product)/hub/page.tsx`):

- **Project cards** showing portfolio score, verdict (PROCEED/PIVOT/KILL), priority label
- **Filter buttons**: All Ideas, Top Priority (score ≥ 30), Proceed, Pivot
- **Document links**: Click a project to see all discovery, validation, and build docs
- **Workflow status**: Green checkmarks for completed deliverables, red for missing

The Hub is our "control center"—we can see the entire portfolio at a glance and decide where to focus next.

## Real-World Results

Since implementing this system (in its current form, ~6 months):

**Portfolio**:
- 23 ideas scored
- 7 killed at portfolio gate (saved ~150 hours)
- 16 proceeded to discovery
- 9 killed/pivoted at discovery gate (Opportunity Score < 8.0)
- 7 proceeded to validation

**Validation**:
- 4 passed validation thresholds
- 3 currently in validation
- 2 failed validation (pivoted)

**Build**:
- 3 products in production (behind feature flags)
- 1 shipped to 100% of users
- Zero P0 security incidents (Security & Bug Gate caught 12 critical issues before production)

**Time to Ship** (idea to production):
- Old way: 6-12 months, ~60% failure rate
- New way: 2-4 months, ~75% success rate (of ideas that pass portfolio gate)

**Team Velocity**:
- One founder + AI agents (no full-time employees)
- Shipping features weekly (vs. monthly before)
- Confident deploys (tests + gates + flags)

## Practical Application: How to Implement This

You don't need to build everything at once. Here's how to start:

### Phase 1: Portfolio Scoring (Week 1)

1. Create a simple scoring rubric (8 criteria, 0-5 each)
2. Score your current ideas
3. Kill anything below 20 points
4. Focus discovery effort on top 3 ideas

### Phase 2: Discovery Docs (Weeks 2-4)

1. Pick a template for each of the 4 docs (Niche Intel, Pain Signals, JTBD, Opportunity)
2. Use AI tools (ChatGPT, Claude, Manus) to accelerate research
3. Set a hard threshold: Opportunity Score ≥ 8.0 to proceed

### Phase 3: Validation Tests (Weeks 5-8)

1. Create a validation plan template (tests, thresholds, channels, budget)
2. Build a simple landing page (use our semantic HTML/CSS template)
3. Run 2-3 low-cost tests (fake door, waitlist, concierge)
4. Measure against thresholds, pivot if you miss

### Phase 4: Build Gates (Weeks 9-12)

1. Add mandatory docs before coding: PRD, ADR, Dev Quality Plan
2. Create a pre-push checklist (tests, linting, migrations)
3. Use feature flags for gradual rollout
4. Add a security review step (even just the everyday prompt)

### Phase 5: Orchestration (Ongoing)

1. Document your workflow in one place (your "000-orchestration" doc)
2. Create a matrix mapping rules to agents
3. Use the orchestrator to enforce gates and track progress
4. Build a simple Hub or dashboard to visualize portfolio status

## Trade-Offs and Limitations

This system isn't for everyone. Here are the costs:

**Upfront Investment**:
- 100+ hours to build the initial system (rules, templates, orchestrator)
- 20-40 hours per new idea (discovery, validation, planning)
- Requires discipline to follow the gates (easy to skip when excited about an idea)

**Requires AI Fluency**:
- You need to know how to prompt ChatGPT, Claude, Manus effectively
- Templates and prompts need maintenance as AI tools improve
- Not everyone is comfortable with AI-driven research/synthesis

**Can Slow Down "Just Ship It" Moments**:
- Sometimes you want to hack together a prototype and see what happens
- The gates can feel like bureaucracy if you're in exploration mode
- Need to calibrate: full process for serious bets, lightweight for experiments

**Doesn't Guarantee Success**:
- You can pass all gates and still fail in market
- User feedback, competition, and luck still matter
- The system reduces risk but doesn't eliminate it

**Maintenance Overhead**:
- Rules need updating as you learn
- Templates need refining
- The matrix needs syncing
- Every 3-6 months, audit for duplication and consolidate

### When to Skip It

Use a lighter process for:
- **Internal tools** (no market validation needed)
- **Throwaway prototypes** (not production-ready)
- **Tiny experiments** (quick tests, reversible decisions)

But for anything you're betting real time/money on, the full system pays for itself.

## Takeaways

Here's what to remember about our end-to-end SaaS creation workflow:

1. **Four Phases, Eight Gates**: Portfolio → Discovery → Validation → Build, with hard gates at each transition.

2. **25 Specialized Agents**: Each agent owns specific deliverables. The orchestrator coordinates them all.

3. **12+ Document Types**: Every decision, research finding, and architectural choice gets documented. No tribal knowledge.

4. **Kill Fast, Double Down on Winners**: 30% of ideas killed at portfolio gate, 40% at discovery gate. The survivors get full attention.

5. **Brand and Quality Before Code**: Brand system blueprint and dev quality plan are mandatory gates before implementation.

6. **Security and Testing as Guardrails**: Security & Bug Gate catches vulnerabilities before production. Tests define correctness.

7. **Feature Flags for Confidence**: Every feature ships behind flags. Gradual rollout (5% → 25% → 100%) with monitoring.

8. **Orchestrator as Foreman**: One conversational agent enforces gates, tracks progress, and calls specialists.

## What's Next?

We're continuing to refine the system:

- **AI-generated docs**: Using Claude to auto-generate discovery docs from Manus research
- **Real-time Hub updates**: Workflow status pulled from GitHub + docs folder, surfaced in the Hub
- **Cross-project learning**: Extracting patterns from successful products, feeding into scoring rubric
- **Community playbooks**: Open-sourcing templates and rules for others to use

**From validating ideas to shipping code—with 25 agents, 8 quality gates, and zero guesswork.**

If you're building multiple SaaS products (or want to), I encourage you to adopt a systematic workflow. Start small (portfolio scoring, discovery docs), add gates incrementally, and document everything.

What if every product you built had an 75% success rate instead of 10%? That's the promise of systematic product creation.

---

*Want to explore the system in detail? Check out our open-source rules, templates, and orchestrator at [link]. Or read the other articles in this series on rule consolidation, brand-first validation, dev quality, security gates, and more.*

