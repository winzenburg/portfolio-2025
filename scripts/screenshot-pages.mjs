import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = 'http://localhost:3000/portfolio-2025';
const SCREENSHOT_DIR = join(__dirname, '..', 'screenshots');

// Ensure screenshot directory exists
mkdirSync(SCREENSHOT_DIR, { recursive: true });

const pages = [
  { name: 'home', url: '/' },
  { name: 'work', url: '/work' },
  { name: 'about', url: '/about' },
  { name: 'services', url: '/services' },
  { name: 'methodology', url: '/methodology' },
  { name: 'contact', url: '/contact' },
  { name: 'articles', url: '/articles' }
];

async function captureScreenshots() {
  console.log('🎬 Launching browser...\n');
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  for (const pageInfo of pages) {
    const url = `${BASE_URL}${pageInfo.url}`;
    console.log(`📸 Capturing: ${pageInfo.name} (${url})`);

    try {
      await page.goto(url, { waitUntil: 'networkidle' });

      // Wait a moment for any animations
      await page.waitForTimeout(500);

      // Take full page screenshot
      const screenshotPath = join(SCREENSHOT_DIR, `${pageInfo.name}.png`);
      await page.screenshot({
        path: screenshotPath,
        fullPage: true
      });

      console.log(`   ✅ Saved: screenshots/${pageInfo.name}.png\n`);
    } catch (error) {
      console.error(`   ❌ Error capturing ${pageInfo.name}:`, error.message, '\n');
    }
  }

  await browser.close();
  console.log('✨ Screenshot capture complete!\n');
  console.log(`📁 Screenshots saved to: ${SCREENSHOT_DIR}`);
}

captureScreenshots().catch(console.error);
