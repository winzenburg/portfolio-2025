import { useId, useState } from "react";
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
    <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-cyan-950/50 via-slate-900/40 to-slate-900/20 p-8 md:p-12">
      <div className="mb-8 text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Weekly
        </p>
        <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
          One email a week on product experience and AI-enabled delivery
        </h2>
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-slate-300">
          What I&apos;m working on, what broke, and what I&apos;d do
          differently. Written for people running product organizations.
        </p>
      </div>

      <div aria-live="polite">
        {subscribeStatus === "success" ? (
          <div className="mx-auto max-w-xl rounded-xl border border-emerald-700/50 bg-emerald-900/30 p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
              <svg
                className="h-6 w-6 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              You&apos;re subscribed
            </h3>
            <p className="text-slate-300">
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
                className="flex-1 rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-base text-white placeholder-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
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
              <p role="alert" className="mt-3 text-center text-sm text-red-400">
                {errorMessage}
              </p>
            ) : null}
            <p className="mt-4 text-center text-sm text-slate-400">
              One email a week. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
