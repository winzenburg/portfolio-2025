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

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const nodemailer = require('nodemailer');

// Load environment variables from .env file if it exists
const dotenvPath = path.join(__dirname, '..', '.env');
if (fs.existsSync(dotenvPath)) {
  require('dotenv').config({ path: dotenvPath });
}

// Configuration
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

/**
 * Get today's date in YYYY-MM-DD format
 */
function getTodayDate() {
  if (testDate) {
    return testDate;
  }
  const today = new Date();
  return today.toISOString().split('T')[0];
}

/**
 * Get day of week (lowercase)
 */
function getDayOfWeek(dateString) {
  const date = new Date(dateString + 'T00:00:00');
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return days[date.getDay()];
}

/**
 * Load and parse the content schedule YAML file
 */
function loadSchedule() {
  try {
    const fileContents = fs.readFileSync(CONFIG.scheduleFile, 'utf8');
    const data = yaml.load(fileContents);
    return data.schedule;
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
