"use client";
import React from 'react';
import Link from 'next/link';
import { Layers, Globe, Cpu, ShoppingBag, Wine, TrendingUp, Target, ShieldCheck, ArrowRight, Music, Utensils } from 'lucide-react';

const investmentSectors = [
  {
    icon: <Cpu className="text-gold" size={24} />,
    title: "TMT Sector",
    subtitle: "Technology, Media & Telecomms",
    desc: "Capitalizing on the digital infrastructure of tomorrow. We consult on and invest in high-growth tech narratives."
  },
  {
    icon: <ShoppingBag className="text-gold" size={24} />,
    title: "FMCG & Retail",
    subtitle: "Fast Moving Consumer Goods",
    desc: "Driving operational excellence in retail value chains from shelf-space to lean supply principles."
  },
  {
    icon: <Layers className="text-gold" size={24} />,
    title: "Financial Services",
    subtitle: "Capital & Risk Management",
    desc: "Architecting fiscal structures that ensure long-term net asset value growth and sustainable cash cycles."
  },
  {
    icon: <Globe className="text-gold" size={24} />,
    title: "Marketing & Media",
    subtitle: "Strategic Narrative",
    desc: "The overarching Buxino narrative—positioning brands for elite market entry and long-term equity."
  }
];

const InvestmentsComponent = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. EDITORIAL HERO */}
      <section className="pt-40 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl">
            <h4 className="text-gold mb-8 font-black uppercase tracking-[0.3em] text-[10px]">Asset Portfolio & Holdings</h4>
            <h1 className="text-navy-blue text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] mb-12">
              Strategic <br/>
              <span className="text-gold italic font-serif font-light lowercase tracking-tight">Holdings</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. THE 5-YEAR STRATEGY BOARD - ARCHITECTURAL STYLE */}
      <section className="py-24 bg-[#FAFAFA] border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="border-l-4 border-gold pl-6">
              <span className="text-navy-blue/40 font-black uppercase tracking-[0.4em] text-[10px]">Strategic Framework</span>
              <h2 className="text-5xl font-black uppercase tracking-tighter mt-2 text-navy-blue">5-Year Strategy Board</h2>
            </div>
            <div className="text-right">
              <span className="text-navy-blue font-bold text-[10px] tracking-widest border border-navy-blue/20 px-3 py-1">2026—2031 Blueprint</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <Target className="text-gold" size={32} />
              <h3 className="text-xl font-black uppercase text-navy-blue">NAV Optimization</h3>
              <p className="text-gray-500 font-serif italic leading-relaxed text-sm">
                Aggressive growth of Net Asset Value through lean operations and high-yield acquisitions in TMT and Retail sectors.
              </p>
            </div>
            <div className="space-y-6">
              <TrendingUp className="text-gold" size={32} />
              <h3 className="text-xl font-black uppercase text-navy-blue">Capital Velocity</h3>
              <p className="text-gray-500 font-serif italic leading-relaxed text-sm">
                Ensuring sustainable cash flow cycles that allow for rapid reinvestment into emerging market opportunities.
              </p>
            </div>
            <div className="space-y-6">
              <ShieldCheck className="text-gold" size={32} />
              <h3 className="text-xl font-black uppercase text-navy-blue">Risk Sovereignty</h3>
              <p className="text-gray-500 font-serif italic leading-relaxed text-sm">
                Protecting corporate identifiers and IP through POPIA-aligned protocols and rigorous data encryption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE CHAINS - BUXINO WINES, MINO, & RAMSAY */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            <h4 className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-center md:text-left">Vertical Integration</h4>
            <h2 className="text-navy-blue text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-20 text-center md:text-left">
              Primary Value <span className="text-gold italic font-serif font-light lowercase tracking-tight">Chains</span>
            </h2>

            <div className="grid gap-16">
              {/* THE WINE LINK - ELEGANT CTA */}
              <Link href="/buxino_wines" className="group block border-t border-gray-100 pt-10 hover:border-gold transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex items-center gap-8">
                    <Wine className="text-gold" size={40} strokeWidth={1} />
                    <div>
                      <h3 className="text-3xl font-black uppercase text-navy-blue group-hover:text-gold transition-colors">Buxino Wines</h3>
                      <p className="text-gray-500 font-serif italic text-lg mt-1">Luxury Viticulture & Corporate Gifting Assets</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-navy-blue font-black uppercase text-[10px] tracking-[0.3em] group-hover:text-gold transition-all">
                    Access Private Cellar <ArrowRight size={16} />
                  </div>
                </div>
              </Link>

              <div className="grid md:grid-cols-2 gap-16">
                {/* IN THE MINO */}
                <div className="border-t border-gray-100 pt-10">
                   <div className="flex items-center gap-3 mb-6">
                      <Music className="text-gold" size={20} />
                      <h4 className="text-navy-blue text-xl font-black uppercase tracking-tight">In The Mino</h4>
                   </div>
                   <p className="text-gray-500 text-sm italic font-serif leading-relaxed">
                      A specialized corporate management agency for the creative sector. We apply rigorous corporate frameworks to music management and artist intellectual property.
                   </p>
                </div>

                {/* BUXRAMSY */}
                <div className="border-t border-gray-100 pt-10">
                   <div className="flex items-center gap-3 mb-6">
                      <Utensils className="text-gold" size={20} />
                      <h4 className="text-navy-blue text-xl font-black uppercase tracking-tight">BuxRamsy</h4>
                   </div>
                   <p className="text-gray-500 text-sm italic font-serif leading-relaxed">
                      The premier corporate catering division. Delivering high-end culinary experiences tailored for executive boardrooms and private corporate functions.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY FOCUS AREAS - INTEGRATED CLEAN THEME */}
      <section className="py-24 border-t border-gray-100 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <h4 className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-16 text-center">Industry Focus Areas</h4>
          <div className="grid md:grid-cols-4 gap-x-12 gap-y-16">
            {investmentSectors.map((sector, idx) => (
              <div key={idx} className="space-y-4">
                <span className="text-navy-blue/10 text-4xl font-black block">0{idx + 1}</span>
                <h3 className="text-lg font-black uppercase tracking-tighter text-navy-blue">{sector.title}</h3>
                <h5 className="text-gold text-[9px] font-bold uppercase tracking-widest">{sector.subtitle}</h5>
                <p className="text-gray-500 text-xs font-serif italic leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestmentsComponent;