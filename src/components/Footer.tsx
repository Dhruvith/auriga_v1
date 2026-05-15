import { Mail, Phone, ExternalLink } from 'lucide-react';

const navigateLinks = [
  { label: 'Home', href: '#' },
  { label: 'Our Story', href: '#' },
  { label: 'What We Do', href: '#' },
  { label: 'Designs', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/aurigaconstructions' },
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-auriga-charcoal text-auriga-ivory/80 relative overflow-hidden">
      {/* Subtle decorative background using image 9 */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/images/9.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-auriga-brass text-xl tracking-[0.15em] font-serif font-medium">
                  AURIGA
                </span>
                <span className="text-[9px] text-auriga-brass/70 tracking-[0.3em] uppercase font-sans mt-1">
                  Homes
                </span>
              </div>
              <p className="text-auriga-ivory/50 text-sm leading-relaxed font-sans font-light max-w-xs">
                Building dreams with precision and grace. Bengaluru luxury homes crafted with intention.
              </p>
            </div>

            {/* Navigate Column */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.25em] text-auriga-brass font-sans font-medium mb-6">
                Navigate
              </h4>
              <ul className="space-y-3">
                {navigateLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-auriga-ivory/60 hover:text-auriga-sand transition-colors duration-300 font-sans font-light"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.25em] text-auriga-brass font-sans font-medium mb-6">
                Connect
              </h4>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-auriga-ivory/60 hover:text-auriga-sand transition-colors duration-300 font-sans font-light group"
                    >
                      <ExternalLink className="w-3 h-3 text-auriga-brass/60 group-hover:text-auriga-brass transition-colors" strokeWidth={1.5} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.25em] text-auriga-brass font-sans font-medium mb-6">
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:hello@aurigahomes.in"
                    className="inline-flex items-center gap-2 text-sm text-auriga-ivory/60 hover:text-auriga-sand transition-colors duration-300 font-sans font-light group"
                  >
                    <Mail className="w-3.5 h-3.5 text-auriga-brass/60 group-hover:text-auriga-brass transition-colors" strokeWidth={1.5} />
                    hello@aurigahomes.in
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918904428450"
                    className="inline-flex items-center gap-2 text-sm text-auriga-ivory/60 hover:text-auriga-sand transition-colors duration-300 font-sans font-light group"
                  >
                    <Phone className="w-3.5 h-3.5 text-auriga-brass/60 group-hover:text-auriga-brass transition-colors" strokeWidth={1.5} />
                    +91 89044 28450
                  </a>
                </li>
                <li>
                  <span className="text-sm text-auriga-ivory/40 font-sans font-light">
                    Bengaluru, India
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-auriga-sand/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-auriga-ivory/40 font-sans tracking-wide">
              © 2025 Auriga Homes. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[11px] text-auriga-ivory/40 hover:text-auriga-sand transition-colors font-sans">
                Privacy Policy
              </a>
              <a href="#" className="text-[11px] text-auriga-ivory/40 hover:text-auriga-sand transition-colors font-sans">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
