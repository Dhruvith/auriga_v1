import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, PenTool, HardHat, Key } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'We begin by listening, understanding your vision, lifestyle, and the legacy you want to build.',
    icon: MessageSquare,
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Our architects translate your vision into detailed plans, iterating until every space feels perfect.',
    icon: PenTool,
  },
  {
    num: '03',
    title: 'Construction',
    desc: 'Precision-built by our expert teams with complete transparency and on-site quality assurance.',
    icon: HardHat,
  },
  {
    num: '04',
    title: 'Handover',
    desc: 'Your keys, your space, delivered on time with a comprehensive walkthrough and aftercare support.',
    icon: Key,
  },
];

export default function HowWeWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      stepsRef.current.forEach((step, i) => {
        if (step) {
          gsap.fromTo(
            step,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              delay: i * 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 60%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 lg:py-40 bg-auriga-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="mb-16 md:mb-20">
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-auriga-brass mb-4 font-sans font-medium">
            How We Work
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-auriga-charcoal font-medium leading-[1.1]">
            Our process, refined over decades.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                ref={(el) => { stepsRef.current[index] = el; }}
                className="relative p-6 md:p-8 border border-auriga-sand/30 hover:border-auriga-brass/50 transition-all duration-500 group bg-auriga-marble/30"
              >
                <span className="font-serif text-5xl md:text-6xl text-auriga-brass/20 font-medium absolute top-4 right-4">
                  {step.num}
                </span>
                <Icon className="w-6 h-6 text-auriga-teak mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-auriga-charcoal font-medium mb-3">{step.title}</h3>
                <p className="text-sm text-auriga-charcoal/60 leading-relaxed font-sans font-light">{step.desc}</p>
                <div className="absolute bottom-0 left-0 w-0 h-px bg-auriga-brass group-hover:w-full transition-all duration-700" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
