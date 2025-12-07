#!/usr/bin/env node

/**
 * Daily LinkedIn Content Sender
 *
 * This script checks the linkedin-content-schedule.yaml file and sends
 * content notifications for posts scheduled for today.
 *
 * Usage:
 *   node send-daily-content.js [--dry-run] [--date YYYY-MM-DD]
 *
 * Options:
 *   --dry-run    Show what would be posted without actually posting
 *   --date       Override today's date (for testing)
 */

<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const nodemailer = require('nodemailer');
=======
import { config } from 'dotenv';
import { Resend } from 'resend';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { resolve, basename, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
>>>>>>> 1d7a912 (Add article rewrite workflow documentation and scripts)

// Load environment variables from .env file if it exists
const dotenvPath = path.join(__dirname, '..', '.env');
if (fs.existsSync(dotenvPath)) {
  require('dotenv').config({ path: dotenvPath });
}

// Configuration
<<<<<<< HEAD
const CONFIG = {
  scheduleFile: process.env.CONTENT_SCHEDULE_PATH || path.join(
    process.env.HOME,
    'Library/CloudStorage/GoogleDrive-ryanwinzenburg@gmail.com/My Drive/Projects/Winzenburg-Content/linkedin-content-schedule.yaml'
  ),
  outputDir: path.join(__dirname, '../logs'),
  emailTo: process.env.EMAIL_TO || 'ryanwinzenburg@gmail.com',
  emailFrom: process.env.EMAIL_FROM || 'LinkedIn Content Bot <noreply@localhost>',
  // Email configuration (uses Gmail by default, configure via .env)
  smtp: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || process.env.EMAIL_TO || 'ryanwinzenburg@gmail.com',
      pass: process.env.SMTP_PASSWORD || '', // App-specific password for Gmail
    },
  },
};

// Parse command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const dateIndex = args.indexOf('--date');
const testDate = dateIndex !== -1 ? args[dateIndex + 1] : null;
=======
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM || 'Portfolio 2025 <onboarding@resend.dev>';
const EMAIL_TO = process.env.EMAIL_TO || 'potshardscast@gmail.com';

// Validate configuration
if (!RESEND_API_KEY) {
  console.error('❌ Error: RESEND_API_KEY not configured in .env file');
  console.error('\nPlease add your Resend API key to .env:');
  console.error('  RESEND_API_KEY=re_xxxxxxxxxxxxx');
  console.error('  EMAIL_FROM=Your Name <your-email@yourdomain.com> (optional)');
  console.error('  EMAIL_TO=ryanwinzenburg@gmail.com (optional)');
  console.error('\nGet your API key at: https://resend.com/api-keys');
  process.exit(1);
}
>>>>>>> 1d7a912 (Add article rewrite workflow documentation and scripts)

/**
 * Get today's date in YYYY-MM-DD format
 */
function getTodayDate() {
  if (testDate) {
    return testDate;
  }
<<<<<<< HEAD
=======

  if (!['tuesday', 'thursday'].includes(postDay)) {
    console.error('❌ Error: Day must be tuesday or thursday');
    console.error('   (Wednesday posts have been discontinued in the new strategy)');
    process.exit(1);
  }
} else {
  // Auto-detect mode
  const WEEK_1_START = new Date('2025-10-27'); // Monday of Week 1
>>>>>>> 1d7a912 (Add article rewrite workflow documentation and scripts)
  const today = new Date();
  return today.toISOString().split('T')[0];
}

<<<<<<< HEAD
/**
 * Get day of week (lowercase)
 */
function getDayOfWeek(dateString) {
  const date = new Date(dateString + 'T00:00:00');
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return days[date.getDay()];
=======
console.log(`📅 Processing Week ${weekNumber} - ${postDay.charAt(0).toUpperCase() + postDay.slice(1)}'s post\n`);

// Find the content file for this specific day
const linkedinPostsDir = resolve(__dirname, './linkedin-posts');

// Try STRATEGIC- prefix first (new format), fallback to READY-TO-POST- (legacy)
let fileName = `STRATEGIC-week${weekNumber}-${postDay}.txt`;
let filePath = join(linkedinPostsDir, fileName);

if (!existsSync(filePath)) {
  // Try legacy format
  fileName = `READY-TO-POST-week${weekNumber}-${postDay}.txt`;
  filePath = join(linkedinPostsDir, fileName);

  if (!existsSync(filePath)) {
    console.log(`⚠️  No post found for Week ${weekNumber} - ${postDay}`);
    console.log(`   Expected file: STRATEGIC-week${weekNumber}-${postDay}.txt`);
    console.log(`   Or legacy: READY-TO-POST-week${weekNumber}-${postDay}.txt`);
    console.log(`\n💡 Tip: Create the file at:`);
    console.log(`   ${join(linkedinPostsDir, `STRATEGIC-week${weekNumber}-${postDay}.txt`)}`);
    process.exit(1);
  }
>>>>>>> 1d7a912 (Add article rewrite workflow documentation and scripts)
}

/**
 * Load and parse the content schedule YAML file
 */
function loadSchedule() {
  try {
<<<<<<< HEAD
    const fileContents = fs.readFileSync(CONFIG.scheduleFile, 'utf8');
    const data = yaml.load(fileContents);
    return data.schedule;
=======
    const content = readFileSync(contentFilePath, 'utf-8');

    // Extract post details from filename
    const articleTitle = fileName
      .replace('.txt', '')
      .replace('.md', '')
      .replace('READY-TO-POST-', '')
      .replace(/week-?\d+-?/i, '')
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    let postType = 'LinkedIn Post';
    const dayCapitalized = day.charAt(0).toUpperCase() + day.slice(1);

    if (day === 'tuesday') {
      postType = `${dayCapitalized} - Strategic Business Case`;
    } else if (day === 'thursday') {
      postType = `${dayCapitalized} - Enterprise Case Study`;
    }

    // Initialize Resend
    const resend = new Resend(RESEND_API_KEY);

    // Email subject
    const subject = `✅ ${dayCapitalized}'s Post Ready: ${articleTitle} (Week ${weekNum})`;

    // Email text content
    const textContent = `
LinkedIn Content Ready for Today - Week ${weekNum} ${dayCapitalized}
=====================================================================

Article: ${articleTitle}
Post Type: ${postType}
Week: ${weekNum}
Day: ${dayCapitalized}
File: ${fileName}

INSTRUCTIONS FOR TODAY:
-----------------------
1. Review the content below
2. If approved: Copy the content between the dividers
3. Go to https://www.linkedin.com
4. Click "Start a post"
5. Paste content
6. Preview and post NOW (or schedule for optimal time today)
7. Engage with comments in first hour

Best times today:
- 8-10am or 12-1pm PST

Remember:
- Respond to every comment within 2 hours
- Add value in responses, don't just say "thanks"
- Stay active for first 60-90 minutes after posting

CONTENT TO POST TODAY:
================================================================================

${content}

================================================================================

QUICK CHECKLIST FOR TODAY:
---------------------------
[ ] Content reviewed and approved
[ ] Article link is correct
[ ] Hashtags are relevant
[ ] Posted at optimal time (8-10am or 12-1pm)
[ ] Ready to engage when it goes live

--
Automated by Portfolio 2025 Content System
Week ${weekNum} ${dayCapitalized} | Generated: ${new Date().toLocaleString()}
      `.trim();

    // Email HTML content
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      background-color: white;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      margin: -30px -30px 30px -30px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .header .day-badge {
      background-color: rgba(255,255,255,0.2);
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 14px;
      margin-bottom: 8px;
      font-weight: 600;
    }
    .meta {
      background-color: #f8fafc;
      padding: 15px;
      border-radius: 6px;
      margin-bottom: 20px;
      border-left: 4px solid #06b6d4;
    }
    .meta-item {
      margin: 5px 0;
    }
    .meta-label {
      font-weight: 600;
      color: #475569;
    }
    .today-notice {
      background-color: #fef3c7;
      padding: 15px;
      border-radius: 6px;
      margin: 20px 0;
      border-left: 4px solid #f59e0b;
    }
    .today-notice strong {
      color: #92400e;
    }
    .instructions {
      background-color: #eff6ff;
      padding: 15px;
      border-radius: 6px;
      margin: 20px 0;
      border-left: 4px solid #3b82f6;
    }
    .instructions h3 {
      margin-top: 0;
      color: #1e40af;
    }
    .instructions ol {
      margin: 10px 0;
      padding-left: 20px;
    }
    .content-box {
      background-color: #fafafa;
      border: 2px dashed #cbd5e1;
      padding: 20px;
      border-radius: 6px;
      margin: 20px 0;
      font-family: 'Courier New', monospace;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .checklist {
      background-color: #f0fdf4;
      padding: 15px;
      border-radius: 6px;
      margin: 20px 0;
      border-left: 4px solid #22c55e;
    }
    .checklist h3 {
      margin-top: 0;
      color: #15803d;
    }
    .checklist ul {
      list-style: none;
      padding-left: 0;
    }
    .checklist li:before {
      content: "☐ ";
      color: #22c55e;
      font-weight: bold;
      margin-right: 8px;
    }
    .footer {
      text-align: center;
      color: #64748b;
      font-size: 14px;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="day-badge">Week ${weekNum} • ${dayCapitalized}</div>
      <h1>✅ ${dayCapitalized}'s LinkedIn Post Ready!</h1>
    </div>

    <div class="today-notice">
      <strong>📅 Post this today (${dayCapitalized})!</strong><br>
      Best times: 8-10am or 12-1pm PST
    </div>

    <div class="meta">
      <div class="meta-item"><span class="meta-label">Article:</span> ${articleTitle}</div>
      <div class="meta-item"><span class="meta-label">Post Type:</span> ${postType}</div>
      <div class="meta-item"><span class="meta-label">Week:</span> ${weekNum}</div>
      <div class="meta-item"><span class="meta-label">Day:</span> ${dayCapitalized}</div>
      <div class="meta-item"><span class="meta-label">Generated:</span> ${new Date().toLocaleString()}</div>
    </div>

    <div class="instructions">
      <h3>📋 Instructions for Today</h3>
      <ol>
        <li>Review the content below</li>
        <li>If approved: Copy the content from the gray box</li>
        <li>Go to <a href="https://www.linkedin.com" target="_blank">LinkedIn</a></li>
        <li>Click "Start a post"</li>
        <li>Paste content and preview</li>
        <li>Post NOW or schedule for optimal time today (8-10am or 12-1pm)</li>
        <li>Engage with comments in first hour</li>
      </ol>
    </div>

    <h3>📄 Content to Post Today:</h3>
    <div class="content-box">${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>

    <div class="checklist">
      <h3>✓ Today's Checklist</h3>
      <ul>
        <li>Content reviewed and approved</li>
        <li>Article link is correct</li>
        <li>Hashtags are relevant</li>
        <li>Posted at optimal time</li>
        <li>Ready to engage when it goes live</li>
      </ul>
    </div>

    <div class="footer">
      <p>Automated by Portfolio 2025 Content System</p>
      <p>Week ${weekNum} ${dayCapitalized} | ${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
      `.trim();

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: subject,
      text: textContent,
      html: htmlContent,
    });

    if (error) {
      throw new Error(`Resend API error: ${error.message}`);
    }

    return { success: true, messageId: data?.id, file: fileName, postType, day: dayCapitalized };

>>>>>>> 1d7a912 (Add article rewrite workflow documentation and scripts)
  } catch (error) {
    console.error(`Error loading schedule file: ${error.message}`);
    process.exit(1);
  }
}

/**
 * Find posts scheduled for today
 */
function findTodaysPosts(schedule, today) {
  const todaysPosts = [];

  Object.entries(schedule).forEach(([weekKey, weekData]) => {
    // Skip completed weeks
    if (weekData.status === 'completed') {
      return;
    }

<<<<<<< HEAD
    // Check each post in the week
    if (weekData.posts) {
      Object.entries(weekData.posts).forEach(([day, postData]) => {
        if (postData.publish_date === today) {
          todaysPosts.push({
            week: weekKey,
            day: day,
            article: weekData.article,
            post: postData,
          });
        }
      });
    }
  });

  return todaysPosts;
}

/**
 * Format post content for email
 */
function formatPostForEmail(postInfo) {
  const { week, day, article, post } = postInfo;

  return `
================================================================================
📅 LINKEDIN POST SCHEDULED FOR TODAY
================================================================================

Week: ${week}
Day: ${day}
Type: ${post.type}
Article: ${article.title}

--------------------------------------------------------------------------------
POST CONTENT:
--------------------------------------------------------------------------------

${post.content.trim()}

--------------------------------------------------------------------------------
ACTION REQUIRED:
--------------------------------------------------------------------------------
1. Copy the post content above
2. Go to LinkedIn: https://www.linkedin.com/
3. Create a new post and paste the content
4. Add any relevant images or media
5. Click "Post"

Article Link: ${article.slug ? `https://winzenburg.com/articles/${article.slug}` : 'N/A'}

================================================================================
`;
}

/**
 * Create email transporter
 */
function createTransporter() {
  // If no SMTP password is set, use macOS mail command as fallback
  if (!CONFIG.smtp.auth.pass) {
    return null; // Will use command-line mail instead
=======
  if (result.success) {
    console.log(`✅ Email sent successfully!`);
    console.log(`📧 To: ${EMAIL_TO}`);
    console.log(`📝 Subject: ${result.day}'s Post Ready (Week ${weekNumber})`);
    console.log(`🆔 Message ID: ${result.messageId}`);
    console.log(`\n✨ Check your email and post today!\n`);
  } else {
    console.error(`❌ Failed to send email`);
    console.error(`   Error: ${result.error}\n`);
    process.exit(1);
>>>>>>> 1d7a912 (Add article rewrite workflow documentation and scripts)
  }

  try {
    return nodemailer.createTransport(CONFIG.smtp);
  } catch (error) {
    console.warn(`Warning: Could not create email transporter: ${error.message}`);
    return null;
  }
}

/**
 * Send email using macOS mail command
 */
async function sendEmailViaMailCommand(subject, body, to) {
  const { exec } = require('child_process');
  const { promisify } = require('util');
  const execAsync = promisify(exec);

  try {
    // Create a temporary file with the email body
    const tmpFile = path.join(CONFIG.outputDir, '.email_body.txt');
    fs.writeFileSync(tmpFile, body);

    // Use macOS mail command
    const command = `cat "${tmpFile}" | mail -s "${subject}" "${to}"`;
    await execAsync(command);

    // Clean up temp file
    fs.unlinkSync(tmpFile);

    console.log(`✅ Email sent via mail command to ${to}`);
    return true;
  } catch (error) {
    console.error(`Error sending email via mail command: ${error.message}`);
    return false;
  }
}

/**
 * Send email notification
 */
async function sendEmail(subject, body) {
  const logFile = path.join(CONFIG.outputDir, 'linkedin-automation.log');
  const errorLogFile = path.join(CONFIG.outputDir, 'linkedin-automation-error.log');

  try {
    // Ensure log directory exists
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });

    // Create log entry
    const timestamp = new Date().toISOString();
    const logEntry = `
[${timestamp}]
${subject}

${body}
`;

    // Append to log file
    fs.appendFileSync(logFile, logEntry);

    // Also output to console
    console.log('='.repeat(80));
    console.log(subject);
    console.log('='.repeat(80));
    console.log(body);

    // Try to send actual email
    const transporter = createTransporter();

    if (transporter) {
      // Send via SMTP (Gmail)
      const mailOptions = {
        from: CONFIG.emailFrom,
        to: CONFIG.emailTo,
        subject: subject,
        text: body,
        html: `<pre style="font-family: monospace; white-space: pre-wrap;">${body.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`,
      };

      await transporter.sendMail(mailOptions);
      console.log(`\n✅ Email sent via SMTP to ${CONFIG.emailTo}`);
    } else {
      // Fallback to macOS mail command
      console.log('\nℹ️  No SMTP configured, using macOS mail command...');
      await sendEmailViaMailCommand(subject, body, CONFIG.emailTo);
    }

    return true;
  } catch (error) {
    console.error(`Error sending email: ${error.message}`);
    fs.appendFileSync(errorLogFile, `[${new Date().toISOString()}] ${error.stack}\n`);

    // Still log to console even if email fails
    console.log('\n⚠️  Email sending failed, but content logged above.');
    return false;
  }
}

/**
 * Main execution
 */
async function main() {
  const today = getTodayDate();
  const dayOfWeek = getDayOfWeek(today);

  console.log(`\n🤖 LinkedIn Content Automation`);
  console.log(`📅 Date: ${today} (${dayOfWeek})`);
  console.log(`🔧 Mode: ${isDryRun ? 'DRY RUN' : 'LIVE'}\n`);

  // Load schedule
  const schedule = loadSchedule();

  // Find today's posts
  const todaysPosts = findTodaysPosts(schedule, today);

  if (todaysPosts.length === 0) {
    console.log(`✅ No posts scheduled for ${today}`);
    await sendEmail(
      `LinkedIn Automation: No Posts for ${today}`,
      `No LinkedIn posts are scheduled for ${today}.\n\nNext scheduled posts will be sent automatically.`
    );
    return;
  }

  console.log(`📢 Found ${todaysPosts.length} post(s) scheduled for today:\n`);

  // Process each post
  for (const postInfo of todaysPosts) {
    const emailBody = formatPostForEmail(postInfo);

    if (isDryRun) {
      console.log('[DRY RUN] Would send:');
      console.log(emailBody);
    } else {
      await sendEmail(
        `🎯 LinkedIn Post Ready: ${postInfo.article.title}`,
        emailBody
      );
    }
  }

  console.log(`\n✅ Processed ${todaysPosts.length} post(s)`);
  console.log(`📧 Notification${todaysPosts.length > 1 ? 's' : ''} sent to: ${CONFIG.emailTo}`);
  console.log(`📝 Logs saved to: ${CONFIG.outputDir}\n`);
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
