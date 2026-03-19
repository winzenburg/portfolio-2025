import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initPostHog } from "./lib/posthog";
import { trackCTAClick, trackNavClick, trackExternalLink } from "./lib/analytics";

initPostHog();

const CTA_PHRASES = [
  "Schedule a Call",
  "Schedule Call",
  "Get the Playbook",
  "Download",
  "Let's Talk",
  "Get in Touch",
  "View Case Studies",
  "Read My Thinking",
  "Send Message",
];

document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  const anchor = target.closest("a") as HTMLAnchorElement | null;
  const button = target.closest("button") as HTMLButtonElement | null;
  const text =
    target.textContent?.trim() ??
    anchor?.textContent?.trim() ??
    button?.textContent?.trim() ??
    "";

  // CTA tracking — text-based + href-based
  const isCtaText =
    CTA_PHRASES.some((phrase) => text.includes(phrase)) ||
    anchor?.href?.includes("contact") ||
    anchor?.href?.includes("schedule");

  if (isCtaText) {
    trackCTAClick(text, anchor?.href);
  }

  // Nav link tracking
  const navAnchor = target.closest("nav a, header a") as HTMLAnchorElement | null;
  if (navAnchor) {
    trackNavClick(navAnchor.textContent?.trim() ?? "", navAnchor.href);
  }

  // External link tracking — catch any link opening in a new tab
  if (anchor?.target === "_blank" && anchor.href) {
    const url = anchor.href;
    let platform = "unknown";
    if (url.includes("linkedin.com")) platform = "linkedin";
    else if (url.includes("github.com")) platform = "github";
    else if (url.includes("cultivate")) platform = "cultivate";
    else if (url.includes("kinlet")) platform = "kinlet";
    else platform = new URL(url).hostname;

    trackExternalLink(url, platform);
  }
});

createRoot(document.getElementById("root")!).render(<App />);
