import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import PageSeo from "@/components/PageSeo";
import PageHero from "@/components/PageHero";
import FactRow, { type Fact } from "@/components/FactRow";
import Reveal from "@/components/Reveal";
import SiteLayout from "@/components/SiteLayout";
import { Eyebrow, Section, SectionHeading, SectionTitle } from "@/components/Section";
import { contactHref } from "@/lib/contact-intent";

const consultingHref = contactHref({ intent: "consulting" });

const heroFacts: Fact[] = [
  {
    label: "Experience",
    value: "25 years",
    note: "Enterprise B2B product design",
  },
  {
    label: "Scope",
    value: "Fortune 50",
    note: "Healthcare, fintech, telecom",
  },
  {
    label: "Entry",
    value: "AI Delivery Loop Sprint",
    note: "From $8,000 · fixed fee",
  },
  {
    label: "Expansion",
    value: "Embedded retainer",
    note: "Ongoing product-experience leadership",
  },
];

/** Canonical capability order. Each point keeps its own one-line explanation. */
const capabilities = [
  {
    index: "01",
    name: "Product Experience Leadership",
    summary:
      "Deciding what the experience should be when the system is complicated and the stakeholders disagree.",
    points: [
      {
        title: "B2B systems strategy",
        detail: "Complex enterprise product decisions across stakeholder layers",
      },
      {
        title: "Cross-functional alignment",
        detail: "Design, engineering, and product working from the same model",
      },
      {
        title: "Research and evidence",
        detail: "Decisions grounded in real enterprise user behavior",
      },
    ],
  },
  {
    index: "02",
    name: "Product Operating Model",
    summary:
      "The structure underneath the output. Most experience problems turn out to be operating model problems.",
    points: [
      {
        title: "Design system strategy",
        detail: "Token-based architecture with sustainable governance",
      },
      {
        title: "Design operations",
        detail: "Process, tooling, and rituals that scale delivery",
      },
      {
        title: "Structure and governance",
        detail: "Role clarity, decision rights, and contribution models",
      },
    ],
  },
  {
    index: "03",
    name: "AI-enabled Execution",
    summary:
      "Using AI where the work is already well defined, without making delivery fragile.",
    points: [
      {
        title: "Workflow architecture",
        detail: "AI systems that fit into real team rhythms, not over them",
      },
      {
        title: "Orchestrated tooling",
        detail: "MCP integrations, Cursor workflows, agent coordination",
      },
      {
        title: "Speed without fragility",
        detail: "AI adoption that holds up at enterprise delivery pace",
      },
    ],
  },
];

const engagementPaths = [
  {
    index: "01",
    label: "Entry",
    name: "AI Delivery Loop Sprint",
    body: "A fixed engagement for the bet you are about to fund. We put evidence under the direction, cut what does not hold, and leave engineering with a scope they can start. AI compresses the mechanical parts of synthesis and specification. The judgment stays mine.",
    meta: "Typically 2–4 weeks · from $8,000",
  },
  {
    index: "02",
    label: "Expansion",
    name: "Embedded product-experience retainer",
    body: "When the gap is ongoing senior judgment, not a single decision. Roadmap input, research planning, design direction, and stakeholder alignment inside your product cadence. The sprint proves fit. The retainer is how the work stays useful.",
    meta: "Monthly · three-month minimum",
  },
];

const principles = [
  {
    title: "The operating model before the output",
    body: "Most product experience problems are actually operating model problems. Fix how decisions get made and the design output follows.",
  },
  {
    title: "Systems, not heroics",
    body: "Enterprise B2B doesn't scale on individual craft. It scales on design systems, decision frameworks, and team rituals that hold up under delivery pressure.",
  },
  {
    title: "AI as execution depth",
    body: "AI changes what a small, well-structured team can ship. I use it to move faster on the work that's already well defined, not to skip the thinking.",
  },
];

const humanLayer = [
  {
    title: "Product strategy",
    body: "What to build, for whom, and why now. AI generates alternatives; the judgment call stays human.",
  },
  {
    title: "Stakeholder trust",
    body: "Enterprise B2B runs on relationships with engineering, product, legal, and buyers. That's earned in person, not automated.",
  },
  {
    title: "Quality standards",
    body: "Knowing when something is good enough and when it isn't. The bar is set by the people doing the work, not the tools.",
  },
  {
    title: "User context",
    body: "Enterprise users have constraints, workflows, and politics that AI can't read. That context comes from direct research.",
  },
];

/**
 * Environments this work has happened in. Named companies and sector labels only.
 * No outcome metrics here on purpose. The case studies carry those in context.
 */
const environments = [
  { name: "Comcast", detail: "Telecom · Fortune 50", href: "/case-study/comcast-design-system" },
  { name: "CVS Health / Aetna", detail: "Healthcare · Fortune 10", href: "/case-study/cvs-aetna" },
  { name: "Life Time Fitness", detail: "Health and fitness" },
  { name: "BuildOut", detail: "Commercial real estate · B2B SaaS", href: "/case-study/buildout" },
  { name: "Series B to D SaaS", detail: "Venture-backed product orgs" },
  { name: "PE-backed companies", detail: "Portfolio product teams" },
];

export default function Home() {
  return (
    <SiteLayout currentPage="home">
      <PageSeo
        title="Ryan Winzenburg | Product Experience Consulting for Enterprise B2B"
        description="Product experience consultancy for enterprise B2B. Start with an AI Delivery Loop Sprint, expand into an embedded retainer. 25 years across healthcare, financial services, telecom, and technology."
        path="/"
        ogImage="/images/about-hero.webp"
        ogType="website"
      />

      <PageHero
        titleId="home-hero-title"
        eyebrow="Product Experience Consulting"
        eyebrowNote="Enterprise B2B"
        media={{
          src: "/images/home-hero.mp4",
          kind: "video",
          poster: "/images/home-hero-poster.webp",
        }}
        title="I help product leaders prove the direction before they fund the build"
        lede="25 years in enterprise B2B across healthcare, financial services, telecom, and technology. The usual entry is an AI Delivery Loop Sprint. When the work needs to stay, that expands into an embedded product-experience retainer."
        actions={
          <>
            <Button size="lg" asChild>
              <Link href="/consulting">See the sprint and retainer</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/work">View case studies</Link>
            </Button>
          </>
        }
        footnote={
          <>
            Bring the bet you are about to fund. We find out whether the
            direction holds before the budget is committed.
            <span className="mt-2 block">
              Prefer to talk first?{" "}
              <Link
                href={consultingHref}
                className="font-medium text-primary transition-colors hover:text-primary/80"
              >
                Book a 30-minute call.
              </Link>
            </span>
          </>
        }
        meta={<FactRow facts={heroFacts} />}
      />

      {/* Problem: before the build */}
      <Section labelledBy="problem-heading">
        <div className="max-w-2xl">
          <Eyebrow className="mb-4">Before you fund the next build</Eyebrow>
          <SectionTitle id="problem-heading" className="mt-4">
            You already have a bet. You need to know if the direction holds.
          </SectionTitle>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Most expensive product mistakes are not craft mistakes. They are
            delivery quarters spent on a direction nobody validated. If you are
            about to commit budget, the useful work is evidence, explicit cuts,
            and a scope engineering can start. That is what the AI Delivery Loop
            Sprint is for.
          </p>
          <Link
            href="/consulting"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            How the sprint and retainer work
            <ArrowRight
              className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </Section>

      {/* Entry → expansion */}
      <Section tone="muted" labelledBy="paths-heading">
        <SectionHeading
          id="paths-heading"
          eyebrow="How buyers usually engage"
          title="Sprint to enter. Retainer to stay."
          lede="Two shapes, one consultancy. Start with the smallest engagement that answers the decision in front of you."
        />
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 md:grid-cols-2">
            {engagementPaths.map((path) => (
              <div key={path.name} className="bg-background/60 p-7 md:p-8">
                <div className="mb-6 flex items-baseline gap-3">
                  <span className="font-['Playfair_Display'] text-2xl text-primary/70">
                    {path.index}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-border/60" />
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                    {path.label}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-semibold leading-snug text-foreground">
                  {path.name}
                </h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {path.body}
                </p>
                <p className="border-t border-border/60 pt-4 text-sm font-medium text-primary">
                  {path.meta}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="mt-8">
          <Link
            href="/consulting"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Full consulting page
            <ArrowRight
              className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </Section>

      {/* Capabilities */}
      <Section labelledBy="capabilities-heading">
        <SectionHeading
          id="capabilities-heading"
          eyebrow="What I bring"
          title="Three capabilities, rarely one at a time"
          lede="Enterprise B2B product experience runs on all three. The work almost never separates cleanly into just one."
          trailing={
            <Link
              href="/consulting"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              How this turns into an engagement
              <ArrowRight
                className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          }
        />
        {/* Subgrid keeps the index rule, title, summary and point list aligned
            across all three cards regardless of copy length. */}
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 md:grid-cols-3 md:grid-rows-[auto_auto_1fr_auto] md:gap-y-0">
            {capabilities.map((capability) => (
              <div
                key={capability.name}
                className="bg-background/60 p-7 md:row-span-4 md:grid md:grid-rows-subgrid md:p-8"
              >
                <div className="mb-6 flex items-baseline gap-3">
                  <span className="font-['Playfair_Display'] text-2xl text-primary/70">
                    {capability.index}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-border/60" />
                </div>
                <h3 className="mb-3 text-xl font-semibold leading-snug text-foreground">
                  {capability.name}
                </h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {capability.summary}
                </p>
                <ul className="space-y-4 border-t border-border/60 pt-6">
                  {capability.points.map((point) => (
                    <li key={point.title}>
                      <p className="text-sm font-medium text-foreground">
                        {point.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {point.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* How I think */}
      <Section tone="muted" labelledBy="thinking-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-4">How I think about it</Eyebrow>
            <SectionTitle id="thinking-heading">
              The assumptions under the work
            </SectionTitle>
            <ol className="mt-10 space-y-8">
              {principles.map((principle, index) => (
                <li key={principle.title} className="flex gap-5">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-xs font-semibold text-primary"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      {principle.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {principle.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <h3 className="mb-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              What I don't automate
            </h3>
            <dl className="divide-y divide-border/60 overflow-hidden rounded-xl border border-border/60 bg-background/40">
              {humanLayer.map((item) => (
                <div key={item.title} className="p-6 md:p-7">
                  <dt className="mb-2 font-semibold text-foreground">{item.title}</dt>
                  <dd className="leading-relaxed text-muted-foreground">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* Environments */}
      <Section tone="slate" labelledBy="environments-heading">
        <SectionHeading
          id="environments-heading"
          eyebrow="Where this work has happened"
          title="Selected environments"
          lede="Fortune 50 product organizations, venture-backed SaaS, and private-equity portfolio teams. The case studies carry the specifics. No invented outcome numbers on this page."
          trailing={
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              See the case studies
              <ArrowRight
                className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          }
        />
        <ul className="grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {environments.map((environment) => {
            const content = (
              <>
                <span className="block text-lg font-semibold text-foreground">
                  {environment.name}
                </span>
                <span className="mt-1.5 block text-sm text-muted-foreground">
                  {environment.detail}
                </span>
              </>
            );
            return (
              <li key={environment.name} className="bg-background/60">
                {environment.href ? (
                  <Link
                    href={environment.href}
                    className="group flex h-full items-center justify-between gap-4 p-6 transition-colors hover:bg-background/90 md:p-7"
                  >
                    <span>{content}</span>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:text-primary motion-safe:group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                ) : (
                  <div className="h-full p-6 md:p-7">{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </Section>

      {/* CTA */}
      <Section labelledBy="home-cta-heading">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle id="home-cta-heading">
            About to commit budget to something nobody has validated?
          </SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            That is the moment a sprint is worth the most. Thirty minutes, no
            deck. Tell me what you&apos;re about to fund and which part of it is
            still a guess. I&apos;ll tell you whether an AI Delivery Loop Sprint,
            a retainer, or something else is the right next step.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href={consultingHref}>Book a 30-minute call</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/consulting">See how engagements work</Link>
            </Button>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
