import { Link } from "wouter";

import { brandFacts } from "@/lib/brandFacts";

const AUTHOR_NAME = brandFacts.person.legalName;
const AUTHOR_TITLE = brandFacts.person.jobTitle;
const VENTURE_NAMES = brandFacts.ventures.map((v) => v.name);
const AUTHOR_BLURB = `${AUTHOR_NAME}, founder of ${VENTURE_NAMES.join(" and ")}, is a ${AUTHOR_TITLE} with ${brandFacts.person.experienceYears} years designing enterprise products. Ryan Winzenburg writes about AI-native workflows, design systems, and operating models that make teams ship.`;

/**
 * Visible E-E-A-T author block for every article.
 * Keep bio wording aligned with /about (Brand Hub) / brand-facts.json / LinkedIn.
 *
 * The avatar is the RW monogram rather than an image. The illustration this
 * previously used is not a photograph of the author, so presenting it as one
 * with a descriptive alt was misleading.
 */
export default function ArticleAuthorBio() {
  return (
    <aside
      className="mt-16 border-t border-border/60 pt-8"
      aria-label={`About the author, ${AUTHOR_NAME}`}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <span
          aria-hidden="true"
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-['Playfair_Display'] text-xl font-semibold text-primary"
        >
          RW
        </span>
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.16em] text-slate-400">
            Written by
          </p>
          <p className="text-lg font-semibold leading-snug text-white">
            {AUTHOR_NAME}
          </p>
          <p className="mb-3 mt-1 text-sm text-slate-400">{AUTHOR_TITLE}</p>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            {AUTHOR_BLURB}{" "}
            <Link
              href="/about"
              className="text-primary transition-colors hover:text-cyan-300"
            >
              About / Brand Hub
            </Link>
            {" · "}
            <a
              href="https://www.linkedin.com/in/rwinzenburg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition-colors hover:text-cyan-300"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </aside>
  );
}
