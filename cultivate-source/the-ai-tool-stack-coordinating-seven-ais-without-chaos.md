---
title: "The AI Tool Stack: How We Coordinate 7 AIs Without Chaos"
description: "Using multiple AI tools sounds like a nightmare. Here's how we orchestrate Manus, ChatGPT, Claude, ElevenLabs, Midjourney, Glif, and Lindy with clear lanes and zero overlap."
publishedAt: "2025-12-02T00:00:00.000Z"
category: "AI & Automation"
tags: "ai-tools, orchestration, workflow, automation, productivity"
---

# The AI Tool Stack: How We Coordinate 7 AIs Without Chaos

## Using multiple AI tools sounds like a nightmare. Here's how we orchestrate them with clear lanes and zero overlap.

Here's a mistake I see constantly: teams adopt ChatGPT, then Claude, then Midjourney, then whatever's trending on Twitter this week. Each tool gets used ad-hoc, with no clear boundaries. The result?

- **Tool overlap**: Three different AIs doing the same research, wasting time and money
- **Inconsistent outputs**: ChatGPT generates a narrative, Claude rewrites it differently, no one knows which to use
- **Context loss**: Information gets trapped in tool-specific conversations, never making it to the system of record
- **Credit drain**: Redundant queries burn through API budgets
- **Decision paralysis**: "Should I use ChatGPT or Claude for this? Or maybe Manus?"

We've built the opposite: **a coordinated AI tool stack with clear lanes, explicit handoffs, and systematic routing**.

Each tool has a single purpose. No overlap. Information flows through a documented pipeline. Cursor remains the system of record. And we route tasks to the right tool based on what they're best at.

In this article, I'll show you exactly how we orchestrate 7 different AI tools, the routing rules we follow, the quality gates we enforce, and how we prevent chaos while maximizing the unique strengths of each tool.

## The Problem: AI Tool Chaos

Let's start with why multi-tool workflows usually fail.

### The Typical Pattern

**Month 1**: Team discovers ChatGPT. Everyone uses it for everything. It's amazing.

**Month 2**: Someone tries Claude. "This is better for some things!" Now half the team uses ChatGPT, half uses Claude. No one knows which to use when.

**Month 3**: Midjourney for images. ElevenLabs for voice. Glif for workflows. Each tool gets adopted because it's "the best for X," but no one defines X clearly.

**Month 4**: Chaos.
- Marketing uses ChatGPT for landing copy
- Product uses Claude for landing copy
- They produce different versions, debate which is better
- Engineering uses GitHub Copilot, which suggests different patterns
- No one knows which output is canonical

**Month 5**: Someone suggests "let's just pick one tool."
- But each tool is legitimately better at different tasks
- Consolidating means losing capabilities
- The team is stuck

### Why This Fails

**No Clear Boundaries**: If two tools can do the same thing, people will use both. Then outputs diverge, and you waste time reconciling.

**No Routing Logic**: "Use ChatGPT for ideation, Claude for critique" sounds good, but what counts as "ideation"? Where's the line?

**No Handoff Protocol**: ChatGPT generates a narrative. Now what? Does it go straight to the landing page? Does Claude review it first? Does a human edit? Who decides?

**No System of Record**: Outputs live in ChatGPT conversations, Claude threads, Midjourney galleries. Nothing makes it to the repo. Knowledge is tribal.

**No Cost Management**: APIs charge per token. Without routing logic, teams over-query expensive models for simple tasks.

### The Result: Expensive, Inconsistent, Chaotic

Multi-tool workflows become an expensive mess. Outputs are inconsistent. Decisions get re-litigated. Critical information lives in chat logs that no one can find six months later.

## The Solution: Tool Lanes + Routing Rules + System of Record

Our approach (Rule 190: `190-ai-tool-integrations.mdc` + Rule 002: `002-model-routing.mdc`) defines **clear lanes, explicit routing, and Cursor as the single source of truth**.

### The Core Principles

**1. Tool Lanes (No Overlap)**

Each tool has a single, non-overlapping purpose:

| Tool | Primary Purpose | Never Used For |
|------|----------------|----------------|
| **Manus.im** | Niche narrative research, pain mining, JTBD seeds, competitor analysis | Final copy, code generation, image creation |
| **ChatGPT** | Rapid ideation, variant generation, clustering, prompt expansion | Deep critique, final polish, source-of-truth synthesis |
| **Claude** | Critical review, editorial polish, reasoning-heavy tradeoffs, consistency audits | Breadth exploration, rapid iteration, batch generation |
| **ElevenLabs** | Founder voice, persona voice, demo narration | Music, sound effects, background audio |
| **Midjourney** | Polished brand visuals, hero images, final marketing assets | Rough drafts, batch generation, UI mockups |
| **Glif** | Creative batching, rapid draft generation, ad variants | Final polish, brand-defining assets, deterministic logic |
| **Lindy AI** | Execution automation (waitlist nurture, DM outreach, metrics logging) | Source-of-truth docs, core product logic, CI/CD |

**Key insight**: If two tools can do the same thing, pick one and ban the other for that use case.

**2. Model Routing (ChatGPT vs Claude)**

The most common overlap is ChatGPT vs Claude. Here's how we route:

**Use ChatGPT for**:
- **Breadth over depth**: Exploring 10 different angles, not perfecting one
- **Rapid iteration**: Generate 20 headline variants in 2 minutes
- **Clustering**: Group similar pain signals, organize themes
- **Prompt expansion**: Turn "meditation app" into 5 Midjourney-ready prompts

**Use Claude for**:
- **Critique over creation**: Red-team a PRD, challenge assumptions
- **Polish over drafts**: Refine landing copy from "good" to "great"
- **Reasoning over speed**: Analyze moat strategy tradeoffs
- **Consistency over novelty**: Audit docs for narrative alignment

**Mandatory Claude review**:
- Idea scores ≥ 7.5 (critical go/no-go decision)
- Public-facing copy finalization (landing pages, emails)
- Moat/strategy assumptions (opportunity analysis, competitive positioning)

**ChatGPT → Claude pipeline**:
```
Step 1: ChatGPT generates 10 headline variants
Step 2: Human picks top 3
Step 3: Claude refines top 3 for tone, clarity, impact
Step 4: Human picks final, saves to Cursor
```

**3. Cursor as System of Record**

**Critical rule**: AI tools generate drafts. Cursor stores finals.

**Workflow**:
1. External AI (Manus, ChatGPT, Claude) generates content
2. Human reviews and selects best output
3. **Cursor agent organizes** content into proper markdown structure
4. **Cursor agent saves** to canonical location (`/docs/discovery/`, `/docs/validation/`, etc.)
5. AI conversations are ephemeral; docs in Cursor are permanent

**Why this matters**:
- Git history tracks every decision
- Search works (grep markdown files, don't search ChatGPT logs)
- Onboarding is easy (read docs, not chat threads)
- Context persists (open a doc 6 months later, all context is there)

**4. Explicit Handoffs (Not Ad-Hoc)**

Every tool-to-tool transition is documented:

**Discovery workflow**:
```
1. Manus.im → Research niche, pain signals, competitors
2. Cursor agent → Save as NICHE-INTEL-<slug>.md, PAIN-SIGNALS-<slug>.md
3. ChatGPT → Cluster pain signals into themes
4. Claude → Critique opportunity score, red-team assumptions
5. Cursor agent → Save final OPPORTUNITY-<slug>.md
```

**Landing page workflow**:
```
1. ChatGPT → Generate 10 headline variants
2. Claude → Refine top 3 for clarity and impact
3. Cursor agent → Save final headline in LANDING-<slug>.md
4. Glif → Generate 5 hero image concepts
5. Midjourney → Polish selected concept
6. Cursor agent → Save final image path in LANDING-<slug>.md
```

**Validation workflow**:
```
1. Demand Validator → Create validation plan in Cursor
2. Lindy AI → Execute tests (waitlist nurture, DM outreach)
3. Lindy AI → Log results to Sheets + RESULTS-<slug>.md
4. ChatGPT → Analyze results, identify patterns
5. Claude → Red-team interpretation, challenge conclusions
6. Cursor agent → Save final verdict in RESULTS-<slug>.md
```

## The Tool Stack: Deep Dive

Here's exactly how we use each tool and where it fits in the workflow.

### 1. Manus.im (Source-of-Truth Research)

**Purpose**: Niche narrative research, pain mining, JTBD exploration

**When to use**:
- Discovery phase (NICHE-INTEL, PAIN-SIGNALS, JTBD docs)
- Need to understand a community's language, pain points, and unmet needs
- Want synthesis from multiple sources (Reddit, forums, reviews)

**Workflow**:
1. Define research prompt: "Research the burned-out remote worker community. Find pain signals around productivity tools."
2. Manus returns: Narrative synthesis, pain quotes, JTBD seeds, competitor landscape
3. Cursor agent organizes into: `NICHE-INTEL-<slug>.md`, `PAIN-SIGNALS-<slug>.md`

**Never use Manus for**:
- Final copy (outputs are research synthesis, not polished marketing)
- Code generation (not designed for this)
- Image creation (text-only tool)

**Cost**: ~$50-100/month for unlimited research requests

**Integration**: Rule 190 (AI Tool Integrations), Discovery agents (Niche Intel, Pain Signal)

---

### 2. ChatGPT (Breadth & Speed)

**Purpose**: Rapid ideation, variant generation, clustering, prompt expansion

**When to use**:
- Need 10+ variants fast (headlines, CTAs, features, pricing tiers)
- Clustering pain signals or feedback themes
- Expanding prompts for Midjourney/Glif
- Light synthesis (not deep reasoning)

**Workflow examples**:

**Variant generation**:
```
Prompt: "Generate 20 headline variants for a habit tracker targeting burned-out remote workers. Emphasize calm, non-judgmental tone."
Output: 20 headlines in 30 seconds
Next: Human selects top 5 → Claude refines → Cursor saves final
```

**Clustering**:
```
Prompt: "Cluster these 50 pain signal quotes into 5-7 themes."
Output: Organized themes with representative quotes
Next: Cursor agent saves to PAIN-SIGNALS-<slug>.md
```

**Never use ChatGPT for**:
- Critical review (use Claude)
- Final polish (use Claude)
- Deep reasoning (use Claude)
- Source-of-truth synthesis (use Manus)

**Cost**: $20/month (ChatGPT Plus) or API usage ($0.002-0.03 per 1K tokens)

**Integration**: Rule 190 (AI Tool Integrations), Rule 002 (Model Routing)

---

### 3. Claude (Depth & Critique)

**Purpose**: Critical review, editorial polish, reasoning-heavy analysis

**When to use**:
- Mandatory: Idea scores ≥ 7.5, public copy finalization, strategy critique
- Optional: PRD review, validation plan red-teaming, technical tradeoffs

**Workflow examples**:

**Critique (mandatory for high-stakes decisions)**:
```
Context: Opportunity Score = 8.2, considering PROCEED verdict
Prompt: "Red-team this opportunity analysis. Challenge assumptions. What could we be missing?"
Output: Critical review, alternative interpretations, risk assessment
Next: Refine analysis based on Claude's critique → Cursor saves final
```

**Polish (mandatory for public copy)**:
```
Context: Landing page headline drafted by ChatGPT
Prompt: "Refine this headline for clarity, emotional impact, and brand voice (calm, non-judgmental)."
Output: 3 refined versions with rationale
Next: Human selects final → Cursor saves to LANDING-<slug>.md
```

**Never use Claude for**:
- Batch generation (slow, expensive compared to ChatGPT)
- Rapid iteration (use ChatGPT)
- Source research (use Manus)

**Cost**: $20/month (Claude Pro) or API usage (~$0.015 per 1K tokens)

**Integration**: Rule 002 (Model Routing), mandatory quality gate for critical decisions

---

### 4. ElevenLabs (Voice Assets)

**Purpose**: Founder voice, persona voice, demo narration

**When to use**:
- Validation phase: Record founder pitch, persona testimonials
- Demo videos: Narrate product walkthrough
- Landing page: Audio version of value prop (accessibility + engagement)

**Workflow**:
```
1. Write script (ChatGPT draft → Claude polish)
2. Generate voice in ElevenLabs (founder voice profile or persona voice)
3. Download MP3, save to /docs/validation/assets/<slug>/
4. Reference in LANDING-<slug>.md or VALIDATION-PLAN-<slug>.md
```

**Never use ElevenLabs for**:
- Music or background audio (use stock music libraries)
- Sound effects (use Freesound or similar)

**Cost**: $5-22/month depending on usage

**Integration**: Rule 190 (AI Tool Integrations), Landing Builder agent

---

### 5. Midjourney (Polished Brand Visuals)

**Purpose**: Final hero images, brand-defining visuals, marketing assets

**When to use**:
- Landing page hero image (final version)
- Brand mascot design (industry-appropriate character)
- Social media assets (high-quality, on-brand)

**Workflow**:
```
1. Define visual direction from brand system blueprint
2. ChatGPT expands into detailed Midjourney prompt
3. Generate 10-20 variants in Midjourney
4. Select 2-3 finalists
5. Refine with --stylize and --chaos parameters
6. Export high-res PNG, save to /docs/validation/assets/<slug>/
7. Reference in LANDING-<slug>.md or BRAND-SYSTEM-<slug>.md
```

**Never use Midjourney for**:
- Rough drafts (use Glif, it's faster)
- Batch generation (expensive, slow)
- UI mockups (use Figma or Glif)

**Cost**: $10-60/month depending on plan

**Integration**: Rule 190 (AI Tool Integrations), Visual Asset Agent, Brand Strategist

---

### 6. Glif (Creative Batching)

**Purpose**: Rapid draft generation, ad variants, creative exploration

**When to use**:
- Need 10-50 rough concepts fast (landing hero drafts, ad variations, social posts)
- Exploring visual directions (before committing to Midjourney polish)
- Simple micro-tools for validation (e.g., "generate value prop variations")

**Workflow**:
```
1. Create modular Glif workflow (single-purpose, variable-driven)
2. Input: Niche, pain, persona, visual style
3. Output: 10-50 rough drafts in minutes
4. Select top 3-5 → Refine in Midjourney or Canva
5. Save finals to /docs/validation/assets/<slug>/
```

**Never use Glif for**:
- Final polish (drafts only)
- Brand-defining assets (use Midjourney)
- Backend logic (Glif is creative tool, not app logic)

**Cost**: Free tier available, paid plans for higher usage

**Integration**: Rule 085 (Glif Integration), Creative Batch Operator agent

---

### 7. Lindy AI (Execution Automation)

**Purpose**: Waitlist nurture, DM outreach, metrics logging

**When to use**:
- Validation phase: Automate execution of validation tests
- Need to scale manual tasks (DM 100 people, nurture 500 waitlist signups)
- Real-time logging (results → Sheets + RESULTS-<slug>.md)

**Workflow**:
```
1. Demand Validator creates validation plan in Cursor
2. Distribution Operator outputs Lindy automation spec
3. Build Lindy workflow (triggers, actions, data fields)
4. Execute tests automatically
5. Lindy logs results to Sheets + updates RESULTS-<slug>.md
6. Daily summary sent to Slack
```

**Never use Lindy for**:
- Source-of-truth docs (Cursor remains canonical)
- Core product logic (app code, not automation)
- CI/CD (use GitHub Actions)

**Cost**: Variable (credit-based, optimize for batch operations)

**Integration**: Rule 090 (Lindy Integration), Demand Validator, Distribution Operator

---

## The Routing Decision Tree

Here's how to decide which tool to use:

```
START → Need content/assets?
  ├─ YES → What type?
  │   ├─ Research/synthesis → Manus.im
  │   ├─ Many variants fast → ChatGPT
  │   ├─ Critique/polish → Claude
  │   ├─ Voice/audio → ElevenLabs
  │   ├─ Polished visuals → Midjourney
  │   ├─ Rough drafts/batch → Glif
  │   └─ Execution/automation → Lindy AI
  │
  └─ NO → Organizing existing content?
      └─ Cursor agent (structure + save)
```

**For overlapping cases** (ChatGPT vs Claude):

```
Need text generation?
  ├─ Breadth (10+ variants) → ChatGPT
  ├─ Depth (1-3 refined) → Claude
  ├─ Critical decision (≥7.5 score) → ChatGPT draft → Claude critique
  └─ Public-facing copy → ChatGPT variants → Claude polish
```

## Quality Gates & Cost Management

### Quality Gates (Per Tool)

**Manus**:
- ✅ Research prompt includes niche, pain focus, desired synthesis
- ✅ Output saved to proper doc (NICHE-INTEL, PAIN-SIGNALS, JTBD)
- ✅ Citations logged (source URLs, dates)

**ChatGPT**:
- ✅ Used for breadth (variants, clustering, expansion)
- ✅ Not used for final polish (Claude handles that)
- ✅ Outputs fed to Claude for critique if score ≥ 7.5

**Claude**:
- ✅ Mandatory review for: scores ≥ 7.5, public copy, strategy
- ✅ Not used for batch generation (ChatGPT handles that)
- ✅ Critique documented in Cursor, not left in chat

**ElevenLabs**:
- ✅ Script polished before recording (ChatGPT → Claude)
- ✅ Voice profile matches brand tone
- ✅ Audio saved to /docs/validation/assets/<slug>/

**Midjourney**:
- ✅ Prompt expanded by ChatGPT, refined for Midjourney syntax
- ✅ Only used for final polish (Glif for drafts)
- ✅ Assets saved with prompt for reproducibility

**Glif**:
- ✅ Workflow is modular, single-purpose
- ✅ Used for drafts only (not finals)
- ✅ Top concepts refined in Midjourney/Canva

**Lindy**:
- ✅ Automation spec documented (triggers, actions, data fields)
- ✅ Fallback manual workflow provided
- ✅ Results logged to Cursor + Sheets

### Cost Management

**Track monthly spend per tool**:
```
Manus.im: $100/month (unlimited research)
ChatGPT Plus: $20/month (or API ~$50/month)
Claude Pro: $20/month (or API ~$30/month)
ElevenLabs: $22/month (Professional plan)
Midjourney: $30/month (Standard plan)
Glif: $20/month (Pro plan)
Lindy: Variable (~$50-100/month based on usage)

Total: ~$260-340/month for full stack
```

**Optimization strategies**:
- Use ChatGPT for batch tasks (cheaper than Claude)
- Use Glif for drafts (cheaper than Midjourney)
- Optimize Lindy workflows (batch operations, summarize when possible)
- Cache results (don't re-query same information)

**Set alerts**:
- API usage > $100/month → Review query patterns
- Midjourney > 500 images/month → Optimize prompts
- Lindy credits depleting fast → Optimize workflows

## Real-World Results

Since implementing coordinated AI tool stack (6 months ago):

**Efficiency**:
- Discovery phase: 8-12 hours (was 20-30 hours with ad-hoc tool use)
- Landing page copy: 2 hours (was 6-8 hours with back-and-forth between tools)
- Creative assets: 4 hours (was 12-15 hours with manual design)

**Quality**:
- Zero instances of "we used different tools and got conflicting outputs"
- 100% of high-stakes decisions (score ≥ 7.5) get Claude critique
- All docs saved to Cursor (no information lost in chat logs)

**Cost**:
- $260-340/month for 7-tool stack
- ROI: ~40 hours/month saved = ~$8,000/month value (at $200/hr)
- 30x return on investment

**Decision clarity**:
- Routing decision tree eliminates "which tool should I use?" paralysis
- Handoff protocols prevent context loss
- Cursor as system of record ensures knowledge persistence

## Practical Application: How to Implement This

Here's how to build your own coordinated AI tool stack:

### Step 1: Audit Current Tool Usage

List every AI tool you use. For each, answer:
- What is it best at?
- What should it never be used for?
- Does it overlap with another tool?

**If two tools overlap, pick one and ban the other for that use case.**

### Step 2: Define Tool Lanes

Create a table like ours:

| Tool | Primary Purpose | Never Used For |
|------|----------------|----------------|
| Tool A | ... | ... |
| Tool B | ... | ... |

Make it public. Share with the team. Enforce it in code review.

### Step 3: Build Routing Logic

For overlapping tools (like ChatGPT vs Claude), define routing rules:

```
If [breadth/variants] → Tool A
If [depth/critique] → Tool B
If [critical decision] → Tool A → Tool B pipeline
```

Document this in a "Model Routing" rule.

### Step 4: Designate a System of Record

Pick one place where final outputs live. For us: Cursor (git repo).

**Workflow**:
1. AI tool generates draft
2. Human reviews
3. Save to system of record (not left in AI chat)

### Step 5: Document Handoffs

For each workflow (Discovery, Validation, Build), map the tool-to-tool flow:

```
Step 1: [Tool A] → [Output]
Step 2: [Human review]
Step 3: [Tool B] → [Refined output]
Step 4: [Save to system of record]
```

Make this visible (diagram, checklist, or doc).

### Step 6: Add Quality Gates

For critical outputs, mandate review:
- High-stakes decisions → Claude critique
- Public-facing copy → Claude polish
- Final assets → Human approval

Add these as checks in your process (PR template, checklist, or code review).

### Step 7: Track Costs & Optimize

Monitor monthly spend per tool. Optimize:
- Use cheaper tools for batch tasks
- Cache results to avoid re-querying
- Set alerts for high usage

**Target**: <$500/month for 5-7 tool stack (reasonable for a small team/solo founder).

## Trade-Offs and Limitations

Coordinated AI tool stacks aren't free:

**Upfront Design Time**:
- Defining tool lanes takes 4-8 hours
- Building routing logic takes 2-4 hours
- Documenting handoffs takes 2-4 hours
- **Total**: ~10-15 hours initial investment

**Discipline Required**:
- Easy to slip into "I'll just use ChatGPT for this" (even though Claude is better)
- Need code review or process checks to enforce lanes
- New team members need training

**Tool Lock-In**:
- Once you design workflows around 7 tools, switching is hard
- If a tool shuts down or changes pricing, you have to refactor

**Doesn't Eliminate Human Judgment**:
- AI tools generate options, humans still choose
- Routing rules are guidelines, not absolutes
- Some edge cases require ad-hoc decisions

**Cost Adds Up**:
- $260-340/month is reasonable for a small team
- For solo founders bootstrapping, might be too much
- Need to optimize or cut tools if budget is tight

### When to Skip It

Don't build a multi-tool stack if:
- You're only using 1-2 AI tools (just use them, no coordination needed)
- Your budget is <$50/month (stick to free tiers)
- You're in pure exploration mode (coordination adds overhead)

But if you're using 3+ tools and outputs are inconsistent, coordination pays for itself immediately.

## Takeaways

Here's what to remember about coordinated AI tool stacks:

1. **Tool Lanes (No Overlap)**: Each tool has a single purpose. If two tools can do the same thing, pick one.

2. **Routing Rules**: ChatGPT for breadth, Claude for depth. Mandatory Claude review for critical decisions.

3. **System of Record**: Cursor stores finals. AI conversations are ephemeral.

4. **Explicit Handoffs**: Every tool-to-tool transition is documented (not ad-hoc).

5. **Quality Gates**: High-stakes decisions, public copy, strategy → Claude critique mandatory.

6. **Cost Management**: Track spend, optimize for cheaper tools where possible, set alerts.

7. **Discipline Over Chaos**: Lanes and routing prevent tool overlap and inconsistent outputs.

## What's Next?

We're continuing to refine our AI tool stack:

- **Context7 integration**: Query latest library docs for always-current code suggestions
- **Automated routing**: AI agent automatically picks the right tool based on task type
- **Cost optimization**: Dynamic routing (use cheaper tools when quality threshold allows)

**Using multiple AI tools sounds like a nightmare. Here's how we orchestrate them with clear lanes and zero overlap.**

If you're using multiple AI tools, define tool lanes, build routing logic, and pick a system of record. Coordination eliminates chaos.

What if every AI tool in your stack had a clear purpose and never overlapped? That's the promise of systematic orchestration.

