import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import FactRow, { type Fact } from "@/components/FactRow";
import PageHero from "@/components/PageHero";
import PageSeo from "@/components/PageSeo";
import Reveal from "@/components/Reveal";
import { Section, SectionHeading, SectionTitle } from "@/components/Section";
import SiteLayout from "@/components/SiteLayout";
import { trackCaseStudyClick, trackExternalLink } from "@/lib/analytics";

interface ProjectMetric {
  value: string;
  label: string;
}

interface ProjectHighlight {
  title: string;
  detail: string;
}

interface Project {
  /** Case study route on this site. */
  slug: string;
  kicker: string;
  title: string;
  image: string;
  imageAlt: string;
  role: string;
  /** Label above the metric grid. Omitted where the source card had none. */
  metricsLabel?: string;
  metrics: ProjectMetric[];
  highlightsLabel: string;
  highlights: ProjectHighlight[];
  liveUrl?: string;
  /** Slug passed to trackCaseStudyClick and trackExternalLink. */
  analyticsKey: string;
}

/** Earlier work carries a shorter recipe: summary plus a few leadership points. */
interface EarlierProject {
  slug: string;
  kicker: string;
  title: string;
  image: string;
  imageAlt: string;
  summary: string;
  pointsLabel: string;
  points: string[];
  analyticsKey: string;
}

const projects: Project[] = [
  {
    slug: "/case-study/kinlet",
    kicker: "FOUNDER · AI-NATIVE SAAS · 2026",
    title: "Kinlet: AI-Native SaaS MVP",
    image: "/images/kinlet-landing.webp",
    imageAlt: "Kinlet - AI-Native SaaS MVP",
    role: "Solo founder, product strategy, UX design, full-stack development, AI integration, and go-to-market. Built complete SaaS MVP from idea to production in 5 days using AI-augmented workflows. Demonstrates how one designer-developer can now build what traditionally required entire teams.",
    metricsLabel: "WHAT I DEMONSTRATED",
    metrics: [
      { value: "5 Days", label: "Idea → Production MVP" },
      { value: "Solo", label: "Full-stack + AI integration" },
      { value: "AI-Native", label: "Matching + moderation" },
      { value: "Live", label: "Production deployed" },
    ],
    highlightsLabel: "WHAT I BUILT",
    highlights: [
      {
        title: "AI Matching Algorithm",
        detail: "Groups caregivers by situation similarity",
      },
      {
        title: "Content Moderation AI",
        detail: "Real-time safety without 24/7 humans",
      },
      {
        title: "Validation Framework",
        detail: "Complete GTM + interview scripts",
      },
      {
        title: "Production Infrastructure",
        detail: "Next.js, Supabase, Clerk, PostHog",
      },
    ],
    liveUrl: "https://kinlet.care",
    analyticsKey: "kinlet",
  },
  {
    slug: "/case-study/undercurrent",
    kicker: "FOUNDER · AI-NATIVE PRODUCT · 2026",
    title: "Undercurrent: Career Discovery OS",
    image: "/images/06_home_dashboard.webp",
    imageAlt: "Undercurrent Career Discovery OS",
    role: "Solo founder, product strategy, UX design, full-stack development, and AI orchestration. Designed and built a voice-first AI coaching platform that synthesizes 6 career clarity frameworks into a 45-60 minute guided interview, with automated report generation.",
    metricsLabel: "WHAT I BUILT",
    metrics: [
      { value: "45-60 min", label: "Voice-first AI interview" },
      { value: "6", label: "Proven frameworks woven together" },
      { value: "19", label: "Guided questions" },
      { value: "Live", label: "Production deployed" },
    ],
    highlightsLabel: "KEY CAPABILITIES",
    highlights: [
      {
        title: "Voice AI Coaching",
        detail: "Claude-powered interview with real-time Coach Reflection",
      },
      {
        title: "Multi-Modal Input",
        detail: "Voice-first with graceful text fallback",
      },
      {
        title: "Automated Synthesis",
        detail: "Full report generated from 19-question session",
      },
      {
        title: "Progress Persistence",
        detail: "Save and resume across sessions",
      },
    ],
    liveUrl: "https://undercurrent-brown.vercel.app/",
    analyticsKey: "undercurrent",
  },
  {
    slug: "/case-study/winzinvest",
    kicker: "FOUNDER · FINTECH · 2024 – PRESENT",
    title: "Winzinvest: Execution Controls for RIAs",
    image: "/images/winzinvest_01_homepage_hero.webp",
    imageAlt: "Winzinvest execution platform for RIAs",
    role: "Founder and product lead. Designed, built, and deployed a fully automated stock and options trading platform that enforces rules-based execution across every client account. Built for RIAs and family offices who need institutional-quality execution without an in-house trading desk.",
    metrics: [
      { value: "2.16", label: "Sharpe Ratio (5yr)" },
      { value: "3.5%", label: "Options Income Floor" },
      { value: "17", label: "Risk Gates / Order" },
    ],
    highlightsLabel: "KEY CAPABILITIES",
    highlights: [
      {
        title: "Systematic Execution",
        detail: "Automated entries, exits, stops, and options rolls via IBKR API",
      },
      {
        title: "17-Gate Risk Framework",
        detail: "Every order blocked or approved by independent risk checks",
      },
      {
        title: "Firm Command Center",
        detail: "Multi-account oversight with governance queue and audit logs",
      },
      {
        title: "Transparent Logic",
        detail: "Every blocked trade logged with the specific gate that rejected it",
      },
    ],
    liveUrl: "https://winzinvest.com",
    analyticsKey: "winzinvest",
  },
  {
    slug: "/case-study/saas-design-system",
    kicker: "SERIES C SAAS · 2024",
    title: "Kinetic UI Design System",
    image: "/saas-ds-welcome.webp",
    imageAlt: "Kinetic UI Design System",
    role: "Led the design system initiative from strategy through execution. Built AI-augmented workflows that enabled a 2-person team to deliver what traditionally requires 6-8 people. Trained the internal team on new processes.",
    metricsLabel: "LEADERSHIP IMPACT",
    metrics: [
      { value: "2 → 8", label: "Team output multiplied 4x" },
      { value: "100%", label: "Team adopted AI workflows" },
      { value: "4-6x", label: "Faster feature delivery sustained" },
      { value: "$1M+", label: "Saved vs. traditional staffing" },
    ],
    highlightsLabel: "WHAT I BUILT",
    highlights: [
      {
        title: "AI Workflow System",
        detail: "Cursor + Claude + MCP for design-to-code",
      },
      {
        title: "Team Training Program",
        detail: "Onboarded 5 designers to new workflows",
      },
      {
        title: "Design System Infrastructure",
        detail: "48 components, tokens, Storybook docs",
      },
      {
        title: "Process Documentation",
        detail: "Runbooks for sustainable maintenance",
      },
    ],
    analyticsKey: "saas-design-system",
  },
  {
    slug: "/case-study/comcast-design-system",
    kicker: "FORTUNE 50 TELECOM · 2024",
    title: "Comcast Business Design System",
    image: "/project-comcast-design-system.webp",
    imageAlt: "Comcast Business Design System",
    role: "Drove design system adoption across 12 product teams. Built governance processes, trained design leads, and established the DesignOps infrastructure that made cross-team consistency sustainable.",
    metricsLabel: "LEADERSHIP IMPACT",
    metrics: [
      { value: "12 Teams", label: "Drove adoption org-wide" },
      { value: "40%", label: "Faster time-to-market" },
      { value: "$2M", label: "Annual savings realized" },
      { value: "95%", label: "Design system adoption rate" },
    ],
    highlightsLabel: "WHAT I BUILT",
    highlights: [
      {
        title: "Governance Framework",
        detail: "Contribution model, review process",
      },
      { title: "Design Lead Training", detail: "12 team leads onboarded" },
      { title: "Adoption Dashboard", detail: "Metrics tracking for leadership" },
      { title: "Component Library", detail: "Shared across all 12 teams" },
    ],
    analyticsKey: "comcast-design-system",
  },
];

const earlierProjects: EarlierProject[] = [
  {
    slug: "/case-study/buildout",
    kicker: "B2B SAAS · 2018-2020",
    title: "BuildOut",
    image: "/project-buildout.webp",
    imageAlt: "BuildOut CRE Platform",
    summary:
      "Built the design practice from scratch at this high-growth commercial real estate platform. Established design processes, hired the team's first designers, and led product design through successful acquisition.",
    pointsLabel: "LEADERSHIP EXPERIENCE",
    points: [
      "Built design team from 0 → 4 designers",
      "Established design process and culture",
      "Led design through acquisition",
    ],
    analyticsKey: "buildout",
  },
  {
    slug: "/case-study/cvs-aetna",
    kicker: "FORTUNE 10 HEALTHCARE · 2016-2018",
    title: "CVS Health/Aetna",
    image: "/project-cvs.webp",
    imageAlt: "CVS Health Platform",
    summary:
      "Led UX initiatives across a 20+ person design org for enterprise healthcare applications serving millions. Navigated complex regulatory requirements and aligned stakeholders across a massive organization.",
    pointsLabel: "LEADERSHIP EXPERIENCE",
    points: [
      "Led initiatives across 20+ person design org",
      "Enterprise scale: millions of users",
      "HIPAA compliance at Fortune 10 scale",
    ],
    analyticsKey: "cvs-aetna",
  },
];

const caseStudyCount = projects.length + earlierProjects.length;

/**
 * Every fact here is already asserted by a card on this page: the counts come
 * from the arrays above, the years and sectors from the project kickers.
 */
const heroFacts: Fact[] = [
  {
    label: "Case studies",
    value: `${caseStudyCount}`,
    note: `${projects.length} current, ${earlierProjects.length} earlier career`,
  },
  { label: "Span", value: "2016 – present" },
  {
    label: "Sectors",
    value: "Telecom, healthcare, fintech",
    note: "Commercial real estate, B2B SaaS",
  },
  { label: "Range", value: "Fortune 10 to solo founder" },
];

function ProjectCard({ project }: { project: Project }) {
  const { liveUrl } = project;

  return (
    <article className="group rounded-xl border border-border/60 bg-background/40 p-7 transition-colors hover:border-primary/50 hover:bg-background/70 md:p-10">
      {/* Explicit placement keeps one stacked reading order on small screens
          and, from lg up, pairs the screenshot with the numbers in the right
          rail while the narrative and build detail hold the left. */}
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-10">
        <div className="aspect-video overflow-hidden rounded-lg border border-border/60 bg-muted lg:col-span-5 lg:col-start-8 lg:row-start-1">
          <img
            loading="lazy"
            src={project.image}
            alt={project.imageAlt}
            className="h-full w-full object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-105"
          />
        </div>

        <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            {project.kicker}
          </p>
          <h3 className="mt-4 text-pretty text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
            {project.title}
          </h3>

          <h4 className="mt-7 text-xs uppercase tracking-[0.16em] text-slate-400">
            MY ROLE
          </h4>
          <p className="mt-3 leading-relaxed text-slate-300">{project.role}</p>
        </div>

        <div className="lg:col-span-5 lg:col-start-8 lg:row-start-2">
          {project.metricsLabel ? (
            <h4 className="mb-5 text-xs uppercase tracking-[0.16em] text-slate-400">
              {project.metricsLabel}
            </h4>
          ) : null}
          {/* Values sit on `mt-auto` so they share a baseline even when a
              label wraps to two lines. */}
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col border-t border-border/60 pt-4"
              >
                <dt className="text-xs uppercase tracking-[0.14em] text-slate-400">
                  {metric.label}
                </dt>
                <dd className="mt-auto pt-2 text-xl font-semibold tracking-tight text-white">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-7 lg:col-start-1 lg:row-start-2">
          <h4 className="mb-5 text-xs uppercase tracking-[0.16em] text-slate-400">
            {project.highlightsLabel}
          </h4>
          <dl className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="border-t border-border/60 pt-4"
              >
                <dt className="text-sm font-medium text-slate-100">
                  {highlight.title}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-slate-400">
                  {highlight.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-3 border-t border-border/60 pt-7 sm:flex-row lg:col-span-12 lg:col-start-1 lg:row-start-3">
          <Button asChild>
            <Link
              href={project.slug}
              onClick={() =>
                trackCaseStudyClick(project.analyticsKey, project.title)
              }
            >
              View case study
              <span className="sr-only">: {project.title}</span>
              <ArrowRight
                className="transition-transform motion-safe:group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Button>
          {liveUrl ? (
            <Button variant="outline" asChild>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackExternalLink(liveUrl, project.analyticsKey)}
              >
                View live
                <span className="sr-only">: {project.title}</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}

/**
 * One `Link` wraps the whole card, so the accessible name is the card copy and
 * there is a single tab stop per project.
 */
function EarlierProjectCard({ project }: { project: EarlierProject }) {
  return (
    <Link
      href={project.slug}
      onClick={() => trackCaseStudyClick(project.analyticsKey, project.title)}
      className="group overflow-hidden rounded-xl border border-border/60 bg-background/40 transition-colors hover:border-primary/50 hover:bg-background/70 md:row-span-4 md:grid md:grid-rows-subgrid"
    >
      <div className="aspect-video overflow-hidden border-b border-border/60 bg-muted">
        <img
          loading="lazy"
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-105"
        />
      </div>

      <div className="px-7 pt-7">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
          {project.kicker}
        </p>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-white transition-colors group-hover:text-primary md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-4 leading-relaxed text-slate-300">{project.summary}</p>
      </div>

      <div className="px-7 pb-7 pt-8">
        <h4 className="text-xs uppercase tracking-[0.16em] text-slate-400">
          {project.pointsLabel}
        </h4>
        <ul className="mt-4 space-y-2.5 border-t border-border/60 pt-4">
          {project.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2.5 text-sm text-slate-300"
            >
              <span
                aria-hidden="true"
                className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-primary"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-2 border-t border-border/60 px-7 py-5 text-sm font-semibold text-primary">
        View case study
        <ArrowRight
          className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}

export default function Work() {
  return (
    <SiteLayout currentPage="work">
      <PageSeo
        title="Case Studies | Design Operations & AI-Augmented Product Design, Ryan Winzenburg"
        description="Case studies in design operations, enterprise design systems, and AI-augmented product design across Fortune 50 and startup environments."
        path="/work"
        ogImage="/images/work-hero.webp"
      />

      <PageHero
        titleId="work-hero-title"
        eyebrow="Case studies"
        eyebrowNote={`${caseStudyCount} projects`}
        media={{ src: "/images/work-hero.webp", position: "object-center" }}
        title={<>What product experience leadership looks like in practice</>}
        lede={
          <>
            Enterprise B2B systems across telecom, healthcare, fintech,
            commercial real estate, and venture-backed SaaS. Each case study
            pairs the experience decisions I led with the operating model
            changes that made them hold.
          </>
        }
        actions={
          <>
            <Button size="lg" asChild>
              <Link href="/contact?intent=role">Get in touch</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/methodology">How I work</Link>
            </Button>
          </>
        }
        meta={<FactRow facts={heroFacts} />}
      />

      {/* Featured projects */}
      <Section labelledBy="featured-heading">
        <SectionHeading
          id="featured-heading"
          eyebrow="Featured projects"
          title="Organizational Transformation"
          lede="Each project represents a team I led, a process I redesigned, or an org I helped transform, beyond deliverables shipped."
        />
        <div className="space-y-10 md:space-y-12">
          {projects.map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Earlier career */}
      <Section tone="slate" labelledBy="earlier-heading">
        <SectionHeading
          id="earlier-heading"
          eyebrow="Before that"
          title="Earlier Career Leadership"
          lede="Foundation experience in design leadership at scale"
        />
        {/* Subgrid keeps the summary, point list and footer rules on the same
            baselines across both cards. */}
        <Reveal>
          <div className="grid gap-8 md:grid-cols-2 md:grid-rows-[auto_auto_1fr_auto] md:gap-y-0">
            {earlierProjects.map((project) => (
              <EarlierProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section tone="muted" compact labelledBy="work-cta-heading">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle id="work-cta-heading">
            Looking for product experience leadership?
          </SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            I&apos;m talking with enterprise B2B product organizations about
            product experience leadership. If your team is carrying a hard
            experience problem and an operating model that isn&apos;t helping,
            tell me about it.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact?intent=role">Let&apos;s talk</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/articles">Read my thinking</Link>
            </Button>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
