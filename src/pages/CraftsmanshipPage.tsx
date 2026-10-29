import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { createWhatsAppUrl } from '../data/furnitureData';

export const CraftsmanshipPage: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(
    'Assalam-o-Alaikum, I am inquiring about your handcrafted Chinioti woodwork techniques, seasoned timbers, and bespoke carving options.'
  );

  const pillars = [
    {
      step: '01',
      title: 'Naturally Seasoned Hardwoods',
      subtitle: 'Pakistani Sheesham, Burma Teak & Walnut',
      description:
        'All raw timber is carefully inspected for grain density and seasoned through natural sun curing and controlled kiln drying to guarantee dimensional stability and prevent warping.',
    },
    {
      step: '02',
      title: 'Hand-Chiseled Relieving',
      subtitle: '100% Manual Chisels, Mallets & Gouges',
      description:
        'Generational artisans in Chiniot hand-sculpt high-relief floral vines, Mughal paisley arches, and pierced openwork jali lattices directly into solid hardwood without CNC routing.',
    },
    {
      step: '03',
      title: 'Traditional Joinery & Mortise',
      subtitle: 'Heirloom Structural Longevity',
      description:
        'Heavy-gauge mortise-and-tenon joints, solid hardwood cross-members, and hand-fitted dowels ensure bed frames, sofas, and dining tables endure for generations of family living.',
    },
    {
      step: '04',
      title: 'Hand-Rubbed Patina & Gilding',
      subtitle: 'Lustrous Sheen & Antique Gold Accents',
      description:
        'Multi-stage hand-sanding followed by organic spirit polishes, warm walnut patinas, and optional antique gold leaf gilding reveal the natural wood grains and three-dimensional carvings.',
    },
  ];

  return (
    <div className="bg-[#F7F3EB] min-h-screen">
      {/* Page Header */}
      <PageHeader
        breadcrumb="Our Craftsmanship"
        badge="Centuries-Old Tradition"
        title="Crafted by Hand. Made to Be Cherished."
        description="Combining Pakistani craftsmanship, detailed manual chiseling, traditional artistry, and bespoke furniture manufacturing straight from the artisan workshops of Chiniot."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">
        {/* Editorial Split Section 1: The Artisan at Work */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2 relative rounded-xl overflow-hidden border border-[#B79A65]/40 shadow-xl group">
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#38271F]">
                  <img
                    src="/images/craftsman-workshop.jpg"
                    alt="Master woodcarver chiseling floral patterns in Chiniot"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#38271F]/80 via-transparent to-transparent flex items-end p-6">
                  <span className="text-white text-xs sm:text-sm font-serif italic tracking-wide">
                    Master artisan practicing hereditary Chinioti woodcarving in our workshop
                  </span>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden border border-[#B79A65]/40 shadow-md group">
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#38271F]">
                  <img
                    src="/images/carving-macro.jpg"
                    alt="Macro detail of deep relief floral carving"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-[#38271F]/80 backdrop-blur-xs px-3 py-1.5 text-center">
                  <span className="text-[#EAE0D0] text-[11px] font-sans font-medium">
                    Flowing botanical relief in Sheesham
                  </span>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden border border-[#B79A65]/40 shadow-md group">
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#38271F]">
                  <img
                    src="/images/royal-headboard.jpg"
                    alt="Pierced arch openwork with gold gilding"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-[#38271F]/80 backdrop-blur-xs px-3 py-1.5 text-center">
                  <span className="text-[#EAE0D0] text-[11px] font-sans font-medium">
                    Mughal jali openwork cresting
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-white rounded-xl border border-[#B79A65]/40 shadow-xs">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#38271F] italic tracking-tight">
                &ldquo;Every Detail Tells a Story.&rdquo;
              </p>
              <div className="w-12 h-[2px] bg-[#B79A65] my-3.5" />
              <p className="text-xs text-[#76513B] uppercase tracking-wider font-semibold">
                Pakistani Woodworking Artistry
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#38271F]/85 font-light leading-relaxed">
              <p>
                Chiniot has long been celebrated as the woodworking jewel of Pakistan. The artisan community here carries forward centuries of royal Mughal and classical architecture, where ornate arches, jaal lattices, and delicate foliage were hand-carved into palaces and mansions.
              </p>
              <p>
                At Rahim Buksh Furniture, we do not cut corners with automated CNC routing or synthetic composite moldings. True Chinioti furniture requires the experienced eye and steady hand of a master carver who can follow the organic grain of solid Sheesham (Dalbergia sissoo) and create three-dimensional depth that machines cannot replicate.
              </p>
              <p>
                From initial timber selection to the final coat of hand-rubbed lacquer, our process represents patient, uncompromised craftsmanship tailored to your bespoke dimensions.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#38271F] hover:bg-[#76513B] rounded transition-colors shadow-xs border border-[#B79A65]/40"
              >
                <MessageCircle className="w-4 h-4 text-[#B79A65]" />
                <span>Discuss Craftsmanship on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Rahim Buksh Production */}
        <div>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-[#B79A65]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#76513B]">
                The Workshop Method
              </span>
              <span className="w-6 h-[1px] bg-[#B79A65]" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#38271F]">
              Four Stages of Fine Furniture Making
            </h3>
            <p className="mt-3 text-sm text-[#38271F]/75 font-light max-w-xl mx-auto">
              How our Chiniot factory transforms raw hardwood logs into regal furniture heirlooms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.step}
                className="p-6 sm:p-7 bg-white rounded-xl border border-[#B79A65]/30 shadow-xs flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-[#B79A65] mb-4">
                    {pillar.step}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#38271F] mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#76513B] font-semibold mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#38271F]/75 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timber Guide Banner */}
        <div className="p-8 sm:p-10 bg-[#EAE0D0]/50 rounded-2xl border border-[#B79A65]/35 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#76513B] block mb-1">
              Primary Hardwood
            </span>
            <h4 className="font-serif text-xl font-bold text-[#38271F] mb-2">
              Pakistani Sheesham (Rosewood)
            </h4>
            <p className="text-xs text-[#38271F]/75 font-light leading-relaxed">
              Celebrated for its striking dark and golden heartwood grain, natural oil density, and exceptional durability in Pakistani climates.
            </p>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#76513B] block mb-1">
              Select Timber
            </span>
            <h4 className="font-serif text-xl font-bold text-[#38271F] mb-2">
              Pure Burma Teak
            </h4>
            <p className="text-xs text-[#38271F]/75 font-light leading-relaxed">
              Renowned for its water resistance, smooth uniform grain, and warm honey-gold luster that patinas beautifully with age.
            </p>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#76513B] block mb-1">
              Luxury Accents
            </span>
            <h4 className="font-serif text-xl font-bold text-[#38271F] mb-2">
              Antique Gold Leaf &amp; Inlay
            </h4>
            <p className="text-xs text-[#38271F]/75 font-light leading-relaxed">
              Delicate brass inlays and hand-rubbed antique gold leafing meticulously applied to crest arches and floral reliefs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
