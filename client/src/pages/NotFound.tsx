import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
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
          <p
            aria-hidden="true"
            className="font-display text-[7.5rem] leading-none tracking-[-0.05em] text-ink sm:text-[9rem] lg:text-right"
          >
            404
          </p>
        }
      />

      <Section tone="navy" compact labelledBy="not-found-links-heading">
        <SectionHeading
          id="not-found-links-heading"
          eyebrow="Try one of these"
          title="Where you were probably headed"
        />
        <ul className="border-t border-band/25">
          {DESTINATIONS.map((destination) => (
            <li key={destination.href} className="border-b border-band/25">
              <Link
                href={destination.href}
                className="group flex items-baseline gap-6 py-6 text-band transition-opacity duration-200 hover:opacity-70"
              >
                <span className="min-w-0 flex-1 md:flex md:items-baseline md:gap-10">
                  <span className="block font-display text-2xl tracking-[-0.02em] text-band md:w-48 md:shrink-0">
                    {destination.label}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-band-muted md:mt-0">
                    {destination.note}
                  </span>
                </span>
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-band-muted"
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
