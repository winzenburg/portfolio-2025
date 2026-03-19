import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initPostHog } from "./lib/posthog";
import { trackCTAClick, trackNavClick } from "./lib/analytics";

initPostHog();

// Track CTA clicks globally (covers any button/link with relevant text)
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  const text = target.textContent?.trim() ?? target.closest("a, button")?.textContent?.trim() ?? "";
  const isCtaText =
    text.includes("Schedule a Call") ||
    text.includes("Schedule Call") ||
    text.includes("Get the Playbook") ||
    text.includes("Download") ||
    target.closest('a[href*="contact"]') !== null ||
    target.closest('a[href*="schedule"]') !== null;

  if (isCtaText) {
    const anchor = target.closest("a") as HTMLAnchorElement | null;
    trackCTAClick(text, anchor?.href);
  }
});

// Track nav link clicks globally
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  const navAnchor = target.closest("nav a, header a") as HTMLAnchorElement | null;
  if (navAnchor) {
    trackNavClick(navAnchor.textContent?.trim() ?? "", navAnchor.href);
  }
});

createRoot(document.getElementById("root")!).render(<App />);
