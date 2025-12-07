---
title: "The Hub Evolution: From Static Docs to Real-Time Portfolio Intelligence"
description: "Most docs systems are graveyards. Ours is a living strategy layer that surfaces portfolio status, filters ideas, and drives kill/greenlight decisions."
publishedAt: "2025-12-02T00:00:00.000Z"
category: "Product Creation"
tags: "portfolio-management, documentation, dashboard, product-development"
---

# The Hub Evolution: From Static Docs to Real-Time Portfolio Intelligence

## Most docs systems are graveyards. Ours is a living strategy layer.

I used to dread documentation.

We'd write comprehensive PRDs, discovery docs, validation plans, and ADRs—all beautifully formatted in Notion or Google Docs. Then they'd sit there, forgotten, while we built the product.

Six months later, a new team member would ask "Why did we build it this way?" and we'd scramble to find the doc. If we found it, it was outdated. The decisions had evolved, but the docs hadn't.

Documentation felt like a compliance exercise, not a strategic asset.

But here's the thing: **the problem wasn't that we documented too much—it was that documentation was static**.

We've built the opposite: **The Hub**—a living, real-time portfolio dashboard that surfaces every idea, every doc, every validation result, and every verdict in one searchable interface.

The Hub isn't a graveyard of forgotten docs. It's the **control center** for our entire SaaS creation pipeline. It answers three critical questions at a glance:

1. **What ideas do we have?** (Portfolio scores, verdicts, priority labels)
2. **Where are they in the pipeline?** (Discovery, Validation, Build, Scale)
3. **What should we work on next?** (Filters: Top Priority, Proceed, Pivot)

In this article, I'll show you exactly how we built the Hub, why it's become our most-used tool, and how you can create a similar system for your own portfolio.

## The Problem: Docs as a Dumping Ground

Let's start with why most documentation systems fail.

### The Typical Pattern

**Phase 1: Enthusiasm**

Team decides "we need better docs!" Everyone agrees. Someone sets up a Notion workspace or Confluence wiki.

**Phase 2: Initial Effort**

The first few projects get comprehensive documentation:
- Discovery notes
- PRDs
- Technical specs
- Meeting notes
- Retrospectives

It feels organized. Leadership is happy.

**Phase 3: Decay**

New projects start. People are busy. Docs get abbreviated:
- "TODO: Fill this in later"
- Copy-paste templates with placeholders
- Quick notes in Slack that never make it to the wiki
- "It's documented in the code comments"

**Phase 4: Abandonment**

Docs are now half-complete, inconsistent, and outdated. Searching returns nothing useful. Engineers stop checking docs before building. Product managers re-ask questions that were already documented.

The wiki becomes a graveyard.

### Why This Fails

**No Single Source of Truth**: Docs scattered across Notion, Google Docs, Slack threads, GitHub issues, Figma comments. No one knows where to look.

**No Connection to Code**: Docs live in isolation. You can't see which features have docs, which don't, or which docs are outdated.

**No Status Visibility**: You can't answer "how many ideas are in validation?" or "which projects passed the heat filter?" without manually auditing every folder.

**No Decision Support**: Docs don't surface verdicts. You have to read the full discovery doc to find the Opportunity Score, read the validation plan to find the thresholds, read the results doc to see if they passed.

**No Prioritization**: All ideas look equally important in a flat file structure. No way to filter by score, verdict, or priority.

**No Search**: Most wikis have terrible search. Keyword searches return dozens of irrelevant results. No way to filter by doc type or project status.

### The Result: Tribal Knowledge

When docs fail, knowledge lives in people's heads:
- "Ask Sarah about the pricing strategy"
- "Check Slack for the original requirements"
- "I think we validated that idea but I'm not sure"

Onboarding new team members takes weeks. Critical decisions get re-litigated because no one remembers the original reasoning. The process isn't repeatable.

## The Solution: The Hub as a Living Dashboard

We built the Hub (`/app/(product)/hub/page.tsx`) to solve all of these problems in one interface.

### The Core Concept

**The Hub is a portfolio dashboard that automatically discovers, indexes, and surfaces all documentation**.

It doesn't replace docs—it makes them **findable, filterable, and actionable**.

### What the Hub Shows

**1. Project Cards** (one per idea):

```
┌─────────────────────────────────────────┐
│ 🎯 Habit Tracker for Remote Workers    │
│                                         │
│ Score: 32/40 ⭐⭐⭐⭐⭐ Top Priority    │
│ Verdict: ✅ PROCEED                     │
│                                         │
│ 📂 Discovery: 4/4 docs                 │
│ 📂 Validation: 7/7 docs                 │
│ 📂 Build: 3/8 docs (in progress)        │
│                                         │
│ [View Details →]                        │
└─────────────────────────────────────────┘
```

Each card shows:
- **Project name** (from folder or portfolio score doc)
- **Portfolio score** (0-40, with visual stars)
- **Priority label** ("Top Priority" ≥30, "High Priority" 25-29, "Medium" 20-24)
- **Verdict badge** (PROCEED = green, PIVOT = yellow, KILL = red)
- **Doc counts** per phase (Discovery, Validation, Build)
- **Link to detail view** (full list of docs)

**2. Filter Buttons** (top of page):

```
┌─────────────────────────────────────────┐
│ [All Ideas: 16]  [⭐ Top Priority: 7]   │
│ [✅ Proceed: 7]  [⚠️ Pivot: 9]          │
└─────────────────────────────────────────┘
```

Clicking a filter updates the project list instantly:
- **All Ideas**: Show everything
- **Top Priority**: Score ≥30
- **Proceed**: Verdict = PROCEED
- **Pivot**: Verdict = PIVOT or KILL

**3. Search Bar** (coming soon):

```
[🔍 Search projects, docs, or workflows...]
```

Full-text search across all documentation.

### How the Hub Works (Under the Hood)

**Step 1: Automatic Document Discovery**

The Hub API (`/app/api/hub/projects/route.ts`) scans the filesystem:

```typescript
// Scan /projects folder for project directories
const projectFolders = fs.readdirSync('projects');

// Scan /docs/portfolio for portfolio score files
const portfolioScores = fs.readdirSync('docs/portfolio');

// For each project, find all docs
const projects = projectFolders.map(folder => {
  const discoveryDocs = findDocs(`projects/${folder}`, 'discovery');
  const validationDocs = findDocs(`projects/${folder}`, 'validation');
  const buildDocs = findDocs(`projects/${folder}`, 'build');
  
  return {
    slug: folder,
    discoveryDocs,
    validationDocs,
    buildDocs
  };
});
```

**Step 2: Extract Metadata from Docs**

For each portfolio score doc, extract:

```typescript
// Read PORTFOLIO-SCORE-<slug>.md
const content = fs.readFileSync(`docs/portfolio/PORTFOLIO-SCORE-${slug}.md`, 'utf-8');

// Extract score (regex: "## Score: 32/40")
const scoreMatch = content.match(/## Score:\s*(\d+)\/40/);
const score = scoreMatch ? parseInt(scoreMatch[1]) : null;

// Extract verdict (regex: "### Verdict: ✅ **PROCEED**")
const verdictMatch = content.match(/### Verdict:\s*[✅⚠️❌]?\s*\*?\*?([A-Z]+)\*?\*?/i);
const verdict = verdictMatch ? verdictMatch[1].toUpperCase() : null;

// Return structured data
return {
  slug,
  name: extractTitle(content),
  score,
  verdict,
  docs: { discovery, validation, build }
};
```

**Step 3: Compute Priority Labels**

```typescript
function getPriorityLabel(score: number) {
  if (score >= 30) return { label: 'Top Priority', color: 'green', stars: 5 };
  if (score >= 25) return { label: 'High Priority', color: 'blue', stars: 4 };
  if (score >= 20) return { label: 'Medium Priority', color: 'yellow', stars: 3 };
  return { label: 'Low Priority', color: 'gray', stars: 2 };
}
```

**Step 4: Sort by Score (Highest First)**

```typescript
projects.sort((a, b) => (b.score || 0) - (a.score || 0));
```

**Step 5: Return JSON to Frontend**

```typescript
return Response.json({ projects });
```

**Step 6: Frontend Filters and Renders**

```typescript
// Filter based on active filter
const filteredProjects = projects.filter(project => {
  if (activeFilter === 'all') return true;
  if (activeFilter === 'priority') return project.score >= 30;
  if (activeFilter === 'proceed') return project.verdict === 'PROCEED';
  if (activeFilter === 'pivot') return project.verdict === 'PIVOT' || project.verdict === 'KILL';
  return true;
});

// Render project cards
{filteredProjects.map(project => (
  <ProjectCard key={project.slug} project={project} />
))}
```

### The Detail View (Coming Soon)

Clicking "View Details" on a project card will open:

**Full doc list** (grouped by phase):

```
┌─────────────────────────────────────────┐
│ 📊 Habit Tracker for Remote Workers    │
│                                         │
│ Discovery (4/4):                        │
│  ✅ NICHE-INTEL-habit-tracker.md       │
│  ✅ PAIN-SIGNALS-habit-tracker.md       │
│  ✅ JTBD-habit-tracker.md               │
│  ✅ OPPORTUNITY-habit-tracker.md        │
│                                         │
│ Validation (7/7):                       │
│  ✅ VALIDATION-PLAN-habit-tracker.md    │
│  ✅ LANDING-habit-tracker.md            │
│  ✅ DISTRIBUTION-habit-tracker.md       │
│  ✅ PRICING-TEST-habit-tracker.md       │
│  ✅ CREATIVE-BATCH-habit-tracker.md     │
│  ✅ RESULTS-habit-tracker.md            │
│  ✅ BRAND-SYSTEM-habit-tracker.md       │
│                                         │
│ Build (3/8):                            │
│  ✅ PRD-habits-crud.md                  │
│  ✅ ADR-habits-schema.md                │
│  ⏳ DEV-QUALITY-habits-crud.md (pending)│
│  ⏳ TEST-PLAN-habits-crud.md (pending)  │
│  ⏳ Implementation (pending)            │
└─────────────────────────────────────────┘
```

Clicking a doc name opens it in a viewer (markdown rendered, syntax highlighting).

## Real-World Impact: How the Hub Changed Our Workflow

Before the Hub (6 months ago):

**Portfolio management**:
- "How many ideas do we have?" → Count folders manually
- "Which ones are high priority?" → Open each portfolio score doc
- "Which passed validation?" → Search for RESULTS docs, read each one

**Time**: ~30 minutes to get portfolio overview

**Decision making**:
- Kill/greenlight meetings required pre-reading 5-10 docs
- Debate about "did we validate that?" (no quick answer)
- Re-scoring ideas because we forgot the original score

**Onboarding**:
- New team member: "Where do I start?"
- Answer: "Read the Notion wiki, then check the projects folder, then ask if you have questions"
- Time to productivity: 2-3 weeks

After the Hub (current state):

**Portfolio management**:
- "How many ideas do we have?" → Look at Hub: 16 total
- "Which ones are high priority?" → Filter by "Top Priority": 7 ideas
- "Which passed validation?" → Filter by "Proceed": 7 ideas

**Time**: 10 seconds to get portfolio overview

**Decision making**:
- Kill/greenlight meetings start with Hub open (everyone sees same data)
- Click a project card to review docs on the spot
- Verdicts are visible—no need to re-litigate

**Onboarding**:
- New team member: "Where do I start?"
- Answer: "Open the Hub. Top priority ideas are in green. Click one, read the docs."
- Time to productivity: 3-5 days

**ROI**: ~25 hours/month saved on portfolio management + faster decisions + better onboarding.

## The Features We're Building Next

The current Hub is v1. Here's what's coming:

### 1. Full-Text Search

**Feature**: Search across all docs (not just project names).

**Use case**:
- "Where did we document the pricing strategy for the habit tracker?"
- Search: "pricing habit tracker"
- Result: `PRICING-TEST-habit-tracker.md` (highlighted snippet)

**Implementation**: Index all markdown files, use Fuse.js for fuzzy search.

### 2. Workflow Status

**Feature**: Show status of each workflow (Discovery → Validation → Build).

**Use case**: Visual progress bar showing which phase is active, which is complete, which is blocked.

**Implementation**: Parse checklist docs (`CHECKLIST-<slug>.md`), extract checkmark status.

### 3. Inline Doc Viewer

**Feature**: Click a doc to view it without leaving the Hub.

**Use case**: Review a PRD or validation plan while staying in portfolio context.

**Implementation**: Modal or side panel with markdown rendering, syntax highlighting.

### 4. Verdict History

**Feature**: Show how verdicts changed over time.

**Use case**: "We pivoted twice on this idea—why?"

**Implementation**: Parse git history for portfolio score files, show verdict timeline.

### 5. Collaboration Layer

**Feature**: Comments and @mentions on project cards.

**Use case**: "Hey @sarah, can you review the validation results for this idea?"

**Implementation**: Add a simple comment thread to each project (stored in database).

### 6. Analytics Dashboard

**Feature**: Portfolio health metrics.

**Use case**:
- "How many ideas did we kill this quarter?"
- "What's our average time from Discovery to Build?"
- "Which ideas have the highest scores but haven't moved to validation?"

**Implementation**: Aggregate data from Hub API, render charts with Recharts.

### 7. AI Summarization

**Feature**: Auto-generate project summaries using AI.

**Use case**: "Summarize the validation results for this idea in 3 bullets."

**Implementation**: Use Claude API to summarize key docs on demand.

## How to Build Your Own Hub

Here's how to create a similar portfolio dashboard:

### Step 1: Choose a Documentation Structure

**Recommended structure**:

```
/docs
  /portfolio         (portfolio score docs)
  /discovery         (niche intel, pain signals, JTBD, opportunity)
  /validation        (validation plan, landing, results, etc.)
  /brand             (brand system blueprints)
  /engineering       (PRDs, ADRs, dev quality plans, test plans)
  /analytics         (PostHog plans, event taxonomy)

/projects
  /idea-slug-1
    (docs can also live here, per-project)
  /idea-slug-2
  ...
```

**Key principle**: Consistent naming conventions (e.g., `PORTFOLIO-SCORE-<slug>.md`, `NICHE-INTEL-<slug>.md`).

### Step 2: Build an API to Scan Docs

**Tech stack** (our choice):
- Next.js App Router (server components)
- Node.js `fs` module to scan filesystem
- Regex to extract metadata (score, verdict, titles)

**Endpoints**:
- `GET /api/hub/projects` → List all projects with metadata
- `GET /api/hub/projects/[slug]` → Get one project with full doc list
- `GET /api/hub/docs/[path]` → Render a specific doc

**Example API route** (simplified):

```typescript
// /app/api/hub/projects/route.ts
import fs from 'fs';
import path from 'path';

export async function GET() {
  const portfolioDir = path.join(process.cwd(), 'docs/portfolio');
  const files = fs.readdirSync(portfolioDir);
  
  const projects = files
    .filter(file => file.startsWith('PORTFOLIO-SCORE-'))
    .map(file => {
      const content = fs.readFileSync(path.join(portfolioDir, file), 'utf-8');
      const slug = file.replace('PORTFOLIO-SCORE-', '').replace('.md', '');
      
      // Extract score
      const scoreMatch = content.match(/## Score:\s*(\d+)\/40/);
      const score = scoreMatch ? parseInt(scoreMatch[1]) : null;
      
      // Extract verdict
      const verdictMatch = content.match(/### Verdict:\s*[✅⚠️❌]?\s*\*?\*?([A-Z]+)\*?\*?/i);
      const verdict = verdictMatch ? verdictMatch[1].toUpperCase() : null;
      
      return { slug, score, verdict };
    })
    .sort((a, b) => (b.score || 0) - (a.score || 0));
  
  return Response.json({ projects });
}
```

### Step 3: Build the Frontend

**Tech stack** (our choice):
- React + TypeScript
- Tailwind CSS for styling
- Server components for fast initial load

**Key components**:
- `<ProjectCard>`: Displays one project with score, verdict, doc counts
- `<FilterButtons>`: Toggles between All/Priority/Proceed/Pivot
- `<ProjectList>`: Maps filtered projects to cards

**Example component** (simplified):

```tsx
// /app/(product)/hub/page.tsx
export default async function HubPage() {
  const res = await fetch('/api/hub/projects');
  const { projects } = await res.json();
  
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = projects.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'priority') return p.score >= 30;
    if (filter === 'proceed') return p.verdict === 'PROCEED';
    if (filter === 'pivot') return p.verdict === 'PIVOT' || p.verdict === 'KILL';
    return true;
  });
  
  return (
    <div>
      <FilterButtons active={filter} onChange={setFilter} />
      
      <div className="grid grid-cols-3 gap-4">
        {filteredProjects.map(project => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
```

### Step 4: Add Metadata Extraction

To show doc counts and status, parse each folder:

```typescript
function getDocCounts(slug: string) {
  const discoveryDir = `docs/discovery`;
  const validationDir = `docs/validation`;
  
  const discoveryDocs = fs.readdirSync(discoveryDir)
    .filter(file => file.includes(slug));
  
  const validationDocs = fs.readdirSync(validationDir)
    .filter(file => file.includes(slug));
  
  return {
    discovery: discoveryDocs.length,
    validation: validationDocs.length
  };
}
```

### Step 5: Implement Filters

Client-side filtering (fast, no network request):

```typescript
const [activeFilter, setActiveFilter] = useState('all');

const filteredProjects = useMemo(() => {
  return projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'priority') return project.score >= 30;
    if (activeFilter === 'proceed') return project.verdict === 'PROCEED';
    if (activeFilter === 'pivot') return ['PIVOT', 'KILL'].includes(project.verdict);
    return true;
  });
}, [projects, activeFilter]);
```

### Step 6: Polish the UI

**Verdict badges**:
```tsx
function VerdictBadge({ verdict }: { verdict: string }) {
  if (verdict === 'PROCEED') {
    return <span className="badge bg-green-500">✅ PROCEED</span>;
  }
  if (verdict === 'PIVOT') {
    return <span className="badge bg-yellow-500">⚠️ PIVOT</span>;
  }
  if (verdict === 'KILL') {
    return <span className="badge bg-red-500">❌ KILL</span>;
  }
  return null;
}
```

**Priority stars**:
```tsx
function PriorityStars({ score }: { score: number }) {
  const stars = score >= 30 ? 5 : score >= 25 ? 4 : score >= 20 ? 3 : 2;
  return <span>{'⭐'.repeat(stars)}</span>;
}
```

### Step 7: Deploy and Iterate

**Deploy**: Vercel, Netlify, or any Next.js-compatible platform

**Iterate**:
- Add search (Fuse.js or Algolia)
- Add doc viewer (react-markdown)
- Add analytics (chart lib like Recharts)
- Add collaboration (comments, @mentions)

## Real-World Results

Since launching the Hub (3 months ago):

**Usage**:
- 100% of team opens Hub daily (vs. ~20% opening Notion wiki)
- Average session: 8 minutes (browsing projects, reviewing docs)
- Most-used filter: "Top Priority" (helps focus on high-value ideas)

**Efficiency**:
- Portfolio overview: 10 seconds (was 30 minutes)
- Kill/greenlight meetings: 15 minutes (was 60 minutes)
- Onboarding time: 3-5 days (was 2-3 weeks)

**Decision quality**:
- Verdicts are visible → Less re-litigation of past decisions
- Scores drive focus → Top priority ideas get resources
- Doc counts surface gaps → "We have 4/7 validation docs—need to finish"

**ROI**: ~25 hours/month saved + faster decisions + better onboarding = ~$5,000/month value (for a 3-person team).

## Trade-Offs and Limitations

The Hub isn't perfect:

**Requires Consistent Naming**:
- If docs don't follow naming conventions (`PORTFOLIO-SCORE-<slug>.md`), the Hub can't find them
- Need discipline to maintain structure

**Filesystem-Based (Not Database)**:
- Scanning files is slower than querying a database
- No support for real-time updates (need to refresh page)
- Hard to add rich features (comments, version history)

**Limited Search (Currently)**:
- Only project names and slugs (no full-text search yet)
- No filtering by doc type or content

**No Collaboration Features**:
- Can't @mention teammates
- Can't comment on projects
- No notifications for doc updates

**Requires Build Step**:
- Next.js App Router = need to deploy to update
- Can't edit docs in the Hub (must edit markdown files)

### When to Skip It

Don't build a Hub if:
- You have < 5 ideas (a simple folder structure is fine)
- Your docs are already in a tool with good search (Notion, Confluence)
- You're a solo founder (the overhead isn't worth it)

But if you have 10+ ideas, multiple phases, and a need for portfolio visibility, the Hub is transformative.

## Takeaways

Here's what to remember about the Hub:

1. **Docs as Data, Not Artifacts**: Extract metadata (scores, verdicts, status) and surface it in a dashboard.

2. **Automatic Discovery**: Scan the filesystem, don't require manual entry. Docs drive the UI.

3. **Filters for Focus**: "Top Priority," "Proceed," "Pivot" filters help teams focus on high-value ideas.

4. **Single Source of Truth**: All projects, all docs, one interface. No more Slack threads or tribal knowledge.

5. **Decision Support**: Verdicts, scores, and doc counts answer "what should we work on next?" at a glance.

6. **Consistent Naming**: Naming conventions (`PORTFOLIO-SCORE-<slug>.md`) make automation possible.

7. **Iterate Incrementally**: Start simple (project cards + filters), add features over time (search, viewer, analytics).

## What's Next?

We're continuing to evolve the Hub:

- **Full-text search** across all docs
- **Workflow status** (visual progress bars)
- **Inline doc viewer** (read without leaving Hub)
- **Analytics dashboard** (portfolio health metrics)
- **AI summarization** (auto-generate project summaries)

**Most docs systems are graveyards. Ours is a living strategy layer.**

If you're managing multiple product ideas, I encourage you to build a portfolio dashboard. Start with automatic doc discovery, add filters for priority/verdict, and iterate from there.

What if your documentation drove decisions instead of gathering dust? That's the promise of the Hub.

