import React from 'react';
import { ExternalLink, Search, Instagram, Share2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/furnitureData';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#EAE0D0]/50 border-t border-b border-[#B79A65]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Google Reviews as provided business information */}
          <div className="p-7 bg-white rounded-xl border border-[#B79A65]/30 shadow-xs flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-14 h-14 rounded-full bg-[#EAE0D0] border border-[#B79A65]/50 flex items-center justify-center shrink-0 text-[#76513B]">
              <Search className="w-6 h-6" />
            </div>
            <div className="space-y-1.5 flex-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#76513B]">
                Business Profile
              </div>
              <h3 className="font-serif text-xl font-bold text-[#38271F]">
                {BUSINESS_INFO.googleReviewsCount}
              </h3>
              <p className="text-xs text-[#38271F]/70 font-light leading-relaxed">
                As provided business information on Google. Explore public listings, customer impressions, and search mentions for our Chiniot factory.
              </p>
            </div>
            <a
              href={BUSINESS_INFO.googleSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#38271F] bg-[#EAE0D0] hover:bg-[#B79A65]/30 rounded transition-colors border border-[#B79A65]/40"
              aria-label="Search Rahim Buksh Furniture on Google"
            >
              <span>Search on Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#76513B]" />
            </a>
          </div>

          {/* Right Column: Official Social Channels */}
          <div className="p-7 bg-white rounded-xl border border-[#B79A65]/30 shadow-xs flex flex-col justify-between">
            <div className="space-y-1.5 mb-5 text-center sm:text-left">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#76513B]">
                Official Social Profiles
              </div>
              <h3 className="font-serif text-xl font-bold text-[#38271F]">
                Follow Our Workshop on Social Media
              </h3>
              <p className="text-xs text-[#38271F]/70 font-light leading-relaxed">
                Watch raw timber carving videos, workshop updates, and finished bridal suites delivered across Pakistan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Instagram */}
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg border border-[#B79A65]/30 hover:border-[#76513B] hover:bg-[#F7F3EB] transition-all group"
                aria-label="Follow Rahim Buksh Furniture on Instagram"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#EAE0D0] flex items-center justify-center text-[#76513B] group-hover:bg-[#76513B] group-hover:text-white transition-colors">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold text-[#38271F]">Instagram</span>
                    <span className="block text-[11px] text-[#76513B]">@rahimbukshfurniture</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#B79A65] group-hover:text-[#76513B] transition-colors" />
              </a>

              {/* TikTok */}
              <a
                href={BUSINESS_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg border border-[#B79A65]/30 hover:border-[#76513B] hover:bg-[#F7F3EB] transition-all group"
                aria-label="Follow Rahim Buksh Furniture on TikTok"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#EAE0D0] flex items-center justify-center text-[#76513B] group-hover:bg-[#76513B] group-hover:text-white transition-colors">
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold text-[#38271F]">TikTok</span>
                    <span className="block text-[11px] text-[#76513B]">@rahimbukshfurniture</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#B79A65] group-hover:text-[#76513B] transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
