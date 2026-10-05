import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const CHIP_TONES = {
  sun: "bg-sun",
  aqua: "bg-aqua",
  blush: "bg-blush",
  cream: "bg-cream",
  apricot: "bg-apricot",
  paper: "bg-band",
} as const;

export type ChipTone = keyof typeof CHIP_TONES;

const chipClass = (tone: ChipTone, className?: string) =>
  cn(
    "studio-chip inline-flex items-center gap-1.5 rounded-full border-2 border-ink px-4 py-2 text-[15px] font-bold text-ink",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
    CHIP_TONES[tone],
    className,
  );

interface ChipProps extends ComponentProps<"button"> {
  tone?: ChipTone;
  selected?: boolean;
}

/**
 * Filter chip. Ink text on a studio fill (all pairings clear 8:1).
 * Selected state adds an offset shadow and aria-pressed, so it does not
 * depend on color alone.
 */
export function Chip({
  tone = "sun",
  selected = false,
  className,
  type = "button",
  ...props
}: ChipProps) {
  return (
    <button
      type={type}
      aria-pressed={selected}
      className={chipClass(tone, className)}
      {...props}
    />
  );
}

interface ChipLabelProps extends ComponentProps<"span"> {
  tone?: ChipTone;
}

/** Non-interactive sticker label. Same fills and ink edge as Chip. */
export function ChipLabel({ tone = "aqua", className, ...props }: ChipLabelProps) {
  return <span className={chipClass(tone, className)} {...props} />;
}

interface StickerProps extends ComponentProps<"span"> {
  tone?: ChipTone;
}

/** Absolute sticker used on framed art. Drops in once. Not a control. */
export function Sticker({ tone = "sun", className, ...props }: StickerProps) {
  return (
    <span
      className={cn(
        "studio-sticker pointer-events-none absolute z-10 inline-flex items-center rounded-full border-2 border-ink px-4 py-2.5 text-[15px] font-bold text-ink shadow-[3px_3px_0_var(--color-ink)]",
        CHIP_TONES[tone],
        className,
      )}
      {...props}
    />
  );
}
