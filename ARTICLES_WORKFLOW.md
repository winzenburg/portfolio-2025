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

### Styling Guidelines
- Use existing color schemes (slate, blue, cyan)
- Maintain consistent spacing (mb-6, mt-12, etc.)
- Use semantic HTML (h2, h3, etc. in order)
- Include hover states on interactive elements

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
