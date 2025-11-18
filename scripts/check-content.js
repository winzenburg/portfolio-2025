#!/usr/bin/env node

/**
 * Check if there's content scheduled for a specific date
 * Returns exit code 0 if content exists, 1 if not
 */

const fs = require('fs');
const yaml = require('js-yaml');

const date = process.argv[2];
if (!date) {
  console.error('Usage: node check-content.js YYYY-MM-DD');
  process.exit(1);
}

const scheduleFile = process.env.CONTENT_SCHEDULE_PATH;
if (!scheduleFile || !fs.existsSync(scheduleFile)) {
  console.error('Content schedule file not found');
  process.exit(1);
}

try {
  const fileContents = fs.readFileSync(scheduleFile, 'utf8');
  const data = yaml.load(fileContents);
  const schedule = data.schedule;

  let hasContent = false;

  Object.entries(schedule).forEach(([weekKey, weekData]) => {
    if (weekData.status === 'completed') return;

    if (weekData.posts) {
      Object.entries(weekData.posts).forEach(([day, postData]) => {
        if (postData.publish_date === date) {
          hasContent = true;
        }
      });
    }
  });

  process.exit(hasContent ? 0 : 1);
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
