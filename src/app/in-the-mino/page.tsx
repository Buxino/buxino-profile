"use client";

import React from 'react';
import Link from 'next/link';

// Custom arrow icon
const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const InTheMino = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-sans selection:bg-[#c5a059] selection:text-black">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070" 
            className="w-full h-full object-cover opacity-40 scale-105 transform transition-transform duration-[10s] hover:scale-100"
            alt="Studio Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/60 to-black/80"></div>
        </div>    <div className="relative z-10 text-center px-6 max-w-5xl mt-20">
      <span className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase font-bold mb-6 block border-b border-[#c5a059] pb-4 inline-block">
        Institutional Management for the Creative Sector
      </span>
      <h1 className="font-montserrat font-black text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9] mb-6 drop-shadow-2xl">
        In The <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#c5a059] to-[#ebd095]">Mino</span>
      </h1>
      <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
        Raw talent requires ruthless corporate governance. We secure, audit, and scale the intellectual property of South Africa's most bankable artists.
      </p>
    </div>
  </section>



      {/* Narrative Section */}
      <section className="py-24 bg-white relative z-20 -mt-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-50 border border-gray-200 p-12 md:p-16 shadow-sm rounded-lg">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-montserrat font-black text-3xl md:text-4xl uppercase mb-6 text-gray-900">
                  Why We <span className="text-[#c5a059]">Shifted</span> Here.
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The South African music market—driven by Amapiano, Afro-Tech, and Hip-Hop—is a global export. Yet, the industry operates on handshake deals and disjointed administration. 
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">In The Mino</strong> exists to introduce major-label administrative standards to independent talent. We are not just booking agents; we are IP architects. We ensure publishing splits are registered, SAMRO royalties are collected, and brand equity is translated into equity ownership.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: "70%", desc: "Of independent SA artists lose uncollected royalties." },
                  { stat: "#1", desc: "Amapiano is the fastest-growing genre globally." },
                  { stat: "100%", desc: "Corporate transparency in our split sheets." },
                  { stat: "360°", desc: "IP, Branding, and Corporate Sponsorship mapping." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 p-8 hover:border-[#c5a059] transition-colors duration-500 group rounded-lg shadow-sm hover:shadow-md">
                    <h3 className="font-montserrat font-black text-4xl text-[#c5a059] mb-2 group-hover:scale-110 transition-transform origin-left">{item.stat}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="py-32 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl uppercase mb-6 text-gray-900">
              The Institutional <span className="text-[#c5a059] italic">Advantage</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Why bankable artists in Urban, Dance, and Electronic genres choose Buxino over traditional management.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "IP Auditing & Registration", text: "We conduct full audits of past catalogues, ensuring registration with CAPASSO, SAMRO, and SAMPRA to capture lost mechanical and performance royalties." },
              { num: "02", title: "Corporate Brand Alignment", text: "We leverage Buxino's corporate network to broker high-yield sponsorships and sync deals, elevating the artist from a performer to an institutional asset." },
              { num: "03", title: "Financial Guardrails", text: "Transparent financial reporting, strict tax compliance, and wealth preservation strategies tailored for the fluctuating income of the creative sector." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-10 hover:-translate-y-2 hover:shadow-lg transition-all duration-500 rounded-lg">
                <div className="h-12 w-12 bg-gray-100 flex items-center justify-center border border-[#c5a059] mb-8 text-[#c5a059] font-bold rounded-full">{feature.num}</div>
                <h3 className="font-montserrat font-black text-xl uppercase mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Link href="/connect/contact-information#inquiry-form" className="inline-block bg-[#c5a059] text-gray-900 font-black uppercase tracking-widest px-12 py-5 text-xs hover:bg-white transition-colors duration-300 rounded-lg shadow-md hover:shadow-lg">
              Submit Artist Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InTheMino;