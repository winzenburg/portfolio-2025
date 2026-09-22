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
 * Hairline-ruled definition list used under page heroes. Replaces the pill rows
 * and stat grids that each page used to hand-roll differently.
 */
export default function FactRow({ facts, className }: FactRowProps) {
  return (
    // Subgrid keeps the values on one baseline when a label wraps to two lines,
    // which happens often in the two-column mobile layout.
    <dl
      className={cn(
        "grid grid-cols-2 grid-rows-[auto_1fr] gap-x-8 gap-y-6 border-t border-border/60 pt-8 md:grid-cols-4",
        className,
      )}
    >
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="row-span-2 grid grid-rows-subgrid gap-0"
        >
          <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {fact.label}
          </dt>
          <dd className="mt-2 text-sm font-medium text-foreground">
            {fact.value}
            {fact.note ? (
              <span className="mt-1 block text-xs font-normal text-muted-foreground">
                {fact.note}
              </span>
            ) : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}
