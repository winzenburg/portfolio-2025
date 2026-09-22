import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
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
  /** Render with primary accent color when idle (Contact CTA treatment). */
  accent?: boolean;
}

/**
 * Approved IA (locked):
 *   Work · Consulting · Writing · About · Contact
 *
 * Demoted to footer: Methodology, Gallery, Resources, Brand Hub.
 * Writing maps to /articles; Consulting maps to /consulting (Services page).
 */
const NAV_ITEMS: NavItem[] = [
  { label: "Work", href: "/work", matches: ["work"] },
  {
    label: "Consulting",
    href: "/consulting",
    matches: ["services", "consulting", "assessment"],
  },
  { label: "Writing", href: "/articles", matches: ["articles", "resources"] },
  { label: "About", href: "/about", matches: ["about"] },
  {
    label: "Contact",
    href: "/contact",
    matches: ["contact"],
    accent: true,
  },
];

export default function ResponsiveNav({ currentPage }: ResponsiveNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  // Publish header height as --nav-height so pages can offset sticky chrome.
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

  // Close mobile menu on route change.
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
          ? "border-border bg-background/95 backdrop-blur-sm"
          : "border-border/60 bg-background",
      )}
    >
      <div className="container py-4 md:py-5">
        <nav className="flex items-center justify-between" aria-label="Primary">
          {/* Wordmark */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 rounded-sm transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`Ryan Winzenburg, home${currentPage === "home" ? " (current page)" : ""}`}
            aria-current={currentPage === "home" ? "page" : undefined}
          >
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded border border-primary/30 font-display text-sm font-semibold text-primary"
            >
              RW
            </span>
            <span className="font-display text-base font-semibold tracking-tight text-foreground md:text-lg">
              Ryan Winzenburg
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-0.5 md:flex">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-sm px-3 py-2 text-sm font-medium transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
                    active
                      ? "text-foreground"
                      : item.accent
                        ? "text-primary hover:text-primary/80"
                        : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                  {/* Active underline — ink-blue rule */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3 -bottom-px h-px rounded-full bg-primary transition-opacity",
                      active ? "opacity-100" : "opacity-0",
                    )}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={cn(
              "rounded-sm p-2 text-muted-foreground transition-colors",
              "hover:bg-muted hover:text-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "md:hidden",
            )}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen ? (
          <div
            id="mobile-menu"
            className="mt-3 border-t border-border/60 pt-3 pb-2 md:hidden"
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
                        "flex items-center gap-3 rounded-sm px-1 py-3 text-base font-medium transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        active
                          ? "text-foreground"
                          : item.accent
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "h-4 w-px rounded-full transition-colors",
                          active ? "bg-primary" : "bg-transparent",
                        )}
                      />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
}
