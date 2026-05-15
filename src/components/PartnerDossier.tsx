import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function PartnerDossier() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance
      gsap.fromTo(
        cardRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Name reveal
      gsap.fromTo(
        nameRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Count animation on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 60%',
        onEnter: () => {
          let start = 0;
          const end = 4;
          const duration = 2000;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            const current = Math.floor(start + (end - start) * eased);
            setCount(current);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Hover animation for blueprint lines
  useEffect(() => {
    if (cardRef.current) {
      const lines = cardRef.current.querySelectorAll('.blueprint-line');
      if (hovered) {
        gsap.to(lines, {
          strokeDashoffset: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power2.out',
        });
      } else {
        gsap.to(lines, {
          strokeDashoffset: 300,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power2.in',
        });
      }
    }
  }, [hovered]);

  return (
    <section
      ref={sectionRef}
      id="collaborations"
      className="relative py-24 md:py-32 lg:py-40 bg-auriga-marble overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-auriga-brass mb-4 font-sans font-medium">
              Our Partners
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-auriga-charcoal font-medium leading-[1.1]">
              The firms we trust
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-5xl font-serif text-auriga-brass font-medium">1</span>
            <span className="text-xs uppercase tracking-[0.2em] text-auriga-charcoal/50 font-sans">collaborator</span>
          </div>
        </div>
      </div>

      {/* Partner Dossier Card */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={cardRef}
          className="relative bg-auriga-marble/30 overflow-hidden cursor-pointer group border border-auriga-sand/40"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/4.png"
              alt="Luxury villa exterior at dusk"
              className={`w-full h-full object-cover transition-transform duration-[2s] ease-out ${
                hovered ? 'scale-110' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-auriga-ivory via-auriga-ivory/80 to-auriga-ivory/40" />
          </div>

          {/* Blueprint SVG Overlay */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
            viewBox="0 0 800 600"
            preserveAspectRatio="none"
          >
            <line
              x1="0" y1="100" x2="800" y2="100"
              stroke="#C6A15B"
              strokeWidth="0.5"
              className="blueprint-line"
              strokeDasharray="300"
              strokeDashoffset="300"
            />
            <line
              x1="0" y1="300" x2="800" y2="300"
              stroke="#C6A15B"
              strokeWidth="0.5"
              className="blueprint-line"
              strokeDasharray="300"
              strokeDashoffset="300"
            />
            <line
              x1="0" y1="500" x2="800" y2="500"
              stroke="#C6A15B"
              strokeWidth="0.5"
              className="blueprint-line"
              strokeDasharray="300"
              strokeDashoffset="300"
            />
            <line
              x1="200" y1="0" x2="200" y2="600"
              stroke="#C6A15B"
              strokeWidth="0.5"
              className="blueprint-line"
              strokeDasharray="300"
              strokeDashoffset="300"
            />
            <line
              x1="600" y1="0" x2="600" y2="600"
              stroke="#C6A15B"
              strokeWidth="0.5"
              className="blueprint-line"
              strokeDasharray="300"
              strokeDashoffset="300"
            />
            <rect
              x="250" y="150" width="300" height="300"
              fill="none"
              stroke="#C6A15B"
              strokeWidth="0.5"
              className="blueprint-line"
              strokeDasharray="1200"
              strokeDashoffset="1200"
            />
          </svg>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16 min-h-[600px] md:min-h-[700px] flex flex-col justify-end">
            {/* Material Swatches - slide in on hover */}
            <div
              className={`flex gap-3 mb-8 transition-all duration-700 ${
                hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-12 h-12 rounded-full border border-auriga-sand/30 bg-auriga-marble shadow-lg" title="Warm Marble" />
              <div className="w-12 h-12 rounded-full border border-auriga-sand/30 bg-auriga-teak shadow-lg" title="Teak Wood" />
              <div className="w-12 h-12 rounded-full border border-auriga-sand/30 bg-auriga-brass shadow-lg" title="Brass Gold" />
              <div className="w-12 h-12 rounded-full border border-auriga-sand/30 bg-auriga-terracotta shadow-lg" title="Terracotta" />
            </div>

            {/* Tagline - appears like gallery caption */}
            <div
              className={`transition-all duration-700 delay-100 ${
                hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <span className="text-auriga-brass text-xs uppercase tracking-[0.25em] font-sans">
                Architecture as Art
              </span>
            </div>

            {/* Partner Name */}
            <h3
              ref={nameRef}
              className="font-serif text-4xl md:text-5xl lg:text-7xl text-auriga-charcoal font-medium mt-4 mb-6 leading-[1.05]"
            >
              Studio Spectra
            </h3>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Layers className="w-4 h-4 text-auriga-brass mt-0.5" strokeWidth={1.5} />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-charcoal/50 font-sans block">Type</span>
                  <span className="text-sm text-auriga-charcoal/90 font-sans">Contemporary Residential & Commercial Design</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-auriga-brass mt-0.5" strokeWidth={1.5} />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-charcoal/50 font-sans block">Founded</span>
                  <span className="text-sm text-auriga-charcoal/90 font-sans">2025</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-auriga-brass mt-0.5" strokeWidth={1.5} />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-charcoal/50 font-sans block">Based In</span>
                  <span className="text-sm text-auriga-charcoal/90 font-sans">Bengaluru, India</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full border border-auriga-brass flex items-center justify-center mt-0.5">
                  <span className="text-[8px] text-auriga-brass font-sans">#</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-charcoal/50 font-sans block">Projects Together</span>
                  <span ref={countRef} className="text-sm text-auriga-charcoal/90 font-sans font-medium">
                    {count}
                  </span>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="max-w-3xl">
              <p className="text-auriga-charcoal/70 text-sm md:text-base leading-relaxed font-sans font-light mb-4">
                Studio Spectra is a full-service architecture firm rooted in the belief that every structure should speak. Founded by architects with a decade of practice across residential, hospitality, and cultural projects, they bring a rare synthesis of conceptual rigour and liveable warmth to every design they touch.
              </p>
              <p className="text-auriga-charcoal/60 text-sm leading-relaxed font-sans font-light">
                Studio Spectra leads the architectural vision on select Auriga projects, from initial site studies and spatial planning through to construction documentation. Their ability to translate a client's lifestyle into form is what drew us to them.
              </p>
            </div>

            {/* Services Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {['Residential Architecture', 'Interior Architecture', 'Space Planning', 'Material Curation'].map((service) => (
                <span
                  key={service}
                  className="px-3 py-1.5 border border-auriga-sand/40 text-[10px] uppercase tracking-[0.15em] text-auriga-charcoal/70 font-sans"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
