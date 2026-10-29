import React from 'react';

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  breadcrumb?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  description,
}) => {
  return (
    <div className="relative bg-[#38271F] text-white py-14 sm:py-20 overflow-hidden border-b border-[#B79A65]/30">
      {/* Subtle texture / background grain */}
      <div className="absolute inset-0 opacity-10 chinioti-pattern-border pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#38271F] via-[#38271F]/90 to-[#76513B]/40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Small badge */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-6 h-[1px] bg-[#B79A65]" />
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#B79A65]">
            {badge}
          </span>
          <span className="w-6 h-[1px] bg-[#B79A65]" />
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-3.5 text-sm sm:text-base text-[#F7F3EB]/85 font-light max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
