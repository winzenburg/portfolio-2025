import { useId, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { trackNewsletterSignup } from "@/lib/analytics";

const NEWSLETTER_ENABLED = true;

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const emailId = useId();

  // Return nothing when disabled
  if (!NEWSLETTER_ENABLED) {
    return null;
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data: { success?: boolean; error?: string } = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubscribeStatus("success");
      trackNewsletterSignup();
      setEmail("");
    } catch (error) {
      setSubscribeStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div className="rounded-3xl border-[3px] border-ink bg-cream p-8 text-ink md:p-12">
      <div className="mb-8 text-center">
        <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.14em] text-verm-text">
          Weekly
        </p>
        <h2 className="mb-4 text-2xl font-bold text-ink md:text-3xl">
          One email a week on product experience and AI-enabled delivery
        </h2>
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-ink-muted">
          What I&apos;m working on, what broke, and what I&apos;d do
          differently. Written for people running product organizations.
        </p>
      </div>

      <div aria-live="polite">
        {subscribeStatus === "success" ? (
          <div className="mx-auto max-w-xl rounded-3xl border-2 border-ink bg-sun p-6 text-center text-ink">
            <h3 className="mb-2 font-display text-2xl font-bold text-ink">
              You&apos;re subscribed
            </h3>
            <p className="text-ink">
              Thanks for signing up. Keep an eye on your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleNewsletterSubmit} className="mx-auto max-w-xl">
            <label htmlFor={emailId} className="sr-only">
              Email address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id={emailId}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                required
                disabled={subscribeStatus === "loading"}
                aria-invalid={subscribeStatus === "error" || undefined}
                className="flex-1 rounded-full border-2 border-ink bg-studio-card px-4 py-3 text-base text-ink placeholder:text-ink-muted focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:opacity-50"
              />
              <Button
                type="submit"
                size="lg"
                disabled={subscribeStatus === "loading"}
                className="shrink-0"
              >
                {subscribeStatus === "loading" ? "Subscribing…" : "Subscribe"}
              </Button>
            </div>
            {subscribeStatus === "error" ? (
              <p
                role="alert"
                className="mt-3 rounded-full border-2 border-ink bg-blush px-4 py-2 text-center text-sm font-bold text-ink"
              >
                {errorMessage}
              </p>
            ) : null}
            <p className="mt-4 text-center text-sm text-muted-foreground">
              One email a week. Unsubscribe anytime.{" "}
              <Link
                href="/privacy"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Privacy
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
