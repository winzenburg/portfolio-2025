# Article Rewrite Workflow

## Purpose

This workflow helps you bring articles from your project site and rewrite them in your authentic brand voice for winzenburg.com using your established voice and tone guidelines.

## Overview

The workflow transforms technical project articles into engaging, personality-driven practitioner content while maintaining technical accuracy and adding strategic insights.

## Prerequisites

- Original article content (markdown, text, or URL)
- Access to Anthropic Claude API (key in environment)
- Voice and tone guidelines (automatically loaded from `Winzenburg Voice and Tone/`)

## Workflow Steps

### 1. Source Article Preparation

**Locate the original article:**
- From project site documentation
- From blog posts on other platforms
- From technical specs or case studies

**Extract the core content:**
```bash
# If from a URL, save the text content
# If from markdown, copy the file
# If from PDF or docs, extract text
```

**Identify key elements:**
- Main topic/thesis
- Technical details or frameworks
- Data points and metrics
- Current tone (likely technical/dry)
- Target audience on winzenburg.com

### 2. Run the Rewrite Script

```bash
cd portfolio-2025/scripts
node rewrite-article-to-brand-voice.js --input ../path/to/original.md --output ../client/src/pages/articles/NewArticle.tsx
```

**Script options:**
- `--input` or `-i`: Path to original article file or text
- `--output` or `-o`: Output file path (defaults to stdout)
- `--url`: Fetch article from URL instead of file
- `--metadata`: Include article metadata (title, date, readTime) in interactive mode
- `--dry-run`: Preview the prompt without calling API

### 3. Review and Refine

**Check the rewritten article against voice guidelines:**

✅ **Voice Checklist:**
- [ ] Opens with a compelling hook (story, provocative statement, or pain point)
- [ ] Uses first-person perspective ("I" and "you")
- [ ] Includes personal anecdotes or experiences
- [ ] Technical concepts explained with analogies
- [ ] Conversational transitions ("Here's the thing...", "Plot twist:")
- [ ] Mixes sentence lengths for rhythm
- [ ] Includes personality markers (light humor, self-deprecation)
- [ ] Shows authority through data and humility through admissions
- [ ] Ends with actionable or thought-provoking conclusion

✅ **Content Quality:**
- [ ] Maintains technical accuracy from original
- [ ] Adds strategic insights or context
- [ ] Includes specific metrics and data
- [ ] Flows as narrative prose (not bulleted outline)
- [ ] Uses visual elements (pull quotes, comparison cards, stats)
- [ ] Proper heading hierarchy (h2, h3)
- [ ] Appropriate read time (7-9 min typical)

### 4. Add Visual Elements

The script provides basic structure, but you should enhance with:

**Pull Quotes** (1-2 per article):
```tsx
<div className="my-12 pl-6 border-l-4 border-cyan-500">
  <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
    "Your memorable quote here."
  </p>
</div>
```

**Statistics Cards**:
```tsx
<div className="my-10 grid md:grid-cols-3 gap-6">
  <div className="bg-slate-900/50 border border-red-900/50 rounded-lg p-6 text-center">
    <div className="text-3xl font-bold text-red-400 mb-2">$800K+</div>
    <div className="text-slate-400 text-sm">Metric description</div>
  </div>
  {/* Add more cards */}
</div>
```

**Before/After Comparison**:
```tsx
<div className="my-12 grid md:grid-cols-2 gap-6">
  <div className="bg-slate-900/30 border border-red-900/30 rounded-lg p-6">
    <div className="text-red-400 font-semibold mb-4">Old Way</div>
    <ul className="space-y-3">
      <li className="flex items-start gap-3">
        <span className="text-red-400 mt-1">✗</span>
        <span className="text-slate-300">Problem statement</span>
      </li>
    </ul>
  </div>
  <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-6">
    <div className="text-cyan-400 font-semibold mb-4">New Way</div>
    <ul className="space-y-3">
      <li className="flex items-start gap-3">
        <span className="text-cyan-400 mt-1">✓</span>
        <span className="text-slate-300">Solution statement</span>
      </li>
    </ul>
  </div>
</div>
```

### 5. Add to Articles Index

Update `/client/src/pages/Articles.tsx`:

```typescript
{
  id: "XX",  // Increment from last
  title: "Your Article Title",
  excerpt: "Compelling 2-3 sentence preview that hooks readers.",
  date: "Month DD, YYYY",
  readTime: "X min read",
  slug: "your-article-slug",
  category: "AI Workflow" // or appropriate category
}
```

### 6. Test Locally

```bash
cd portfolio-2025
npm run dev
```

Visit:
- Articles index: `http://localhost:5173/articles`
- New article: `http://localhost:5173/articles/your-article-slug`

### 7. Deploy

```bash
git add .
git commit -m "Add rewritten article: [Title]"
git push
```

## Voice Transformation Examples

### Example 1: Technical to Conversational

**Original (Technical):**
> The design system implements a component-driven architecture utilizing React and TypeScript. This approach provides type safety and enhanced developer experience.

**Rewritten (Brand Voice):**
> Here's what I learned building design systems for three Fortune 500 companies: the tech stack matters less than you think. React and TypeScript? Sure, they're great. But they're table stakes. What actually makes or breaks your design system is whether designers trust it enough to use it. And that's a people problem, not a code problem.

### Example 2: Dry to Story-Driven

**Original (Dry):**
> Competitive analysis is an essential component of product validation. It involves researching competitor features, pricing, and market positioning.

**Rewritten (Brand Voice):**
> Last month, I watched a PM spend 40 hours on competitive research. Spreadsheets. Screenshots. Feature matrices. The works. Then I did the same research in 3 hours using Perplexity. Same depth. Same insights. The difference? I knew which questions to ask. Let me show you the framework...

### Example 3: Generic to Personal

**Original (Generic):**
> Best practices suggest starting with user research before development begins.

**Rewritten (Brand Voice):**
> I used to skip user research. Too slow, I thought. I'd just build what seemed obvious. Then I spent six months building a feature exactly two people wanted. That stung. Now? I spend the first week validating before I write a single line of code. Future me high-fives past me for learning this lesson.

## Transformation Principles

### From Technical Article to Brand Voice

**Add:**
- Personal stories and experiences
- Specific metrics and outcomes
- Conversational transitions
- Self-deprecating humor about failures
- Strategic context beyond tactics
- "Coffee shop friend" tone
- Personality markers and quirks

**Remove:**
- Corporate speak and jargon without explanation
- Passive voice and formal constructions
- Generic "best practices" statements
- Bullet-heavy outlines (transform to narrative)
- Lecturing or condescending tone
- Overly technical details without analogies

**Transform:**
- Feature lists → Stories about why they matter
- Process steps → Journey of discovery
- Benefits → Concrete outcomes you've seen
- Requirements → Lessons learned the hard way
- Recommendations → "Here's what actually works"

## Quality Assurance

### The Coffee Shop Test
Ask yourself:
- Would I actually say this over coffee with a colleague?
- Does this sound like me, or could it come from anyone?
- Is there at least one moment that makes someone smile or think "huh, interesting"?
- Am I sharing genuine insight or restating common knowledge?

### The Value Test
Ask yourself:
- Does this help someone do their job better?
- Have I earned the reader's time with something valuable?
- Would I want to read this at 3 PM on a Tuesday when stuck on a problem?

## Common Pitfalls

❌ **Don't:**
- Keep the original dry, technical tone
- Use corporate buzzwords without irony
- Write in outline/bullet format instead of narrative prose
- Strip out all technical detail (keep accuracy!)
- Force humor that doesn't land
- Make it about showing off vs. being helpful

✅ **Do:**
- Maintain technical accuracy while adding personality
- Use specific examples and real data
- Tell stories about failures and lessons learned
- Explain complex concepts with analogies
- Show genuine enthusiasm for what works
- Respect the reader's intelligence and time

## File Locations

```
portfolio-2025/
├── scripts/
│   ├── rewrite-article-to-brand-voice.js  ← Main rewrite script
│   └── load-voice-tone.js                  ← Voice loading utility
├── Winzenburg Voice and Tone/              ← Voice guidelines (auto-loaded)
│   ├── brand-voice.yaml
│   ├── voice-practitioner-articles.yaml
│   ├── VOICE_QUICK_REFERENCE.md
│   └── AUTHENTICITY_QUICK_GUIDE.md
├── client/src/pages/
│   ├── Articles.tsx                        ← Article index
│   └── articles/
│       └── YourNewArticle.tsx              ← Output destination
└── ARTICLE_REWRITE_WORKFLOW.md             ← This file
```

## Next Steps

1. Gather source articles from your project sites
2. Create a list of articles to rewrite
3. Run through workflow for first article
4. Refine and iterate based on voice checklist
5. Deploy and promote

## Resources

- Voice Quick Reference: `Winzenburg Voice and Tone/VOICE_QUICK_REFERENCE.md`
- Full Brand Voice Guide: `Winzenburg Voice and Tone/brand-voice.yaml`
- Article Writing Guidelines: `ARTICLES_WORKFLOW.md`
- Existing Articles: `client/src/pages/articles/` (for reference)

