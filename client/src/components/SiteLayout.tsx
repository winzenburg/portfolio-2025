import type { ReactNode } from "react";
import ResponsiveNav from "@/components/ResponsiveNav";
import { cn } from "@/lib/utils";

interface SiteLayoutProps {
  children: ReactNode;
  /** Key of the current page, for the nav active indicator. */
  currentPage?: string;
  className?: string;
}

/**
 * Page shell: skip link, primary nav, and the `main` landmark.
 *
 * Before this existed no page on the site had a `main` element, so keyboard and
 * screen-reader users had no way to skip the nav. The footer is rendered once
 * from App rather than here, so routes that still mount their own chrome (the
 * articles and case studies) also get one.
 */
export default function SiteLayout({
  children,
  currentPage,
  className,
}: SiteLayoutProps) {
  return (
    <div className={cn("flex min-h-screen flex-col", className)}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <ResponsiveNav currentPage={currentPage} />
      <main id="main" className="flex-1">
        {children}
      </main>
    </div>
  );
}
