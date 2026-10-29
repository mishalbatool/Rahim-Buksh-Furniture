import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Building2, MapPin, HeartHandshake, ShieldCheck, Instagram, ExternalLink, Search } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/furnitureData';
import { SocialProof } from '../components/SocialProof';

export const AboutPage: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(
    'Assalam-o-Alaikum Rahim Buksh Furniture, I would like to learn more about your family heritage and schedule a visit to your factory in Chiniot.'
  );

  return (
    <div className="bg-[#F7F3EB] min-h-screen">
      {/* Page Header */}
      <PageHeader
        breadcrumb="About Us"
        badge="Family Heritage"
        title="A Heritage of Craftsmanship, A Vision of Luxury"
        description="Preserving the traditional woodworking artistry of Chiniot through authentic hand carving, honest hardwoods, and factory-direct custom furniture."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#B79A65]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#76513B]">
                The Rahim Buksh Story
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#38271F] leading-tight">
              Honoring Chiniot&apos;s Royal Furniture Tradition
            </h2>

            {/* Verbatim Business Brand Story */}
            <blockquote className="p-7 sm:p-8 bg-[#EAE0D0]/60 rounded-xl border border-[#B79A65]/40 shadow-xs">
              <p className="font-serif text-base sm:text-lg text-[#38271F] leading-relaxed italic">
                &ldquo;Rahim Buksh Furniture represents a family heritage of quality, traditional
                Chinioti craftsmanship, and elegant custom furniture. From luxurious bedroom sets to
                sophisticated living room furniture, we create designs that bring warmth, character,
                and timeless beauty to your home. As furniture manufacturers, we focus on
                craftsmanship and furniture tailored to our customers&apos; preferences.&rdquo;
              </p>
              <div className="mt-4 pt-3.5 border-t border-[#B79A65]/25 flex items-center justify-between text-xs text-[#76513B]">
                <span className="font-semibold uppercase tracking-wider">
                  — Official Brand Statement
                </span>
                <span className="text-[11px] text-[#38271F]/70 italic">
                  Family heritage claim
                </span>
              </div>
            </blockquote>

            <div className="space-y-4 text-sm sm:text-base text-[#38271F]/80 font-light leading-relaxed">
              <p>
                According to our brand heritage, our family woodworking roots trace back generations in the historic city of Chiniot, Punjab. Known across South Asia as the epicenter of royal Mughal-inspired woodwork, Chiniot is home to generations of craftsmen whose hands have shaped magnificent doors, jharokas, and palace furnishings.
              </p>
              <p>
                Unlike commercial retail showrooms that purchase bulk factory seconds or import composite wood pieces, Rahim Buksh Furniture operates as a genuine direct manufacturer. When you order from us, our master woodcarvers select the timber, saw the planks, hand-chisel every leaf, and polish the final creation right here in our Chiniot workshop.
              </p>
              <p>
                This direct manufacturer relationship ensures complete transparency, superior timber seasoning, bespoke sizing for bridal suites, and factory-direct pricing without intermediary retail markups.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-xl overflow-hidden border border-[#B79A65]/40 shadow-xl group">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#38271F]">
                <img
                  src="/images/craftsman-workshop.jpg"
                  alt="Authentic furniture workshop in Chiniot"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#38271F]/90 via-[#38271F]/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-widest text-[#B79A65] font-semibold">
                  Factory Workshop Floor
                </span>
                <p className="text-white font-serif text-lg font-bold mt-1">
                  Near Chungi No. 1, Chiniot
                </p>
                <p className="text-[#EAE0D0]/85 text-xs font-light mt-1">
                  Master artisans shaping seasoned timber into bespoke furniture
                </p>
              </div>
            </div>

            {/* Direct Manufacturer Identity Box */}
            <div className="p-6 bg-white rounded-xl border border-[#B79A65]/30 shadow-xs space-y-3">
              <h3 className="font-serif text-lg font-bold text-[#38271F]">
                Our Factory Commitments
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#38271F]/80 font-light">
                <li className="flex items-start gap-2">
                  <span className="text-[#B79A65] font-bold">✔</span>
                  <span><strong>100% Solid Hardwood:</strong> Seasoned Sheesham and teak; no hollow cores or chipboards.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B79A65] font-bold">✔</span>
                  <span><strong>No Middlemen:</strong> Order directly from the factory floor in Chiniot.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B79A65] font-bold">✔</span>
                  <span><strong>Bespoke Customization:</strong> Tailored dimensions to fit your home and bridal suite.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Proof & Google Reviews Section */}
        <SocialProof />
      </div>
    </div>
  );
};
