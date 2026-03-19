"use client";

import React from 'react';
import Footer from '@/components/Footer';

/**
 * BUXRAMSEY CORPORATE MENUS – LIGHT VERSION
 * Page: src/app/corporate_menus/page.tsx
 */

const CorporateMenusPage = () => {
  return (
    <main className="bg-gray-50 min-h-screen font-sans text-gray-900 overflow-x-hidden">
      
      {/* ── HERO ──────────────────────────────────────────────── */}
      <header className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/BuxRamsey.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
    </div>
  </header>



      {/* ── THE BUXRAMSEY STORY ──────────────────────────────── */}
      <section className="relative z-10 bg-white py-24 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c5a059] text-xs tracking-[0.5em] mb-12 uppercase font-black">
            Established 2021 — Institutional Execution
          </p>
          
          <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tighter text-gray-900 mb-14 uppercase">
            The BuxRamsey Story
          </h2>
          
          <div className="max-w-2xl mx-auto text-xl md:text-2xl font-light text-gray-700 leading-relaxed mb-20 space-y-10">
            <p className="italic font-serif">
              "It started in high school Consumer Studies practicals—cooking was never just homework, it was passion. Lockdown gave me the time to hone it. A traditional 7-colours Sunday lunch around the family table became something more."
            </p>
            <p className="text-gray-900">
              That warmth, that value, that story on a plate—I turned it corporate. <br />
              <span className="text-[#c5a059] font-medium italic">Home menu. Boardroom soul.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-16 border-t border-gray-200">
            <div>
              <h4 className="text-gray-900 text-lg mb-2 font-medium">Heritage</h4>
              <p className="text-gray-600 text-[10px] tracking-widest uppercase font-black">The 7 Colours Legacy</p>
            </div>
            <div>
              <h4 className="text-gray-900 text-lg mb-2 font-medium">Authenticity</h4>
              <p className="text-gray-600 text-[10px] tracking-widest uppercase font-black">Township Roots</p>
            </div>
            <div>
              <h4 className="text-gray-900 text-lg mb-2 font-medium">Precision</h4>
              <p className="text-gray-600 text-[10px] tracking-widest uppercase font-black">Corporate Standard</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY THIS MATTERS ─────────────────────────────────── */}
      <section id="values" className="bg-gray-50 py-28 text-gray-900 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mx-auto mb-8" />
          
          <h2 className="font-serif text-6xl font-light tracking-tight mb-10 text-gray-900">
            A Meal Around the Table Had Value
          </h2>
          
          <p className="text-xl leading-relaxed text-gray-700">
            BuxRamsey isn’t about fancy plating or imported trends. It’s about bringing the soul of black South African home cooking into your boardroom — the same comfort, the same spices that tell a story of family, resilience, and celebration.  
            Every dish carries my palette: township Sunday lunches elevated with precision timing, stealth service, and full respect for dietary needs (Halal, vegan, gluten-free, etc.).
          </p>

          <div className="mt-12 grid grid-cols-3 gap-8 text-sm">
            <div className="text-center">
              <div className="text-[#c5a059] text-4xl font-black">7</div>
              <p className="mt-3 text-gray-600">Colours of home</p>
            </div>
            <div className="text-center border-x border-gray-200">
              <div className="text-[#c5a059] text-4xl font-black">0</div>
              <p className="mt-3 text-gray-600">Meeting disruptions</p>
            </div>
            <div className="text-center">
              <div className="text-[#c5a059] text-4xl font-black">100%</div>
              <p className="mt-3 text-gray-600">South African heart</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIGNATURE HOME MENUS ─────────────────────────────── */}
      <section id="menus" className="bg-white py-28 border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#c5a059] text-xs tracking-widest font-black">
              FROM OUR FAMILY TABLE TO YOURS
            </span>
            <h2 className="font-serif text-6xl font-light tracking-tight mt-3 text-gray-900">
              Three Signature Home Menus
            </h2>
            <p className="text-gray-600 mt-4 max-w-lg mx-auto">
              Real 7-colours spirit — slow-cooked stews, pap/samp, chakalaka, creamed spinach, beetroot, butternut, potato salad.  
              All locally sourced. Fully customisable. Served with the same love we put around our own tables.
            </p>
          </div>

          {/* Menu 1: Classic Sunday 7 Colours */}
          <div className="bg-white border border-gray-200 p-12 mb-12 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
              <div>
                <div className="text-[#c5a059] text-xs tracking-widest font-black">HOME MENU 01</div>
                <h3 className="font-serif text-4xl font-light text-gray-900">Classic Sunday 7 Colours</h3>
                <p className="text-gray-600 mt-2">60–90 min • 8–25 guests • Stealth-plated</p>
              </div>
              <div className="text-right">
                <span className="text-[#c5a059] text-sm font-light">FROM R380 PER HEAD</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="uppercase text-xs tracking-widest mb-4 text-gray-600">THE HEART OF THE PLATE</h4>
                <ul className="space-y-4 text-gray-700 text-sm">
                  <li>• Slow-cooked beef stew (tender chuck or brisket in rich tomato-onion gravy)</li>
                  <li>• Roast chicken quarters (crispy skin, seasoned simply with garlic, paprika & thyme)</li>
                  <li>• Samp & beans (umngqusho style — hearty, comforting, slow-simmered)</li>
                  <li>• Stiff pap with rich gravy (the real township Sunday base)</li>
                </ul>
              </div>
              <div>
                <h4 className="uppercase text-xs tracking-widest mb-4 text-gray-600">THE COLOURS & SIDES</h4>
                <ul className="space-y-4 text-gray-700 text-sm">
                  <li>• Creamed spinach (with fresh cream & a touch of nutmeg)</li>
                  <li>• Beetroot salad (sweet & tangy, with onion & vinegar)</li>
                  <li>• Butternut mash or cubes (buttery, cinnamon-kissed)</li>
                  <li>• Potato salad (creamy with mayo, onion, egg & pickles)</li>
                  <li>• Chakalaka (spicy, homemade — beans, tomatoes, peppers)</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 text-xs mt-10 border-t border-gray-200 pt-8">
              This is the Sunday plate I grew up with — now plated elegantly for your boardroom. Quiet service, cleared in minutes. Feels like home, performs like institution.
            </p>
          </div>

          {/* Menu 2: Oxtail Sunday Special */}
          <div className="bg-white border border-gray-200 p-12 mb-12 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
              <div>
                <div className="text-[#c5a059] text-xs tracking-widest font-black">HOME MENU 02</div>
                <h3 className="font-serif text-4xl font-light text-gray-900">Oxtail Sunday Comfort</h3>
                <p className="text-gray-600 mt-2">Plated • 10–40 guests • Deep flavour focus</p>
              </div>
              <div className="text-right">
                <span className="text-[#c5a059] text-sm font-light">FROM R520 PER HEAD</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <ul className="space-y-4 text-gray-700 text-sm">
                  <li>• Slow-braised oxtail stew (fall-off-the-bone, rich tomato-wine gravy with carrots & potatoes)</li>
                  <li>• Yellow rice with raisins & turmeric (sweet-savory balance)</li>
                  <li>• Samp & beans (hearty sidekick to the oxtail)</li>
                  <li>• Chakalaka (extra spicy version for those who love heat)</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4 text-gray-700 text-sm">
                  <li>• Creamed spinach & feta (creamy, garlicky)</li>
                  <li>• Beetroot & onion salad (vinegar tang)</li>
                  <li>• Butternut & sweet potato mash (caramelised edges)</li>
                  <li>• Fresh garden salad or coleslaw (crisp contrast)</li>
                  <li>• Malva pudding shots (warm, sticky — mini portion for boardroom)</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 text-xs mt-10 border-t border-gray-200 pt-8">
              For longer sessions or celebrations. The kind of rich, slow-cooked dish that makes people linger and talk — exactly what a family Sunday does.
            </p>
          </div>

          {/* Menu 3: Chicken & Veg Home Plate */}
          <div className="bg-white border border-gray-200 p-12 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
              <div>
                <div className="text-[#c5a059] text-xs tracking-widest font-black">HOME MENU 03</div>
                <h3 className="font-serif text-4xl font-light text-gray-900">Chicken & Veg Home Plate</h3>
                <p className="text-gray-600 mt-2">Balanced • Vegan options • 8–50 guests</p>
              </div>
              <div className="text-right">
                <span className="text-[#c5a059] text-sm font-light">FROM R410 PER HEAD</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <ul className="space-y-4 text-gray-700 text-sm">
                  <li>• Herb-roasted free-range chicken (garlic, lemon, thyme — juicy & golden)</li>
                  <li>• Vegetable stew (cabbage, carrots, potatoes, tomatoes — soulful & light)</li>
                  <li>• Pap or rice (choose stiff pap or plain white rice)</li>
                  <li>• Chakalaka (mild or hot — house-made)</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4 text-gray-700 text-sm">
                  <li>• Creamed spinach (classic township style)</li>
                  <li>• Beetroot salad (grated, sweet-sour)</li>
                  <li>• Butternut cubes (roasted with cinnamon)</li>
                  <li>• Potato salad or green salad (fresh crunch)</li>
                  <li>• Vetkoek bites or dombolo (steamed bread – optional add-on)</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 text-xs mt-10 border-t border-gray-200 pt-8">
              Lighter but still full of home flavour. Perfect for wellness-aware teams or mixed dietary needs. Vegan/gluten-free versions available without losing the soul.
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
<section className="bg-gray-100 py-24 text-gray-900 text-center border-t border-gray-200">
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="font-serif text-5xl md:text-6xl font-light tracking-tight mb-8">
      Bring the family table to your boardroom
    </h2>
    <p className="text-lg mb-10 text-gray-700">
      Tell us your meeting size, dietary needs, and timeline — we’ll craft your custom 7-colours plate.
    </p>
    <a 
      href="/connect/contact-information" 
      className="inline-block bg-white text-gray-900 px-20 py-8 text-xs font-black uppercase tracking-widest hover:bg-[#c5a059] hover:text-white transition-all duration-300 rounded-lg shadow-md hover:shadow-lg border border-gray-200"
    >
      DESIGN MY HOME MENU
    </a>
    <p className="text-gray-600 text-xs mt-8">
      Gauteng-based • Quick response • Personal touch guaranteed
    </p>
  </div>
</section>

      <Footer />
    </main>
  );
};

export default CorporateMenusPage;