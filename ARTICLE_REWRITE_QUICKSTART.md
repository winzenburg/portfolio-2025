# Article Rewrite Quick Start

**Transform project articles into your brand voice in 5 minutes**

## Prerequisites

```bash
# Make sure you have your API key set
export ANTHROPIC_API_KEY=your_key_here

# Navigate to the project
cd portfolio-2025
```

## Quick Rewrite (3 Steps)

### 1. Run the Script

**From a file:**
```bash
node scripts/rewrite-article-to-brand-voice.js \
  --input /path/to/original-article.md \
  --output client/src/pages/articles/NewArticle.tsx
```

**From a URL:**
```bash
node scripts/rewrite-article-to-brand-voice.js \
  --url https://yourprojectsite.com/article \
  --output client/src/pages/articles/NewArticle.tsx
```

**Interactive (paste content):**
```bash
node scripts/rewrite-article-to-brand-voice.js --interactive
# Paste your content, then press Ctrl+D
```

### 2. Add to Articles Index

Edit `client/src/pages/Articles.tsx` and add to the `articles` array:

```typescript
{
  id: "XX",  // Next number in sequence
  title: "Your Article Title",
  excerpt: "Compelling 2-3 sentence preview.",
  date: "Month DD, YYYY",
  readTime: "7 min read",
  slug: "your-article-slug",
  category: "AI Workflow"
}
```

### 3. Test and Deploy

```bash
# Test locally
npm run dev
# Visit: http://localhost:5173/articles/your-article-slug

# Deploy
git add .
git commit -m "Add rewritten article: [Title]"
git push
```

## Voice Checklist (30 seconds)

Quick scan - does your rewritten article have:

- ✅ Starts with a hook (story/provocative statement)
- ✅ First-person voice ("I've learned...")
- ✅ Personal anecdotes
- ✅ Conversational transitions ("Here's the thing...")
- ✅ Technical concepts with analogies
- ✅ Specific metrics/data
- ✅ Self-deprecating humor about failures
- ✅ Actionable conclusion

## Common Enhancements

Add these after the initial rewrite for extra polish:

**Pull Quote** (30 sec):
```tsx
<div className="my-12 pl-6 border-l-4 border-cyan-500">
  <p className="text-2xl text-cyan-400 font-semibold italic leading-relaxed">
    "Your best insight here."
  </p>
</div>
```

**Stats Cards** (2 min):
```tsx
<div className="my-10 grid md:grid-cols-3 gap-6">
  <div className="bg-slate-900/50 border border-cyan-900/50 rounded-lg p-6 text-center">
    <div className="text-3xl font-bold text-cyan-400 mb-2">75%</div>
    <div className="text-slate-400 text-sm">Faster research</div>
  </div>
  {/* Add 2-3 more cards */}
</div>
```

## Troubleshooting

**Script fails:**
```bash
# Check API key
echo $ANTHROPIC_API_KEY

# Test the key
node scripts/test-anthropic-key.js
```

**Output doesn't sound like you:**
- Check that voice files loaded (script shows confirmation)
- Review VOICE_QUICK_REFERENCE.md for core principles
- Try regenerating with more specific article context

**Need more control:**
```bash
# Preview the prompt without calling API
node scripts/rewrite-article-to-brand-voice.js \
  --input article.md \
  --dry-run
```

## Full Workflow

For comprehensive details, see:
- `ARTICLE_REWRITE_WORKFLOW.md` - Complete workflow with examples
- `ARTICLES_WORKFLOW.md` - General article management
- `Winzenburg Voice and Tone/VOICE_QUICK_REFERENCE.md` - Voice guide

## Example Transformation

**Before (Technical/Dry):**
> The design system implements a component-driven architecture utilizing React and TypeScript. This approach provides type safety and enhanced developer experience.

**After (Brand Voice):**
> Here's what I learned building design systems for three Fortune 500 companies: the tech stack matters less than you think. React and TypeScript? Sure, they're great. But they're table stakes. What actually makes or breaks your design system is whether designers trust it enough to use it. And that's a people problem, not a code problem.

## Next Steps

1. Identify 3-5 articles to rewrite
2. Batch rewrite them using the script
3. Review and enhance with visual elements
4. Test locally
5. Deploy and promote

Happy rewriting! 🎨

