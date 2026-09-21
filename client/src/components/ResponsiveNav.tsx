import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ResponsiveNavProps {
  /** Key of the current page, used for the active indicator. */
  currentPage?: string;
}

interface NavItem {
  label: string;
  href: string;
  /** `currentPage` values that should light this item up. */
  matches: string[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Work", href: "/work", matches: ["work"] },
  { label: "Methodology", href: "/methodology", matches: ["methodology"] },
  { label: "About", href: "/about", matches: ["about"] },
  {
    label: "Consulting",
    href: "/consulting",
    matches: ["services", "consulting", "assessment"],
  },
  { label: "Articles", href: "/articles", matches: ["articles"] },
  { label: "Resources", href: "/resources", matches: ["resources"] },
];

export default function ResponsiveNav({ currentPage }: ResponsiveNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  // Publish the header height as --nav-height so any page can offset its own
  // sticky chrome with top-[var(--nav-height)] instead of measuring the DOM or
  // hard-coding a value that is wrong at one breakpoint.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const publish = () => {
      document.documentElement.style.setProperty(
        "--nav-height",
        `${header.offsetHeight}px`,
      );
    };
    publish();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", publish);
      return () => window.removeEventListener("resize", publish);
    }
    const observer = new ResizeObserver(publish);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu when the route changes, so it never survives a jump.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (item: NavItem) =>
    currentPage !== undefined && item.matches.includes(currentPage);

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        isScrolled
          ? "border-border/60 bg-background/95 backdrop-blur-xl"
          : "border-border/40 bg-background",
      )}
    >
      <div className="container py-4 md:py-5">
        <nav className="flex items-center justify-between" aria-label="Primary">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-md transition-opacity hover:opacity-90"
            aria-label={`Ryan Winzenburg, home${currentPage === "home" ? " (current page)" : ""}`}
            aria-current={currentPage === "home" ? "page" : undefined}
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 font-['Playfair_Display'] text-sm font-semibold text-primary transition-colors group-hover:border-primary/70"
            >
              RW
            </span>
            <span className="text-lg font-semibold tracking-tight text-white md:text-xl">
              Ryan Winzenburg
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-white"
                      : "text-slate-400 hover:text-white",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary transition-opacity",
                      active ? "opacity-100" : "opacity-0",
                    )}
                  />
                </Link>
              );
            })}
            <Button className="ml-4" asChild>
              <Link
                href="/contact"
                aria-current={currentPage === "contact" ? "page" : undefined}
              >
                Contact
              </Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-muted hover:text-white focus-visible:ring-[3px] focus-visible:ring-ring/50 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>

        {isMenuOpen ? (
          <div
            id="mobile-menu"
            className="mt-4 border-t border-border/60 pt-4 md:hidden"
          >
            <ul className="flex flex-col">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-1 py-3 text-base font-medium transition-colors",
                        active ? "text-white" : "text-slate-300 hover:text-white",
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "h-4 w-0.5 rounded-full transition-colors",
                          active ? "bg-primary" : "bg-transparent",
                        )}
                      />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Button className="mt-4 w-full" asChild>
              <Link
                href="/contact"
                aria-current={currentPage === "contact" ? "page" : undefined}
              >
                Contact
              </Link>
            </Button>
          </div>
        ) : null}
      </div>
    </header>
  );
}
