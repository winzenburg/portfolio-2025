import { useId, useState, type FormEvent } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

type SubscribeStatus = "idle" | "loading" | "success" | "error";

type SubscribeResponse = {
  success?: boolean;
  error?: string;
};

const FIELD_CLASS =
  "w-full rounded-lg border border-border bg-muted/60 px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-colors focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:opacity-50";

function isSubscribeResponse(value: unknown): value is SubscribeResponse {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const record = value as { success?: unknown; error?: unknown };
  const successOk = record.success === undefined || typeof record.success === "boolean";
  const errorOk = record.error === undefined || typeof record.error === "string";
  return successOk && errorOk;
}

/**
 * Same form and Netlify function as /subscribe.
 * Posts to /api/subscribe-weekly-scan, which adds the contact to the
 * Weekly AI Founder Pulse Resend segment.
 */
export function WeeklyPulseSignupForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<SubscribeStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const firstNameId = useId();
  const emailId = useId();
  const errorId = useId();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/subscribe-weekly-scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          ...(firstName.trim() ? { firstName: firstName.trim() } : {}),
        }),
      });

      let data: unknown;
      try {
        data = await response.json();
      } catch {
        throw new Error("Something went wrong. Please try again.");
      }

      if (!isSubscribeResponse(data) || !response.ok || !data.success) {
        const message =
          isSubscribeResponse(data) && data.error
            ? data.error
            : "Something went wrong. Please try again.";
        throw new Error(message);
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <>
      <div aria-live="polite">
        {status === "success" ? (
          <div className="mt-6 border-l-2 border-verm-text p-6 text-ink">
            <h3 className="text-lg font-bold text-ink">You&apos;re on the list.</h3>
            <p className="mt-2 leading-relaxed text-ink">
              The next pulse drops this week. Check your inbox, including spam, in case it
              lands there the first time.
            </p>
            <Link
              href="/articles"
              className="mt-5 inline-flex text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Read the articles archive
            </Link>
          </div>
        ) : null}
      </div>

      {status === "success" ? null : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor={firstNameId}
              className="mb-2 block text-sm font-medium text-muted-foreground"
            >
              First name <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <input
              id={firstNameId}
              name="firstName"
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              placeholder="Alex"
              autoComplete="given-name"
              disabled={status === "loading"}
              className={FIELD_CLASS}
            />
          </div>

          <div>
            <label
              htmlFor={emailId}
              className="mb-2 block text-sm font-medium text-muted-foreground"
            >
              Email address
            </label>
            <input
              id={emailId}
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@company.com"
              required
              autoComplete="email"
              disabled={status === "loading"}
              aria-invalid={status === "error" || undefined}
              aria-describedby={status === "error" ? errorId : undefined}
              className={FIELD_CLASS}
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
            {status === "loading" ? "Subscribing…" : "Subscribe"}
          </Button>

          {status === "error" ? (
            <p
              id={errorId}
              role="alert"
              className="border-l-2 border-verm-text px-4 py-3 text-sm text-ink"
            >
              {errorMessage}
            </p>
          ) : null}

          <p className="pt-2 text-sm leading-relaxed text-muted-foreground">
            Unsubscribe from any email, anytime. Resend handles it and there are no dark
            patterns. No sharing your address.
          </p>
        </form>
      )}
    </>
  );
}

export default function WeeklyPulseSignup() {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="border border-ink/15 bg-studio-card p-8 text-ink md:p-12"
    >
      <div className="mb-2 text-center">
        <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.14em] text-verm-text">
          Newsletter
        </p>
        <h2 id={headingId} className="mb-4 text-2xl font-bold text-ink md:text-3xl">
          Weekly AI Founder Pulse
        </h2>
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-ink-muted">
          Once a week, one place where AI is changing how design and product teams work, with
          the detail from my own projects.
        </p>
      </div>
      <div className="mx-auto max-w-xl text-left">
        <WeeklyPulseSignupForm />
      </div>
    </section>
  );
}
