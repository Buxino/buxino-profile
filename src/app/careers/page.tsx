"use client";
import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, Lightbulb, Target, Send } from 'lucide-react';

const coreValues = [
  {
    icon: <Target className="text-gold" size={24} />,
    title: "Precision",
    desc: "We don't just consult; we architect exact business outcomes."
  },
  {
    icon: <Lightbulb className="text-gold" size={24} />,
    title: "Innovation",
    desc: "Redefining narratives in the TMT and FMCG sectors."
  },
  {
    icon: <Briefcase className="text-gold" size={24} />,
    title: "Leadership",
    desc: "We seek individuals who can lead high-stakes corporate gifting and retail strategies."
  }
];

export default function CareersPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative h-[60vh] flex items-center bg-navy-blue overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/CareersPic.png" 
            alt="Buxino Careers"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white pt-20">
          <div className="max-w-4xl">
            <span className="text-gold font-black tracking-[0.5em] text-[10px] uppercase mb-6 block border-l-2 border-gold pl-4">
              Human Capital
            </span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.85] text-white">
              Join the <br/><span className="text-gold italic font-serif uppercase font-light tracking-normal">Blueprint</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. CAREERS CONTENT */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Side: Philosophy */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-black text-navy-blue uppercase tracking-tighter mb-8 leading-none">
                  Cultivating <span className="text-gold italic font-serif font-light lowercase">elite</span> Talent
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed font-serif italic border-l-4 border-gray-100 pl-6">
                  At Buxino Consulting, we believe that the right strategy is only as good as the minds behind it. 
                  We are constantly looking for visionary consultants, project managers, and creative executors 
                  to join our ecosystem.
                </p>
              </div>

              <div className="space-y-10 pt-4">
                {coreValues.map((value, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="mt-1 transition-transform duration-300 group-hover:scale-110">{value.icon}</div>
                    <div>
                      <h4 className="font-black text-navy-blue uppercase text-xs tracking-[0.3em] mb-2">{value.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-md">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Speculative Form */}
            <div className="bg-navy-blue p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gold"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">Executive Search</h3>
                <p className="text-gold font-serif italic text-sm mb-10 opacity-80">Submit your professional profile for consideration.</p>
                
                <form className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold ml-1">Identity</label>
                    <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold focus:bg-white/10 outline-none transition-all text-xs uppercase tracking-widest placeholder:text-gray-600" />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold ml-1">Core Competency</label>
                    <input type="text" placeholder="e.g., TMT Strategy" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold focus:bg-white/10 outline-none transition-all text-xs uppercase tracking-widest placeholder:text-gray-600" />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold ml-1">Digital Presence</label>
                    <input type="url" placeholder="LinkedIn URL" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold focus:bg-white/10 outline-none transition-all text-xs uppercase tracking-widest placeholder:text-gray-600" />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold ml-1">Narrative</label>
                    <textarea rows={3} placeholder="Bio / Professional Ambition" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold focus:bg-white/10 outline-none transition-all text-xs uppercase tracking-widest resize-none placeholder:text-gray-600" />
                  </div>
                  
                  <button className="bg-gold text-navy-blue w-full py-5 flex items-center justify-center gap-3 mt-4 transition-all duration-500 uppercase font-black tracking-[0.5em] text-[11px] hover:bg-white">
                    Transmit Profile <Send size={14} />
                  </button>
                </form>
              </div>
              
              {/* Background Accent */}
              <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
                <Briefcase size={250} className="text-white" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}