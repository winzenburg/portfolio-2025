# Cultivate Articles Migration Guide

## Overview

This guide helps you migrate all 25 articles from cultivate-six.vercel.app to winzenburg.com with your brand voice applied.

## Current Status

- **Total Articles**: 25
- **Source**: https://cultivate-six.vercel.app/articles
- **Migration File**: `cultivate-articles-migration.json`
- **Status**: Ready to begin

## Migration Strategy

Since the individual article pages on Cultivate are returning 404s, we'll use one of these approaches:

### Option 1: Manual Content Export (Recommended if you have access)

1. **Access your Cultivate source code/database**
   - Export article content directly from your database
   - Or copy from your markdown/MDX source files
   - Save each article as a `.md` file in a `cultivate-source` directory

2. **Run batch rewrite**
   ```bash
   # Create source directory
   mkdir cultivate-source
   
   # Copy all articles there, then:
   npm run batch-rewrite -- \
     --dir ./cultivate-source/ \
     --output ./client/src/pages/articles/
   ```

### Option 2: Browser Copy-Paste (If articles display properly for you)

If the articles display correctly when you view them (but browser automation can't access them), manually copy each article:

1. **For each article:**
   ```bash
   # Start interactive mode
   npm run rewrite-article -- --interactive
   
   # Paste the article content
   # Press Ctrl+D
   
   # It will output to stdout, then save manually
   ```

2. **Or save to file directly:**
   ```bash
   # Copy article content to clipboard, then:
   pbpaste | npm run rewrite-article -- --interactive > temp-article.tsx
   
   # Review and move to proper location
   mv temp-article.tsx client/src/pages/articles/ArticleName.tsx
   ```

### Option 3: API/Database Access (Fastest)

If you have direct access to Cultivate's backend:

1. **Export all articles as JSON or Markdown**
2. **Create a conversion script** (I can help with this)
3. **Batch process everything at once**

## Step-by-Step Process

### Phase 1: Setup (5 minutes)

```bash
# 1. Create workspace for source articles
mkdir -p cultivate-source cultivate-output

# 2. Verify API key
export ANTHROPIC_API_KEY=your_key_here
npm run test-anthropic

# 3. Test with one article first
npm run rewrite-article -- --interactive
# Paste a sample paragraph to test
```

### Phase 2: Export Content (Time varies)

Choose your export method:

**Method A: Source Files (Best)**
```bash
# If you have access to Cultivate's source
cp /path/to/cultivate/articles/*.md ./cultivate-source/
```

**Method B: Manual Copy (Slower)**
```bash
# For each article:
# 1. Open in browser
# 2. Copy content
# 3. Save as: cultivate-source/article-name.md
```

**Method C: Database Export (Ideal)**
```sql
-- Example for PostgreSQL/Supabase
SELECT title, content, date, category 
FROM articles 
WHERE status = 'published'
ORDER BY date DESC;

-- Export as JSON or CSV
```

### Phase 3: Batch Rewrite (15-20 minutes)

```bash
# Run batch rewrite on all articles
npm run batch-rewrite -- \
  --dir ./cultivate-source/ \
  --output ./cultivate-output/

# This will process all 25 articles
# Cost: ~$1.50-3.00 total
# Time: ~15 minutes
```

### Phase 4: Review & Enhance (3-4 hours)

For each article (~10 minutes each):

1. **Review voice consistency**
   ```bash
   # Open each article in editor
   code cultivate-output/ArticleName.tsx
   ```

2. **Check against voice checklist:**
   - [ ] Opens with compelling hook
   - [ ] First-person perspective
   - [ ] Personal anecdotes
   - [ ] Conversational tone
   - [ ] Technical accuracy maintained
   - [ ] Visual element markers present

3. **Add visual elements** (5 min per article):
   - Pull quotes for key insights
   - Statistics cards for metrics
   - Before/after comparisons where relevant

4. **Move to final location**:
   ```bash
   mv cultivate-output/ArticleName.tsx client/src/pages/articles/
   ```

### Phase 5: Update Metadata (30 minutes)

Update `client/src/pages/Articles.tsx` with all 25 articles:

```typescript
// Use the data from cultivate-articles-migration.json
// Add each article to the articles array:

{
  id: "XX",
  title: "Article Title",
  excerpt: "Compelling preview from migration JSON",
  date: "Month DD, YYYY",
  readTime: "X min read",
  slug: "article-slug",
  category: "AI Workflow" // or appropriate category
}
```

### Phase 6: Test & Deploy (30 minutes)

```bash
# Test all articles locally
npm run dev

# Visit each article to verify:
# - Content displays correctly
# - Links work
# - Images load (if any)
# - No console errors

# When satisfied:
git add .
git commit -m "Migrate 25 articles from Cultivate with brand voice"
git push
```

## Categories Mapping

Map Cultivate categories to Winzenburg categories:

| Cultivate Category | Winzenburg Category |
|-------------------|---------------------|
| AI & Automation | AI Workflow |
| Engineering | Design Systems (or create "Engineering") |
| Product Creation | Business Strategy |
| Product Design | Design Systems |
| Product Management | Business Strategy |
| Product Development | Design Systems |

## Estimated Timeline

| Phase | Time | Cost |
|-------|------|------|
| Setup | 5 min | Free |
| Export Content | 30 min - 2 hours | Free |
| Batch Rewrite | 15 min | ~$1.50-3.00 |
| Review & Enhance | 3-4 hours | Free |
| Update Metadata | 30 min | Free |
| Test & Deploy | 30 min | Free |
| **TOTAL** | **5-7 hours** | **~$2-3** |

## Article Priority Order

Suggest migrating in this order:

### Tier 1: High Impact (Do First)
1. The Complete Workflow: Discovery to Deployment in 2025
2. The AI Tool Stack: How We Coordinate 7 AIs Without Chaos
3. Brand-First Validation
4. The Results: What We've Learned

### Tier 2: Core Content (Do Second)
5. The Hub Evolution
6. The Kill/Greenlight Ritual
7. The Portfolio Approach
8. Dual-Filter Validation Framework

### Tier 3: Technical Deep Dives (Do Third)
9. Supabase MCP Blueprint
10. Never Ship Outdated Code (Context7)
11. Dev Quality Assistant
12. Security & Bug Gate

### Tier 4: Design & UX (Do Fourth)
13. Micro-Interactions Done Right
14. Personalization with Privacy
15. Gamification That Doesn't Manipulate

### Tier 5: Process & Automation (Do Fifth)
16-25. Remaining articles

## Quick Start Commands

```bash
# Test one article interactively
npm run rewrite-article -- --interactive

# Batch rewrite from directory
npm run batch-rewrite -- \
  --dir ./cultivate-source/ \
  --output ./cultivate-output/

# Check progress
ls -1 cultivate-output/ | wc -l
# Should show number of articles processed

# Test locally
npm run dev
```

## Troubleshooting

**Problem**: Can't access Cultivate articles
**Solution**: You likely have source files or database access. Check:
- Your git repository for Cultivate
- Database exports or backups
- Local markdown files

**Problem**: Batch rewrite fails mid-process
**Solution**: Check `cultivate-articles-migration.json` for status, re-run just failed articles

**Problem**: Voice doesn't sound like you
**Solution**: The source articles are already in a systematic/technical style. Review voice guidelines in `VOICE_QUICK_REFERENCE.md` and refine

**Problem**: Want to test with one article first
**Solution**: 
```bash
# Copy just one article to test
cp cultivate-source/one-article.md test-article.md

npm run rewrite-article -- \
  --input test-article.md \
  --output test-output.tsx

# Review the output
code test-output.tsx
```

## Migration Tracking

Use `cultivate-articles-migration.json` to track progress:

```json
{
  "status": "in_progress", // Update as you go
  "articles": [
    {
      "title": "...",
      "status": "completed", // Update each article
      ...
    }
  ]
}
```

## After Migration

1. **Update homepage** to feature new articles
2. **Cross-link** related articles
3. **Share on LinkedIn** using voice-adapted posts
4. **Monitor analytics** to see which articles resonate
5. **Update** `ARTICLES_TODO.md` with completion status

## Need Help?

- **Can't access source**: Check Cultivate's GitHub repo or database
- **Voice questions**: Review `VOICE_QUICK_REFERENCE.md`
- **Technical issues**: Check `scripts/ARTICLE_SCRIPTS_README.md`
- **Workflow questions**: Review `ARTICLE_REWRITE_WORKFLOW.md`

## Next Steps

1. **Determine access method** (source files, database, or manual copy)
2. **Start with 1 article** to test workflow
3. **Batch process** remaining articles
4. **Review and enhance** each article
5. **Deploy and promote**

---

**Ready to start?** Choose your content export method above and begin with Phase 1!

