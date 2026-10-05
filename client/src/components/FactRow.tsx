import { cn } from "@/lib/utils";

export interface Fact {
  label: string;
  value: string;
  /** Optional supporting detail under the value. */
  note?: string;
}

interface FactRowProps {
  facts: Fact[];
  className?: string;
}

/**
 * A hairline fact row. Labels are small caps; values are Fraunces.
 * Ink on paper, with no colored tile fills.
 */
export default function FactRow({ facts, className }: FactRowProps) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 border-t border-ink/15 md:grid-cols-4",
        className,
      )}
    >
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="border-b border-ink/15 py-6 pr-6 md:border-b-0 md:border-r md:last:border-r-0"
        >
          <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
            {fact.label}
          </dt>
          <dd className="mt-2 font-display text-[1.65rem] leading-tight text-ink">
            {fact.value}
            {fact.note ? (
              <span className="mt-1 block font-sans text-[15px] font-normal leading-snug tracking-normal text-ink-muted">
                {fact.note}
              </span>
            ) : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}
