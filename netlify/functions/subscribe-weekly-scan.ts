const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_API_BASE = "https://api.resend.com";

interface NetlifyFunctionEvent {
  httpMethod: string;
  body: string | null;
}

interface NetlifyFunctionResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: string;
}

type NetlifyFunctionHandler = (
  event: NetlifyFunctionEvent,
) => Promise<NetlifyFunctionResponse>;

function jsonResponse(
  statusCode: number,
  body: Record<string, unknown>,
): NetlifyFunctionResponse {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

interface ParsedBody {
  email: string;
  firstName?: string;
}

function parseBody(event: NetlifyFunctionEvent): ParsedBody | null {
  if (!event.body) return null;

  try {
    const parsed = JSON.parse(event.body) as unknown;
    if (
      typeof parsed !== "object" ||
      parsed === null ||
      !("email" in parsed) ||
      typeof (parsed as { email: unknown }).email !== "string"
    ) {
      return null;
    }

    const email = (parsed as { email: string }).email.trim();
    const rawFirstName =
      "firstName" in parsed &&
      typeof (parsed as { firstName: unknown }).firstName === "string"
        ? (parsed as { firstName: string }).firstName.trim()
        : undefined;

    return {
      email,
      firstName: rawFirstName || undefined,
    };
  } catch {
    return null;
  }
}

function isAlreadyExistsError(status: number, body: unknown): boolean {
  if (status === 409) return true;
  if (
    status === 422 &&
    typeof body === "object" &&
    body !== null &&
    "message" in body &&
    typeof (body as { message: unknown }).message === "string"
  ) {
    const msg = (body as { message: string }).message.toLowerCase();
    return msg.includes("already exists") || msg.includes("duplicate");
  }
  return false;
}

export const handler: NetlifyFunctionHandler = async (event) => {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const segmentId =
    process.env.RESEND_WEEKLY_SCAN_SEGMENT_ID ??
    "1c45d141-2cfa-40bc-b78d-e3c838ef5164";
  const topicId =
    process.env.RESEND_WEEKLY_SCAN_TOPIC_ID ??
    "5228eb84-30e6-4af9-a6f1-808387c8e58c";
  const fromAddress =
    process.env.RESEND_FROM ?? "Ryan Winzenburg <hello@winzenburg.com>";

  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable");
    return jsonResponse(500, { error: "Subscription is not configured." });
  }

  const parsed = parseBody(event);
  if (!parsed || !EMAIL_REGEX.test(parsed.email)) {
    return jsonResponse(400, { error: "Please enter a valid email address." });
  }

  const { email, firstName } = parsed;

  // Create (or update) the contact, assigning the segment and topic.
  const contactPayload: Record<string, unknown> = {
    email,
    unsubscribed: false,
    segments: [{ id: segmentId }],
    topics: [{ id: topicId, subscription: "opt_in" }],
  };
  if (firstName) {
    contactPayload.first_name = firstName;
  }

  const contactRes = await fetch(`${RESEND_API_BASE}/contacts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactPayload),
  });

  if (!contactRes.ok) {
    const errBody: unknown = await contactRes.json().catch(() => ({}));

    if (isAlreadyExistsError(contactRes.status, errBody)) {
      // Contact already exists — treat as success (idempotent).
    } else {
      console.error(
        "Resend contact create error:",
        contactRes.status,
        errBody,
      );
      return jsonResponse(502, {
        error: "Something went wrong. Please try again.",
      });
    }
  }

  // Attempt to send the welcome email via the published template.
  // Tries the renamed alias first; falls back to the legacy alias in case
  // the Resend template rename hasn't fully propagated yet.
  // If the send fails for any reason, we log and return success — the contact
  // is already subscribed.
  const welcomeTemplates = [
    "weekly-ai-founder-pulse-welcome",
    "weekly-ai-native-scan-welcome",
  ];
  for (const template of welcomeTemplates) {
    try {
      const welcomeRes = await fetch(`${RESEND_API_BASE}/emails`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [email],
          template,
        }),
      });

      if (welcomeRes.ok) {
        break;
      }

      const welcomeErr: unknown = await welcomeRes.json().catch(() => ({}));
      if (template === welcomeTemplates[welcomeTemplates.length - 1]) {
        console.warn(
          "Welcome email not sent (template may still be draft):",
          welcomeRes.status,
          welcomeErr,
        );
      } else {
        console.warn(
          `Welcome template "${template}" failed (${welcomeRes.status}), trying fallback.`,
        );
      }
    } catch (err) {
      console.warn(`Welcome email request failed for template "${template}":`, err);
    }
  }

  return jsonResponse(200, { success: true });
};
