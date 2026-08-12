import { Link } from "wouter";

import { brandFacts } from "@/lib/brandFacts";

const AUTHOR_NAME = brandFacts.person.legalName;
const AUTHOR_TITLE = brandFacts.person.jobTitle;
const VENTURE_NAMES = brandFacts.ventures.map((v) => v.name);
const AUTHOR_BLURB = `${AUTHOR_NAME}, founder of ${VENTURE_NAMES.join(" and ")}, is a ${AUTHOR_TITLE} with ${brandFacts.person.experienceYears}+ years of UX and information-architecture experience. Ryan Winzenburg writes about AI-native workflows, design systems, and operating models that make teams ship.`;

/**
 * Visible E-E-A-T author block for every article.
 * Keep bio wording aligned with Brand Hub / brand-facts.json / LinkedIn.
 */
export default function ArticleAuthorBio() {
  return (
    <aside
      className="mt-16 pt-8 border-t border-slate-800"
      aria-label={`About the author, ${AUTHOR_NAME}`}
    >
      <div className="flex flex-col sm:flex-row gap-5 sm:items-start">
        <div className="shrink-0">
          <img
            src="/images/about-hero.webp"
            alt={`${AUTHOR_NAME}, ${AUTHOR_TITLE}`}
            className="w-16 h-16 rounded-full object-cover border border-slate-700"
            width={64}
            height={64}
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">
            Written by
          </p>
          <p className="text-white font-semibold text-lg leading-snug">
            {AUTHOR_NAME}
          </p>
          <p className="text-slate-400 text-sm mt-1 mb-3">{AUTHOR_TITLE}</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            {AUTHOR_BLURB}{" "}
            <Link href="/brand-hub">
              <a className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Brand Hub
              </a>
            </Link>
            {" · "}
            <a
              href="https://www.linkedin.com/in/rwinzenburg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </aside>
  );
}
