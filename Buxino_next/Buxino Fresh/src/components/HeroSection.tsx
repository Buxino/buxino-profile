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
  height = 'h-[65vh]', // Using a fixed height for a cleaner "Gallery" look
}) => {
  return (
    <section className="w-full bg-white relative z-0"> {/* Changed to z-0 – safe and common */}
      <div className="container mx-auto px-6">
        
        {/* 1. THE IMAGE BOX */}
        <div className={`relative ${height} w-full overflow-hidden shadow-sm group`}>
          <img 
            src={`/${backgroundImage}`} 
            alt="Buxino Consulting Hero" 
            className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
          />
          
          {/* Subtle Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <img 
              src="/BuxinoConsultingGemini.png" 
              alt="" 
              className="max-w-[50%] object-contain"
            />
          </div>
        </div>

        {/* 2. THE TYPOGRAPHY (Below the picture) */}
        <div className="py-16 md:py-24 max-w-5xl">
          <h4 className="gold-accent mb-6">Established 2021</h4>
          
          <h1 className="text-navy-blue text-4xl md:text-6xl font-light leading-[1.1] tracking-tighter mb-10">
            {title}. <br/>
            <span className="italic font-serif opacity-80 text-3xl md:text-5xl lowercase">
              {/* Add subtitle here if needed */}
            </span>
          </h1>
          
          {buttonText && buttonLink && (
            <div className="flex items-center gap-8">
              <Link href={buttonLink}>
                <button className="bg-navy-blue text-white px-12 py-4 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-gold transition-all duration-500 shadow-xl hover:shadow-gold/20">
                  {buttonText}
                </button>
              </Link>
              
              <div className="h-[1px] flex-grow bg-gray-100 hidden sm:block"></div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;