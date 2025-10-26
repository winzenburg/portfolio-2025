# CLAUDE.md

This file provides guidance to Claude Code when working with the Portfolio 2025 project.

## Repository Purpose

This is Ryan Winzenburg's professional portfolio website showcasing expertise in AI-augmented UX workflows, design systems, and strategic product development. The site features a blog with in-depth articles on design systems, AI workflows, and business strategy.

## Project Structure

```
Portfolio-2025/
├── client/                          # React frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Articles.tsx         # Articles index page
│   │   │   └── articles/
│   │   │       ├── ARTICLE_TEMPLATE.tsx  # Template for new articles
│   │   │       └── *.tsx            # Individual article components
│   │   └── components/
│   │       └── ResponsiveNav.tsx    # Navigation component
│   └── public/
│       └── images/articles/         # Article hero images
├── ARTICLES_WORKFLOW.md             # Complete article creation guide
└── CLAUDE.md                        # This file
```

## Article Creation Philosophy

### Writing Style: Long-Form Narrative Prose

Articles MUST be written in **long-form narrative prose**, like Medium or Substack articles, NOT technical documentation or outlines.

#### ❌ WRONG: Outline/Documentation Style

```tsx
<h3>Figma (Strategic Design Foundation)</h3>

<p><strong>Purpose</strong>: Core design work where strategic decisions happen</p>

<p><strong>What it handles</strong>:</p>
<ul>
  <li>• Component architecture decisions</li>
  <li>• Design system structure</li>
  <li>• Visual design quality control</li>
  <li>• Team collaboration</li>
</ul>

<p><strong>Why it's irreplaceable</strong>: Strategic design decisions still require human judgment.</p>
```

#### ✅ CORRECT: Narrative Prose Style

```tsx
<h3>Figma (Strategic Design Foundation)</h3>

<p className="text-slate-300 leading-relaxed mb-6">
  The first tool in the stack is Figma, and it remains essential for a reason that might surprise you.
  I've experimented with fully AI-driven design workflows. They don't work. What I've learned through
  years of building design systems is that strategic design decisions still require the kind of human
  judgment that no AI currently provides.
</p>

<p className="text-slate-300 leading-relaxed mb-6">
  When I'm working in Figma, I'm making decisions about component architecture that will affect how
  designers work for years. Which variants should exist? How should props be structured? What's the
  right level of flexibility versus constraint? These questions require deep understanding of the
  product, the team, and the business context. AI can generate alternatives, but it can't make these
  strategic calls.
</p>

<p className="text-slate-300 leading-relaxed mb-6">
  This is where I maintain control. The design system structure, the visual design quality standards,
  the collaboration patterns with the team—all of this happens in Figma because it's where strategic
  thinking meets tactical execution.
</p>
```

### Core Writing Principles

**1. First-Person Narrative Voice**
- Write as an experienced practitioner sharing real stories
- Use "I've watched...", "I learned...", "In my experience..."
- Establish credibility through personal experience, not credentials

**2. Storytelling Over Lists**
- Transform every bullet point into a paragraph with context
- Lead with the problem or pattern you've observed
- Follow with your experience addressing it
- Conclude with lessons learned or insights gained

**3. Concrete Examples**
- Never make abstract claims—ground them in specific stories
- Include real metrics, timelines, and outcomes from your work
- Name actual tools, companies (when appropriate), and scenarios

**4. Smooth Transitions**
- Connect each paragraph to the next with natural flow
- Use transitional phrases: "But here's what changed...", "The breakthrough came when...", "What I didn't expect was..."
- Build narrative momentum toward conclusions

**5. Show, Don't Tell**
- Instead of "AI saves time" → "What used to take 30-45 minutes per component now takes 3-5 minutes"
- Instead of "This is important" → Story showing why it matters
- Instead of "Here's how it works" → Walk through a real example

### Article Structure Template

Every article should follow this narrative arc:

**Opening Hook (2-4 paragraphs)**
- Start with a specific story, observation, or surprising statement
- Establish the problem or pattern readers will recognize
- Create curiosity about the solution
- Set up what the article will deliver

**Problem Context (3-5 paragraphs)**
- Describe the traditional approach or common mistake
- Share personal experience with the problem
- Explain why it matters and what's at stake
- Use specific examples and data

**Solution Journey (Main Body)**
- Walk through your approach as a narrative journey
- Each major section = one aspect of the solution
- Include mistakes, learning moments, breakthroughs
- Use visual elements (stats, comparisons) to emphasize key points
- Maintain first-person storytelling throughout

**Results & Validation (2-4 paragraphs)**
- Share concrete outcomes with real metrics
- Explain what worked and what didn't
- Acknowledge limitations and trade-offs
- Provide context for interpreting results

**Strategic Implications (2-3 paragraphs)**
- Zoom out to explain why this matters competitively
- Connect to broader trends or shifts
- Create urgency around adoption
- End with forward-looking perspective

**Lessons Learned (Optional but Recommended)**
- Share 2-3 specific mistakes you made
- Explain what you'd do differently next time
- Make these personal and concrete, not generic advice

### When to Use Lists vs. Prose

**Use Narrative Prose For:**
- Explaining concepts and approaches (90% of content)
- Describing tools and their purposes
- Walking through processes and workflows
- Sharing experiences and lessons learned
- Making arguments and building cases

**Use Visual Elements (Cards/Lists) For:**
- Emphasizing key metrics or statistics
- Creating visual breaks every 3-4 paragraphs
- Highlighting comparisons (traditional vs. AI-powered)
- Summarizing complex information readers need to reference
- Drawing attention to critical takeaways

The visual elements should **enhance** the narrative, not replace it.

## LinkedIn Content Adaptation Strategy

### Philosophy: Complete Value + Natural Drive to Website

LinkedIn content should provide **complete standalone value** while naturally driving interested readers to the website for implementation details. This is NOT a teaser or truncated excerpt—it's a strategically adapted version optimized for LinkedIn's platform and audience.

**Key Principle:** Give readers enough value that they walk away satisfied, but create natural curiosity for the "how-to" implementation details.

### Website Article vs. LinkedIn Article

**Website Article (Full Implementation):**
- 2,000-2,500 words (~9 min read)
- Long-form narrative with deep storytelling
- Visual elements (pull quotes, stats cards, comparison charts)
- Detailed implementation guides
- Specific tools, scripts, frameworks
- "Mistakes to Avoid" sections
- Comprehensive competitive analysis
- Multiple case studies with depth

**LinkedIn Article (Strategic Adaptation):**
- 800-1,000 words (~3-4 min read)
- Complete narrative arc (problem → solution → results)
- Optimized for LinkedIn format (short paragraphs, bold headers, line breaks)
- All key insights and frameworks included
- Real metrics and case study results
- Natural transition to website for implementation
- Standalone value for casual readers

### The Value Balance

**What LinkedIn Article MUST Include:**
- ✅ Complete problem explanation with context
- ✅ All main solutions with high-level how-they-work
- ✅ Real case study with specific results
- ✅ The fundamental shift or mindset change
- ✅ Enough value to be worth reading standalone

**What Website Offers as "More":**
- 📈 Visual elements and infographics
- 🔧 Specific implementation steps and code
- ⚠️ Detailed mistakes and lessons learned
- 📊 Extended competitive analysis
- 🎯 Framework templates and tools
- 💡 Additional examples and edge cases

### LinkedIn Content Calendar Structure

Each website article generates **3 LinkedIn posts per week**:

#### **Tuesday - Complete LinkedIn Article**
**Format:** LinkedIn-native long-form (~900 words)
**Goal:** Provide complete value, establish thought leadership
**Content:** Full problem → solution → results narrative
**CTA:** "Want the implementation details? [link to website article]"
**Timing:** 8-10am or 12-1pm

**Structure:**
```
1. Hook (2-3 paragraphs) - The pattern you've observed
2. Problem Section - All core problems explained with examples
3. Solution Section - All AI-powered solutions with real examples
4. Results Section - Specific metrics and outcomes
5. Mindset Shift - The fundamental change required
6. Natural CTA - Transition to implementation details on website
7. Engagement Question - Drive comments and discussion
```

#### **Wednesday - Tactical Framework**
**Format:** Actionable framework/carousel (~400 words)
**Goal:** Provide immediate tactical value
**Content:** Problem → Fix → Result for each issue
**CTA:** Engagement question about their challenges
**Timing:** 8-10am or 12-1pm

**Structure:**
```
1. Problem statement hook
2. Framework breakdown (3-5 items)
   - Each with: The Issue → The Fix → Real Result
3. Mindset shifts to make
4. Mistakes to avoid (3 items)
5. Engagement question
```

#### **Thursday - Case Study Story**
**Format:** Story-driven narrative (~500 words)
**Goal:** Social proof, inspiration, relatability
**Content:** Client journey from problem to transformation
**CTA:** "Have you seen this pattern?" + article link in comments
**Timing:** 8-10am or 12-1pm

**Structure:**
```
1. Opening quote or moment (VP questioning investment)
2. The situation (where they were stuck)
3. The diagnosis (what was wrong)
4. The transformation (what changed)
5. The results (specific metrics)
6. The lesson (what this teaches us)
7. Link to full case study
```

### LinkedIn Writing Guidelines

**Format Optimization for LinkedIn:**
- Short paragraphs (2-3 sentences max)
- Frequent line breaks for readability
- Bold headers for section breaks
- Arrow bullets (→) instead of standard bullets
- Strategic use of emojis in frameworks (1️⃣ 2️⃣ 3️⃣) or checkmarks (✅ ✗)
- Horizontal rules (---) to separate major sections

**Hook Requirements:**
- First 2 lines must stop the scroll (shown in feed preview)
- Start with pattern, observation, or provocative statement
- Use "I've watched...", "Most teams...", or data point
- Create curiosity within first 150 characters

**Engagement Tactics:**
- End with clear question to drive comments
- Use 2-4 hashtags max (not more)
- Tag relevant people/companies only when appropriate
- Respond to every comment within 2 hours
- Add value in responses, don't just say "thanks"

**Data and Metrics:**
- Always include specific numbers (30% → 95%, 6x ROI)
- Use before/after comparisons
- Reference real timelines (30 days, 60 days, 12-18 months)
- Show both quantitative and qualitative results

### Content Adaptation Workflow

When adapting a website article for LinkedIn:

1. **Read the full website article** to understand core narrative
2. **Identify the essential elements:**
   - Main problem pattern
   - 3-5 key problems explained
   - 3-5 solutions with examples
   - Primary case study with metrics
   - Fundamental mindset shift
3. **Write LinkedIn version:**
   - Keep complete narrative arc
   - Condense examples but keep specifics
   - Maintain first-person voice
   - Include all key data points
   - Provide standalone value
4. **Add natural CTA:**
   - Position as "implementation details"
   - Mention specific tools, scripts, frameworks available
   - Use language: "I break down..." or "Full framework includes..."
5. **Create Wednesday/Thursday variations:**
   - Extract framework for tactical post
   - Pull case study for story post
   - Ensure each provides unique value

### File Organization

```
Portfolio-2025/
├── linkedin-posts/
│   ├── design-systems-fail.md        # Original 3-version format (archived)
│   └── week-1-design-systems-fail.md # New calendar format
│       ├── Tuesday - Complete LinkedIn Article
│       ├── Wednesday - Tactical Framework
│       ├── Thursday - Case Study Story
│       ├── Posting Strategy
│       └── Engagement Tactics
```

### Success Metrics

**Engagement Targets:**
- Post impressions: 5,000+ per post
- Comments + shares: 20+ per post
- Article clicks: Track CTR to website
- Profile views: 200+ per week spike

**Content Performance:**
- Track which day performs best
- Monitor comment themes for future content
- Identify which format drives most website traffic
- Measure connection requests from target audience

**Business Impact:**
- Inbound inquiries: 2-3 per month
- Discovery calls: 1-2 per month
- Speaking opportunities: 1 per quarter

### Visual Design Elements

Articles must balance narrative flow with visual engagement. Use these elements strategically:

#### 1. Pull Quotes (1-2 per article)
Highlight the most memorable insights:
```tsx
<div className="my-12 pl-6 border-l-4 border-cyan-500">
  <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
    "Your memorable quote here."
  </p>
</div>
```

#### 2. Statistics Cards
Display key metrics, costs, ROI, or before/after data:
```tsx
<div className="my-10 grid md:grid-cols-3 gap-6">
  <div className="bg-slate-900/50 border border-red-900/50 rounded-lg p-6 text-center">
    <div className="text-3xl font-bold text-red-400 mb-2">$800K+</div>
    <div className="text-slate-400 text-sm">Problem metric</div>
  </div>
  {/* More cards... */}
</div>
```

#### 3. Styled Lists in Cards
For questions, features, or grouped items (3+ items):
```tsx
<div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
  <div className="text-white font-semibold mb-4">Key considerations:</div>
  <ul className="space-y-3 text-slate-300">
    <li className="flex items-start gap-3">
      <span className="text-cyan-400 mt-1">→</span>
      <span>Item with context</span>
    </li>
  </ul>
</div>
```

#### 4. Comparison Cards
Show traditional vs. AI-powered approaches:
```tsx
<div className="my-12 grid md:grid-cols-2 gap-6">
  <div className="bg-slate-900/30 border border-red-900/30 rounded-lg p-6">
    <div className="text-red-400 font-semibold mb-4">Traditional Approach</div>
    <div className="space-y-3 text-sm">
      <div className="flex items-start gap-2">
        <span className="text-red-400">✗</span>
        <span className="text-slate-400">Problem or limitation</span>
      </div>
    </div>
  </div>
  <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-6">
    <div className="text-cyan-400 font-semibold mb-4">AI-Powered Approach</div>
    <div className="space-y-3 text-sm">
      <div className="flex items-start gap-2">
        <span className="text-cyan-400">✓</span>
        <span className="text-slate-300">Benefit or advantage</span>
      </div>
    </div>
  </div>
</div>
```

#### 5. Section Dividers
Create visual breaks between major sections:
```tsx
<div className="my-16 flex items-center gap-4">
  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
  <div className="text-slate-500 text-sm">•••</div>
  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
</div>
```

### Visual Element Guidelines

**Frequency**:
- Aim for a visual element every 3-4 paragraphs
- Don't overuse - maintain narrative flow as primary focus
- Use visual elements to enhance, not replace, storytelling

**Color Coding**:
- **Problems/Costs**: Red theme (red-900/red-400)
- **Success/Results**: Cyan/Blue theme (cyan-400, blue-400)
- **Neutral/Info**: Slate theme (slate-300, slate-400)
- **Gradients**: Success stories (from-cyan-900/20 to-blue-900/20)

## Article Workflow

See `ARTICLES_WORKFLOW.md` for complete documentation. Quick summary:

1. **Create article component**: Copy `ARTICLE_TEMPLATE.tsx`
2. **Write narrative content**: Use flowing prose with visual elements
3. **Add to Articles.tsx**: Include metadata and preview
4. **Test locally**: Verify both index and article pages
5. **Deploy**: Push to GitHub for automatic deployment

## Brand Voice

- **Tone**: Professional yet conversational, practical and actionable
- **Perspective**: Experienced practitioner sharing real-world insights
- **Focus**: Concrete examples and implementation over theory
- **Credibility**: Data-driven, cite real metrics, acknowledge trade-offs
- **Audience**: Technical practitioners (PMs, designers, developers) seeking to leverage AI

## Technical Stack

- **Frontend**: React + TypeScript + Vite
- **Routing**: Wouter
- **Styling**: TailwindCSS with dark theme
- **Deployment**: GitHub Pages via GitHub Actions
- **Base Path**: `/portfolio-2025/`

## Common Tasks

### Adding a New Article

1. Copy the template:
```bash
cp client/src/pages/articles/ARTICLE_TEMPLATE.tsx client/src/pages/articles/YourArticle.tsx
```

2. Write the article with:
   - Narrative prose (not outline format)
   - Visual elements every 3-4 paragraphs
   - Personal anecdotes and real examples
   - Data and metrics where applicable

3. Add metadata to `Articles.tsx`:
```typescript
{
  id: "10",
  title: "Your Article Title",
  excerpt: "2-3 sentence preview of the article...",
  date: "Month DD, YYYY",
  readTime: "X min read",
  slug: "your-article-slug",
  category: "Design Systems" // or "Business Strategy" or "AI Workflow"
}
```

### Deploying Changes

```bash
git add .
git commit -m "Add new article: Your Title"
git push
```

GitHub Actions automatically deploys to: https://winzenburg.github.io/portfolio-2025/

## Quality Standards

**Writing Quality**:
- ✅ Narrative flow with transitions between sections
- ✅ Real-world examples and anecdotes
- ✅ Data and metrics to support claims
- ✅ Visual elements enhance engagement
- ❌ Bullet-heavy outlines
- ❌ Generic advice without context
- ❌ Walls of text without visual breaks

**Technical Quality**:
- ✅ Consistent color palette (cyan/blue/slate/red)
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Responsive design (mobile-friendly)
- ✅ Accessible (semantic HTML, proper contrast)
- ✅ Fast loading (optimized images)

## Reference Articles

**Best Example**: `DesignSystemsFail.tsx`
- Long-form narrative with personal anecdotes
- Strategic use of pull quotes (2)
- Statistics cards showing problems and solutions
- Comparison cards (traditional vs. AI-powered)
- Styled lists for grouped information
- Visual dividers between major sections
- 6x ROI metrics card with gradient background
- Maintains storytelling while providing visual interest

Use this as the model for all future articles.

## Important Notes

- **Always use narrative style**: Articles are stories with data, not data dumps
- **Balance is key**: Visual elements enhance but don't dominate the narrative
- **Real metrics matter**: Use actual numbers from experience (e.g., "30% → 90% adoption")
- **Maintain consistency**: Follow the template and color palette
- **Test thoroughly**: Check both desktop and mobile before deploying

## Need Help?

- See `ARTICLES_WORKFLOW.md` for detailed workflow
- Reference `ARTICLE_TEMPLATE.tsx` for code examples
- Check `DesignSystemsFail.tsx` for best practices
- Test locally with `npm run dev` before deploying
