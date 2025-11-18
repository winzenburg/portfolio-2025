#!/usr/bin/env node

/**
 * Get content for a specific date and format it for GitHub issue
 */

const fs = require('fs');
const yaml = require('js-yaml');

const date = process.argv[2];
if (!date) {
  console.error('Usage: node get-content.js YYYY-MM-DD');
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

  let foundPost = null;

  Object.entries(schedule).forEach(([weekKey, weekData]) => {
    if (weekData.status === 'completed') return;

    if (weekData.posts) {
      Object.entries(weekData.posts).forEach(([day, postData]) => {
        if (postData.publish_date === date) {
          foundPost = {
            week: weekKey,
            day: day,
            article: weekData.article,
            post: postData
          };
        }
      });
    }
  });

  if (!foundPost) {
    console.log('No content found for', date);
    process.exit(1);
  }

  // Format for GitHub issue
  const output = `
## 📅 LinkedIn Post Scheduled for Today

**Week:** ${foundPost.week}
**Day:** ${foundPost.day}
**Type:** ${foundPost.post.type}
**Article:** ${foundPost.article.title}

---

### 📋 Instructions

1. Copy the post content below
2. Go to [LinkedIn](https://www.linkedin.com/)
3. Click "Start a post"
4. Paste the content
5. Add any relevant images or media
6. Preview and post
7. Engage with comments in the first hour

---

### 📝 Post Content

\`\`\`
${foundPost.post.content.trim()}
\`\`\`

---

### 🔗 Article Link

${foundPost.article.slug ? `https://winzenburg.com/articles/${foundPost.article.slug}` : 'N/A'}

---

**Generated:** ${new Date().toLocaleString()}
**Automated by:** Portfolio 2025 Content System
`;

  console.log(output);
  process.exit(0);

} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
