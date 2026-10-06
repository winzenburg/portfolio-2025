import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Kept so existing call sites compile. Fills are no longer applied. */
export const CHIP_TONES = {
  sun: "",
  aqua: "",
  blush: "",
  cream: "",
  apricot: "",
  paper: "",
} as const;

export type ChipTone = keyof typeof CHIP_TONES;

interface ChipProps extends ComponentProps<"button"> {
  tone?: ChipTone;
  selected?: boolean;
}

/**
 * Quiet filter tag. Selected state is a filled chip plus aria-pressed,
 * so it does not depend on color alone. On a navy band, index.css switches
 * the pairing to cream type and an ink-on-cream selected state.
 */
export function Chip({
  selected = false,
  className,
  type = "button",
  tone: _tone,
  ...props
}: ChipProps) {
  return (
    <button
      type={type}
      aria-pressed={selected}
      className={cn(
        "studio-chip inline-flex min-h-9 items-center gap-1.5 border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
        className,
      )}
      {...props}
    />
  );
}

interface ChipLabelProps extends ComponentProps<"span"> {
  tone?: ChipTone;
}

/** Small uppercase category label. Terracotta on paper clears 4.5:1. */
export function ChipLabel({ className, tone: _tone, ...props }: ChipLabelProps) {
  return (
    <span
      className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.16em] text-verm-text",
        className,
      )}
      {...props}
    />
  );
}
