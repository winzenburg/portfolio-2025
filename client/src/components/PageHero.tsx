import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface PageHeroImage {
  src: string;
  /** Tailwind object-position utility, e.g. "object-top". */
  position?: string;
}

interface PageHeroProps {
  /** Short label above the headline. Pass a plain string; the rule is drawn here. */
  eyebrow?: string;
  /** Secondary label shown after the eyebrow, at lower emphasis. */
  eyebrowNote?: string;
  title: ReactNode;
  titleId?: string;
  lede?: ReactNode;
  /** Fact row or pill row rendered under the lede. */
  meta?: ReactNode;
  actions?: ReactNode;
  /** Visual that sits beside the copy column on large screens. */
  aside?: ReactNode;
  image?: PageHeroImage;
  className?: string;
}

/**
 * Shared page hero for the marketing pages.
 *
 * `relative isolate` is load-bearing: it keeps the negatively-stacked
 * background layers inside this section instead of letting a later block
 * background paint over them (the bug that hid the About hero image).
 *
 * Source hero art on this site is bright, warm editorial illustration. Rather
 * than dropping it to 40% opacity and letting it read as mud, it gets pulled
 * into the site's navy range with a grayscale + brand-tint duotone, then a
 * directional scrim keeps the headline column at full contrast.
 */
export default function PageHero({
  eyebrow,
  eyebrowNote,
  title,
  titleId,
  lede,
  meta,
  actions,
  aside,
  image,
  className,
}: PageHeroProps) {
  return (
    <section
      aria-labelledby={titleId}
      className={cn(
        "relative isolate overflow-hidden border-b border-border/60",
        className,
      )}
    >
      {/* Brand glow, masked to the top-left so the headline has a light source. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-primary/10 [mask-image:radial-gradient(75%_60%_at_10%_0%,black,transparent_70%)]"
      />

      {image ? (
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          {/* Art is anchored right so the crop stays interesting next to the copy. */}
          <div className="absolute inset-y-0 right-0 isolate w-full lg:w-[78%]">
            <img
              src={image.src}
              alt=""
              className={cn(
                "h-full w-full object-cover [filter:grayscale(1)_brightness(0.62)_contrast(1.2)]",
                image.position ?? "object-center",
              )}
            />
            <div className="absolute inset-0 bg-primary/30 mix-blend-color" />
            <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-background from-30% via-background/75 to-background/20" />
          {/* Below lg the copy spans the full width, so the art drops back to texture. */}
          <div className="absolute inset-0 bg-background/75 lg:hidden" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />
        </div>
      ) : null}

      {/* Layout rules, faded at both ends so they read as structure, not chrome. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px)] [background-size:96px_100%] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_70%,transparent)]"
      />

      <div className="container relative py-16 md:py-24 lg:py-28">
        <div
          className={cn(
            "grid items-center gap-12 lg:gap-16",
            aside ? "lg:grid-cols-12" : "",
          )}
        >
          <div className={cn(aside ? "lg:col-span-7" : "max-w-4xl")}>
            {eyebrow ? (
              <div className="mb-6 flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-primary" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  {eyebrow}
                </span>
                {eyebrowNote ? (
                  <span className="hidden text-xs uppercase tracking-[0.14em] text-muted-foreground sm:inline">
                    {eyebrowNote}
                  </span>
                ) : null}
              </div>
            ) : null}

            <h1
              id={titleId}
              className="text-pretty text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {title}
            </h1>

            {lede ? (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
                {lede}
              </p>
            ) : null}

            {actions ? (
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                {actions}
              </div>
            ) : null}

            {meta ? <div className="mt-12">{meta}</div> : null}
          </div>

          {aside ? <div className="lg:col-span-5">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
