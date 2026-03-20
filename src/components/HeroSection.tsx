"use client";

import React from 'react';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  watermarkImage?: string; // optional
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  backgroundImage,
  buttonText,
  buttonLink,
  watermarkImage,
}) => {
  return (
    <section className="w-full bg-white relative z-0">
      <div className="container mx-auto px-6 md:px-10">
        
        {/* THE IMAGE BOX – RESPONSIVE ASPECT-RATIO (NO FIXED HEIGHT) */}
        <div className="relative w-full aspect-[4/5] xs:aspect-[3/4] sm:aspect-[16/9] md:aspect-[16/7] lg:aspect-[16/6] overflow-hidden group border border-gray-100 shadow-sm rounded-xl">
          <img
            src={`/${backgroundImage}`}
            alt="Buxino Consulting Hero"
            className={`
              w-full h-full 
              object-contain sm:object-cover 
              object-center sm:object-[center_20%] 
              scale-100 sm:scale-105 
              group-hover:scale-100 sm:group-hover:scale-100 
              brightness-95 sm:brightness-90 
              group-hover:brightness-100 sm:group-hover:brightness-100 
              transition-all duration-[2000ms] ease-in-out
            `}
          />

          {/* Watermark – only if provided */}
          {watermarkImage && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
              <img
                src={`/${watermarkImage}`}
                alt="Watermark"
                className="max-w-[40%] md:max-w-[30%] object-contain"
              />
            </div>
          )}
        </div>

        {/* TYPOGRAPHY – unchanged */}
        <div className="py-16 md:py-28 max-w-6xl mx-auto">
          <h4 className="text-[#c5a059] uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold mb-6 md:mb-8 block">
            Established 2021
          </h4>
          
          <h1 className="text-[#001f3f] text-4xl md:text-6xl lg:text-7xl font-light leading-[1.15] tracking-tight mb-10 md:mb-12">
            {title}. <br className="hidden md:block" />
            <span className="italic font-serif text-[#c5a059] text-3xl md:text-5xl lg:text-6xl lowercase opacity-90 block mt-2">
              Institutional Excellence.
            </span>
          </h1>
          
          {buttonText && buttonLink && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
              <Link href={buttonLink}>
                <button className="bg-[#001f3f] text-white px-8 py-4 md:px-10 md:py-5 text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-light hover:bg-[#c5a059] transition-all duration-700 rounded-lg shadow-md hover:shadow-lg">
                  {buttonText}
                </button>
              </Link>
              
              <div className="h-[1px] flex-grow bg-gray-200 hidden md:block max-w-xs"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;