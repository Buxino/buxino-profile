// import React from 'react';
// import Link from 'next/link';

// interface HeroSectionProps {
//   title: string;
//   backgroundImage: string;
//   buttonText?: string;
//   buttonLink?: string;
//   height?: string;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({
//   title,
//   backgroundImage,
//   buttonText,
//   buttonLink,
//   height = 'min-h-[400px]',
// }) => {
//   return (
//     <div
//       className={`hero-section ${height}`}
//       style={{ backgroundImage: "C:IMG_3183.jpg\Users\bakan\Downloads\IMG_3183.png" }}
//     >
//       <div className="hero-content">
//         <h1 className="header-title">{title}</h1>
//         {buttonText && buttonLink && (
//           <Link href={buttonLink}>
//             <span className="gold-button">{buttonText}</span>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

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
    <section className="w-full bg-white">
      <div className="container mx-auto px-6">
        
        {/* 1. THE IMAGE BOX 
            The image now sits cleanly without text overlapping it. 
        */}
        <div className={`relative ${height} w-full overflow-hidden shadow-sm group`}>
          <img 
            src={`/${backgroundImage}`} 
            alt="Buxino Consulting Hero" 
            className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
          />
          
          {/* Subtle Watermark - Kept it in the image box but very faint */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <img 
              src="/BuxinoConsultingGemini.png" 
              alt="" 
              className="max-w-[50%] object-contain"
            />
          </div>
        </div>

        {/* 2. THE TYPOGRAPHY (Now below the picture) 
            Using Navy Blue and Gold for that "Universal" feel.
        */}
        <div className="py-16 md:py-24 max-w-5xl">
          {/* Section Label */}
          <h4 className="gold-accent mb-6">Established 2021</h4>
          
          {/* Main Welcome Message */}
          <h1 className="text-navy-blue text-4xl md:text-6xl font-light leading-[1.1] tracking-tighter mb-10">
            {title}. <br/>
            <span className="italic font-serif opacity-80 text-3xl md:text-5xl lowercase">
              
            </span>
          </h1>
          
          {/* Action Area */}
          {buttonText && buttonLink && (
            <div className="flex items-center gap-8">
              <Link href={buttonLink}>
                <button className="bg-navy-blue text-white px-12 py-4 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-gold transition-all duration-500 shadow-xl hover:shadow-gold/20">
                  {buttonText}
                </button>
              </Link>
              
              {/* Decorative Line for "Seamless Flow" */}
              <div className="h-[1px] flex-grow bg-gray-100 hidden sm:block"></div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;