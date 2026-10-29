import React from 'react';
import { MapPin, Building2, HeartHandshake, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/furnitureData';

export const About: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(
    'Assalam-o-Alaikum, I would like to learn more about Rahim Buksh Furniture and visit your factory outlet in Chiniot.'
  );

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F7F3EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Story & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#B79A65]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#76513B]">
                About Our Factory
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#38271F] tracking-tight leading-tight">
              A Heritage of Craftsmanship, <br className="hidden sm:inline" />
              A Vision of Luxury
            </h2>

            {/* Business-provided brand story in elegant editorial quotation block */}
            <blockquote className="p-6 sm:p-7 bg-[#EAE0D0]/50 rounded-xl border border-[#B79A65]/35 shadow-xs">
              <p className="font-serif text-base sm:text-lg text-[#38271F] leading-relaxed italic">
                &ldquo;Rahim Buksh Furniture represents a family heritage of quality, traditional
                Chinioti craftsmanship, and elegant custom furniture. From luxurious bedroom sets to
                sophisticated living room furniture, we create designs that bring warmth, character,
                and timeless beauty to your home. As furniture manufacturers, we focus on
                craftsmanship and furniture tailored to our customers&apos; preferences.&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-[#B79A65]/20 flex items-center justify-between text-xs text-[#76513B]">
                <span className="font-semibold uppercase tracking-wider">
                  — Rahim Buksh Chinioti Furniture
                </span>
                <span className="text-[11px] text-[#38271F]/70 italic">
                  Brand heritage claim
                </span>
              </div>
            </blockquote>

            <div className="space-y-4 text-sm sm:text-base text-[#38271F]/80 font-light leading-relaxed">
              <p>
                Based in Chiniot, Punjab—the heart of Pakistan’s world-renowned woodworking heritage—our workshop is a direct manufacturing facility. According to our brand heritage, our family woodworking roots trace back generations, perfecting classical Pakistani motifs, joinery, and durable finishes.
              </p>
              <p>
                By connecting directly with our manufacturing factory, homeowners, interior architects, and wedding families avoid retail middlemen markups while obtaining furniture custom-sized, carved, and polished precisely to their specifications.
              </p>
            </div>

            {/* Quick Factory Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded bg-[#EAE0D0] flex items-center justify-center shrink-0 border border-[#B79A65]/40 text-[#76513B]">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#38271F]">Direct Factory</h4>
                  <p className="text-xs text-[#38271F]/70 font-light mt-0.5">
                    No middlemen; direct manufacturer interaction
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded bg-[#EAE0D0] flex items-center justify-center shrink-0 border border-[#B79A65]/40 text-[#76513B]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#38271F]">Chiniot, Punjab</h4>
                  <p className="text-xs text-[#38271F]/70 font-light mt-0.5">
                    Authentic origin near Chungi No. 1
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded bg-[#EAE0D0] flex items-center justify-center shrink-0 border border-[#B79A65]/40 text-[#76513B]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#38271F]">Bespoke Made</h4>
                  <p className="text-xs text-[#38271F]/70 font-light mt-0.5">
                    Tailored to customer preference
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Workshop Image & Factory Location Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-xl overflow-hidden border border-[#B79A65]/40 shadow-xl group">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#38271F]">
                <img
                  src="/images/craftsman-workshop.jpg"
                  alt="Authentic furniture workshop in Chiniot"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#38271F]/90 via-[#38271F]/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-widest text-[#B79A65] font-semibold">
                  Factory Workshop
                </span>
                <p className="text-white font-serif text-lg font-bold mt-1">
                  Chiniot Artisan Floor
                </p>
                <p className="text-[#EAE0D0]/85 text-xs font-light mt-1">
                  Master artisans shaping raw timber into heirloom royal furniture
                </p>
              </div>
            </div>

            {/* Factory Address Callout Card */}
            <div className="p-5 bg-white rounded-lg border border-[#B79A65]/30 shadow-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#76513B] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#76513B]">
                    Factory Outlet Location
                  </span>
                  <p className="text-xs text-[#38271F] font-normal leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  <div className="pt-2">
                    <a
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#76513B] hover:text-[#38271F] underline underline-offset-4"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
