import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  MapPin,
  Clock,
  Briefcase,
  Rocket,
  Shield,
  TrendingUp,
  Sparkles,
  BookOpen,
  ArrowRight,
  ArrowUpRight,
  FileJson,
  FileText,
  Map as MapIcon,
} from "lucide-react";
import ResponsiveNav from "@/components/ResponsiveNav";
import PageSeo from "@/components/PageSeo";
import {
  ORGANIZATION_ID,
  PERSON_ID,
  brandFacts,
} from "@/lib/brandFacts";

/**
 * Canonical Brand Hub lives at /about.
 * Off-site cleanup (manual, do not automate): stale third-party profiles such as an
 * old CloudPeeps page still say "10+ years / Denver". Those dilute the entity signal
 * and should be updated or removed when Ryan has access.
 */

const { person, organization, ventures, flagshipArticles } = brandFacts;

const ventureOrgNodes = ventures.map((venture) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": venture["@id"],
  name: venture.name,
  url: venture.url,
  description: venture.oneLiner,
  foundingDate: venture.started,
  founder: { "@id": PERSON_ID },
}));

const aboutBrandHubJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://winzenburg.com/about#webpage",
    url: "https://winzenburg.com/about",
    name: "About Ryan Winzenburg — Brand Hub",
    description:
      "Canonical identity facts for Ryan Winzenburg, founder of Winzinvest and Casimir Systems.",
    dateModified: brandFacts.updated,
    about: { "@id": PERSON_ID },
    mainEntity: { "@id": PERSON_ID },
    isPartOf: { "@id": "https://winzenburg.com/#website" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: person.legalName,
    url: person.url,
    jobTitle: person.jobTitle,
    description: person.shortBio,
    image: "https://winzenburg.com/images/about-hero.webp",
    sameAs: person.sameAs,
    knowsAbout: person.knowsAbout,
    address: {
      "@type": "PostalAddress",
      addressLocality: person.location.addressLocality,
      addressRegion: person.location.addressRegion,
      addressCountry: person.location.addressCountry,
    },
    worksFor: { "@id": ORGANIZATION_ID },
    owns: ventures.map((venture) => ({ "@id": venture["@id"] })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORGANIZATION_ID,
    name: organization.name,
    url: organization.url,
    description: organization.description,
    image: "https://winzenburg.com/images/about-hero.webp",
    areaServed: "US",
    founder: { "@id": PERSON_ID },
    sameAs: person.sameAs,
  },
  ...ventureOrgNodes,
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://winzenburg.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://winzenburg.com/about",
      },
    ],
  },
];

const identityFacts = [
  { label: "Legal name", value: person.legalName, icon: Briefcase },
  { label: "Primary role", value: person.jobTitle, icon: Briefcase },
  {
    label: "Location",
    value: `${person.location.addressLocality}, ${person.location.addressRegion}`,
    icon: MapPin,
  },
  { label: "Experience", value: `${person.experienceYears} years`, icon: Clock },
];

const SOCIAL_ICONS: Record<string, { label: string; path: string }> = {
  linkedin: {
    label: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  github: {
    label: "GitHub",
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.417-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.225.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  x: {
    label: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
};

function socialKeyFromUrl(url: string): keyof typeof SOCIAL_ICONS | null {
  if (url.includes("linkedin.com")) return "linkedin";
  if (url.includes("github.com")) return "github";
  if (url.includes("x.com") || url.includes("twitter.com")) return "x";
  return null;
}

const ventureIcons: Record<string, typeof TrendingUp> = {
  "Fintech / B2B SaaS": TrendingUp,
  "Defense / AI decision-support": Shield,
};

const machineFiles = [
  { href: "/llms.txt", label: "/llms.txt", note: "Curated Markdown index for AI agents", icon: FileText },
  { href: "/brand-facts.json", label: "/brand-facts.json", note: "Structured Person / venture facts", icon: FileJson },
  { href: "/sitemap.xml", label: "/sitemap.xml", note: "Full crawl inventory", icon: MapIcon },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950">
      <PageSeo
        title="About Ryan Winzenburg | Brand Hub — Canonical Identity Facts"
        description="Canonical facts about Ryan Winzenburg: Design Operations Leader & AI Workflow Architect in Wheat Ridge, CO; founder of Winzinvest and Casimir Systems."
        path="/about"
        ogImage="/images/about-hero.webp"
        ogType="profile"
        jsonLd={aboutBrandHubJsonLd}
      />
      <ResponsiveNav currentPage="about" />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pb-24 mb-16 md:mb-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/images/about-hero.webp"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
        </div>
        <div className="container px-6">
          <div className="max-w-4xl mx-auto bg-slate-950/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800/50">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60 text-xs uppercase tracking-wide text-slate-400 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Canonical identity · Updated {brandFacts.updated}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {person.jobTitle}
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mb-8">
              {person.shortBio}
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-800 bg-slate-900/50 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {person.location.addressLocality}, {person.location.addressRegion}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-800 bg-slate-900/50 text-sm text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                {person.experienceYears} years designing enterprise products
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-800 bg-slate-900/50 text-sm text-slate-300">
                <Rocket className="w-4 h-4 text-cyan-400" />
                Founder of {ventures.length} active ventures
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Identity */}
          <section className="mb-20" aria-labelledby="identity-heading">
            <h2
              id="identity-heading"
              className="text-2xl md:text-3xl font-bold text-white mb-6"
            >
              Who is Ryan Winzenburg?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {identityFacts.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-lg border border-slate-800 bg-slate-900/40 p-5"
                >
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-500 mb-2">
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </div>
                  <div className="text-slate-200 font-medium">{value}</div>
                </div>
              ))}
            </div>
            <p className="text-slate-400 leading-relaxed italic border-l-2 border-slate-700 pl-4">
              &ldquo;{person.linkedInHeadline}&rdquo;
            </p>
          </section>

          {/* Ventures */}
          <section className="mb-20" aria-labelledby="ventures-heading">
            <h2
              id="ventures-heading"
              className="text-2xl md:text-3xl font-bold text-white mb-3"
            >
              What did Ryan Winzenburg found?
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Ventures below are separate products with their own sites. This
              page only records the founder relationship, not product marketing.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {ventures.map((venture) => {
                const Icon = ventureIcons[venture.category] ?? Rocket;
                return (
                  <article
                    key={venture.name}
                    className="group rounded-xl border border-slate-800 bg-slate-900/40 p-6 hover:border-cyan-500/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {venture.status} · {venture.started}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {venture.name}
                    </h3>
                    <p className="text-xs text-slate-500 mb-3">
                      {venture.role} · {venture.category}
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-5">
                      {venture.oneLiner}
                    </p>
                    <a
                      href={venture.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-cyan-400 group-hover:text-cyan-300 text-sm font-medium"
                    >
                      {venture.url.replace(/^https?:\/\//, "")}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Topics */}
          <section className="mb-20" aria-labelledby="topics-heading">
            <h2
              id="topics-heading"
              className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-2"
            >
              <Sparkles className="w-6 h-6 text-cyan-400" />
              What topics should AI associate with Ryan Winzenburg?
            </h2>
            <ul className="flex flex-wrap gap-2">
              {person.knowsAbout.map((topic) => (
                <li
                  key={topic}
                  className="px-3.5 py-1.5 rounded-full border border-slate-700 bg-slate-900/40 text-slate-300 text-sm hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </section>

          {/* Writing */}
          <section className="mb-20" aria-labelledby="writing-heading">
            <h2
              id="writing-heading"
              className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-2"
            >
              <BookOpen className="w-6 h-6 text-cyan-400" />
              Where does Ryan Winzenburg publish practitioner writing?
            </h2>
            <div className="space-y-3">
              {flagshipArticles.map((article) => {
                const path = article.url.replace("https://winzenburg.com", "");
                return (
                  <a
                    key={article.url}
                    href={path}
                    className="group flex items-start justify-between gap-4 rounded-lg border border-slate-800 bg-slate-900/40 p-5 hover:border-cyan-500/50 transition-colors"
                  >
                    <div>
                      <div className="text-slate-100 font-medium group-hover:text-cyan-300 transition-colors mb-1">
                        {article.title}
                      </div>
                      <p className="text-slate-500 text-sm">{article.note}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </a>
                );
              })}
            </div>
          </section>

          {/* Verified profiles */}
          <section className="mb-16" aria-labelledby="profiles-heading">
            <h2
              id="profiles-heading"
              className="text-2xl md:text-3xl font-bold text-white mb-6"
            >
              Where else is Ryan Winzenburg verified online?
            </h2>
            <div className="flex flex-wrap gap-4">
              {person.sameAs.map((url) => {
                const key = socialKeyFromUrl(url);
                const social = key ? SOCIAL_ICONS[key] : null;
                return (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-slate-800 bg-slate-900/40 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                  >
                    {social ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.path} />
                      </svg>
                    ) : (
                      <ArrowUpRight className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium">
                      {social?.label ?? url.replace(/^https?:\/\//, "")}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>

          {/* Machine-readable files */}
          <section
            className="rounded-lg border border-slate-800/60 bg-slate-900/20 p-5"
            aria-labelledby="machine-heading"
          >
            <h2
              id="machine-heading"
              className="text-xs uppercase tracking-wide text-slate-500 mb-3"
            >
              Machine-readable identity files
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {machineFiles.map(({ href, label, note, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                  title={note}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* CTA */}
      <section className="border-t border-slate-800/60 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s Talk About Your Design Organization
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            If you&apos;re building a design team that needs to get serious about
            AI, I&apos;d love to hear what you&apos;re working on, even if it&apos;s
            just an exploratory conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
            <Link href="/articles">
              <Button size="lg" variant="outline">
                Read My Thinking
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
