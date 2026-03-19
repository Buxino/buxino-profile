"use client";

import React from 'react';
import Footer from '@/components/Footer';

/**
 * BUXRAMSEY CORPORATE GALAS – LIGHT VERSION
 * Page: src/app/galas/page.tsx
 */

const GalasPage = () => {
  return (
    <main className="bg-gray-50 min-h-screen font-sans text-gray-900 overflow-x-hidden">
      
      {/* ── HERO ──────────────────────────────────────────────── */}
      <header className="relative min-h-screen flex items-center justify-center border-b border-gray-200">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-gray-50/60 to-gray-50/90" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <img 
            src="/BuxRamsey logo.jpg" 
            alt="BuxRamsey" 
            className="h-28 md:h-40 mx-auto mb-12 drop-shadow-xl"
          />
          
          <h1 className="font-serif text-5xl md:text-8xl font-light tracking-tighter leading-none mb-6 text-gray-900">
            CORPORATE GALAS
          </h1>
          
          <p className="text-[#c5a059] text-xl md:text-3xl italic mb-10">
            Where institutional excellence meets the soul of home
          </p>
          
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Precision-timed, discreetly served, proudly South African.  
            Galas, year-end functions, product launches, stakeholder dinners — executed with the same warmth and pride we bring to every family table.
          </p>

          <a 
            href="#packages" 
            className="mt-16 inline-block bg-[#c5a059] text-gray-900 px-16 py-6 text-sm font-black uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            View Gala Packages
          </a>
        </div>
      </header>

      {/* ── INSTITUTIONAL HOSPITALITY SECTION ─────────────────── */}
      <section className="py-28 bg-white text-gray-900 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mx-auto mb-10" />
          
          <h2 className="font-serif text-5xl md:text-6xl font-light tracking-tight mb-12 text-gray-900">
            Institutional Hospitality, Redefined
          </h2>
          
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
            BuxRamsey Corporate Galas are designed for discerning South African institutions.  
            No imported trends. No showy fusion. Just elevated versions of the dishes that bring people together — slow-cooked stews, pap & samp, chakalaka, creamed spinach, beetroot, butternut — plated and served with boardroom precision.
          </p>

          <div className="mt-20 grid md:grid-cols-3 gap-12 border-t border-gray-200 pt-16">
            <div>
              <div className="text-[#c5a059] text-6xl font-black mb-4">100%</div>
              <p className="text-gray-700 font-medium uppercase tracking-widest text-xs">South African ingredients & talent</p>
            </div>
            <div className="border-x border-gray-200">
              <div className="text-[#c5a059] text-6xl font-black mb-4">0</div>
              <p className="text-gray-700 font-medium uppercase tracking-widest text-xs">Meeting flow disruptions</p>
            </div>
            <div>
              <div className="text-[#c5a059] text-6xl font-black mb-4">40%</div>
              <p className="text-gray-700 font-medium uppercase tracking-widest text-xs">Higher executive engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKAGES SECTION ──────────────────────────────────── */}
      <section id="packages" className="py-32 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <span className="text-[#c5a059] text-xs tracking-widest uppercase font-black">
              Curated for South African Corporates
            </span>
            <h2 className="font-serif text-5xl md:text-6xl font-light tracking-tight mt-4 text-gray-900">
              Three Signature Gala Packages
            </h2>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
              All packages are fully customisable for guest count (50–400+), venue, dietary requirements, and timeline.  
              Prices are per head (excl. VAT) and include stealth service, silent clearing, premium presentation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Standard Gala */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 h-full flex flex-col">
              <div className="h-72 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" 
                  alt="Professional corporate buffet setup with South African heritage dishes" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10 flex-grow">
                <div className="border-b border-gray-200 pb-6 mb-8">
                  <h3 className="text-3xl font-medium mb-2 text-gray-900">Standard Gala</h3>
                  <p className="text-[#c5a059] text-xl font-light">R580 per head</p>
                </div>
                <div className="space-y-8 text-gray-600 text-sm leading-relaxed">
                  <div>
                    <span className="block font-bold text-gray-900 mb-1 text-sm tracking-widest uppercase">Starter</span>
                    <p>Vetkoek minis with chakalaka filling</p>
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900 mb-1 text-sm tracking-widest uppercase">Main Course</span>
                    <p>Roast free-range chicken quarters + slow-cooked beef stew</p>
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900 mb-1 text-sm tracking-widest uppercase">Sides (Colours)</span>
                    <p>Pap or yellow rice • Samp & beans • Creamed spinach • Butternut mash • Beetroot salad • Chakalaka</p>
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900 mb-1 text-sm tracking-widest uppercase">Dessert</span>
                    <p>Malva pudding with custard • Fresh seasonal fruit</p>
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900 mb-1 text-sm tracking-widest uppercase">Beverages & Service</span>
                    <p>Still & sparkling water • Rooibos iced tea • Silent clearing within 10 min of agenda close</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Gala - Most Popular */}
            <div className="bg-white border border-[#c5a059]/40 rounded-2xl overflow-hidden shadow-md relative h-full flex flex-col hover:shadow-xl transition-all duration-500 scale-105">
              <div className="absolute top-6 right-6 bg-[#c5a059] text-gray-900 text-xs font-black tracking-widest px-5 py-2 rounded-full uppercase">
                Most Popular
              </div>
              <div className="h-72 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop" 
                  alt="Premium South African corporate gala table with heritage platters" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10 flex-grow">
                <div className="border-b border-gray-200 pb-6 mb-8">
                  <h3 className="text-3xl font-medium mb-2 text-gray-900">Premium Gala</h3>
                  <p className="text-[#c5a059] text-xl font-light">R820 per head</p>
                </div>
                <div className="space-y-8 text-gray-600 text-sm leading-relaxed">
                  <div>
                    <span className="block font-bold text-gray-900 mb-1 text-sm tracking-widest uppercase">Starter</span>
                    <p>Live vetkoek & chakalaka station • Potato salad platter</p>
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900 mb-1 text-sm tracking-widest uppercase">Main Course</span>
                    <p>Slow-braised oxtail • Herb-roasted chicken • Beef medallions</p>
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900 mb-1 text-sm tracking-widest uppercase">Sides (Colours)</span>
                    <p>Full 7-colours spread: pap, samp & beans, creamed spinach, beetroot, butternut, chakalaka, potato salad</p>
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900 mb-1 text-sm tracking-widest uppercase">Dessert</span>
                    <p>Malva pudding bar • Custard shots • Small koesisters • Fresh fruit platter</p>
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900 mb-1 text-sm tracking-widest uppercase">Beverages & Service</span>
                    <p>Premium rooibos iced tea & infused water • Silent service team • Table-side clearing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Deluxe Gala */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 h-full flex flex-col">
              <div className="h-72 overflow-hidden">
                <img 
                  src="/Wedding.jpg" 
                  alt="Luxury South African corporate gala with live carving and heritage buffet" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10 flex-grow">
                <div className="border-b border-gray-200 pb-6 mb-8">
                  <h3 className="text-3xl font-medium mb-2 text-gray-900">Deluxe Gala</h3>
                  <p className="text-[#c5a059] text-xl font-light">R1,150 per head</p>
                </div>
                <div className="space-y-8 text-gray-600 text-sm leading-relaxed">
                  <div>
                    <span className="block font-bold text-gray-900 mb-1 text-sm tracking-widest uppercase">Starter</span>
                    <p>Live chakalaka & vetkoek station • Mini sausage rolls (wors filling)</p>
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900 mb-1 text-sm tracking-widest uppercase">Main Course</span>
                    <p>Live carving station: oxtail, beef brisket, roast lamb, chicken quarters</p>
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900 mb-1 text-sm tracking-widest uppercase">Sides (Colours)</span>
                    <p>Expanded 7-colours buffet: pap, samp & beans, creamed spinach, beetroot, butternut, chakalaka, potato salad + seasonal vegetables</p>
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900 mb-1 text-sm tracking-widest uppercase">Dessert</span>
                    <p>Full dessert bar: malva pudding, koesisters, milk tartlets, fresh fruit, ice cream station</p>
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900 mb-1 text-sm tracking-widest uppercase">Beverages & Service</span>
                    <p>Premium non-alcoholic bar (rooibos cocktails, juices, infused water) • Dedicated service team • VIP table attention • Buxino Wines pairing available (extra)</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center mt-24">
            <a 
              href="/connect/contact-information" 
              className="inline-block bg-[#c5a059] text-gray-900 px-16 py-7 text-sm font-black uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Request Bespoke Gala Quote
            </a>
            <p className="text-gray-600 text-sm mt-8 italic">
              Response within 2 hours • Full dietary mapping • Gauteng & national delivery
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default GalasPage;