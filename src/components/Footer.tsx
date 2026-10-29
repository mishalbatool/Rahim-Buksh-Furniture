import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, MapPin, Instagram, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl, FURNITURE_COLLECTIONS } from '../data/furnitureData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Collections', path: '/collections' },
    { label: 'Our Craftsmanship', path: '/craftsmanship' },
    { label: 'About Us', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-[#38271F] text-[#F7F3EB] pt-16 sm:pt-20 pb-12 border-t-2 border-[#B79A65]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#B79A65]/20">
          {/* Brand Info & Mission (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-sm border border-[#B79A65] flex items-center justify-center bg-[#EAE0D0]/10 group-hover:bg-[#B79A65]/20 transition-colors">
                <svg
                  className="w-4 h-4 text-[#B79A65]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path d="M4 18v3M20 18v3M4 14h16M3 9h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1z" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white block">
                  Rahim Buksh
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#B79A65] font-semibold block -mt-1">
                  Chinioti Furniture
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#F7F3EB]/75 font-light leading-relaxed max-w-sm">
              Direct factory and furniture manufacturer based in Chiniot, Pakistan. Dedicated to authentic hand-carved Sheesham woodwork, royal bridal sets, and tailored luxury interiors.
            </p>

            <div className="pt-2 flex items-center gap-3">
              {/* Instagram */}
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#76513B]/50 hover:bg-[#B79A65] hover:text-[#38271F] flex items-center justify-center text-[#EAE0D0] transition-colors border border-[#B79A65]/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B79A65]"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* TikTok */}
              <a
                href={BUSINESS_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#76513B]/50 hover:bg-[#B79A65] hover:text-[#38271F] flex items-center justify-center text-[#EAE0D0] transition-colors border border-[#B79A65]/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B79A65]"
                aria-label="TikTok profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>

              {/* WhatsApp direct */}
              <a
                href={createWhatsAppUrl('Assalam-o-Alaikum, I am contacting Rahim Buksh Furniture through your website footer.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#76513B]/50 hover:bg-[#B79A65] hover:text-[#38271F] flex items-center justify-center text-[#EAE0D0] transition-colors border border-[#B79A65]/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B79A65]"
                aria-label="Direct WhatsApp message"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B79A65]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#F7F3EB]/80 font-light">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-[#B79A65] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Furniture Collections Links (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B79A65]">
              Furniture Collections
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-xs text-[#F7F3EB]/80 font-light">
              {FURNITURE_COLLECTIONS.map((c) => (
                <li key={c.id}>
                  <Link
                    to="/collections"
                    className="hover:text-[#B79A65] transition-colors inline-block py-0.5 line-clamp-1"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Inquiry (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B79A65]">
              Factory Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#F7F3EB]/80 font-light leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B79A65] shrink-0 mt-0.5" />
                <span>Near Chungi No. 1, Mahar Anwar Estate Road, opposite Lahore Road, Chiniot, Punjab 35400</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B79A65] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#B79A65] shrink-0" />
                <span>WhatsApp: +92 324 6211612</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={createWhatsAppUrl('Assalam-o-Alaikum, I would like to inquire about furniture prices and customization options.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-[#38271F] bg-[#EAE0D0] hover:bg-white rounded transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#76513B]" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F3EB]/60 font-light">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Direct Manufacturer in Chiniot, Punjab</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#B79A65] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B79A65]"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
