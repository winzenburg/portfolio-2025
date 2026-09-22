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
import DoubleDiamondDiagram, {
  PHASE_ACCENT,
  type PhaseName,
} from "@/components/DoubleDiamondDiagram";
import { contactHref } from "@/lib/contact-intent";
import {
  CONSULTING_FAQ_GROUPS,
  WORKING_TOGETHER,
  consultingFaqJsonLd,
  isConsultingFaqItem,
} from "@/lib/consulting-faq";

const roleHref = contactHref({ intent: "role" });
const consultingHref = contactHref({ intent: "consulting" });

type Situation = {
  title: string;
  body: string;
};

type Risk = {
  title: string;
  body: string;
  outcome: string;
};

type Phase = {
  name: PhaseName;
  mode: "Diverge" | "Converge";
  question: string;
  body: string;
  deliverable: string;
};

type Capability = {
  name: string;
  body: string;
};

type Engagement = {
  name: string;
  when: string;
  scope: string;
  duration: string;
};

type WorkSample = {
  name: string;
  meta: string;
  body: string;
  result: string;
  href: string;
};

type Industry = {
  title: string;
  body: string;
};

/**
 * Engagement shape, not outcome claims. Every value here restates something
 * already written on this page: the FAQ, the working-together list, or the
 * engagement durations. Pricing sits in the investment block further down
 * rather than in the hero, because the first question this buyer has is
 * whether the decision is the kind I handle, not what it costs.
 */
const HERO_FACTS: Fact[] = [
  { label: "First step", value: "30-minute call", note: "No deck, no pitch" },
  {
    label: "Proposal",
    value: "Three business days",
    note: "Fixed fee, scoped before it starts",
  },
  { label: "Entry engagements", value: "2 to 4 weeks" },
  { label: "You work with", value: "Me, directly", note: "No account manager" },
];

const SITUATIONS: Situation[] = [
  {
    title: "A funded bet nobody has validated",
    body: "The roadmap item is approved and the direction came from stakeholder requests, a competitor's screenshots, and three loud customer calls. Nobody has asked whether the thing you are about to build is the thing that gets bought.",
  },
  {
    title: "Two directions and no tiebreaker",
    body: "There is a real fork in the road, and the internal debate keeps resolving by seniority rather than evidence. Whichever way it goes, you will be defending it to a board a quarter from now.",
  },
  {
    title: "An AI feature with no decided job",
    body: "Leadership wants AI in the product this year. Nobody has named the decision it makes for the user, what happens when the model is wrong, or why a customer would trust it with work that matters.",
  },
  {
    title: "A product that demos well and stalls in the account",
    body: "Sales lands it and six weeks later the seats are quiet. Whatever is going wrong happens in the first two weeks of real use, and nobody owns finding it.",
  },
];

const RISKS: Risk[] = [
  {
    title: "Expensive uncertainty",
    body: "You are about to commit engineering quarters to a direction nobody has put in front of a real customer.",
    outcome:
      "A go, no-go, or pivot call backed by evidence rather than the most senior opinion in the room.",
  },
  {
    title: "A roadmap assembled from internal debate",
    body: "The feature list came from stakeholder requests and competitor screenshots, not from what a customer would change a contract over.",
    outcome:
      "A prioritized direction you can defend to your board and hand to engineering without re-litigating it.",
  },
  {
    title: "Scope that only grows",
    body: "Every review adds a requirement and nothing ever comes off, because no one agreed what this release was supposed to prove.",
    outcome:
      "A scope with a stated hypothesis, explicit cuts, and the metric that will tell you it worked.",
  },
  {
    title: "Adoption that stalls after the sale",
    body: "The contract is signed and the seats go quiet. The trail goes cold somewhere in the first weeks of real use.",
    outcome:
      "Named friction in the actual workflow, and specific changes tied to the number you are missing.",
  },
  {
    title: "Handoffs that turn into rework",
    body: "Design ships a file, engineering interprets it, and three sprints later what is in staging is not what was decided.",
    outcome:
      "States, edge cases, and system-level components specified, so the build is a build rather than a translation.",
  },
  {
    title: "The same decision, re-argued by every team",
    body: "Patterns fork, components duplicate, and each new surface reopens a question that was already settled once.",
    outcome:
      "Decisions made centrally and encoded, so teams inherit them instead of negotiating them.",
  },
];

const PHASES: Phase[] = [
  {
    name: "Discover",
    mode: "Diverge",
    question: "What is actually going on?",
    body: "Stakeholder interviews, customer research, analytics and support-ticket review, competitive and heuristic analysis, and a hard look at what the business needs this product to do.",
    deliverable:
      "A research synthesis, prioritized problem themes, and a clear statement of what we do and do not yet know.",
  },
  {
    name: "Define",
    mode: "Converge",
    question: "Which problem is worth solving?",
    body: "Journey mapping, opportunity sizing, problem framing, and success metrics defined before anything gets designed.",
    deliverable:
      "A problem statement, the metrics that will tell us it worked, and an agreed scope. This is where projects get cheaper, because this is where things get cut.",
  },
  {
    name: "Develop",
    mode: "Diverge",
    question: "What is the best way to solve it?",
    body: "Concept exploration, information architecture, interaction design, and clickable prototypes at the fidelity the decision requires.",
    deliverable:
      "Multiple viable directions, tested against each other rather than defended in a meeting.",
  },
  {
    name: "Deliver",
    mode: "Converge",
    question: "Will it hold up, and can it be built?",
    body: "Usability testing, iteration, accessibility review, high-fidelity design, component and state specification, and direct work with engineering through implementation.",
    deliverable:
      "Implementation-ready design with edge cases and states documented, plus test evidence behind the decisions.",
  },
];

/**
 * Names are load-bearing: the assessment at /assessment recommends a starting
 * engagement by these exact names, and the FAQ prices them. Reordered so the
 * pre-commitment work reads first, which is the order this buyer arrives in.
 */
const ENGAGEMENTS: Engagement[] = [
  {
    name: "UX Diagnostic",
    when: "Something in the product is clearly costing you and nobody can name it.",
    scope: "Expert review, analytics review, stakeholder interviews, prioritized recommendations.",
    duration: "2–3 weeks",
  },
  {
    name: "Discovery Sprint",
    when: "The problem is still fuzzy and the budget conversation has already started.",
    scope: "Research, synthesis, journey mapping, opportunity framing, research readout.",
    duration: "2–4 weeks",
  },
  {
    name: "Concept Validation",
    when: "You need evidence behind a direction before engineering commits to it.",
    scope: "Ideation, flows, prototype, usability testing, recommendations.",
    duration: "3–6 weeks",
  },
  {
    name: "End-to-End Product Engagement",
    when: "A product or major feature needs experience leadership from the decision through the build.",
    scope: "Discover through delivery: research, strategy, design, testing, implementation support.",
    duration: "8–16 weeks",
  },
  {
    name: "Design System Acceleration",
    when: "The same decisions are being re-made by every team that ships a screen.",
    scope: "Component architecture, foundations, accessibility standards, documentation, governance.",
    duration: "4–8 weeks",
  },
  {
    name: "Fractional UX Leadership",
    when: "The gap is ongoing senior judgment, not a project with an end date.",
    scope: "Roadmap input, research planning, design direction, coaching, stakeholder alignment.",
    duration: "Ongoing, 3-month minimum",
  },
];

/**
 * Same three capabilities named on Home and About, written for the buying
 * decision rather than the identity statement. No new claims: the experience
 * span and the venture list both come from the canonical brand facts.
 */
const CAPABILITIES: Capability[] = [
  {
    name: "Product experience leadership",
    body: "Twenty-five years deciding what the experience should be when the system is complicated and the stakeholders disagree. Most of it inside Fortune 50 product organizations, where being wrong is expensive and slow to undo.",
  },
  {
    name: "Product operating model",
    body: "A surprising number of product problems turn out to be decision-rights problems. I work on how the call actually gets made, so the direction survives contact with delivery instead of drifting the moment I leave.",
  },
  {
    name: "AI-enabled execution",
    body: "AI compresses the mechanical parts of synthesis, prototyping, and specification, which is why a small engagement can cover more ground than it used to. The judgment stays mine and the delivery does not get fragile.",
  },
];

const SELECTED_WORK: WorkSample[] = [
  {
    name: "CVS / Aetna",
    meta: "Healthcare · Enterprise UX and design systems",
    body: "Enterprise UX and design system work across CVS and Aetna digital product domains, spanning multiple product teams and regulated healthcare workflows.",
    result:
      "Accessibility moved from a per-screen review gate into the component library. Pattern decisions were made once, centrally, instead of being re-argued by every team.",
    href: "/case-study/cvs-aetna",
  },
  {
    name: "Comcast",
    meta: "Telecom · Enterprise design system",
    body: "Components, foundations, and governance for multi-product delivery at enterprise scale.",
    result:
      "Shared foundations teams could adopt because using them was easier than working around them. Governance made exceptions visible instead of letting divergence hide.",
    href: "/case-study/comcast-design-system",
  },
  {
    name: "Buildout",
    meta: "Commercial real estate · Product design",
    body: "UX and product design for commercial real estate workflows, including prospecting and map-driven experiences.",
    result:
      "Workflow-first product surfaces for people who use the tool all day, not a marketing site wearing a product costume.",
    href: "/case-study/buildout",
  },
  {
    name: "Kinlet",
    meta: "AI matching platform · Product design and design system",
    body: "Product design and design system work spanning onboarding, matching, and analytics.",
    result:
      "A coherent product surface across the matching workflow, instead of a pile of screens that each solved a local problem.",
    href: "/case-study/kinlet",
  },
  {
    name: "Winzinvest",
    meta: "Fintech · Founder, product design and build",
    body: "A fully automated stock and options trading platform that enforces rules-based execution across every client account, built for RIAs and family offices.",
    result:
      "Strategy executes identically across accounts, independent of advisor attention. Shipped and operating as a live commercial product. I include it because I live with my own design decisions.",
    href: "/case-study/winzinvest",
  },
  {
    name: "Undercurrent / Foundpath",
    meta: "Career discovery · Product design and build",
    body: "AI-powered discovery platforms that turn unstructured conversation into a usable written synthesis.",
    result:
      "Current, hands-on work with AI-native product patterns. Coaches start from a written brief instead of a blank intake.",
    href: "/case-study/undercurrent",
  },
];

const INDUSTRIES: Industry[] = [
  {
    title: "Healthcare and health insurance",
    body: "Regulated workflows, member and provider experiences, claims and benefits, accessibility as a requirement. CVS, Aetna.",
  },
  {
    title: "Financial services and fintech",
    body: "Advisor and investor tools, compliance-constrained interfaces, rules-based execution, data-dense screens where a misread costs money. Winzinvest.",
  },
  {
    title: "Telecom",
    body: "Multi-product portfolios, large distributed design organizations, system governance at scale. Comcast.",
  },
  {
    title: "B2B SaaS and enterprise software",
    body: "Onboarding, activation, admin and permissions, analytics, and workflow tools built for people who use them eight hours a day.",
  },
  {
    title: "Commercial real estate",
    body: "Prospecting workflows and map-driven interfaces. Buildout.",
  },
  {
    title: "AI-native products",
    body: "Matching, synthesis, agent-assisted workflows, and the interface problems that come with probabilistic systems.",
  },
];

const PRACTICALITIES: Industry[] = [
  {
    title: "Platforms",
    body: "Responsive web, native iOS and Android, design systems across product lines, admin tooling, data-heavy dashboards, and AI-assisted interfaces.",
  },
  {
    title: "Tools",
    body: "Figma and Figma variables, prototyping at the fidelity the decision needs, accessibility to WCAG 2.2 AA, and AI-augmented workflows including Claude Code and MCP integrations.",
  },
  {
    title: "Working style",
    body: "Colorado-based, working remotely with distributed teams across US time zones. On site when a workshop or research round genuinely needs it.",
  },
];

function faqGroupId(heading: string): string {
  const slug = heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `faq-${slug}`;
}

export default function Services() {
  return (
    <SiteLayout currentPage="consulting">
      <PageSeo
        title="Consulting | Validate the Product Direction Before You Fund the Build | Ryan Winzenburg"
        description="For enterprise B2B product leaders about to commit delivery budget to a direction nobody has validated. Evidence behind the decision, a scope with explicit cuts, and a path engineering can build."
        path="/consulting"
        ogImage="/images/services-hero.webp"
        jsonLd={consultingFaqJsonLd()}
      />

      <PageHero
        titleId="services-hero-title"
        eyebrow="Consulting"
        eyebrowNote="Enterprise B2B product leaders"
        media={{ src: "/images/services-hero.webp", position: "object-center" }}
        title={
          <>
            Prove the direction before you spend the build budget on it.
          </>
        }
        lede={
          <>
            Most of the expensive product mistakes I get called into were not
            design mistakes. Someone committed engineering quarters to a
            direction nobody had tested, and the bill arrived at launch. I work
            in the window just before that commitment, so the decision has
            evidence under it and the build has a scope your engineers can
            actually start.
          </>
        }
        actions={
          <>
            <Button size="lg" asChild>
              <Link href={consultingHref}>Book a 30-minute call</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#situations">See where I come in</a>
            </Button>
          </>
        }
        footnote={
          <>
            Twenty-five years of enterprise product experience across
            healthcare, financial services, telecom, and technology. Previously
            design leadership at CVS/Aetna and Comcast.
            <span className="mt-2 block">
              Hiring for a leadership role instead?{" "}
              <Link
                href={roleHref}
                className="font-medium text-primary transition-colors hover:text-cyan-300"
              >
                That is a different conversation.
              </Link>
            </span>
          </>
        }
        meta={<FactRow facts={HERO_FACTS} />}
      />

      {/* Who this is for */}
      <Section id="situations" tone="muted" labelledBy="situations-heading">
        <SectionHeading
          id="situations-heading"
          eyebrow="Where I come in"
          title="Four situations with a budget attached"
          lede="These are mandates, not job titles. Every one of them is a decision somebody is about to fund, which is the point at which the work is still cheap to change."
        />
        {/*
          Subgrid keeps the index rule, title, and body on shared baselines, so
          the row gap has to be zero or it would draw a line through each card.
          That leaves the second row of cards with no rule above it at md, hence
          the explicit border on everything past the first row.
        */}
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 md:grid-cols-2 md:grid-rows-[auto_auto_1fr] md:gap-y-0">
            {SITUATIONS.map((situation, index) => (
              <div
                key={situation.title}
                className={`bg-background/60 p-7 md:row-span-3 md:grid md:grid-rows-subgrid md:p-8 ${
                  index >= 2 ? "md:border-t md:border-border/60" : ""
                }`}
              >
                <div className="mb-6 flex items-baseline gap-3">
                  <span
                    aria-hidden="true"
                    className="font-['Playfair_Display'] text-2xl text-primary/70"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-border/60" />
                </div>
                <h3 className="mb-3 text-xl font-semibold leading-snug text-white">
                  {situation.title}
                </h3>
                <p className="leading-relaxed text-slate-300">{situation.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Risks */}
      <Section labelledBy="risks-heading">
        <SectionHeading
          id="risks-heading"
          eyebrow="What you are actually buying"
          title="The risk you are carrying, and what replaces it"
          lede="Nobody hires me for research or wireframes. They hire me because a specific risk is sitting on a budget they have to defend. These are the six that come up most."
        />
        <ol className="border-t border-border/60">
          {RISKS.map((risk, index) => (
            <li
              key={risk.title}
              className="grid grid-cols-[2.5rem_1fr] items-start gap-x-4 gap-y-3 border-b border-border/60 py-7 md:grid-cols-[3.5rem_minmax(0,20rem)_1fr] md:gap-x-10"
            >
              {/* The ordered list already conveys position to assistive tech. */}
              <span
                aria-hidden="true"
                className="font-['Playfair_Display'] text-lg text-slate-400"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold leading-snug text-white md:text-xl">
                {risk.title}
              </h3>
              <div className="col-start-2 md:col-start-3">
                <p className="leading-relaxed text-slate-300">{risk.body}</p>
                <p className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm leading-relaxed text-slate-400">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Outcome
                  </span>
                  <span className="flex-1 basis-64">{risk.outcome}</span>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Process */}
      <Section id="how-i-work" tone="slate" labelledBy="process-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-4">How I work</Eyebrow>
            <SectionTitle id="process-heading">
              An end-to-end process, built to reduce risk at every stage
            </SectionTitle>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              This is the Double Diamond, applied honestly. It is a framework for
              knowing what you know, and being clear about what you have not
              proven yet. Every phase produces a decision. A document is the
              byproduct.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <DoubleDiamondDiagram />
          </div>
        </div>

        <ol className="mt-16 border-t border-border/60">
          {PHASES.map((phase, index) => {
            const accent = PHASE_ACCENT[phase.name];
            return (
              <li
                key={phase.name}
                className="grid gap-x-12 gap-y-5 border-b border-border/60 py-8 lg:grid-cols-12"
              >
                <div className="lg:col-span-4">
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="font-['Playfair_Display'] text-lg text-slate-400"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span aria-hidden="true" className={`h-px w-8 ${accent.rule}`} />
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.16em] ${accent.border} ${accent.bg} ${accent.text}`}
                    >
                      {phase.mode}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {phase.name}
                  </h3>
                  <p className={`mt-2 ${accent.text}`}>{phase.question}</p>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <p className="leading-relaxed text-slate-300">{phase.body}</p>
                  <p className="mt-5 border-t border-border/60 pt-4 text-sm leading-relaxed text-slate-400">
                    <span className="mr-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                      You get
                    </span>
                    {phase.deliverable}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-12 rounded-xl border border-primary/30 bg-primary/10 p-7 md:p-8">
          <p className="max-w-3xl leading-relaxed text-slate-200">
            One thing worth saying plainly: I stay through implementation rather
            than handing off at the file. A validated direction that nobody can
            build is the same as no direction, and most of the loss happens in
            the gap between the decision and the thing that ships.
          </p>
          <Link
            href="/methodology"
            className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-cyan-300"
          >
            Full methodology
            <ArrowRight
              className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </Section>

      {/* Why me */}
      <Section compact labelledBy="capabilities-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-4">Why me</Eyebrow>
            <SectionTitle id="capabilities-heading">
              What I bring to the decision
            </SectionTitle>
            <p className="mt-6 leading-relaxed text-slate-300">
              Three capabilities, and they rarely show up one at a time. The
              work almost never separates cleanly into just one of them.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <dl className="divide-y divide-border/60 border-y border-border/60">
              {CAPABILITIES.map((capability) => (
                <div key={capability.name} className="py-6">
                  <dt className="font-semibold text-white">{capability.name}</dt>
                  <dd className="mt-2 leading-relaxed text-slate-300">
                    {capability.body}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 leading-relaxed text-slate-400">
              I also build and run my own products. Winzinvest is live
              commercial software for RIAs and family offices, and Foundpath and
              Casimir Systems are active. Founding things keeps me honest about
              what shipping actually costs, which is different knowledge from
              reviewing somebody else&apos;s roadmap.
            </p>
          </div>
        </div>
      </Section>

      {/* Selected work */}
      <Section tone="muted" labelledBy="work-heading">
        <SectionHeading
          id="work-heading"
          eyebrow="Proof"
          title="Six projects, six different problems"
          lede="Scope and decisions rather than headline numbers. Each one links to the full case study."
          trailing={
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-cyan-300"
            >
              All case studies
              <ArrowRight
                className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          }
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SELECTED_WORK.map((item, index) => (
            <Reveal key={item.name} delay={index * 60} className="h-full">
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-xl border border-border/60 bg-background/40 p-7 transition-colors hover:border-primary/50 hover:bg-background/70"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                  {item.meta}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {item.name}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-300">{item.body}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
                  {item.result}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 border-t border-border/60 pt-5 text-sm font-medium text-primary">
                  Read the case study
                  <ArrowRight
                    className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Working together */}
      <Section compact labelledBy="working-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-4">Before anything starts</Eyebrow>
            <SectionTitle id="working-heading">
              What working together looks like
            </SectionTitle>
          </div>
          <dl className="divide-y divide-border/60 border-y border-border/60 lg:col-span-7 lg:col-start-6">
            {WORKING_TOGETHER.map((item) => (
              <div
                key={item.title}
                className="grid gap-x-8 gap-y-1.5 py-5 md:grid-cols-[minmax(0,13rem)_1fr]"
              >
                <dt className="font-semibold text-white">{item.title}</dt>
                <dd className="leading-relaxed text-slate-300">{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Engagements */}
      <Section tone="slate" labelledBy="engagements-heading">
        <SectionHeading
          id="engagements-heading"
          eyebrow="Ways to work together"
          title="Six engagements, each defined by the decision it helps you make"
          lede="Start at the smallest one that answers the question actually in front of you. Scaling up later is easy. Unwinding a large engagement that started before the question was clear is not."
        />
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-3">
            {ENGAGEMENTS.map((engagement) => (
              <div
                key={engagement.name}
                className="flex flex-col bg-background/60 p-7"
              >
                <h3 className="text-xl font-semibold leading-snug text-white">
                  {engagement.name}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-300">
                  {engagement.when}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {engagement.scope}
                </p>
                <p className="mt-6 border-t border-border/60 pt-4 text-sm font-medium text-primary">
                  {engagement.duration}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h3 className="text-xl font-semibold text-white">Investment</h3>
            <div className="mt-5 space-y-4 leading-relaxed text-slate-300">
              <p>
                Engagements start at $8,000 for a UX Diagnostic. Most product
                engagements land between $20,000 and $150,000 depending on
                scope. Fractional leadership is monthly.
              </p>
              <p>
                Workshops, standalone usability studies, and audits are
                available when you have one specific question. If that work
                leads to a larger engagement within 60 days, the entry fee is
                credited.
              </p>
            </div>
            <p className="mt-5 border-t border-border/60 pt-4 text-sm leading-relaxed text-slate-400">
              Every engagement gets a fixed, scoped proposal with explicit
              assumptions before anything begins.
            </p>
          </div>

          <Link
            href="/assessment"
            className="group flex flex-col rounded-xl border border-border/60 bg-background/40 p-7 transition-colors hover:border-primary/50 hover:bg-background/70 lg:col-span-5"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Not sure where to start
            </p>
            <h3 className="mt-4 text-xl font-semibold leading-snug text-white">
              Product risk and UX maturity assessment
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-slate-300">
              Twenty questions. About six minutes. A maturity score, your three
              largest product risks, and a recommended starting engagement. No
              email. Answers stay in this browser.
            </p>
            <span className="mt-7 inline-flex items-center gap-2 border-t border-border/60 pt-5 text-sm font-semibold text-primary">
              Take the assessment
              <ArrowRight
                className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>
      </Section>

      {/* Industries */}
      <Section labelledBy="industries-heading">
        <SectionHeading
          id="industries-heading"
          eyebrow="Industries"
          title="Where I already know the terrain"
          lede="Domain familiarity means less of your budget spent explaining your business to me."
        />
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <div key={industry.title} className="bg-background/60 p-7">
                <h3 className="text-lg font-semibold leading-snug text-white">
                  {industry.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-300">
                  {industry.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
          {PRACTICALITIES.map((item) => (
            <div key={item.title}>
              <h3 className="mb-4 text-xs uppercase tracking-[0.16em] text-slate-400">
                {item.title}
              </h3>
              <p className="border-t border-border/60 pt-4 leading-relaxed text-slate-300">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" tone="muted" labelledBy="faq-heading">
        <SectionHeading
          id="faq-heading"
          eyebrow="Before a call"
          title="Questions that come up before a call"
          lede="Process, timing, research, ownership, and payment. Honest answers rather than reassuring ones."
        />
        <div className="space-y-16 md:space-y-20">
          {CONSULTING_FAQ_GROUPS.map((group) => {
            const groupId = faqGroupId(group.heading);
            return (
              <section
                key={group.heading}
                aria-labelledby={groupId}
                className="grid gap-6 lg:grid-cols-12 lg:gap-16"
              >
                <div className="lg:col-span-3">
                  <h3
                    id={groupId}
                    className="text-xs font-medium uppercase tracking-[0.2em] text-primary lg:sticky lg:top-24"
                  >
                    {group.heading}
                  </h3>
                </div>
                <div className="divide-y divide-border/60 border-y border-border/60 lg:col-span-8 lg:col-start-5">
                  {group.items.filter(isConsultingFaqItem).map((item) => (
                    <div key={item.question} className="py-7">
                      <h4 className="text-lg font-semibold leading-snug text-white">
                        {item.question}
                      </h4>
                      <p className="mt-3 leading-relaxed text-slate-300">
                        {item.answer}
                      </p>
                      {item.relatedHref && item.relatedLabel ? (
                        <Link
                          href={item.relatedHref}
                          className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-cyan-300"
                        >
                          {item.relatedLabel}
                          <ArrowRight
                            className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </Link>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Section>

      {/* Closing */}
      <Section compact labelledBy="consulting-cta-heading">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <SectionTitle id="consulting-cta-heading">
              Bring me the bet you are about to fund
            </SectionTitle>
            <p className="mt-5 max-w-2xl leading-relaxed text-slate-300">
              Thirty minutes, no deck. Tell me what you are about to commit to
              and which part of it is still unproven. I will tell you what I
              would do first, whether or not you hire me. If there is a fit, you
              will have a scoped proposal with a fixed fee within three business
              days.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button size="lg" asChild>
                <Link href={consultingHref}>Book a 30-minute call</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-400 lg:text-right">
              Prefer email?{" "}
              <a
                href="mailto:ryan@winzenburg.com"
                className="font-medium text-primary transition-colors hover:text-cyan-300"
              >
                ryan@winzenburg.com
              </a>
              <span className="mt-1 block">
                Entry engagements can usually begin within two weeks.
              </span>
            </p>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
