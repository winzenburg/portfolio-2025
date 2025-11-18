# GitHub Actions Workflows

## Daily LinkedIn Content Automation

**File**: `daily-content.yml`

Automatically sends email notifications for LinkedIn posts scheduled in the Winzenburg-Content repository.

### Schedule
- Runs daily at 7 AM PST (15:00 UTC)
- Can be triggered manually for testing

### Setup Required
See `docs/GITHUB_ACTION_SETUP.md` for complete setup instructions.

Quick checklist:
1. Configure 8 GitHub secrets (see `docs/GITHUB_SECRETS_CHECKLIST.md`)
2. Test with dry-run mode
3. Verify email notifications work
4. Enable scheduled runs

### Manual Testing

1. Go to **Actions** tab
2. Select **Daily LinkedIn Content Automation**
3. Click **Run workflow**
4. Options:
   - ✅ **dry_run**: Test without sending emails
   - 📅 **test_date**: Override today's date (format: YYYY-MM-DD)

### Common Test Dates

Use these dates to test with actual scheduled content:
- `2025-11-11` (Tuesday - Article announcement)
- `2025-11-13` (Thursday - Engagement post)
