import { Helmet } from "react-helmet-async";

export type ArticleFaqItem = {
  question: string;
  answer: string;
};

export type ArticleFaqProps = {
  items: ArticleFaqItem[];
  heading?: string;
};

function isFaqItem(value: unknown): value is ArticleFaqItem {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const record = value as { question?: unknown; answer?: unknown };
  return (
    typeof record.question === "string" &&
    record.question.trim().length > 0 &&
    typeof record.answer === "string" &&
    record.answer.trim().length > 0
  );
}

/**
 * Visible FAQ block + FAQPage JSON-LD for answer-engine citation.
 */
export default function ArticleFaq({
  items,
  heading = "FAQ",
}: ArticleFaqProps) {
  const faqItems = items.filter(isFaqItem);
  if (faqItems.length === 0) {
    return null;
  }

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      <section className="my-16" aria-labelledby="article-faq-heading">
        <h2
          id="article-faq-heading"
          className="text-3xl font-bold text-white mb-6"
        >
          {heading}
        </h2>
        <div className="space-y-6">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="border-b border-slate-800 pb-6 last:border-b-0 last:pb-0"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.question}
              </h3>
              <p className="text-slate-300 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
