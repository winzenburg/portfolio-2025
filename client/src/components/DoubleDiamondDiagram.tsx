import { cn } from "@/lib/utils";

export type PhaseName = "Discover" | "Define" | "Develop" | "Deliver";

interface PhaseAccent {
  /** Class applied to the polygon SVG element. Uses text-* so fill="currentColor" picks it up. */
  svg: string;
  text: string;
  border: string;
  bg: string;
  rule: string;
}

/**
 * One accent per Double Diamond phase. Uses dark mid-tones that pass WCAG AA
 * on the paper canvas. All SVG text uses fill="currentColor" + a text-* class
 * so the computed color is always respected, avoiding fill-* class ambiguity
 * in SVG rendering.
 */
export const PHASE_ACCENT: Record<PhaseName, PhaseAccent> = {
  Discover: {
    svg: "text-cyan-700",
    text: "text-cyan-700",
    border: "border-cyan-300",
    bg: "bg-cyan-50",
    rule: "bg-cyan-600",
  },
  Define: {
    svg: "text-blue-700",
    text: "text-blue-700",
    border: "border-blue-300",
    bg: "bg-blue-50",
    rule: "bg-blue-600",
  },
  Develop: {
    svg: "text-violet-700",
    text: "text-violet-700",
    border: "border-violet-300",
    bg: "bg-violet-50",
    rule: "bg-violet-600",
  },
  Deliver: {
    svg: "text-emerald-700",
    text: "text-emerald-700",
    border: "border-emerald-300",
    bg: "bg-emerald-50",
    rule: "bg-emerald-600",
  },
};

interface PhaseGeometry {
  name: PhaseName;
  wedge: string;
  labelX: number;
  mode: "Diverge" | "Converge";
}

const PHASES: PhaseGeometry[] = [
  { name: "Discover", wedge: "20,150 135,60 135,240", labelX: 86, mode: "Diverge" },
  { name: "Define", wedge: "135,60 250,150 135,240", labelX: 196, mode: "Converge" },
  { name: "Develop", wedge: "310,150 425,60 425,240", labelX: 376, mode: "Diverge" },
  { name: "Deliver", wedge: "425,60 540,150 425,240", labelX: 486, mode: "Converge" },
];

const VERTICES = [
  [20, 150],
  [135, 60],
  [135, 240],
  [250, 150],
  [310, 150],
  [425, 60],
  [425, 240],
  [540, 150],
];

interface DoubleDiamondDiagramProps {
  className?: string;
}

/**
 * Double Diamond process diagram styled for the light studio.
 *
 * SVG text approach: every <text> uses fill="currentColor" + a text-* Tailwind
 * class.  This is the standard pattern for SVG colour in React/Tailwind — the
 * text-* class sets CSS `color`, currentColor picks it up as `fill`.  Avoid
 * fill-* utilities on SVG text: they emit `fill:` via CSS which works, but
 * specificity fights with browser default SVG fill.
 *
 * All labels that must be readable at small sizes (PROBLEM / SOLUTION / mode)
 * use text-foreground (full ink) for maximum contrast.  Phase name labels use
 * their accent colour.
 */
export default function DoubleDiamondDiagram({
  className,
}: DoubleDiamondDiagramProps) {
  return (
    <figure className={cn("m-0", className)}>
      {/* Panel: bg-card gives a very slight warm separation from the page bg */}
      <div className="rounded-2xl border border-border bg-card p-5 md:p-7">
        <svg
          viewBox="0 0 560 310"
          role="img"
          aria-labelledby="double-diamond-title double-diamond-desc"
          className="h-auto w-full"
        >
          <title id="double-diamond-title">The Double Diamond</title>
          <desc id="double-diamond-desc">
            Two diamonds side by side. The first covers the problem space and
            splits into Discover (diverge) then Define (converge). The second
            covers the solution space: Develop (diverge) then Deliver (converge).
          </desc>

          {/*
           * PROBLEM / SOLUTION header labels — full ink, not muted.
           * fill="currentColor" + text-foreground ensures the CSS color variable
           * is respected even when SVG user-agent stylesheet sets fill:black.
           */}
          <g
            fontSize="10"
            letterSpacing="2.5"
            textAnchor="middle"
            fontWeight="600"
          >
            <text x="135" y="18" fill="currentColor" className="text-foreground">
              PROBLEM
            </text>
            <text x="425" y="18" fill="currentColor" className="text-foreground">
              SOLUTION
            </text>
          </g>

          {/* Horizontal centre-line — muted-foreground stroke is readable */}
          <line
            x1="8"
            y1="155"
            x2="552"
            y2="155"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 8"
            className="text-muted-foreground"
            strokeOpacity="0.5"
          />

          {/* Phase wedge fills */}
          {PHASES.map((phase) => (
            <polygon
              key={phase.name}
              points={phase.wedge}
              className={PHASE_ACCENT[phase.name].svg}
              fill="currentColor"
              fillOpacity="0.12"
              stroke="currentColor"
              strokeOpacity="0.6"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          ))}

          {/* Vertex dots */}
          {VERTICES.map(([cx, cy]) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r="3"
              fill="currentColor"
              className="text-foreground"
              fillOpacity="0.5"
            />
          ))}

          {/* Neck arrow between the two diamonds */}
          <path
            d="M252 155 H305 M299 150.5 L305 155 L299 159.5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground"
            strokeOpacity="0.4"
          />

          {/* Phase name labels + mode (DIVERGE / CONVERGE) */}
          {PHASES.map((phase) => (
            <g key={phase.name} textAnchor="middle">
              {/* Phase name — coloured accent */}
              <text
                x={phase.labelX}
                y="278"
                fontSize="15"
                fontWeight="600"
                fill="currentColor"
                className={PHASE_ACCENT[phase.name].svg}
              >
                {phase.name}
              </text>
              {/* Mode label — full ink so it's readable at tiny size */}
              <text
                x={phase.labelX}
                y="296"
                fontSize="9"
                letterSpacing="1.6"
                fill="currentColor"
                className="text-foreground"
                fillOpacity="0.5"
              >
                {phase.mode.toUpperCase()}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <figcaption className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
        Discover and Define find the right problem. Develop and Deliver find the
        right solution. Teams run methods in parallel and go back upstream when
        the evidence says to.
      </figcaption>
    </figure>
  );
}
