"use client";
import React from 'react';
import { Minus } from 'lucide-react';

const GovernancePage = () => {
  const accolades = [
    "Corporate Strategy & Business Development",
    "Founder: Buxino Wines & Consulting",
    "FMCG & Media Strategic Advisor",
    "Market Entry & Brand Transformation",
    "B-BBEE Level 1 Leadership"
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* 1. CLEAN HEADER - No Navbar overlap, starts fresh */}
      <section className="pt-20 pb-16 bg-white border-b border-gray-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h4 className="gold-accent mb-2">Executive Leadership</h4>
          <h1 className="text-navy-blue text-4xl md:text-6xl font-light uppercase tracking-tighter">
            Governance & <span className="italic font-serif text-gold">Perspective</span>
          </h1>
        </div>
      </section>

      {/* 2. PROFILE SECTION */}
      <section className="py-20 container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Column 1: The Portrait */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="md:sticky md:top-10">
              <div className="overflow-hidden shadow-2xl border border-gray-100">
                <img 
                  src="/BakangSitting.jpg" 
                  alt="Bakang Matjila" 
                  className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-light text-navy-blue tracking-tighter uppercase">Bakang Matjila</h3>
                <p className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mt-2">Founder & CEO</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold leading-relaxed">
                    BCom: Economic Management Sciences <br/>
                    <span className="text-navy-blue/70 mt-1 block">Marketing · Accounting · Management</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: The Narrative */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-light text-navy-blue mb-10 leading-tight uppercase tracking-tight">
                Bridging the intersection of <br/>
                <span className="italic font-serif text-gold lowercase text-4xl">marketing psychology</span> & <br/>
                <span className="italic font-serif text-gold lowercase text-4xl">financial precision</span>.
              </h2>
              
              <div className="space-y-8 text-gray-500 font-light text-lg leading-relaxed">
                <p>
                  Bakang Matjila is a multi-disciplinary strategist whose academic foundation in Economic Management Sciences serves as the blueprint for Buxino Consulting. By synthesizing Marketing Management, Financial Accounting, and Business Management, he provides a holistic advisory experience anchored in commercial reality.
                </p>
                <p>
                  His career is defined by high-stakes business development within the TMT, FMCG, and Media sectors. Bakang’s unique expertise allows him to translate creative brand transformation into the rigid requirements of financial reporting and corporate governance.
                </p>
              </div>

              {/* Accolades */}
              <div className="mt-16">
                <h4 className="gold-accent mb-8 block border-b border-gray-50 pb-4">Executive Competencies</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {accolades.map((text, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="h-[1px] w-6 bg-gold group-hover:w-10 transition-all"></div>
                      <span className="text-[11px] uppercase tracking-widest text-navy-blue/80 font-bold group-hover:text-gold transition-colors">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUOTE SECTION */}
      <section className="py-24 bg-navy-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-4xl font-light leading-tight mb-8">
              "Governance is not just about oversight; it’s about creating the structural freedom for a brand to <span className="text-gold italic font-serif">grow without losing its soul.</span>"
            </p>
            <div className="w-12 h-[1px] bg-gold mx-auto mb-6"></div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-white font-bold opacity-60 text-pretty">B. Matjila</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GovernancePage;