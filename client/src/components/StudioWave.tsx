import { cn } from "@/lib/utils";

const WAVE_PATH = (() => {
  const bumps = 18;
  const width = 1440;
  const step = width / bumps;
  let path = "M0 48 L0 26";
  for (let index = 0; index < bumps; index += 1) {
    const mid = index * step + step / 2;
    const end = (index + 1) * step;
    path += ` Q ${mid} 0 ${end} 26`;
  }
  path += " L1440 48 Z";
  return path;
})();

interface BandWaveProps {
  edge: "top" | "bottom";
  className?: string;
}

/**
 * Scalloped edge for a navy band. The shape hangs outside the section so the
 * cut reads against the paper on either side. Decorative only.
 */
export function BandWave({ edge, className }: BandWaveProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className={cn(
        "pointer-events-none absolute left-0 z-10 h-10 w-full text-navy md:h-12",
        edge === "top"
          ? "top-0 -translate-y-[calc(100%-1px)]"
          : "bottom-0 translate-y-[calc(100%-1px)] rotate-180",
        className,
      )}
    >
      <path fill="currentColor" d={WAVE_PATH} />
    </svg>
  );
}
