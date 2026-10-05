import { createContext, useContext, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { BandWave } from "@/components/StudioWave";

type SectionTone = "plain" | "muted" | "slate" | "cream" | "navy";

const TONE_CLASSES: Record<SectionTone, string> = {
  plain: "",
  muted: "bg-muted/40",
  slate: "bg-muted/40",
  cream: "bg-cream text-ink",
  navy: "studio-band relative z-10 bg-navy text-band",
};

const SectionToneContext = createContext<SectionTone>("plain");

function useSectionTone(): SectionTone {
  return useContext(SectionToneContext);
}

interface SectionProps {
  children: ReactNode;
  id?: string;
  /** id of the heading that names this section, for screen readers. */
  labelledBy?: string;
  tone?: SectionTone;
  /** Narrower vertical rhythm for quieter, supporting sections. */
  compact?: boolean;
  className?: string;
}

export function Section({
  children,
  id,
  labelledBy,
  tone = "plain",
  compact = false,
  className,
}: SectionProps) {
  const isNavy = tone === "navy";

  return (
    <SectionToneContext.Provider value={tone}>
      <section
        id={id}
        aria-labelledby={labelledBy}
        className={cn(
          compact ? "py-16 md:py-20" : "py-20 md:py-28",
          TONE_CLASSES[tone],
          id ? "scroll-mt-24" : "",
          className,
        )}
      >
        {isNavy ? <BandWave edge="top" /> : null}
        <div className="container relative">{children}</div>
        {isNavy ? <BandWave edge="bottom" /> : null}
      </section>
    </SectionToneContext.Provider>
  );
}

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

/**
 * Small label above a heading. Vermilion text on paper (5.14:1). On a navy
 * band it switches to sun, which clears 11:1 on navy.
 */
export function Eyebrow({ children, className }: EyebrowProps) {
  const onNavy = useSectionTone() === "navy";

  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.14em]",
        onNavy ? "text-sun" : "text-verm-text",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-[3px] w-7 shrink-0 rounded-sm",
          onNavy ? "bg-sun" : "bg-verm",
        )}
      />
      {children}
    </p>
  );
}

interface SectionTitleProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ id, children, className }: SectionTitleProps) {
  const onNavy = useSectionTone() === "navy";

  return (
    <h2
      id={id}
      className={cn(
        "text-pretty text-3xl font-bold leading-tight tracking-tight md:text-4xl",
        onNavy ? "text-band" : "text-ink",
        className,
      )}
    >
      {children}
    </h2>
  );
}

interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  /** Content pinned to the right of the heading on large screens. */
  trailing?: ReactNode;
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  lede,
  trailing,
  className,
}: SectionHeadingProps) {
  const onNavy = useSectionTone() === "navy";

  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          {eyebrow ? <Eyebrow className="mb-4">{eyebrow}</Eyebrow> : null}
          <SectionTitle id={id}>{title}</SectionTitle>
        </div>
        {trailing ? (
          <div
            className={cn(
              "shrink-0",
              onNavy &&
                "[&_a]:font-bold [&_a]:text-sun [&_a]:underline-offset-4 hover:[&_a]:text-band",
            )}
          >
            {trailing}
          </div>
        ) : null}
      </div>
      {lede ? (
        <p
          className={cn(
            "mt-6 max-w-2xl text-lg leading-relaxed",
            onNavy ? "text-band-muted" : "text-ink-muted",
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
