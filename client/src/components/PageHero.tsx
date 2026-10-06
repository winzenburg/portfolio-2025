import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { heroSpec } from "@/lib/hero-art";
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
  /** Tailwind object-position utility, e.g. "object-top". Used by the framed variant. */
  position?: string;
  /** CSS object-position for a cover crop, e.g. "50% 20%". Wins over the hero map. */
  focus?: string;
  /** Describes the scene. Required when the picture is content, not decoration. */
  alt?: string;
}

function heroImageAttrs(
  src: string,
  alt: string,
  priority: boolean,
  sizes: string,
  focus?: string,
): {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  width?: number;
  height?: number;
  loading: "eager" | "lazy";
  decoding: "async";
  fetchPriority?: "high";
  style?: CSSProperties;
} {
  const spec = heroSpec(src);
  const objectPosition = focus ?? spec?.focus;
  return {
    src: spec?.src ?? src,
    srcSet: spec?.srcSet,
    sizes: spec ? sizes : undefined,
    alt,
    width: spec?.width,
    height: spec?.height,
    loading: priority ? "eager" : "lazy",
    decoding: "async",
    fetchPriority: priority ? "high" : undefined,
    style: objectPosition ? { objectPosition } : undefined,
  };
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

/**
 * A few pixels of pointer parallax on the hero image. Skipped for coarse
 * pointers and for anyone who asked for reduced motion. The shift is a CSS
 * variable so the stylesheet can zero it.
 */
function useHeroShift(active: boolean) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;
    const frame = ref.current;
    if (!frame || typeof window.matchMedia !== "function") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(pointer: fine)");
    if (reduce.matches || !fine.matches) return;

    const media = frame.querySelector("img, video");
    if (!(media instanceof HTMLElement)) return;

    const onMove = (event: PointerEvent) => {
      const rect = frame.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      media.style.setProperty("--hero-x", `${(-x * 8).toFixed(2)}px`);
      media.style.setProperty("--hero-y", `${(-y * 6).toFixed(2)}px`);
    };
    const onLeave = () => {
      media.style.setProperty("--hero-x", "0px");
      media.style.setProperty("--hero-y", "0px");
    };

    frame.addEventListener("pointermove", onMove);
    frame.addEventListener("pointerleave", onLeave);
    return () => {
      frame.removeEventListener("pointermove", onMove);
      frame.removeEventListener("pointerleave", onLeave);
    };
  }, [active]);

  return ref;
}

type PageHeroVariant = "plain" | "framed" | "band" | "bleed";

interface PageHeroProps {
  /** Short label above the headline. Pass a plain string; the rule is drawn here. */
  eyebrow?: string;
  /** Secondary label shown after the eyebrow, at lower emphasis. */
  eyebrowNote?: string;
  title: ReactNode;
  titleId?: string;
  lede?: ReactNode;
  /** Fact row or pill row rendered under the hero grid. */
  meta?: ReactNode;
  actions?: ReactNode;
  /** Note rendered under the actions, before the meta row. */
  footnote?: ReactNode;
  /** Visual that sits beside the copy column on large screens. */
  aside?: ReactNode;
  media?: PageHeroMedia;
  /**
   * `framed` puts full-color art beside the copy, unfiltered.
   * `band` is a straight navy section.
   * `bleed` runs the art edge to edge, cropped with object-fit: cover.
   * The headline sits on a solid navy panel so the type never rests on the art.
   * Defaults to `framed` when media is set, otherwise `plain`.
   */
  variant?: PageHeroVariant;
  /** Centres the copy column. Use only where there is no aside or frame. */
  align?: "start" | "center";
  className?: string;
  /** Fetch the bleed image immediately. Home only. */
  priority?: boolean;
}

function FramedArt({
  media,
  playVideo,
}: {
  media: PageHeroMedia;
  playVideo: boolean;
}) {
  const imageSrc = media.kind === "video" ? (media.poster ?? media.src) : media.src;
  const alt = media.alt ?? "";
  const image = heroImageAttrs(imageSrc, alt, false, "(min-width: 1024px) 40rem, 100vw", media.focus);

  return (
    <div className="studio-frame">
      {media.kind === "video" && playVideo ? (
        <video
          src={media.src}
          poster={image.src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={alt || undefined}
          className={cn(
            "aspect-[16/9] h-auto w-full object-cover",
            media.position ?? "object-center",
          )}
        />
      ) : (
        <img
          {...image}
          className={cn(
            "aspect-[16/9] h-auto w-full object-cover",
            !image.style && (media.position ?? "object-center"),
          )}
        />
      )}
    </div>
  );
}

/**
 * Shared page hero. Art is never filtered and sits beside the copy.
 * `band` sets the copy on a straight navy field.
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
  variant,
  align = "start",
  className,
  priority = false,
}: PageHeroProps) {
  const resolved: PageHeroVariant = variant ?? (media ? "framed" : "plain");
  const showFrame = resolved !== "plain" && resolved !== "bleed" && media !== undefined;
  const onBand = resolved === "band" || resolved === "bleed";
  const playVideo = useHeroVideoEnabled(
    media?.kind === "video" && (showFrame || resolved === "bleed"),
  );
  const shiftRef = useHeroShift(resolved === "bleed" && media !== undefined);
  const isCentered = align === "center" && !aside && !showFrame;
  const hasVisual = showFrame || aside !== undefined;

  if (resolved === "bleed" && media) {
    const imageSrc = media.kind === "video" ? (media.poster ?? media.src) : media.src;
    const alt = media.alt ?? "";
    const image = heroImageAttrs(imageSrc, alt, priority, "100vw", media.focus);

    return (
      <>
      <section
        aria-labelledby={titleId}
        data-tone="navy"
        className={cn(
          "relative isolate overflow-hidden bg-navy text-band",
          className,
        )}
      >
        <div
          ref={shiftRef}
          className="relative h-[70vw] min-h-64 max-h-[28rem] w-full overflow-hidden lg:absolute lg:inset-0 lg:h-full lg:max-h-none lg:min-h-0"
        >
          {media.kind === "video" && playVideo ? (
            <video
              src={media.src}
              poster={image.src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={alt || undefined}
              className="studio-hero-art"
              style={image.style}
            />
          ) : (
            <img
              {...image}
              className="studio-hero-art"
            />
          )}
        </div>
        <div className="relative z-10 bg-navy lg:min-h-[36rem] lg:w-[min(42rem,52%)]">
          <div className="px-4 py-12 sm:px-8 lg:px-12 lg:py-20 xl:pl-16">
            {eyebrow ? (
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span aria-hidden="true" className="h-px w-6 bg-band" />
                <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-band">
                  {eyebrow}
                </span>
                {eyebrowNote ? (
                  <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-band-muted">
                    {eyebrowNote}
                  </span>
                ) : null}
              </div>
            ) : null}

            <h1
              id={titleId}
              className="text-pretty text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-band sm:text-5xl lg:text-[3.5rem]"
            >
              {title}
            </h1>

            {lede ? (
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-band-muted md:text-xl">
                {lede}
              </p>
            ) : null}

            {actions ? (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                {actions}
              </div>
            ) : null}

            {footnote ? (
              <div className="mt-6 max-w-xl space-y-1 text-[15px] leading-relaxed text-band-muted">
                {footnote}
              </div>
            ) : null}
          </div>
        </div>
      </section>
      {meta ? (
        <div className="border-b border-ink/15 bg-paper text-ink">
          <div className="container">{meta}</div>
        </div>
      ) : null}
    </>
    );
  }

  return (
    <section
      aria-labelledby={titleId}
      className={cn(
        "relative",
        onBand ? "z-10 bg-navy text-band" : "text-ink",
        className,
      )}
    >
      <div className="container relative py-16 md:py-24 lg:py-28">
        <div
          className={cn(
            "grid items-center gap-10 lg:gap-8",
            hasVisual ? "lg:grid-cols-12" : "",
          )}
        >
          <div
            className={cn(
              hasVisual ? "lg:col-span-6" : "max-w-4xl",
              isCentered ? "mx-auto text-center" : "",
            )}
          >
            {eyebrow ? (
              <div
                className={cn(
                  "mb-5 flex flex-wrap items-center gap-3",
                  isCentered ? "justify-center" : "",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-px w-6",
                    onBand ? "bg-band" : "bg-verm-text",
                  )}
                />
                <span
                  className={cn(
                    "text-[13px] font-bold uppercase tracking-[0.14em]",
                    onBand ? "text-band" : "text-verm-text",
                  )}
                >
                  {eyebrow}
                </span>
                {eyebrowNote ? (
                  <span
                    className={cn(
                      "text-[13px] font-bold uppercase tracking-[0.14em]",
                      onBand ? "text-band-muted" : "text-ink-muted",
                    )}
                  >
                    {eyebrowNote}
                  </span>
                ) : null}
              </div>
            ) : null}

            <h1
              id={titleId}
              className={cn(
                "text-pretty text-4xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]",
                onBand ? "text-band" : "text-ink",
              )}
            >
              {title}
            </h1>

            {lede ? (
              <p
                className={cn(
                  "mt-6 max-w-xl text-lg leading-relaxed md:text-xl",
                  onBand ? "text-band-muted" : "text-ink-muted",
                  isCentered ? "mx-auto" : "",
                )}
              >
                {lede}
              </p>
            ) : null}

            {actions ? (
              <div
                className={cn(
                  "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
                  isCentered ? "sm:justify-center" : "",
                )}
              >
                {actions}
              </div>
            ) : null}

            {footnote ? (
              <div
                className={cn(
                  "mt-6 max-w-xl space-y-1 text-[15px] leading-relaxed",
                  onBand ? "text-band-muted" : "text-ink-muted",
                  isCentered ? "mx-auto" : "",
                )}
              >
                {footnote}
              </div>
            ) : null}
          </div>

          {showFrame && media ? (
            <div className="lg:col-span-6">
              <FramedArt media={media} playVideo={playVideo} />
            </div>
          ) : aside ? (
            <div className="lg:col-span-5 lg:col-start-8">{aside}</div>
          ) : null}
        </div>

        {meta ? <div className="mt-12 lg:mt-16">{meta}</div> : null}
      </div>
    </section>
  );
}
