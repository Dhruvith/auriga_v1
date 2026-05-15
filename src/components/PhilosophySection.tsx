import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const centerLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text reveals
      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'top 40%',
          toggleActions: 'play none none reverse',
        },
      });

      if (eyebrowRef.current) {
        textTl.fromTo(
          eyebrowRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
        );
      }
      if (headingRef.current) {
        textTl.fromTo(
          headingRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
          '-=0.5'
        );
      }
      if (bodyRef.current) {
        textTl.fromTo(
          bodyRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
          '-=0.6'
        );
      }

      // Split screen alignment animation
      const splitTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'center center',
          scrub: 1,
        },
      });

      if (leftImageRef.current) {
        splitTl.fromTo(
          leftImageRef.current,
          { x: -80, opacity: 0.6 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        );
      }
      if (rightImageRef.current) {
        splitTl.fromTo(
          rightImageRef.current,
          { x: 80, opacity: 0.6 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        );
      }
      if (centerLineRef.current) {
        splitTl.fromTo(
          centerLineRef.current,
          { scaleY: 0 },
          { scaleY: 1, ease: 'none' },
          0.2
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative py-24 md:py-32 lg:py-40 bg-auriga-ivory overflow-hidden"
    >
      {/* Text Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center mb-16 md:mb-24">
        <span
          ref={eyebrowRef}
          className="inline-block text-[10px] uppercase tracking-[0.3em] text-auriga-brass mb-6 font-sans font-medium"
        >
          Our Philosophy
        </span>
        <h2
          ref={headingRef}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-auriga-charcoal font-medium leading-[1.1] mb-8"
        >
          A curated circle
        </h2>
        <p
          ref={bodyRef}
          className="text-auriga-charcoal/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-sans font-light"
        >
          At Auriga, we believe exceptional homes are never built in isolation. Architecture and construction must speak the same language, sharing values around precision, materiality, and the human experience of space.
          <br /><br />
          We collaborate only with firms whose standards match our own. The result is a seamless creative process for our clients, from the first sketch to the final finish.
        </p>
      </div>

      {/* Split Screen Visual */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
          {/* Left Image */}
          <div
            ref={leftImageRef}
            className="relative h-[400px] md:h-[550px] overflow-hidden"
          >
            <img
              src="/images/3.png"
              alt="Architectural interior with jaali screen and marble"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-auriga-ivory/20 md:to-transparent" />
            
            {/* Floating Label */}
            <div className="absolute bottom-6 left-6 bg-auriga-ivory/90 backdrop-blur-sm px-5 py-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-auriga-charcoal/60 font-sans block mb-1">Vision</span>
              <span className="font-serif text-lg text-auriga-charcoal">Architectural Design</span>
            </div>
          </div>

          {/* Center Alignment Line */}
          <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-10 items-center justify-center">
            <div
              ref={centerLineRef}
              className="w-px h-full bg-auriga-brass/40 origin-top"
            />
            <div className="absolute bg-auriga-brass w-2 h-2 rotate-45" />
          </div>

          {/* Right Image */}
          <div
            ref={rightImageRef}
            className="relative h-[400px] md:h-[550px] overflow-hidden"
          >
            <img
              src="/images/7.png"
              alt="Courtyard with water feature and stone columns"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-auriga-ivory/20 md:to-transparent" />
            
            {/* Floating Label */}
            <div className="absolute bottom-6 right-6 bg-auriga-ivory/90 backdrop-blur-sm px-5 py-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-auriga-charcoal/60 font-sans block mb-1">Craft</span>
              <span className="font-serif text-lg text-auriga-charcoal">Construction Detail</span>
            </div>
          </div>
        </div>

        {/* Unifying Caption */}
        <div className="text-center mt-10">
          <p className="text-sm text-auriga-charcoal/50 font-sans italic tracking-wide">
            Architecture and construction, speaking one language.
          </p>
        </div>
      </div>
    </section>
  );
}
