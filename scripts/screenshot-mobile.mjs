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

async function captureMobileScreenshots() {
  console.log('📱 Launching browser in mobile mode...\n');
  const browser = await chromium.launch();

  // Mobile viewport
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 }, // iPhone SE size
    deviceScaleFactor: 2
  });
  const page = await context.newPage();

  // Capture home page with menu closed
  console.log('📸 Capturing: home-mobile (menu closed)');
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({
    path: join(SCREENSHOT_DIR, 'home-mobile-closed.png'),
    fullPage: false
  });
  console.log('   ✅ Saved: screenshots/home-mobile-closed.png\n');

  // Capture home page with menu open
  console.log('📸 Capturing: home-mobile (menu open)');
  await page.click('button[aria-label="Toggle menu"]');
  await page.waitForTimeout(300);
  await page.screenshot({
    path: join(SCREENSHOT_DIR, 'home-mobile-open.png'),
    fullPage: false
  });
  console.log('   ✅ Saved: screenshots/home-mobile-open.png\n');

  await browser.close();
  console.log('✨ Mobile screenshot capture complete!');
}

captureMobileScreenshots().catch(console.error);
