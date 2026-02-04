"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Award } from "lucide-react";

const giftingTiers = [
  {
    tier: 'Bronze',
    title: 'The Executive Pulse',
    description: 'Calibrated for professional continuity and project milestones. Features subtle laser-etched branding.',
    cta: 'Inquire Bronze'
  },
  {
    tier: 'Silver',
    title: 'The Strategic Alliance',
    description: 'Raised metallic finishes and hand-applied monograms for high-stakes account management.',
    cta: 'Secure Silver'
  },
  {
    tier: 'Gold',
    title: 'The Institutional Signature',
    description: 'Deep-engraved legacy pieces with 24k gold leaf inscriptions. Reserved for board-level diplomacy.',
    cta: 'Request Gold Allocation'
  }
];

const BuxinoWinesPage = () => {
  return (
    <main className="bg-black text-white min-h-screen w-full overflow-x-hidden font-sans">
      <Navbar />
      
      {/* SECTION 1: LUXURY HERO */}
      <section 
        className="min-h-screen w-full flex flex-col items-center justify-center text-center px-4 relative"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url('/hero_vineyard.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 max-w-5xl pt-24">
          <span className="text-gold font-black tracking-[0.6em] text-[10px] md:text-[12px] uppercase mb-6 block animate-fade-in">
            The Art of the Ascent
          </span>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-4 leading-none text-white">
            Buxino <br/>
            <span className="text-gold italic font-serif font-light lowercase tracking-normal">Wines</span>
          </h1>
          <div className="h-[1px] w-32 bg-gold/50 mx-auto my-8"></div>
          <p className="text-white/80 font-serif italic text-lg md:text-2xl tracking-wide max-w-2xl mx-auto">
            "A cultural statement of strategic vision and meticulous craftsmanship."
          </p>
        </div>
      </section>

      {/* SECTION 2: THE PHILOSOPHY */}
      <section className="py-32 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-4 border border-gold/20 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative z-10 p-2 bg-zinc-900 border border-white/5">
                <img 
                  src="/hero_vineyard.jpg" 
                  alt="Buxino Signature Collection" 
                  className="w-full h-auto transition-all duration-700"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-gold uppercase tracking-[0.4em] text-[11px] font-black">The Founder's Evolution</h4>
                <h2 className="text-5xl font-black uppercase tracking-tighter leading-none">
                  FMCG Precision <br/><span className="text-gold italic font-serif font-light lowercase">meets</span> Terroir
                </h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Leveraging a granular understanding of market dynamics from the FMCG space, Buxino Wines is a deliberate pivot by 
                <span className="text-white font-medium"> Bakang Matjila</span>. We bridge the gap between mass-market premium 
                and exclusive heritage brands with a contemporary aesthetic designed for the professional class.
              </p>
              <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="text-white font-black uppercase tracking-widest text-sm italic">"Wine as a Strategic Asset"</span>
                  <span className="text-gold text-[10px] uppercase tracking-widest font-bold">The Buxino Blueprint</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE COLLECTION */}
      <section id="collection" className="py-32 bg-black border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20 text-center md:text-left">
            <h4 className="text-gold text-xs uppercase tracking-[0.5em] mb-4 font-black">The Portfolio</h4>
            <h2 className="text-4xl md:text-5xl font-serif italic text-white">Signature Offerings</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* RESERVE RED */}
            <div className="group">
              <div className="relative h-[650px] overflow-hidden bg-zinc-900 mb-8 border border-white/5">
                <img 
                  src="/reserve_red.jpg" 
                  alt="Buxino Reserve Red"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <h3 className="text-3xl font-serif mb-2 text-white uppercase tracking-wider">The Reserve Red</h3>
                  <p className="text-gold font-bold tracking-widest text-xl">R350.00</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed uppercase tracking-wider text-center">Bold • Structured • Meticulous Oak Integration</p>
              <Link href="/connect" className="w-full block text-center border border-gold/40 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-gold hover:text-black transition-all">Acquire Allocation</Link>
            </div>

            {/* SIGNATURE WHITE */}
            <div className="group">
              <div className="relative h-[650px] overflow-hidden bg-zinc-900 mb-8 border border-white/5">
                <img 
                  src="/signature_white.jpg" 
                  alt="Buxino Signature White"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <h3 className="text-3xl font-serif mb-2 text-white uppercase tracking-wider">Signature White</h3>
                  <p className="text-gold font-bold tracking-widest text-xl">R280.00</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed uppercase tracking-wider text-center">Vibrant • Crisp • Contemporary Elegance</p>
              <Link href="/connect" className="w-full block text-center border border-gold/40 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-gold hover:text-black transition-all">Acquire Allocation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LIFESTYLE & ACTIVATIONS */}
      <section className="py-32 bg-[#080808] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-900/20 skew-x-12 pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h4 className="text-gold text-xs uppercase tracking-[0.5em] mb-4 font-black">Experiential Luxury</h4>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                The Buxino <span className="text-gold italic font-serif lowercase font-light">Lifestyle</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-md text-sm leading-relaxed text-right hidden md:block">
              From the fairway to the boardroom. We curate exclusive activations that blend professional networking with the art of fine wine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">
            {/* 1. Large Feature: Golf/Tennis */}
            <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden border border-white/5">
              <img 
                src="/activation_golf.png" 
                alt="Buxino Golf Day Activation" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-3 mb-2">
                   <span className="bg-gold text-black text-[9px] font-black px-2 py-1 uppercase tracking-widest">Signature Event</span>
                </div>
                <h3 className="text-3xl font-serif text-white italic">The Executive Series</h3>
                <p className="text-gray-300 text-xs mt-2 max-w-md">Curating high-stakes networking environments on the green.</p>
              </div>
            </div>

            {/* 2. Secondary: Club/Nightlife */}
            <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden border border-white/5">
              <img 
                src="/activation_club.png" 
                alt="Buxino Club Activation" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold uppercase tracking-wider text-white">Nightlife & Culture</h3>
              </div>
            </div>

            {/* 3. Tertiary: Tasting */}
            <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden border border-white/5">
              <img 
                src="/BuxinoWinesbottles.png" 
                alt="Private Tasting" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
               <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold uppercase tracking-wider text-white">Private Allocations</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CORPORATE STRATEGY (UPDATED LAYOUT) */}
      <section className="py-32 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* LEFT: THE VISUAL PROOF */}
            <div className="relative h-[800px] hidden lg:block border border-white/5 group overflow-hidden">
               <img 
                src="/corporate_gifting.png" 
                alt="Buxino Corporate Gifting Box" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* RIGHT: THE STRATEGY */}
            <div>
              <Award className="text-gold mb-8" size={48} />
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                Corporate <br/> <span className="text-gold italic font-serif lowercase font-light">Gifting</span> Solutions
              </h2>
              <p className="text-gray-400 text-lg font-light mb-12 leading-relaxed">
                Tiered solutions crafted to signal executive excellence and cement institutional partnerships. We handle the logistics; you handle the handshake.
              </p>
              
              <div className="space-y-6">
                {giftingTiers.map((item) => (
                  <div key={item.tier} className="bg-white/5 p-8 border border-white/5 hover:border-gold/30 transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-gold uppercase tracking-[0.3em] text-[10px] font-black">{item.tier} Tier</h3>
                      <Link href={`/connect?tier=${item.tier.toLowerCase()}`} className="text-white text-[10px] uppercase tracking-widest hover:text-gold transition-colors">
                        {item.cta} &rarr;
                      </Link>
                    </div>
                    <h4 className="text-white text-xl font-serif italic mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-wider">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 bg-black text-center relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-5">
           <div className="text-[20vw] font-black text-white leading-none select-none">BUXINO</div>
        </div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10">Join the <span className="text-gold italic font-serif lowercase font-light">Ascent</span></h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/connect" className="bg-gold text-black px-12 py-5 uppercase font-black tracking-widest text-[11px] hover:bg-white transition-colors">
              Request Gifting Catalog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BuxinoWinesPage;