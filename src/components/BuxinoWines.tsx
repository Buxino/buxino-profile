"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BuxinoWinesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full overflow-x-hidden">
      <Navbar />
      
      {/* SECTION 1: LUXURY HERO */}
      <section 
        className="h-screen w-full flex flex-col items-center justify-center text-center px-4 relative"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url('/BW_WineFarm.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed' // Parallax effect for premium feel
        }}
      >
        <div className="relative z-10 max-w-5xl">
          <span className="text-gold font-black tracking-[0.6em] text-[10px] md:text-[12px] uppercase mb-6 block">
            The Viticulture Division
          </span>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-4 leading-none text-white">
            Buxino <br/>
            <span className="text-gold italic font-serif font-light lowercase tracking-normal">Wines</span>
          </h1>
          <div className="h-[1px] w-32 bg-gold/50 mx-auto my-8"></div>
          <p className="text-white font-serif italic text-lg md:text-2xl tracking-wide opacity-90">
            "The Boardroom to Soil Collection"
          </p>
        </div>
        
        {/* Decorative Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-[9px] uppercase tracking-[0.4em] text-gold/60 rotate-90 mb-8">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent"></div>
        </div>
      </section>

      {/* SECTION 2: THE PHILOSOPHY (Split Layout) */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
            
            {/* Image Side - Styled like an art gallery piece */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
              <div className="relative z-10 p-4 border border-white/5 bg-zinc-900/20 backdrop-blur-sm shadow-2xl">
                <img 
                  src="/BuxinoWinesbottles.png" 
                  alt="Buxino Signature Collection" 
                  className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-700 shadow-2xl" 
                />
              </div>
              {/* Vertical Text Badge */}
              <div className="absolute -right-8 top-1/2 -rotate-90 origin-right">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 whitespace-nowrap">
                  ESTABLISHED STRATEGY 2026
                </span>
              </div>
            </div>

            {/* Text Side */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h4 className="text-gold uppercase tracking-[0.4em] text-[11px] font-black">Our Narrative</h4>
                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none">
                  Legacy in <br/><span className="text-gold italic font-serif font-light lowercase">every</span> Bottle
                </h2>
              </div>
              
              <p className="text-gray-400 text-2xl leading-relaxed font-serif italic border-l-2 border-gold/30 pl-8 py-2">
                "In consulting, we build structures. In viticulture, we nurture life. 
                Buxino Wines is the intersection of these two worlds—a testament to 
                what happens when you apply strategic discipline to natural beauty."
              </p>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="h-[2px] w-16 bg-gold"></div>
                <div className="flex flex-col">
                  <span className="text-white font-black uppercase tracking-widest text-sm">Bakang Matjila</span>
                  <span className="text-gold text-[10px] uppercase tracking-widest font-bold">Principal Consultant & Vintner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TERROIR PILLARS (Grid) */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-1px bg-white/10 border border-white/10">
            {[
              { title: "Terroir", desc: "Strategically sourced vineyards that reflect the complexity of the South African landscape." },
              { title: "Craft", desc: "Small-batch production ensuring every bottle meets the 'Buxino Blueprint' for quality." },
              { title: "Legacy", desc: "A B-BBEE Level 1 brand disrupting the traditional wine industry narrative." }
            ].map((pillar, i) => (
              <div key={i} className="bg-black p-12 group hover:bg-zinc-900 transition-colors duration-500">
                <span className="text-gold font-serif italic text-3xl mb-8 block opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                <h3 className="text-xl font-black mb-4 text-white uppercase tracking-tighter">{pillar.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION */}
      <section className="py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/5 uppercase select-none pointer-events-none">
                BUXINO
            </div>
        </div>
        <div className="relative z-10">
          <p className="text-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6">Acquisitions & Private Tastings</p>
          <a 
            href="mailto:consulting@buxino.co.za" 
            className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white hover:text-gold transition-all duration-500 block mb-8"
          >
            consulting@buxino.co.za
          </a>
          <button className="bg-white text-black px-12 py-5 uppercase font-black tracking-widest text-[10px] hover:bg-gold transition-colors">
            Request the Portfolio
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BuxinoWinesPage;