import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Palette, TreePine, ClipboardCheck, Users, RotateCcw } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: '01',
    title: 'Architecture',
    desc: 'We draw with intention — every line considered, every proportion deliberate. Our architectural work transforms raw land and raw vision into spaces that feel both inevitable and extraordinary.',
    icon: Building2,
    image: '/images/4.png',
  },
  {
    num: '02',
    title: 'Interior Design',
    desc: "Great interiors aren't decorated — they're composed. We select every material, texture, and finish with a curator's eye, creating rooms that feel like they could belong to no other home.",
    icon: Palette,
    image: '/images/3.png',
  },
  {
    num: '03',
    title: 'Landscape',
    desc: "The boundary between indoors and outdoors should dissolve. We design landscapes that extend your home's character into the open air — serene, intentional, and deeply connected to the architecture.",
    icon: TreePine,
    image: '/images/7.png',
  },
  {
    num: '04',
    title: 'Consultation',
    desc: 'We guide you through every complexity before a single decision is made — site selection, regulatory approvals, budget strategy, material sourcing. The right advice early saves everything later.',
    icon: ClipboardCheck,
    image: '/images/6.png',
  },
  {
    num: '05',
    title: 'Project Management',
    desc: 'We are your single point of accountability from groundbreak to handover. Rigorous timelines, transparent reporting, and hands-on quality control at every stage of the build.',
    icon: Users,
    image: '/images/5.png',
  },
  {
    num: '06',
    title: 'Renovations',
    desc: 'Existing spaces carry history. Our renovations honor what came before while creating something entirely new — breathing fresh purpose into every room without erasing the soul of the space.',
    icon: RotateCcw,
    image: '/images/8.png',
  },
];

export default function ServicesPage() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        if (item) {
          gsap.fromTo(
            item,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              delay: i * 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/images/1.png" alt="Auriga Homes services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-auriga-charcoal/40" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-6xl text-auriga-ivory font-medium">What We Do</h1>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 lg:py-40 bg-auriga-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-20 md:space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.num}
                  ref={(el) => { itemsRef.current[index] = el; }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:direction-rtl'}`}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="overflow-hidden mb-6">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[350px] md:h-[450px] object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <span className="font-serif text-4xl md:text-5xl text-auriga-brass/30 font-medium block mb-4">
                      {service.num}
                    </span>
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-5 h-5 text-auriga-teak" strokeWidth={1.5} />
                      <h2 className="font-serif text-3xl md:text-4xl text-auriga-charcoal font-medium">{service.title}</h2>
                    </div>
                    <p className="text-auriga-charcoal/60 text-base leading-relaxed font-sans font-light max-w-md">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 bg-auriga-charcoal text-auriga-ivory text-xs uppercase tracking-[0.2em] font-sans font-medium hover:bg-auriga-teak transition-all duration-500"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
