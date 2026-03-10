"use client";

import React from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Calendar, ArrowRight, Sparkles, Trophy } from "lucide-react";

const eventChannels = [
  {
    channel: 'Channel A',
    title: 'Institutional Summits',
    subtitle: 'High-Value Moment Engineering',
    description: 'High-stakes environments for policy discussion, industry launches, and stakeholder engagement. We architect atmospheres where institutional deals are solidified.',
    features: [
      'EXECUTIVE GUEST MANAGEMENT',
      'ATMOSPHERIC BRANDING',
      'TECHNICAL PRODUCTION',
      'PROTOCOL & SECURITY LIAISON',
      'MEDIA & PRESS ARCHITECTURE'
    ],
    cta: 'Initiate Summit Brief'
  },
  {
    channel: 'Channel B',
    title: 'Bespoke Galas',
    subtitle: 'The "Midnight Forest" Curation',
    description: 'Exclusive, curated experiences designed for high-net-worth networking and milestone celebrations. Precision aesthetics meets immersive hospitality.',
    features: [
      'LUXURY CATERING & PAIRING',
      'SECURE VENUE PROCUREMENT',
      'IMMERSIVE CURATION',
      'PRIVATE PERFORMANCE BOOKING',
      'AESTHETIC SCULPTING'
    ],
    cta: 'Request Bespoke Concept'
  }
];

const EventsPage = () => {
  return (
    <main className="bg-black text-white min-h-screen w-full overflow-x-hidden font-sans selection:bg-[#c5a059] selection:text-black">
      
      {/* SECTION 1: ATMOSPHERIC HERO - High Contrast */}
      <section 
        className="min-h-screen w-full flex flex-col items-center justify-center text-center px-4 relative"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.95)), url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 max-w-5xl">
          <span className="text-[#c5a059] font-black tracking-[0.8em] text-[10px] md:text-[12px] uppercase mb-8 block">
            Atmospheric Execution
          </span>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-4 leading-[0.85] text-white font-serif">
            Event <br/>
            <span className="text-[#c5a059] italic font-light lowercase tracking-normal">Architecture</span>
          </h1>
          <div className="h-[1px] w-48 bg-[#c5a059]/40 mx-auto my-12"></div>
          <p className="text-white/60 font-serif italic text-lg md:text-2xl tracking-wide max-w-3xl mx-auto leading-relaxed">
            "Engineering environments where business happens naturally."
          </p>
        </div>
      </section>

      {/* SECTION 2: THE PHILOSOPHY - Commercial Lever */}
      <section className="py-32 bg-[#050505] relative border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h4 className="text-[#c5a059] uppercase tracking-[0.5em] text-[11px] font-black">Strategic Gathering</h4>
            <div className="space-y-6 text-gray-400 text-xl md:text-2xl leading-relaxed font-light italic font-serif">
              <p>
                In the corporate world, an event is never just a social occasion. It is a <span className="text-white font-bold not-italic">Strategic Lever</span>.
              </p>
              <p>
                Buxino architects high-concept environments that align with your <span className="text-[#c5a059] not-italic font-bold">Institutional Objectives</span>, ensuring every guest, light, and moment serves your long-term prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE CHANNELS - Unified Grid Architecture */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16">
            {eventChannels.map((item) => (
              <div key={item.channel} className="group relative bg-zinc-900/20 border border-white/5 p-12 transition-all hover:border-[#c5a059]/30 flex flex-col justify-between min-h-[600px]">
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

      {/* SECTION 4: FORM TRIGGER - Commission Engine */}
      <section className="py-40 bg-[#020617] text-center border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Trophy className="text-[#c5a059] mx-auto mb-8" size={40} />
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 text-white leading-none">
            Commission a <span className="text-[#c5a059] italic font-serif lowercase font-light">Moment</span>
          </h2>
          <p className="text-[#c5a059] text-[11px] tracking-[0.5em] uppercase italic mb-16 opacity-80 max-w-xl mx-auto">
            Brief our production team on your upcoming institutional gathering.
          </p>
          <Link href="/connect/contact-information#inquiry-form" className="bg-[#c5a059] text-black px-12 py-7 uppercase font-black tracking-[0.4em] text-[11px] hover:bg-white transition-all shadow-2xl inline-flex items-center gap-4">
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