import { cn } from "@/lib/utils";

export type PhaseName = "Discover" | "Define" | "Develop" | "Deliver";

interface PhaseAccent {
  /** Paints SVG fill/stroke through `currentColor`. */
  svg: string;
  text: string;
  border: string;
  bg: string;
  rule: string;
}

/**
 * One accent per Double Diamond phase, shared by the diagram and the phase
 * sections so colour means the same thing in both places. The ramp stays inside
 * the site's cool palette (cyan primary, brand blue, purple, green) rather than
 * introducing warm hues that fight the navy ground.
 */
export const PHASE_ACCENT: Record<PhaseName, PhaseAccent> = {
  Discover: {
    svg: "text-cyan-400",
    text: "text-cyan-300",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    rule: "bg-cyan-400",
  },
  Define: {
    svg: "text-blue-400",
    text: "text-blue-300",
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    rule: "bg-blue-400",
  },
  Develop: {
    svg: "text-purple-400",
    text: "text-purple-300",
    border: "border-purple-500/30",
    bg: "bg-purple-500/10",
    rule: "bg-purple-400",
  },
  Deliver: {
    svg: "text-emerald-400",
    text: "text-emerald-300",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    rule: "bg-emerald-400",
  },
};

interface PhaseGeometry {
  name: PhaseName;
  /** Triangle wedge inside one of the two diamonds. */
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

export default function DoubleDiamondDiagram({
  className,
}: DoubleDiamondDiagramProps) {
  return (
    <figure className={cn("m-0", className)}>
      <div className="rounded-2xl border border-border/60 bg-slate-950/50 p-5 backdrop-blur-sm md:p-7">
        <svg
          viewBox="0 0 560 300"
          role="img"
          aria-labelledby="double-diamond-title double-diamond-desc"
          className="h-auto w-full"
        >
          <title id="double-diamond-title">The Double Diamond</title>
          <desc id="double-diamond-desc">
            Two diamonds side by side. The first covers the problem space and
            splits into Discover, which diverges, then Define, which converges.
            The second covers the solution space and splits into Develop, which
            diverges, then Deliver, which converges.
          </desc>

          <line
            x1="8"
            y1="150"
            x2="552"
            y2="150"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 7"
            className="text-slate-700"
          />

          {/* The neck between the two diamonds: problem handed to solution. */}
          <path
            d="M252 150 H305 M299 145.5 L305 150 L299 154.5"
            stroke="currentColor"
            strokeWidth="1.25"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-slate-500"
          />

          {PHASES.map((phase) => (
            <polygon
              key={phase.name}
              points={phase.wedge}
              className={PHASE_ACCENT[phase.name].svg}
              fill="currentColor"
              fillOpacity="0.14"
              stroke="currentColor"
              strokeOpacity="0.7"
              strokeWidth="1.25"
              strokeLinejoin="round"
            />
          ))}

          {VERTICES.map(([cx, cy]) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r="2.5"
              fill="currentColor"
              className="text-slate-400"
            />
          ))}

          <g
            className="fill-slate-400"
            fontSize="10.5"
            letterSpacing="2.4"
            textAnchor="middle"
          >
            <text x="135" y="30">
              PROBLEM
            </text>
            <text x="425" y="30">
              SOLUTION
            </text>
          </g>

          {PHASES.map((phase) => (
            <g key={phase.name} textAnchor="middle">
              <text
                x={phase.labelX}
                y="273"
                fontSize="16"
                fontWeight="500"
                fill="currentColor"
                className={PHASE_ACCENT[phase.name].svg}
              >
                {phase.name}
              </text>
              <text
                x={phase.labelX}
                y="291"
                fontSize="9"
                letterSpacing="1.8"
                className="fill-slate-400"
              >
                {phase.mode.toUpperCase()}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <figcaption className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
        Discover and Define find the right problem. Develop and Deliver find the
        right solution. Teams run methods in parallel and go back upstream when
        the evidence says to.
      </figcaption>
    </figure>
  );
}
