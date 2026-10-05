import { cn } from "@/lib/utils";
import { tileBackground } from "@/lib/studio";

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
 * Colored fact tiles. Ink text on blush, aqua, sun, and cream, each above 8:1.
 * The value uses Fraunces so the number reads as a display numeral.
 */
export default function FactRow({ facts, className }: FactRowProps) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-4 md:grid-cols-4",
        className,
      )}
    >
      {facts.map((fact, index) => (
        <div
          key={fact.label}
          className={cn(
            "rounded-[18px] border-2 border-ink px-5 py-4 text-ink",
            tileBackground(index),
          )}
        >
          <dt className="text-[13px] font-bold uppercase tracking-[0.14em]">
            {fact.label}
          </dt>
          <dd className="mt-1.5 font-display text-[1.65rem] font-bold leading-tight tracking-tight">
            {fact.value}
            {fact.note ? (
              <span className="mt-1 block font-sans text-[15px] font-normal leading-snug">
                {fact.note}
              </span>
            ) : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}
