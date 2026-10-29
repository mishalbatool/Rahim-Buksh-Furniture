import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, ExternalLink, Check } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/furnitureData';

export const ContactLocation: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappGeneralUrl = createWhatsAppUrl(
    'Assalam-o-Alaikum, I am planning a visit to your factory outlet in Chiniot or would like to discuss a furniture order.'
  );

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F7F3EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#B79A65]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#76513B]">
              Factory Location & Inquiries
            </span>
            <span className="w-8 h-[1px] bg-[#B79A65]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#38271F] tracking-tight">
            Connect With Our Factory
          </h2>
          <p className="mt-4 text-[#38271F]/80 text-base sm:text-lg font-light leading-relaxed">
            Visit our factory outlet in Chiniot to inspect live wood carving, feel seasoned timber grains, or connect with our team directly via phone and WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Business Details Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-7 sm:p-8 bg-white rounded-xl border border-[#B79A65]/35 shadow-xs space-y-6">
              <div className="border-b border-[#EAE0D0] pb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#76513B]">
                  Direct Factory & Manufacturer
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#38271F] mt-1">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-[#38271F]/70 font-light mt-1">
                  Manufacturer of authentic hand-carved Chinioti luxury furniture
                </p>
              </div>

              {/* Address with Copy Option */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#EAE0D0] flex items-center justify-center shrink-0 text-[#76513B]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#76513B]">
                    Factory Outlet Address
                  </div>
                  <p className="text-sm text-[#38271F] font-normal leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  <button
                    type="button"
                    onClick={copyAddress}
                    className="inline-flex items-center gap-1.5 text-xs text-[#76513B] hover:text-[#38271F] font-medium pt-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B79A65]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Address copied!</span>
                      </>
                    ) : (
                      <>
                        <span>Copy address for ride/navigation</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#EAE0D0] flex items-center justify-center shrink-0 text-[#76513B]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#76513B]">
                    Direct Phone / WhatsApp
                  </div>
                  <p className="text-base font-serif font-bold text-[#38271F]">
                    {BUSINESS_INFO.phoneDisplay}
                  </p>
                  <p className="text-xs text-[#38271F]/70 font-light">
                    Available for nationwide calls, voice notes, and photo inquiries
                  </p>
                </div>
              </div>

              {/* Working Hours / Production */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#EAE0D0] flex items-center justify-center shrink-0 text-[#76513B]">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#76513B]">
                    Factory Visiting Hours
                  </div>
                  <p className="text-sm text-[#38271F] font-normal">
                    Monday to Saturday: 9:00 AM – 8:00 PM (PKT)
                  </p>
                  <p className="text-xs text-[#38271F]/70 font-light">
                    Friday prayer break observed. Sunday visits by prior appointment.
                  </p>
                </div>
              </div>

              {/* Action Buttons: Call Now & WhatsApp */}
              <div className="pt-4 border-t border-[#EAE0D0] grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#38271F] bg-[#EAE0D0] hover:bg-[#EAE0D0]/80 rounded transition-colors border border-[#B79A65]/40"
                >
                  <Phone className="w-4 h-4 text-[#76513B]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={whatsappGeneralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#38271F] hover:bg-[#76513B] rounded transition-colors border border-[#B79A65]/40 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#B79A65]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Map Link & Directions Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-7 sm:p-8 bg-white rounded-xl border border-[#B79A65]/35 shadow-xs flex flex-col justify-between min-h-[420px]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#76513B]">
                    Verified Map Location
                  </span>
                  <span className="text-xs text-[#38271F]/60">Chiniot, Punjab</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#38271F]">
                  Visiting Our Chiniot Outlet
                </h3>

                <p className="text-sm text-[#38271F]/80 font-light leading-relaxed">
                  Our factory outlet is situated on Mahar Anwar Estate Road, Near Chungi No. 1, convenient to access from the main Lahore–Sargodha Road corridor through Chiniot.
                </p>

                {/* Map Preview Visual Anchor */}
                <div className="relative rounded-lg overflow-hidden border border-[#B79A65]/30 bg-[#EAE0D0]/40 p-6 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white shadow-xs border border-[#B79A65]/40 flex items-center justify-center text-[#76513B]">
                    <Navigation className="w-6 h-6 text-[#76513B]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#38271F]">
                      Google Maps Navigation
                    </h4>
                    <p className="text-xs text-[#38271F]/70 max-w-sm mt-1">
                      Direct search link for &ldquo;Rahim Buksh Factory Outlet, Chiniot&rdquo; on Google Maps with verified address matching.
                    </p>
                  </div>

                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#38271F] hover:bg-[#76513B] rounded transition-colors shadow-xs"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#B79A65]" />
                  </a>
                </div>

                <div className="p-4 bg-[#F7F3EB] rounded-lg border border-[#B79A65]/20 text-xs text-[#38271F]/80 space-y-1">
                  <span className="font-semibold text-[#76513B] block">Delivery &amp; Freight Coverage:</span>
                  <p className="font-light">
                    We coordinate insured wooden crating and specialized freight transport to Lahore, Islamabad, Karachi, Rawalpindi, Faisalabad, Multan, and international Pakistani diaspora worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
