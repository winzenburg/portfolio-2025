import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

interface ResponsiveNavProps {
  currentPage?: string;
}

export default function ResponsiveNav({ currentPage }: ResponsiveNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="text-xl font-bold text-white hover:text-blue-400 transition-colors" onClick={closeMenu}>
              Ryan Winzenburg
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/work">
              <a className={`transition-colors ${currentPage === 'work' ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'}`}>
                Work
              </a>
            </Link>
            <Link href="/methodology">
              <a className={`transition-colors ${currentPage === 'methodology' ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'}`}>
                Methodology
              </a>
            </Link>
            <Link href="/about">
              <a className={`transition-colors ${currentPage === 'about' ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'}`}>
                About
              </a>
            </Link>
            <Link href="/services">
              <a className={`transition-colors ${currentPage === 'services' ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'}`}>
                Services
              </a>
            </Link>
            <Link href="/articles">
              <a className={`transition-colors ${currentPage === 'articles' ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'}`}>
                Articles
              </a>
            </Link>
            <Link href="/contact">
              <a className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Contact
              </a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-700/50 pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/work">
                <a 
                  className={`transition-colors ${currentPage === 'work' ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'}`}
                  onClick={closeMenu}
                >
                  Work
                </a>
              </Link>
              <Link href="/methodology">
                <a 
                  className={`transition-colors ${currentPage === 'methodology' ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'}`}
                  onClick={closeMenu}
                >
                  Methodology
                </a>
              </Link>
              <Link href="/about">
                <a 
                  className={`transition-colors ${currentPage === 'about' ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'}`}
                  onClick={closeMenu}
                >
                  About
                </a>
              </Link>
              <Link href="/services">
                <a 
                  className={`transition-colors ${currentPage === 'services' ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'}`}
                  onClick={closeMenu}
                >
                  Services
                </a>
              </Link>
              <Link href="/articles">
                <a 
                  className={`transition-colors ${currentPage === 'articles' ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'}`}
                  onClick={closeMenu}
                >
                  Articles
                </a>
              </Link>
              <Link href="/contact">
                <a 
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

