import { Link } from "wouter";
import { AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageSeo from "@/components/PageSeo";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import { Section, SectionHeading } from "@/components/Section";

interface Destination {
  href: string;
  label: string;
  note: string;
}

const DESTINATIONS: Destination[] = [
  { href: "/work", label: "Work", note: "Case studies from enterprise B2B product organizations" },
  { href: "/articles", label: "Articles", note: "Writing on product experience, operating models, and AI" },
  { href: "/resources", label: "Resources", note: "Skill packs and taxonomies you can download" },
  { href: "/about", label: "About", note: "Background, ventures, and how I work" },
  { href: "/contact", label: "Contact", note: "Start a conversation about a role or scoped work" },
];

export default function NotFound() {
  return (
    <SiteLayout>
      <PageSeo
        title="Page Not Found | Ryan Winzenburg"
        description="The page you requested could not be found."
        path="/404"
        noIndex
      />

      <PageHero
        titleId="not-found-title"
        eyebrow="Page not found"
        title={<>This page isn&apos;t here</>}
        lede={
          <>
            Sorry about that. The link is probably old, or the page moved when
            the site was reorganized.
          </>
        }
        actions={
          <>
            <Button size="lg" asChild>
              <Link href="/">Go to the home page</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Tell me what was broken</Link>
            </Button>
          </>
        }
        aside={
          <div className="flex items-center justify-center gap-6 rounded-xl border border-border/60 bg-background/40 px-8 py-12">
            <span className="relative flex h-16 w-16 shrink-0 items-center justify-center">
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-red-900/40 motion-safe:animate-pulse"
              />
              <AlertCircle
                className="relative h-12 w-12 text-red-400"
                aria-hidden="true"
              />
            </span>
            <span
              aria-hidden="true"
              className="font-['Playfair_Display'] text-6xl leading-none text-slate-400"
            >
              404
            </span>
          </div>
        }
      />

      <Section tone="muted" compact labelledBy="not-found-links-heading">
        <SectionHeading
          id="not-found-links-heading"
          eyebrow="Try one of these"
          title="Where you were probably headed"
        />
        <ul className="border-t border-border/60">
          {DESTINATIONS.map((destination) => (
            <li key={destination.href} className="border-b border-border/60">
              <Link
                href={destination.href}
                className="group flex items-center gap-6 py-6 transition-colors hover:bg-white/5"
              >
                <span className="min-w-0 flex-1 md:flex md:items-baseline md:gap-8">
                  <span className="block text-lg font-semibold text-slate-100 transition-colors group-hover:text-primary md:w-44 md:shrink-0">
                    {destination.label}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-400 md:mt-0">
                    {destination.note}
                  </span>
                </span>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-primary"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </SiteLayout>
  );
}
