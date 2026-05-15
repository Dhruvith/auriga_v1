import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Palette, TreePine, ClipboardCheck, Users, RotateCcw } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: '01',
    title: 'Architecture',
    desc: 'We draw with intention — every line considered, every proportion deliberate. Our architectural work transforms raw land and raw vision into spaces that feel both inevitable and extraordinary.',
    icon: Building2,
  },
  {
    num: '02',
    title: 'Interior Design',
    desc: "Great interiors aren't decorated — they're composed. We select every material, texture, and finish with a curator's eye, creating rooms that feel like they could belong to no other home.",
    icon: Palette,
  },
  {
    num: '03',
    title: 'Landscape',
    desc: "The boundary between indoors and outdoors should dissolve. We design landscapes that extend your home's character into the open air — serene, intentional, and deeply connected to the architecture.",
    icon: TreePine,
  },
  {
    num: '04',
    title: 'Consultation',
    desc: 'We guide you through every complexity before a single decision is made — site selection, regulatory approvals, budget strategy, material sourcing. The right advice early saves everything later.',
    icon: ClipboardCheck,
  },
  {
    num: '05',
    title: 'Project Management',
    desc: 'We are your single point of accountability from groundbreak to handover. Rigorous timelines, transparent reporting, and hands-on quality control at every stage of the build.',
    icon: Users,
  },
  {
    num: '06',
    title: 'Renovations',
    desc: 'Existing spaces carry history. Our renovations honor what came before while creating something entirely new — breathing fresh purpose into every room without erasing the soul of the space.',
    icon: RotateCcw,
  },
];

const benefits = [
  'Transparent BOQ-based pricing',
  'Structured project management',
  'Clear communication and updates',
  'Architect + construction coordination',
  'Single point of responsibility',
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const benefitsRef = useRef<HTMLDivElement>(null);

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

      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: i * 0.1,
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

      gsap.fromTo(
        benefitsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative py-24 md:py-32 lg:py-40 bg-auriga-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="mb-16 md:mb-20">
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-auriga-brass mb-4 font-sans font-medium">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-auriga-charcoal font-medium leading-[1.1] mb-6">
            Our Services
          </h2>
          <p className="text-auriga-charcoal/70 text-base md:text-lg leading-relaxed max-w-2xl font-sans font-light">
            End-to-end creation of exceptional spaces — from the first conversation to the final finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.num}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group p-6 md:p-8 bg-auriga-marble/30 border border-auriga-sand/20 hover:border-auriga-brass/30 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="w-5 h-5 text-auriga-teak" strokeWidth={1.5} />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-brass font-sans font-medium">
                    {service.num}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-auriga-charcoal font-medium mb-3">{service.title}</h3>
                <p className="text-sm text-auriga-charcoal/60 leading-relaxed font-sans font-light">{service.desc}</p>
              </div>
            );
          })}
        </div>

        <div ref={benefitsRef} className="bg-auriga-marble/50 p-8 md:p-12 lg:p-16 border border-auriga-sand/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-auriga-brass font-sans font-medium block mb-4">
                Why Auriga
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-auriga-charcoal font-medium mb-4">
                The Auriga Difference
              </h3>
              <p className="text-auriga-charcoal/60 text-sm leading-relaxed font-sans font-light">
                We have built our process around one thing, making the experience of building your home as clear, smooth, and trustworthy as the end result.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-auriga-brass rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-auriga-charcoal/70 font-sans font-light">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
         </div>
      </div>
    </section>
  );
}
