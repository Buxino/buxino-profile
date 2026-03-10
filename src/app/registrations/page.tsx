"use client";

import React, { useState, useRef } from 'react';
import Footer from '@/components/Footer';
import { Send, Loader2, CheckCircle, Shield, Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const formationChannels = [
  {
    channel: 'Channel A',
    title: 'Entity Registration',
    subtitle: 'The Ticket to the Game',
    description: 'Generic agents leave you with gaps. We provide a full-spectrum compliance stack designed to clear blue-chip procurement hurdles immediately.',
    features: [
      'CIPC COMPANY INCORPORATION',
      'INCOME TAX & VAT REGISTRATION',
      'B-BBEE SWORN AFFIDAVITS',
      'COIDA & LETTER OF GOOD STANDING',
      'SHARE CERTIFICATES & MOI'
    ],
    cta: 'Secure Registration'
  },
  {
    channel: 'Channel B',
    title: 'Strategic Planning',
    subtitle: 'The Map to the Vault',
    description: 'A document is useless if it doesn\'t close the deal. We build hyper-realistic financial models and infiltration strategies that funders cannot ignore.',
    features: [
      'FUNDER-READY BUSINESS PLANS',
      '5-YEAR INSTITUTIONAL FINANCIAL MODELS',
      'SECTOR-SPECIFIC MARKET ANALYSIS',
      'RISK MITIGATION & SCALABILITY LOGIC',
      'INVESTOR PITCH DECK DESIGN'
    ],
    cta: 'Request Strategy Brief'
  }
];

const RegistrationsPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "d6c6bf82-1c1d-437d-87b1-8d0fdf43dc05"); 
    formData.append("from_name", "Buxino Formation Engine");
    formData.append("subject", "New Corporate Formation Request - Buxino");
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
      
      {/* SECTION 1: INSTITUTIONAL HERO - Matches Events DNA */}
      <section 
        className="min-h-screen w-full flex flex-col items-center justify-center text-center px-4 relative"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.95)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 max-w-5xl">
          <span className="text-[#C5A059] font-black tracking-[0.8em] text-[10px] md:text-[12px] uppercase mb-8 block">
            Buxino Institutional Services
          </span>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-4 leading-[0.85] text-white font-serif">
            Corporate <br/>
            <span className="text-[#C5A059] italic font-light lowercase tracking-normal">Foundations</span>
          </h1>
          <div className="h-[1px] w-48 bg-[#C5A059]/40 mx-auto my-12"></div>
          <p className="text-white/60 font-serif italic text-lg md:text-2xl tracking-wide max-w-3xl mx-auto leading-relaxed">
            "Establishing the Architecture of South African Enterprise."
          </p>
        </div>
      </section>

      {/* SECTION 2: THE CREED - High Contrast Manifesto */}
      <section className="py-32 bg-[#050505] relative border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h4 className="text-[#C5A059] uppercase tracking-[0.5em] text-[11px] font-black">The Gatekeeper's Creed</h4>
            <div className="space-y-6 text-gray-400 text-xl md:text-2xl leading-relaxed font-light italic font-serif">
              <p>
                In the South African landscape, a business is not merely a trade, it is an <span className="text-white font-bold not-italic">Institutional Entity</span>.
              </p>
              <p>
                We understand that a <span className="text-[#C5A059] not-italic font-bold">Company Registration</span> is your formal entry into the economy, while a Business Plan is the strategic blueprint that convinces capital of your inevitability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FORMATION CHANNELS - Matches Event Channel Grid */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16">
            {formationChannels.map((item) => (
              <div key={item.channel} className="group relative bg-zinc-900/20 border border-white/5 p-12 transition-all hover:border-[#C5A059]/30 flex flex-col justify-between min-h-[600px]">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-black">{item.channel}</span>
                    <Shield className="text-[#C5A059]/20 group-hover:text-[#C5A059] transition-colors" size={24} />
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
                   onClick={() => document.getElementById('formation-form')?.scrollIntoView({ behavior: 'smooth' })}
                   className="w-full block text-center border border-[#C5A059]/30 py-6 text-[10px] uppercase tracking-[0.4em] hover:bg-[#C5A059] hover:text-black transition-all font-black"
                >
                  {item.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FORM CAPTURE - The "Commission" Engine */}
      <section id="formation-form" className="py-40 bg-[#020617] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {!isSubmitted ? (
            <>
              <Briefcase className="text-[#C5A059] mx-auto mb-8" size={40} />
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-white leading-none">
                Initiate <span className="text-[#C5A059] italic font-serif lowercase font-light">Formation</span>
              </h2>
              <p className="text-[#C5A059] text-[11px] tracking-[0.5em] uppercase italic mb-20 opacity-80">Establish Your Institutional Presence</p>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-16">
                <input required name="name" type="text" placeholder="FULL NAME / REPRESENTATIVE" className="w-full bg-transparent border-b border-white/10 py-6 text-[11px] tracking-[0.4em] uppercase focus:border-[#C5A059] outline-none transition-all duration-700 placeholder:text-white/10" />

                <div className="grid md:grid-cols-2 gap-16">
                  <input required name="email" type="email" placeholder="CONTACT EMAIL" className="w-full bg-transparent border-b border-white/10 py-6 text-[11px] tracking-[0.4em] uppercase focus:border-[#C5A059] outline-none transition-all duration-700 placeholder:text-white/10" />
                  <div className="relative">
                    <select required name="service" defaultValue="" className="w-full bg-transparent border-b border-white/10 py-6 text-[11px] tracking-[0.4em] uppercase focus:border-[#C5A059] outline-none transition-all duration-700 text-white/30 appearance-none cursor-pointer">
                      <option value="" disabled className="bg-black">SELECT SERVICE</option>
                      <option value="Entity Registration" className="bg-black">ENTITY REGISTRATION</option>
                      <option value="Strategic Planning" className="bg-black">STRATEGIC PLANNING</option>
                      <option value="Full Compliance Stack" className="bg-black">FULL COMPLIANCE STACK</option>
                    </select>
                    <div className="absolute right-0 bottom-8 pointer-events-none opacity-20">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1L6 6L11 1" stroke="white" strokeWidth="1.5"/></svg>
                    </div>
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-[#C5A059] text-black font-black uppercase tracking-[0.6em] text-[11px] py-8 mt-12 hover:bg-white transition-all duration-1000 shadow-2xl flex items-center justify-center gap-4">
                  {isSubmitting ? <><Loader2 size={16} className="animate-spin" /> Processing</> : <><Send size={16} /> Submit Application</>}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center space-y-8 py-20 animate-in fade-in zoom-in duration-700">
              <div className="flex justify-center"><CheckCircle size={64} className="text-[#C5A059]" /></div>
              <h2 className="text-5xl font-black uppercase tracking-tighter text-white">Application Logged</h2>
              <p className="text-white/50 italic font-serif text-xl">Your corporate architecture is now in the queue for review.</p>
              <button onClick={() => setIsSubmitted(false)} className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-black border-b border-[#C5A059]/20 pb-2">New Submission</button>
            </div>
          )}
          
          <div className="mt-32 opacity-10 text-[8px] tracking-[1em] uppercase text-white font-light">
            Out of the night, into prosperity • Buxino (Pty) Ltd • 2026
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RegistrationsPage;