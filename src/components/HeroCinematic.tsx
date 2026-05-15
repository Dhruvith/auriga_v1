import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroCinematic() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slow dolly-in on scroll
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1 },
          {
            scale: 1.15,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }

      // Text reveal timeline
      const tl = gsap.timeline({ delay: 0.8 });

      if (labelRef.current) {
        tl.fromTo(
          labelRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
        );
      }

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
          '-=0.4'
        );
      }

      if (taglineRef.current) {
        tl.fromTo(
          taglineRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
          '-=0.6'
        );
      }

      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.4'
        );
      }

      if (scrollIndicatorRef.current) {
        tl.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          '-=0.2'
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
      {/* Background Image with slow zoom */}
      <div className="absolute inset-0 z-0">
        <div
          ref={imageRef}
          className="absolute inset-0 will-change-transform"
          style={{ transformOrigin: 'center center' }}
        >
          <img
            src="/images/1.png"
            alt="Grand interior hallway of a luxury Indian home with arches and marble"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Warm overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-auriga-charcoal/40 via-auriga-charcoal/20 to-auriga-charcoal/60" />
      </div>

      {/* Hero Content - Centered */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <span
          ref={labelRef}
          className="inline-block text-[11px] uppercase tracking-[0.35em] text-auriga-sand/90 mb-6 font-sans font-medium"
        >
          Bengaluru Luxury Homes
        </span>

        <h1
          ref={titleRef}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-auriga-ivory font-medium leading-[0.95] tracking-tight mb-6"
        >
          AURIGA HOMES
        </h1>

        <p
          ref={taglineRef}
          className="font-serif text-xl sm:text-2xl md:text-3xl text-auriga-sand/95 italic font-normal mb-8"
        >
          Building dreams with precision and grace.
        </p>

        <p
          ref={subtextRef}
          className="text-sm sm:text-base text-auriga-ivory/70 max-w-xl mx-auto mb-10 leading-relaxed font-sans font-light"
        >
          Precision-led construction, curated architecture, and graceful homes built with intention.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#collaborations"
            className="group relative px-8 py-3.5 border border-auriga-brass text-auriga-brass text-xs uppercase tracking-[0.2em] font-sans font-medium overflow-hidden transition-all duration-500 hover:text-auriga-charcoal"
          >
            <span className="absolute inset-0 bg-auriga-brass transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10">Explore Collaborations</span>
          </a>

          <a
            href="#contact"
            className="px-8 py-3.5 text-auriga-ivory/90 text-xs uppercase tracking-[0.2em] font-sans font-medium hover:text-auriga-ivory transition-colors duration-300 underline underline-offset-8 decoration-auriga-brass/50 hover:decoration-auriga-brass"
          >
            Start the Conversation
          </a>
        </div>
      </div>

      {/* Scroll Indicator - Mini elevator style */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-auriga-sand/70 font-sans">
          Scroll
        </span>
        <div className="w-px h-12 bg-auriga-sand/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-auriga-brass animate-bounce" />
        </div>
      </div>
    </section>
  );
}
