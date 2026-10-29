import React from 'react';
import { ArrowDown, MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/furnitureData';

interface HeroProps {
  onOpenCustomQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCustomQuote }) => {
  const whatsappDesignUrl = createWhatsAppUrl(
    'Assalam-o-Alaikum, I would like to discuss a custom furniture design with Rahim Buksh Furniture.'
  );

  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#38271F]">
      {/* Background Hero Image with Subtle Zoom & Refined Scrim */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/hero-bedroom.jpg"
            alt="Royal Chinioti Handcrafted Bedroom Suite"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] transition-transform duration-1000 ease-out"
          />
          {/* Subtle multi-stop luxury gradient scrim for pristine text readability without washing out the wood */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#38271F] via-[#38271F]/65 to-[#38271F]/40" />
          <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-[#38271F]/30 to-[#38271F]/70" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          {/* Small label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 rounded-full bg-[#38271F]/80 border border-[#B79A65]/40 backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B79A65]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#EAE0D0] uppercase font-sans">
              CHINIOT&apos;S HERITAGE OF FINE WOODWORK
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.15] text-balance max-w-4xl mx-auto drop-shadow-sm">
            Where Timeless Craftsmanship <br className="hidden sm:inline" />
            Meets Royal Living
          </h1>

          {/* Supporting Text */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-[#F7F3EB]/90 max-w-2xl mx-auto font-light leading-relaxed text-balance">
            Discover handcrafted Chinioti furniture, exquisite wood carvings, and bespoke designs
            created by a family heritage dedicated to quality and elegance.
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto">
            {/* Primary CTA */}
            <a
              href="#collections"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#38271F] bg-[#EAE0D0] hover:bg-white rounded transition-all shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B79A65]"
            >
              <span>Explore Our Collections</span>
              <ArrowDown className="w-4 h-4 text-[#76513B]" />
            </a>

            {/* Secondary CTA */}
            <a
              href={whatsappDesignUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#38271F]/80 hover:bg-[#76513B] border border-[#B79A65]/60 rounded transition-all backdrop-blur-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B79A65]"
            >
              <MessageCircle className="w-4 h-4 text-[#B79A65]" />
              <span>Discuss Your Design</span>
            </a>
          </div>

          {/* Subtle Quick Consultation Hook */}
          <div className="mt-8 pt-6 border-t border-[#B79A65]/20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#EAE0D0]/80">
            <div className="flex items-center gap-2">
              <span className="text-[#B79A65] font-serif text-sm">✦</span>
              <span>Direct Factory in Chiniot</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#B79A65] font-serif text-sm">✦</span>
              <span>100% Solid Hardwood</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#B79A65] font-serif text-sm">✦</span>
              <span>Bespoke Custom Orders</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#B79A65] font-serif text-sm">✦</span>
              <span>Direct WhatsApp Quotations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
