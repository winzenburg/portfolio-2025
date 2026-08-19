# Article Rewrite Workflow - Visual Flow

## High-Level Process

```
┌─────────────────────────────────────────────────────────────────┐
│                     SOURCE ARTICLE                               │
│  (Technical docs, project articles, dry content)                 │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                  REWRITE SCRIPT                                  │
│  • Load voice/tone guidelines (automatic)                        │
│  • Build transformation prompt                                   │
│  • Call Claude API                                               │
│  • Generate TSX component                                        │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                REWRITTEN ARTICLE (Draft)                         │
│  • Brand voice applied                                           │
│  • Story-driven narrative                                        │
│  • Personal anecdotes                                            │
│  • Visual element markers                                        │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                    REVIEW & REFINE                               │
│  • Check voice consistency                                       │
│  • Add visual elements                                           │
│  • Verify technical accuracy                                     │
│  • Polish and enhance                                            │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                  UPDATE METADATA                                 │
│  • Add to Articles.tsx                                           │
│  • Set title, date, category                                     │
│  • Create compelling excerpt                                     │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                   TEST & DEPLOY                                  │
│  • Test locally (npm run dev)                                    │
│  • Verify links and images                                       │
│  • Git commit and push                                           │
│  • Goes live automatically                                       │
└─────────────────────────────────────────────────────────────────┘
```

## Script Options Flow

### Single Article Path

```
Source: File / URL / Interactive Input
         ↓
rewrite-article-to-brand-voice.js
         ↓
Output: Single TSX Component
```

**Command:**
```bash
node scripts/rewrite-article-to-brand-voice.js \
  --input source.md \
  --output NewArticle.tsx
```

### Batch Processing Path

```
Source: Directory or Config File
         ↓
batch-rewrite-articles.js
         ↓
Output: Multiple TSX Components
         + Progress Reports
         + Token Statistics
```

**Command:**
```bash
node scripts/batch-rewrite-articles.js \
  --dir ./source-articles/ \
  --output ./client/src/pages/articles/
```

## Voice Transformation Process

```
TECHNICAL ARTICLE                      BRAND VOICE ARTICLE
────────────────                       ────────────────────

"Components are built                  "Here's what I learned building 
using React and TypeScript."           design systems for three Fortune 500
                                       companies: the tech stack matters
                                       less than you think..."

    ↓  ↓  ↓  ↓  ↓                          ↓  ↓  ↓  ↓  ↓

[Passive Voice]                →      [First Person]
[Generic Statement]            →      [Personal Story]
[Technical Focus]              →      [Human Context]
[Bullet Points]                →      [Narrative Prose]
[No Stakes]                    →      [Clear Stakes]
```

## Data Flow

```
┌──────────────────────┐
│  Voice & Tone Files  │
│  (Auto-loaded)       │
│                      │
│  • brand-voice.yaml  │
│  • voice-practitioner│
│  • VOICE_QUICK_REF   │
│  • authenticity      │
└─────────┬────────────┘
          │
          ├──────────────────────────────────┐
          │                                  │
          ▼                                  ▼
┌─────────────────────┐            ┌─────────────────────┐
│ Single Rewrite      │            │ Batch Rewrite       │
│ Script              │            │ Script              │
└─────────┬───────────┘            └─────────┬───────────┘
          │                                  │
          │                                  │
          ▼                                  ▼
┌──────────────────────────────────────────────────────────┐
│              Claude API (Sonnet 4)                       │
│  Transforms content using voice guidelines               │
└─────────┬────────────────────────────────────────────────┘
          │
          ▼
┌──────────────────────────────────────────────────────────┐
│         Generated TSX Component(s)                       │
│  • Complete article structure                            │
│  • Brand voice applied                                   │
│  • Visual element markers                                │
│  • Tailwind styling                                      │
└──────────────────────────────────────────────────────────┘
```

## Decision Tree

```
START: Want to rewrite article(s)
          |
          |
    ┌─────┴─────┐
    │           │
    │  How many │
    │ articles? │
    │           │
    └─────┬─────┘
          |
    ┌─────┴─────┐
    │           │
   One         Multiple
    │           │
    │           │
    ▼           ▼
┌───────┐   ┌─────────┐
│Single │   │ Batch   │
│Script │   │ Script  │
└───┬───┘   └────┬────┘
    │            │
    │       ┌────┴────┐
    │       │         │
    │    Directory  Config
    │       │         │
    │       ▼         ▼
    │   All .md   Specified
    │    files     articles
    │       │         │
    └───────┴─────────┘
            │
            ▼
      Review Output
            │
            │
    ┌───────┴────────┐
    │                │
    │  Does it sound │
    │   like you?    │
    │                │
    └───────┬────────┘
            │
      ┌─────┴─────┐
      │           │
     Yes          No
      │           │
      │           └──→ Adjust & Rerun
      │                (Check voice files)
      ▼
  Add Visual
  Elements
      │
      ▼
  Update
  Metadata
      │
      ▼
   Deploy
```

## Quality Gate Process

```
REWRITTEN ARTICLE
       │
       ▼
┌──────────────────┐
│ Voice Checklist  │◄─── Use VOICE_QUICK_REFERENCE.md
└─────────┬────────┘
          │
     ┌────┴────┐
     │         │
    Pass      Fail ──→ Refine Article
     │                 (Add stories, personality)
     ▼
┌──────────────────┐
│Technical Accuracy│◄─── Compare to source
└─────────┬────────┘
          │
     ┌────┴────┐
     │         │
    Pass      Fail ──→ Correct Technical Details
     │
     ▼
┌──────────────────┐
│ Visual Elements  │◄─── Add pull quotes, stats
└─────────┬────────┘
          │
          ▼
┌──────────────────┐
│ Metadata Update  │◄─── Update Articles.tsx
└─────────┬────────┘
          │
          ▼
┌──────────────────┐
│ Local Testing    │◄─── npm run dev
└─────────┬────────┘
          │
     ┌────┴────┐
     │         │
    Pass      Fail ──→ Fix Issues
     │
     ▼
    DEPLOY
```

## File Relationship Map

```
portfolio-2025/
│
├─ Winzenburg Voice and Tone/
│  │
│  ├─ brand-voice.yaml ──────────────┐
│  ├─ voice-practitioner-articles.yaml│  Loaded by
│  ├─ VOICE_QUICK_REFERENCE.md ──────┤  load-voice-tone.js
│  └─ AUTHENTICITY_QUICK_GUIDE.md ───┘
│
├─ scripts/
│  │
│  ├─ load-voice-tone.js ─────────────┐
│  │                                   │
│  ├─ rewrite-article-to-brand-voice.js  Uses
│  │                                   │
│  └─ batch-rewrite-articles.js ──────┘
│
├─ Documentation/
│  │
│  ├─ ARTICLE_REWRITE_WORKFLOW.md ───────── Complete Guide
│  ├─ ARTICLE_REWRITE_QUICKSTART.md ────── Quick Start
│  ├─ ARTICLE_REWRITE_EXAMPLES.md ──────── Before/After
│  └─ ARTICLE_REWRITE_SUMMARY.md ───────── This Setup
│
└─ client/src/pages/
   │
   ├─ Articles.tsx ──────────────────────── Update metadata here
   │
   └─ articles/
      ├─ ExistingArticle1.tsx
      ├─ ExistingArticle2.tsx
      └─ [NewRewrittenArticles].tsx ────── Script output goes here
```

## Token Flow & Costs

```
Input Tokens                      Output Tokens
────────────                      ─────────────

Voice Guidelines                  TSX Component
  (~6,000 tokens)                   (~4,000-8,000 tokens)
       +
Source Article                         ↓
  (~2,000-6,000 tokens)
                                  Cost: $0.06-0.12 per article
       ↓                               (~30-60 seconds)

Total Input: ~8,000-12,000 tokens
               ↓
         Claude API
         (Sonnet 4)
               ↓
     Rewritten Article


Batch Processing (10 articles):
────────────────────────────────
Total Cost: ~$0.60-1.20
Total Time: ~10-15 minutes
```

## Timeline Estimate

```
Activity                        Time        Notes
────────────────────────────────────────────────────────────
Initial setup                   5 min       One-time
Test API key & voice files      2 min       Verify setup
First article rewrite           3 min       Script runtime
Review & refine                 15 min      Voice check
Add visual elements             10 min      Pull quotes, stats
Update metadata                 2 min       Articles.tsx
Test locally                    3 min       Verify works
                               ──────
Total (first article)           ~40 min

Subsequent articles             ~20 min      Faster with practice

Batch processing (5 articles)
  - Script runtime              10 min
  - Review all                  45 min
  - Enhancement                 30 min
  - Metadata/testing            15 min
                               ──────
Total (5 articles)              ~100 min    vs. 200 min from scratch
```

---

## Usage Patterns

### Pattern 1: Single High-Value Article

```
One important article
      ↓
Single rewrite script
      ↓
Extensive review & refinement
      ↓
Heavy visual enhancement
      ↓
Deploy with promotion
```

**Best for:** Flagship content, cornerstone articles

### Pattern 2: Content Migration

```
Directory of project articles
      ↓
Batch rewrite script
      ↓
Quick review of each
      ↓
Standard visual elements
      ↓
Batch deploy
```

**Best for:** Moving blog, porting documentation

### Pattern 3: Iterative Refinement

```
Rewrite article
      ↓
Review voice ──→ Not quite right
      ↓                │
Adjust voice guidelines │
      ↑                │
      └────────────────┘
      ↓
Perfect voice for future articles
```

**Best for:** Tuning voice over time

---

This visual flow should help you understand how all the pieces fit together. Start with the Quick Start path, then explore the other options as you get comfortable with the workflow.

