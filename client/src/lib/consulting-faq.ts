export type ConsultingFaqItem = {
  question: string;
  answer: string;
  relatedHref?: string;
  relatedLabel?: string;
};

export type ConsultingFaqGroup = {
  heading: string;
  items: readonly ConsultingFaqItem[];
};

export function isConsultingFaqItem(value: unknown): value is ConsultingFaqItem {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const record = value as {
    question?: unknown;
    answer?: unknown;
    relatedHref?: unknown;
    relatedLabel?: unknown;
  };
  const relatedHrefOk =
    record.relatedHref === undefined || typeof record.relatedHref === "string";
  const relatedLabelOk =
    record.relatedLabel === undefined || typeof record.relatedLabel === "string";
  return (
    typeof record.question === "string" &&
    record.question.trim().length > 0 &&
    typeof record.answer === "string" &&
    record.answer.trim().length > 0 &&
    relatedHrefOk &&
    relatedLabelOk
  );
}

/**
 * Public consulting FAQ from the sales toolkit.
 * Keep internal rate cards, proposal math, and SOW language out of this list.
 */
export const CONSULTING_FAQ_GROUPS: readonly ConsultingFaqGroup[] = [
  {
    heading: "Process",
    items: [
      {
        question: "How do we start?",
        answer:
          "A 30-minute call. Bring the problem, not a brief. I will tell you what I would do first, whether or not you hire me. If there is a fit, you get a scoped proposal with a fixed price and dates within three business days.",
      },
      {
        question: "Do you work alone?",
        answer:
          "Yes. You work directly with me on every engagement. No account manager, no ramp, and no junior bench learning on your budget. The person you meet on the first call is the person doing the work.",
      },
      {
        question: "What if we do not know which service we need?",
        answer:
          "That is normal, and it is what the first call is for. If you would rather do something before talking to anyone, the product risk and UX maturity assessment takes about six minutes and tells you where your risk sits.",
        relatedHref: "/assessment",
        relatedLabel: "Take the six-minute assessment",
      },
      {
        question: "How involved does our team need to be?",
        answer:
          "Roughly four hours a week, plus one standing working session. The largest single predictor of whether an engagement goes well is whether you have one named decision-maker who can say yes, rather than a committee that reviews.",
      },
      {
        question: "What if the research says we should not build it?",
        answer:
          "You get that in writing, with the evidence. It is a legitimate outcome and usually the cheapest one available. An engagement that prevents an unnecessary build has paid for itself several times over.",
      },
      {
        question: "Do you work on site?",
        answer:
          "Remotely by default, across US time zones. On site when a workshop or a research round genuinely warrants the travel, billed at cost with travel time at half rate.",
      },
    ],
  },
  {
    heading: "Timing",
    items: [
      {
        question: "How quickly can you start?",
        answer:
          "Entry engagements can usually begin within two weeks. Larger engagements, three to four. If timing is tight, say so on the first call rather than at proposal.",
      },
      {
        question: "How long do engagements take?",
        answer:
          "Two to three weeks for a diagnostic, two to four for a discovery sprint, three to six for concept validation, eight to sixteen for end-to-end product work. Fractional leadership is ongoing with a three-month minimum.",
      },
      {
        question: "What happens if our side slips?",
        answer:
          "Some slack is built in. Delays beyond ten business days may shift the schedule, and past that may trigger a re-quote. Everything about this is written into the proposal in advance, so nothing about it is a surprise.",
      },
    ],
  },
  {
    heading: "Research",
    items: [
      {
        question: "Who recruits the research participants?",
        answer:
          "Either of us. Recruiting through your existing customers is faster, cheaper, and produces better participants, so I recommend it where possible. Where you do not have a usable list, I recruit through a panel and that cost is quoted separately.",
      },
      {
        question: "How many participants do we need?",
        answer:
          "Five gives you direction. Eight gives you a decision. Fourteen across segments gives you something defensible to a board. Which one you need depends on what the decision has to survive, and that is a conversation worth having before you pay for the larger number.",
      },
      {
        question: "How do you handle participant privacy?",
        answer:
          "Written informed consent before every session, in plain language. Consent to be recorded and consent to any published use are asked separately, and participation is never conditioned on the second. Identity is stored separately from responses, findings never identify individuals, and recordings are deleted on a date agreed in advance, with written confirmation.",
      },
      {
        question: "Can we watch the sessions?",
        answer:
          "Yes, and you should. One observer per round is built into every engagement. Watching a user struggle with your product changes internal conversations in a way no readout can.",
      },
    ],
  },
  {
    heading: "Ownership and payment",
    items: [
      {
        question: "Who owns the work?",
        answer:
          "You do. All deliverables transfer to you on final payment, including working files rather than flattened output. I keep the methods, templates, research instruments, and internal tooling I walked in with. You get a perpetual license to use them as embedded in your deliverables.",
      },
      {
        question: "Can you show our work in your portfolio?",
        answer:
          "That is agreed at contract, with confidentiality protected. You control timing, you can require anonymization, and you can ask for anything specific to be removed. If your situation means the answer is no, anonymized use usually works for both of us.",
      },
      {
        question: "Do we have to give you a testimonial?",
        answer:
          "No. Nothing in any agreement requires you to say anything about the work.",
      },
      {
        question: "How does pricing work?",
        answer:
          "Fixed fee for defined work, monthly for ongoing work, hourly only for approved changes in scope. The number in the proposal is the number on the invoice, and it does not vary with how long the work takes me. Engagements start at $8,000 for a diagnostic. Most product engagements land between $20,000 and $150,000 depending on scope. Fractional leadership is monthly.",
      },
      {
        question: "Do you work hourly?",
        answer:
          "Not for project work. I price a defined outcome as a fixed fee. Hourly billing is only for approved changes outside that scope, written and signed before the extra work starts.",
      },
      {
        question: "How do contracts work?",
        answer:
          "A scoped proposal with a fixed fee comes first. Smaller first engagements usually combine the proposal and the statement of work. Larger work, or anything going through legal or procurement, uses a master agreement once, then a short statement of work per project. Change orders are written and signed before extra work starts. Deliverables transfer on final payment.",
      },
      {
        question: "What are the payment terms?",
        answer:
          "50% on signature, 50% on delivery. Net 15. Monthly engagements billed monthly in advance. Scope changes go through a written change order, priced and approved before any work begins. Participant incentives, recruiting, and research tooling are billed at cost with no markup, estimated in the proposal, and anything above $500 is pre-approved in writing.",
      },
    ],
  },
] as const;

export function consultingFaqItems(): ConsultingFaqItem[] {
  return CONSULTING_FAQ_GROUPS.flatMap((group) => [...group.items]).filter(
    isConsultingFaqItem,
  );
}

export const WORKING_TOGETHER = [
  {
    title: "You work with me",
    body: "The person on the first call is the person doing the work. No account manager and no junior bench.",
  },
  {
    title: "About four hours a week",
    body: "Plus one standing working session. That is usually enough if decisions can actually get made.",
  },
  {
    title: "One named decision-maker",
    body: "A committee that reviews is the most common way these engagements stall. Someone has to be able to say yes.",
  },
  {
    title: "Fixed fee, in writing",
    body: "50% on signature, 50% on delivery. Net 15. Scope changes get a written change order before any extra work starts.",
  },
] as const;

export function consultingFaqJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: consultingFaqItems().map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
