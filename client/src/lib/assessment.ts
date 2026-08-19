export const DIMENSION_IDS = [
  "evidence",
  "definition",
  "capability",
  "delivery",
  "scale",
] as const;

export type DimensionId = (typeof DIMENSION_IDS)[number];

export function isDimensionId(value: unknown): value is DimensionId {
  return typeof value === "string" && (DIMENSION_IDS as readonly string[]).includes(value);
}

export const ANSWER_VALUES = [0, 1, 2, 3, 4] as const;
export type AnswerValue = (typeof ANSWER_VALUES)[number];

export function isAnswerValue(value: unknown): value is AnswerValue {
  return value === 0 || value === 1 || value === 2 || value === 3 || value === 4;
}

export type AssessmentQuestion = {
  id: string;
  prompt: string;
  hint: string;
  options: readonly [string, string, string, string, string];
};

export type AssessmentDimension = {
  id: DimensionId;
  name: string;
  question: string;
  questions: readonly AssessmentQuestion[];
};

export type MaturityLevel = {
  min: number;
  max: number;
  name: string;
  headline: string;
  body: string;
};

export type EngagementRecommendation = {
  name: string;
  timing: string;
  why: string;
  includes: readonly string[];
};

export type RiskFlag = {
  headline: string;
  body: string;
};

export function questionId(dimensionId: DimensionId, index: number): string {
  return `${dimensionId}-${String(index)}`;
}

export const DIMENSIONS: readonly AssessmentDimension[] = [
  {
    id: "evidence",
    name: "Customer evidence",
    question: "Do you know what your users actually do?",
    questions: [
      {
        id: questionId("evidence", 0),
        prompt: "When did someone on your team last speak directly with a user?",
        hint: "A real conversation, not a survey, an NPS score, or a sales call.",
        options: [
          "Cannot remember, or never",
          "More than six months ago",
          "Within the last few months",
          "Most months",
          "Every week or two, as routine",
        ],
      },
      {
        id: questionId("evidence", 1),
        prompt: "When a product decision is contested, what settles it?",
        hint: "Think about the last real disagreement, not the ideal process.",
        options: [
          "Whoever is most senior",
          "Whoever argues hardest",
          "A mix, depending on the week",
          "Usually data, sometimes opinion",
          "Evidence, and everyone expects to be asked for it",
        ],
      },
      {
        id: questionId("evidence", 2),
        prompt: "How well do you understand why users abandon your key flow?",
        hint: "Not where they drop off. Why.",
        options: [
          "We do not know where they drop off",
          "We know where, not why",
          "We have theories, untested",
          "We have tested some of them",
          "We know, and we have evidence",
        ],
      },
      {
        id: questionId("evidence", 3),
        prompt: "Who on your team has watched a user struggle with your product?",
        hint: "Watched, in a session or a recording. Not heard about it secondhand.",
        options: [
          "Nobody",
          "One person",
          "Designers and researchers only",
          "Design plus product",
          "Design, product, and engineering",
        ],
      },
    ],
  },
  {
    id: "definition",
    name: "Problem definition",
    question: "Do you know what problem you are solving?",
    questions: [
      {
        id: questionId("definition", 0),
        prompt: "Where does your roadmap mostly come from?",
        hint: "Be honest about the largest single source.",
        options: [
          "Executive requests",
          "Sales and customer escalations",
          "Competitor features",
          "A mix, with some research",
          "Prioritized customer problems with evidence",
        ],
      },
      {
        id: questionId("definition", 1),
        prompt: "Before build starts, is there a written problem statement everyone agrees on?",
        hint: "A problem statement, not a feature description.",
        options: [
          "No",
          "Sometimes, informally",
          "Usually, but it is really a solution description",
          "Yes, usually",
          "Yes, always, with success metrics attached",
        ],
      },
      {
        id: questionId("definition", 2),
        prompt: "Do you define how you will know a feature worked before you build it?",
        hint: "A target, agreed in advance.",
        options: [
          "No",
          "We look at metrics afterward",
          "Sometimes, for big things",
          "Usually",
          "Always, and we go back and check",
        ],
      },
      {
        id: questionId("definition", 3),
        prompt: "In the last year, how often did you decide not to build something after investigating it?",
        hint: "A healthy process kills things. A process that never kills anything is not evaluating.",
        options: [
          "Never",
          "Once",
          "Two or three times",
          "Several times",
          "Routinely, and it is treated as a good outcome",
        ],
      },
    ],
  },
  {
    id: "capability",
    name: "Design capability",
    question: "Do you have the capacity and seniority you need?",
    questions: [
      {
        id: questionId("capability", 0),
        prompt: "How does design capacity compare to your roadmap?",
        hint: "Roughly.",
        options: [
          "No dedicated design at all",
          "Far short; design is a bottleneck on everything",
          "Short; we triage constantly",
          "Adequate most of the time",
          "Sufficient, including time to think upstream",
        ],
      },
      {
        id: questionId("capability", 1),
        prompt: "Is there senior design leadership setting direction and quality?",
        hint: "Someone accountable for the standard, not just the output.",
        options: [
          "No",
          "A senior designer doing it informally, without authority",
          "A manager focused on delivery, not craft",
          "Yes, part of the role",
          "Yes, dedicated and empowered",
        ],
      },
      {
        id: questionId("capability", 2),
        prompt: "How early is design involved in a new initiative?",
        hint: "Think about the last one.",
        options: [
          "After requirements are written and committed",
          "When it is time to make screens",
          "During planning, sometimes",
          "Usually from the start",
          "From problem definition, always",
        ],
      },
      {
        id: questionId("capability", 3),
        prompt: "Can your designers do research, or only production?",
        hint: "Both are legitimate. The question is whether you have the first.",
        options: [
          "Production only, and nobody does research",
          "Production only, research is outsourced ad hoc",
          "Some research capability, no time for it",
          "Yes, and it happens",
          "Yes, and it is planned and resourced",
        ],
      },
    ],
  },
  {
    id: "delivery",
    name: "Delivery and handoff",
    question: "Does what ships match what was designed?",
    questions: [
      {
        id: questionId("delivery", 0),
        prompt: "How often does the shipped product differ meaningfully from the design?",
        hint: "Meaningfully: states missing, interactions changed, edge cases invented.",
        options: [
          "Almost always",
          "Frequently",
          "Sometimes, on complex work",
          "Rarely",
          "Almost never; discrepancies are caught and fixed",
        ],
      },
      {
        id: questionId("delivery", 1),
        prompt: "Are all states specified before build: empty, loading, error, and edge cases?",
        hint: "The states that are not in the happy path.",
        options: [
          "No, engineering invents them",
          "Rarely",
          "Sometimes, on important flows",
          "Usually",
          "Always, and they are reviewed",
        ],
      },
      {
        id: questionId("delivery", 2),
        prompt: "Is design involved during the build, or does it hand off and move on?",
        hint: "",
        options: [
          "Hands off entirely",
          "Available if asked, rarely asked",
          "Answers questions ad hoc",
          "Involved, with design QA",
          "Embedded through release, with QA before ship",
        ],
      },
      {
        id: questionId("delivery", 3),
        prompt: "How much rework is caused by unclear or incomplete design?",
        hint: "Rework, not iteration. Iteration is healthy.",
        options: [
          "A great deal, and it is a known problem",
          "A lot",
          "A moderate amount",
          "Some",
          "Very little",
        ],
      },
    ],
  },
  {
    id: "scale",
    name: "Consistency and scale",
    question: "Does your design hold together as you grow?",
    questions: [
      {
        id: questionId("scale", 0),
        prompt: "Do you have a design system, and do teams actually use it?",
        hint: "Using it, not having it.",
        options: [
          "No system",
          "A file of components nobody maintains",
          "A system exists; teams work around it",
          "A system in use, with gaps",
          "A maintained system with real adoption",
        ],
      },
      {
        id: questionId("scale", 1),
        prompt: "How consistent does your product feel across areas built by different teams?",
        hint: "Ask someone outside the company if you are unsure.",
        options: [
          "It looks like several different products",
          "Noticeably inconsistent",
          "Inconsistent in places",
          "Mostly consistent",
          "Consistent; users would not notice a seam",
        ],
      },
      {
        id: questionId("scale", 2),
        prompt: "How is accessibility handled?",
        hint: "",
        options: [
          "Not addressed",
          "Addressed if someone complains",
          "Audited late, findings often deferred",
          "Reviewed during design",
          "Built into components; a design constraint from the start",
        ],
      },
      {
        id: questionId("scale", 3),
        prompt: "When a new team or designer joins, what do they start from?",
        hint: "",
        options: [
          "A blank file and tribal knowledge",
          "Old files, no documentation",
          "Some documentation, out of date",
          "Documented patterns",
          "A maintained system with onboarding documentation",
        ],
      },
    ],
  },
];

export const MATURITY_LEVELS: readonly MaturityLevel[] = [
  {
    min: 0,
    max: 24,
    name: "Ad hoc",
    headline:
      "Decisions are being made without evidence, and the cost is showing up somewhere you are not measuring.",
    body: "At this level the main risk is not bad design, it is expensive uncertainty. Work gets built on assumptions that nobody has tested, and the bill arrives later as rework, as a feature nobody adopts, or as a metric that will not move. The good news is that the first improvement is cheap and fast.",
  },
  {
    min: 25,
    max: 40,
    name: "Emerging",
    headline: "You have some of the pieces. They are not connected into a process yet.",
    body: "Teams at this level usually have capable people doing good work in isolation, without the structure that makes it repeatable. Research happens sometimes. Problem definition happens sometimes. The variance between your best project and your worst one is large, and it is not really about talent.",
  },
  {
    min: 41,
    max: 56,
    name: "Established",
    headline: "The process works. The gaps are specific rather than systemic.",
    body: "You have a functioning practice, and the remaining risk is concentrated rather than spread everywhere. That is a much better problem to have, because it can be addressed directly rather than requiring a cultural change. Look at your lowest-scoring dimension below; that is almost certainly where your next expensive mistake comes from.",
  },
  {
    min: 57,
    max: 68,
    name: "Integrated",
    headline: "Design is genuinely part of how you decide what to build.",
    body: "At this level you are past the question of whether design is involved and into the question of how well. Improvements here are about depth rather than presence: more rigorous evidence, tighter delivery, better scale. The risk is complacency, and the failure mode is a slow drift back as the team grows.",
  },
  {
    min: 69,
    max: 80,
    name: "Optimized",
    headline: "You are running a mature practice. You probably do not need a consultant.",
    body: "Teams that score here typically have specific, hard problems rather than general ones: a particular product bet, a scaling challenge, or a capacity gap during a peak. If that is you, the useful engagement is narrow and defined, not a general improvement program.",
  },
];

export const RECOMMENDATIONS: Record<DimensionId, EngagementRecommendation> = {
  evidence: {
    name: "UX Diagnostic",
    timing: "2 to 3 weeks. Fixed fee, scoped before it starts.",
    why: "Your weakest dimension is customer evidence, which means the fastest useful thing is not a research programme. It is finding out what is actually happening in your product, from analytics, support tickets, expert review, and your own team, before committing to a research budget.",
    includes: [
      "Expert review of the current experience against heuristics and accessibility standards",
      "Analytics and funnel review to locate where the experience actually breaks",
      "Support ticket and session review where available",
      "Stakeholder interviews across product, design, and engineering",
      "A prioritized list of issues, ranked by business impact and effort, with the evidence behind each",
    ],
  },
  definition: {
    name: "Discovery Sprint",
    timing: "2 to 4 weeks. Fixed fee, scoped before it starts.",
    why: "Your weakest dimension is problem definition. You are building things without an agreed statement of the problem they solve, which is the most expensive failure mode on this list because the cost lands in engineering rather than in design.",
    includes: [
      "Research plan and participant recruiting",
      "Five to eight customer interviews",
      "Stakeholder interviews to surface internal constraints early",
      "Synthesis into prioritized problem themes",
      "Journey mapping and opportunity framing",
      "A go, no-go, or pivot recommendation",
    ],
  },
  capability: {
    name: "Fractional UX Leadership",
    timing: "Monthly, 3-month minimum. Scoped before it starts.",
    why: "Your weakest dimension is capability and capacity. This is rarely fixed by a project, because the project ends and the gap returns. It is fixed by senior direction applied continuously, which is what fractional leadership is for.",
    includes: [
      "Roadmap input from a design and customer perspective",
      "Research planning and prioritization across the team",
      "Design direction and critique on live work",
      "Coaching and growth planning for your designers",
      "Hiring: role definition, portfolio review, interview design",
      "Stakeholder alignment and executive representation for design",
    ],
  },
  delivery: {
    name: "Concept Validation, with implementation support",
    timing: "3 to 6 weeks. Fixed fee, scoped before it starts.",
    why: "Your weakest dimension is delivery. Design intent is being lost between the file and production, which means you are paying for design twice and getting it once. The fix is specification discipline plus staying involved through the build.",
    includes: [
      "Concept ideation and end-to-end flows",
      "Interactive prototype at the fidelity the decision requires",
      "Usability testing with five to eight target users",
      "High-fidelity design covering all states and edge cases",
      "Engineering feasibility review before anything is recommended",
      "Design QA during build, so discrepancies are caught before release",
    ],
  },
  scale: {
    name: "Design System Acceleration",
    timing: "4 to 8 weeks. Fixed fee, scoped before it starts.",
    why: "Your weakest dimension is consistency and scale. Teams are rebuilding the same things and diverging as they do it. Worth knowing: this is usually a governance problem wearing a component library costume, and building more components without fixing ownership does not solve it.",
    includes: [
      "Audit of existing patterns to find where teams already agree",
      "Component architecture and design foundations",
      "Accessibility standards encoded into the components themselves",
      "Documentation written for the engineer implementing it",
      "Governance model: ownership, contribution path, exception process",
      "An adoption plan, because a system nobody uses is a liability",
    ],
  },
};

export const RISK_FLAGS: Record<DimensionId, RiskFlag> = {
  evidence: {
    headline: "You are deciding what to build without asking the people who will use it.",
    body: "Every product decision made this way is a bet placed with engineering time. Some of them will be right, and you will not know which until after you have paid for all of them.",
  },
  definition: {
    headline: "Work is starting before the problem is agreed.",
    body: "The most expensive rework is not caused by bad design. It is caused by building the correct solution to a problem nobody had confirmed, and discovering it after release.",
  },
  capability: {
    headline: "Your design capacity is a constraint on everything downstream.",
    body: "When design is the bottleneck, the organization adapts by routing around it. Decisions get made without design input, quality becomes uneven, and nobody has time to look upstream at whether the work was worth doing.",
  },
  delivery: {
    headline: "What ships is not what was designed.",
    body: "This is a silent tax. The research was done, the design was validated, and then something else shipped. You paid for the confidence and did not get to keep it.",
  },
  scale: {
    headline: "Your product is diverging faster than you are aligning it.",
    body: "Inconsistency compounds. Every screen built without a shared pattern is a screen someone will have to reconcile later, and the reconciliation cost grows faster than the team does.",
  },
};

export const TOTAL_QUESTIONS = DIMENSIONS.reduce(
  (count, dimension) => count + dimension.questions.length,
  0,
);

export const DIMENSION_MAX = 16;
export const TOTAL_MAX = 80;

export type AnswerMap = Partial<Record<string, AnswerValue>>;

export type DimensionScore = {
  id: DimensionId;
  name: string;
  score: number;
};

export type AssessmentResult = {
  total: number;
  level: MaturityLevel;
  ranked: readonly DimensionScore[];
  weakest: DimensionScore;
  recommendation: EngagementRecommendation;
  topRisks: readonly {
    dimension: DimensionScore;
    flag: RiskFlag;
  }[];
};

export function firstUnansweredId(answers: AnswerMap): string | null {
  for (const dimension of DIMENSIONS) {
    for (const question of dimension.questions) {
      if (!isAnswerValue(answers[question.id])) {
        return question.id;
      }
    }
  }
  return null;
}

export function answeredCount(answers: AnswerMap): number {
  let count = 0;
  for (const dimension of DIMENSIONS) {
    for (const question of dimension.questions) {
      if (isAnswerValue(answers[question.id])) {
        count += 1;
      }
    }
  }
  return count;
}

function levelForTotal(total: number): MaturityLevel {
  const match = MATURITY_LEVELS.find((level) => total >= level.min && total <= level.max);
  const fallback = MATURITY_LEVELS[0];
  if (!match || !fallback) {
    return {
      min: 0,
      max: TOTAL_MAX,
      name: "Ad hoc",
      headline: "Complete the assessment to see your maturity level.",
      body: "All twenty questions are required before a score can be calculated.",
    };
  }
  return match;
}

export function scoreBarTone(score: number, max: number): "risk" | "warn" | "ok" {
  const pct = max === 0 ? 0 : (score / max) * 100;
  if (pct < 40) {
    return "risk";
  }
  if (pct < 70) {
    return "warn";
  }
  return "ok";
}

export function scoreAssessment(answers: AnswerMap): AssessmentResult | null {
  if (firstUnansweredId(answers) !== null) {
    return null;
  }

  const ranked: DimensionScore[] = DIMENSIONS.map((dimension) => {
    const score = dimension.questions.reduce((sum, question) => {
      const value = answers[question.id];
      return isAnswerValue(value) ? sum + value : sum;
    }, 0);
    return { id: dimension.id, name: dimension.name, score };
  }).sort((a, b) => {
    if (a.score !== b.score) {
      return a.score - b.score;
    }
    return DIMENSION_IDS.indexOf(a.id) - DIMENSION_IDS.indexOf(b.id);
  });

  const weakest = ranked[0];
  if (!weakest) {
    return null;
  }

  const total = ranked.reduce((sum, dimension) => sum + dimension.score, 0);

  return {
    total,
    level: levelForTotal(total),
    ranked,
    weakest,
    recommendation: RECOMMENDATIONS[weakest.id],
    topRisks: ranked.slice(0, 3).map((dimension) => ({
      dimension,
      flag: RISK_FLAGS[dimension.id],
    })),
  };
}
