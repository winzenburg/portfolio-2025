#!/usr/bin/env node

/**
 * Daily LinkedIn Content Sender (using Resend)
 *
 * This script checks the linkedin-content-schedule.yaml file and sends
 * content notifications for posts scheduled for today via Resend.
 *
 * Usage:
 *   node send-daily-content-resend.js [--dry-run] [--date YYYY-MM-DD]
 *
 * Options:
 *   --dry-run    Show what would be posted without actually posting
 *   --date       Override today's date (for testing)
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const https = require('https');

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
  emailFrom: process.env.EMAIL_FROM || 'LinkedIn Content <onboarding@resend.dev>',
  resendApiKey: process.env.RESEND_API_KEY || '',
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
 * Format post content for email HTML
 */
function formatPostForEmailHTML(postInfo) {
  const { week, day, article, post } = postInfo;
  const articleLink = article.slug ? `https://winzenburg.com/articles/${article.slug}` : 'N/A';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
      border-radius: 8px;
      margin-bottom: 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
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
    .content-box {
      background-color: #fafafa;
      border: 2px dashed #cbd5e1;
      padding: 20px;
      border-radius: 6px;
      margin: 20px 0;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .footer {
      text-align: center;
      color: #64748b;
      font-size: 14px;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
    }
    .button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #0066cc;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      margin: 10px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎯 LinkedIn Post Ready: ${article.title}</h1>
    </div>

    <div class="meta">
      <div class="meta-item"><span class="meta-label">Week:</span> ${week}</div>
      <div class="meta-item"><span class="meta-label">Day:</span> ${day}</div>
      <div class="meta-item"><span class="meta-label">Type:</span> ${post.type}</div>
      <div class="meta-item"><span class="meta-label">Article:</span> ${article.title}</div>
    </div>

    <div class="instructions">
      <h3>📋 Instructions</h3>
      <ol>
        <li>Copy the post content below</li>
        <li>Go to <a href="https://www.linkedin.com/">LinkedIn</a></li>
        <li>Click "Start a post"</li>
        <li>Paste the content</li>
        <li>Add any relevant images or media</li>
        <li>Click "Post"</li>
      </ol>
    </div>

    <h3>📝 Post Content:</h3>
    <div class="content-box">${post.content.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>

    <p><strong>Article Link:</strong> <a href="${articleLink}">${articleLink}</a></p>

    <div style="text-align: center; margin: 20px 0;">
      <a href="https://www.linkedin.com/" class="button">Go to LinkedIn</a>
    </div>

    <div class="footer">
      <p>Automated by Portfolio 2025 Content System</p>
      <p>${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
`;
}

/**
 * Format post content for plain text email
 */
function formatPostForEmailText(postInfo) {
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
 * Send email via Resend API
 */
async function sendEmailViaResend(subject, htmlBody, textBody) {
  if (!CONFIG.resendApiKey) {
    console.error('Error: RESEND_API_KEY not configured');
    return false;
  }

  const payload = JSON.stringify({
    from: CONFIG.emailFrom,
    to: [CONFIG.emailTo],
    subject: subject,
    html: htmlBody,
    text: textBody,
  });

  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.resend.com',
      port: 443,
      path: '/emails',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CONFIG.resendApiKey}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log(`✅ Email sent via Resend to ${CONFIG.emailTo}`);
          resolve(true);
        } else {
          console.error(`Error sending email: ${res.statusCode} ${data}`);
          resolve(false);
        }
      });
    });

    req.on('error', (error) => {
      console.error(`Error sending email: ${error.message}`);
      resolve(false);
    });

    req.write(payload);
    req.end();
  });
}

/**
 * Log to file
 */
function logToFile(subject, body) {
  const logFile = path.join(CONFIG.outputDir, 'linkedin-automation.log');

  try {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });

    const timestamp = new Date().toISOString();
    const logEntry = `
[${timestamp}]
${subject}

${body}
`;

    fs.appendFileSync(logFile, logEntry);
  } catch (error) {
    console.error(`Error writing to log file: ${error.message}`);
  }
}

/**
 * Main execution
 */
async function main() {
  const today = getTodayDate();
  const dayOfWeek = getDayOfWeek(today);

  console.log(`\n🤖 LinkedIn Content Automation (Resend)`);
  console.log(`📅 Date: ${today} (${dayOfWeek})`);
  console.log(`🔧 Mode: ${isDryRun ? 'DRY RUN' : 'LIVE'}\n`);

  // Load schedule
  const schedule = loadSchedule();

  // Find today's posts
  const todaysPosts = findTodaysPosts(schedule, today);

  if (todaysPosts.length === 0) {
    console.log(`✅ No posts scheduled for ${today}`);
    return;
  }

  console.log(`📢 Found ${todaysPosts.length} post(s) scheduled for today:\n`);

  // Process each post
  for (const postInfo of todaysPosts) {
    const subject = `🎯 LinkedIn Post Ready: ${postInfo.article.title}`;
    const htmlBody = formatPostForEmailHTML(postInfo);
    const textBody = formatPostForEmailText(postInfo);

    // Log to file
    logToFile(subject, textBody);

    // Output to console
    console.log('='.repeat(80));
    console.log(subject);
    console.log('='.repeat(80));
    console.log(textBody);

    if (isDryRun) {
      console.log('[DRY RUN] Email not sent');
    } else {
      await sendEmailViaResend(subject, htmlBody, textBody);
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
