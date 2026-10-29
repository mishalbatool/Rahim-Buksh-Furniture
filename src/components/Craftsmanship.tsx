import React from 'react';
import { Hammer, Sparkles, Compass, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../data/furnitureData';

export const Craftsmanship: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(
    'Assalam-o-Alaikum, I am fascinated by your hand-carved Chinioti craftsmanship. I would like to learn more about your timber and carving process.'
  );

  return (
    <section id="craftsmanship" className="py-20 sm:py-28 bg-[#EAE0D0] relative overflow-hidden">
      {/* Subtle decorative background motif */}
      <div className="absolute inset-0 opacity-15 pointer-events-none chinioti-pattern-border" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#76513B]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#76513B]">
              Generational Heritage
            </span>
            <span className="w-8 h-[1px] bg-[#76513B]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#38271F] tracking-tight">
            Crafted by Hand. Made to Be Cherished.
          </h2>
          <p className="mt-4 text-[#38271F]/85 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Combining authentic Pakistani craftsmanship, detailed manual chiseling, traditional artistry,
            and bespoke furniture manufacturing straight from the historic artisan city of Chiniot.
          </p>
        </div>

        {/* Visually Rich Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Visual Showcase (1 Large Image + 2 Supporting Detail Images) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Primary Large Image */}
            <div className="sm:col-span-2 relative rounded-lg overflow-hidden border border-[#B79A65]/40 shadow-md group">
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#38271F]">
                <img
                  src="/images/craftsman-workshop.jpg"
                  alt="Master woodcarver chiseling floral patterns in Chiniot"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#38271F]/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs sm:text-sm font-serif italic tracking-wide">
                  Master artisan practicing hereditary Chinioti woodcarving techniques
                </span>
              </div>
            </div>

            {/* Supporting Image 1: Macro Carving Detail */}
            <div className="relative rounded-lg overflow-hidden border border-[#B79A65]/40 shadow-sm group">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#38271F]">
                <img
                  src="/images/carving-macro.jpg"
                  alt="High-relief floral wood carving detail"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-[#38271F]/75 backdrop-blur-xs px-3 py-1.5 text-center">
                <span className="text-[#EAE0D0] text-[11px] font-sans font-medium">
                  Deep floral relief in solid Sheesham
                </span>
              </div>
            </div>

            {/* Supporting Image 2: Gold Gilded Detail */}
            <div className="relative rounded-lg overflow-hidden border border-[#B79A65]/40 shadow-sm group">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#38271F]">
                <img
                  src="/images/royal-headboard.jpg"
                  alt="Mughal jali woodwork and antique gold finish"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-[#38271F]/75 backdrop-blur-xs px-3 py-1.5 text-center">
                <span className="text-[#EAE0D0] text-[11px] font-sans font-medium">
                  Mughal jali openwork cresting
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Craftsmanship Narrative */}
          <div className="lg:col-span-5 space-y-6">
            {/* Highlighted Statement Callout */}
            <div className="p-6 bg-white/80 backdrop-blur-xs rounded-lg border border-[#B79A65]/40 shadow-xs">
              <p className="font-serif text-2xl font-bold text-[#38271F] italic tracking-tight">
                &ldquo;Every Detail Tells a Story.&rdquo;
              </p>
              <div className="w-12 h-[2px] bg-[#B79A65] my-3" />
              <p className="text-xs text-[#76513B] uppercase tracking-wider font-semibold">
                Pakistani Woodworking Artistry
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#38271F]/85 font-light leading-relaxed">
              <p>
                In the historic city of Chiniot, on the banks of the Chenab river, woodworking is not merely a trade—it is a sacred cultural heritage passed down across generations of master craftsmen.
              </p>
              <p>
                At Rahim Buksh Furniture, our artisans begin with naturally seasoned hardwood timbers: dense Pakistani Rosewood (Sheesham), Burma Teak, and select Walnut. With traditional steel chisels, gouges, and mallets, they hand-carve arabesques, acanthus leaves, and royal jali lattices directly into the raw grain.
              </p>
              <p>
                Unlike mass-manufactured, machine-routed furniture, every piece of Rahim Buksh furniture carries the unmistakable depth, warmth, and organic soul of human artistry.
              </p>
            </div>

            {/* 3 Editorial Craft Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#B79A65]/25">
              <div className="p-3 bg-white/50 rounded border border-[#B79A65]/20">
                <span className="block font-serif text-base font-bold text-[#38271F]">
                  Seasoned
                </span>
                <span className="text-[11px] text-[#76513B]">
                  Naturally kiln-dried hardwood timber
                </span>
              </div>
              <div className="p-3 bg-white/50 rounded border border-[#B79A65]/20">
                <span className="block font-serif text-base font-bold text-[#38271F]">
                  Hand-Chiseled
                </span>
                <span className="text-[11px] text-[#76513B]">
                  True hand-carved relief, zero CNC
                </span>
              </div>
              <div className="p-3 bg-white/50 rounded border border-[#B79A65]/20">
                <span className="block font-serif text-base font-bold text-[#38271F]">
                  Bespoke
                </span>
                <span className="text-[11px] text-[#76513B]">
                  Finishes customized to your interior
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Consultation Link */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#38271F] hover:bg-[#76513B] rounded transition-colors shadow-xs border border-[#B79A65]/40"
              >
                <MessageCircle className="w-4 h-4 text-[#B79A65]" />
                <span>Discuss Craftsmanship on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
