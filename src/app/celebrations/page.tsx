"use client";

import React from 'react';
import Footer from '@/components/Footer';

/**
 * BUXRAMSEY CELEBRATIONS
 * Page: src/app/celebrations/page.tsx
 */

const CelebrationsPage = () => {
  return (
    <main className="bg-[#001122] min-h-screen font-sans text-white overflow-x-hidden">
      
      {/* ── HERO ──────────────────────────────────────────────── */}
      <header className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/BuxRamsey.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </div>
      </header>

      {/* ── CELEBRATIONS CONTENT ──────────────────────────────── */}
      <section id="celebrations" className="bg-white py-32 text-[#001122]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-[#c5a059] tracking-widest text-xs uppercase font-black">
              Life Moments Deserve Real Home Flavour
            </span>
            <h2 className="font-serif text-6xl md:text-7xl font-light tracking-tight mt-4 mb-6">
              BuxRamsey for Life’s Celebrations
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              From lobola negotiations to milestone birthdays, every occasion calls for the comfort and familiarity of home.  
              BuxRamsey brings your family’s favourite dishes — slow-cooked stews, pap & samp, chakalaka, creamed spinach, beetroot salad, butternut, potato salad — elevated with precision service, stealth clearing, and full dietary flexibility (Halal, vegan, gluten-free options).  
              Menus are built around your budget, guest numbers, and cultural tone — always rooted in the same warmth we share around our own tables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* 1. Lobola Celebration */}
            <div className="bg-white border border-[#c5a059]/20 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-3 transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img src="/Lobola.jpg" alt="Traditional South African family feast" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium mb-6">Lobola Celebration</h3>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  Joyful post-negotiation gathering with family and extended kin. Food must be abundant, shareable, and energising to keep spirits high. Typically 30–120 guests.
                </p>

                <div className="space-y-12 text-sm">
                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Standard – R480 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Vetkoek minis with mince filling</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Slow-cooked beef stew + roast chicken quarters</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Dumpling (Steamed Bread) / Samp, creamed spinach, beetroot salad, butternut mash, chakalaka, potato salad</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Malva pudding shots + small koesisters</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Assorted juice concentrates (Oros, Hall’s) + water station</p>
                  </div>

                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Premium – R680 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Mini sausage rolls (wors filling) + boiled egg halves with light peri-peri</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Oxtail stew + roast chicken + beef brisket slices</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Full 7-colours spread + extra Dumpling (Steamed Bread) / samp</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Malva pudding cups + custard + small koesisters</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Fanta, Sparletta, Stoney, Coke cans + juice concentrates</p>
                  </div>

                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Deluxe – R950 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Live vetkoek station (mince & chakalaka) + mini sausage rolls</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Live carving station: oxtail + beef + chicken + wors</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Expanded 7 colours + pumpkin fritters + coleslaw</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Malva bar + koesisters + custard shots + fresh fruit</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Assorted fizzy drinks (cans) + rooibos iced tea station</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Traditional Wedding */}
            <div className="bg-white border border-[#c5a059]/20 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-3 transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img src="https://taste.co.za/wp-content/uploads/2021/05/White-wine-roast-umleqwa.jpg" alt="Authentic South African traditional wedding umleqwa chicken feast" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium mb-6">Traditional Wedding</h3>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  Vibrant, multi-day cultural event with large extended family. Food is communal and generous — must feed the crowd with warmth and abundance. Typically 100–400+ guests.
                </p>

                <div className="space-y-12 text-sm">
                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Standard – R520 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Vetkoek minis with mince + boiled egg halves</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Chicken stew (umleqwa style) + beef stew platters</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Pap / samp / Dumpling (Steamed Bread), creamed spinach, beetroot salad, chakalaka</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Malva pudding portions + custard</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Assorted juice concentrates + water station</p>
                  </div>

                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Premium – R750 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Mini sausage rolls (wors) + potato salad cups</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Oxtail stew + roast chicken + beef brisket</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Full 7-colours spread + extra samp</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Malva pudding cups + milk tart slices</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Fanta, Sparletta, Stoney cans + juice concentrates</p>
                  </div>

                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Deluxe – R1,050 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Live vetkoek & mince station + mini sausage rolls</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Live carving: oxtail + beef + chicken + wors</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Expanded 7 colours + pumpkin fritters + coleslaw</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Malva bar + koesisters + custard shots + fruit</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Assorted fizzy drinks (cans) + rooibos iced tea + juice concentrates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Western Wedding */}
            <div className="bg-white border border-[#c5a059]/20 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-3 transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img src="/Wedding.jpg" alt="Elegant plated South African home-style wedding meal" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium mb-6">Western Wedding</h3>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  Plated, refined reception with speeches and dancing. Often 80–250 guests. Focus on beautiful individual plates with familiar home flavours — elegant but comforting.
                </p>

                <div className="space-y-12 text-sm">
                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Standard – R580 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Potato salad cups + mini vetkoek (plain)</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Plated herb-roasted chicken + beef stew portion</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Pap / rice / Dumpling (Steamed Bread), creamed spinach, butternut mash, chakalaka</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Malva pudding portions + custard drizzle</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Assorted juice concentrates + water station</p>
                  </div>

                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Premium – R820 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Mini sausage rolls + potato salad cups</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Plated oxtail portion + roast chicken + beef slices</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Full 7-colours plated (samp / Dumpling, spinach, beetroot, butternut, chakalaka, potato salad)</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Malva pudding + milk tart slices</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Fanta, Sparletta, Stoney cans + juice concentrates</p>
                  </div>

                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Deluxe – R1,200 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Live vetkoek & mince station + mini sausage rolls</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Plated multi-protein selection (oxtail, chicken, beef, wors)</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Premium 7 colours + pumpkin fritters + coleslaw</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Malva bar + milk tart + koesisters + fresh fruit</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Assorted fizzy drinks (cans) + rooibos iced tea + juice concentrates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Funeral Service */}
            <div className="bg-white border border-[#c5a059]/20 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-3 transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img src="https://taste.co.za/wp-content/uploads/2024/06/Chicken-stew.jpg" alt="Comforting South African chicken stew for memorial gathering" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium mb-6">Funeral Service</h3>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  Sombre gathering focused on comfort and support. Food should nourish without extravagance — familiar, hearty, and consoling. Typically 40–150 guests.
                </p>

                <div className="space-y-12 text-sm">
                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Standard – R320 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Sandwich Platter (Chicken Mayo, Cheese & Tomato)</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Beef stew + chicken pieces (comfort platters)</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Pap / Dumpling (Steamed Bread) / Samp, chakalaka, creamed spinach, beetroot salad</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Fruit salad with light custard (optional malva)</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Assorted juice concentrates + water station</p>
                  </div>

                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Premium – R420 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Potato salad cups + light beetroot cups</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Oxtail stew (small portions) + chicken + beef</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Full 7-colours spread (samp / pap / Dumpling, butternut, spinach, beetroot, chakalaka)</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Malva pudding portions (small & comforting)</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Juice concentrates + water station</p>
                  </div>

                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Deluxe – R550 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Mini vetkoek (plain) + potato salad cups</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Comfort platters: oxtail + beef + chicken</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">All home sides + extra samp & beans</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Fruit salad + light malva + custard</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Juice concentrates + rooibos iced tea station</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Tombstone Unveiling */}
            <div className="bg-white border border-[#c5a059]/20 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-3 transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img src="/Tombstone.jpg" alt="Memorial home-cooked spread South Africa" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium mb-6">Tombstone Unveiling</h3>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  Respectful remembrance with family reunion feel. Food should comfort and unite — familiar home dishes served with warmth. Typically 50–150 guests.
                </p>

                <div className="space-y-12 text-sm">
                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Standard – R380 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Sandwich Platter</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Chicken stew + beef stew portions</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Pap / Dumpling (Steamed Bread) / Rice, creamed spinach, chakalaka, butternut mash</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Fruit salad with light custard</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Assorted juice concentrates + water station</p>
                  </div>

                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Premium – R480 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Mini vetkoek (plain) + potato salad cups</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Oxtail stew (small portions) + chicken pieces</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Full 7-colours spread (Samp / Pap / Dumpling / Rice, spinach, beetroot, chakalaka)</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Malva pudding portions + custard</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Juice concentrates + rooibos iced tea station</p>
                  </div>

                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Deluxe – R620 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Mini sausage rolls + beetroot & potato platter</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Comfort platters: oxtail + beef + chicken</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Expanded sides + extra Dumpling (Steamed Bread) + pumpkin fritters</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Fruit salad + malva pudding + small koesisters</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Assorted juice concentrates + rooibos iced tea + water station</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Baptism / Confirmation Celebration */}
            <div className="bg-white border border-[#c5a059]/20 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-3 transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img src="/Baptismal.jpg" alt="Family celebration home meal South Africa" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium mb-6">Baptism / Confirmation Celebration</h3>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  Joyful church milestone with family and close community. Food should be light-to-medium, welcoming, and family-oriented. Typically 20–80 guests.
                </p>

                <div className="space-y-12 text-sm">
                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Standard – R350 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Potato salad cups + boiled egg halves</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Herb-roasted chicken + vegetable stew</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Pap / rice / Dumpling (Steamed Bread), creamed spinach, beetroot salad, chakalaka</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Milk tart slices + fruit salad</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Assorted juice concentrates + water station</p>
                  </div>

                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Premium – R450 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Mini vetkoek (plain) + potato salad cups</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Chicken stew + beef stew portions</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Full 7-colours spread + extra Dumpling (Steamed Bread) / Samp</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Malva pudding + milk tart slices</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Juice concentrates + rooibos iced tea station</p>
                  </div>

                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Deluxe – R580 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Mini sausage rolls + beetroot & potato platter</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Multi-protein platter (chicken + beef)</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Expanded sides + pumpkin fritters</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Milk tart bar + fruit salad + small koesisters</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Fanta, Sparletta cans + juice concentrates + water</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Graduation Party */}
            <div className="bg-white border border-[#c5a059]/20 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-3 transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img src="/Graduation.png" alt="Celebratory South African home feast for graduation" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium mb-6">Graduation Party</h3>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  Proud, festive achievement celebration with family & friends. Food should be uplifting and generous. Typically 30–150 guests.
                </p>

                <div className="space-y-12 text-sm">
                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Standard – R420 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Vetkoek minis with mince + potato salad cups</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Chicken stew + beef stew combo</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Pap / Dumpling (Steamed Bread), creamed spinach, beetroot salad, butternut, chakalaka</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Malva pudding portions + fruit</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Assorted juice concentrates + water station</p>
                  </div>

                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Premium – R580 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Mini sausage rolls + beetroot & potato platter</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Oxtail stew + chicken + beef slices</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Full 7 colours + extra Dumpling (Steamed Bread)</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Malva pudding + milk tart slices</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Fanta, Sparletta, Stoney cans + juice concentrates</p>
                  </div>

                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Deluxe – R750 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Live vetkoek & mince station + mini sausage rolls</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Multi-protein platters (chicken, beef, wors)</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Expanded 7 colours + pumpkin fritters + coleslaw</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Malva bar + koesisters + fruit salad</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Assorted fizzy drinks (cans) + rooibos iced tea + juice concentrates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 8. Milestone Birthday */}
            <div className="bg-white border border-[#c5a059]/20 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-3 transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img src="/Milestone.jpg" alt="Festive South African birthday celebration table with home food" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium mb-6">Milestone Birthday (21st–60th+)</h3>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  Personal milestone party — celebratory and fun. Food should feel festive yet familiar. Typically 40–200 guests depending on age & scale.
                </p>

                <div className="space-y-12 text-sm">
                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Standard – R450 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Vetkoek minis with chakalaka + potato salad cups</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Beef stew + chicken combo platters</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Pap, creamed spinach, beetroot, butternut, chakalaka</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Malva pudding portions + fruit</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Assorted juice concentrates + water station</p>
                  </div>

                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Premium – R620 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Mini sausage rolls + beetroot & potato platter</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Oxtail stew + chicken + beef slices</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Full 7 colours + extra samp</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Malva pudding + milk tart slices</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Fanta, Sparletta, Stoney cans + juice concentrates</p>
                  </div>

                  <div>
                    <p className="font-bold text-lg mb-4 text-[#001122] border-b border-[#c5a059]/20 pb-2">Deluxe – R850 per head</p>
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">STARTER</span>
                    <p className="text-gray-700 mb-6">Live vetkoek & mince station + mini sausage rolls</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">MAIN COURSE</span>
                    <p className="text-gray-700 mb-6">Multi-protein platters (chicken, beef, wors)</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">SIDES (COLOURS)</span>
                    <p className="text-gray-700 mb-6">Expanded 7 colours + pumpkin fritters + coleslaw</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">DESSERT</span>
                    <p className="text-gray-700 mb-6">Malva bar + koesisters + fruit salad + custard</p>
                    
                    <span className="block font-bold text-[#001122] mb-1 tracking-wider">BEVERAGE OPTIONS</span>
                    <p className="text-gray-700">Assorted fizzy drinks (cans) + rooibos iced tea + juice concentrates</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* FINAL CTA */}
          <div className="text-center mt-20 md:mt-28">
            <p className="text-xl md:text-2xl text-gray-800 mb-8 font-light">
              Ready to bring the soul of home to your next celebration?
            </p>
            <a 
              href="/quote_gen"
              className="inline-block bg-[#c5a059] text-[#001122] px-12 py-6 text-lg tracking-widest font-black uppercase rounded-full hover:bg-[#b08a3e] transition-all duration-300 shadow-lg"
            >
              Get Your Custom Quote →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CelebrationsPage;