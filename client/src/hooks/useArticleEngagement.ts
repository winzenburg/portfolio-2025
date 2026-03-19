import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import posthog from "@/lib/posthog";
import { getArticleSlug, getPageType } from "@/lib/posthog";

/**
 * Tracks deep engagement metrics for article pages:
 *
 * 1. Time on page — fires "article_time_spent" when the user navigates away,
 *    with the total seconds spent (active tab time only).
 *
 * 2. Reading progress — fires "article_reading_progress" at 25 / 50 / 75 / 100%
 *    of the <article> element's scroll position, separate from the page-level
 *    scroll_depth events in usePageTracking.
 *
 * Call this hook once inside the WouterRouter (e.g. in the PageTracker component).
 * It only activates on article pages (pathname starts with /articles/).
 */
export function useArticleEngagement() {
  const [location] = useLocation();
  const startTime = useRef<number>(Date.now());
  const prevLocation = useRef<string | null>(null);
  const hiddenTime = useRef<number>(0);
  const hiddenAt = useRef<number | null>(null);

  // Track reading progress of the <article> element
  const progressState = useRef({
    tracked25: false,
    tracked50: false,
    tracked75: false,
    tracked100: false,
  });

  // Fire time_spent for the previous page when route changes
  useEffect(() => {
    if (prevLocation.current && prevLocation.current !== location) {
      flushTimeSpent(prevLocation.current);
    }

    prevLocation.current = location;
    startTime.current = Date.now();
    hiddenTime.current = 0;
    hiddenAt.current = null;
    progressState.current = {
      tracked25: false,
      tracked50: false,
      tracked75: false,
      tracked100: false,
    };
  }, [location]);

  // Also flush on tab close / visibility hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        hiddenAt.current = Date.now();
      } else if (hiddenAt.current) {
        hiddenTime.current += Date.now() - hiddenAt.current;
        hiddenAt.current = null;
      }
    };

    const handleBeforeUnload = () => {
      if (prevLocation.current) {
        flushTimeSpent(prevLocation.current);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Wire up article reading progress tracking
  useEffect(() => {
    const pageType = getPageType(location);
    if (pageType !== "article") return;

    const slug = getArticleSlug(location);
    const state = progressState.current;

    const handleScroll = () => {
      const articleEl = document.querySelector("article");
      if (!articleEl) return;

      const rect = articleEl.getBoundingClientRect();
      const articleTop = rect.top + window.scrollY;
      const articleBottom = articleTop + rect.height;
      const viewportBottom = window.scrollY + window.innerHeight;

      const readableHeight = articleBottom - articleTop;
      if (readableHeight <= 0) return;

      const readProgress = Math.min(
        100,
        ((viewportBottom - articleTop) / readableHeight) * 100
      );

      const base = {
        article_slug: slug,
        page_title: document.title,
      };

      if (readProgress >= 25 && !state.tracked25) {
        state.tracked25 = true;
        posthog.capture("article_reading_progress", { ...base, progress: 25 });
      }
      if (readProgress >= 50 && !state.tracked50) {
        state.tracked50 = true;
        posthog.capture("article_reading_progress", { ...base, progress: 50 });
      }
      if (readProgress >= 75 && !state.tracked75) {
        state.tracked75 = true;
        posthog.capture("article_reading_progress", { ...base, progress: 75 });
      }
      if (readProgress >= 100 && !state.tracked100) {
        state.tracked100 = true;
        posthog.capture("article_reading_progress", { ...base, progress: 100 });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  function flushTimeSpent(pathname: string) {
    const pageType = getPageType(pathname);
    if (pageType !== "article" && pageType !== "case_study") return;

    let elapsed = (Date.now() - startTime.current - hiddenTime.current) / 1000;
    if (hiddenAt.current) {
      elapsed -= (Date.now() - hiddenAt.current) / 1000;
    }
    elapsed = Math.max(0, Math.round(elapsed));

    if (elapsed < 2) return; // ignore bounces

    posthog.capture("content_time_spent", {
      page_type: pageType,
      page_title: document.title,
      $pathname: pathname,
      article_slug: getArticleSlug(pathname),
      case_study_slug: pathname.match(/^\/case-study\/(.+)$/)?.[1] ?? null,
      seconds_spent: elapsed,
    });
  }
}
