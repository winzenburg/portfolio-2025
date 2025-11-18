# Email Setup Guide

The LinkedIn content automation can send you daily email notifications with your scheduled LinkedIn posts.

## Quick Setup (Gmail - Recommended)

### 1. Create Gmail App Password

Since Google requires 2-factor authentication, you need to create an "App Password":

1. Go to your Google Account: https://myaccount.google.com/apppasswords
2. Sign in if prompted
3. Under "Select app", choose **Mail**
4. Under "Select device", choose **Mac** (or Other)
5. Click **Generate**
6. Google will show you a 16-character password like `abcd efgh ijkl mnop`
7. **Copy this password** (you won't be able to see it again)

### 2. Configure the Script

Create a `.env` file in the Portfolio-2025 directory:

```bash
cd /Users/ryanwinzenburg/Projects/Portfolio-2025
cp .env.example .env
```

Edit the `.env` file and add your app password:

```env
EMAIL_TO=ryanwinzenburg@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=ryanwinzenburg@gmail.com
SMTP_PASSWORD=abcd efgh ijkl mnop  # Your 16-char password (remove spaces)
```

**Important**: Remove the spaces from the password! It should be: `abcdefghijklmnop`

### 3. Update the Script to Load .env

Install dotenv package:

```bash
cd /Users/ryanwinzenburg/Projects/Portfolio-2025
npm install dotenv
```

### 4. Test It

```bash
cd /Users/ryanwinzenburg/Projects/Portfolio-2025
node scripts/send-daily-content.js --dry-run --date 2025-11-04
```

You should receive an email at ryanwinzenburg@gmail.com!

## Alternative: macOS Mail Command

If you don't want to set up Gmail SMTP, the script will fall back to macOS's built-in `mail` command.

**Requirements:**
- Mail.app must be configured with at least one email account
- The account must have permission to send emails

**To use this method:**
- Simply don't set `SMTP_PASSWORD` in your `.env` file
- The script will automatically use the mail command

**Test it:**
```bash
echo "Test email" | mail -s "Test Subject" ryanwinzenburg@gmail.com
```

If you receive the email, the mail command is working!

## Troubleshooting

### Gmail SMTP Not Working

**Error: "Invalid login"**
- Make sure you're using an App Password, not your regular Gmail password
- Remove any spaces from the app password
- Verify 2FA is enabled on your Google account

**Error: "Connection timeout"**
- Check your internet connection
- Verify SMTP_HOST is `smtp.gmail.com`
- Verify SMTP_PORT is `587`

### Mail Command Not Working

**Error: "mail: command not found"**
- The mail command should be available at `/usr/bin/mail`
- Check with: `which mail`

**No email received**
- Open Mail.app and verify at least one account is configured
- Try sending a test email manually through Mail.app
- Check spam/junk folders

## Security Note

**Never commit your `.env` file to git!**

The `.gitignore` should already exclude it, but verify:

```bash
cd /Users/ryanwinzenburg/Projects/Portfolio-2025
git status  # .env should NOT appear in the list
```

If `.env` appears, add it to `.gitignore`:

```bash
echo ".env" >> .gitignore
```

## Email Schedule

Once configured, you'll receive emails automatically:

- **Every Tuesday at 8:00 AM** - Article announcement post
- **Every Thursday at 8:00 AM** - Engagement follow-up post

The emails contain:
- The LinkedIn post content (ready to copy/paste)
- Article link
- Week information
- Action steps

## Manual Testing

Test any date without waiting for the cron:

```bash
# Test today
node scripts/send-daily-content.js

# Test specific date
node scripts/send-daily-content.js --date 2025-11-11

# Dry run (no email sent)
node scripts/send-daily-content.js --dry-run --date 2025-11-11
```
