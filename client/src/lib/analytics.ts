import posthog from "./posthog";
import { getPageType, getArticleSlug, getCaseStudySlug } from "./posthog";
import type { ContactIntent, RateSheet } from "./contact-intent";

function baseProperties() {
  const pathname = window.location.pathname;
  return {
    page_title: document.title,
    page_type: getPageType(pathname),
    $pathname: pathname,
    article_slug: getArticleSlug(pathname),
    case_study_slug: getCaseStudySlug(pathname),
  };
}

/** Track CTA button / link clicks */
export function trackCTAClick(ctaText: string, destination?: string) {
  posthog.capture("cta_click", {
    ...baseProperties(),
    cta_text: ctaText,
    destination,
  });
}

/** Track article card clicks from the articles index */
export function trackArticleCardClick(slug: string, title: string, category: string) {
  posthog.capture("article_card_click", {
    ...baseProperties(),
    article_slug: slug,
    article_title: title,
    article_category: category,
  });
}

/** Track case study card clicks from the work page */
export function trackCaseStudyClick(slug: string, title: string) {
  posthog.capture("case_study_click", {
    ...baseProperties(),
    case_study_slug: slug,
    case_study_title: title,
  });
}

/** Track navigation link clicks */
export function trackNavClick(label: string, href: string) {
  posthog.capture("nav_click", {
    ...baseProperties(),
    nav_label: label,
    nav_href: href,
  });
}

/** Track contact form submissions */
export function trackContactSubmit(options: {
  hasPlaybook: boolean;
  intent: ContactIntent | null;
  sheet: RateSheet | null;
}): void {
  posthog.capture("contact_form_submit", {
    ...baseProperties(),
    has_playbook_request: options.hasPlaybook,
    contact_intent: options.intent ?? "unspecified",
    rate_sheet: options.sheet,
  });
}

/** Track newsletter signups */
export function trackNewsletterSignup() {
  posthog.capture("newsletter_signup", {
    ...baseProperties(),
  });
}

/** Track external link clicks (LinkedIn, live project sites, GitHub) */
export function trackExternalLink(url: string, platform: string) {
  posthog.capture("external_link_click", {
    ...baseProperties(),
    destination_url: url,
    platform,
  });
}

/** Track article category filter changes on /articles */
export function trackCategoryFilter(category: string) {
  posthog.capture("articles_category_filter", {
    ...baseProperties(),
    selected_category: category,
  });
}

/** Track rate sheet PDF downloads on /services */
export function trackRateSheetDownload(sheetType: "startup" | "enterprise") {
  posthog.capture("rate_sheet_download", {
    ...baseProperties(),
    sheet_type: sheetType,
  });
}

/** Track playbook request clicks from articles to /contact?playbook= */
export function trackPlaybookRequest(playbookId: string, sourceArticleSlug: string) {
  posthog.capture("playbook_request_click", {
    ...baseProperties(),
    playbook_id: playbookId,
    source_article_slug: sourceArticleSlug,
  });
}

/** First answer on the UX maturity assessment. Does not include answers. */
export function trackAssessmentStart(): void {
  posthog.capture("assessment_started", {
    ...baseProperties(),
  });
}

/** Completed assessment. Scores only, never individual answers. */
export function trackAssessmentComplete(options: {
  total: number;
  level: string;
  weakestDimension: string;
}): void {
  posthog.capture("assessment_completed", {
    ...baseProperties(),
    assessment_total: options.total,
    assessment_level: options.level,
    weakest_dimension: options.weakestDimension,
  });
}
