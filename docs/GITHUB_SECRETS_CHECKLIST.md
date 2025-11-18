# GitHub Secrets Checklist

Quick reference for setting up GitHub Action secrets.

## Setup Location
**Repository Settings → Secrets and variables → Actions → New repository secret**

## Required Secrets (8 total)

### Content Repository Access
- [ ] `CONTENT_REPO_OWNER` = `ryanwinzenburg`
- [ ] `CONTENT_REPO_TOKEN` = Your GitHub Personal Access Token
  - Create at: Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Scope needed: `repo` (Full control of private repositories)
  - Expiration: 90 days recommended

### Email Configuration (Gmail)
- [ ] `SMTP_HOST` = `smtp.gmail.com`
- [ ] `SMTP_PORT` = `587`
- [ ] `SMTP_USER` = `ryanwinzenburg@gmail.com`
- [ ] `SMTP_PASSWORD` = Your Gmail App Password
  - Create at: Google Account → Security → 2-Step Verification → App passwords
  - Choose: Mail + Other (GitHub Actions)
- [ ] `EMAIL_TO` = `ryanwinzenburg@gmail.com`
- [ ] `EMAIL_FROM` = `LinkedIn Bot <noreply@example.com>`

## Verification Steps

1. Navigate to Actions tab
2. Select "Daily LinkedIn Content Automation"
3. Click "Run workflow"
4. Enable "Run in dry-run mode"
5. Set test_date to a date with scheduled content
6. Run and check logs

## Quick Test

```bash
# In Portfolio-2025 directory
npm run send-content:dry-run
```

This tests locally before GitHub Action testing.
