import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
  ExternalLink,
  Check,
  Instagram,
  Send,
  Building2,
} from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/furnitureData';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Form states for in-page custom inquiry
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('Luxury Bedroom Sets');
  const [timber, setTimber] = useState('Seasoned Sheesham (Rosewood)');
  const [message, setMessage] = useState('');

  const copyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Assalam-o-Alaikum Rahim Buksh Furniture,\n\nName: ${name || 'Customer'}\nLocation: ${city || 'Pakistan'}\nInterested In: ${category}\nTimber Preference: ${timber}${
      message ? `\nDetails: ${message}` : ''
    }\n\nPlease share design catalog and price quotation.`;

    const url = createWhatsAppUrl(formatted);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#F7F3EB] min-h-screen">
      {/* Page Header */}
      <PageHeader
        breadcrumb="Contact"
        badge="Factory & Outlet"
        title="Contact & Factory Location"
        description="Connect directly with Rahim Buksh Chinioti Furniture in Chiniot, Pakistan. Inquire about customized bridal packages, timber options, prices, and showroom visits."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
        {/* Main Grid: Details + Interactive Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Business & Location Info (Col 1-6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-7 sm:p-8 bg-white rounded-xl border border-[#B79A65]/35 shadow-xs space-y-6">
              <div className="border-b border-[#EAE0D0] pb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#76513B]">
                  Direct Factory &amp; Manufacturer
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#38271F] mt-1">
                  {BUSINESS_INFO.name}
                </h2>
                <p className="text-xs text-[#38271F]/70 font-light mt-1">
                  Direct Factory &amp; Outlet, Chiniot, Punjab, Pakistan
                </p>
              </div>

              {/* Address with Copy Action */}
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
                        <span className="text-emerald-700 font-semibold">Address copied to clipboard!</span>
                      </>
                    ) : (
                      <>
                        <span>Copy address for ride or navigation</span>
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
                    Phone &amp; WhatsApp Support
                  </div>
                  <p className="text-lg font-serif font-bold text-[#38271F]">
                    {BUSINESS_INFO.phoneDisplay}
                  </p>
                  <p className="text-xs text-[#38271F]/70 font-light">
                    Available for nationwide calls, voice notes, photos, and live video tours
                  </p>
                </div>
              </div>

              {/* Visiting Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#EAE0D0] flex items-center justify-center shrink-0 text-[#76513B]">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#76513B]">
                    Workshop &amp; Outlet Hours
                  </div>
                  <p className="text-sm text-[#38271F] font-normal">
                    Monday to Saturday: 9:00 AM – 8:00 PM (PKT)
                  </p>
                  <p className="text-xs text-[#38271F]/70 font-light">
                    Friday prayer break observed. Sunday visits welcome by prior notice.
                  </p>
                </div>
              </div>

              {/* Direct Call & WhatsApp Buttons */}
              <div className="pt-4 border-t border-[#EAE0D0] grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#38271F] bg-[#EAE0D0] hover:bg-[#EAE0D0]/80 rounded transition-colors border border-[#B79A65]/40"
                >
                  <Phone className="w-4 h-4 text-[#76513B]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={createWhatsAppUrl(
                    'Assalam-o-Alaikum, I am contacting Rahim Buksh Furniture through your contact page.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#38271F] hover:bg-[#76513B] rounded transition-colors border border-[#B79A65]/40 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#B79A65]" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Social Media Links Card */}
            <div className="p-6 bg-white rounded-xl border border-[#B79A65]/30 shadow-xs">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#76513B] block mb-3">
                Official Social Profiles
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-[#B79A65]/30 hover:border-[#76513B] hover:bg-[#F7F3EB] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Instagram className="w-4 h-4 text-[#76513B]" />
                    <div>
                      <span className="block text-xs font-bold text-[#38271F]">Instagram</span>
                      <span className="block text-[10px] text-[#76513B]">@rahimbukshfurniture</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#B79A65]" />
                </a>

                <a
                  href={BUSINESS_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-[#B79A65]/30 hover:border-[#76513B] hover:bg-[#F7F3EB] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 fill-[#76513B]" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                    <div>
                      <span className="block text-xs font-bold text-[#38271F]">TikTok</span>
                      <span className="block text-[10px] text-[#76513B]">@rahimbukshfurniture</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#B79A65]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps & Direct WhatsApp Message Builder (Col 7-12) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Google Maps Card */}
            <div className="p-7 sm:p-8 bg-white rounded-xl border border-[#B79A65]/35 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#76513B]">
                  Verified Google Maps Link
                </span>
                <span className="text-xs text-[#38271F]/60">Chiniot, Punjab</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#38271F]">
                Find Us on Google Maps
              </h3>

              <p className="text-sm text-[#38271F]/80 font-light leading-relaxed">
                Located on Mahar Anwar Estate Road, Near Chungi No. 1, right opposite Lahore Road in Chiniot.
              </p>

              <div className="p-6 bg-[#EAE0D0]/40 rounded-lg border border-[#B79A65]/30 flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-white shadow-xs border border-[#B79A65]/40 flex items-center justify-center text-[#76513B]">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#38271F]">
                    Google Maps Search &amp; Route
                  </h4>
                  <p className="text-xs text-[#38271F]/70 max-w-sm mt-1">
                    Opens direct navigation route in Google Maps app or browser.
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
            </div>

            {/* Direct WhatsApp Consultation Form */}
            <div className="p-7 sm:p-8 bg-[#EAE0D0]/50 rounded-xl border border-[#B79A65]/35 shadow-xs">
              <div className="mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#76513B]">
                  Quick Quotation Generator
                </span>
                <h3 className="font-serif text-xl font-bold text-[#38271F] mt-1">
                  Send Your Inquiry Directly to WhatsApp
                </h3>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#76513B] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Tariq Mehmood"
                      className="w-full px-3.5 py-2 text-sm bg-white border border-[#B79A65]/30 rounded text-[#38271F] focus:outline-none focus:ring-1 focus:ring-[#B79A65]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#76513B] mb-1">
                      Your City
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Lahore / Islamabad"
                      className="w-full px-3.5 py-2 text-sm bg-white border border-[#B79A65]/30 rounded text-[#38271F] focus:outline-none focus:ring-1 focus:ring-[#B79A65]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#76513B] mb-1">
                      Collection
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm bg-white border border-[#B79A65]/30 rounded text-[#38271F] focus:outline-none focus:ring-1 focus:ring-[#B79A65]"
                    >
                      <option value="Luxury Bedroom Sets">Luxury Bedroom Sets</option>
                      <option value="Royal Beds & Headboards">Royal Beds &amp; Headboards</option>
                      <option value="Luxury Sofa Sets">Luxury Sofa Sets</option>
                      <option value="Living Room Furniture">Living Room Furniture</option>
                      <option value="Hand-Carved Chinioti Showpieces">Hand-Carved Chinioti</option>
                      <option value="Dining Tables & Chairs">Dining Tables &amp; Chairs</option>
                      <option value="Custom Bespoke Order">Custom Bespoke Order</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#76513B] mb-1">
                      Timber Preference
                    </label>
                    <select
                      value={timber}
                      onChange={(e) => setTimber(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm bg-white border border-[#B79A65]/30 rounded text-[#38271F] focus:outline-none focus:ring-1 focus:ring-[#B79A65]"
                    >
                      <option value="Seasoned Sheesham (Rosewood)">Seasoned Sheesham</option>
                      <option value="Pure Burma Teak">Pure Burma Teak</option>
                      <option value="Dark Walnut">Dark Walnut</option>
                      <option value="Artisan Choice">Artisan Recommendation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#76513B] mb-1">
                    Dimensions or Custom Details (Optional)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={2}
                    placeholder="e.g. King-size bed (6x6.5 ft), bridal suite package, matching dressing table..."
                    className="w-full px-3.5 py-2 text-sm bg-white border border-[#B79A65]/30 rounded text-[#38271F] focus:outline-none focus:ring-1 focus:ring-[#B79A65] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#38271F] hover:bg-[#76513B] rounded transition-colors border border-[#B79A65]/40 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#B79A65]" />
                  <span>Send Inquiry to Factory on WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
