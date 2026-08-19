export const CONTACT_INTENTS = ["role", "consulting"] as const;
export type ContactIntent = (typeof CONTACT_INTENTS)[number];

export const RATE_SHEETS = ["startup", "enterprise"] as const;
export type RateSheet = (typeof RATE_SHEETS)[number];

export function isContactIntent(value: unknown): value is ContactIntent {
  return value === "role" || value === "consulting";
}

export function isRateSheet(value: unknown): value is RateSheet {
  return value === "startup" || value === "enterprise";
}

export type ContactSearchState = {
  intent: ContactIntent | null;
  sheet: RateSheet | null;
  playbookId: string | null;
};

export function parseContactSearch(search: string): ContactSearchState {
  const params = new URLSearchParams(search);
  const intentRaw = params.get("intent");
  const sheetRaw = params.get("sheet");
  const playbookId = params.get("playbook");

  return {
    intent: isContactIntent(intentRaw) ? intentRaw : null,
    sheet: isRateSheet(sheetRaw) ? sheetRaw : null,
    playbookId: playbookId !== null && playbookId.length > 0 ? playbookId : null,
  };
}

export function contactHref(input: {
  intent?: ContactIntent | null;
  sheet?: RateSheet | null;
  playbook?: string | null;
}): string {
  const params = new URLSearchParams();
  if (input.intent) {
    params.set("intent", input.intent);
  }
  if (input.intent === "consulting" && input.sheet) {
    params.set("sheet", input.sheet);
  }
  if (input.playbook) {
    params.set("playbook", input.playbook);
  }
  const query = params.toString();
  return query.length > 0 ? `/contact?${query}` : "/contact";
}

export function consultingPrefill(sheet: RateSheet | null): string {
  if (sheet === "startup") {
    return "We're a growth-stage company (Series B through D). I want to talk about scoped help, not a full-time hire. Here's the situation:\n\n";
  }
  if (sheet === "enterprise") {
    return "We're a larger org with procurement and multiple stakeholders. I want to talk about scoped help, not a full-time hire. Here's the situation:\n\n";
  }
  return "I want to talk about a product problem, not a full-time hire. Here's the situation:\n\n";
}

export type ContactPathCopy = {
  title: string;
  description: string;
  formHeading: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  expectItems: readonly string[];
};

export function contactPathCopy(intent: ContactIntent | null): ContactPathCopy {
  if (intent === "role") {
    return {
      title: "Let's talk about a leadership role",
      description:
        "Head of Design Operations, VP or Director of Design, Principal Design Technologist. Tell me what you're hiring for and I'll tell you if I'm a fit.",
      formHeading: "About the role",
      messageLabel: "What's the role, and what does the team need to change?",
      messagePlaceholder:
        "Role title, team size, where design sits, what's actually broken, timeline if you have one.",
      submitLabel: "Send role notes",
      expectItems: [
        "I reply within a day",
        "If it's a fit, a 30-45 minute conversation",
        "I'll ask about org design, not just the job description",
        "No pitch deck. An honest yes or no on fit.",
      ],
    };
  }

  if (intent === "consulting") {
    return {
      title: "Book a 30-minute consultation",
      description:
        "Tell me what you are trying to ship and what is still uncertain. I will tell you what I would do first, whether or not we work together. If there is a fit, you will have a scoped proposal within three business days.",
      formHeading: "About the work",
      messageLabel: "What are you trying to ship, and what makes it uncertain?",
      messagePlaceholder:
        "The product or feature, who owns it, the decision you need to make, and the timeline.",
      submitLabel: "Request a consultation",
      expectItems: [
        "I reply within a day",
        "A 30-minute call. No deck.",
        "If there is a fit, a scoped proposal within three business days",
        "If a hire would serve you better, I'll say that.",
      ],
    };
  }

  return {
    title: "How should we start?",
    description:
      "Most people who write are hiring. Some need scoped help because a hire isn't the move yet. Those are different conversations.",
    formHeading: "Start a conversation",
    messageLabel: "What do you want to talk about?",
    messagePlaceholder: "The role, the problem, or both.",
    submitLabel: "Send message",
    expectItems: [
      "I reply within a day",
      "Conversations are 30-45 minutes",
      "I'll tell you if a role or scoped work is the better fit",
    ],
  };
}
