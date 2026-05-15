import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

interface NavbarProps {
  isHome: boolean;
}

const navLinks = [
  { label: 'Home', href: '/', scrollTo: null },
  { label: 'About', href: '/about', scrollTo: '#our-story' },
  { label: 'Services', href: '/services', scrollTo: '#services' },
  { label: 'Projects', href: '/projects', scrollTo: '#designs' },
  { label: 'Contact', href: '/contact', scrollTo: '#contact' },
];

export default function Navbar({ isHome }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
      );
    }
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent, scrollTo: string | null) => {
    if (isHome && scrollTo) {
      e.preventDefault();
      const element = document.querySelector(scrollTo);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled || !isHome
            ? 'glass-ivory shadow-sm border-b border-auriga-sand/30'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="text-auriga-brass text-xl tracking-[0.15em] font-serif font-medium">
                AURIGA
              </span>
              <span className="text-[10px] text-auriga-brass/80 tracking-[0.3em] uppercase font-sans mt-1">
                Homes
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.scrollTo)}
                  className={`text-xs uppercase tracking-[0.18em] transition-colors duration-300 relative group ${
                    location.pathname === link.href
                      ? 'text-auriga-charcoal'
                      : 'text-auriga-charcoal/80 hover:text-auriga-teak'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-auriga-brass transition-all duration-500 ${
                    location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            <button
              className="lg:hidden p-2 text-auriga-charcoal"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-auriga-charcoal transition-all duration-500 flex flex-col items-center justify-center gap-8 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            onClick={(e) => handleNavClick(e, link.scrollTo)}
            className="text-2xl uppercase tracking-[0.2em] text-auriga-ivory/80 hover:text-auriga-brass transition-colors font-sans"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
