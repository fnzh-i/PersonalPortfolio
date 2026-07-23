import React from 'react';
import { Link, useLocation } from 'react-router';

interface NavLink {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks: NavLink[] = [
    { label: 'About', href: '/' },
    { label: 'Skills', href: '/skills' },
    { label: 'Stack', href: '/stack' },
    { label: 'Projects', href: '/projects' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-2.5 rounded-full mt-6 mx-auto w-[90%] max-w-[1280px] ios16-glass-navbar glass-edge-shimmer transition-all duration-300">
      {/* Brand / Logo */}
      <Link 
        to="/" 
        className="font-display-lg text-[26px] font-bold text-on-background tracking-tighter hover:text-brand-blue transition-colors px-3 py-1"
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

      {/* CTA Button */}
      <button className="bg-brand-blue text-white px-5 py-2 rounded-full text-[14px] font-semibold hover:shadow-lg hover:shadow-brand-blue/25 hover:bg-brand-blue/90 active:scale-95 transition-all">
        Let's connect!
      </button>
    </header>
  );
};

export default Navbar;