import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      [infoRef, formRef].forEach((ref) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ref.current,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/images/10.png" alt="Auriga Homes contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-auriga-charcoal/40" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-auriga-ivory font-medium leading-[1.1] mb-4">
            Every exceptional home begins with a single conversation.
          </h1>
          <p className="font-serif text-lg text-auriga-sand/80 italic">
            "Every great home starts with a conversation — and great conversations start here."
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 md:py-32 lg:py-40 bg-auriga-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Info */}
            <div ref={infoRef}>
              <div className="mb-10">
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-charcoal/40 font-sans block mb-1">Email</span>
                  <a href="mailto:hello@aurigahomes.in" className="text-lg text-auriga-charcoal font-sans hover:text-auriga-brass transition-colors">
                    hello@aurigahomes.in
                  </a>
                </div>
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-charcoal/40 font-sans block mb-1">Phone</span>
                  <a href="tel:+918904428450" className="text-lg text-auriga-charcoal font-sans hover:text-auriga-brass transition-colors">
                    +91 89044 28450
                  </a>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-charcoal/40 font-sans block mb-1">Address</span>
                  <span className="text-lg text-auriga-charcoal font-sans">Bengaluru, India</span>
                </div>
              </div>

              <div className="mb-10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-charcoal/40 font-sans block mb-3">Social</span>
                <div className="flex gap-6">
                  <a href="#" className="text-sm text-auriga-charcoal/60 font-sans hover:text-auriga-brass transition-colors">Instagram</a>
                  <a href="#" className="text-sm text-auriga-charcoal/60 font-sans hover:text-auriga-brass transition-colors">LinkedIn</a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-auriga-marble/30 border border-auriga-sand/20 p-4 h-[250px] flex items-center justify-center">
                <span className="text-sm text-auriga-charcoal/40 font-sans">Map — Bengaluru, India</span>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="text-center py-20">
                  <p className="font-serif text-2xl text-auriga-charcoal mb-2">Thank you</p>
                  <p className="text-sm text-auriga-charcoal/60 font-sans">We will be in touch shortly.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.15em] text-auriga-charcoal/40 font-sans block mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-border-only w-full text-sm text-auriga-charcoal font-sans"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.15em] text-auriga-charcoal/40 font-sans block mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-border-only w-full text-sm text-auriga-charcoal font-sans"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.15em] text-auriga-charcoal/40 font-sans block mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-border-only w-full text-sm text-auriga-charcoal font-sans"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.15em] text-auriga-charcoal/40 font-sans block mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="input-border-only w-full text-sm text-auriga-charcoal font-sans resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-auriga-charcoal text-auriga-ivory text-xs uppercase tracking-[0.2em] font-sans font-medium hover:bg-auriga-brass hover:text-auriga-charcoal transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
