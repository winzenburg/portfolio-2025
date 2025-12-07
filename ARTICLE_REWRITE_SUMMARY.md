# Article Rewrite Workflow - Setup Complete ✅

**Transform project articles into your authentic brand voice**

## What's Been Created

Your complete article rewrite workflow is now ready to use. Here's what you have:

### 📚 Documentation

1. **`ARTICLE_REWRITE_WORKFLOW.md`** - Complete workflow guide
   - Full process from source to published article
   - Voice transformation principles
   - Quality assurance checklists
   - Common pitfalls and solutions

2. **`ARTICLE_REWRITE_QUICKSTART.md`** - 5-minute quick start
   - Essential commands
   - Quick voice checklist
   - Troubleshooting
   - Fast reference

3. **`ARTICLE_REWRITE_EXAMPLES.md`** - Real transformation examples
   - Before/after comparisons
   - Key patterns
   - Voice checklist
   - Practical examples

4. **`scripts/ARTICLE_SCRIPTS_README.md`** - Script documentation
   - All article scripts explained
   - Usage examples
   - Token costs
   - Best practices

### 🛠️ Scripts

1. **`scripts/rewrite-article-to-brand-voice.js`** - Single article rewriter
   - Supports file, URL, or interactive input
   - Loads all voice/tone guidelines automatically
   - Generates complete TSX component
   - Includes dry-run mode for prompt preview

2. **`scripts/batch-rewrite-articles.js`** - Batch processor
   - Process multiple articles at once
   - Config file or directory mode
   - Progress tracking and error handling
   - Token usage statistics

3. **`scripts/load-voice-tone.js`** - Updated to include practitioner voice
   - Now loads `voice-practitioner-articles.yaml`
   - Ensures consistency across all scripts

### 📋 Configuration

1. **`batch-config.example.json`** - Example batch config
   - Shows format for batch processing
   - Ready to copy and customize

## Quick Start (3 Steps)

### 1. Set Up Environment

```bash
# Set your API key (if not already set)
export ANTHROPIC_API_KEY=your_key_here

# Navigate to project
cd portfolio-2025
```

### 2. Rewrite an Article

**Single article:**
```bash
node scripts/rewrite-article-to-brand-voice.js \
  --input path/to/source.md \
  --output client/src/pages/articles/NewArticle.tsx
```

**Batch processing:**
```bash
# From directory
node scripts/batch-rewrite-articles.js \
  --dir ./source-articles/ \
  --output ./client/src/pages/articles/

# Or from config
node scripts/batch-rewrite-articles.js --config batch-config.json
```

### 3. Review and Deploy

```bash
# Review rewritten article for voice consistency
# Add visual elements (pull quotes, stats cards)
# Update Articles.tsx with metadata

# Test locally
npm run dev

# Deploy
git add .
git commit -m "Add rewritten article: [Title]"
git push
```

## File Locations

```
portfolio-2025/
├── ARTICLE_REWRITE_WORKFLOW.md       ← Complete workflow guide
├── ARTICLE_REWRITE_QUICKSTART.md     ← 5-min quick start
├── ARTICLE_REWRITE_EXAMPLES.md       ← Before/after examples
├── ARTICLE_REWRITE_SUMMARY.md        ← This file
├── batch-config.example.json         ← Batch config template
│
├── scripts/
│   ├── rewrite-article-to-brand-voice.js  ← Single article rewriter
│   ├── batch-rewrite-articles.js          ← Batch processor
│   ├── load-voice-tone.js                 ← Voice loader (updated)
│   └── ARTICLE_SCRIPTS_README.md          ← Script documentation
│
├── Winzenburg Voice and Tone/        ← Voice guidelines (auto-loaded)
│   ├── brand-voice.yaml
│   ├── voice-practitioner-articles.yaml
│   ├── VOICE_QUICK_REFERENCE.md
│   └── AUTHENTICITY_QUICK_GUIDE.md
│
└── client/src/pages/
    ├── Articles.tsx                   ← Update with new article metadata
    └── articles/
        └── [YourNewArticles].tsx      ← Rewritten articles go here
```

## Workflow Overview

```
Source Article (technical/dry)
         ↓
[Run rewrite script]
         ↓
Rewritten Article (brand voice) + TSX component
         ↓
[Review voice checklist]
         ↓
[Add visual elements]
         ↓
[Update Articles.tsx]
         ↓
[Test locally]
         ↓
[Deploy to production]
```

## Voice Transformation

The workflow transforms articles from:

❌ **Technical/Dry:**
- Bullet lists without context
- Passive voice
- Corporate speak
- Generic statements
- No personal perspective

✅ **Brand Voice:**
- Story-driven narratives
- First-person experiences
- Conversational tone
- Specific examples and metrics
- Personal failures and lessons
- Technical accuracy with accessibility

## Costs & Performance

**Typical article rewrite:**
- Input tokens: ~8,000-12,000
- Output tokens: ~4,000-8,000
- Cost per article: $0.06-0.12
- Time: ~30-60 seconds

**Batch processing 10 articles:**
- Total cost: ~$0.60-1.20
- Total time: ~10-15 minutes

## Next Steps

### Immediate Actions

1. **Test the setup:**
   ```bash
   # Verify API key works
   node scripts/test-anthropic-key.js
   
   # Verify voice files load
   node scripts/load-voice-tone.js
   ```

2. **Try a test rewrite:**
   ```bash
   # Use interactive mode with sample content
   node scripts/rewrite-article-to-brand-voice.js --interactive
   ```

3. **Review the examples:**
   - Read `ARTICLE_REWRITE_EXAMPLES.md`
   - Compare before/after transformations
   - Understand key patterns

### Building Your Pipeline

1. **Gather source articles** from your project sites
2. **Organize them** in a source directory
3. **Create batch config** if processing multiple articles
4. **Run batch rewrite** for initial pass
5. **Review and refine** each article individually
6. **Add visual elements** to enhance engagement
7. **Update metadata** in Articles.tsx
8. **Test and deploy**

## Resources

### Primary Documentation
- **Full workflow:** `ARTICLE_REWRITE_WORKFLOW.md`
- **Quick reference:** `ARTICLE_REWRITE_QUICKSTART.md`
- **Examples:** `ARTICLE_REWRITE_EXAMPLES.md`

### Voice Guidelines
- **Quick reference:** `Winzenburg Voice and Tone/VOICE_QUICK_REFERENCE.md`
- **Complete guide:** `Winzenburg Voice and Tone/brand-voice.yaml`
- **Article voice:** `Winzenburg Voice and Tone/voice-practitioner-articles.yaml`

### Article Management
- **General workflow:** `ARTICLES_WORKFLOW.md`
- **Status tracker:** `ARTICLES_TODO.md`

## Support

### Troubleshooting

**Scripts not working?**
- Check `scripts/ARTICLE_SCRIPTS_README.md` → Troubleshooting section

**Voice doesn't sound right?**
- Review `ARTICLE_REWRITE_EXAMPLES.md` → Key patterns
- Check `Winzenburg Voice and Tone/VOICE_QUICK_REFERENCE.md`

**Need more examples?**
- See existing articles in `client/src/pages/articles/`
- Read through transformed examples in `ARTICLE_REWRITE_EXAMPLES.md`

### Getting Help

1. Read the relevant documentation (see Resources above)
2. Check the examples for patterns
3. Try dry-run mode to see the prompt
4. Review voice consistency checklist

## Quality Assurance

Before publishing each rewritten article:

✅ **Voice Checklist:**
- [ ] Opens with compelling hook
- [ ] Uses first-person perspective
- [ ] Includes personal anecdotes
- [ ] Technical concepts explained with analogies
- [ ] Conversational transitions throughout
- [ ] Mix of sentence lengths
- [ ] Personality markers present
- [ ] Shows authority and humility
- [ ] Actionable or thought-provoking ending

✅ **Technical Quality:**
- [ ] Maintains accuracy from original
- [ ] Adds strategic insights
- [ ] Includes specific metrics
- [ ] Flows as narrative prose
- [ ] Visual elements enhance engagement
- [ ] Proper heading hierarchy
- [ ] Appropriate read time

✅ **Production Ready:**
- [ ] Metadata added to Articles.tsx
- [ ] Links work correctly
- [ ] Images load properly
- [ ] Tests locally successfully
- [ ] No linter errors

## Success Metrics

Track these to measure workflow effectiveness:

- **Time saved:** Original writing time vs. rewrite + review time
- **Quality:** Voice consistency across articles
- **Engagement:** Reader metrics on rewritten vs. original articles
- **Throughput:** Articles published per month
- **Adoption:** Team comfort with workflow

## Feedback Loop

As you use the workflow:

1. **Note what works** - Which transformations are most effective?
2. **Identify pain points** - Where does the process slow down?
3. **Refine prompts** - Can the scripts produce better output?
4. **Update guidelines** - Add learnings to voice documentation
5. **Share insights** - Document patterns for future reference

---

## You're All Set! 🎉

The workflow is ready to use. Start with a test article to get familiar with the process, then scale up to batch processing when comfortable.

**Remember:** The scripts provide the initial transformation, but your review and refinement make the articles truly yours.

**The goal:** Help practitioners do their jobs better with insights that feel like a coffee chat with your smartest friend.

Happy rewriting! ☕

