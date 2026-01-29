"use client";
import React from 'react';

const OurStorySection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-16">
          <h4 className="gold-accent">The Narrative</h4>
          <h2 className="text-3xl md:text-4xl font-light text-navy-blue mt-2">
            Our Story & <span className="italic font-serif">Philosophy</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: The Core Narrative (6 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg text-navy-blue leading-relaxed font-normal italic">
              "We believe that marketing & sales are the crucial elements in building a successful brand, ensuring each partner we work with stands out in a crowded marketplace."
            </p>
            
            <div className="space-y-4 text-gray-500 font-light leading-relaxed">
              <p>
                Buxino Consulting was founded by a team of experienced branding professionals passionate about unlocking business potential through strategy. With expertise spanning marketing, design, and consumer psychology, we deliver results that resonate.
              </p>
              <p>
                Our commitment to high-quality content and personalized service sets us apart. We serve small and medium-sized enterprises across various industries, providing the resources and expertise needed to drive meaningful customer engagement.
              </p>
              <p>
                Beyond balance sheets, we focus on the advancement of macro enterprises through a robust approach to sales and marketing that transforms communities and creates lasting stakeholder value.
              </p>
            </div>
          </div>

          {/* Right Side: The Signature Card (5 columns) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative group overflow-hidden bg-navy-blue p-12 text-white shadow-2xl">
              {/* Subtle Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 -mr-16 -mt-16 rounded-full" />
              
              <div className="relative z-10 border-l border-gold/30 pl-8">
                <h3 className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4">
                  Established Oct 2021
                </h3>
                <h2 className="text-white text-2xl font-light mb-6 tracking-wide uppercase">
                  Buxino <br/> Consulting
                </h2>
                <div className="h-[1px] w-12 bg-gold mb-6" />
                <p className="text-white/70 text-sm font-light leading-loose uppercase tracking-widest">
                  For All Your Sales & <br/> Marketing Strategic Needs
                </p>
              </div>

              {/* Bottom Quote / Badge */}
              <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
                <span className="text-[10px] text-white/40 uppercase tracking-tighter">Buxino Internal Document // 001</span>
                <div className="w-8 h-8 rounded-full border border-gold/50 flex items-center justify-center">
                   <div className="w-1 h-1 bg-gold rounded-full" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStorySection;