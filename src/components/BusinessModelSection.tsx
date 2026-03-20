"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OurBusinessPage = () => {
  return (
    <main className="bg-gray-50 min-h-screen w-full overflow-x-hidden font-sans selection:bg-[#c5a059] selection:text-black">

      {/* ── 1. HERO IMAGE – FULLY MOBILE-FRIENDLY ──────────────────────────────────────── */}
      <section className="relative w-full aspect-[4/5] xs:aspect-[3/4] sm:aspect-[16/9] md:aspect-[16/7] lg:aspect-[16/6] overflow-hidden bg-gray-100 border-b border-gray-200">
        <Image
          src="/Buxino Boardroom.png"
          alt="Buxino boardroom environment"
          fill
          className="
            object-contain sm:object-cover 
            object-center sm:object-[center_20%] 
            brightness-95
          "
          priority
          quality={90}
          sizes="100vw"
        />
      </section>

      {/* ── 2. THE INSTITUTIONAL CORE ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white text-center border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <span className="text-[#c5a059] font-black tracking-[0.75em] text-[10px] md:text-xs uppercase mb-6 block">
            Established 2021
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-gray-900 leading-none mb-8">
            Inside Buxino
            <br />
            <span className="text-[#c5a059] italic font-serif lowercase font-light tracking-normal">
              Consulting.
            </span>
          </h1>

          <p className="text-gray-700 font-serif italic text-lg md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Founded in 2021, Buxino Consulting was established to bridge the gap between traditional corporate methodology and the high-velocity demands of the modern African economy. Headquartered in Gauteng, we operate as a lean, high-impact strategic partner for industry leaders.
          </p>

          <Link
            href="/values"
            className="inline-block bg-[#c5a059] text-gray-900 px-10 py-5 text-xs font-black uppercase tracking-[0.4em] hover:bg-[#b08a3e] transition-colors duration-300 shadow-sm hover:shadow-md rounded-lg"
          >
            View Our Values
          </Link>
        </div>
      </section>

      {/* ── 3. THE ENVIRONMENT ──────────────────────────────────────────────────────── */}
      <section className="py-28 md:py-32 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h4 className="text-[#c5a059] uppercase tracking-[0.5em] text-[11px] font-black mb-6">Precision & Transparency</h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 uppercase tracking-tighter leading-none">
            A Space for{' '}
            <span className="italic font-serif text-[#c5a059] lowercase font-light">Strategic Thinking</span>
          </h2>
          <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed">
            Our physical and digital environments are designed to facilitate one thing: <strong>The Architecture of Growth.</strong> Located in the commercial heart of South Africa, our workspace mirrors our consulting philosophy—minimalist, data-driven, and meticulously organized.
          </p>
          <div className="h-px w-24 bg-[#c5a059]/40 mx-auto mt-12"></div>
        </div>
      </section>

      {/* ── 4. BUSINESS MODEL ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* LEFT COLUMN: THE ANCHOR */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <span className="text-[10px] font-black tracking-[0.4em] text-gray-500 uppercase mb-4 block">
                Corporate Structure
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none">
                The <br className="hidden md:block" />
                <span className="text-[#c5a059] italic font-serif lowercase font-light text-5xl">Ecosystem.</span>
              </h2>
              <div className="w-12 h-1 bg-[#c5a059] mt-6 mb-8"></div>
              
              <div className="bg-gray-50 p-6 border border-gray-200 shadow-sm hidden md:block rounded-lg">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#c5a059] mb-2">Operational Logic</p>
                <p className="text-sm font-bold text-gray-900 leading-relaxed">
                  A dual-engine holding structure designed to fuse high-margin corporate advisory with agile, cash-generative tactical assets.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: THE DETAIL */}
            <div className="lg:col-span-8 space-y-12">
              
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#c5a059] italic">The Macro Strategy</h4>
                <p className="text-gray-700 text-lg md:text-xl font-light leading-relaxed">
                  Buxino Consulting (Pty) Ltd operates on a highly leveraged, <strong>Barbell Business Model</strong>. We engineer stability and aggressive market penetration by balancing high-ticket, long-cycle institutional mandates with high-velocity, consumer-facing verticals. This ensures constant liquidity while establishing deep, defensible corporate architecture for our clients.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10 md:gap-12 py-12 border-t border-gray-200">
                
                {/* VERTICAL A: STRATEGIC CONSULTING */}
                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-black text-[#c5a059] uppercase tracking-widest">Vertical A</span>
                    <div className="h-px w-8 bg-[#c5a059]"></div>
                  </div>
                  <h5 className="text-gray-900 text-xl font-black uppercase tracking-tight mb-4 group-hover:text-[#c5a059] transition-colors">
                    Fractional Command <br/>& Advisory
                  </h5>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Our core institutional engine. We architect commercial execution frameworks, scale market share, and deploy "JOC-style" oversight for mid-market and enterprise entities. 
                  </p>
                  <ul className="space-y-3 text-[11px] font-bold text-gray-600 uppercase tracking-widest">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#c5a059] rounded-full"></div> Target: TMT, Mining & Auto</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#c5a059] rounded-full"></div> Retained Executive Oversight</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#c5a059] rounded-full"></div> Institutional Protocol Mandates</li>
                  </ul>
                </div>

                {/* VERTICAL B: TACTICAL REVENUE */}
                <div className="group relative">
                  <div className="absolute -left-6 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-black text-[#c5a059] uppercase tracking-widest">Vertical B</span>
                    <div className="h-px w-8 bg-[#c5a059]"></div>
                  </div>
                  <h5 className="text-gray-900 text-xl font-black uppercase tracking-tight mb-4 group-hover:text-[#c5a059] transition-colors">
                    Tactical Liquidity <br/>& Cultural IP
                  </h5>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    A curated portfolio of cash-generative physical market assets. These entities generate immediate revenue while acting as ground-level intelligence labs to inform our corporate strategies.
                  </p>
                  <ul className="space-y-3 text-[11px] font-bold text-gray-600 uppercase tracking-widest">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#c5a059] rounded-full"></div> <strong>BuxRamsy:</strong> Premium Protocol & Lifestyle</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#c5a059] rounded-full"></div> <strong>In The Mino:</strong> Cultural IP & Talent Mgt</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#c5a059] rounded-full"></div> Real-Time Consumer Data Extraction</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-8 md:p-10 border border-gray-200 rounded-lg shadow-sm">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c5a059] mb-4">The Multiplier Effect</h4>
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  By controlling both the high-level corporate strategy (Vertical A) and ground-level cultural execution (Vertical B), Buxino eliminates the disconnect between boardroom theory and consumer reality. Our tactical assets fund our corporate scaling, protecting our high-margin core without requiring outside venture dilution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THE METHODOLOGY (The Cycle) ──────────────────────────────────── */}
      <section className="bg-gray-50 py-28 md:py-32 border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-6xl text-center mb-20">
          <h4 className="text-[#c5a059] uppercase tracking-[0.4em] text-xs font-black mb-8">Turning Insight into Asset</h4>
          <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none text-gray-900">
            <span className="text-[#c5a059] italic font-serif lowercase font-light">The Cycle</span>
          </h3>
        </div>
        
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              {[
                { id: "01", t: "Operational Excellence", d: "We strip away corporate bloat. Using lean principles, we optimize the supply chain and internal structures." },
                { id: "02", t: "Strategic Narrative", d: "We define the 'Who'—bridging the gap between heritage and modern expectations." },
                { id: "03", t: "Market Disruption", d: "The 'Trojan Horse' phase—using data to identify gaps and capture share with surgical precision." },
              ].map((p) => (
                <div key={p.id} className="flex gap-6 border-l border-gray-200 pl-8 group hover:border-[#c5a059] transition-colors">
                  <span className="text-[#c5a059] font-serif italic text-4xl opacity-40 group-hover:opacity-100">{p.id}</span>
                  <div>
                    <h5 className="text-sm md:text-base font-black uppercase tracking-widest mb-2 text-gray-900">{p.t}</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-lg">
              <Image src="/BC_diagram.png" alt="Buxino Cycle" width={800} height={600} className="w-full h-auto brightness-100" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PILLARS (Governance) ─────────────────────────────────────────── */}
      <section className="py-28 md:py-32 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { t: "Integrity", d: "Beyond compliance. Transparency that protects the client's balance sheet and the brand's future." },
              { t: "Heritage", d: "Drawing from South African roots to inform global decisions with the 'Gauteng standard' of excellence." },
              { t: "Innovation", d: "Building growth engines using Next.js, AI-driven analytics, and institutional financial modules." },
            ].map((i) => (
              <div key={i.t} className="p-8 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-px bg-[#c5a059] mb-6"></div>
                <h4 className="text-gray-900 text-xl font-black uppercase mb-4">{i.t}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default OurBusinessPage;