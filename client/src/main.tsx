import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize PostHog event tracking
if (window.posthog) {
  // Track CTA clicks
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (
      target.textContent?.includes("Schedule a Call") ||
      target.textContent?.includes("Contact") ||
      target.closest('a[href*="contact"]') ||
      target.closest('a[href*="schedule"]')
    ) {
      window.posthog?.capture("cta_click", {
        cta_text: target.textContent?.trim() || target.innerText?.trim(),
        page: window.location.pathname,
      });
    }
  });

  // Track scroll depth
  let scrollTracked25 = false;
  let scrollTracked50 = false;
  let scrollTracked75 = false;
  let scrollTracked100 = false;

  window.addEventListener("scroll", () => {
    const scrollPercent =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercent >= 25 && !scrollTracked25) {
      scrollTracked25 = true;
      window.posthog?.capture("scroll_depth", { depth: 25 });
    }
    if (scrollPercent >= 50 && !scrollTracked50) {
      scrollTracked50 = true;
      window.posthog?.capture("scroll_depth", { depth: 50 });
    }
    if (scrollPercent >= 75 && !scrollTracked75) {
      scrollTracked75 = true;
      window.posthog?.capture("scroll_depth", { depth: 75 });
    }
    if (scrollPercent >= 100 && !scrollTracked100) {
      scrollTracked100 = true;
      window.posthog?.capture("scroll_depth", { depth: 100 });
    }
  });

  // Track article engagement
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.closest("article") || target.closest(".article")) {
      window.posthog?.capture("article_click", {
        article_title: target.closest("article")?.querySelector("h1, h2, h3")?.textContent || "unknown",
        page: window.location.pathname,
      });
    }
  });

  // Track navigation clicks
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.closest("nav") || target.closest("header")) {
      const link = target.closest("a") as HTMLAnchorElement;
      if (link) {
        window.posthog?.capture("navigation_click", {
          nav_text: link.textContent?.trim(),
          nav_href: link.href,
          page: window.location.pathname,
        });
      }
    }
  });
}

createRoot(document.getElementById("root")!).render(<App />);
