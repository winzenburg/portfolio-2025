import posthog from "./posthog";
import { getPageType, getArticleSlug, getCaseStudySlug } from "./posthog";

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
export function trackContactSubmit(hasPlaybook: boolean) {
  posthog.capture("contact_form_submit", {
    ...baseProperties(),
    has_playbook_request: hasPlaybook,
  });
}

/** Track newsletter signups */
export function trackNewsletterSignup() {
  posthog.capture("newsletter_signup", {
    ...baseProperties(),
  });
}
