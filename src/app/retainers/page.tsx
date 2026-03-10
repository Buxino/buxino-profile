"use client";

import React, { useState, useRef } from 'react';
import Footer from '@/components/Footer';
import { Send, Loader2, CheckCircle, Lock, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const retainerChannels = [
  {
    channel: 'Channel A',
    title: 'Executive Guard',
    subtitle: 'Institutional Oversight',
    description: 'Continuous strategic monitoring and compliance maintenance. We act as the external board of advisors, ensuring your corporate vehicle never stalls.',
    features: [
      'MONTHLY GOVERNANCE AUDITS',
      'ON-CALL STRATEGIC ADVISORY',
      'PRIORITY DOCUMENT FILING',
      'REGULATORY LIAISON SERVICES',
      'QUARTERLY RISK ASSESSMENTS'
    ],
    cta: 'Secure Executive Guard'
  },
  {
    channel: 'Channel B',
    title: 'Growth Garrison',
    subtitle: 'Aggressive Market Expansion',
    description: 'For entities in active expansion. We provide the strategic ammunition—from ongoing financial modeling to continuous procurement support.',
    features: [
      'DYNAMIC FINANCIAL MODELING',
      'TENDER & BID PREPARATION SUPPORT',
      'MARKET INTELLIGENCE UPDATES',
      'INVESTOR RELATION MANAGEMENT',
      'SCALABILITY STRESS TESTING'
    ],
    cta: 'Mobilize Growth Garrison'
  }
];

const RetainersPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "d6c6bf82-1c1d-437d-87b1-8d0fdf43dc05"); 
    formData.append("from_name", "Buxino Retainer Engine");
    formData.append("subject", "New Retainer Commission - Buxino");
    formData.append("replyto", formData.get("email") as string); 
    formData.append("cc", formData.get("email") as string); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
        if (formRef.current) formRef.current.reset();
      } else {
        alert("Transmission error. Please contact consulting@buxino.co.za directly.");
      }
    } catch (error) {
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-black text-white min-h-screen w-full overflow-x-hidden font-sans selection:bg-[#C5A059] selection:text-black">
      
      {/* SECTION 1: ATMOSPHERIC HERO - Permanent Presence */}
      <section 
        className="min-h-screen w-full flex flex-col items-center justify-center text-center px-4 relative"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.95)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 max-w-5xl">
          <span className="text-[#C5A059] font-black tracking-[0.8em] text-[10px] md:text-[12px] uppercase mb-8 block">
            Buxino Retainer Ecosystem
          </span>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-4 leading-[0.85] text-white font-serif">
            Strategic <br/>
            <span className="text-[#C5A059] italic font-light lowercase tracking-normal">Continuity</span>
          </h1>
          <div className="h-[1px] w-48 bg-[#C5A059]/40 mx-auto my-12"></div>
          <p className="text-white/60 font-serif italic text-lg md:text-2xl tracking-wide max-w-3xl mx-auto leading-relaxed">
            "Eliminating the friction between vision and execution."
          </p>
        </div>
      </section>

      {/* SECTION 2: THE DOCTRINE - Strategy as a Utility */}
      <section className="py-32 bg-[#050505] relative border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h4 className="text-[#C5A059] uppercase tracking-[0.5em] text-[11px] font-black">The Continuity Doctrine</h4>
            <div className="space-y-6 text-gray-400 text-xl md:text-2xl leading-relaxed font-light italic font-serif">
              <p>
                A high-performance business is a machine that never sleeps. It requires more than occasional intervention—it requires <span className="text-white font-bold not-italic">Institutional Guarding</span>.
              </p>
              <p>
                Our retainers are not billing cycles; they are <span className="text-[#C5A059] not-italic font-bold">Strategic Garrisons</span>. We embed ourselves within your architecture to proactively secure your compliance, capital, and market position.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: RETAINER CHANNELS - Unified Grid */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16">
            {retainerChannels.map((item) => (
              <div key={item.channel} className="group relative bg-zinc-900/20 border border-white/5 p-12 transition-all hover:border-[#C5A059]/30 flex flex-col justify-between min-h-[600px]">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-black">{item.channel}</span>
                    <Lock className="text-[#C5A059]/20 group-hover:text-[#C5A059] transition-colors" size={24} />
                  </div>
                  <h3 className="text-4xl font-serif text-white mb-2 italic tracking-wider">{item.title}</h3>
                  <p className="text-[#C5A059] text-[10px] tracking-[0.3em] uppercase mb-8 font-bold">{item.subtitle}</p>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-10 font-light italic">
                    {item.description}
                  </p>

                  <ul className="space-y-4 mb-12">
                    {item.features.map((feature) => (
                      <li key={feature} className="text-[9px] text-white/70 uppercase tracking-[0.2em] flex items-center gap-4 font-bold">
                        <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full shadow-[0_0_8px_rgba(197,160,89,0.4)]"></div> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                   onClick={() => document.getElementById('retainer-form')?.scrollIntoView({ behavior: 'smooth' })}
                   className="w-full block text-center border border-[#C5A059]/30 py-6 text-[10px] uppercase tracking-[0.4em] hover:bg-[#C5A059] hover:text-black transition-all font-black"
                >
                  {item.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FORM CAPTURE - The "Deployment" Engine */}
      <section id="retainer-form" className="py-40 bg-[#020617] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {!isSubmitted ? (
            <>
              <ShieldCheck className="text-[#C5A059] mx-auto mb-8" size={40} />
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-white leading-none">
                Deploy <span className="text-[#C5A059] italic font-serif lowercase font-light">Guardianship</span>
              </h2>
              <p className="text-[#C5A059] text-[11px] tracking-[0.5em] uppercase italic mb-20 opacity-80">Formalize Your Strategic Garrison</p>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-16">
                <input required name="name" type="text" placeholder="ENTITY NAME / REPRESENTATIVE" className="w-full bg-transparent border-b border-white/10 py-6 text-[11px] tracking-[0.4em] uppercase focus:border-[#C5A059] outline-none transition-all duration-700 placeholder:text-white/10" />

                <div className="grid md:grid-cols-2 gap-16">
                  <input required name="email" type="email" placeholder="EXECUTIVE EMAIL" className="w-full bg-transparent border-b border-white/10 py-6 text-[11px] tracking-[0.4em] uppercase focus:border-[#C5A059] outline-none transition-all duration-700 placeholder:text-white/10" />
                  <div className="relative">
                    <select required name="service" defaultValue="" className="w-full bg-transparent border-b border-white/10 py-6 text-[11px] tracking-[0.4em] uppercase focus:border-[#C5A059] outline-none transition-all duration-700 text-white/30 appearance-none cursor-pointer">
                      <option value="" disabled className="bg-black">SELECT CHANNEL</option>
                      <option value="Executive Guard" className="bg-black">CHANNEL A: EXECUTIVE GUARD</option>
                      <option value="Growth Garrison" className="bg-black">CHANNEL B: GROWTH GARRISON</option>
                      <option value="Custom Portfolio" className="bg-black">CUSTOM STRATEGIC PORTFOLIO</option>
                    </select>
                    <div className="absolute right-0 bottom-8 pointer-events-none opacity-20">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1L6 6L11 1" stroke="white" strokeWidth="1.5"/></svg>
                    </div>
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-[#C5A059] text-black font-black uppercase tracking-[0.6em] text-[11px] py-8 mt-12 hover:bg-white transition-all duration-1000 shadow-2xl flex items-center justify-center gap-4">
                  {isSubmitting ? <><Loader2 size={16} className="animate-spin" /> Transmitting</> : <><Zap size={16} /> Deploy Commission</>}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center space-y-8 py-20 animate-in fade-in zoom-in duration-700">
              <div className="flex justify-center"><CheckCircle size={64} className="text-[#C5A059]" /></div>
              <h2 className="text-5xl font-black uppercase tracking-tighter text-white">Garrison Deployed</h2>
              <p className="text-white/50 italic font-serif text-xl">Your strategic guard is currently being architected by Buxino Governance.</p>
              <button onClick={() => setIsSubmitted(false)} className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-black border-b border-[#C5A059]/20 pb-2">New Commission</button>
            </div>
          )}
          
          <div className="mt-32 opacity-10 text-[8px] tracking-[1em] uppercase text-white font-light">
            Strategic Guard • Buxino (Pty) Ltd • 2026
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RetainersPage;