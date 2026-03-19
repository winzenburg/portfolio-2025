import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import posthog, { getPageType, getArticleSlug, getCaseStudySlug } from "@/lib/posthog";

/**
 * Fires a PostHog $pageview event on every route change with rich metadata:
 * - page title (from document.title, set by react-helmet-async)
 * - page type (home, article, case_study, etc.)
 * - article slug and category when on an article page
 * - case study slug when on a case study page
 *
 * Also resets scroll depth tracking so each page gets accurate depth events.
 */
export function usePageTracking() {
  const [location] = useLocation();
  const prevLocation = useRef<string | null>(null);

  // Scroll depth state — reset on every route change
  const scrollState = useRef({
    tracked25: false,
    tracked50: false,
    tracked75: false,
    tracked100: false,
  });

  // Fire pageview + wire up scroll tracking on route change
  useEffect(() => {
    if (prevLocation.current === location) return;
    prevLocation.current = location;

    // Wait one tick so react-helmet-async has updated document.title
    const timer = setTimeout(() => {
      const pageType = getPageType(location);
      const articleSlug = getArticleSlug(location);
      const caseStudySlug = getCaseStudySlug(location);

      const properties: Record<string, string | null> = {
        $current_url: window.location.href,
        $pathname: location,
        page_title: document.title,
        page_type: pageType,
        article_slug: articleSlug,
        case_study_slug: caseStudySlug,
      };

      posthog.capture("$pageview", properties);

      // Reset scroll depth for the new page
      scrollState.current = {
        tracked25: false,
        tracked50: false,
        tracked75: false,
        tracked100: false,
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  // Wire up scroll depth tracking (reattaches on each route change)
  useEffect(() => {
    const pageType = getPageType(location);
    const articleSlug = getArticleSlug(location);

    const handleScroll = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const percent = (window.scrollY / scrollable) * 100;
      const base = {
        page_type: pageType,
        page_title: document.title,
        $pathname: location,
        ...(articleSlug ? { article_slug: articleSlug } : {}),
      };

      if (percent >= 25 && !scrollState.current.tracked25) {
        scrollState.current.tracked25 = true;
        posthog.capture("scroll_depth", { ...base, depth: 25 });
      }
      if (percent >= 50 && !scrollState.current.tracked50) {
        scrollState.current.tracked50 = true;
        posthog.capture("scroll_depth", { ...base, depth: 50 });
      }
      if (percent >= 75 && !scrollState.current.tracked75) {
        scrollState.current.tracked75 = true;
        posthog.capture("scroll_depth", { ...base, depth: 75 });
      }
      if (percent >= 100 && !scrollState.current.tracked100) {
        scrollState.current.tracked100 = true;
        posthog.capture("scroll_depth", { ...base, depth: 100 });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);
}
