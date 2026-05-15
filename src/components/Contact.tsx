import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contentRef.current?.classList.add('opacity-100', 'translate-y-0');
          contentRef.current?.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
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
    <section ref={sectionRef} id="contact" className="py-24 md:py-32 lg:py-40 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={contentRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-normal leading-[1.15] mb-6">
                Every exceptional home begins with a single conversation.
              </h2>
              <blockquote className="mb-10">
                <p className="font-serif text-base md:text-lg text-charcoal/70 italic leading-relaxed">
                  "Every great home starts with a conversation — and great conversations start here."
                </p>
              </blockquote>

              <div className="space-y-4 mb-10">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray font-sans block mb-1">Email</span>
                  <a href="mailto:hello@aurigahomes.in" className="text-sm text-charcoal font-sans hover:text-gold transition-colors">
                    hello@aurigahomes.in
                  </a>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray font-sans block mb-1">Phone</span>
                  <a href="tel:+918904428450" className="text-sm text-charcoal font-sans hover:text-gold transition-colors">
                    +91 89044 28450
                  </a>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray font-sans block mb-1">Address</span>
                  <span className="text-sm text-charcoal font-sans">Bengaluru, India</span>
                </div>
              </div>

              <div className="flex gap-6">
                <a href="#" className="text-[11px] uppercase tracking-[0.15em] text-gray font-sans hover:text-charcoal transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-[11px] uppercase tracking-[0.15em] text-gray font-sans hover:text-charcoal transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="text-center py-20">
                  <p className="font-serif text-2xl text-charcoal mb-2">Thank you</p>
                  <p className="text-sm text-gray font-sans">We will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.15em] text-gray font-sans block mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-border-only w-full text-sm text-charcoal font-sans"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.15em] text-gray font-sans block mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-border-only w-full text-sm text-charcoal font-sans"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.15em] text-gray font-sans block mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-border-only w-full text-sm text-charcoal font-sans"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.15em] text-gray font-sans block mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="input-border-only w-full text-sm text-charcoal font-sans resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-charcoal text-gold text-[11px] uppercase tracking-[0.2em] font-sans font-medium hover:bg-gold hover:text-charcoal transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
