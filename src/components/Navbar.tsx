import { useEffect, useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'What We Do', href: '#services' },
  { label: 'Work', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Our Story', href: '#founders' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', delay: 0.3 }
      );
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && href !== '#') {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileOpen(false);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-2 group">
              <span className={`text-[11px] tracking-[0.3em] uppercase font-sans font-medium transition-colors duration-500 ${scrolled ? 'text-offwhite' : 'text-offwhite'}`}>
                Auriga Homes
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-[11px] uppercase tracking-[0.18em] font-sans transition-colors duration-300 relative group ${
                    scrolled ? 'text-offwhite/70 hover:text-offwhite' : 'text-offwhite/70 hover:text-offwhite'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
                </a>
              ))}
            </div>

            <button
              className={`lg:hidden p-2 transition-colors duration-500 ${scrolled ? 'text-offwhite' : 'text-offwhite'}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-2xl uppercase tracking-[0.2em] text-offwhite/80 hover:text-gold transition-colors font-sans"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
