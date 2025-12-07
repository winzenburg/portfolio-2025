---
title: "The Supabase MCP Blueprint: Production-Grade Backends in Minutes, Not Weeks"
description: "Backend design is usually trial-and-error. We turned it into a repeatable blueprint using Supabase MCP."
publishedAt: "2025-12-02T00:00:00.000Z"
category: "Engineering"
tags: "backend, database, supabase, architecture, security"
---

# The Supabase MCP Blueprint: Production-Grade Backends in Minutes, Not Weeks

## Backend design turned into a repeatable blueprint.

Here's a problem every founder faces: You've validated demand, you're ready to build, and then you hit the backend wall.

You need to:
- Design a normalized database schema that won't become a nightmare in 6 months
- Implement Row Level Security (RLS) so users can't access each other's data
- Support both single-user "personal workspaces" and team-based organizations
- Build authentication and authorization that scales
- Set up analytics to track user behavior, retention, and churn
- Create Edge Functions for privileged operations
- Write migrations that won't break existing data
- Add audit logging for compliance
- Design for AI personalization without creeping users out

And you need to do all this *before* you can start building features.

The result? Most founders either:
1. **Hack something together** (and spend 6 months refactoring when it breaks)
2. **Over-engineer** (and take 3 months to ship the first feature)
3. **Hire a backend engineer** (expensive, and they're hard to find)

We found a fourth way: **systematize backend design using Supabase MCP**.

In this article, I'll show you exactly how we use Supabase's Model Context Protocol (MCP) to generate production-grade backend architectures in minutes instead of weeks—complete with schema, RLS policies, analytics layer, Edge Functions, migrations, and security checklists.

## The Problem: Backend Design is Ad-Hoc and Risky

Let's start with why traditional backend development is painful.

### The Typical Pattern

1. **Start building features immediately** → "We'll figure out the schema as we go"
2. **Realize you need multi-tenancy** → Retroactively add `organization_id` to every table
3. **Discover data leaks** → Users can see other orgs' data because RLS wasn't enforced
4. **Add analytics as afterthought** → "Let's just log to console and figure it out later"
5. **Performance degrades** → No indexes, inefficient queries, full table scans
6. **Security audit fails** → No audit logging, hardcoded secrets, SQL injection vulnerabilities
7. **Refactor everything** → 6 months of tech debt accumulated

Sound familiar?

### Why This Fails

**No Blueprint**: You're designing the foundation while building the house. Every feature requires schema changes, migrations, and RLS updates.

**RLS is Hard**: Row Level Security is powerful but subtle. One wrong `WHERE` clause and you've created a data leak. Most developers skip it or get it wrong.

**Multi-Tenancy is Tricky**: Supporting both personal workspaces and team organizations requires careful modeling. Do it wrong and you'll have to migrate data later.

**Analytics Gets Ignored**: By the time you need retention metrics, you don't have the data. Events weren't tracked, sessions weren't logged, funnels can't be measured.

**Security is Bolted On**: Audit logging, consent flags, PII separation—these get added after incidents, not by design.

**Trial-and-Error is Slow**: Each mistake requires a migration, data backfill, and potential downtime. Learning is expensive.

## The Solution: Supabase MCP as a Design Assistant

Supabase MCP (Model Context Protocol) lets you query the latest Supabase documentation and best practices directly from your AI coding environment.

Instead of Googling "how to write RLS policies" or reading docs for hours, you ask:

> "Design a PostgreSQL schema for a habit tracking app with personal workspaces and team organizations. Include RLS policies, analytics tables, and audit logging for AI personalization."

The MCP responds with:
- Current best practices (not outdated blog posts)
- Schema definitions (tables, relationships, indexes)
- RLS policies (properly scoped, no data leaks)
- Auth integration patterns
- Migration scripts
- Edge Function recommendations
- Security checklist

We've wrapped this into Rule 096 (`096-supabase-mcp.mdc`): a systematic blueprint for backend design that runs *before* any code is written.

### What the Blueprint Contains

Our Supabase MCP blueprint has 7 required sections:

#### 1. High-Level Tenancy Model

**Purpose**: Document the multi-tenant architecture before writing any SQL.

**Questions to answer**:
- Do users get personal workspaces? (Yes, on signup)
- Can users belong to multiple organizations? (Yes, via membership table)
- What roles exist? (Owner, Admin, Member, Viewer)
- How is data scoped? (Every record has `organization_id`)

**Example** (from a habit tracker):
```markdown
## Tenancy Model

- Every user gets a personal organization on signup (`is_personal = true`)
- Users can create additional organizations (team accounts)
- Users can belong to multiple orgs via `organization_members` table
- Roles: Owner (full control), Admin (invite/remove), Member (CRUD own data), Viewer (read-only)
- All domain data scoped by `organization_id` (not just `user_id`)
```

This model becomes the constraint for every table and RLS policy.

#### 2. Core Schema (Tenancy & Auth)

**Purpose**: Define the foundational tables that support multi-tenancy and auth.

**Required tables**:

**`profiles`** (extends Supabase's `auth.users`):
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  time_zone TEXT DEFAULT 'UTC',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

**`organizations`**:
```sql
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  is_personal BOOLEAN DEFAULT FALSE,
  owner_user_id UUID REFERENCES auth.users(id) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_organizations_owner ON organizations(owner_user_id);
CREATE INDEX idx_organizations_slug ON organizations(slug);
```

**`organization_members`**:
```sql
CREATE TYPE member_role AS ENUM ('owner', 'admin', 'member', 'viewer');

CREATE TABLE organization_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role member_role NOT NULL DEFAULT 'member',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(organization_id, user_id)
);

CREATE INDEX idx_org_members_org ON organization_members(organization_id);
CREATE INDEX idx_org_members_user ON organization_members(user_id);
```

**Every table after this follows the pattern**: `organization_id UUID NOT NULL` plus appropriate indexes.

#### 3. Domain Schema (App-Specific Tables)

**Purpose**: Model the core entities of your app, scoped by organization.

**Example** (habit tracker domain tables):

```sql
-- Habits belong to an organization
CREATE TABLE habits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  created_by UUID REFERENCES auth.users(id) NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  frequency TEXT DEFAULT 'daily', -- 'daily', 'weekly', 'custom'
  archived_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_habits_org ON habits(organization_id);
CREATE INDEX idx_habits_created_by ON habits(created_by);

-- Check-ins are scoped by org (user logs completion)
CREATE TABLE habit_check_ins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  habit_id UUID REFERENCES habits(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  checked_at TIMESTAMPTZ DEFAULT NOW(),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_check_ins_org ON habit_check_ins(organization_id);
CREATE INDEX idx_check_ins_habit ON habit_check_ins(habit_id);
CREATE INDEX idx_check_ins_user_date ON habit_check_ins(user_id, checked_at);
```

**Key patterns**:
- Every table has `organization_id`
- `created_by` or `user_id` tracks who created/owns the record
- Timestamps: `created_at`, `updated_at`
- Indexes on foreign keys and common query patterns
- UUIDs for primary keys

#### 4. Analytics Schema (Events, Sessions, Metrics)

**Purpose**: Track user behavior, retention, and product usage from day one.

**Required tables**:

**`sessions`**:
```sql
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id),
  user_id UUID REFERENCES auth.users(id),
  started_at TIMESTAMPTZ DEFAULT NOW(),
  ended_at TIMESTAMPTZ,
  client_type TEXT, -- 'web', 'ios', 'android'
  user_agent TEXT,
  country TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_sessions_org_started ON sessions(organization_id, started_at);
CREATE INDEX idx_sessions_user_started ON sessions(user_id, started_at);
```

**`events`** (canonical event taxonomy):
```sql
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id),
  user_id UUID REFERENCES auth.users(id),
  session_id UUID REFERENCES sessions(id),
  event_name TEXT NOT NULL, -- 'habit_created', 'habit_completed', etc.
  event_category TEXT NOT NULL, -- 'auth', 'onboarding', 'core_feature', 'engagement'
  event_source TEXT DEFAULT 'app', -- 'app', 'api', 'system'
  properties JSONB, -- Additional context (no raw PII)
  occurred_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_events_org_occurred ON events(organization_id, occurred_at);
CREATE INDEX idx_events_name_occurred ON events(event_name, occurred_at);
CREATE INDEX idx_events_user_occurred ON events(user_id, occurred_at);
```

**Event taxonomy** (from our canonical list):
- **Categories**: `auth`, `onboarding`, `setup`, `core_feature`, `engagement`, `collaboration`, `navigation`, `billing`
- **Core events**: `user_signed_up`, `user_logged_in`, `onboarding_completed`, `habit_created`, `habit_completed`, `streak_extended`, `streak_broken`, `badge_unlocked`, `member_invited`, etc.

**`feature_flags`** + **`feature_flag_assignments`** (for gradual rollout):
```sql
CREATE TABLE feature_flags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  description TEXT,
  enabled BOOLEAN DEFAULT FALSE,
  rollout_strategy JSONB, -- percentage, segments
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE feature_flag_assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  feature_flag_id UUID REFERENCES feature_flags(id),
  organization_id UUID REFERENCES organizations(id),
  user_id UUID REFERENCES auth.users(id),
  variant TEXT, -- 'control', 'variant_a'
  assigned_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Materialized view for daily metrics**:
```sql
CREATE MATERIALIZED VIEW daily_org_metrics AS
SELECT 
  organization_id,
  DATE(occurred_at) as date,
  COUNT(DISTINCT user_id) as dau,
  COUNT(*) as events_count,
  COUNT(DISTINCT session_id) as sessions_count
FROM events
GROUP BY organization_id, DATE(occurred_at);

CREATE UNIQUE INDEX idx_daily_metrics_org_date 
ON daily_org_metrics(organization_id, date);
```

#### 5. RLS Policies (Data Isolation + Role-Based Access)

**Purpose**: Enforce that users can ONLY access data for organizations they're members of.

**Core pattern** (for every domain table):

```sql
-- Enable RLS
ALTER TABLE habits ENABLE ROW LEVEL SECURITY;

-- SELECT: Users can see habits for orgs they belong to
CREATE POLICY "Users see own org habits"
ON habits FOR SELECT
USING (
  organization_id IN (
    SELECT organization_id 
    FROM organization_members 
    WHERE user_id = auth.uid()
  )
);

-- INSERT: Users can create habits in orgs they're members of
CREATE POLICY "Users create habits in own orgs"
ON habits FOR INSERT
WITH CHECK (
  organization_id IN (
    SELECT organization_id 
    FROM organization_members 
    WHERE user_id = auth.uid()
  )
);

-- UPDATE/DELETE: Only owners/admins/members (not viewers) can modify
CREATE POLICY "Members can update habits"
ON habits FOR UPDATE
USING (
  organization_id IN (
    SELECT organization_id 
    FROM organization_members 
    WHERE user_id = auth.uid()
    AND role IN ('owner', 'admin', 'member')
  )
);

CREATE POLICY "Members can delete habits"
ON habits FOR DELETE
USING (
  organization_id IN (
    SELECT organization_id 
    FROM organization_members 
    WHERE user_id = auth.uid()
    AND role IN ('owner', 'admin', 'member')
  )
);
```

**Analytics tables** (read-only for members, write-restricted):

```sql
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Users can read events for their orgs
CREATE POLICY "Users see own org events"
ON events FOR SELECT
USING (
  organization_id IN (
    SELECT organization_id 
    FROM organization_members 
    WHERE user_id = auth.uid()
  )
);

-- Only service role or trusted Edge Functions can insert events
CREATE POLICY "Service role can insert events"
ON events FOR INSERT
WITH CHECK (auth.jwt() ->> 'role' = 'service_role');
```

**Key principles**:
- RLS enabled on ALL tables (no exceptions)
- `auth.uid()` used to identify current user
- Organization membership checked via subquery
- Role-based access where needed (owner/admin vs. member/viewer)
- Service role used for privileged operations (Edge Functions)

#### 6. Edge Functions + Triggers + Automation

**Purpose**: Server-side logic that can't be trusted to the client.

**Recommended Edge Functions**:

**`create-personal-org`** (runs on user signup):
```typescript
// Triggered via Supabase Auth webhook
export default async (req: Request) => {
  const { user } = await req.json();
  
  // Create personal organization
  const org = await supabaseAdmin.from('organizations').insert({
    name: `${user.email}'s Workspace`,
    slug: generateSlug(user.email),
    is_personal: true,
    owner_user_id: user.id,
  }).single();
  
  // Add user as owner
  await supabaseAdmin.from('organization_members').insert({
    organization_id: org.id,
    user_id: user.id,
    role: 'owner',
  });
  
  // Log event
  await supabaseAdmin.from('events').insert({
    organization_id: org.id,
    user_id: user.id,
    event_name: 'user_signed_up',
    event_category: 'auth',
  });
  
  return new Response(JSON.stringify(org), { status: 200 });
};
```

**`invite-member`** (owners/admins invite users):
```typescript
export default async (req: Request) => {
  const { organizationId, email, role } = await req.json();
  
  // Verify requester is owner/admin (RLS + additional check)
  const membership = await supabaseAdmin
    .from('organization_members')
    .select('role')
    .eq('organization_id', organizationId)
    .eq('user_id', req.user.id)
    .single();
  
  if (!membership || !['owner', 'admin'].includes(membership.role)) {
    return new Response('Unauthorized', { status: 403 });
  }
  
  // Create invite, send email via Resend
  // ...
};
```

**Database triggers** (auto-update `updated_at`):
```sql
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER habits_updated_at
  BEFORE UPDATE ON habits
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();
```

#### 7. Privacy & Personalization Addendum

**Purpose**: Design for AI personalization without being creepy.

**Required additions**:

**Consent flags** (in `profiles` or `organizations`):
```sql
ALTER TABLE profiles ADD COLUMN consent_for_personalization BOOLEAN DEFAULT FALSE;
ALTER TABLE profiles ADD COLUMN consent_for_ai_recommendations BOOLEAN DEFAULT FALSE;
```

**Audit logging** (track all writes for compliance):
```sql
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id),
  user_id UUID REFERENCES auth.users(id),
  action TEXT NOT NULL, -- 'INSERT', 'UPDATE', 'DELETE'
  table_name TEXT NOT NULL,
  record_id UUID,
  old_data JSONB,
  new_data JSONB,
  occurred_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_audit_logs_org ON audit_logs(organization_id, occurred_at);
```

**Data minimization** (separate PII from behavioral analytics):
- `profiles` table: Name, email, avatar (identifiable)
- `events` table: No raw PII in `properties` field (use user_id reference instead)
- Aggregated metrics: Daily/weekly summaries, no individual records

**RLS for personalization data**:
```sql
-- Users can only see their own personalization settings
CREATE POLICY "Users see own profile"
ON profiles FOR SELECT
USING (id = auth.uid());

CREATE POLICY "Users update own profile"
ON profiles FOR UPDATE
USING (id = auth.uid());
```

## Real-World Example: Building a Habit Tracker Backend

Let me walk you through a real Supabase MCP session.

**Context**: We validated demand for a habit tracker that supports both personal use and team accountability (e.g., fitness coaches tracking client habits).

**Step 1: Query Supabase MCP**

**Prompt**:
> "Design a Supabase backend for a habit tracking app. Users should have personal workspaces and be able to join team organizations. Include tables for habits, check-ins, and streaks. Add analytics tables for events and sessions. Enforce RLS for multi-tenancy. Include Edge Functions for org creation and invites."

**MCP Response** (summarized):
- Core schema: `profiles`, `organizations`, `organization_members`
- Domain schema: `habits`, `habit_check_ins`, `streaks`
- Analytics schema: `sessions`, `events`, `feature_flags`
- RLS policies: Organization membership checks, role-based access
- Edge Functions: `create-personal-org`, `invite-member`, `log-event`
- Migrations: Versioned SQL scripts
- Security checklist: No public access, audit logging, consent flags

**Time to generate**: ~2 minutes.

**Step 2: Review and Refine**

We reviewed the schema and added:
- `archived_at` field to `habits` (soft delete)
- `notes` field to `habit_check_ins` (reflection journal)
- `milestone_reached` event (for gamification)
- Index on `(user_id, checked_at)` for streak calculation

**Step 3: Save as `/docs/engineering/SUPABASE-habit-tracker.md`**

Full documentation with schema, RLS policies, Edge Functions, and security checklist.

**Step 4: Generate Migration Scripts**

Using the schema from the doc, we created migration files:

**`supabase/migrations/20250101_initial_schema.sql`**:
```sql
-- Run all CREATE TABLE, CREATE INDEX, and ALTER TABLE statements
```

**`supabase/migrations/20250101_rls_policies.sql`**:
```sql
-- Enable RLS and create all policies
```

**`supabase/migrations/20250101_triggers.sql`**:
```sql
-- Create update_updated_at function and triggers
```

**Step 5: Seed Data for Local Development**

**`supabase/seed.sql`**:
```sql
-- Create test users
INSERT INTO auth.users (id, email) VALUES 
  ('user-1-uuid', 'alice@example.com'),
  ('user-2-uuid', 'bob@example.com');

-- Create profiles
INSERT INTO profiles (id, full_name) VALUES
  ('user-1-uuid', 'Alice'),
  ('user-2-uuid', 'Bob');

-- Create personal orgs
INSERT INTO organizations (id, name, slug, is_personal, owner_user_id) VALUES
  ('org-1-uuid', 'Alice Workspace', 'alice', TRUE, 'user-1-uuid'),
  ('org-2-uuid', 'Bob Workspace', 'bob', TRUE, 'user-2-uuid');

-- Add memberships
INSERT INTO organization_members (organization_id, user_id, role) VALUES
  ('org-1-uuid', 'user-1-uuid', 'owner'),
  ('org-2-uuid', 'user-2-uuid', 'owner');

-- Create sample habits
INSERT INTO habits (organization_id, created_by, name) VALUES
  ('org-1-uuid', 'user-1-uuid', 'Morning meditation'),
  ('org-2-uuid', 'user-2-uuid', 'Exercise');
```

**Step 6: Deploy and Test**

```bash
# Run migrations locally
supabase db reset

# Test RLS policies (try to access other user's data)
# Should fail with RLS error

# Deploy to production
supabase db push
```

**Total time from MCP query to deployed backend**: ~4 hours (including testing).

**Compare to manual design**: Would have taken 2-3 weeks, with multiple rounds of "oops, forgot to add organization_id" migrations.

## Practical Application: How to Use Supabase MCP

Here's how to integrate this into your workflow:

### 1. Install Supabase MCP in Your Environment

If using Cursor or another AI coding tool with MCP support:

```bash
# Add Supabase MCP server to your MCP config
```

Or use the web interface / Supabase docs directly.

### 2. Create a Template for Backend Specs

Save our template at `docs/templates/SUPABASE-TEMPLATE.md`:

```markdown
# Supabase Backend Spec — <project-slug>

## 1. Tenancy Model
[Describe personal workspaces, organizations, roles]

## 2. Core Schema (Auth & Tenancy)
[profiles, organizations, organization_members]

## 3. Domain Schema (App-Specific)
[Your app's tables]

## 4. Analytics Schema
[sessions, events, feature_flags]

## 5. RLS Policies
[One policy block per table]

## 6. Edge Functions + Triggers
[create-personal-org, invite-member, etc.]

## 7. Privacy & Personalization
[Consent flags, audit logs, data minimization]

## 8. Migrations
[Link to migration files]

## 9. Security Checklist
- [ ] RLS enabled on all tables
- [ ] No hardcoded secrets
- [ ] Audit logging for writes
- [ ] Consent flags for personalization
- [ ] Service role used only in Edge Functions
```

### 3. Query MCP for Each New Backend

When starting a new product:

**Prompt**:
> "Design a Supabase backend for [app description]. [Tenancy requirements]. Include analytics tables. Enforce RLS. Provide Edge Function recommendations."

Copy the response into the template, review, refine.

### 4. Generate Migrations from the Spec

Once the spec is approved:

```bash
# Create migration files
supabase migration new initial_schema
supabase migration new rls_policies
supabase migration new triggers
```

Copy SQL from the spec into the migration files.

### 5. Seed Data for Testing

Create `seed.sql` with 2-3 test users, organizations, and sample data.

### 6. Deploy and Verify

```bash
# Local testing
supabase db reset  # Runs migrations + seed
supabase start

# Test RLS (try to access other user's data)
# Should return empty or error

# Deploy to production
supabase db push
```

### 7. Reference in Dev Quality Plan

Link the Supabase spec in your Dev Quality Plan:

```markdown
## Data Layer

**Supabase Spec**: `/docs/engineering/SUPABASE-habit-tracker.md`

**Key tables**: habits, habit_check_ins, streaks
**RLS verified**: ✅ (see migration 20250101_rls_policies.sql)
**Analytics events**: habit_created, habit_completed, streak_extended
```

## Real-World Results

Since adopting the Supabase MCP blueprint (6 months ago):

**Time savings**:
- Backend design: 2-4 hours (was 1-2 weeks)
- RLS policy creation: 30 minutes (was 1-2 days + bugs)
- Migration generation: 1 hour (was 3-4 hours)
- **Total**: ~3 days saved per product

**Quality improvements**:
- Zero RLS data leaks in production (was 2-3 per quarter)
- Zero migration rollbacks (was 1-2 per quarter)
- Analytics from day one (was added 3-6 months later)
- Audit logging built-in (was never added before)

**Confidence**:
- Know the schema is normalized and scalable
- Know RLS is enforced correctly
- Know analytics will support retention analysis
- Know privacy requirements are met

## Trade-Offs and Limitations

The Supabase MCP blueprint isn't perfect:

**Requires Supabase**:
- If you're using a different backend (Firebase, raw Postgres, MongoDB), this pattern doesn't apply directly
- You're locked into Supabase's conventions and pricing

**MCP is Still New**:
- Not all AI coding tools support MCP yet
- Documentation quality varies by provider
- May generate outdated patterns if not regularly updated

**Upfront Design Time**:
- 2-4 hours per product to create the spec
- For tiny MVPs, this might feel like overkill
- Need to resist urge to "just start coding"

**Not a Silver Bullet**:
- MCP gives you a good starting point, but you still need to review and refine
- Edge cases (complex permissions, multi-level hierarchies) require manual design
- Performance tuning (indexes, query optimization) still requires expertise

**Requires Schema Discipline**:
- Once you've deployed, schema changes require migrations
- If you skip the spec and "figure it out as you go," you lose the benefits
- Need to resist adding `organization_id` retroactively

### When to Skip It

Use a lighter approach for:
- **Internal tools** (no multi-tenancy needed)
- **Prototypes** (throwaway code, not production)
- **Read-only apps** (no writes, no RLS needed)

But for any product with user data, multi-tenancy, or analytics requirements, the spec pays for itself.

## Takeaways

Here's what to remember about the Supabase MCP blueprint:

1. **MCP as Design Assistant**: Query latest docs and best practices instead of Googling and trial-and-error.

2. **7-Section Spec**: Tenancy model, core schema, domain schema, analytics schema, RLS policies, Edge Functions, privacy addendum.

3. **Multi-Tenancy from Day One**: Personal workspaces + team organizations, enforced via `organization_id` on every table.

4. **RLS is Mandatory**: Enable on ALL tables, use `auth.uid()` + org membership checks, role-based policies where needed.

5. **Analytics Built-In**: Sessions, events (canonical taxonomy), feature flags, daily metrics. Track retention from day one.

6. **Privacy by Design**: Consent flags, audit logging, PII separation. Design for AI personalization without being creepy.

7. **Migrations + Seeds**: Versioned schema changes, test data for local development.

8. **Security Checklist**: No public access, service role only in Edge Functions, secrets in env vars.

## What's Next?

We're continuing to evolve the Supabase MCP workflow:

- **Schema visualization**: Auto-generate ER diagrams from the spec
- **RLS testing**: Automated tests that attempt cross-org data access
- **Analytics queries**: Pre-built SQL for DAU/WAU/MAU, retention curves, funnel analysis
- **Template library**: Reusable schema patterns (e-commerce, CMS, SaaS, marketplace)

**Backend design is usually trial-and-error. We turned it into a repeatable blueprint.**

If you're building SaaS products on Supabase, I encourage you to adopt the MCP blueprint pattern. Start with the 7-section template, query MCP for your specific app, generate migrations, and ship with confidence.

What if you never had to refactor your backend because you designed it right the first time? That's the promise of systematic backend design.

