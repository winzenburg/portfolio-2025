import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface PageHeroMedia {
  src: string;
  /**
   * Defaults to an image. A video only mounts on large viewports when the
   * visitor has not asked for reduced motion; everyone else gets `poster`.
   */
  kind?: "image" | "video";
  /** Still frame for video media. Required in practice for `kind: "video"`. */
  poster?: string;
  /** Tailwind object-position utility, e.g. "object-top". */
  position?: string;
}

/**
 * Gates the hero video behind viewport width and motion preference. The home
 * hero video is 12MB, so this keeps it off phones and off machines that asked
 * for less motion, both of which fall back to the poster still.
 */
function useHeroVideoEnabled(enabled: boolean): boolean {
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined" || !window.matchMedia) return;

    const query = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
    );
    const sync = () => setShouldPlay(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, [enabled]);

  return shouldPlay;
}

interface PageHeroProps {
  /** Short label above the headline. Pass a plain string; the rule is drawn here. */
  eyebrow?: string;
  /** Secondary label shown after the eyebrow, at lower emphasis. */
  eyebrowNote?: string;
  title: ReactNode;
  titleId?: string;
  lede?: ReactNode;
  /** Fact row or pill row rendered under the actions. */
  meta?: ReactNode;
  actions?: ReactNode;
  /** Note rendered under the actions, before the meta row. */
  footnote?: ReactNode;
  /** Visual that sits beside the copy column on large screens. */
  aside?: ReactNode;
  media?: PageHeroMedia;
  /** Centres the copy column. Use only where there is no aside. */
  align?: "start" | "center";
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
  footnote,
  aside,
  media,
  align = "start",
  className,
}: PageHeroProps) {
  const isCentered = align === "center" && !aside;
  const playVideo = useHeroVideoEnabled(media?.kind === "video");
  const mediaFilter =
    "[filter:grayscale(1)_brightness(0.62)_contrast(1.2)]";

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

      {media ? (
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          {/* Art is anchored right so the crop stays interesting next to the copy. */}
          <div
            className={cn(
              "absolute inset-y-0 right-0 isolate w-full",
              isCentered ? "" : "lg:w-[78%]",
            )}
          >
            {media.kind === "video" && playVideo ? (
              <video
                src={media.src}
                poster={media.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className={cn(
                  "h-full w-full object-cover",
                  mediaFilter,
                  media.position ?? "object-center",
                )}
              />
            ) : (
              <img
                src={media.kind === "video" ? (media.poster ?? media.src) : media.src}
                alt=""
                className={cn(
                  "h-full w-full object-cover",
                  mediaFilter,
                  media.position ?? "object-center",
                )}
              />
            )}
            <div className="absolute inset-0 bg-primary/30 mix-blend-color" />
            <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply" />
          </div>
          <div
            className={cn(
              "absolute inset-0",
              isCentered
                ? "bg-gradient-to-b from-background via-background/75 to-background"
                : "bg-gradient-to-r from-background from-30% via-background/75 to-background/20",
            )}
          />
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
          <div
            className={cn(
              aside ? "lg:col-span-7" : "max-w-4xl",
              isCentered ? "mx-auto text-center" : "",
            )}
          >
            {eyebrow ? (
              <div
                className={cn(
                  "mb-6 flex items-center gap-3",
                  isCentered ? "justify-center" : "",
                )}
              >
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
              className="text-pretty text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              {title}
            </h1>

            {lede ? (
              <p
                className={cn(
                  "mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl",
                  isCentered ? "mx-auto" : "",
                )}
              >
                {lede}
              </p>
            ) : null}

            {actions ? (
              <div
                className={cn(
                  "mt-9 flex flex-col gap-3 sm:flex-row sm:items-center",
                  isCentered ? "sm:justify-center" : "",
                )}
              >
                {actions}
              </div>
            ) : null}

            {/* A div, not a p, so callers can pass more than one line without
                nesting block-level spans inside a paragraph. */}
            {footnote ? (
              <div
                className={cn(
                  "mt-6 max-w-xl space-y-1 text-sm leading-relaxed text-muted-foreground",
                  isCentered ? "mx-auto" : "",
                )}
              >
                {footnote}
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
