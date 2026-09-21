import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { brandFacts } from "@/lib/brandFacts";

const { person, organization } = brandFacts;

interface FooterLink {
  label: string;
  href: string;
  /** Leaves the SPA, so it renders as a plain anchor. */
  external?: boolean;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

const COLUMNS: FooterColumn[] = [
  {
    heading: "Work",
    links: [
      { label: "Case studies", href: "/work" },
      { label: "Methodology", href: "/methodology" },
      { label: "Consulting", href: "/consulting" },
      { label: "UX maturity assessment", href: "/assessment" },
    ],
  },
  {
    heading: "Writing",
    links: [
      { label: "Articles", href: "/articles" },
      { label: "Resources", href: "/resources" },
      { label: "Weekly pulse", href: "/subscribe" },
    ],
  },
  {
    heading: "More",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Illustrations", href: "/gallery" },
    ],
  },
];

/** Same set the About page exposes, kept here so agents find them from any page. */
const MACHINE_FILES: FooterLink[] = [
  { label: "llms.txt", href: "/llms.txt", external: true },
  { label: "brand-facts.json", href: "/brand-facts.json", external: true },
  { label: "sitemap.xml", href: "/sitemap.xml", external: true },
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

/**
 * Site-wide footer. Rendered once from App so every route ends somewhere
 * instead of dead-ending, including the case studies and article pages that
 * mount their own chrome.
 */
export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-slate-950/60">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 font-['Playfair_Display'] text-base font-semibold text-primary"
              >
                RW
              </span>
              <span className="text-lg font-semibold text-white">
                {person.legalName}
              </span>
            </Link>
            <p className="mt-6 max-w-sm leading-relaxed text-slate-400">
              {organization.description}
            </p>
            <ul className="mt-7 flex items-center gap-3">
              {person.sameAs.map((url) => {
                const key = socialKeyFromUrl(url);
                const social = key ? SOCIAL_ICONS[key] : null;
                return (
                  <li key={url}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-slate-400 transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {social ? (
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d={social.path} />
                        </svg>
                      ) : (
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      )}
                      <span className="sr-only">
                        {social?.label ?? url.replace(/^https?:\/\//, "")}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <nav
            aria-label="Footer"
            className="grid gap-10 sm:grid-cols-3 lg:col-span-6 lg:col-start-7 lg:gap-8"
          >
            {COLUMNS.map((column) => (
              <div key={column.heading}>
                <h2 className="mb-5 text-xs uppercase tracking-[0.16em] text-slate-400">
                  {column.heading}
                </h2>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-300 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-border/60 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-400">
            © {year} {person.legalName} · {person.location.addressLocality},{" "}
            {person.location.addressRegion}
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {MACHINE_FILES.map((file) => (
              <li key={file.href}>
                <a
                  href={file.href}
                  className="text-xs text-slate-400 transition-colors hover:text-primary"
                >
                  {file.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
