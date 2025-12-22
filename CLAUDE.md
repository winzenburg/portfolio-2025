# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> Note: We are migrating the active workflow to **Cursor 2.0 native Rules + Agents**.
> See `.cursor/rules/` and `.cursor/agents/` for the current source of truth.

## Repository Purpose

This is Ryan Winzenburg's professional portfolio website showcasing expertise in AI-augmented UX workflows, design systems, and strategic product development. The site features a blog with in-depth articles on design systems, AI workflows, and business strategy.

## Technical Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Routing**: Wouter (v3) with `/portfolio-2025/` base path
- **Styling**: TailwindCSS v4 with custom dark theme
- **UI Components**: Radix UI + shadcn/ui pattern
- **Deployment**: GitHub Pages via GitHub Actions
- **Package Manager**: pnpm (required - has patches for wouter)

## Development Commands

```bash
# Start development server (port 3000, auto-finds next port if busy)
pnpm dev

# Type checking
pnpm check

# Build for production
pnpm build

# Format code
pnpm format

# Git hooks setup
pnpm setup-hooks             # Install pre-commit hook for validation

# Article validation and optimization
pnpm validate-articles       # Validate all article metadata and consistency
pnpm optimize-images         # Optimize hero images (PNG → JPG, resize, compress)

# Email/content automation scripts (for LinkedIn posts)
pnpm email-content           # Email article content
pnpm email-week             # Send weekly content
pnpm email-week-1           # Send specific week
pnpm email-today            # Send today's content
```

## Development Environment Setup

### Prerequisites
- Node.js 20+ (check with `node --version`)
- pnpm 10+ (install with `npm install -g pnpm`)

### First Time Setup
```bash
# Clone repository
git clone [repo-url]
cd Portfolio-2025

# Install dependencies (must use pnpm due to patches)
pnpm install

# Set up Git hooks (pre-commit validation)
pnpm setup-hooks

# Copy environment variables (if needed)
cp .env.example .env
# Edit .env with your values

# Start development server
pnpm dev
```

### Environment Variables
Check `.env.example` for required variables. Current variables:
- Email automation scripts require SMTP configuration
- Add to `.env` (never commit this file)

### Verifying Setup
After running `pnpm dev`, you should see:
```
VITE ready in [time] ms

➜  Local:   http://localhost:3000/portfolio-2025/
➜  Network: http://[your-ip]:3000/portfolio-2025/
```

Navigate to the local URL to verify the site loads.

### Git Pre-Commit Hook
A pre-commit hook is configured to run validation checks automatically before each commit:

**What it checks:**
1. TypeScript type checking (`pnpm check`)
2. Article metadata validation (`pnpm validate-articles`)

**When it runs:**
- Automatically before every `git commit`
- Can be bypassed with `git commit --no-verify` (not recommended)

**Behavior:**
- ✅ Allows commit if all checks pass
- ⚠️ Allows commit if only warnings (image sizes)
- ❌ Blocks commit if critical issues found

**Note:** The hook is in `.git/hooks/pre-commit` and won't be committed to the repository. New contributors need to set it up locally (see setup script below).

**Setting up the hook for new contributors:**
```bash
# Run the setup script (recommended)
pnpm setup-hooks

# Or manually copy the hook from scripts/setup-git-hooks.sh
bash scripts/setup-git-hooks.sh
```

## Project Architecture

### Routing System
- Uses **Wouter** for client-side routing
- **Base path**: `/portfolio-2025/` (set in vite.config.ts and App.tsx)
- All routes must account for this base path
- Article routes: `/portfolio-2025/articles/[slug]`
- Route configuration: `client/src/App.tsx:30-62`

### Path Aliases
Configured in vite.config.ts:
- `@/` → `client/src/`
- `@shared/` → `shared/`
- `@assets/` → `attached_assets/`

### Component Structure
```
client/src/
├── components/
│   ├── ui/                    # shadcn/ui components (Radix UI wrappers)
│   ├── ErrorBoundary.tsx      # Top-level error handling
│   ├── ResponsiveNav.tsx      # Main navigation
│   └── ScrollToTop.tsx        # Route change scroll reset
├── contexts/
│   └── ThemeContext.tsx       # Theme management
├── pages/
│   ├── Articles.tsx           # Article index with metadata
│   ├── articles/
│   │   ├── ARTICLE_TEMPLATE.tsx  # Template for new articles
│   │   └── *.tsx              # Individual article components
│   ├── Home.tsx               # Landing page
│   ├── Work.tsx               # Portfolio/case studies
│   └── [Other pages]
└── hooks/
    └── useMobile.tsx          # Responsive breakpoint hook
```

### Adding New Article Routes
When adding a new article:
1. Create article component in `client/src/pages/articles/`
2. Import it in `App.tsx`
3. Add route in `App.tsx` Router Switch (line ~40-50)
4. Add metadata to `Articles.tsx` articles array
5. **Route path must match slug** (kebab-case)

Example:
```tsx
// In App.tsx
import YourArticle from "./pages/articles/YourArticle";
// ...
<Route path="/articles/your-article-slug" component={YourArticle} />
```

### Build & Deployment
- **Build output**: `dist/public/` (configured in vite.config.ts)
- **Deployment**: Automatic via GitHub Actions on push to `main`
- **Deploy workflow**: `.github/workflows/deploy.yml`
- **URL**: https://winzenburg.github.io/portfolio-2025/
- Build includes both frontend (Vite) and server (esbuild), though only frontend is deployed to GitHub Pages

### Important Technical Notes
- **pnpm required**: Project uses pnpm patches for wouter
- **Base path critical**: All internal links must use `/portfolio-2025/` prefix
- **Port flexibility**: Dev server tries 3000, but will use next available port
- **Theme**: Currently set to light mode default (can be made switchable)
- **UI components**: Use shadcn/ui pattern - components in `components/ui/` are wrappers around Radix UI

## React Patterns & Conventions

### UI Component Usage
This project uses **shadcn/ui** components (Radix UI wrappers). Key patterns:

**Importing components:**
```tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
```

**Adding new shadcn components:**
- Components are already installed - check `components/ui/` first
- Don't install new UI libraries unless necessary
- Maintain consistent Radix UI + Tailwind pattern

### Styling Patterns

**Typography in articles:**
```tsx
// Standard paragraph
<p className="text-slate-300 leading-relaxed mb-6">

// Section headings
<h2 className="text-3xl font-bold text-white mb-6">
<h3 className="text-2xl font-semibold text-white mb-4">
```

## Color System

The site uses a **dark theme** with a carefully structured color palette. Always use these exact color values to maintain visual consistency.

### Base Colors (Backgrounds & Surfaces)

**Backgrounds:**
- `bg-slate-950` - Darkest background (article detail pages)
- `bg-slate-900` - Primary dark background (main pages)
- `bg-slate-800` or `bg-slate-800/50` - Card backgrounds, secondary surfaces
- `bg-slate-900/50` or `bg-slate-900/30` - Overlay backgrounds with transparency

**Gradients (Page Backgrounds):**
```tsx
className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
```

### Text Colors

**Hierarchy (from most to least prominent):**
- `text-white` - Primary headings (h1, h2), important UI text
- `text-slate-300` - Body text, paragraphs, article content
- `text-slate-400` - Meta information (dates, read time, labels)
- `text-slate-500` - Muted text, disabled states

**Usage:**
```tsx
<h1 className="text-white">Main Heading</h1>
<p className="text-slate-300">Body paragraph text</p>
<span className="text-slate-400">March 17, 2025 • 5 min read</span>
```

### Border & Divider Colors

- `border-slate-700` or `border-slate-700/50` - Default borders on cards, sections
- `border-slate-800` - Subtle dividers
- `border-slate-600` - Input borders, stronger dividers

### Accent Colors

#### Blue (Primary Brand Color)
**Usage:** Primary CTAs, buttons, links, interactive states

- `bg-blue-600` → `hover:bg-blue-700` - Primary buttons
- `bg-blue-500` or `border-blue-500` - Active/selected states
- `text-blue-400` → `hover:text-blue-300` - Links
- `bg-blue-900/30 border-blue-700/50` - Category badges (Design Systems)

```tsx
// Primary CTA button
<button className="bg-blue-600 hover:bg-blue-700 text-white">
  Schedule a Call
</button>

// Link
<a className="text-blue-400 hover:text-blue-300">Read Article</a>

// Selected filter badge
<button className="bg-blue-500 text-white border-blue-500">
  Design Systems (3)
</button>
```

#### Cyan (Secondary Accent)
**Usage:** Success states, highlights, secondary CTAs, article accents

- `text-cyan-400` → `hover:text-cyan-300` - Article links, highlights
- `bg-cyan-500` → `hover:bg-cyan-400` - Secondary CTAs
- `border-cyan-700/50` - Accent borders
- `bg-cyan-900/30 border-cyan-700/50` - Category badges (Business Strategy)

**Gradients (Special sections like newsletter, success callouts):**
```tsx
className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-cyan-700/50"
className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-cyan-700/50"
```

```tsx
// Newsletter box
<div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-700/50">

// Article highlight link
<a className="text-cyan-400 hover:text-cyan-300">
  Back to Articles
</a>
```

#### Purple (Tertiary Accent)
**Usage:** AI Workflow category only

- `bg-purple-500` or `border-purple-500` - Active state
- `bg-purple-900/30 border-purple-700/50 text-purple-300` - Category badge

```tsx
// AI Workflow category badge
<span className="bg-purple-900/30 border border-purple-700/50 text-purple-300">
  AI Workflow (1)
</span>
```

### Semantic Colors

#### Success
**Usage:** Success messages, confirmation states, positive outcomes

- `text-green-400` or `text-green-500` - Success text
- `bg-green-900/30 border-green-700/50` - Success backgrounds
- `bg-green-500/20` - Icon backgrounds

```tsx
// Success message
<div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
  <div className="text-green-400">✓ Success!</div>
  <p className="text-slate-300">You're subscribed!</p>
</div>
```

#### Error/Warning
**Usage:** Error messages, warnings, problem callouts

- `text-red-400` - Error text
- `bg-red-900/50 border-red-900/50` - Error/warning backgrounds
- `text-red-400 border-red-900/50` - Problem metrics, warnings

```tsx
// Error state
<p className="text-red-400">Error: Please try again</p>

// Problem callout card
<div className="bg-slate-900/50 border border-red-900/50 rounded-lg">
  <div className="text-red-400 font-bold">Traditional Approach</div>
</div>
```

### Interactive States

**Hover States:**
```tsx
// Cards
className="border-slate-700/50 hover:border-blue-500/50"

// Buttons
className="bg-blue-600 hover:bg-blue-700"

// Links
className="text-blue-400 hover:text-blue-300"

// Filter badges (unselected)
className="bg-slate-800/50 hover:bg-slate-700/50 hover:border-slate-500"
```

**Active/Selected States:**
```tsx
// Selected filter badge
className="bg-blue-500 text-white border-blue-500"

// Active navigation
className="text-white" // vs text-slate-400 for inactive
```

**Disabled States:**
```tsx
className="opacity-50 cursor-not-allowed"
```

### Opacity Levels

Use consistent opacity values for depth and layering:
- `/10` - Very subtle tints
- `/20` - Light backgrounds (gradients, special sections)
- `/30` - Medium backgrounds (cards, badges)
- `/50` - Standard overlays, borders
- No opacity - Solid colors for text and primary elements

### Color Usage Rules

**DO:**
- ✅ Use `text-white` for all h1, h2, h3 headings
- ✅ Use `text-slate-300` for body text and paragraphs
- ✅ Use blue for primary CTAs and links
- ✅ Use cyan for highlights and secondary actions
- ✅ Maintain consistent hover states (always darken buttons, lighten text)
- ✅ Use opacity variants for depth (`/30`, `/50`)

**DON'T:**
- ❌ Don't introduce new colors outside this palette
- ❌ Don't use `text-gray-*` (use `text-slate-*` instead)
- ❌ Don't use arbitrary opacity values (stick to /10, /20, /30, /50)
- ❌ Don't mix color families (e.g., blue borders with cyan backgrounds)
- ❌ Don't use black (`bg-black`) - use `bg-slate-950` or `bg-slate-900`

### Quick Reference by Component Type

**Buttons:**
```tsx
// Primary CTA
className="bg-blue-600 hover:bg-blue-700 text-white"

// Secondary CTA
className="bg-cyan-500 hover:bg-cyan-400 text-slate-900"

// Outline
className="border border-slate-600 text-slate-300 hover:bg-slate-700/50"
```

**Cards:**
```tsx
// Standard card
className="bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50"

// Article card
className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg"

// Special callout
className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-cyan-700/50"
```

**Inputs:**
```tsx
className="bg-slate-800/50 border border-slate-600 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500"
```

**Badges:**
```tsx
// Category badge (unselected)
className="bg-blue-900/30 border border-blue-700/50 text-blue-300"

// Selected state
className="bg-blue-500 text-white border-blue-500"
```

### Navigation Patterns
**Internal links (use wouter's Link):**
```tsx
import { Link } from "wouter"

<Link href="/portfolio-2025/articles/your-slug">
  <a className="...">Article Title</a>
</Link>
```

**External links:**
```tsx
<a href="https://external-site.com"
   target="_blank"
   rel="noopener noreferrer">
```

## Project Structure

```
Portfolio-2025/
├── .github/workflows/
│   └── deploy.yml                   # GitHub Pages deployment
├── client/                          # React frontend (Vite root)
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/                  # shadcn/ui components
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── ResponsiveNav.tsx    # Main navigation
│   │   │   └── ScrollToTop.tsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── pages/
│   │   │   ├── Articles.tsx         # Articles index with metadata
│   │   │   ├── articles/
│   │   │   │   ├── ARTICLE_TEMPLATE.tsx  # Template for new articles
│   │   │   │   └── *.tsx            # Individual article components
│   │   │   ├── Home.tsx
│   │   │   ├── Work.tsx
│   │   │   └── [Other pages]
│   │   ├── App.tsx                  # Router configuration
│   │   └── main.tsx                 # Entry point
│   ├── public/
│   │   └── images/articles/         # Article hero images
│   └── index.html
├── scripts/                         # Email automation for LinkedIn posts
│   ├── email-content.js
│   ├── send-weekly-content.js
│   ├── send-daily-content.js
│   └── setup-automation.sh
├── linkedin-posts/                  # LinkedIn content calendar files
├── ARTICLES_WORKFLOW.md             # Complete article creation guide
├── CLAUDE.md                        # This file
├── package.json                     # pnpm scripts and dependencies
└── vite.config.ts                   # Vite configuration
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
Follow the [Color System](#color-system) guidelines above. Quick reference:
- **Problems/Costs**: Red theme (`text-red-400`, `bg-red-900/50`, `border-red-900/50`)
- **Success/Results**: Cyan/Blue theme (`text-cyan-400`, `text-blue-400`, gradients with cyan/blue)
- **Neutral/Info**: Slate theme (`text-slate-300`, `text-slate-400`, `bg-slate-900/50`)
- **Gradients**: `from-cyan-900/20 to-blue-900/20` for success stories and special sections

## Image & Asset Management

### Article Hero Images
**Location:** `client/public/images/articles/`

**Naming convention:**
- Use kebab-case matching article slug
- Format: `article-slug-hero.jpg` or `article-slug-hero.png`
- Example: `design-systems-fail-hero.jpg`

**Image specifications:**
- Recommended size: 1200x630px (for social sharing)
- Format: JPG for photos, PNG for graphics/screenshots
- Optimize before committing (use tools like TinyPNG)
- Keep file size under 200KB

**Usage in article component:**
```tsx
<img
  src="/portfolio-2025/images/articles/your-article-hero.jpg"
  alt="Descriptive alt text for accessibility"
  className="w-full h-auto rounded-lg"
/>
```

### Other Assets
- Icons: Use `lucide-react` (already installed)
- Don't add new icon libraries
- Custom SVGs: Inline them in components when possible

### Optimizing Images
To optimize all hero images at once:

```bash
# Step 1: Preview optimization (safe - keeps originals)
pnpm optimize-images

# Step 2: Verify quality in browser
pnpm dev
# Navigate to articles and check JPG quality

# Step 3: If satisfied, delete originals
bash scripts/optimize-images.sh --delete
```

The script:
- Converts PNG → JPEG with 85% quality
- Resizes to max 1200px width (maintains aspect ratio)
- Target: <200KB per image
- Safe by default (keeps originals unless --delete flag used)

## Article Metadata Schema

### Required Fields in Article Component
```tsx
export default function ArticleName() {
  return (
    <article>
      {/* Date - format: "Month DD, YYYY" */}
      <time className="...">January 15, 2025</time>

      {/* Read time - format: "X min read" */}
      <span className="...">8 min read</span>

      {/* Title - 50-70 characters optimal for SEO */}
      <h1>Your Article Title</h1>

      {/* Subtitle - 120-150 characters */}
      <p className="...">Compelling subtitle...</p>
    </article>
  )
}
```

### Required Fields in Articles.tsx
```typescript
{
  id: "10",              // String, increment from last article
  title: "",             // Must match h1 in article component
  excerpt: "",           // 2-3 sentences, 150-200 characters
  date: "",              // Must match date in article component
  readTime: "",          // Must match readTime in article component
  slug: "",              // kebab-case, matches route and filename
  category: ""           // One of: "Design Systems" | "Business Strategy" | "AI Workflow"
}
```

### Metadata Validation Checklist
Before committing a new article:
- [ ] Date matches in both files
- [ ] Read time matches in both files
- [ ] Title is compelling and SEO-friendly
- [ ] Excerpt provides clear value proposition
- [ ] Slug is kebab-case and matches everywhere
- [ ] Category is one of the three allowed values

### Automated Validation
Run the validation script to check all articles:
```bash
pnpm validate-articles
```

This checks:
- ✓ Component files exist
- ✓ Routes configured in App.tsx
- ✓ Imports present in App.tsx
- ✓ Date/readTime match between Articles.tsx and components
- ✓ Hero images exist
- ⚠ Image sizes (warns if >200KB)

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

## Common Tasks

### Adding a New Article

**Complete workflow in ARTICLES_WORKFLOW.md** - Here's the quick version:

1. Copy the template:
```bash
cp client/src/pages/articles/ARTICLE_TEMPLATE.tsx client/src/pages/articles/YourArticle.tsx
```

2. Update article component with narrative prose content (not outline format)

3. **Add route to App.tsx:**
```tsx
// Import at top
import YourArticle from "./pages/articles/YourArticle";

// Add route in Switch component (~line 40-50)
<Route path="/articles/your-article-slug" component={YourArticle} />
```

4. **Add metadata to Articles.tsx:**
```typescript
{
  id: "10",
  title: "Your Article Title",
  excerpt: "2-3 sentence preview that describes what readers will learn...",
  date: "Month DD, YYYY",
  readTime: "X min read",
  slug: "your-article-slug",  // Must match route path and filename
  category: "Design Systems" // or "Business Strategy" or "AI Workflow"
}
```

5. Test locally:
```bash
pnpm dev
# Check: http://localhost:3000/portfolio-2025/articles
# Check: http://localhost:3000/portfolio-2025/articles/your-article-slug
```

6. **Validate everything:**
```bash
pnpm validate-articles
```
Fix any issues reported before proceeding.

**Note:** Validation also runs automatically via pre-commit hook when you commit.

7. Deploy:
```bash
git add .
git commit -m "Add new article: Your Title"
git push
```

GitHub Actions automatically deploys to: https://winzenburg.github.io/portfolio-2025/

### Working with the Codebase

**Development:**
```bash
pnpm dev              # Start dev server
pnpm check            # Type check without building
pnpm format           # Format with Prettier
```

**Making changes:**
- Always use pnpm (not npm or yarn) - patches are required
- Remember base path `/portfolio-2025/` for all internal links
- UI components follow shadcn/ui pattern (Radix UI wrappers)
- All routes configured in `client/src/App.tsx`

## Common Pitfalls & Solutions

### Article Creation Issues
- **Missing route in App.tsx**: Article exists but shows 404
  - Solution: Always add both import and `<Route>` in App.tsx
  - Check: Search App.tsx for your article component name

- **Metadata mismatch**: Date/readTime differs between component and Articles.tsx
  - Solution: Copy metadata directly from article component to Articles.tsx
  - These must match exactly or users see inconsistent information

- **Base path forgotten**: Links break in production but work locally
  - Wrong: `href="/articles/my-article"`
  - Right: `href="/portfolio-2025/articles/my-article"`
  - Use Link component from wouter for internal navigation

- **Hero image paths**: Images not loading in production
  - Images must be in `client/public/images/articles/`
  - Path in component: `/portfolio-2025/images/articles/your-image.jpg`

### Routing Issues
- **Slug inconsistency**: Component file name, route path, and Articles.tsx slug must all match
  - File: `AITechStack.tsx`
  - Route: `/articles/ai-tech-stack`
  - Slug: `"ai-tech-stack"`
  - All three must use same kebab-case slug

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
- ✅ Follows [Color System](#color-system) guidelines (cyan/blue/slate/red)
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Responsive design (mobile-friendly)
- ✅ Accessible (semantic HTML, proper contrast)
- ✅ Fast loading (optimized images)

## Article Pre-Publish Checklist

Before pushing a new article, verify:

### Technical Requirements
- [ ] Article component created from ARTICLE_TEMPLATE.tsx
- [ ] Import added to App.tsx (line ~19-27)
- [ ] Route added to App.tsx Switch (line ~40-50)
- [ ] Metadata added to Articles.tsx array (at top for newest first)
- [ ] Hero image exists in `client/public/images/articles/`
- [ ] All metadata matches (date, readTime) between files
- [ ] Slug is consistent everywhere (kebab-case)
- [ ] "Next Article" link points to correct article

### Content Requirements
- [ ] Opening hook (2-4 paragraphs) is compelling
- [ ] Written in first-person narrative voice (not outline style)
- [ ] Contains real metrics and specific examples
- [ ] Visual elements every 3-4 paragraphs
- [ ] Pull quotes (1-2) highlight key insights
- [ ] Section dividers between major topics
- [ ] Follows [Color System](#color-system) guidelines
- [ ] 2,000-2,500 words total (~9 min read)

### Testing Requirements
- [ ] `pnpm check` passes (no TypeScript errors)
- [ ] **`pnpm validate-articles` passes (no critical issues)**
- [ ] Article loads locally at `/portfolio-2025/articles/[slug]`
- [ ] Article appears in articles index
- [ ] Images load correctly
- [ ] Navigation works (next article link, back to articles)
- [ ] Responsive design works (test mobile view)
- [ ] All links use correct base path

### Accessibility & SEO
- [ ] All images have descriptive alt text
- [ ] Heading hierarchy is correct (h1 → h2 → h3)
- [ ] Color contrast meets WCAG standards
- [ ] Title is 50-70 characters (SEO optimal)
- [ ] Excerpt is 150-200 characters

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

## Performance Guidelines

### Bundle Size Awareness
- Don't add new dependencies without justification
- Check bundle impact: `pnpm build` and review dist/public size
- Current optimized bundle should be < 500KB gzipped

### Image Optimization
- Compress all images before committing
- Tools: TinyPNG, Squoosh, ImageOptim
- Target: < 200KB per hero image
- Use appropriate formats (JPG for photos, PNG for graphics)

### Code Splitting
- Articles are already code-split via Wouter routing
- Each article component loads only when navigated to
- Don't break this pattern with eager imports

### Lazy Loading
If adding heavy components, lazy load them:
```tsx
import { lazy, Suspense } from 'react'

const HeavyComponent = lazy(() => import('./HeavyComponent'))

function ArticleName() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  )
}
```

## Key Files Reference

- **ARTICLES_WORKFLOW.md** - Detailed article creation workflow
- **ARTICLE_TEMPLATE.tsx** - Article component template with code examples
- **DesignSystemsFail.tsx** - Reference article showcasing best practices
- **App.tsx** - Router configuration for all routes
- **vite.config.ts** - Build configuration and path aliases
- **scripts/validate-articles.js** - Automated article validation tool
- **scripts/optimize-images.sh** - Image optimization script

## Automated Validation & Optimization

### Article Validation Tool

The validation script checks all articles for consistency and common mistakes:

```bash
pnpm validate-articles
```

**What it checks:**
- Component files exist and match slugs
- Routes configured in App.tsx
- Imports present in App.tsx
- Metadata matches between Articles.tsx and components (date, readTime)
- Hero images exist with correct naming
- Image sizes (warns if >200KB)

**Exit codes:**
- `0` - All checks pass (only warnings allowed)
- `1` - Critical issues found (blocks CI/CD)

**When to run:**
- Automatically runs via pre-commit hook
- Manually before committing: `pnpm validate-articles`
- After updating article metadata
- When troubleshooting 404s or missing images
- As part of CI/CD pipeline

**Pre-commit hook:**
The validation runs automatically before each commit. The hook:
- Runs TypeScript type checking
- Validates all article metadata
- Allows warnings (image sizes) but blocks critical issues
- Can be bypassed with `--no-verify` if absolutely necessary

### Image Optimization Tool

Optimize all hero images automatically:

```bash
# Safe preview mode (keeps originals)
pnpm optimize-images

# Delete originals after conversion
bash scripts/optimize-images.sh --delete
```

**What it does:**
- Converts PNG → JPEG (85% quality)
- Resizes to max 1200px width
- Compresses to target <200KB
- Reports before/after sizes

**Typical results:**
- Before: 1.8MB - 2.2MB per image
- After: 150KB - 200KB per image
- Savings: ~90% reduction in file size

**Performance impact:**
- Faster page loads (especially mobile)
- Better Core Web Vitals scores
- Reduced bandwidth costs
