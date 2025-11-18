# Articles Workflow Guide

This guide explains how to add new articles to the portfolio site.

## Overview

Articles are managed in two locations:
1. **Individual article components** - Full article content (`/client/src/pages/articles/*.tsx`)
2. **Articles index page** - Article previews and metadata (`/client/src/pages/Articles.tsx`)

## Adding a New Article

### Step 1: Create the Article Component

1. Copy the template file:
   ```bash
   cp client/src/pages/articles/ARTICLE_TEMPLATE.tsx client/src/pages/articles/YourArticleSlug.tsx
   ```

2. Update the article content:
   - Replace `ARTICLE_TEMPLATE` with your article name
   - Update the date (format: "Month DD, YYYY")
   - Update the read time (e.g., "7 min read")
   - Update the title and subtitle
   - Update the hero image path
   - Write your article content in the prose section
   - Update the "Next Article" link at the bottom

3. **Important naming conventions**:
   - Component name: PascalCase (e.g., `AITechStack`)
   - File name: PascalCase matching component (e.g., `AITechStack.tsx`)
   - Slug: kebab-case matching route (e.g., `ai-tech-stack`)

### Step 2: Add Article Preview to Articles.tsx

1. Open `/client/src/pages/Articles.tsx`

2. Add your article to the `articles` array (add at the TOP for newest first):
   ```typescript
   {
     id: "XX",  // Increment from last article
     title: "Your Full Article Title",
     excerpt: "A compelling 2-3 sentence preview that describes what readers will learn from this article. Make it engaging and specific.",
     date: "Month DD, YYYY",  // Must match article component
     readTime: "X min read",   // Must match article component
     slug: "your-article-slug", // Must match route and file name
     category: "Your Category"  // Design Systems | Business Strategy | AI Workflow | etc.
   }
   ```

3. **Important**: Ensure the `slug` matches:
   - File name (kebab-case)
   - Component route
   - Any internal links

4. Update category counts in the hero section if adding a new category

### Step 3: Add Route (If Needed)

Routes are automatically handled by Wouter, but verify your article is accessible at:
```
http://localhost:3000/portfolio-2025/articles/your-article-slug
```

### Step 4: Test Locally

1. Start the dev server:
   ```bash
   cd client
   npm run dev
   ```

2. Check both pages:
   - Articles index: `http://localhost:3000/portfolio-2025/articles`
   - Your new article: `http://localhost:3000/portfolio-2025/articles/your-article-slug`

3. Verify:
   - ✅ Article preview appears on articles page
   - ✅ Category badge shows correct color
   - ✅ Date and read time are correct
   - ✅ Link navigates to full article
   - ✅ Full article displays correctly
   - ✅ Hero image loads
   - ✅ "Next Article" link works

### Step 5: Deploy

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Add new article: Your Article Title"
   git push
   ```

2. GitHub Actions will automatically deploy to:
   - https://winzenburg.github.io/portfolio-2025/

3. Monitor deployment:
   - https://github.com/winzenburg/portfolio-2025/actions

## Article Structure Reference

### Required Sections
- Hero image
- Article metadata (date, read time)
- Title and subtitle
- Article body (with proper heading hierarchy)
- Next article link
- CTA section

### Writing Style Guidelines

**CRITICAL**: Articles MUST be written as long-form narrative prose, like Medium/Substack articles, NOT technical documentation or outlines.

#### The Golden Rule: Narrative Over Bullets

Transform every concept into a story with context, examples, and personal experience.

**❌ WRONG - Outline Style:**
```
Purpose: AI-powered validation

Benefits:
• Faster research
• Better insights
• Lower cost
• Scalable process
```

**✅ CORRECT - Narrative Style:**
```
The traditional approach to market validation drains weeks from your timeline.
I've watched teams spend two to three weeks manually researching keywords,
pain points, and competitive positioning. By the time they finish the research,
market dynamics have shifted.

AI changes the economics completely. What used to take weeks now takes days.
But here's what most people miss: it's not just about speed. The quality of
insights actually improves because AI can process patterns across thousands
of data points that humans would never manually analyze.
```

#### Core Writing Principles

1. **First-Person Voice** - Write as "I've learned..." not "You should..."
2. **Show, Don't Tell** - Use specific examples with real metrics
3. **Story Arc** - Problem → Journey → Solution → Results → Lessons
4. **Smooth Transitions** - Connect paragraphs naturally, build momentum
5. **Concrete Details** - Real tools, actual timelines, specific outcomes

#### Required Elements in Every Article

- **Opening Hook**: Specific story or observation (not generic problem statement)
- **Personal Experience**: Share what you've built, observed, or learned
- **Real Metrics**: Actual numbers from your work (30-45min → 3-5min)
- **Mistakes Section**: What you learned the hard way (builds credibility)
- **Strategic Context**: Why this matters competitively, not just tactically

#### When Writing Each Section

**Instead of "Here's how to..."** → Tell a story about how you discovered this approach
**Instead of listing benefits** → Describe the moment you realized it worked
**Instead of step-by-step instructions** → Walk through a real example with context
**Instead of "This is important"** → Show impact through a concrete story

### Visual Design Elements

Articles should include a variety of visual elements to maintain engagement:

#### Pull Quotes
Use to highlight memorable insights or key takeaways:
```tsx
<div className="my-12 pl-6 border-l-4 border-cyan-500">
  <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
    "Your memorable quote here."
  </p>
</div>
```

#### Statistics Cards
Display key metrics and data points:
```tsx
<div className="my-10 grid md:grid-cols-3 gap-6">
  <div className="bg-slate-900/50 border border-red-900/50 rounded-lg p-6 text-center">
    <div className="text-3xl font-bold text-red-400 mb-2">$800K+</div>
    <div className="text-slate-400 text-sm">Metric description</div>
  </div>
  {/* Add more cards as needed */}
</div>
```

#### Styled Lists
Present grouped information in an engaging way:
```tsx
<div className="my-8 bg-slate-900/30 border border-slate-800 rounded-lg p-6">
  <div className="text-white font-semibold mb-4">Section heading:</div>
  <ul className="space-y-3 text-slate-300">
    <li className="flex items-start gap-3">
      <span className="text-cyan-400 mt-1">→</span>
      <span>List item with context</span>
    </li>
  </ul>
</div>
```

#### Before/After Comparison Cards
Show traditional vs. modern approaches or problem vs. solution:
```tsx
<div className="my-12 grid md:grid-cols-2 gap-6">
  <div className="bg-slate-900/30 border border-red-900/30 rounded-lg p-6">
    <div className="text-red-400 font-semibold mb-4">Old Way</div>
    {/* Items with ✗ */}
  </div>
  <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-lg p-6">
    <div className="text-cyan-400 font-semibold mb-4">New Way</div>
    {/* Items with ✓ */}
  </div>
</div>
```

#### Section Dividers
Create visual breaks between major sections:
```tsx
<div className="my-16 flex items-center gap-4">
  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
  <div className="text-slate-500 text-sm">•••</div>
  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
</div>
```

### When to Use Each Element

- **Pull Quotes**: 1-2 per article, highlighting the most impactful insights
- **Statistics Cards**: For key data, ROI figures, before/after metrics
- **Styled Lists**: When listing 3+ related items (questions, features, considerations)
- **Comparison Cards**: When contrasting approaches or showing evolution
- **Section Dividers**: Between major topic shifts, especially before conclusion

### Color Palette Guidelines
- **Problems/Warnings**: Red theme (red-900/red-400)
- **Success/Results**: Cyan/Blue theme (cyan-900/cyan-400, blue-900/blue-400)
- **Neutral/Info**: Slate theme (slate-900/slate-400)
- **Gradients**: Use for emphasis on success stories (from-cyan-900/20 to-blue-900/20)

### Styling Guidelines
- Use existing color schemes (slate, blue, cyan, red for problems)
- Maintain consistent spacing (mb-6, mt-12, etc.)
- Use semantic HTML (h2, h3, etc. in order)
- Include hover states on interactive elements
- Balance text blocks with visual elements (aim for visual break every 3-4 paragraphs)

## Category Guidelines

Current categories:
- **Design Systems** - Articles about building/managing design systems
- **Business Strategy** - Product development, GTM, monetization strategies
- **AI Workflow** - AI-augmented design/development processes

### Adding a New Category

1. Choose a color scheme:
   - Design Systems: `blue-900/blue-700` (blue)
   - Business Strategy: `cyan-900/cyan-700` (cyan)
   - AI Workflow: `purple-900/purple-700` (purple)
   - New category: Choose from slate color palette

2. Update the category badge logic in `Articles.tsx`

3. Add a new category pill in the hero section

## Common Mistakes to Avoid

❌ **Don't**: Forget to update both the component AND Articles.tsx
❌ **Don't**: Use different dates/read times in component vs. Articles.tsx
❌ **Don't**: Use inconsistent slug naming (file vs. route vs. preview)
❌ **Don't**: Forget to update "Next Article" links in adjacent articles

✅ **Do**: Use the template as starting point
✅ **Do**: Keep metadata consistent across both files
✅ **Do**: Test locally before pushing
✅ **Do**: Use meaningful, descriptive titles and excerpts

## File Locations Quick Reference

```
Portfolio-2025/
├── client/src/pages/
│   ├── Articles.tsx              ← Article previews and index
│   └── articles/
│       ├── ARTICLE_TEMPLATE.tsx  ← Template for new articles
│       ├── YourArticle.tsx       ← Individual article components
│       └── ...
├── ARTICLES_WORKFLOW.md          ← This file
└── public/images/articles/       ← Article hero images
```

## Need Help?

- Check existing articles for reference
- Use the template as a starting point
- Ensure all links use the correct base path: `/portfolio-2025/`
- Test thoroughly in local dev before deploying
