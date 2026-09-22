import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import PageSeo from "@/components/PageSeo";
import PageHero from "@/components/PageHero";
import FactRow from "@/components/FactRow";
import Reveal from "@/components/Reveal";
import { Eyebrow, Section, SectionHeading, SectionTitle } from "@/components/Section";
import DoubleDiamondDiagram, {
  PHASE_ACCENT,
  type PhaseName,
} from "@/components/DoubleDiamondDiagram";

const BASE = import.meta.env.BASE_URL;

const PACK_VERSION = "1.4.0";
const TAXONOMY_SKILL_COUNT = 202;
const TAXONOMY_DOMAIN_COUNT = 15;

function resourceHref(filename: string): string {
  return `${BASE}resources/${filename}`;
}

type DownloadItem = {
  title: string;
  description: string;
  filename: string;
  /** Short file-format chip shown in the manifest. */
  format: string;
  /** Number of agent skills in the artifact, where it ships skills. */
  skillCount?: number;
};

const DOWNLOADS: DownloadItem[] = [
  {
    title: "Complete skill packs",
    description:
      "Everything on this page in one zip: Double Diamond skills, UX competency skills v1.4.0, Double Diamond crosswalk, taxonomy, discrete skills taxonomy, and the Cursor user rule.",
    filename: "skill-packs-complete.zip",
    format: "ZIP",
  },
  {
    title: "Double Diamond Skill Pack",
    description:
      "Nineteen design skills tagged to Discover, Define, Develop, and Deliver. Use when you need method-level help inside a Double Diamond phase.",
    filename: "double-diamond-skill-pack.zip",
    format: "ZIP",
    skillCount: 19,
  },
  {
    title: `UX Competency Skills v${PACK_VERSION}`,
    description:
      "Eighteen agent skills on a 202-skill taxonomy across 15 domains (including ideation). Works in Cursor and Grok (SKILL.md format).",
    filename: "ux-competency-skills-v1.4.0.zip",
    format: "ZIP",
    skillCount: 18,
  },
  {
    title: "Double Diamond crosswalk",
    description:
      "How the original Double Diamond Playbook's 26 skills map into the competency pack, plus what the pack adds (phase exit gates, front-end, AI, growth).",
    filename: "double-diamond-crosswalk.md",
    format: "MD",
  },
  {
    title: `Competency taxonomy v${PACK_VERSION}`,
    description:
      "The full 202-skill taxonomy with depth levels and lead roles across product, UX, UI, ideation, and front-end architecture.",
    filename: "taxonomy-v1.4.0.md",
    format: "MD",
  },
  {
    title: "Discrete skills taxonomy",
    description:
      "Long-form taxonomy for UI, product design, UX design, and front-end architecture. The source map behind the competency pack.",
    filename: "discrete-skills-taxonomy.md",
    format: "MD",
  },
  {
    title: "Cursor user rule",
    description:
      "Always-on Cursor User Rule that indexes the competency skills (including ideation and Double Diamond phase routing) so the agent loads the right one without being asked.",
    filename: "cursor-user-rule.txt",
    format: "TXT",
  },
];

const TOTAL_SKILL_COUNT = DOWNLOADS.reduce(
  (total, item) => total + (item.skillCount ?? 0),
  0,
);

/** The order the router chains skills in. Rendered as the sequence diagram. */
const SKILL_CHAIN = [
  { name: "Router", note: "Classifies the request and picks a playbook" },
  { name: "Audit", note: "Finds the gaps before anything gets built" },
  { name: `${TAXONOMY_DOMAIN_COUNT} domain skills`, note: "The actual method work" },
  { name: "Outcome review", note: "Post-release value check and case study" },
];

const INSTALL_STEPS = [
  {
    title: "Unzip and install",
    body: (
      <>
        Run the competency pack&apos;s install script for Cursor (
        <code className="whitespace-nowrap rounded bg-slate-950/60 px-1.5 py-0.5 text-cyan-300">
          ./install.sh cursor
        </code>
        ) or Grok Build.
      </>
    ),
  },
  {
    title: "Make it automatic",
    body: (
      <>
        For skill selection in every Cursor project, run{" "}
        <code className="whitespace-nowrap rounded bg-slate-950/60 px-1.5 py-0.5 text-cyan-300">
          ./install.sh cursor-global
        </code>{" "}
        and paste the user rule into{" "}
        <strong className="font-medium text-foreground">
          Cursor → Customize → Rules → User Rules
        </strong>
        .
      </>
    ),
  },
  {
    title: "Load method skills as needed",
    body: (
      <>
        Double Diamond{" "}
        <code className="rounded bg-slate-950/60 px-1.5 py-0.5 text-cyan-300">
          .skill
        </code>{" "}
        files load as individual agent skills. Grok web accepts the
        self-contained markdown in the competency pack&apos;s{" "}
        <code className="rounded bg-slate-950/60 px-1.5 py-0.5 text-cyan-300">
          grok-web/
        </code>{" "}
        folder.
      </>
    ),
  },
];
type MethodSkill = {
  name: string;
  summary: string;
  tasks: string[];
};

type CompetencySkill = {
  name: string;
  summary: string;
};

type Phase = {
  name: PhaseName;
  mode: string;
  question: string;
  intent: string;
  doubleDiamond: MethodSkill[];
  competency: CompetencySkill[];
};

/**
 * Phase copy and task lists follow the Double Diamond Skill Pack areas/methods
 * (and the DiamondPlay deck’s per-phase breakdown pattern). Competency skills
 * are the agent skills that usually pair with that phase.
 */
const PHASES: Phase[] = [
  {
    name: "Discover",
    mode: "Diverge",
    question: "What is actually going on?",
    intent:
      "Generate evidence about the problem space. Stay expansive — learn, don’t confirm. Discovery ends when you can define the problem with confidence.",
    doubleDiamond: [
      {
        name: "Research planning",
        summary: "Scope the engagement before a single session is scheduled.",
        tasks: [
          "Research scoping and question framing",
          "Stakeholder identification and mapping",
          "Recruiting screener writing",
          "Research ops and logistics",
          "Ethics and consent management",
        ],
      },
      {
        name: "Secondary research",
        summary: "Build the knowledge foundation before entering the field.",
        tasks: [
          "Desk research and literature review",
          "Competitive landscape mapping",
          "Industry and market analysis",
          "Heuristic benchmark review",
          "Patent and regulatory landscape research",
        ],
      },
      {
        name: "Qualitative research",
        summary: "Generate rich, direct human data before defining or solving.",
        tasks: [
          "User interviews and discussion guides",
          "Contextual inquiry",
          "Ethnographic observation and shadowing",
          "Diary studies",
          "Focus groups",
          "Job task analysis",
        ],
      },
      {
        name: "Quantitative research",
        summary: "Understand the problem space at scale through measurement.",
        tasks: [
          "Survey design and instrumentation",
          "Analytics review and behavioral analysis",
          "Funnel analysis",
          "A/B test result interpretation",
          "NPS and CSAT analysis",
          "Cohort analysis",
        ],
      },
      {
        name: "Lean / Agile discovery",
        summary: "Integrate evidence into the team’s rhythm, not as a side project.",
        tasks: [
          "Continuous discovery cadence",
          "Opportunity backlog maintenance",
          "Discovery sprint planning",
          "Jobs-to-be-done interviewing",
          "Assumption mapping",
        ],
      },
    ],
    competency: [
      {
        name: "competency-router",
        summary: "Start here when the request spans disciplines or needs a plan (Double Diamond lens + exit gates).",
      },
      {
        name: "competency-audit",
        summary: "Gap assessment of a product, codebase, team, or person.",
      },
      {
        name: "competency-user-research",
        summary: "Research planning, secondary/competitive review, methods, and ethics (RE).",
      },
      {
        name: "competency-product-framing",
        summary: "Opportunity sizing, JTBD, domain model, and systems mapping (PB).",
      },
      {
        name: "competency-measurement",
        summary: "Analytics review and discovery cadence metrics (ME).",
      },
    ],
  },
  {
    name: "Define",
    mode: "Converge",
    question: "Which problem is worth solving?",
    intent:
      "Converge discovery into a shared problem. Definition ends with a bounded problem statement and prioritized opportunities ready for ideation.",
    doubleDiamond: [
      {
        name: "Synthesis",
        summary: "Move from observations to shared, actionable insight.",
        tasks: [
          "Affinity diagramming",
          "Thematic coding and clustering",
          "Insight statement writing",
          "Data triangulation across methods",
          "Sense-making workshops",
        ],
      },
      {
        name: "Frameworks and models",
        summary: "Make the user’s world legible in forms the team can act on.",
        tasks: [
          "Jobs-to-be-done maps",
          "Ecosystem storyboards",
          "Empathy and mental-model maps",
          "Service blueprints",
          "Personas grounded in evidence",
        ],
      },
      {
        name: "Problem framing",
        summary: "Turn insight into a problem worth solving — and say what you are not solving.",
        tasks: [
          "Root cause analysis (5 Whys)",
          "Problem / point-of-view statement writing",
          "Opportunity framing",
          "How Might We question generation",
          "Assumption and risk articulation",
        ],
      },
      {
        name: "Lean / Agile defining",
        summary: "Make the problem legible in lean and agile delivery language.",
        tasks: [
          "Lean problem canvas",
          "Value stream mapping (current state)",
          "Hypothesis framing",
          "OKR and outcome alignment",
          "North Star metric definition",
        ],
      },
      {
        name: "Prioritization",
        summary: "Turn a long list into a focused, defensible commitment.",
        tasks: [
          "Impact vs. effort mapping",
          "RICE scoring",
          "MoSCoW (Must / Should / Could / Won’t)",
          "Opportunity scoring (Ulwick)",
          "Dot voting and facilitated prioritization",
        ],
      },
    ],
    competency: [
      {
        name: "competency-product-framing",
        summary: "POV, HMW, prioritization, OKRs, and reframing (PB).",
      },
      {
        name: "competency-user-research",
        summary: "Synthesis, insight statements, and experience modeling (RE).",
      },
      {
        name: "competency-ia-interaction",
        summary: "Structure flows and information once the problem is clear (IA).",
      },
      {
        name: "competency-measurement",
        summary: "North Star and input metrics that prove the problem is solved (ME).",
      },
      {
        name: "competency-content-service-ai",
        summary: "Language models and service framing from evidence (CX).",
      },
      {
        name: "competency-leadership-governance",
        summary: "Stakeholder alignment and decision quality (LG).",
      },
    ],
  },
  {
    name: "Develop",
    mode: "Diverge",
    question: "What is the best way to solve it?",
    intent:
      "Explore many solution directions before committing. Development ends when you have a concept worth validating and delivering.",
    doubleDiamond: [
      {
        name: "Ideation",
        summary: "Generate the widest useful range of potential solutions before converging.",
        tasks: [
          "Brainstorming facilitation",
          "Crazy 8s / thumbnail sketching",
          "Worst possible idea",
          "Analogous inspiration",
          "SCAMPER",
          "Design studio workshops",
        ],
      },
      {
        name: "Concept development",
        summary: "Turn raw ideas into defined, comparable concepts.",
        tasks: [
          "Concept definition",
          "Design principles",
          "Concept narrative",
          "Concept comparison and selection",
        ],
      },
      {
        name: "Co-design",
        summary: "Design with users as contributors, not only evaluators.",
        tasks: [
          "Generative design activities",
          "Co-creation workshops",
          "Contextual co-design",
          "Prototype iteration with users",
        ],
      },
      {
        name: "Prototyping",
        summary: "Build the right fidelity to test a specific assumption.",
        tasks: [
          "Paper prototyping",
          "Wireframe prototypes",
          "Interactive mid-fidelity prototypes",
          "Wizard of Oz and concierge prototypes",
          "High-fidelity mockups",
        ],
      },
    ],
    competency: [
      {
        name: "competency-ideation",
        summary: "Ideation facilitation, Crazy 8s, SCAMPER, co-design, and concept briefs (ID).",
      },
      {
        name: "competency-ia-interaction",
        summary: "Navigation, flows, forms, and interaction patterns (IA).",
      },
      {
        name: "competency-content-service-ai",
        summary: "Content, service design, and AI interaction design (CX).",
      },
      {
        name: "competency-ui-visual",
        summary: "Visual hierarchy, layout, typography, and polish (UI).",
      },
      {
        name: "competency-design-systems",
        summary: "Tokens, components, and design operations (DS).",
      },
      {
        name: "competency-prototyping-handoff",
        summary: "Fidelity choices, specs, and design-to-code collaboration (PR).",
      },
      {
        name: "competency-frontend-foundations",
        summary: "Semantic HTML, CSS, and browser-platform fluency (FE).",
      },
      {
        name: "competency-product-framing",
        summary: "Story mapping and MVP scoping for release slices (PB).",
      },
    ],
  },
  {
    name: "Deliver",
    mode: "Converge",
    question: "Will it hold up, and can it be built?",
    intent:
      "Test, harden, and ship. Delivery ends when the solution is live, measured, and set up for continuous improvement.",
    doubleDiamond: [
      {
        name: "Usability testing",
        summary: "Evaluate with real users to find what works and what doesn’t.",
        tasks: [
          "Writing test tasks",
          "Moderated testing protocol",
          "Unmoderated testing",
          "Analyzing usability findings (success, errors, severity)",
        ],
      },
      {
        name: "Accessibility",
        summary: "Design for the full range of human ability and context.",
        tasks: [
          "Visual accessibility",
          "Keyboard and motor accessibility",
          "Screen reader accessibility",
          "Cognitive accessibility",
          "Accessibility audit",
        ],
      },
      {
        name: "Design QA and handoff",
        summary: "Keep what ships aligned with what was validated.",
        tasks: [
          "Preparing the design file",
          "Design annotations",
          "Design specifications",
          "Design QA",
          "Iteration after handoff",
        ],
      },
      {
        name: "Design metrics",
        summary: "Measure quality and impact so design can be defended.",
        tasks: [
          "Behavioral UX metrics",
          "Attitudinal UX metrics",
          "HEART framework",
          "Design system metrics",
          "Connecting design to business metrics",
        ],
      },
      {
        name: "Iteration and design debt",
        summary: "Improve after launch and keep debt from compounding.",
        tasks: [
          "Identifying design debt",
          "Design iteration planning",
          "Design system maintenance",
          "Connecting data to design decisions",
        ],
      },
    ],
    competency: [
      {
        name: "competency-user-research",
        summary: "Usability testing at scale, SUS/SEQ, and evaluative methods (RE).",
      },
      {
        name: "competency-ideation",
        summary: "Concept testing and validation (ID).",
      },
      {
        name: "competency-accessibility",
        summary: "WCAG 2.2, inclusion, and responsible experience design (AX).",
      },
      {
        name: "competency-prototyping-handoff",
        summary: "Design QA, UX definition of done, and staged release (PR).",
      },
      {
        name: "competency-quality-reliability",
        summary: "Testing, performance, privacy, and security (QL).",
      },
      {
        name: "competency-measurement",
        summary: "Demand validation, pilots, instrumentation, and value review (ME).",
      },
      {
        name: "competency-growth-conversion",
        summary: "Marketing surfaces and conversion work (GM).",
      },
      {
        name: "competency-outcome-review",
        summary: "Post-release value check and case study.",
      },
    ],
  },
];

function FormatChip({ format }: { format: string }) {
  return (
    <span className="inline-flex h-9 w-12 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background/60 text-[0.65rem] font-semibold tracking-[0.12em] text-muted-foreground">
      {format}
    </span>
  );
}

function phaseAnchorId(name: PhaseName): string {
  return `phase-${name.toLowerCase()}`;
}

function PhaseBlock({ phase, index }: { phase: Phase; index: number }) {
  const accent = PHASE_ACCENT[phase.name];
  const anchorId = phaseAnchorId(phase.name);
  const headingId = `${anchorId}-heading`;

  return (
    <article
      id={anchorId}
      aria-labelledby={headingId}
      className="scroll-mt-24 py-14 first:pt-0 last:pb-0"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <div className="mb-5 flex items-center gap-4">
              <span className="font-display text-2xl text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                aria-hidden="true"
                className={`h-px w-10 ${accent.rule}`}
              />
              <span
                className={`rounded-full border px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.16em] ${accent.border} ${accent.bg} ${accent.text}`}
              >
                {phase.mode}
              </span>
            </div>
            <h3
              id={headingId}
              className="mb-3 text-3xl font-bold tracking-tight text-foreground"
            >
              {phase.name}
            </h3>
            <p className={`mb-5 text-lg ${accent.text}`}>{phase.question}</p>
            <p className="leading-relaxed text-muted-foreground">{phase.intent}</p>
          </div>
        </div>

        <div className="lg:col-span-8">
          <h4 className="mb-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Double Diamond method areas
          </h4>
          <div className="divide-y divide-border/60 border-y border-border/60">
            {phase.doubleDiamond.map((skill) => (
              <div
                key={skill.name}
                className="grid gap-4 py-6 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-10"
              >
                <div>
                  <h5 className="text-base font-semibold leading-snug text-foreground">
                    {skill.name}
                  </h5>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {skill.summary}
                  </p>
                </div>
                <ul className="gap-x-8 sm:columns-2">
                  {skill.tasks.map((task) => (
                    <li
                      key={task}
                      className="flex break-inside-avoid items-start gap-2.5 py-1 text-sm text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className={`mt-[0.45rem] h-1 w-1 shrink-0 rounded-full ${accent.rule}`}
                      />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h4 className="mb-4 mt-10 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Competency skills that pair with {phase.name}
          </h4>
          <ul className="grid gap-x-8 gap-y-3 md:grid-cols-2">
            {phase.competency.map((skill) => (
              <li key={skill.name} className="text-sm leading-relaxed">
                <code className="rounded bg-slate-950/60 px-1.5 py-0.5 text-cyan-300">
                  {skill.name}
                </code>
                <span className="text-muted-foreground"> {skill.summary}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function Resources() {
  const [fullPack, ...individualDownloads] = DOWNLOADS;

  const heroFacts = [
    { label: "Agent skills", value: `${TOTAL_SKILL_COUNT} across two packs` },
    {
      label: "Taxonomy",
      value: `${TAXONOMY_SKILL_COUNT} skills, ${TAXONOMY_DOMAIN_COUNT} domains`,
    },
    { label: "Runs in", value: "Cursor and Grok" },
    { label: "Cost", value: "Free, no email gate" },
  ];

  return (
    <SiteLayout currentPage="resources">
      <PageSeo
        title="Resources | Skill Packs for Product, UX, and Front-End | Ryan Winzenburg"
        description="Download Ryan Winzenburg's Double Diamond and UX competency skill packs for Cursor and Grok, with task-level guidance for Discover, Define, Develop, and Deliver."
        path="/resources"
        ogImage="/images/methodology-hero.webp"
      />

      <PageHero
        titleId="resources-hero-title"
        eyebrow="Resources"
        eyebrowNote={`Skill packs · version ${PACK_VERSION}`}
        title="Skill packs for product, UX, and front-end work"
        lede="Agent skills and taxonomies I use on real product work. Built for PMs and designers who want Cursor or Grok to follow a clear method instead of inventing one."
        actions={
          <>
            <Button size="lg" asChild>
              <a href={resourceHref(fullPack.filename)} download>
                <Download className="h-4 w-4" aria-hidden="true" />
                Download complete pack
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#packs">Browse individual files</a>
            </Button>
          </>
        }
        meta={<FactRow facts={heroFacts} />}
        aside={<DoubleDiamondDiagram />}
      />

      {/* What these are */}
      <Section tone="muted" labelledBy="overview-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-4">What these are</Eyebrow>
            <SectionTitle id="overview-heading">
              Two packs, one shared map
            </SectionTitle>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                The{" "}
                <strong className="font-semibold text-foreground">
                  Double Diamond Skill Pack
                </strong>{" "}
                is phase-tagged design method skills, research planning through
                design QA. The{" "}
                <strong className="font-semibold text-foreground">
                  UX Competency Skills
                </strong>{" "}
                pack is eighteen agent skills sitting on a{" "}
                {TAXONOMY_SKILL_COUNT}-skill taxonomy across{" "}
                {TAXONOMY_DOMAIN_COUNT} domains, from product framing through
                front-end, quality, measurement, and leadership.
              </p>
              <p>
                New in v{PACK_VERSION}: an ideation domain, the full Double
                Diamond playbook, and a crosswalk of all 26 original playbook
                skills into the pack.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <h3 className="mb-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              How the router chains them
            </h3>
            <ol className="relative">
              {SKILL_CHAIN.map((step, index) => (
                <li key={step.name} className="relative flex gap-5 pb-7 last:pb-0">
                  {index < SKILL_CHAIN.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute left-[0.6875rem] top-7 bottom-0 w-px bg-border/60"
                    />
                  ) : null}
                  <span className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-background text-[0.65rem] font-semibold text-primary">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{step.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.note}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-2 rounded-xl border border-primary/30 bg-primary/10 p-5 text-sm leading-relaxed text-foreground">
              Unsure where to start? Use{" "}
              <code className="rounded bg-slate-950/60 px-1.5 py-0.5 text-cyan-300">
                competency-router
              </code>
              . It classifies the request, picks a playbook, applies phase exit
              gates, and chains the domain skills. Accessibility gets checked on
              any UI work; leadership and governance come in when stakeholders or
              risk are in play.
            </p>
          </div>
        </div>
      </Section>

      {/* Downloads */}
      <Section id="packs" labelledBy="downloads-heading">
        <SectionHeading
          id="downloads-heading"
          eyebrow="Downloads"
          title="Take the whole set, or just the part you need"
          lede="No email gate. Every artifact is a direct file download."
        />

        <Reveal>
          <a
            href={resourceHref(fullPack.filename)}
            download
            className="group mb-14 block rounded-2xl border border-primary/30 bg-gradient-to-br from-cyan-950/50 via-slate-900/40 to-slate-900/20 p-8 transition-colors hover:border-primary/60 md:p-10"
          >
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  Recommended
                </p>
                <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                  {fullPack.title}
                </h3>
                <p className="mb-8 max-w-xl leading-relaxed text-muted-foreground">
                  {fullPack.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-primary/80">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download {fullPack.format} · {TOTAL_SKILL_COUNT} agent skills
                </span>
              </div>
              <div className="lg:col-span-5">
                <p className="mb-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  What&apos;s inside
                </p>
                <ul className="divide-y divide-border/60 border-t border-border/60">
                  {individualDownloads.map((item) => (
                    <li
                      key={item.filename}
                      className="flex items-baseline justify-between gap-4 py-2.5 text-sm text-muted-foreground"
                    >
                      <span>{item.title}</span>
                      <span className="shrink-0 text-[0.65rem] font-semibold tracking-[0.12em] text-muted-foreground">
                        {item.format}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </a>
        </Reveal>

        <h3 className="mb-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
          Individual files
        </h3>
        <ul className="divide-y divide-border/60 border-y border-border/60">
          {individualDownloads.map((item) => (
            <li key={item.filename}>
              <a
                href={resourceHref(item.filename)}
                download
                className="group grid grid-cols-[3rem_1fr_1.25rem] items-start gap-x-5 gap-y-2 py-6 transition-colors hover:bg-white/5 md:grid-cols-[3rem_minmax(0,18rem)_1fr_1.25rem] md:items-center md:gap-x-8"
              >
                <FormatChip format={item.format} />
                <div className="min-w-0">
                  <h4 className="text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary md:text-lg">
                    {item.title}
                  </h4>
                  {item.skillCount ? (
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {item.skillCount} skills
                    </p>
                  ) : null}
                </div>
                <p className="col-start-2 text-sm leading-relaxed text-muted-foreground md:col-start-3">
                  {item.description}
                </p>
                <Download
                  className="hidden h-5 w-5 justify-self-end text-muted-foreground transition-colors group-hover:text-primary md:block"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* Phases */}
      <Section id="what-to-use-when" tone="slate" labelledBy="phases-heading">
        <SectionHeading
          id="phases-heading"
          eyebrow="What to use when"
          title="Four phases, and the tasks each one actually covers"
          lede="Same Double Diamond framing as the consulting process. Each phase breaks down into the concrete method areas the pack covers, plus the competency skills that pair with it."
        />
        <nav aria-label="Jump to a phase" className="-mt-6 mb-14 flex flex-wrap gap-2">
          {PHASES.map((phase) => {
            const accent = PHASE_ACCENT[phase.name];
            return (
              <a
                key={phase.name}
                href={`#${phaseAnchorId(phase.name)}`}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${accent.border} ${accent.bg} ${accent.text} hover:border-current`}
              >
                {phase.name}
              </a>
            );
          })}
        </nav>
        <div className="divide-y divide-border/60">
          {PHASES.map((phase, index) => (
            <PhaseBlock key={phase.name} phase={phase} index={index} />
          ))}
        </div>
      </Section>

      {/* Install */}
      <Section labelledBy="install-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-4">How to install</Eyebrow>
            <SectionTitle id="install-heading">
              Three steps, then forget about it
            </SectionTitle>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              The point of the user rule is that you stop choosing skills by
              hand. The agent routes itself.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ol className="divide-y divide-border/60 overflow-hidden rounded-xl border border-border/60 bg-background/40">
              {INSTALL_STEPS.map((step, index) => (
                <li key={step.title} className="flex gap-5 p-6 md:p-7">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-background text-xs font-semibold text-primary">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* Closing */}
      <Section tone="muted" compact labelledBy="resources-closing-heading">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <SectionTitle
              id="resources-closing-heading"
              className="text-2xl md:text-3xl"
            >
              These come out of project work, not a content calendar
            </SectionTitle>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              The packs change when the work changes. The methodology behind them
              and the writing that explains the reasoning both live on the site.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Button variant="outline" asChild>
              <Link href="/methodology">See the methodology</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/articles">Read the writing</Link>
            </Button>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
