import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' },
          '-=0.4'
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' },
          '-=0.4'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/1.png"
          alt="Modern luxury home interior with grand hallway and natural light"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/30" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" style={{ mixBlendMode: 'difference' }}>
        <h1
          ref={titleRef}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-offwhite font-normal leading-[1.05] mb-6"
        >
          We Build <em className="italic">Dreams</em> Into Reality
        </h1>

        <p
          ref={subtitleRef}
          className="text-sm sm:text-base text-offwhite/80 max-w-xl mx-auto mb-10 leading-relaxed font-sans font-light tracking-wide"
        >
          Auriga Homes crafts residences that endure — where architectural precision meets timeless elegance.
        </p>

        <a
          ref={ctaRef}
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block text-[11px] uppercase tracking-[0.2em] text-offwhite/80 font-sans border-b border-offwhite/40 pb-1 hover:border-gold hover:text-gold transition-all duration-300"
        >
          Explore Our Work
        </a>
      </div>
    </section>
  );
}
