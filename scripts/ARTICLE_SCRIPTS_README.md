# Article Scripts Documentation

This directory contains automation scripts for managing and creating content in your brand voice.

## Article Rewrite Scripts

### `rewrite-article-to-brand-voice.js`

Transform technical or dry articles into your authentic brand voice.

**Purpose**: Rewrite single articles from project sites using AI with your voice and tone guidelines.

**Usage**:
```bash
# From file
node rewrite-article-to-brand-voice.js -i source.md -o NewArticle.tsx

# From URL
node rewrite-article-to-brand-voice.js --url https://example.com/article

# Interactive mode
node rewrite-article-to-brand-voice.js --interactive

# Preview prompt only
node rewrite-article-to-brand-voice.js -i source.md --dry-run
```

**Features**:
- Loads all voice/tone guidelines automatically
- Supports file, URL, or interactive input
- Generates complete TSX component
- Includes metadata and structure suggestions

### `batch-rewrite-articles.js`

Process multiple articles at once from a config file or directory.

**Purpose**: Efficiently rewrite several articles in one session.

**Usage**:
```bash
# Using config file
node batch-rewrite-articles.js --config batch-config.json

# Process entire directory
node batch-rewrite-articles.js --dir ./source-articles/ --output ./client/src/pages/articles/
```

**Features**:
- Batch processing with progress tracking
- Token usage statistics
- Error handling and retry logic
- Rate limiting (1 sec between requests)
- Summary report of successes/failures

**Config Format** (`batch-config.json`):
```json
{
  "articles": [
    {
      "input": "path/to/source.md",
      "output": "OutputArticle.tsx",
      "metadata": {
        "title": "Article Title",
        "category": "AI Workflow",
        "date": "December 7, 2024",
        "readTime": "7 min read"
      }
    }
  ]
}
```

## Supporting Utilities

### `load-voice-tone.js`

Shared utility for loading voice and tone guidelines.

**Purpose**: Ensures consistent voice across all content generation scripts.

**Loads**:
- `brand-voice.yaml` - Core voice identity and principles
- `voice-practitioner-articles.yaml` - Article-specific voice guidance
- `VOICE_QUICK_REFERENCE.md` - Quick reference guide
- `AUTHENTICITY_QUICK_GUIDE.md` - Authenticity markers
- LinkedIn voice files (for social content)

**Usage**:
```javascript
import { loadVoiceAndToneFiles, getSystemPromptWithVoiceTone } from './load-voice-tone.js';

// Load all files
const voiceContent = loadVoiceAndToneFiles();

// Get complete system prompt
const prompt = getSystemPromptWithVoiceTone('Task description');
```

### `validate-articles.js`

Validate article structure and metadata.

**Purpose**: Ensure articles follow proper structure before deployment.

**Checks**:
- Required metadata present
- Proper TSX structure
- Image references valid
- Link structure correct
- Reading time calculation

## Other Content Scripts

### `generate-linkedin-from-article.js`

Generate LinkedIn post from published article.

**Usage**:
```bash
node generate-linkedin-from-article.js --article-url https://yoursite.com/article
```

### `send-weekly-content.js` / `send-daily-content.js`

Automated content distribution scripts (for email/social).

## Environment Setup

**Required Environment Variables**:
```bash
# For AI-powered scripts
export ANTHROPIC_API_KEY=your_key_here

# Test your setup
node test-anthropic-key.js
```

## Workflow Documentation

Comprehensive workflow guides:

- **`../ARTICLE_REWRITE_WORKFLOW.md`** - Full workflow with examples and best practices
- **`../ARTICLE_REWRITE_QUICKSTART.md`** - 5-minute quick start guide
- **`../ARTICLES_WORKFLOW.md`** - General article management

## Voice and Tone Files

Located in `../Winzenburg Voice and Tone/`:

- `brand-voice.yaml` - Complete brand voice guidelines
- `voice-practitioner-articles.yaml` - Article-specific voice guidance
- `VOICE_QUICK_REFERENCE.md` - 60-second voice reference
- `AUTHENTICITY_QUICK_GUIDE.md` - Making content sound human
- `authenticity-markers.yaml` - Specific authenticity techniques
- LinkedIn voice files - Social media adaptations

## Quick Commands

```bash
# Rewrite single article
node scripts/rewrite-article-to-brand-voice.js -i source.md -o Article.tsx

# Batch rewrite from directory
node scripts/batch-rewrite-articles.js --dir ./drafts/ --output ./client/src/pages/articles/

# Preview without API call
node scripts/rewrite-article-to-brand-voice.js -i source.md --dry-run

# Test voice files loading
node scripts/load-voice-tone.js

# Validate articles
node scripts/validate-articles.js

# Generate LinkedIn post
node scripts/generate-linkedin-from-article.js --article-url URL
```

## Token Usage & Costs

**Typical token usage per article**:
- Input: ~8,000-12,000 tokens (voice guidelines + source article)
- Output: ~4,000-8,000 tokens (rewritten article)
- Total: ~12,000-20,000 tokens per article

**Claude Sonnet 4 pricing** (as of Dec 2024):
- Input: $3 per million tokens
- Output: $15 per million tokens
- Typical article: $0.06-0.12

**Batch processing 10 articles**: ~$0.60-1.20

## Best Practices

### Before Running Scripts

1. **Set API key**: `export ANTHROPIC_API_KEY=your_key`
2. **Test connection**: `node scripts/test-anthropic-key.js`
3. **Review voice files**: Check `Winzenburg Voice and Tone/` is up to date
4. **Prepare source**: Clean up source article formatting

### After Rewriting

1. **Review for voice**: Use checklist in ARTICLE_REWRITE_WORKFLOW.md
2. **Add visual elements**: Pull quotes, stats cards, comparisons
3. **Update metadata**: Add to Articles.tsx index
4. **Test locally**: `npm run dev`
5. **Deploy**: Git commit and push

### Batch Processing Tips

- Process 5-10 articles at a time
- Review each article individually after batch
- Keep source articles in organized directory structure
- Use descriptive output filenames (PascalCase)
- Back up original articles

## Troubleshooting

**API Key Issues**:
```bash
# Check if set
echo $ANTHROPIC_API_KEY

# Test key
node scripts/test-anthropic-key.js
```

**Voice Files Not Loading**:
```bash
# Test loading
node scripts/load-voice-tone.js

# Check files exist
ls -la "../Winzenburg Voice and Tone/"
```

**Output Doesn't Sound Like You**:
- Review VOICE_QUICK_REFERENCE.md
- Check voice files are latest version
- Try with --dry-run to see prompt
- Verify metadata provides enough context

**Script Fails Mid-Batch**:
- Check failed articles in summary
- Re-run just failed articles
- Verify rate limiting isn't issue (1 sec between)
- Check token limits not exceeded

## Support & Updates

- Workflow docs: See `../ARTICLE_REWRITE_WORKFLOW.md`
- Voice guide: See `../Winzenburg Voice and Tone/VOICE_QUICK_REFERENCE.md`
- Article management: See `../ARTICLES_WORKFLOW.md`

## Change Log

- **2024-12-07**: Created article rewrite workflow and scripts
  - Added `rewrite-article-to-brand-voice.js`
  - Added `batch-rewrite-articles.js`
  - Updated `load-voice-tone.js` to include practitioner voice
  - Created comprehensive workflow documentation

