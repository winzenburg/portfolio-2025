import posthog from "posthog-js";

const POSTHOG_KEY = "phc_xOzbNL7vMBFgbZshZEcs3LIvAwBjNvQLVo0bERsv53k";
const POSTHOG_HOST = "https://us.posthog.com";

export function initPostHog() {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: "identified_only",
    // Disable automatic pageview — we fire it manually per route change
    // so it includes the correct page title and metadata
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: false,
  });
}

/** Derive a page type from the current pathname for richer event properties */
export function getPageType(pathname: string): string {
  if (pathname === "/" || pathname === "") return "home";
  if (pathname.startsWith("/articles/")) return "article";
  if (pathname.startsWith("/case-study/")) return "case_study";
  if (pathname === "/articles") return "articles_index";
  if (pathname === "/work") return "work";
  if (pathname === "/about") return "about";
  if (pathname === "/services") return "services";
  if (pathname === "/methodology") return "methodology";
  if (pathname === "/contact") return "contact";
  if (pathname === "/gallery") return "gallery";
  return "other";
}

/** Extract the article slug from /articles/:slug */
export function getArticleSlug(pathname: string): string | null {
  const match = pathname.match(/^\/articles\/(.+)$/);
  return match ? match[1] : null;
}

/** Extract the case study slug from /case-study/:slug */
export function getCaseStudySlug(pathname: string): string | null {
  const match = pathname.match(/^\/case-study\/(.+)$/);
  return match ? match[1] : null;
}

export default posthog;
