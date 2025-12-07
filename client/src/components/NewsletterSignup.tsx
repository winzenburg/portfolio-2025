import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeStatus("loading");
    setErrorMessage("");

    try {
      // Use FormData to submit to Beehiiv's form endpoint
      const formData = new FormData();
      formData.append("email", email);
      formData.append("publication_id", "pub_edc42b24-e8db-4628-b878-934ce46b2f22");
      formData.append("utm_source", "winzenburg.com");
      formData.append("utm_medium", "organic");

      const response = await fetch("https://embeds.beehiiv.com/v2/subscribe", {
        method: "POST",
        body: formData,
        mode: "no-cors", // Beehiiv may not support CORS, use no-cors mode
      });

      // With no-cors, we can't read the response, so assume success if no error is thrown
      setSubscribeStatus("success");
      setEmail("");
    } catch (error) {
      setSubscribeStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-700/50 rounded-xl p-8 md:p-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          Get AI-Augmented Insights in Your Inbox
        </h2>
        <p className="text-lg text-slate-300">
          Strategic frameworks, case studies, and lessons learned from building AI-native products. No fluff, just actionable insights for VCs and executives.
        </p>
      </div>

      {subscribeStatus === "success" ? (
        <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6 text-center">
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">You're subscribed!</h3>
          <p className="text-slate-300">Check your email to confirm your subscription.</p>
        </div>
      ) : (
        <form onSubmit={handleNewsletterSubmit} className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@company.com"
              required
              disabled={subscribeStatus === "loading"}
              className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={subscribeStatus === "loading"}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {subscribeStatus === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
          {subscribeStatus === "error" && (
            <p className="mt-3 text-sm text-red-400 text-center">{errorMessage}</p>
          )}
          <p className="mt-4 text-sm text-slate-400 text-center">
            Weekly insights. Unsubscribe anytime.
          </p>
        </form>
      )}
    </div>
  );
}
