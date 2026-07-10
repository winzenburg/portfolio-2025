import { useState } from "react";
import { useSearch } from "wouter";
import ResponsiveNav from "@/components/ResponsiveNav";
import { Helmet } from "react-helmet-async";

type UnsubscribeStatus = "idle" | "loading" | "success" | "error";

export default function Unsubscribe() {
  const searchString = useSearch();
  const emailFromQuery = new URLSearchParams(searchString).get("email") ?? "";

  const [email, setEmail] = useState(emailFromQuery);
  const [status, setStatus] = useState<UnsubscribeStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data: { success?: boolean; error?: string } = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>Unsubscribe | Ryan Winzenburg</title>
        <meta name="description" content="Unsubscribe from the Ryan Winzenburg newsletter." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <ResponsiveNav currentPage="unsubscribe" />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Unsubscribe
          </h1>

          {status === "success" ? (
            <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">You've been unsubscribed</h2>
              <p className="text-slate-300">You won't receive any more newsletter emails from us.</p>
            </div>
          ) : (
            <>
              <p className="text-slate-300 text-center mb-8">
                Enter your email address below to unsubscribe from the newsletter.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@company.com"
                  required
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-8 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Unsubscribing..." : "Unsubscribe"}
                </button>
                {status === "error" && (
                  <p className="text-sm text-red-400 text-center">{errorMessage}</p>
                )}
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
