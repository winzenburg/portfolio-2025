import { useEffect, useState } from "react";
import { useLocation } from "wouter";

function isArticleDetail(location: string): boolean {
  return /^\/articles\/[^/]+\/?$/.test(location);
}

/**
 * Hairline that tracks how far the article has been read.
 * Width is set directly, with no transition, so reduced-motion users still
 * get the indicator without a sweep.
 */
function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const measure = () => {
      const article = document.querySelector("article");
      const start = article instanceof HTMLElement ? article.offsetTop : 0;
      const height =
        (article instanceof HTMLElement
          ? article.offsetHeight
          : document.documentElement.scrollHeight) - window.innerHeight;
      const next =
        height <= 0
          ? 0
          : Math.min(1, Math.max(0, (window.scrollY - start) / height));
      setProgress(next);
    };

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const percent = Math.round(progress * 100);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-ink/10"
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
    >
      <div
        className="h-full bg-verm-text"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

function CopyLink() {
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(""), 2000);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setNotice("Copied");
    } catch {
      setNotice("Could not copy");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        type="button"
        onClick={onCopy}
        className="min-h-11 border border-ink/25 bg-paper px-4 text-sm font-medium text-ink shadow-none transition-colors duration-200 hover:border-ink/50 hover:bg-studio-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
      >
        {notice || "Copy link"}
      </button>
      <span className="sr-only" aria-live="polite">
        {notice === "Copied" ? "Link copied" : notice}
      </span>
    </div>
  );
}

/** Article-only chrome: reading progress and copy-link feedback. */
export default function ArticleChrome() {
  const [location] = useLocation();
  if (!isArticleDetail(location)) return null;

  return (
    <>
      <ReadingProgress />
      <CopyLink />
    </>
  );
}
