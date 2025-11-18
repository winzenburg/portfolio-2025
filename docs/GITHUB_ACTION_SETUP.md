# GitHub Action Setup for Daily Content Automation

This guide explains how to set up the GitHub Action to automatically send daily LinkedIn content notifications.

## Overview

The GitHub Action runs daily at 7 AM PST (15:00 UTC) and:
1. Checks out your Portfolio-2025 repository
2. Checks out your Winzenburg-Content repository (private)
3. Runs the `send-daily-content.js` script
4. Sends email notifications for posts scheduled for that day
5. Uploads logs as artifacts

## Prerequisites

1. GitHub repository for Portfolio-2025
2. Access to Winzenburg-Content repository (can be private)
3. Gmail account with app-specific password (or other SMTP provider)

## Required GitHub Secrets

You need to configure the following secrets in your GitHub repository:

### Navigate to Secrets
1. Go to your repository on GitHub
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** for each of the following:

### Secret Configuration

| Secret Name | Description | Example Value |
|------------|-------------|---------------|
| `CONTENT_REPO_OWNER` | GitHub username/org that owns Winzenburg-Content | `ryanwinzenburg` |
| `CONTENT_REPO_TOKEN` | GitHub Personal Access Token with repo access | `ghp_xxxxxxxxxxxx` |
| `SMTP_HOST` | SMTP server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port | `587` |
| `SMTP_USER` | SMTP username (usually your email) | `ryanwinzenburg@gmail.com` |
| `SMTP_PASSWORD` | App-specific password for Gmail | `xxxx xxxx xxxx xxxx` |
| `EMAIL_TO` | Email address to send notifications to | `ryanwinzenburg@gmail.com` |
| `EMAIL_FROM` | From address for emails | `LinkedIn Bot <noreply@example.com>` |

## Creating GitHub Personal Access Token

The `CONTENT_REPO_TOKEN` is needed to access your private Winzenburg-Content repository:

1. Go to GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Click **Generate new token (classic)**
3. Set the following:
   - **Note**: "Content Automation Access"
   - **Expiration**: 90 days (or custom)
   - **Scopes**: Check `repo` (Full control of private repositories)
4. Click **Generate token**
5. Copy the token immediately (you won't see it again)
6. Add it as the `CONTENT_REPO_TOKEN` secret

## Creating Gmail App-Specific Password

For the `SMTP_PASSWORD`:

1. Go to your Google Account → **Security**
2. Enable **2-Step Verification** (required for app passwords)
3. Go to **2-Step Verification** → scroll to bottom → **App passwords**
4. Click **Select app** → choose **Mail**
5. Click **Select device** → choose **Other** → enter "GitHub Actions"
6. Click **Generate**
7. Copy the 16-character password (format: `xxxx xxxx xxxx xxxx`)
8. Add it as the `SMTP_PASSWORD` secret

## Testing the Workflow

### Manual Trigger (Recommended for Testing)

1. Go to your repository → **Actions** tab
2. Click on **Daily LinkedIn Content Automation** workflow
3. Click **Run workflow** dropdown
4. Configure test run:
   - ✅ Check **Run in dry-run mode** (to test without sending emails)
   - Enter a **test date** (e.g., `2025-11-18` for a day you know has content)
5. Click **Run workflow**

### Test Specific Dates

Test Tuesday post (article announcement):
```yaml
dry_run: true
test_date: 2025-11-11
```

Test Thursday post (engagement post):
```yaml
dry_run: true
test_date: 2025-11-13
```

### Live Test

Once dry-run works:
1. Run workflow again
2. Leave **dry-run** unchecked
3. Use a test date or leave empty for today
4. You should receive an email notification

## Scheduled Execution

The workflow runs automatically via cron schedule:

```yaml
schedule:
  - cron: '0 15 * * *'  # Daily at 15:00 UTC (7 AM PST)
```

To change the schedule:
1. Edit `.github/workflows/daily-content.yml`
2. Modify the cron expression
3. Commit and push changes

### Cron Expression Examples

- `0 15 * * *` - 7 AM PST (15:00 UTC) daily
- `0 14 * * *` - 6 AM PST (14:00 UTC) daily
- `0 16 * * 2,4` - 8 AM PST (16:00 UTC) only on Tue/Thu

## Viewing Results

### Check Workflow Runs

1. Go to **Actions** tab
2. Click on a workflow run
3. View job logs

### Download Logs

1. Scroll to bottom of workflow run page
2. Under **Artifacts**, click **content-automation-logs**
3. Download and unzip to view detailed logs

### Email Notifications

- Check your `EMAIL_TO` inbox for notifications
- Each email contains the LinkedIn post content ready to copy/paste

## Troubleshooting

### Workflow Fails with "Authentication failed"

**Problem**: SMTP credentials are incorrect

**Solution**:
- Verify `SMTP_USER` and `SMTP_PASSWORD` secrets
- For Gmail, ensure you created an app-specific password (not your regular password)
- Ensure 2FA is enabled on your Google account

### Workflow Fails with "Repository not found"

**Problem**: Can't access Winzenburg-Content repository

**Solution**:
- Verify `CONTENT_REPO_OWNER` secret is correct
- Verify `CONTENT_REPO_TOKEN` has `repo` scope
- Ensure token hasn't expired
- If private repo, ensure token has access to it

### No Posts Found

**Problem**: Script reports "No posts scheduled for today"

**Solution**:
- This is normal if no posts are scheduled for that day
- Verify `linkedin-content-schedule.yaml` has posts with matching `publish_date`
- Use manual trigger with a test date that has posts

### Script Runs But No Email Received

**Problem**: Workflow succeeds but no email arrives

**Solution**:
- Check spam/junk folder
- Verify `EMAIL_TO` secret is correct
- Check workflow logs for SMTP errors
- Test SMTP credentials manually if needed

## Cost Considerations

GitHub Actions usage:
- **Public repositories**: Unlimited minutes (free)
- **Private repositories**: 2,000 minutes/month free, then $0.008/minute

This workflow uses ~1-2 minutes per run:
- Daily runs: ~30-60 minutes/month
- Well within free tier for private repos

## Security Best Practices

1. **Never commit secrets** to your repository
2. **Use app-specific passwords** instead of account passwords
3. **Set token expiration** dates and rotate regularly
4. **Limit token scope** to only what's needed (`repo` only)
5. **Review workflow logs** regularly for suspicious activity
6. **Use environment protection rules** for production workflows (optional)

## Alternative: Using GitHub's Email Service

Instead of Gmail SMTP, you can use GitHub's built-in notification system:

1. Remove SMTP secrets
2. Modify script to use GitHub Actions output
3. Configure GitHub notifications in repo settings

This is simpler but less flexible for custom email formatting.

## Next Steps

1. ✅ Set up all required secrets
2. ✅ Test with dry-run and a known date
3. ✅ Test live with a test date
4. ✅ Verify email received
5. ✅ Let it run automatically

## Support

If you encounter issues:
1. Check workflow logs in GitHub Actions
2. Review the troubleshooting section above
3. Verify all secrets are correctly configured
4. Test the script locally first with `npm run send-content:dry-run`
