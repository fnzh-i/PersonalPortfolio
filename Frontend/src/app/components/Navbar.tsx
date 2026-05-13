import React from 'react';

interface NavLink {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const navLinks: NavLink[] = [
    { label: 'About', href: '#' },
    { label: 'Skills', href: '#' },
    { label: 'Stack', href: '#' },
    { label: 'Projects', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-3 rounded-2xl mt-6 mx-auto w-[90%] max-w-[1280px] macos-glass-thick">
      {/* Logo */}
      <div className="font-display-lg text-[32px] font-bold text-on-background tracking-tighter">
        FNSH
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-10 items-center">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-secondary font-medium hover:text-brand-blue transition-all duration-300 text-[15px] tracking-tight"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA Button */}
      <button className="bg-brand-blue text-white px-5 py-2 rounded-full text-[20px] hover:shadow-lg hover:shadow-brand-blue/20 transition-all active:scale-95">
        Let's connect!
      </button>
    </header>
  );
};

export default Navbar;