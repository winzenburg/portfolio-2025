import { chromium } from 'playwright';

// Calculate relative luminance from RGB
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Calculate contrast ratio between two colors
function getContrastRatio(rgb1, rgb2) {
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

// Convert OKLCH to RGB (simplified approximation)
function oklchToRgb(l, c, h, alpha = 1) {
  // This is a simplified conversion - for accurate WCAG testing,
  // we'll convert via LAB color space
  
  // Convert hue to radians
  const hRad = (h * Math.PI) / 180;
  
  // OKLCH to OKLAB
  const a = c * Math.cos(hRad);
  const b = c * Math.sin(hRad);
  
  // OKLAB to linear RGB (D65 illuminant)
  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.2914855480 * b;
  
  const l3 = l_ * l_ * l_;
  const m3 = m_ * m_ * m_;
  const s3 = s_ * s_ * s_;
  
  let r = +4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3;
  let g = -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3;
  let b_ = -0.0041960863 * l3 - 0.7034186147 * m3 + 1.7076147010 * s3;
  
  // Gamma correction
  r = r > 0.0031308 ? 1.055 * Math.pow(r, 1/2.4) - 0.055 : 12.92 * r;
  g = g > 0.0031308 ? 1.055 * Math.pow(g, 1/2.4) - 0.055 : 12.92 * g;
  b_ = b_ > 0.0031308 ? 1.055 * Math.pow(b_, 1/2.4) - 0.055 : 12.92 * b_;
  
  return {
    r: Math.max(0, Math.min(255, Math.round(r * 255))),
    g: Math.max(0, Math.min(255, Math.round(g * 255))),
    b: Math.max(0, Math.min(255, Math.round(b_ * 255)))
  };
}

// Parse RGB/RGBA/OKLCH color string
function parseRgb(colorString) {
  // Try oklch
  let match = colorString.match(/oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+))?\)/);
  if (match) {
    const l = parseFloat(match[1]);
    const c = parseFloat(match[2]);
    const h = parseFloat(match[3]);
    return oklchToRgb(l, c, h);
  }
  
  // Try oklab (similar to oklch but no hue)
  match = colorString.match(/oklab\(([\d.]+)\s+([-\d.]+)\s+([-\d.]+)(?:\s*\/\s*([\d.]+))?\)/);
  if (match) {
    const l = parseFloat(match[1]);
    const a = parseFloat(match[2]);
    const b = parseFloat(match[3]);
    // Convert a, b to c, h
    const c = Math.sqrt(a * a + b * b);
    const h = Math.atan2(b, a) * 180 / Math.PI;
    return oklchToRgb(l, c, h);
  }
  
  // Try rgba
  match = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
  if (match) {
    return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
  }
  
  // Try hex format
  match = colorString.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (match) {
    return { r: parseInt(match[1], 16), g: parseInt(match[2], 16), b: parseInt(match[3], 16) };
  }
  
  return null;
}

// Check if contrast passes WCAG standards
function checkWCAG(ratio, fontSize, isBold) {
  const isLargeText = fontSize >= 18 || (fontSize >= 14 && isBold);
  return {
    AA: isLargeText ? ratio >= 3 : ratio >= 4.5,
    AAA: isLargeText ? ratio >= 4.5 : ratio >= 7,
    level: isLargeText ? 'large' : 'normal',
  };
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('🔍 Navigating to article...\n');
  await page.goto('https://winzenburg.com/articles/complete-workflow-2025');
  await page.waitForLoadState('networkidle');

  console.log('📊 Analyzing contrast ratios...\n');
  console.log('='.repeat(80));
  
  // Analyze key elements
  const elements = await page.evaluate(() => {
    const results = [];
    
    // Helper to get actual background color (traverse up DOM if transparent)
    const getActualBackground = (element) => {
      let current = element;
      while (current && current !== document.body) {
        const bg = window.getComputedStyle(current).backgroundColor;
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
          return bg;
        }
        current = current.parentElement;
      }
      return window.getComputedStyle(document.body).backgroundColor || 'rgb(0, 0, 0)';
    };
    
    // Selectors to check
    const selectors = [
      { selector: 'h1', label: 'Main Heading (h1)' },
      { selector: '.prose p:first-of-type', label: 'Lead Paragraph' },
      { selector: '.prose p', label: 'Body Text (sample)' },
      { selector: '.prose strong', label: 'Bold Text' },
      { selector: '.prose h2', label: 'Subheadings (h2)' },
      { selector: '.prose h3', label: 'Subheadings (h3)' },
      { selector: '.bg-cyan-900\\/20 h3', label: 'Callout Heading' },
      { selector: '.bg-cyan-900\\/20 li', label: 'Callout List Items' },
      { selector: '.bg-slate-800', label: 'Code Block' },
      { selector: '.text-slate-400', label: 'Meta Text (date, reading time)' },
      { selector: 'a.text-cyan-400', label: 'Links' },
    ];
    
    selectors.forEach(({ selector, label }) => {
      const element = document.querySelector(selector);
      if (element) {
        const styles = window.getComputedStyle(element);
        const color = styles.color;
        const backgroundColor = getActualBackground(element);
        const fontSize = parseFloat(styles.fontSize);
        const fontWeight = parseInt(styles.fontWeight);
        const isBold = fontWeight >= 600;
        
        results.push({
          label,
          selector,
          color,
          backgroundColor,
          fontSize,
          isBold,
          text: element.textContent.substring(0, 60).trim() + '...',
        });
      }
    });
    
    return results;
  });

  // Calculate and display results
  let passCount = 0;
  let failCount = 0;
  
  elements.forEach(({ label, selector, color, backgroundColor, fontSize, isBold, text }) => {
    const fgColor = parseRgb(color);
    const bgColor = parseRgb(backgroundColor);
    
    if (!fgColor || !bgColor) {
      console.log(`⚠️  Could not parse colors for: ${label}`);
      console.log(`    Raw color: ${color}`);
      console.log(`    Raw background: ${backgroundColor}`);
      return;
    }
    
    const ratio = getContrastRatio(fgColor, bgColor);
    const wcag = checkWCAG(ratio, fontSize, isBold);
    
    const passAA = wcag.AA ? '✅ AA' : '❌ AA';
    const passAAA = wcag.AAA ? '✅ AAA' : '❌ AAA';
    
    if (wcag.AA) passCount++; else failCount++;
    
    console.log(`\n📝 ${label}`);
    console.log(`   Selector: ${selector}`);
    console.log(`   Text: "${text}"`);
    console.log(`   Color: ${color}`);
    console.log(`   Background: ${backgroundColor}`);
    console.log(`   Font: ${fontSize}px ${isBold ? '(bold)' : ''} [${wcag.level} text]`);
    console.log(`   Contrast Ratio: ${ratio.toFixed(2)}:1`);
    console.log(`   WCAG: ${passAA} | ${passAAA}`);
    console.log(`   ${'─'.repeat(78)}`);
  });
  
  console.log('\n' + '='.repeat(80));
  console.log(`\n📈 Summary: ${passCount} passed AA, ${failCount} failed AA\n`);
  
  if (failCount === 0) {
    console.log('✅ All tested elements meet WCAG AA standards!\n');
  } else {
    console.log(`⚠️  ${failCount} element(s) need contrast improvements\n`);
  }
  
  await browser.close();
})();
