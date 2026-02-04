"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Award, ShieldCheck, Globe } from "lucide-react";

const BuxinoWinesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full overflow-x-hidden font-sans">
      
      {/* SECTION 1: LUXURY HERO */}
      <section 
        className="min-h-screen w-full flex flex-col items-center justify-center text-center px-4 relative"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url('/BW_WineFarm.png'), url('https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?q=80&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* pt-24 ensures content sits below the fixed navbar while the background remains full-screen */}
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
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent"></div>
        </div>
      </section>

      {/* SECTION 2: THE PHILOSOPHY (FMCG Narrative) */}
      <section className="py-32 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-4 border border-gold/20 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative z-10 p-2 bg-zinc-900 border border-white/5">
                <img 
                  src="/BuxinoWinesbottles.png" 
                  alt="Buxino Signature Collection" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000"
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1000' }} 
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
                <span className="text-white"> Bakang Matjila</span>. We bridge the gap between mass-market premium 
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

      {/* SECTION 3: THE COLLECTION (Product Cards) */}
      <section id="collection" className="py-32 bg-black border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20">
            <h4 className="text-gold text-xs uppercase tracking-[0.5em] mb-4 font-black">The Portfolio</h4>
            <h2 className="text-4xl md:text-5xl font-serif italic text-white">Signature Offerings</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Red Wine Card */}
            <div className="group">
              <div className="relative h-[600px] overflow-hidden bg-zinc-900 mb-8 border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1553390774-b4822481c894?q=80&w=1944" 
                  alt="Buxino Reserve Red"
                  className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <h3 className="text-3xl font-serif mb-2 text-white">The Reserve Red</h3>
                  <p className="text-gold font-bold tracking-widest text-xl">R345.00</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed uppercase tracking-wider">Bold • Structured • Meticulous Oak Integration</p>
              <button className="w-full border border-white/20 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">Acquire Allocation</button>
            </div>

            {/* White Wine Card */}
            <div className="group">
              <div className="relative h-[600px] overflow-hidden bg-zinc-900 mb-8 border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1559154660-f4633748286a?q=80&w=1974" 
                  alt="Buxino Signature White"
                  className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <h3 className="text-3xl font-serif mb-2 text-white">Signature White</h3>
                  <p className="text-gold font-bold tracking-widest text-xl">R295.00</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed uppercase tracking-wider">Vibrant • Crisp • Contemporary Elegance</p>
              <button className="w-full border border-white/20 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">Acquire Allocation</button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORPORATE STRATEGY (The Gifting Tiers) */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <Award className="mx-auto text-gold mb-8" size={48} />
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
            Corporate <span className="text-gold italic font-serif lowercase font-light">Gifting</span> Solutions
          </h2>
          <p className="text-gray-400 text-xl font-light mb-16 leading-relaxed">
            From custom metallic monograms to the "Silent Sales Pitch" packaging, our tiered solutions are crafted to elevate client retention and signal executive excellence.
          </p>
          
          <div className="grid md:grid-cols-3 gap-1px bg-white/10 border border-white/10">
            {['Bronze', 'Silver', 'Gold'].map((tier) => (
              <div key={tier} className="bg-black p-10 hover:bg-zinc-900 transition-all group">
                <h3 className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-black">{tier} Tier</h3>
                <p className="text-[10px] text-gray-500 mb-8 uppercase">Bespoke Executive Packages</p>
                <Link 
                  href="/connect" 
                  className="text-white text-[10px] border-b border-gold pb-2 uppercase tracking-widest group-hover:text-gold transition-colors"
                >
                  Inquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
           <div className="text-[20vw] font-black text-white leading-none">BUXINO</div>
        </div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10">Join the <span className="text-gold italic font-serif lowercase font-light">Ascent</span></h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/connect" className="bg-gold text-black px-12 py-5 uppercase font-black tracking-widest text-[11px] hover:bg-white transition-colors">
              Request Gifting Catalog
            </Link>
            <Link href="#collection" className="border border-white/20 text-white px-12 py-5 uppercase font-black tracking-widest text-[11px] hover:bg-white/10 transition-colors">
              Direct-to-Consumer Shop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuxinoWinesPage;