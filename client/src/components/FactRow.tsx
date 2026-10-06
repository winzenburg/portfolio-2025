import { cn } from "@/lib/utils";

export interface Fact {
  label: string;
  value: string;
  /** Optional supporting detail under the value. */
  note?: string;
  /** When set, the value is a link. Used for the contact mailto. */
  href?: string;
}

interface FactRowProps {
  facts: Fact[];
  className?: string;
  /**
   * `contact` keeps a long address inside its column: one column on a phone,
   * two from md, and a wider email track from lg. Other rows stay equal quarters.
   */
  layout?: "quarters" | "contact";
}

/**
 * A hairline fact row. Labels are small caps; values are Fraunces.
 * Ink on paper, with no colored tile fills.
 * Inner edges of each divider get 24px from md and 32px from xl.
 * The first and last columns stay on the page grid.
 */
export default function FactRow({
  facts,
  className,
  layout = "quarters",
}: FactRowProps) {
  const contact = layout === "contact";

  return (
    <dl
      className={cn(
        "grid border-t border-ink/15",
        contact ? "studio-fact-contact" : "grid-cols-2 md:grid-cols-4",
        className,
      )}
    >
      {facts.map((fact) => (
        <div
          key={fact.label}
          className={cn(
            "min-w-0 py-6",
            contact
              ? "studio-fact-contact-cell"
              : cn(
                  "border-b border-ink/15",
                  "pl-0 pr-6 max-md:[&:nth-child(even)]:pl-6 max-md:[&:nth-child(even)]:pr-0",
                  "md:border-b-0 md:border-r md:pl-6 md:pr-6 md:last:border-r-0",
                  "md:[&:nth-child(4n+1)]:pl-0 md:[&:nth-child(4n)]:pr-0",
                  "xl:pl-8 xl:pr-8",
                  "xl:[&:nth-child(4n+1)]:pl-0 xl:[&:nth-child(4n)]:pr-0",
                ),
          )}
        >
          <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
            {fact.label}
          </dt>
          <dd className="mt-2 max-w-full font-display text-[1.65rem] leading-tight break-words text-ink">
            {fact.href ? <a href={fact.href}>{fact.value}</a> : fact.value}
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
