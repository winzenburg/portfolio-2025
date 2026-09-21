import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionTone = "plain" | "muted" | "slate";

const TONE_CLASSES: Record<SectionTone, string> = {
  plain: "",
  muted: "bg-muted/30 border-y border-border/60",
  slate: "bg-slate-900/30 border-y border-border/60",
};

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
  return (
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
      <div className="container">{children}</div>
    </section>
  );
}

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

/**
 * Small label above a heading. On this site it usually carries the
 * plain-language question the section answers.
 */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-400",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-6 shrink-0 bg-slate-700" />
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
  return (
    <h2
      id={id}
      className={cn(
        "text-pretty text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl",
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
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          {eyebrow ? <Eyebrow className="mb-4">{eyebrow}</Eyebrow> : null}
          <SectionTitle id={id}>{title}</SectionTitle>
        </div>
        {trailing ? <div className="shrink-0">{trailing}</div> : null}
      </div>
      {lede ? (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
