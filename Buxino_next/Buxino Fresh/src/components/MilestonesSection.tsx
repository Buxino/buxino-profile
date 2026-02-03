"use client";
import React from 'react';

const milestones = [
  {
    year: "2021",
    title: "Founding & Strategic Blueprint",
    description: "Buxino Consulting established with a focus on Economic Management Sciences and market entry strategy."
  },
  {
    year: "2022",
    title: "The Lifestyle Pivot",
    description: "Launch of Buxino Wines, bridging the gap between corporate consulting and luxury FMCG."
  },
  {
    year: "2024",
    title: "Amrod Partnership",
    description: "Formalized branding and gifting logistics, scaling our impact in corporate identity management."
  },
  {
    year: "2026",
    title: "Macro-Enterprise Dominance",
    description: "Spearheading South African market development through sustainable business frameworks."
  }
];

const MilestonesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-luxury text-[10px] font-bold">The Journey</span>
          <h2 className="text-4xl font-light text-navy-blue mt-4 uppercase tracking-luxury">Vision & Milestones</h2>
        </div>

        <div className="relative border-l border-gray-100 ml-4 md:ml-0 md:flex md:border-l-0 md:border-t md:justify-between">
          {milestones.map((item, index) => (
            <div key={index} className="relative mb-12 md:mb-0 md:pt-10 md:w-1/4 group">
              {/* Timeline Dot using your Gold */}
              <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-gold md:-top-[5px] md:left-0 transition-transform group-hover:scale-150" />
              
              <div className="pl-8 md:pl-0 md:pr-6">
                <span className="text-2xl font-serif italic text-navy-blue mb-2 block">{item.year}</span>
                <h3 className="text-gold text-xs font-bold uppercase tracking-widest mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;