import { useMemo, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import ResponsiveNav from "@/components/ResponsiveNav";
import PageSeo from "@/components/PageSeo";
import { contactHref } from "@/lib/contact-intent";
import { trackAssessmentComplete, trackAssessmentStart } from "@/lib/analytics";
import {
  ANSWER_VALUES,
  DIMENSION_MAX,
  DIMENSIONS,
  MATURITY_LEVELS,
  TOTAL_MAX,
  TOTAL_QUESTIONS,
  answeredCount,
  firstUnansweredId,
  isAnswerValue,
  scoreAssessment,
  scoreBarTone,
  type AnswerMap,
  type AnswerValue,
} from "@/lib/assessment";

const consultingHref = contactHref({ intent: "consulting" });

function barFillClass(tone: "risk" | "warn" | "ok"): string {
  if (tone === "risk") {
    return "bg-red-500";
  }
  if (tone === "warn") {
    return "bg-amber-500";
  }
  return "bg-emerald-500";
}

export default function Assessment() {
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [showResults, setShowResults] = useState(false);
  const [warning, setWarning] = useState("");
  const startedRef = useRef(false);
  const completedRef = useRef(false);
  const resultsRef = useRef<HTMLElement>(null);

  const completed = answeredCount(answers);
  const progressPct = (completed / TOTAL_QUESTIONS) * 100;
  const result = useMemo(
    () => (showResults ? scoreAssessment(answers) : null),
    [answers, showResults],
  );

  function selectAnswer(questionKey: string, value: AnswerValue): void {
    if (!startedRef.current) {
      startedRef.current = true;
      trackAssessmentStart();
    }
    setAnswers((current) => ({ ...current, [questionKey]: value }));
    setWarning("");
  }

  function handleSeeResults(): void {
    const missingId = firstUnansweredId(answers);
    if (missingId !== null) {
      setShowResults(false);
      const remaining = TOTAL_QUESTIONS - completed;
      setWarning(`${String(remaining)} question${remaining === 1 ? "" : "s"} still unanswered.`);
      document.getElementById(`question-${missingId}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }

    const scored = scoreAssessment(answers);
    if (scored === null) {
      setWarning("Answer every question to see your results.");
      return;
    }

    setShowResults(true);
    setWarning("");
    if (!completedRef.current) {
      completedRef.current = true;
      trackAssessmentComplete({
        total: scored.total,
        level: scored.level.name,
        weakestDimension: scored.weakest.id,
      });
    }
    window.requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function handleReset(): void {
    setAnswers({});
    setShowResults(false);
    setWarning("");
    completedRef.current = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <PageSeo
        title="Product Risk and UX Maturity Assessment | Ryan Winzenburg"
        description="Twenty questions about how your team decides what to build. Get a maturity score, your three largest product risks, and a recommended starting engagement. About six minutes. No email required."
        path="/assessment"
        ogImage="/images/services-hero.webp"
      />
      <ResponsiveNav currentPage="assessment" />

      <section className="relative pt-32 pb-12">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/services-hero.webp"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container px-6">
          <div className="relative max-w-4xl mx-auto bg-slate-950/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800/50">
            <p className="text-sm uppercase tracking-widest text-cyan-400 mb-4">
              Product design consulting
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Product risk and UX maturity assessment
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Twenty questions about how your team decides what to build. It takes about six minutes and gives you a maturity score, your three largest sources of product risk, and a recommendation on where to start.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-slate-400 font-mono">
              <li>20 questions</li>
              <li>~6 minutes</li>
              <li>Results shown immediately</li>
              <li>No email required</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center gap-4">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-mono whitespace-nowrap">
            {completed} of {TOTAL_QUESTIONS} answered
          </p>
          <div
            className="flex-1 h-1.5 rounded-full bg-slate-800 overflow-hidden"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={TOTAL_QUESTIONS}
            aria-valuenow={completed}
            aria-label="Assessment progress"
          >
            <div
              className="h-full bg-cyan-500 transition-[width] duration-300"
              style={{ width: `${String(progressPct)}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="border-l-2 border-cyan-500 bg-slate-900/50 px-6 py-5 mb-12">
          <p className="text-slate-200">
            Answer for how things actually work, not how they are supposed to. The value is in the gap between the two, and nobody sees your answers but you.
          </p>
          <p className="text-slate-400 mt-3">
            If a question does not apply, pick the option closest to your situation. If you are not sure, that uncertainty is usually itself the answer. Individual answers stay in this browser.
          </p>
        </div>

        {DIMENSIONS.map((dimension, dimensionIndex) => (
          <section key={dimension.id} className="mb-14">
            <div className="flex flex-wrap items-baseline gap-3 border-b-2 border-white/10 pb-3 mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono">
                0{dimensionIndex + 1}
              </span>
              <h2 className="text-2xl font-bold text-white">{dimension.name}</h2>
              <p className="text-slate-400 italic md:ml-auto">{dimension.question}</p>
            </div>

            {dimension.questions.map((question) => {
              const selected = answers[question.id];
              return (
                <fieldset
                  key={question.id}
                  id={`question-${question.id}`}
                  className="py-6 border-b border-slate-800 scroll-mt-24"
                >
                  <legend className="text-lg font-semibold text-white p-0 mb-0">
                    {question.prompt}
                  </legend>
                  {question.hint.length > 0 ? (
                    <p className="text-sm text-slate-400 mt-0.5 mb-4 leading-snug">
                      {question.hint}
                    </p>
                  ) : (
                    <div className="mb-4" />
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
                    {question.options.map((label, optionIndex) => {
                      const value = ANSWER_VALUES[optionIndex];
                      if (!isAnswerValue(value)) {
                        return null;
                      }
                      const inputId = `${question.id}-${String(value)}`;
                      const isSelected = selected === value;
                      return (
                        <div key={inputId}>
                          <input
                            className="peer sr-only"
                            type="radio"
                            name={question.id}
                            id={inputId}
                            value={value}
                            checked={isSelected}
                            onChange={() => selectAnswer(question.id, value)}
                          />
                          <label
                            htmlFor={inputId}
                            className={`block h-full cursor-pointer rounded-md border px-3 py-3 text-sm leading-snug transition-colors ${
                              isSelected
                                ? "border-cyan-500 bg-cyan-700 text-white font-semibold"
                                : "border-slate-700 bg-slate-900/60 text-slate-300 hover:border-cyan-600 hover:text-white"
                            }`}
                          >
                            <span className="block font-mono text-[10px] tracking-widest uppercase opacity-60 mb-1">
                              {value}
                            </span>
                            {label}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </fieldset>
              );
            })}
          </section>
        ))}

        <div className="flex flex-wrap items-center gap-4 mt-8">
          <button
            type="button"
            onClick={handleSeeResults}
            className="px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-colors font-semibold"
          >
            See my results
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-8 py-4 border border-slate-500 text-slate-200 rounded-lg hover:bg-slate-800 transition-colors font-semibold"
          >
            Start over
          </button>
          {warning.length > 0 ? (
            <p className="text-amber-400 text-sm" role="status">
              {warning}
            </p>
          ) : null}
        </div>

        {result ? (
          <section ref={resultsRef} className="mt-14 scroll-mt-24" aria-live="polite">
            <div className="bg-cyan-950 border border-cyan-700/40 rounded-xl p-8 md:p-10 text-white mb-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <p className="text-6xl md:text-7xl font-serif leading-none">
                  {result.total}
                  <span className="text-2xl text-cyan-300/70">/{TOTAL_MAX}</span>
                </p>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-300 font-mono">
                    Maturity level: {result.level.name}
                  </p>
                  <h2 className="text-3xl font-bold mt-2">{result.level.headline}</h2>
                  <p className="text-cyan-50/80 mt-3 leading-relaxed">{result.level.body}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-1 mt-8">
                {MATURITY_LEVELS.map((level) => (
                  <div
                    key={level.name}
                    className={`flex items-center justify-center text-center px-2 py-2 text-[10px] uppercase tracking-widest font-mono ${
                      level.name === result.level.name
                        ? "bg-white text-cyan-900 font-bold"
                        : "bg-white/10 text-cyan-100/50"
                    }`}
                  >
                    {level.name}
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Where your risk sits</h3>
            <div className="mb-10">
              {result.ranked.map((dimension) => {
                const pct = (dimension.score / DIMENSION_MAX) * 100;
                return (
                  <div
                    key={dimension.id}
                    className="grid grid-cols-[1fr_3rem] md:grid-cols-[13rem_1fr_3.5rem] gap-3 md:gap-4 items-center py-3 border-b border-slate-800"
                  >
                    <p className="font-semibold text-white">{dimension.name}</p>
                    <p className="text-right font-mono text-xs text-slate-400 md:order-last">
                      {dimension.score}/{DIMENSION_MAX}
                    </p>
                    <div className="h-2.5 rounded-full bg-slate-800 overflow-hidden col-span-2 md:col-span-1">
                      <div
                        className={`h-full ${barFillClass(scoreBarTone(dimension.score, DIMENSION_MAX))}`}
                        style={{ width: `${String(pct)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Your three largest risks</h3>
            <div className="mb-10 space-y-4">
              {result.topRisks.map((risk, index) => (
                <div
                  key={risk.dimension.id}
                  className={`border-l-2 px-5 py-5 bg-slate-900/50 ${
                    index === 0 ? "border-red-500" : "border-cyan-600"
                  }`}
                >
                  <p
                    className={`text-[10px] font-bold uppercase tracking-widest font-mono mb-2 ${
                      index === 0 ? "text-red-400" : "text-cyan-400"
                    }`}
                  >
                    Risk {index + 1} · {risk.dimension.name} · {risk.dimension.score}/{DIMENSION_MAX}
                  </p>
                  <h4 className="text-lg font-bold text-white mb-2">{risk.flag.headline}</h4>
                  <p className="text-slate-300 leading-relaxed">{risk.flag.body}</p>
                </div>
              ))}
            </div>

            <div className="border border-slate-700 border-t-4 border-t-cyan-500 rounded-lg p-8 mb-10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 font-mono">
                Where I would start
              </p>
              <h3 className="text-3xl font-bold text-white mt-2">{result.recommendation.name}</h3>
              <p className="text-xl text-cyan-300 mt-1">{result.recommendation.timing}</p>
              <p className="text-slate-300 leading-relaxed mt-4">{result.recommendation.why}</p>
              <ul className="mt-4">
                {result.recommendation.includes.map((item) => (
                  <li
                    key={item}
                    className="text-slate-300 py-2 pl-4 border-b border-slate-800 last:border-0 relative before:content-['·'] before:absolute before:left-0 before:text-cyan-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-600 rounded-xl p-8 md:p-10 text-white">
              <h3 className="text-3xl font-bold mb-3">Want a second opinion on this?</h3>
              <p className="text-blue-100 leading-relaxed max-w-2xl mb-6">
                A 30-minute call, no deck. Tell me what you are trying to ship and what is making it uncertain. I will tell you what I would do first, whether or not you hire me. If your score suggests you do not need help, I will say that too.
              </p>
              <Link href={consultingHref}>
                <span className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                  Book a 30-minute consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              </Link>
              <p className="text-blue-100 mt-6 text-sm">
                Prefer email?{" "}
                <a href="mailto:ryan@winzenburg.com" className="underline hover:text-white">
                  ryan@winzenburg.com
                </a>
              </p>
            </div>
          </section>
        ) : null}

        <p className="text-sm text-slate-500 leading-relaxed mt-12 pt-6 border-t border-slate-800">
          This assessment is a structured self-diagnostic, not an audit. It reflects what you reported about your own team, and it is deliberately blunt in order to be useful. A real diagnostic looks at your analytics, your support tickets, and your users, and frequently finds something different from what a team expects.
        </p>
      </div>
    </div>
  );
}
