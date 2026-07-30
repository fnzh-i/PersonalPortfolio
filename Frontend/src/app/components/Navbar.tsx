import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';

interface NavLink {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: NavLink[] = [
    { label: 'About', href: '/' },
    { label: 'Skills', href: '/skills' },
    { label: 'Stack', href: '/stack' },
    { label: 'Projects', href: '/projects' },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mt-6 mx-auto w-[90%] max-w-[1280px] ios16-glass-navbar glass-edge-shimmer rounded-[28px] transition-all duration-300">
      {/* Top Bar Container */}
      <div className="flex justify-between items-center px-6 py-2.5">
        {/* Brand / Logo */}
        <Link 
          to="/" 
          onClick={closeMenu}
          className="font-display-lg text-[26px] font-bold text-on-background tracking-tighter hover:text-brand-blue transition-colors px-1"
        >
          FN.SH
        </Link>

        {/* Desktop Navigation Track */}
        <nav className="hidden md:flex gap-1 items-center bg-white/20 p-1 rounded-full border border-white/30 backdrop-blur-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`px-5 py-1.5 rounded-full text-[14px] font-medium tracking-tight transition-all duration-300 ${
                  isActive
                    ? 'bg-white/80 text-brand-blue shadow-[0_2px_8px_rgba(0,0,0,0.08)] font-semibold'
                    : 'text-secondary hover:text-on-background hover:bg-white/30'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Desktop CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* CTA Button (Visible on desktop & larger screens) */}
          <button className="hidden sm:block bg-brand-blue text-white px-5 py-2 rounded-full text-[14px] font-semibold hover:shadow-lg hover:shadow-brand-blue/25 hover:bg-brand-blue/90 active:scale-95 transition-all">
            Let's connect!
          </button>

          {/* Hamburger Toggle Button (Mobile Only) */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-full bg-white/30 border border-white/50 text-on-background hover:bg-white/50 transition-all active:scale-95 flex items-center justify-center"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Track */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 border-t border-white/20">
          <nav className="flex flex-col gap-2 bg-white/40 p-2 rounded-2xl border border-white/40 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={closeMenu}
                  className={`px-4 py-2.5 rounded-xl text-[15px] font-medium transition-all ${
                    isActive
                      ? 'bg-white text-brand-blue font-semibold shadow-sm'
                      : 'text-on-background hover:bg-white/40'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              onClick={closeMenu}
              className="mt-1 w-full bg-brand-blue text-white py-2.5 rounded-xl text-[14px] font-semibold hover:bg-brand-blue/90 transition-all text-center"
            >
              Let's connect!
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;