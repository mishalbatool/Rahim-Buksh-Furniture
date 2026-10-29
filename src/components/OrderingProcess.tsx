import React from 'react';
import { Compass, MessageSquareQuote, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/furnitureData';

interface OrderingProcessProps {
  onOpenCustomQuote: () => void;
}

export const OrderingProcess: React.FC<OrderingProcessProps> = ({ onOpenCustomQuote }) => {
  const steps = [
    {
      num: '01',
      title: 'Explore Designs',
      description: 'Browse furniture collections and choose a style you love.',
      detail: 'View our signature bedroom suites, carved royal beds, luxury sofas, and dining sets in the gallery or collections.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'Discuss Your Requirements',
      description: 'Contact us on WhatsApp to discuss size, wood, finish, customization, and budget.',
      detail: 'Share your room measurements, preferred timber (Sheesham, Teak, Walnut), color tones, or send us reference pictures.',
      icon: MessageSquareQuote,
    },
    {
      num: '03',
      title: 'Confirm Your Order',
      description: 'Discuss the final quotation, production details, and delivery arrangements directly with the business.',
      detail: 'Receive your transparent factory quotation, estimated workshop completion date, and safe freight arrangements across Pakistan and abroad.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F7F3EB] border-t border-[#B79A65]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#B79A65]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#76513B]">
              Direct Factory Workflow
            </span>
            <span className="w-8 h-[1px] bg-[#B79A65]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#38271F] tracking-tight">
            Custom Furniture Ordering Process
          </h2>
          <p className="mt-4 text-[#38271F]/80 text-base sm:text-lg font-light leading-relaxed">
            All order inquiries, customizations, and price quotations are handled directly through WhatsApp
            for a personalized and transparent factory experience.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative p-7 sm:p-8 bg-white rounded-xl border border-[#B79A65]/35 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#B79A65]">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#EAE0D0] flex items-center justify-center text-[#76513B]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#38271F] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm font-medium text-[#76513B] mb-3">
                    {step.description}
                  </p>

                  <p className="text-xs text-[#38271F]/70 font-light leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EAE0D0] flex items-center text-xs text-[#76513B] font-medium">
                  <span>Step {index + 1} of 3</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto text-[#B79A65]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Action Callout */}
        <div className="mt-12 p-6 sm:p-8 bg-[#38271F] text-white rounded-xl border border-[#B79A65]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#EAE0D0]">
              Ready to Discuss Your Furniture Project?
            </h4>
            <p className="text-xs sm:text-sm text-[#F7F3EB]/80 font-light">
              Message us directly on WhatsApp ({BUSINESS_INFO.phoneDisplay}) with your room plans or design references.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={createWhatsAppUrl(
                'Assalam-o-Alaikum Rahim Buksh Furniture, I would like to start an order discussion with your factory.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#38271F] bg-[#EAE0D0] hover:bg-white rounded transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#76513B]" />
              <span>Open Factory WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onOpenCustomQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-transparent hover:bg-white/10 border border-[#B79A65] rounded transition-colors"
            >
              <span>Build Custom Inquiry</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
