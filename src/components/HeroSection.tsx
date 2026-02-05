"use client";
import React from 'react';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  height?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  backgroundImage,
  buttonText,
  buttonLink,
  height = 'h-[75vh]', 
}) => {
  return (
    <section className="w-full bg-white relative z-0 pt-24 md:pt-0"> {/* Adjusted PT for navbar clearance */}
      <div className="container mx-auto px-10">
        
        {/* 1. THE IMAGE BOX */}
        <div className={`relative ${height} w-full overflow-hidden group border border-gray-50 shadow-sm`}>
          <img 
            src={`/${backgroundImage}`} 
            alt="Buxino Consulting Hero" 
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-[2000ms] ease-in-out scale-105 group-hover:scale-100"
          />
          
          {/* Subtle Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <img 
              src="/BuxinoConsultingGemini.png" 
              alt="" 
              className="max-w-[40%] object-contain"
            />
          </div>
        </div>

        {/* 2. THE TYPOGRAPHY (Editorial Layout) */}
        <div className="py-20 md:py-28 max-w-6xl">
          <h4 className="text-[#c5a059] uppercase tracking-[0.5em] text-[10px] font-bold mb-8 block">
            Established 2021
          </h4>
          
          <h1 className="text-[#001f3f] text-4xl md:text-6xl font-light leading-[1.15] tracking-tight mb-12">
            {title}. <br/>
            <span className="italic font-serif text-[#c5a059] text-3xl md:text-5xl lowercase opacity-90">
              Institutional Excellence.
            </span>
          </h1>
          
          {buttonText && buttonLink && (
            <div className="flex items-center gap-10">
              <Link href={buttonLink}>
                <button className="bg-[#001f3f] text-white px-10 py-4 text-[9px] uppercase tracking-[0.4em] font-light hover:bg-[#c5a059] transition-all duration-700">
                  {buttonText}
                </button>
              </Link>
              
              {/* Decorative line to pull the eye across the page */}
              <div className="h-[1px] flex-grow bg-gray-100 hidden sm:block max-w-xs"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;