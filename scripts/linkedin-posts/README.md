# LinkedIn Content Calendar

This directory contains ready-to-post LinkedIn content derived from website articles.

## File Naming Convention

Files should follow this format:
- **New format (preferred)**: `STRATEGIC-week{N}-{day}.txt`
- **Legacy format**: `READY-TO-POST-week{N}-{day}.txt`

Examples:
- `STRATEGIC-week1-tuesday.txt`
- `STRATEGIC-week1-thursday.txt`
- `STRATEGIC-week2-tuesday.txt`

## Content Strategy

Each website article generates content for multiple weeks:

### Tuesday Posts
Strategic business case - complete LinkedIn article (~900 words)
- Problem → Solution → Results narrative
- Real metrics and case studies
- Standalone value with CTA to website

### Thursday Posts
Enterprise case study - story-driven narrative (~500 words)
- Client journey from problem to transformation
- Specific results and lessons learned
- Link to full case study

## Week Calendar

Week 1 starts: Monday, October 27, 2025

Current posting schedule:
- **Tuesday**: 8-10am or 12-1pm PST
- **Thursday**: 8-10am or 12-1pm PST
- Wednesday posts discontinued in new strategy

## Automation

The automation script (`send-daily-content.js`) runs automatically and:
1. Detects current week and day
2. Finds the appropriate content file
3. Emails you the content ready to post
4. Only runs on Tuesday and Thursday

Manual trigger:
```bash
# Auto-detect week and day
pnpm email-today

# Specify week and day
node scripts/send-daily-content.js 2 tuesday
```
