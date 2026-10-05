import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Sticker, type ChipTone } from "@/components/Chip";
import { BandWave } from "@/components/StudioWave";

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
  /** Describes the scene. Required when the picture is content, not decoration. */
  alt?: string;
}

export interface PageHeroSticker {
  label: string;
  tone?: ChipTone;
  className?: string;
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

type PageHeroVariant = "plain" | "framed" | "band";

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
   * `framed` puts full-color art in a tilted print frame.
   * `band` is a navy section with a wavy edge.
   * Defaults to `framed` when media is set, otherwise `plain`.
   */
  variant?: PageHeroVariant;
  stickers?: PageHeroSticker[];
  /** Centres the copy column. Use only where there is no aside or frame. */
  align?: "start" | "center";
  className?: string;
}

function FramedArt({
  media,
  stickers,
  playVideo,
}: {
  media: PageHeroMedia;
  stickers?: PageHeroSticker[];
  playVideo: boolean;
}) {
  const imageSrc = media.kind === "video" ? (media.poster ?? media.src) : media.src;
  const alt = media.alt ?? "";

  return (
    <div className="relative px-3 py-6 sm:px-8 sm:py-8">
      <div className="studio-frame">
        {media.kind === "video" && playVideo ? (
          <video
            src={media.src}
            poster={media.poster}
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
            src={imageSrc}
            alt={alt}
            className={cn(
              "aspect-[16/9] h-auto w-full object-cover",
              media.position ?? "object-center",
            )}
          />
        )}
      </div>
      {stickers?.map((sticker) => (
        <Sticker key={sticker.label} tone={sticker.tone} className={sticker.className}>
          {sticker.label}
        </Sticker>
      ))}
    </div>
  );
}

/**
 * Shared page hero. Art is never filtered. `framed` keeps it in a print
 * beside the copy, and `band` sets the copy on navy, so text does not sit
 * on the illustration.
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
  stickers,
  align = "start",
  className,
}: PageHeroProps) {
  const resolved: PageHeroVariant = variant ?? (media ? "framed" : "plain");
  const showFrame = resolved !== "plain" && media !== undefined;
  const onBand = resolved === "band";
  const playVideo = useHeroVideoEnabled(showFrame && media?.kind === "video");
  const isCentered = align === "center" && !aside && !showFrame;
  const hasVisual = showFrame || aside !== undefined;

  return (
    <section
      aria-labelledby={titleId}
      className={cn(
        "relative",
        onBand ? "z-10 bg-navy text-band" : "text-ink",
        className,
      )}
    >
      {onBand ? (
        <>
          <BandWave edge="top" />
          <BandWave edge="bottom" />
        </>
      ) : null}

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
                    "h-[3px] w-7 rounded-sm",
                    onBand ? "bg-sun" : "bg-verm",
                  )}
                />
                <span
                  className={cn(
                    "text-[13px] font-bold uppercase tracking-[0.14em]",
                    onBand ? "text-sun" : "text-verm-text",
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
                "text-pretty text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl",
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
              <FramedArt media={media} stickers={stickers} playVideo={playVideo} />
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
