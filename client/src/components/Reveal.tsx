import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  /** Stagger in milliseconds, for sibling reveals inside one group. */
  delay?: number;
  className?: string;
}

/**
 * Fades content up once as it enters the viewport.
 *
 * The hidden state is gated behind `motion-safe:`, so anyone who prefers
 * reduced motion — or lands without IntersectionObserver — sees the content at
 * full opacity from the first paint. Nothing here can hide content.
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setHasEntered(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-out",
        hasEntered ? "" : "motion-safe:translate-y-3 motion-safe:opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
