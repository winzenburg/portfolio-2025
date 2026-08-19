# Article Rewrite Workflow 🎨

Transform technical project articles into your authentic brand voice automatically.

## What This Does

Takes dry, technical articles from your project sites and rewrites them in your "Playful Thought Leader" voice using AI and your established voice/tone guidelines.

**Before:** Technical documentation with bullet points and passive voice  
**After:** Story-driven articles with personality, anecdotes, and conversational tone

## Quick Start (2 minutes)

```bash
# 1. Set your API key
export ANTHROPIC_API_KEY=your_key_here

# 2. Rewrite an article
npm run rewrite-article -- --input source.md --output client/src/pages/articles/NewArticle.tsx

# 3. Review and deploy
npm run dev  # Test locally
git add . && git commit -m "Add article" && git push
```

That's it! ✨

## Commands

```bash
# Rewrite single article
npm run rewrite-article -- --input source.md --output Article.tsx
npm run rewrite-article -- --url https://example.com/article
npm run rewrite-article -- --interactive  # Paste content

# Batch rewrite multiple articles
npm run batch-rewrite -- --dir ./source-articles/ --output ./client/src/pages/articles/
npm run batch-rewrite -- --config batch-config.json

# Test voice guidelines loading
npm run test-voice

# Validate articles structure
npm run validate-articles
```

## Documentation

📚 **Start here:**
- **[ARTICLE_REWRITE_QUICKSTART.md](./ARTICLE_REWRITE_QUICKSTART.md)** - 5-minute quick start
- **[ARTICLE_REWRITE_EXAMPLES.md](./ARTICLE_REWRITE_EXAMPLES.md)** - Before/after examples

📖 **Deep dives:**
- **[ARTICLE_REWRITE_WORKFLOW.md](./ARTICLE_REWRITE_WORKFLOW.md)** - Complete workflow guide
- **[ARTICLE_REWRITE_FLOW.md](./ARTICLE_REWRITE_FLOW.md)** - Visual process flow
- **[scripts/ARTICLE_SCRIPTS_README.md](./scripts/ARTICLE_SCRIPTS_README.md)** - Script documentation

🎯 **Voice guidelines:**
- **[Winzenburg Voice and Tone/VOICE_QUICK_REFERENCE.md](./Winzenburg Voice and Tone/VOICE_QUICK_REFERENCE.md)** - 60-second voice guide
- **[Winzenburg Voice and Tone/brand-voice.yaml](./Winzenburg Voice and Tone/brand-voice.yaml)** - Complete voice guide

## How It Works

```
Source Article (technical)
         ↓
Voice/Tone Guidelines (auto-loaded)
         ↓
Claude AI Transformation
         ↓
Rewritten Article (brand voice)
         ↓
Your Review & Enhancement
         ↓
Published on Winzenburg.com
```

## Voice Transformation

The workflow transforms:

❌ **From This:**
```
Components are organized into atoms, molecules, and organisms.
Benefits include:
• Better consistency
• Faster development
• Easier maintenance
```

✅ **To This:**
```
Here's what I learned building design systems for three Fortune 500 
companies: the tech stack matters less than you think. React and 
TypeScript? Sure, they're great. But they're table stakes. What 
actually makes or breaks your design system is whether designers 
trust it enough to use it.
```

## Costs

- **Per article:** ~$0.06-0.12
- **10 articles:** ~$0.60-1.20
- **Time:** 30-60 seconds per article (AI) + 15-20 min (your review)

## Features

✅ Automatically loads all voice/tone guidelines  
✅ Maintains technical accuracy  
✅ Adds personal stories and anecdotes  
✅ Generates complete TSX components  
✅ Includes visual element suggestions  
✅ Batch processing support  
✅ Progress tracking and error handling  
✅ Token usage statistics  

## Requirements

- Node.js (already installed)
- Anthropic API key (Claude)
- Voice/tone files (already in place)

## File Structure

```
portfolio-2025/
├── ARTICLE_REWRITE_QUICKSTART.md        ← Start here
├── ARTICLE_REWRITE_WORKFLOW.md          ← Full guide
├── ARTICLE_REWRITE_EXAMPLES.md          ← Before/after
├── ARTICLE_REWRITE_FLOW.md              ← Visual flow
├── batch-config.example.json            ← Example config
│
├── scripts/
│   ├── rewrite-article-to-brand-voice.js
│   ├── batch-rewrite-articles.js
│   ├── load-voice-tone.js
│   └── ARTICLE_SCRIPTS_README.md
│
└── Winzenburg Voice and Tone/
    ├── brand-voice.yaml
    ├── voice-practitioner-articles.yaml
    └── VOICE_QUICK_REFERENCE.md
```

## Examples

### Example 1: From File

```bash
npm run rewrite-article -- \
  --input ~/Documents/design-system-article.md \
  --output client/src/pages/articles/DesignSystemGuide.tsx
```

### Example 2: From URL

```bash
npm run rewrite-article -- \
  --url https://project-site.com/technical-article \
  --output client/src/pages/articles/TechnicalGuide.tsx
```

### Example 3: Batch Processing

```bash
# Create config file
cp batch-config.example.json batch-config.json
# Edit batch-config.json with your articles

# Run batch rewrite
npm run batch-rewrite -- --config batch-config.json
```

### Example 4: Interactive Mode

```bash
npm run rewrite-article -- --interactive
# Paste your article content
# Press Ctrl+D when done
```

## Workflow

1. **Prepare:** Gather source articles from project sites
2. **Rewrite:** Run the script on single or batch articles
3. **Review:** Check voice consistency with checklist
4. **Enhance:** Add visual elements (pull quotes, stats cards)
5. **Metadata:** Update `Articles.tsx` with article info
6. **Test:** Run locally with `npm run dev`
7. **Deploy:** Git commit and push

## Quality Checklist

Before publishing, verify:

- ✅ Opens with compelling hook (story/provocative statement)
- ✅ Uses first-person perspective
- ✅ Includes personal anecdotes
- ✅ Technical concepts explained with analogies
- ✅ Conversational transitions throughout
- ✅ Mix of sentence lengths for rhythm
- ✅ Shows authority through data, humility through admissions
- ✅ Actionable or thought-provoking ending

## Troubleshooting

**Script won't run:**
```bash
# Check API key
echo $ANTHROPIC_API_KEY

# Test API key
npm run test-anthropic

# Test voice files
npm run test-voice
```

**Output doesn't sound like you:**
- Review `Winzenburg Voice and Tone/VOICE_QUICK_REFERENCE.md`
- Check examples in `ARTICLE_REWRITE_EXAMPLES.md`
- Use `--dry-run` flag to preview the prompt

**Need help:**
- Read the [Quick Start Guide](./ARTICLE_REWRITE_QUICKSTART.md)
- Check the [Examples](./ARTICLE_REWRITE_EXAMPLES.md)
- Review the [Full Workflow](./ARTICLE_REWRITE_WORKFLOW.md)

## Next Steps

1. **Test the setup:**
   ```bash
   npm run test-anthropic  # Verify API key
   npm run test-voice      # Verify voice files load
   ```

2. **Try your first article:**
   ```bash
   npm run rewrite-article -- --interactive
   ```

3. **Review the output** against the voice checklist

4. **Scale up** with batch processing when comfortable

## Support

- 📖 Full docs: See `ARTICLE_REWRITE_WORKFLOW.md`
- 💡 Examples: See `ARTICLE_REWRITE_EXAMPLES.md`
- 🎯 Voice guide: See `Winzenburg Voice and Tone/VOICE_QUICK_REFERENCE.md`
- 🛠️ Scripts: See `scripts/ARTICLE_SCRIPTS_README.md`

## Summary

This workflow helps you:

1. **Save time** - Rewrite articles in seconds instead of hours
2. **Stay consistent** - Automatic voice/tone application
3. **Scale content** - Process multiple articles at once
4. **Maintain quality** - Review checklist and examples
5. **Focus on value** - Less writing, more strategy

**Goal:** Transform technical content into engaging articles that sound like you having coffee with a colleague.

---

**Ready?** Start with: `npm run rewrite-article -- --interactive`

Happy rewriting! ☕

