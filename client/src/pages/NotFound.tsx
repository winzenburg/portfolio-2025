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
          <div className="studio-blob mx-auto max-w-sm">
            <img
              src="/images/spots/empty-404-signpost.webp"
              alt="A person with a lantern stands at a crossroads beside a signpost whose arrows are blank, under a moon and stars."
              className="aspect-square w-full object-cover"
            />
          </div>
        }
      />

      <Section tone="navy" compact labelledBy="not-found-links-heading">
        <SectionHeading
          id="not-found-links-heading"
          eyebrow="Try one of these"
          title="Where you were probably headed"
        />
        <ul className="grid gap-3">
          {DESTINATIONS.map((destination) => (
            <li key={destination.href}>
              <Link
                href={destination.href}
                className="group flex items-center gap-6 rounded-3xl border-2 border-ink bg-studio-card px-5 py-5 text-ink"
              >
                <span className="min-w-0 flex-1 md:flex md:items-baseline md:gap-8">
                  <span className="block text-lg font-bold text-ink md:w-44 md:shrink-0">
                    {destination.label}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-muted md:mt-0">
                    {destination.note}
                  </span>
                </span>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-cobalt motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
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
