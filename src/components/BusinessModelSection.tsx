"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Custom arrow icon
const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const OurBusinessPage = () => {
  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden font-sans selection:bg-[#c5a059] selection:text-black">

      {/* ── 1. HERO IMAGE (Standalone) ──────────────────────────────────────── */}
      <section className="relative w-full h-[70vh] min-h-[480px] bg-black">
        <Image
          src="/Buxino Boardroom.png"
          alt="Buxino boardroom environment"
          fill
          className="object-cover object-[center_20%] brightness-90"
          priority
          quality={90}
          sizes="100vw"
        />
      </section>

      {/* ── 2. THE INSTITUTIONAL CORE (Narrative below the image) ────────────── */}
      <section className="py-20 bg-[#001f3f] text-center">
        <div className="container mx-auto px-6 max-w-5xl">
          <span className="text-[#c5a059] font-black tracking-[0.75em] text-[10px] md:text-xs uppercase mb-6 block">
            Established 2021
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-none mb-8">
            Inside Buxino
            <br />
            <span className="text-[#c5a059] italic font-serif lowercase font-light tracking-normal">
              Consulting.
            </span>
          </h1>

          <p className="text-white/80 font-serif italic text-lg md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Founded in 2021, Buxino Consulting was established to bridge the gap between traditional corporate methodology and the high-velocity demands of the modern African economy. Headquartered in Gauteng, we operate as a lean, high-impact strategic partner for industry leaders.
          </p>

          <Link
            href="/values"
            className="inline-block bg-[#c5a059] text-black px-10 py-5 text-xs font-black uppercase tracking-[0.4em] hover:bg-white transition-colors duration-300"
          >
            View Our Values
          </Link>
        </div>
      </section>

      {/* ── 3. THE ENVIRONMENT ──────────────────────────────────────────────── */}
      <section className="py-28 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h4 className="text-[#c5a059] uppercase tracking-[0.5em] text-[11px] font-black mb-6">Precision & Transparency</h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#001f3f] mb-8 uppercase tracking-tighter leading-none">
            A Space for{' '}
            <span className="italic font-serif text-[#c5a059] lowercase font-light">Strategic Thinking</span>
          </h2>
          <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed">
            Our physical and digital environments are designed to facilitate one thing: <strong>The Architecture of Growth.</strong> Located in the commercial heart of South Africa, our workspace mirrors our consulting philosophy—minimalist, data-driven, and meticulously organized.
          </p>
          <div className="h-px w-24 bg-[#c5a059]/40 mx-auto mt-12"></div>
        </div>
      </section>

      {/* ── 4. BUSINESS MODEL ───────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#fcfcfc] border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-4xl md:text-5xl font-black text-[#001f3f] uppercase tracking-tighter leading-none">
                Our <br className="hidden md:block" />
                <span className="text-[#c5a059] italic font-serif lowercase font-light">Business Model</span>
              </h2>
              <div className="w-12 h-1 bg-[#c5a059] mt-6"></div>
            </div>

            <div className="lg:col-span-8 space-y-10">
              <p className="text-gray-700 text-lg md:text-xl font-light leading-relaxed">
                Buxino operates on a dual-engine business model designed for stability and aggressive market entry. While our core focus remains on high-level long-term consulting, we maintain active vertical interests that generate immediate revenue.
              </p>

              <div className="grid md:grid-cols-2 gap-10 md:gap-12 py-10 border-t border-gray-200">
                <div>
                  <h5 className="text-[#c5a059] text-xs font-black uppercase tracking-widest mb-4">Vertical A: Strategic Consulting</h5>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed italic">
                    Focused on the TMT, Mining, and Automotive sectors. We provide institutional playbooks, market share growth strategies, and commercial execution frameworks.
                  </p>
                </div>
                <div>
                  <h5 className="text-[#c5a059] text-xs font-black uppercase tracking-widest mb-4">Vertical B: Tactical Revenue</h5>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed italic">
                    Unlocking value via BuxRamsy (Catering & Lifestyle) and In The Mino (Artist Management) to maintain a constant pulse on consumer behavior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THE METHODOLOGY (The Cycle) ──────────────────────────────────── */}
      <section className="bg-[#001f3f] py-28 md:py-32 text-white">
        <div className="container mx-auto px-6 max-w-6xl text-center mb-20">
          <h4 className="text-[#c5a059] uppercase tracking-[0.4em] text-xs font-black mb-8">Turning Insight into Asset</h4>
          <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
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
                <div key={p.id} className="flex gap-6 border-l border-white/10 pl-8 group hover:border-[#c5a059] transition-colors">
                  <span className="text-[#c5a059] font-serif italic text-4xl opacity-40 group-hover:opacity-100">{p.id}</span>
                  <div>
                    <h5 className="text-sm md:text-base font-black uppercase tracking-widest mb-2">{p.t}</h5>
                    <p className="text-white/60 text-sm leading-relaxed">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white/5 p-6 border border-white/10">
              <Image src="/BC_diagram.png" alt="Buxino Cycle" width={800} height={600} className="w-full h-auto brightness-110" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PILLARS (Governance) ─────────────────────────────────────────── */}
      <section className="py-28 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { t: "Integrity", d: "Beyond compliance. Transparency that protects the client's balance sheet and the brand's future." },
              { t: "Heritage", d: "Drawing from South African roots to inform global decisions with the 'Gauteng standard' of excellence." },
              { t: "Innovation", d: "Building growth engines using Next.js, AI-driven analytics, and institutional financial modules." },
            ].map((i) => (
              <div key={i.t}>
                <div className="w-10 h-px bg-[#c5a059] mb-6"></div>
                <h4 className="text-[#001f3f] text-xl font-black uppercase mb-4">{i.t}</h4>
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