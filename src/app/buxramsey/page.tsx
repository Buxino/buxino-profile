"use client";
import React from 'react';
import Link from 'next/link';
import { DollarSign, Clock, ShieldCheck, CheckCircle } from 'lucide-react';

const BuxRamsey = () => {
  return (
    <div className="bg-[#020617] min-h-screen text-white font-inter selection:bg-[#c5a059] selection:text-black">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 flex">
          <div className="w-full h-full relative">
             <img 
               src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070" 
               className="w-full h-full object-cover opacity-50 transform scale-105 transition-transform duration-[15s] hover:scale-100"
               alt="Gourmet Catering"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
          </div>
        </div>

        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <span className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase font-bold mb-6 flex items-center gap-4">
              <div className="h-px w-8 bg-[#c5a059]"></div> Premier Corporate Catering
            </span>
            <h1 className="font-montserrat font-black text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9] mb-8">
              Bux<span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#c5a059] to-[#ebd095]">Ramsey</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 border-l border-white/20 pl-6">
              Delivering high-end culinary experiences tailored exclusively for executive boardrooms, corporate milestones, and private institutional functions.
            </p>
            <Link href="/connect/contact-information#inquiry-form" className="inline-block bg-[#c5a059] text-black font-black uppercase tracking-widest px-10 py-4 text-xs hover:bg-white transition-colors duration-300">
              Request Bespoke Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Narrative */}
      <section className="py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-montserrat font-black text-3xl md:text-5xl uppercase mb-6 leading-tight text-white">
                The Culinary <br/><span className="text-[#c5a059] italic">Deal Closer.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6 font-light">
                In the South African corporate landscape, the quality of your hospitality directly reflects the integrity of your institution. BuxRamsey targets MDs, corporate fixers, and high-net-worth event coordinators who cannot afford to compromise on execution.
              </p>
              <p className="text-gray-400 leading-relaxed font-light">
                From precision-timed boardroom lunches featuring premium chafing dish setups, to dietary-compliant gala dinners (Halal, Kosher, Vegan integrations), we ensure your stakeholders are met with uncompromising quality.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                { icon: <DollarSign className="text-[#c5a059] mb-4" size={32} />, title: "Deal Velocity", text: "High-end corporate hospitality is proven to increase executive deal-closure sentiment by up to 40%." },
                { icon: <Clock className="text-[#c5a059] mb-4" size={32} />, title: "Precision Timing", text: "Boardroom agendas are strict. Our stealth-service ensures food is hot, ready, and cleared without disrupting flow." },
                { icon: <ShieldCheck className="text-[#c5a059] mb-4" size={32} />, title: "Dietary Integrity", text: "Zero-compromise menu mapping accommodating strict dietary protocols for diverse executive boards." },
                { icon: <CheckCircle className="text-[#c5a059] mb-4" size={32} />, title: "Premium Setup", text: "High-polish chafing dishes and professional staff. Presentation that matches the C-Suite." }
              ].map((card, idx) => (
                <div key={idx} className="bg-white/5 p-8 border border-white/10 hover:border-[#c5a059]/50 transition-all duration-300">
                  {card.icon}
                  <h3 className="font-montserrat font-black text-2xl uppercase mb-2 text-white">{card.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Gallery */}
      <section className="py-24 bg-[#0a0f1c] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-montserrat font-black text-4xl uppercase mb-16 text-center text-white">
            Execution & <span className="text-[#c5a059]">Capabilities</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070", title: "Executive Lunches", desc: "Discreet spreads designed for uninterrupted strategic meetings." },
              { img: "https://images.unsplash.com/photo-1555243896-c709bfa0b564?q=80&w=2070", title: "Corporate Galas", desc: "Culinary architecture for milestones, launches, and year-end functions." },
              { img: "https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=1965", title: "Premium Displays", desc: "Impeccable chafing dish setups and live stations with bespoke aesthetics." }
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden h-80">
                <img src={item.img} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <h4 className="font-montserrat font-black text-xl uppercase text-[#c5a059] mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-300 font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuxRamsey;