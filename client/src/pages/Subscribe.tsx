import { useState } from "react";
import { Link } from "wouter";
import ResponsiveNav from "@/components/ResponsiveNav";
import PageSeo from "@/components/PageSeo";

type SubscribeStatus = "idle" | "loading" | "success" | "error";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<SubscribeStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

      const data: { success?: boolean; error?: string } = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
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
    <div className="min-h-screen bg-slate-950">
      <PageSeo
        title="Subscribe to the Weekly AI-Native Scan | Ryan Winzenburg"
        description="A weekly brief for design and product leaders on AI-native workflows. Practical patterns, specific tools, real examples from active work."
        path="/subscribe"
        ogImage="/images/contact-hero.webp"
      />
      <ResponsiveNav currentPage="subscribe" />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-lg mx-auto">
          {status === "success" ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-400"
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
              <h1 className="text-3xl font-bold text-white mb-4">
                You're on the list.
              </h1>
              <p className="text-slate-300 mb-8">
                The next scan drops this week. Check your inbox, including
                spam, in case it lands there the first time.
              </p>
              <Link href="/articles">
                <a className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                  Read the articles archive →
                </a>
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Weekly AI-Native Improvement Scan
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed mb-6">
                  Once a week. One area where AI is genuinely changing how
                  design and product teams work.
                </p>
                <p className="text-slate-400 leading-relaxed mb-3">
                  Practical patterns, specific tools, and decisions from
                  active work in AI-augmented design systems, product
                  strategy, and workflow architecture.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  This is a public brief, not a sales pitch. It comes from
                  ongoing work as a Design Operations Leader and AI Workflow
                  Architect. If you read the articles here and want the
                  shorter, more frequent version, this is it.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    First name{" "}
                    <span className="text-slate-500 font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Alex"
                    autoComplete="given-name"
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    autoComplete="email"
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Subscribing…" : "Subscribe"}
                </button>

                {status === "error" && (
                  <p className="text-sm text-red-400 text-center">
                    {errorMessage}
                  </p>
                )}

                <p className="text-xs text-slate-500 text-center pt-2">
                  Unsubscribe from any email, anytime. Resend handles it and
                  there are no dark patterns. No sharing your address.
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
