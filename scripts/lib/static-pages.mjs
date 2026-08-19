/**
 * SEO metadata for non-article routes.
 * Used by sitemap generation and static HTML shell generation.
 * Keep paths without trailing slashes (home is "/").
 */

import { SITE_ORIGIN } from "./articles-metadata.mjs";

/**
 * @typedef {{
 *   path: string;
 *   title: string;
 *   description: string;
 *   ogImage: string;
 *   ogType?: string;
 *   changefreq?: string;
 *   priority?: string;
 *   noIndex?: boolean;
 *   jsonLdType?: string;
 * }} StaticPageSeo
 */

/** @type {StaticPageSeo[]} */
export const STATIC_PAGES = [
  {
    path: "/",
    title: "Ryan Winzenburg | Design Operations Leader & AI Workflow Architect",
    description:
      "Design leader with 25 years at Fortune 50 companies transforming how teams ship with AI. Head of Design Operations, VP of Design, Principal Design Technologist. 4-6x faster delivery, $3M+ portfolio value.",
    ogImage: "/images/about-hero.webp",
    ogType: "website",
    changefreq: "weekly",
    priority: "1.0",
    jsonLdType: "WebSite",
  },
  {
    path: "/work",
    title: "Case Studies | Design Operations & AI-Augmented Product Design, Ryan Winzenburg",
    description:
      "Case studies in design operations, enterprise design systems, and AI-augmented product design across Fortune 50 and startup environments.",
    ogImage: "/images/work-hero.webp",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/about",
    title: "About Ryan Winzenburg | Brand Hub — Canonical Identity Facts",
    description:
      "Canonical facts about Ryan Winzenburg: Design Operations Leader & AI Workflow Architect in Wheat Ridge, CO; founder of Winzinvest and Casimir Systems.",
    ogImage: "/images/about-hero.webp",
    ogType: "profile",
    changefreq: "monthly",
    priority: "0.95",
  },
  {
    path: "/methodology",
    title: "AI-Native Design Methodology | 5-Phase Workflow, Ryan Winzenburg",
    description:
      "A five-phase AI-native design methodology for shipping enterprise-grade UX 4-6x faster without sacrificing quality or system integrity.",
    ogImage: "/images/methodology-hero.webp",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/consulting",
    title: "Consulting | Product UX Research, Strategy, and Delivery | Ryan Winzenburg",
    description:
      "Turn uncertain customer problems into experiences your team can actually build. Research, product strategy, prototyping, testing, and delivery. Engagements start at $8,000.",
    ogImage: "/images/services-hero.webp",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services",
    title: "Consulting | Product UX Research, Strategy, and Delivery | Ryan Winzenburg",
    description:
      "Turn uncertain customer problems into experiences your team can actually build. Research, product strategy, prototyping, testing, and delivery. Engagements start at $8,000.",
    ogImage: "/images/services-hero.webp",
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    path: "/assessment",
    title: "Product Risk and UX Maturity Assessment | Ryan Winzenburg",
    description:
      "Twenty questions about how your team decides what to build. Get a maturity score, your three largest product risks, and a recommended starting engagement. About six minutes. No email required.",
    ogImage: "/images/services-hero.webp",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/articles",
    title: "Articles on AI Design Workflows, DesignOps & Product Strategy | Ryan Winzenburg",
    description:
      "Articles on AI-augmented design workflows, design operations, design systems, UX leadership, and product strategy from 25 years of enterprise design leadership.",
    ogImage: "/images/articles-hero.webp",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/contact",
    title: "Contact Ryan Winzenburg | Design Leadership Roles and Scoped Work",
    description:
      "Contact Ryan Winzenburg about a design leadership role, or about scoped AI workflow, design system, and product work.",
    ogImage: "/images/contact-hero.webp",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/gallery",
    title: "Illustration Gallery | Ryan Winzenburg",
    description:
      "Selected editorial and conceptual illustrations created for articles and product storytelling.",
    ogImage: "/images/articles-hero.webp",
    changefreq: "monthly",
    priority: "0.5",
  },
  {
    path: "/case-study/cultivate",
    title: "Cultivate: Startup Operating System | Ryan Winzenburg",
    description:
      "A portfolio-first SaaS workspace that turns ideas into validated products, powered by agents, quality gates, and a business operating system.",
    ogImage: "/project-cultivate-bos.webp",
    ogType: "article",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/case-study/kinlet",
    title: "Kinlet: AI-Powered Matching Platform | Ryan Winzenburg",
    description:
      "Product design and design system work for Kinlet, an AI-powered matching platform spanning onboarding, matching, and analytics.",
    ogImage: "/images/kinlet-landing.webp",
    ogType: "article",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/case-study/saas-design-system",
    title: "SaaS Design System Case Study | Ryan Winzenburg",
    description:
      "How a SaaS design system was structured for velocity, consistency, and adoption across product teams.",
    ogImage: "/project-saas-design-system.webp",
    ogType: "article",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/case-study/comcast-design-system",
    title: "Comcast Design System Case Study | Ryan Winzenburg",
    description:
      "Enterprise design system work at Comcast: components, foundations, and governance for multi-product delivery.",
    ogImage: "/project-comcast-design-system-hero.webp",
    ogType: "article",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/case-study/buildout",
    title: "Buildout Case Study | Ryan Winzenburg",
    description:
      "UX and product design for Buildout commercial real estate workflows, including prospecting and map-driven experiences.",
    ogImage: "/project-buildout-hero.webp",
    ogType: "article",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/case-study/cvs-aetna",
    title: "CVS / Aetna Case Study | Ryan Winzenburg",
    description:
      "Enterprise UX and design systems work across CVS and Aetna digital product domains.",
    ogImage: "/project-cvs-aetna-hero.webp",
    ogType: "article",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/case-study/undercurrent",
    title: "Undercurrent: Career Discovery OS | Ryan Winzenburg",
    description:
      "An AI-powered voice interview platform that helps professionals navigate career transitions through proven frameworks and automated synthesis.",
    ogImage: "/images/01_welcome.webp",
    ogType: "article",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/case-study/winzinvest",
    title: "Winzinvest: Execution Controls for RIAs | Ryan Winzenburg",
    description:
      "A fully automated stock and options trading platform that enforces rules-based execution across every client account. Built for RIAs and family offices.",
    ogImage: "/images/winzinvest_01_homepage_hero.webp",
    ogType: "article",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/unsubscribe",
    title: "Unsubscribe | Ryan Winzenburg",
    description: "Manage your newsletter subscription.",
    ogImage: "/images/contact-hero.webp",
    noIndex: true,
  },
];

/**
 * @param {StaticPageSeo} page
 */
export function staticPageAbsoluteUrl(page) {
  if (page.path === "/") {
    return `${SITE_ORIGIN}/`;
  }
  return `${SITE_ORIGIN}${page.path}`;
}

/**
 * @param {StaticPageSeo} page
 */
export function staticPageAbsoluteImage(page) {
  if (page.ogImage.startsWith("http")) {
    return page.ogImage;
  }
  return `${SITE_ORIGIN}${page.ogImage}`;
}
