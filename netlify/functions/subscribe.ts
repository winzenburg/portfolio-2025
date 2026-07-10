import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface NetlifyFunctionEvent {
  httpMethod: string;
  body: string | null;
}

interface NetlifyFunctionResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: string;
}

type NetlifyFunctionHandler = (event: NetlifyFunctionEvent) => Promise<NetlifyFunctionResponse>;

function jsonResponse(statusCode: number, body: Record<string, unknown>): NetlifyFunctionResponse {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

function parseEmail(event: NetlifyFunctionEvent): string | null {
  if (!event.body) return null;

  try {
    const parsed = JSON.parse(event.body) as unknown;
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "email" in parsed &&
      typeof (parsed as { email: unknown }).email === "string"
    ) {
      return (parsed as { email: string }).email.trim();
    }
  } catch {
    // fall through
  }

  return null;
}

export const handler: NetlifyFunctionHandler = async (event) => {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.error("Missing RESEND_API_KEY or RESEND_AUDIENCE_ID environment variable");
    return jsonResponse(500, { error: "Newsletter signup is not configured." });
  }

  const email = parseEmail(event);
  if (!email || !EMAIL_REGEX.test(email)) {
    return jsonResponse(400, { error: "Please enter a valid email address." });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.contacts.create({
    email,
    audienceId,
    unsubscribed: false,
  });

  if (error) {
    console.error("Resend contact create error:", error);
    return jsonResponse(502, { error: "Something went wrong. Please try again." });
  }

  return jsonResponse(200, { success: true });
};
