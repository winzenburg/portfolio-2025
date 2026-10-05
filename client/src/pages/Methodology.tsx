import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PageSeo from "@/components/PageSeo";
import PageHero from "@/components/PageHero";
import FactRow, { type Fact } from "@/components/FactRow";
import Reveal from "@/components/Reveal";
import SiteLayout from "@/components/SiteLayout";
import {
  Eyebrow,
  Section,
  SectionHeading,
  SectionTitle,
} from "@/components/Section";

type AudienceValue = {
  /** Who the benefit lands with. Rendered as the term in a definition list. */
  audience: string;
  benefit: string;
};

type MethodologyPhase = {
  /** Anchor id, also used by the phase jump nav. */
  slug: string;
  name: string;
  shortName: string;
  timeline: string;
  summary: string;
  activities: string[];
  value: AudienceValue[];
  deliverable: string;
};

type Reason = {
  title: string;
  body: string;
};

/**
 * Structural facts only. Outcome claims that could not be sourced stay off
 * this page. The hero restates scope, not results.
 */
const HERO_FACTS: Fact[] = [
  { label: "Phases", value: "Five", note: "Research through handoff" },
  { label: "Experience", value: "25 years", note: "Fortune 50 product work" },
  {
    label: "Human decisions",
    value: "Strategy and quality",
    note: "What to build, and whether it's good enough",
  },
  {
    label: "AI execution",
    value: "Code, docs, tests",
    note: "Once the direction is settled",
  },
];

const PHASES: MethodologyPhase[] = [
  {
    slug: "phase-research-strategy",
    name: "AI-Powered Research & Strategy",
    shortName: "Research",
    timeline: "1–2 days",
    summary:
      "Deep understanding of the problem space and data-driven strategy in days, not months.",
    activities: [
      "Synthesize user research, surveys, support tickets",
      "Conduct heuristic analysis of existing products",
      "Create data-driven personas and journey maps",
      "Identify high-impact opportunities",
    ],
    value: [
      { audience: "Product leaders", benefit: "Evidence before the budget is committed" },
      { audience: "PMs", benefit: "A roadmap tied to what users do" },
      { audience: "Design", benefit: "More research coverage without a new hire" },
    ],
    deliverable:
      "Strategy document, personas, prioritized opportunities, executive summary",
  },
  {
    slug: "phase-design-prototyping",
    name: "Design & Prototyping",
    shortName: "Design",
    timeline: "3–5 days",
    summary:
      "Interactive prototypes at the fidelity the decision needs.",
    activities: [
      "Model information architecture and navigation",
      "Generate production-quality components",
      "Build interactive, high-fidelity prototypes",
      "Iterate based on stakeholder feedback",
    ],
    value: [
      { audience: "Product leaders", benefit: "See the direction work before engineering starts" },
      { audience: "PMs", benefit: "Users react to something real, early" },
      { audience: "Design", benefit: "Less time redrawing wireframes" },
    ],
    deliverable: "Fully interactive prototype built with production-ready code",
  },
  {
    slug: "phase-production-development",
    name: "Production Development",
    shortName: "Development",
    timeline: "1–2 weeks",
    summary:
      "Production-ready code with enterprise quality: type-safe, accessible, tested, documented.",
    activities: [
      "Write production code (React, TypeScript, Angular)",
      "Implement design tokens and theming",
      "Build reusable component library",
      "Check accessibility while the components are built",
    ],
    value: [
      { audience: "Product leaders", benefit: "Less rework between prototype and build" },
      { audience: "PMs", benefit: "A build the team can take into production" },
      { audience: "Engineering", benefit: "Code the team can read and change" },
    ],
    deliverable: "Production-ready codebase, component library, design tokens",
  },
  {
    slug: "phase-testing-qa",
    name: "Testing & Quality Assurance",
    shortName: "Testing",
    timeline: "2–3 days",
    summary:
      "Automated tests catch regressions and accessibility problems before release.",
    activities: [
      "Write E2E tests with Playwright",
      "Automated accessibility audits (axe-core)",
      "Visual regression testing",
      "Performance optimization",
    ],
    value: [
      { audience: "Product leaders", benefit: "Fewer surprises after launch" },
      { audience: "PMs", benefit: "A release you can sign off on" },
      { audience: "Engineering", benefit: "Automated QA pipeline" },
    ],
    deliverable:
      "Comprehensive test suite, accessibility audit, performance report",
  },
  {
    slug: "phase-documentation-handoff",
    name: "Documentation & Handoff",
    shortName: "Handoff",
    timeline: "1–2 days",
    summary:
      "Documentation that lets your team maintain and extend the system long after I am gone.",
    activities: [
      "Generate component documentation (Storybook)",
      "Write implementation guides",
      "Create governance playbooks",
      "Train your team on AI workflows",
    ],
    value: [
      { audience: "Product leaders", benefit: "Lower cost to maintain after handoff" },
      { audience: "PMs", benefit: "Team is self-sufficient" },
      { audience: "Design", benefit: "Your team learns AI workflows" },
    ],
    deliverable: "Complete documentation, governance playbook, team training",
  },
];

const LOOP_STAGES: Reason[] = [
  {
    title: "Frame the decision",
    body: "Name the bet, who can say yes, and what would change the call.",
  },
  {
    title: "Structure the work",
    body: "Order the questions and the sources so the week has a shape.",
  },
  {
    title: "Orchestrate tools",
    body: "AI drafts synthesis and specs. I decide what stays in the recommendation.",
  },
  {
    title: "Review exceptions",
    body: "The cases that do not fit the pattern get a human look before they land in the writeup.",
  },
  {
    title: "Ship with accountability",
    body: "You get a go, no-go, or pivot, and a written scope with the assumptions stated.",
  },
  {
    title: "Capture the learning",
    body: "Write down what the decision taught, so the next bet does not start from a blank page.",
  },
];

function PhaseBlock({
  phase,
  index,
}: {
  phase: MethodologyPhase;
  index: number;
}) {
  const headingId = `${phase.slug}-heading`;

  return (
    <article
      id={phase.slug}
      aria-labelledby={headingId}
      className="scroll-mt-24 py-14 first:pt-0 last:pb-0"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <div className="mb-5 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="font-display text-2xl text-muted-foreground"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span aria-hidden="true" className="h-px w-10 bg-primary" />
              <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-primary">
                {phase.timeline}
              </span>
            </div>
            <h3
              id={headingId}
              className="mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl"
            >
              {phase.name}
            </h3>
            <p className="leading-relaxed text-muted-foreground">{phase.summary}</p>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h4 className="mb-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                What I do
              </h4>
              <ul className="space-y-2.5 border-t border-border/60 pt-4">
                {phase.activities.map((activity) => (
                  <li
                    key={activity}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-primary"
                    />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                What it is worth
              </h4>
              <dl className="divide-y divide-border/60 border-t border-border/60">
                {phase.value.map((item) => (
                  <div
                    key={item.audience}
                    className="grid grid-cols-[minmax(0,6rem)_1fr] gap-x-4 py-3"
                  >
                    <dt className="text-sm font-medium text-foreground">
                      {item.audience}
                    </dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground">
                      {item.benefit}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-border/60 bg-background/40 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Deliverable
            </p>
            <p className="mt-2 leading-relaxed text-foreground">
              {phase.deliverable}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Methodology() {
  return (
    <SiteLayout currentPage="methodology">
      <PageSeo
        title="Methodology | From Evidence to a Buildable Scope | Ryan Winzenburg" description="How I run enterprise product work in five phases, from research to handoff. People make the strategic calls. AI speeds up the drafting, and I review all of it."
        path="/methodology"
        ogImage="/images/methodology-hero.webp"
      />

      <PageHero
        titleId="methodology-hero-title"
        eyebrow="Methodology"
        eyebrowNote="Research through handoff"
        media={{ src: "/images/methodology-hero.webp", position: "object-center" }}
        title={<>How a product bet becomes a scope your team can build</>}
        lede={
          <>
            I decide what to build and why, with your team in the room. Once that is settled, AI drafts code, documentation, and tests, and I review every piece. A sprint stops at a written scope. The later phases are separate work.
          </>
        }
        actions={
          <>
            <Button size="lg" asChild>
              <Link href="/contact?intent=consulting">Talk through your product bet</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#workflow">See the five phases</a>
            </Button>
          </>
        }
        meta={<FactRow facts={HERO_FACTS} />}
      />

      {/* Philosophy */}
      <Section labelledBy="philosophy-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-4">The philosophy</Eyebrow>
            <SectionTitle id="philosophy-heading">
              How the work is split
            </SectionTitle>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
            <p className="text-xl text-foreground md:text-2xl md:leading-snug">
              I decide what gets built and why.
            </p>
            <p>
              Once that is settled, AI drafts code, documentation, and tests,
              and I review every piece before it ships.
            </p>
            <p>
              On a sprint the loop stops at a written scope. Build work is a
              separate engagement.
            </p>
          </div>
        </div>
      </Section>

      {/* Five phases */}
      <Section id="workflow" tone="muted" labelledBy="workflow-heading">
        <SectionHeading
          id="workflow-heading"
          eyebrow="The workflow"
          title="Five phases, research through handoff"
          lede="Each phase is scoped to a timeline and ends in a concrete deliverable."
        />

        <nav
          aria-label="Jump to a phase"
          className="-mt-6 mb-14 flex flex-wrap gap-2"
        >
          {PHASES.map((phase, index) => (
            <a
              key={phase.slug}
              href={`#${phase.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <span aria-hidden="true" className="text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              {phase.shortName}
            </a>
          ))}
        </nav>

        <div className="divide-y divide-border/60">
          {PHASES.map((phase, index) => (
            <PhaseBlock key={phase.slug} phase={phase} index={index} />
          ))}
        </div>
      </Section>

      {/* Why it works */}
      <Section tone="slate" labelledBy="why-heading">
        <SectionHeading
          id="why-heading"
          eyebrow="Why it holds up"
          title="Six stages, one engagement"
        />
        <Reveal>
          <ol className="max-w-3xl divide-y divide-border/60 border-y border-border/60">
            {LOOP_STAGES.map((stage, index) => (
              <li key={stage.title} className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-8">
                <div className="sm:col-span-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-foreground">
                    {stage.title}
                  </h3>
                </div>
                <p className="leading-relaxed text-muted-foreground sm:col-span-8">
                  {stage.body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        <p className="mt-10 max-w-2xl leading-relaxed text-muted-foreground">
          Engagement scopes, timelines, and pricing live on the consulting
          page.{" "}
          <Link
            href="/consulting"
            className="group inline-flex items-center gap-1.5 font-medium text-primary transition-colors hover:text-primary/80"
          >
            See how engagements are scoped
            <ArrowRight
              className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </p>
      </Section>

      {/* Closing */}
      <Section tone="muted" compact labelledBy="methodology-cta-heading">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <SectionTitle id="methodology-cta-heading">
              Want to see how this runs on your product?
            </SectionTitle>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              Tell me what you are shipping and where it is stuck. I will walk
              you through what the five phases would look like against it,
              including the parts I would not use.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Button size="lg" asChild>
              <Link href="/contact?intent=consulting">Talk through your product bet</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/work">View case studies</Link>
            </Button>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
