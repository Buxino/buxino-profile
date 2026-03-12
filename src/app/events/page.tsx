"use client";

import React from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Sparkles, Trophy, ArrowRight, ShieldCheck, Globe, Zap } from "lucide-react";

const eventChannels = [
  {
    channel: 'Channel A',
    title: 'Institutional Summits',
    subtitle: 'High-Value Moment Engineering',
    description: 'High-stakes environments for policy discussion, industry launches, and stakeholder engagement. We architect atmospheres where institutional deals are solidified.',
    features: [
      'EXECUTIVE GUEST MANAGEMENT (C-SUITE)',
      'ATMOSPHERIC BRANDING & SPONSORSHIP MAPPING',
      'HIGH-FIDELITY TECHNICAL PRODUCTION',
      'PROTOCOL & DIPLOMATIC SECURITY LIAISON',
      'MEDIA & IP PROTECTION ARCHITECTURE'
    ],
    cta: 'Initiate Summit Brief'
  },
  {
    channel: 'Channel B',
    title: 'Bespoke Galas',
    subtitle: 'The "Midnight Forest" Curation',
    description: 'Exclusive, curated experiences designed for high-net-worth networking and milestone celebrations. Precision aesthetics meets immersive hospitality.',
    features: [
      'MICHELIN-GRADE CATERING & PAIRING',
      'SECURE PRIVATE VENUE PROCUREMENT',
      'IMMERSIVE CULINARY CURATION',
      'PRIVATE ARTIST PERFORMANCE BOOKING',
      'ULTRA-PREMIUM GIFT ARCHITECTURE'
    ],
    cta: 'Request Bespoke Concept'
  }
];

const EventsPage = () => {
  return (
    <main className="bg-black text-white min-h-screen w-full overflow-x-hidden font-sans selection:bg-[#c5a059] selection:text-black">
      
      {/* 1. ATMOSPHERIC HERO - High-Contrast Institutional Aesthetic */}
      <section 
        className="min-h-screen w-full flex flex-col items-center justify-center text-center px-4 relative"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,1)), url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 max-w-5xl">
          <span className="text-[#c5a059] font-black tracking-[0.8em] text-[10px] md:text-[12px] uppercase mb-8 block">
            Atmospheric Engineering
          </span>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-4 leading-[0.85] text-white font-serif">
            Event <br/>
            <span className="text-[#c5a059] italic font-light lowercase tracking-normal">Architecture</span>
          </h1>
          <div className="h-[1px] w-48 bg-[#c5a059]/40 mx-auto my-12"></div>
          <p className="text-white/60 font-serif italic text-lg md:text-2xl tracking-wide max-w-3xl mx-auto leading-relaxed">
            "We do not plan events. We architect the physical environments where corporate strategy becomes reality."
          </p>
        </div>
      </section>

      {/* 2. THE SA PROBLEM - Strategic Diagnostic */}
      <section className="py-32 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-12 text-center md:text-left">
            <h4 className="text-[#c5a059] uppercase tracking-[0.5em] text-[11px] font-black">The Institutional Diagnostic</h4>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Solving the <br/>
                <span className="text-[#c5a059] italic font-serif lowercase font-light">Execution Gap.</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light italic font-serif">
                <p>
                  In the South African corporate landscape, the "Event" is often reduced to mere logistics. This creates a critical <span className="text-white font-bold not-italic underline decoration-[#c5a059]">Failure of Intent</span>.
                </p>
                <p>
                  Buxino Consulting addresses this by bridging the gap between creative chaos and corporate discipline. We treat every gathering as a <span className="text-white font-bold not-italic">Strategic Lever</span>—engineering atmospheres that force ROI, protect IP, and align with your institutional objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CHANNELS - Core Service Offering */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16">
            {eventChannels.map((item) => (
              <div key={item.channel} className="group relative bg-[#0a0a0a] border border-white/5 p-12 transition-all hover:border-[#c5a059]/30 flex flex-col justify-between min-h-[650px]">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[#c5a059] uppercase tracking-[0.4em] text-[10px] font-black">{item.channel}</span>
                    <Sparkles className="text-[#c5a059]/20 group-hover:text-[#c5a059] transition-colors" size={24} />
                  </div>
                  <h3 className="text-4xl font-serif text-white mb-2 italic tracking-wider">{item.title}</h3>
                  <p className="text-[#c5a059] text-[10px] tracking-[0.3em] uppercase mb-8 font-bold">{item.subtitle}</p>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-10 font-light italic">
                    {item.description}
                  </p>

                  <ul className="space-y-4 mb-12">
                    {item.features.map((feature) => (
                      <li key={feature} className="text-[9px] text-white/70 uppercase tracking-[0.2em] flex items-center gap-4 font-bold">
                        <div className="w-1.5 h-1.5 bg-[#c5a059] rounded-full shadow-[0_0_8px_rgba(197,160,89,0.4)]"></div> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href="/connect/contact-information#inquiry-form" 
                  className="w-full block text-center border border-[#c5a059]/30 py-6 text-[10px] uppercase tracking-[0.4em] hover:bg-[#c5a059] hover:text-black transition-all font-black"
                >
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FORMAL BRIEF REQUEST - Commission Engine */}
      <section className="py-40 bg-[#020617] text-center border-t border-white/5 relative">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Trophy className="text-[#c5a059] mx-auto mb-8" size={40} />
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 text-white leading-none">
            Commission a <span className="text-[#c5a059] italic font-serif lowercase font-light">Moment</span>
          </h2>
          <p className="text-[#c5a059] text-[11px] tracking-[0.5em] uppercase italic mb-16 opacity-80 max-w-xl mx-auto">
            Formal inquiry for institutional summits, gala curations, and bespoke corporate hospitality.
          </p>
          <Link 
            href="/connect/contact-information#inquiry-form" 
            className="bg-[#c5a059] text-black px-12 py-7 uppercase font-black tracking-[0.4em] text-[11px] hover:bg-white transition-all shadow-2xl inline-flex items-center gap-4"
          >
            Submit Event Brief <ArrowRight size={16} />
          </Link>
          
          <div className="mt-32 opacity-10 text-[8px] tracking-[1em] uppercase text-white font-light">
            Atmospheric Engineering • Buxino (Pty) Ltd • 2026
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default EventsPage;