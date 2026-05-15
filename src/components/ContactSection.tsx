import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Clock, MapPin, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        infoRef.current,
        { y: 50, opacity: 0 },
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

      gsap.fromTo(
        formRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 md:py-32 lg:py-40 bg-auriga-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-20">
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-auriga-brass mb-4 font-sans font-medium">
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-auriga-charcoal font-medium leading-[1.1] mb-6">
            Let's Connect
          </h2>
          <p className="text-auriga-charcoal/70 text-base md:text-lg leading-relaxed max-w-2xl font-sans font-light">
            Every exceptional home begins with a single conversation. Whether you have a detailed brief or just an idea — we want to hear it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div ref={infoRef}>
            <blockquote className="mb-10">
              <p className="font-serif text-xl md:text-2xl text-auriga-charcoal/80 italic leading-relaxed">
                "Every great home starts with a conversation — and great conversations start here."
              </p>
            </blockquote>

            <div className="space-y-6 mb-10">
              <a
                href="mailto:hello@aurigahomes.in"
                className="flex items-center gap-4 group"
              >
                <Mail className="w-5 h-5 text-auriga-brass group-hover:text-auriga-teak transition-colors" strokeWidth={1.5} />
                <span className="text-auriga-charcoal/80 font-sans group-hover:text-auriga-teak transition-colors">hello@aurigahomes.in</span>
              </a>
              <a
                href="tel:+918904428450"
                className="flex items-center gap-4 group"
              >
                <Phone className="w-5 h-5 text-auriga-brass group-hover:text-auriga-teak transition-colors" strokeWidth={1.5} />
                <span className="text-auriga-charcoal/80 font-sans group-hover:text-auriga-teak transition-colors">+91 89044 28450</span>
              </a>
              <div className="flex items-center gap-4">
                <Clock className="w-5 h-5 text-auriga-brass" strokeWidth={1.5} />
                <div>
                  <span className="text-auriga-charcoal/80 font-sans block">Monday — Saturday</span>
                  <span className="text-auriga-charcoal/50 font-sans text-sm">9:00 AM – 7:00 PM IST</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-auriga-brass" strokeWidth={1.5} />
                <span className="text-auriga-charcoal/60 font-sans">Bengaluru, India</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-charcoal/40 font-sans font-medium block mb-3">
                Follow Along
              </span>
              <div className="flex gap-4">
                {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-sm text-auriga-charcoal/60 hover:text-auriga-teak transition-colors font-sans"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-auriga-marble/30 p-8 md:p-10 border border-auriga-sand/20"
          >
            <h3 className="font-serif text-xl text-auriga-charcoal font-medium mb-6">
              Tell us about your project
            </h3>
            <p className="text-sm text-auriga-charcoal/50 font-sans font-light mb-8">
              We'll get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 bg-auriga-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-5 h-5 text-auriga-green" strokeWidth={1.5} />
                </div>
                <p className="font-serif text-lg text-auriga-charcoal mb-2">Message Sent</p>
                <p className="text-sm text-auriga-charcoal/60 font-sans">We'll be in touch shortly.</p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.15em] text-auriga-charcoal/50 font-sans block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-auriga-ivory border border-auriga-sand/30 text-auriga-charcoal text-sm font-sans focus:border-auriga-brass focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.15em] text-auriga-charcoal/50 font-sans block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-auriga-ivory border border-auriga-sand/30 text-auriga-charcoal text-sm font-sans focus:border-auriga-brass focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.15em] text-auriga-charcoal/50 font-sans block mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-auriga-ivory border border-auriga-sand/30 text-auriga-charcoal text-sm font-sans focus:border-auriga-brass focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="group relative w-full px-8 py-4 bg-auriga-charcoal text-auriga-ivory text-xs uppercase tracking-[0.2em] font-sans font-medium overflow-hidden transition-all duration-500 hover:bg-auriga-teak"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-3 h-3" strokeWidth={1.5} />
                  </span>
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
