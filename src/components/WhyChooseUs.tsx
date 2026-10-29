import React from 'react';
import { Factory, Sparkles, Ruler, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Factory,
      title: 'Direct Manufacturer',
      description:
        'Connect directly with the furniture maker in Chiniot. By working straight with our factory outlet, you discuss your ideas directly with artisans without showroom intermediaries.',
    },
    {
      icon: Sparkles,
      title: 'Traditional Chinioti Craftsmanship',
      description:
        'Celebrate the rich heritage of Chiniot woodwork. Every floral vine, arabesque scroll, and openwork lattice is chiseled by hand by skilled craftsmen carrying forward cultural art.',
    },
    {
      icon: Ruler,
      title: 'Custom-Made Designs',
      description:
        'Discuss your preferred dimensions, room layouts, timber selections (Sheesham, Teak, Walnut), fabric upholstery, and polish shades to fit your home and bridal requirements.',
    },
    {
      icon: CheckCircle2,
      title: 'Quality-Focused Workmanship',
      description:
        'From seasoned timber selection and meticulous joinery to silky hand-rubbed lacquers and antique gold leaf gilding, every piece receives painstaking attention to detail.',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#EAE0D0]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#B79A65]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#76513B]">
              The Factory Advantage
            </span>
            <span className="w-8 h-[1px] bg-[#B79A65]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#38271F] tracking-tight">
            Why Choose Rahim Buksh Furniture?
          </h2>
          <p className="mt-4 text-[#38271F]/80 text-base font-light max-w-xl mx-auto">
            Rooted in Chiniot’s royal woodworking tradition, we offer direct factory collaboration for homes, bridal suites, and interior designers.
          </p>
        </div>

        {/* 4 Refined Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-6 sm:p-7 bg-white rounded-lg border border-[#B79A65]/30 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded bg-[#EAE0D0]/80 border border-[#B79A65]/40 flex items-center justify-center text-[#76513B] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#38271F] mb-2.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#38271F]/75 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
