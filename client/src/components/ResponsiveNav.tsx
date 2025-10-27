import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResponsiveNavProps {
  currentPage?: string;
  theme?: "light" | "dark";
}

export default function ResponsiveNav({ currentPage, theme = "dark" }: ResponsiveNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Theme-based styles
  const isDark = theme === "dark";
  const headerClasses = isDark
    ? "border-b bg-background"
    : "border-b bg-white";
  const logoClasses = isDark
    ? "text-2xl font-bold"
    : "text-2xl font-bold text-gray-900";
  const linkActiveClasses = isDark
    ? "text-sm font-medium text-primary"
    : "text-sm font-medium text-primary";
  const linkInactiveClasses = isDark
    ? "text-sm font-medium hover:text-primary transition-colors"
    : "text-sm font-medium text-gray-600 hover:text-primary transition-colors";
  const menuButtonClasses = isDark
    ? "md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
    : "md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-900";
  const mobileMenuClasses = isDark
    ? "md:hidden mt-4 pb-4 border-t pt-4"
    : "md:hidden mt-4 pb-4 border-t pt-4 bg-white";

  return (
    <header className={headerClasses}>
      <div className="container py-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <span className={logoClasses}>Ryan Winzenburg</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/work">
              <span className={currentPage === 'work' ? linkActiveClasses : linkInactiveClasses}>
                Work
              </span>
            </Link>
            <Link href="/methodology">
              <span className={currentPage === 'methodology' ? linkActiveClasses : linkInactiveClasses}>
                Methodology
              </span>
            </Link>
            <Link href="/about">
              <span className={currentPage === 'about' ? linkActiveClasses : linkInactiveClasses}>
                About
              </span>
            </Link>
            <Link href="/services">
              <span className={currentPage === 'services' ? linkActiveClasses : linkInactiveClasses}>
                Services
              </span>
            </Link>
            <Link href="/articles">
              <span className={currentPage === 'articles' ? linkActiveClasses : linkInactiveClasses}>
                Articles
              </span>
            </Link>
            <Link href="/contact">
              <Button>Contact</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={menuButtonClasses}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className={mobileMenuClasses}>
            <div className="flex flex-col gap-4">
              <Link href="/work">
                <span
                  className={currentPage === 'work' ? linkActiveClasses : linkInactiveClasses}
                  onClick={closeMenu}
                >
                  Work
                </span>
              </Link>
              <Link href="/methodology">
                <span
                  className={currentPage === 'methodology' ? linkActiveClasses : linkInactiveClasses}
                  onClick={closeMenu}
                >
                  Methodology
                </span>
              </Link>
              <Link href="/about">
                <span
                  className={currentPage === 'about' ? linkActiveClasses : linkInactiveClasses}
                  onClick={closeMenu}
                >
                  About
                </span>
              </Link>
              <Link href="/services">
                <span
                  className={currentPage === 'services' ? linkActiveClasses : linkInactiveClasses}
                  onClick={closeMenu}
                >
                  Services
                </span>
              </Link>
              <Link href="/articles">
                <span
                  className={currentPage === 'articles' ? linkActiveClasses : linkInactiveClasses}
                  onClick={closeMenu}
                >
                  Articles
                </span>
              </Link>
              <Link href="/contact">
                <Button className="w-full" onClick={closeMenu}>Contact</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

