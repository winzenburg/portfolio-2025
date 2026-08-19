# Start Your Cultivate Migration NOW! 🚀

You have the source files on GitHub - this is the fastest method!

## Step-by-Step Instructions

### Step 1: Set Your API Key (30 seconds)

```bash
export ANTHROPIC_API_KEY=your_actual_anthropic_api_key_here
```

### Step 2: Test Your Setup (30 seconds)

```bash
cd "/Users/ryanwinzenburg/Library/CloudStorage/GoogleDrive-ryanwinzenburg@gmail.com/My Drive/Projects/Winzenburg.com/portfolio-2025"

npm run test-anthropic
```

You should see: ✅ API key is valid!

### Step 3: Fetch Your Articles from GitHub (2 minutes)

```bash
# Run the fetch script
./fetch-cultivate-articles.sh
```

This will:
- Clone the SaaS-Starter repo
- Copy all articles to `cultivate-source/`
- Clean up temporary files
- Show you article count

**Expected output**: 25 articles downloaded

### Step 4: Run Batch Rewrite (15 minutes)

```bash
npm run batch-rewrite -- \
  --dir ./cultivate-source/ \
  --output ./cultivate-output/
```

This will:
- Process all 25 articles through Claude
- Apply your brand voice automatically
- Generate TSX components
- Show progress and token usage

**Expected cost**: ~$1.50-3.00 total  
**Expected time**: ~15 minutes

### Step 5: Review First Article (5 minutes)

```bash
# Open the first article
code cultivate-output/[FirstArticleName].tsx

# Check against voice checklist:
# ✓ Opens with compelling hook
# ✓ First-person perspective
# ✓ Personal anecdotes
# ✓ Conversational tone
# ✓ Technical accuracy
```

If it looks good, proceed! If not, let me know and we can adjust.

### Step 6: Enhance Articles (3-4 hours)

For each article (~10 minutes each):

1. **Review voice consistency**
2. **Add visual elements**:
   - Pull quotes for key insights
   - Statistics cards for metrics
   - Before/after comparisons
3. **Move to final location**:
   ```bash
   mv cultivate-output/ArticleName.tsx client/src/pages/articles/
   ```

### Step 7: Update Articles.tsx (30 minutes)

Open `client/src/pages/Articles.tsx` and add each article:

```typescript
{
  id: "XX",
  title: "Article Title",
  excerpt: "Compelling 2-3 sentence preview",
  date: "Month DD, YYYY",
  readTime: "X min read",
  slug: "article-slug",
  category: "AI Workflow" // or appropriate
}
```

Use `cultivate-articles-migration.json` as reference for metadata.

### Step 8: Test Locally (15 minutes)

```bash
npm run dev
```

Visit: http://localhost:5173/articles

Check:
- All articles appear in index
- Each article link works
- Content displays correctly
- No console errors

### Step 9: Deploy (5 minutes)

```bash
git add .
git commit -m "Migrate 25 articles from Cultivate with brand voice"
git push
```

## Quick Reference Commands

```bash
# 1. Set API key
export ANTHROPIC_API_KEY=your_key

# 2. Test setup
npm run test-anthropic

# 3. Fetch articles
./fetch-cultivate-articles.sh

# 4. Batch rewrite
npm run batch-rewrite -- --dir ./cultivate-source/ --output ./cultivate-output/

# 5. Test locally
npm run dev

# 6. Deploy
git add . && git commit -m "Add migrated articles" && git push
```

## Timeline

| Task | Time |
|------|------|
| Set API key | 30 sec |
| Test setup | 30 sec |
| Fetch articles | 2 min |
| Batch rewrite | 15 min |
| Review first article | 5 min |
| Enhance all articles | 3-4 hours |
| Update metadata | 30 min |
| Test locally | 15 min |
| Deploy | 5 min |
| **TOTAL** | **5-6 hours** |

## Cost

- **API calls**: ~$1.50-3.00 for all 25 articles
- **Your time**: 5-6 hours

## What to Expect

### Before (Cultivate Style)
Technical, systematic, process-focused articles with "we" perspective.

### After (Your Voice)
Story-driven, personal, conversational articles with "I" perspective while maintaining technical accuracy.

## Troubleshooting

**Fetch script fails?**
```bash
# Manual clone
git clone https://github.com/winzenburg/SaaS-Starter.git temp-saas
cp temp-saas/articles/* cultivate-source/
rm -rf temp-saas
```

**API key not working?**
```bash
npm run test-anthropic
# Should show error or success
```

**Batch rewrite fails?**
- Check error message
- Verify articles are in cultivate-source/
- Check API key is set
- Try with single article first

**Voice doesn't sound like you?**
- This is expected for first pass
- Review and refine each article
- Add more personal stories
- Adjust technical analogies

## Need Help?

- **Workflow guide**: `ARTICLE_REWRITE_WORKFLOW.md`
- **Voice reference**: `Winzenburg Voice and Tone/VOICE_QUICK_REFERENCE.md`
- **Examples**: `ARTICLE_REWRITE_EXAMPLES.md`
- **Script docs**: `scripts/ARTICLE_SCRIPTS_README.md`

## You're Ready!

Run these commands to start:

```bash
export ANTHROPIC_API_KEY=your_key
npm run test-anthropic
./fetch-cultivate-articles.sh
npm run batch-rewrite -- --dir ./cultivate-source/ --output ./cultivate-output/
```

Let's migrate those 25 articles! 🎯

