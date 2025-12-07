# LinkedIn Content Generation from Articles

This document explains how to automatically generate LinkedIn posts from website articles using Claude AI.

## Overview

The content calendar is now **fully integrated** with your website articles. The system can:

1. ✅ Extract content from website article TSX files
2. ✅ Use Claude AI to rewrite articles for LinkedIn (following CLAUDE.md guidelines)
3. ✅ Generate Tuesday and Thursday posts automatically
4. ✅ Save posts to `linkedin-posts/` directory
5. ✅ Email posts via the existing email automation

## Setup

### 1. Install Dependencies

```bash
pnpm install
```

This will install `@anthropic-ai/sdk` which is required for Claude API integration.

### 2. Add API Key

Add your Anthropic API key to `.env`:

```bash
ANTHROPIC_API_KEY=your-api-key-here
```

Get your API key at: https://console.anthropic.com/

## Usage

### Generate LinkedIn Posts from an Article

```bash
pnpm generate-linkedin <article-slug> [week-number]
```

**Examples:**

```bash
# Generate posts for Week 1 from "Design Systems Fail" article
pnpm generate-linkedin design-systems-fail 1

# Generate posts for Week 2 from "AI Augmented Workflow" article
pnpm generate-linkedin ai-augmented-workflow 2
```

### Available Articles

- `design-systems-fail` - Why Most Design Systems Fail
- `design-system-4-weeks` - Design System in 4 Weeks
- `ai-augmented-workflow` - AI-Augmented Workflow
- `ai-powered-market-validation` - AI-Powered Market Validation
- `ai-tech-stack` - AI Tech Stack
- `audience-first-go-to-market` - Audience-First Go-to-Market
- `monetization-strategy` - Monetization Strategy
- `mvp-strategy` - MVP Strategy
- `scaling-strategy` - Scaling Strategy

## What Gets Generated

For each article, the script generates:

1. **Tuesday Post** (`STRATEGIC-week{N}-tuesday.txt`)
   - Complete LinkedIn article (~800-1000 words)
   - Full narrative arc: problem → solution → results
   - Includes all key insights and metrics
   - Natural CTA to website article

2. **Thursday Post** (`STRATEGIC-week{N}-thursday.txt`)
   - Case study story (~500 words)
   - Story-driven narrative
   - Client journey and transformation
   - Link to full case study

## Workflow

### Complete Content Calendar Workflow

1. **Generate Posts from Article:**
   ```bash
   pnpm generate-linkedin design-systems-fail 1
   ```

2. **Review Generated Posts:**
   - Check `scripts/linkedin-posts/STRATEGIC-week1-tuesday.txt`
   - Check `scripts/linkedin-posts/STRATEGIC-week1-thursday.txt`
   - Make any necessary edits

3. **Test Email Delivery:**
   ```bash
   pnpm email-today
   ```
   This will auto-detect the current week/day and email the appropriate post.

4. **Schedule Automation:**
   GitHub Actions automatically emails posts on Tuesday and Thursday mornings at 8:00 AM PST.

### GitHub Actions Setup

The workflow (`.github/workflows/send-linkedin-content.yml`) runs automatically on Tuesday and Thursday mornings. To set it up:

1. **Add GitHub Secrets:**
   - Go to your repository on GitHub
   - Navigate to: **Settings** → **Secrets and variables** → **Actions**
   - Add the following secrets:
     - `RESEND_API_KEY`: Your Resend API key (get from https://resend.com/api-keys)
     - `EMAIL_FROM`: Your sender email (e.g., `Portfolio 2025 <noreply@yourdomain.com>`) - optional, defaults to `onboarding@resend.dev`
     - `EMAIL_TO`: `ryanwinzenburg@gmail.com` (optional, defaults to ryanwinzenburg@gmail.com)

2. **Get Resend API Key:**
   - Sign up at: https://resend.com
   - Go to: https://resend.com/api-keys
   - Create a new API key
   - Copy the key and add it as `RESEND_API_KEY` secret in GitHub

3. **Test the Workflow:**
   - Go to **Actions** tab in GitHub
   - Find "Send LinkedIn Content" workflow
   - Click "Run workflow" to test manually
   - Check your email to verify it works

4. **Schedule:**
   - The workflow runs automatically every Tuesday and Thursday at 8:00 AM PST (4:00 PM UTC)
   - You can also trigger it manually via the Actions tab

### Authenticity Enforcement

- Generation now applies the rules in `Winzenburg Voice and Tone/AUTHENTICITY_QUICK_GUIDE.md` (moved from config)
- Posts must include recurring phrases ("Here’s the thing though…", "Real talk:", etc.)
- Requires specific timestamps/metrics, a personal story, and at least one admitted mistake
- Forces conversational quirks (parentheticals, em-dashes, fragments, varied sentence lengths)
- Blocks corporate/AI tell phrases ("In today’s fast-paced world…", "Furthermore…", etc.)

> **Tip:** Adjust the authenticity guide to tweak these markers, then re-run `pnpm generate-linkedin ...` to see updated output.

### Voice & Tone Source of Truth

- All brand voice assets now live in `Winzenburg Voice and Tone/` (e.g., `brand-voice.yaml`, `VOICE_QUICK_REFERENCE.md`, `linkedin-writing-framework.yaml`)
- The generator references these files to maintain the "Playful Thought Leader" persona tailored to VCs, VP-level execs, and design leaders
- Update those YAML/MD files to evolve tone, power phrases, or strategic positioning; rerun generation to apply changes

## How It Works

1. **Article Extraction:**
   - Reads the TSX file from `client/src/pages/articles/`
   - Extracts text content (strips JSX, keeps paragraphs and headings)
   - Identifies title, subtitle, and main content

2. **Claude AI Rewriting:**
   - Sends article content to Claude API
   - Uses system prompt based on CLAUDE.md guidelines
   - Generates LinkedIn-optimized posts following:
     - Tuesday format (complete article)
     - Thursday format (case study story)
   - Includes natural CTAs with article URLs

3. **File Saving:**
   - Saves generated posts to `scripts/linkedin-posts/`
   - Uses naming convention: `STRATEGIC-week{N}-{day}.txt`
   - Ready for email automation

## Integration Status

✅ **Content Calendar Integration Complete**

- ✅ Scripts can find `linkedin-posts/` directory
- ✅ Paths are correctly configured
- ✅ Article extraction from TSX files
- ✅ Claude AI integration for rewriting
- ✅ Automatic post generation (Tuesday & Thursday)
- ✅ Email automation ready
- ✅ Article URLs included in CTAs
- ✅ GitHub Actions workflow for automated email delivery

## Troubleshooting

### "ANTHROPIC_API_KEY not found"
- Add your API key to `.env` file
- Get key from: https://console.anthropic.com/

### "RESEND_API_KEY not found"
- Add your Resend API key to `.env` file or GitHub Secrets
- Get key from: https://resend.com/api-keys
- For local testing, add to `.env`: `RESEND_API_KEY=re_xxxxxxxxxxxxx`

### "Article not found"
- Check the article slug matches one of the available articles
- Article slugs are kebab-case (e.g., `design-systems-fail`)

### "Module not found: @anthropic-ai/sdk"
- Run `pnpm install` to install dependencies

### Generated posts need editing
- This is expected! Review and edit the generated posts
- The AI follows guidelines but may need human refinement
- Edit files in `scripts/linkedin-posts/` before sending

## Next Steps

1. Generate posts for your first week
2. Review and refine the generated content
3. Test email delivery
4. Set up automation (if not already done)
5. Generate posts for future weeks as needed

The content calendar is now fully integrated and ready to use! 🎉

