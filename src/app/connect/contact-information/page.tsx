"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Send, MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactInformationPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* 1. REFINED EDITORIAL HERO */}
      <section className="relative h-[65vh] flex items-center bg-navy-blue overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/ConnectPic.png" 
            alt="Buxino Contact"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white pt-20">
          <div className="max-w-4xl">
            <span className="text-gold font-black tracking-[0.5em] text-[10px] uppercase mb-6 block border-l-2 border-gold pl-4">
              Direct Correspondence
            </span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.85] text-white">
              Connect With <br/><span className="text-gold italic font-serif uppercase font-light tracking-normal">Buxino</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Top Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-32 shadow-2xl border border-gray-100">
            <div className="p-12 flex flex-col justify-center bg-white">
              <h2 className="text-[10px] tracking-[0.4em] font-black text-gold uppercase mb-4">Direct Line</h2>
              <h3 className="text-3xl font-black text-navy-blue tracking-tighter">+27 79 264 4869</h3>
              <p className="text-navy-blue/60 mt-4 font-light text-lg italic font-serif">consulting@buxino.co.za</p>
            </div>

            <div className="bg-navy-blue p-12 text-white flex flex-col justify-center border-l border-gold/20">
              <h2 className="text-[10px] tracking-[0.4em] font-black text-gold uppercase mb-6">Press Office</h2>
              <p className="text-gray-300 text-lg leading-relaxed font-light italic font-serif">
                A digital record of Buxino Consulting’s strategic impact across global and local markets. 
                Our history defines our blueprint.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* INQUIRY FORM - HIGH VISIBILITY DARK BOX */}
            <div className="bg-navy-blue p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
              
              <h2 className="text-3xl font-black text-white uppercase mb-2 tracking-tighter">Strategic Inquiry</h2>
              <p className="text-gold font-serif italic text-sm mb-10">Formalize your engagement with Buxino.</p>
              
              <form className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-widest text-gray-400 font-bold ml-1">Identity</label>
                    <input type="text" placeholder="Full Name" className="w-full p-4 bg-white/5 border border-white/10 text-white focus:border-gold focus:bg-white/10 outline-none text-xs uppercase tracking-widest transition-all placeholder:text-gray-600" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-widest text-gray-400 font-bold ml-1">Electronic Mail</label>
                    <input type="email" placeholder="Business Email" className="w-full p-4 bg-white/5 border border-white/10 text-white focus:border-gold focus:bg-white/10 outline-none text-xs uppercase tracking-widest transition-all placeholder:text-gray-600" />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-widest text-gray-400 font-bold ml-1">Subject Matter</label>
                  <input type="text" placeholder="Sector (e.g. Retail Branding)" className="w-full p-4 bg-white/5 border border-white/10 text-white focus:border-gold focus:bg-white/10 outline-none text-xs uppercase tracking-widest transition-all placeholder:text-gray-600" />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-widest text-gray-400 font-bold ml-1">Narrative Details</label>
                  <textarea rows={5} placeholder="How can Buxino assist?" className="w-full p-4 bg-white/5 border border-white/10 text-white focus:border-gold focus:bg-white/10 outline-none text-xs uppercase tracking-widest transition-all resize-none placeholder:text-gray-600"></textarea>
                </div>

                <button type="submit" className="bg-gold text-navy-blue w-full py-5 flex items-center justify-center gap-3 transition-all duration-500 uppercase font-black tracking-[0.5em] text-[11px] hover:bg-white">
                  Transmit Message <Send size={14} />
                </button>
              </form>
            </div>

            {/* MAP & LOCATION DETAILS */}
            <div className="lg:pt-2">
              <div className="space-y-12">
                <div>
                  <h3 className="text-[11px] font-black text-navy-blue mb-6 uppercase tracking-[0.4em] flex items-center gap-2">
                     <MapPin size={18} className="text-gold" /> Global Headquarters
                  </h3>
                  
                  {/* MAP IMAGE / EMBED COMPONENT */}
                  <div className="relative w-full h-[300px] bg-gray-100 border border-gray-200 group overflow-hidden mb-8">
                    <Image 
                      src="/MapCoordinates.png" // Ensure this asset is in your public folder
                      alt="Buxino HQ Coordinates"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy-blue/20 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute bottom-4 left-4 bg-white p-4 shadow-xl border-l-4 border-gold max-w-[200px]">
                      <p className="text-[10px] font-black text-navy-blue uppercase tracking-widest mb-1 leading-tight">
                        Ga-Rankuwa, Pretoria
                      </p>
                      <p className="text-[9px] text-gray-400 font-mono">25.6178° S, 27.9961° E</p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg font-light italic font-serif pl-0">
                    6159 Matlaisane Street, Zone 5,<br />
                    Ga-Rankuwa, Pretoria, 0208
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-gray-100">
                  <div className="space-y-4">
                    <h4 className="font-black text-navy-blue text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                      <Clock size={16} className="text-gold" /> Operating Hours
                    </h4>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                      Mon - Fri: 09:00 - 17:00<br />
                      GMT +2 (SAST)
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-black text-navy-blue text-[10px] uppercase tracking-[0.3em]">Compliance</h4>
                    <div className="flex flex-col gap-3">
                      <Link href="/legal" className="text-[11px] text-gold font-bold uppercase tracking-widest hover:text-navy-blue transition-colors underline underline-offset-4">PAIA Manual</Link>
                      <Link href="/privacy" className="text-[11px] text-gold font-bold uppercase tracking-widest hover:text-navy-blue transition-colors underline underline-offset-4">POPI Policy</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}