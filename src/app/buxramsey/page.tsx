"use client";

import React from 'react';
import Link from 'next/link';

/**
 * BUXRAMSEY LANDING PAGE – LIGHT VERSION
 * src/app/buxramsey/page.tsx
 * Executive Culinary Architecture
 */

const BuxRamseyPage = () => {
  return (
    <main className="bg-gray-50 min-h-screen text-gray-900 font-sans antialiased selection:bg-[#c5a059] selection:text-black overflow-x-hidden">
      
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative h-screen flex items-center overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070"
            className="w-full h-full object-cover opacity-40 transform scale-100 transition-transform duration-[20s] hover:scale-110"
            alt="Executive Culinary Setup"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/70 to-transparent" />
        </div>

        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <span className="text-[#c5a059] text-[10px] tracking-[0.6em] uppercase font-black mb-8 block flex items-center gap-4">
              <div className="h-px w-8 bg-[#c5a059]" />
              Premier Corporate Catering
            </span>

            <h1 className="font-montserrat font-black text-7xl md:text-9xl uppercase leading-[0.85] mb-10 text-gray-900">
              Bux<span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#c5a059] to-[#ebd095]">Ramsey</span>
            </h1>

            <p className="font-serif text-2xl text-gray-700 italic font-light leading-relaxed mb-12 max-w-2xl">
              Engineering the soul of South African heritage into the high-stakes corporate environment.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link
                href="#manifesto"
                className="bg-[#c5a059] text-gray-900 font-black uppercase tracking-widest px-12 py-5 text-xs hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Read The Manifesto
              </Link>
              <Link
                href="#divisions"
                className="border border-gray-300 text-gray-900 font-black uppercase tracking-widest px-12 py-5 text-xs hover:bg-gray-100 transition-all duration-300"
              >
                Explore The Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MANIFESTO ─────────────────────────────────────────── */}
      <section id="manifesto" className="py-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 sticky top-12">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mb-10" />
              <h2 className="font-montserrat font-black text-4xl md:text-5xl uppercase mb-6 leading-tight text-gray-900">
                The Corporate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5a059] to-[#ebd095] italic">Disconnect.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 font-light text-lg">
                South African corporate hospitality suffers from a persistent identity crisis. Executive boardrooms and high-net-worth galas are dominated by sterile, imported menus—dry wraps, pretentious fusion, and uninspired catering that lacks cultural resonance.
              </p>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                The authentic flavours of our heritage—the slow-braised oxtail, the 7-colours Sunday spreads, the meals that actually forge bonds and close deals—are left at the family table. They are deemed too "complex" or "messy" to execute in strict corporate environments without disrupting the meeting flow.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <div className="bg-gray-50 p-10 md:p-14 border border-gray-200 rounded-xl shadow-sm">
                <h3 className="font-serif text-3xl md:text-4xl italic text-transparent bg-clip-text bg-gradient-to-r from-[#c5a059] to-[#ebd095] mb-6">
                  Home Menu. Boardroom Soul.
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-8 font-light">
                  BuxRamsey is the correction to this market failure. We are an executive culinary architecture firm that engineers the soul of black South African home cooking directly into the boardroom. We take the township Sunday lunch and apply institutional-grade execution: stealth service, premium aesthetic presentation, zero meeting disruptions, and absolute dietary compliance (Halal, vegan, gluten-free).
                </p>
                <p className="text-gray-700 leading-relaxed text-lg font-light border-l-2 border-[#c5a059] pl-6">
                  We do not compromise on the heritage of the food, nor do we compromise on the operational standard of the C-Suite.
                </p>
              </div>

              <div>
                <h4 className="text-[#c5a059] text-[10px] tracking-[0.3em] uppercase font-black mb-8 border-b border-gray-200 pb-4">
                  Inside The BuxRamsey Ecosystem
                </h4>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { title: "Corporate Galas", desc: "Precision-timed culinary architecture for institutional milestones, product launches, and year-end functions requiring scale without losing quality." },
                    { title: "Life Celebrations", desc: "Intimate, culturally grounded catering for Lobola negotiations, traditional weddings, unveilings, and private family milestones." },
                    { title: "The 30-Day Plan", desc: "A strategic nutritional protocol designed for metabolic performance and executive stamina, tiered for students, corporates, and veterans." },
                    { title: "Household Menu", desc: "Refining the daily domestic culinary standard. The foundation of the 7-colours legacy, adapted for premium home dining." },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <h5 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM DIVISIONS ──────────────────────────────── */}
      <section id="divisions" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 border-b border-gray-200 pb-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
              <div>
                <h2 className="font-montserrat font-black text-5xl uppercase text-gray-900">
                  The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5a059] to-[#ebd095] italic">Ecosystem</span>
                </h2>
                <p className="text-[#c5a059] mt-4 uppercase tracking-[0.2em] text-xs font-bold">
                  Four Verticals. One Uncompromising Standard.
                </p>
              </div>
            </div>

            <div className="max-w-4xl text-gray-600 font-light leading-relaxed text-lg space-y-6">
              <p>
                For too long, South African corporate and executive hospitality has suffered from a profound disconnect. We have been conditioned to trade the rich, communal warmth of our heritage for sterile, imported menus—sacrificing the very food that forges real connection for the sake of "professionalism."
              </p>
              <p>
                <span className="text-gray-900 font-medium">BuxRamsey corrects this market failure.</span> We engineer the soul of black South African home cooking—the slow-braised oxtail, the authentic 7-colours spreads, the unapologetic flavours of our roots—directly into the high-stakes corporate environment.
              </p>
              <p>
                Explore our four operational platforms below. Whether you are executing a 400-guest institutional gala, honouring an intimate family lobola, or optimising your metabolic performance through our 30-Day strategic meal plan, expect stealth boardroom service, absolute dietary compliance, and the true, elevated taste of home.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                href: "/galas",
                img: "/Western Wedding.jpg",
                title: "Corporate Galas",
                desc: "Product Launches & Institutional Functions",
              },
              {
                href: "/celebrations",
                img: "/Graduation.png",
                title: "Life Celebrations",
                desc: "Lobola, Weddings & Milestones",
              },
              {
                href: "/meal-plan",
                img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop",
                title: "The 30-Day Plan",
                desc: "Executive Metabolic Performance",
              },
              {
                href: "/corporate_menus",
                img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop",
                title: "Household Menu",
                desc: "Refining the Daily Standard",
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group relative h-[600px] overflow-hidden border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={item.img}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 rounded-t-xl"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-70 rounded-t-xl" />
                <div className="absolute bottom-0 p-8 w-full">
                  <h3 className="font-montserrat font-black text-2xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#c5a059] to-[#ebd095]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200 mt-2 tracking-widest uppercase font-bold">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer className="bg-white py-20 border-t border-gray-200 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="max-w-sm">
            <h3 className="font-montserrat font-black text-xl uppercase mb-4 text-gray-900">BuxRamsey</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              A division of Buxino Consulting (Pty) Ltd. Engineering culinary excellence into the high-stakes corporate environment since lockdown 2020.
            </p>
          </div>
          <div className="flex gap-12 text-xs uppercase tracking-widest font-bold text-gray-700">
            <Link href="/connect/contact-information" className="hover:text-[#c5a059] transition-colors">
              Contact
            </Link>
            <a
              href="https://www.linkedin.com/company/buxino-consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c5a059] transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <div className="text-gray-500 text-[10px] uppercase tracking-tighter">
            © 2026 Buxino Consulting. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
};

export default BuxRamseyPage;