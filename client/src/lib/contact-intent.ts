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
    return "We're a growth-stage company (Series B through D). Here's what we're about to fund, and the part that's still a guess:\n\n";
  }
  if (sheet === "enterprise") {
    return "We're a larger org with procurement and multiple stakeholders. Here's what we're about to fund, and the part that's still a guess:\n\n";
  }
  return "Here's what we're about to fund, and the part that's still a guess:\n\n";
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
  if (intent === "consulting") {
    return {
      title: "A 30-minute call about the bet you're funding",
      description:
        "If you're about to put budget behind a product direction, write me what it is and which part is still a guess. I reply within a day. If there's a fit, you get a fixed-fee proposal within three business days.",
      formHeading: "About the bet",
      messageLabel: "What are you about to fund, and what is still unproven?",
      messagePlaceholder:
        "The product direction, the budget you are about to commit, and the part that is still a guess.",
      submitLabel: "Send message",
      expectItems: [
        "I reply within a day",
        "A 30-minute call. No deck.",
        "If there is a fit, a fixed-fee proposal within three business days",
      ],
    };
  }

  if (intent === "role") {
    return {
      title: "Let's talk about a leadership role",
      description:
        "Some conversations are about a full-time seat, not a sprint. Head of Design Operations, VP or Director of Design, Principal Design Technologist. Tell me what you're hiring for and I'll tell you if I'm a fit.",
      formHeading: "About the role",
      messageLabel: "What's the role, and what does the team need to change?",
      messagePlaceholder:
        "Role title, team size, where design sits, what's actually broken, timeline if you have one.",
      submitLabel: "Send role notes",
      expectItems: [
        "I reply within a day",
        "If it's a fit, a 30-45 minute conversation",
        "I'll ask about org design as much as the job description",
        "No pitch deck. An honest yes or no on fit.",
      ],
    };
  }

  return contactPathCopy("consulting");
}
