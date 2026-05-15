import { useEffect, useState } from 'react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-gray-light bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[11px] tracking-[0.2em] text-charcoal font-sans uppercase">
            Auriga Homes
          </span>

          <span className="text-[10px] text-gray font-sans">
            &copy; 2025 Auriga Homes. All rights reserved.
          </span>

          <button
            onClick={scrollToTop}
            className={`text-[10px] uppercase tracking-[0.15em] text-gray font-sans hover:text-charcoal transition-all duration-300 ${
              showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
