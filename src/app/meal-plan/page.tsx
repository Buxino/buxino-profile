"use client";

import React, { useState } from 'react';

const validUnlockCode = 'BUXINO30UNLK'; // ← CHANGE THIS TO YOUR REAL CODE

const MealPlanPage = () => {
  const [unlockCode, setUnlockCode] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    if (unlockCode.trim().toUpperCase() === validUnlockCode) {
      setIsUnlocked(true);
      setMessage('Unlocked! Taking you to Day 11...');
      showFloatingBadge();

      setTimeout(() => {
        setShowModal(false);
        setUnlockCode('');
        setMessage('');
        const day11 = document.getElementById('day-11');
        if (day11) {
          day11.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 1800);
    } else {
      setMessage('Invalid code — please check your message from me.');
    }
  };

  const showFloatingBadge = () => {
    const badge = document.createElement('div');
    badge.innerHTML = `
      <div class="fixed bottom-8 right-8 bg-green-600 text-gray-900 px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 z-50 animate-fade-in-out">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        <span class="font-bold text-lg">Unlocked!</span>
      </div>
    `;
    document.body.appendChild(badge.firstElementChild!);
    setTimeout(() => badge.remove(), 3500);
  };

  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen overflow-x-hidden font-sans">
      <style jsx global>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(20px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(20px); }
        }
        .animate-fade-in-out {
          animation: fadeInOut 3.5s ease-in-out forwards;
        }
      `}</style>

      {/* HERO IMAGE */}
      <div className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden bg-gray-100">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/BuxRamsey.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900/10 to-gray-900/40" />
        </div>
      </div>

 {/* SALES + BENEFITS – NOW LIGHT & AIRY */}
<section className="bg-gray-50 py-20 lg:py-28 border-t border-gray-200">
  <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 text-center">
    <span className="text-[#c5a059] text-xs tracking-[0.4em] uppercase font-medium mb-6 block">
      From My Kitchen to Yours
    </span>
    
    <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-8 text-gray-900">
      30 Days of Real Fuel
    </h2>
    
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
      I started this plan for myself — long days, family responsibilities, and wanting to feel steady instead of drained.<br />
      It gave me the energy I needed without losing the comfort of the Sunday table I grew up around.<br />
      <span className="italic text-[#c5a059]">
        Now I’d like to quietly share it with you — exactly as I use it every day.
      </span>
    </p>

    <div className="grid md:grid-cols-3 gap-8 mb-16 text-left">
      <div className="p-7 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <h4 className="text-[#c5a059] text-base font-medium mb-3">Food That Feels Like Home</h4>
        <p className="text-gray-700 text-base">
          7-colours comfort with just enough care to keep you strong — no strange ingredients, just real meals.
        </p>
      </div>
      <div className="p-7 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <h4 className="text-[#c5a059] text-base font-medium mb-3">Made for Your Life</h4>
        <p className="text-gray-700 text-base">
          Versions for students on the go, busy work days, or staying active later in life — choose what fits you right now.
        </p>
      </div>
      <div className="p-7 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <h4 className="text-[#c5a059] text-base font-medium mb-3">A Bit of Help Along the Way</h4>
        <p className="text-gray-700 text-base">
          Shopping lists, simple prep tips, habit tracker — and if you get stuck, you can message me directly.
        </p>
      </div>
    </div>

    <h3 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-center mb-10 text-gray-900">
      What You Might Notice
    </h3>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
      {[
        { title: "Steady Days", desc: "Less dragging in the afternoon, fewer energy dips — just calm focus whether you’re at work, studying, or with family." },
        { title: "Better Nights", desc: "Falling asleep more easily, waking up clearer — real food at regular times helps the body rest properly." },
        { title: "Gentle Reset", desc: "Over time clothes feel looser, you move a bit easier — slow, natural changes without forcing anything extreme." },
        { title: "Pride in the Plate", desc: "Cooking meals that carry your roots and still make you feel good — that quiet satisfaction changes how you see food." },
        { title: "Less Second-Guessing", desc: "Knowing what’s going in, portions that feel right, even a small treat fits — no more guilt cycles." },
        { title: "A Bit More Like Yourself", desc: "When energy is steady and the body feels good, you show up differently — at home, at work, in your own quiet way." },
      ].map((item, i) => (
        <div key={i} className="p-7 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="text-[#c5a059] text-base font-medium mb-3">{item.title}</h4>
          <p className="text-gray-700 text-base">{item.desc}</p>
        </div>
      ))}
    </div>

    <p className="text-center text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light italic">
      I felt these small shifts myself first — clearer mornings, steadier afternoons, better rest. If any of it helps you too, that’s more than enough.
    </p>

    {/* UNLOCK TEASER – LIGHT VERSION */}
    <div className="max-w-3xl mx-auto bg-white border border-[#c5a059]/30 rounded-2xl p-8 md:p-12 shadow-sm">
      <h3 className="text-2xl md:text-3xl font-medium mb-6 text-gray-900">
        After Day 10: Unlock the Full Transformation
      </h3>
      <p className="text-gray-700 mb-8">
        Day 10 is your first full 7-Colours Sabbath — the emotional & flavor peak.<br />
        Days 11–30 is where habits lock in: lean-out phase, richer reward feasts, final sustain & scale.
      </p>
      <div className="grid md:grid-cols-3 gap-8 text-left text-sm text-gray-700 mb-10">
        <div>• Printable shopping lists</div>
        <div>• Batch-prep guides</div>
        <div>• Alcohol & palate-reset protocol</div>
        <div>• 30-day habit tracker</div>
        <div>• Private WhatsApp support</div>
        <div>• One-time R349 unlock</div>
      </div>

      {/* EMAIL REQUEST */}
      <a
        href="mailto:consulting@buxino.co.za?subject=BuxRamsey%2030-Day%20Meal%20Plan%20Unlock%20Request&body=Hi%20Bakang%2C%0A%0AI%20would%20like%20to%20unlock%20the%20full%2030-day%20meal%20plan%20(Days%2011%E2%80%9330)%20for%20R349.%0A%0AMy%20name%3A%20[Your%20Full%20Name]%0AMy%20WhatsApp%20number%3A%20%2B27...%0A%0AI%20understand%20you%20will%20send%20me%20a%20payment%20link%20and%20then%20the%20unique%20unlock%20code%20after%20confirmation.%0A%0AThanks!%0A[Your%20Name]"
        className="block w-full bg-[#c5a059] text-[#001122] py-5 rounded-lg font-black uppercase tracking-widest text-center hover:bg-[#b08a3e] transition-colors mb-6 shadow-sm"
      >
        Request Unlock – R349 (Email Payment Link)
      </a>

      {/* CODE UNLOCK BUTTON */}
      <button
        onClick={() => setShowModal(true)}
        className="block w-full bg-gray-800 text-white py-5 rounded-lg font-black uppercase tracking-widest text-center hover:bg-gray-900 transition-colors mb-6"
      >
        Already Have a Code? Unlock Now
      </button>

      <p className="text-gray-600 text-sm text-center">
        I'll reply with a secure payment link (Ozow / Payfast / SnapScan).<br />
        Once confirmed, you'll receive your unique unlock code.
      </p>
    </div>

    {/* FREE START CTA */}
    <div className="flex flex-col items-center gap-6 max-w-md mx-auto mt-12">
      <a
        href="#day-01"
        className="inline-flex items-center justify-center bg-[#c5a059] text-[#001122] px-12 py-6 rounded-xl font-medium uppercase tracking-wide text-base hover:bg-[#b08a3e] transition-colors shadow-md hover:shadow-lg"
      >
        Start Days 1–10 Free
      </a>
      <p className="text-center text-gray-600 text-sm md:text-base max-w-xs">
        No sign-up needed to begin.
      </p>
    </div>
  </div>
</section>

      {/* UNLOCK MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 md:p-12 max-w-md w-full mx-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-semibold text-[#001122] mb-6 text-center">Enter Your Unlock Code</h3>
            <input
              type="text"
              value={unlockCode}
              onChange={(e) => setUnlockCode(e.target.value)}
              placeholder="Enter code here"
              className="w-full px-6 py-4 border-2 border-gray-400 rounded-lg text-center text-xl mb-6 focus:outline-none focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/30 text-black bg-white"
            />
            <button
              onClick={handleUnlock}
              className="w-full bg-[#c5a059] text-[#001122] py-5 rounded-lg font-black uppercase tracking-widest hover:bg-yellow-300 transition-colors"
            >
              Unlock Full 30 Days
            </button>
            <p className="text-center text-sm mt-4 min-h-[1.5rem]" dangerouslySetInnerHTML={{ __html: message }} />
          </div>
        </div>
      )}

      {/* 30-DAY CYCLE OVERVIEW */}
      <section className="bg-gray-50 py-24 border-b border-white/5">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-16">
          <h2 className="serif text-5xl md:text-6xl font-light tracking-tight text-center mb-16">
            The 30-Day Cycle
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 text-center">
            {[
              { days: "1–7", title: "Foundation & Output", desc: "Build habits. Moderate carbs + protein. Establish rhythm." },
              { days: "8–10", title: "Priming + Sabbath", desc: "Lighten load → full 7-colours heritage feast (Day 10)." },
              { days: "11–17", title: "Reset → Mid-Grind", desc: "Flush → rebuild → incorporate braai-style proteins." },
              { days: "18–25", title: "Optimization + Reward", desc: "Lean out → richer Oxtail Sunday (Day 25)." },
              { days: "26–30", title: "Sustain & Scale", desc: "Recovery → integration → ready for team rollout." },
            ].map((phase, i) => (
              <div key={i} className="bg-white border border-gray-200 p-8 rounded-xl">
                <div className="text-[#c5a059] text-2xl font-black mb-4">{phase.days}</div>
                <h3 className="text-xl font-medium mb-3">{phase.title}</h3>
                <p className="text-gray-900/60 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TAILORED TIERS */}
      <section className="bg-gray-50 py-20 border-b border-white/5">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-16">
          <h2 className="serif text-4xl md:text-5xl font-light tracking-tight text-center mb-12">
            Tailored for Your Life Stage
          </h2>
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            <div className="bg-white border border-blue-400/20 p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-6 h-6 rounded-full bg-blue-400 flex-shrink-0" />
                <h3 className="text-2xl font-medium">18–25 Student</h3>
              </div>
              <p className="text-gray-900/70 leading-relaxed mb-4">
                High-energy demands, tight budget, often cooking in shared spaces. Focus on affordable staples, batch-friendly meals, and nutrient-dense comfort food that fuels long study sessions or part-time hustle.
              </p>
              <ul className="text-gray-900/60 text-sm space-y-2">
                <li>• Pilchards, soya mince, oats, brown bread</li>
                <li>• Higher carbs for brain fuel</li>
                <li>• Simple prep — one-pot or no-cook options</li>
              </ul>
            </div>

            <div className="bg-white border border-[#c5a059]/30 p-8 rounded-xl relative">
              <div className="absolute -top-3 right-6 bg-[#c5a059] text-[#001122] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                Core Focus
              </div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-6 h-6 rounded-full bg-[#c5a059] flex-shrink-0" />
                <h3 className="text-2xl font-medium">26–35 Corporate</h3>
              </div>
              <p className="text-gray-900/70 leading-relaxed mb-4">
                Peak performance under pressure. Lean proteins, metabolic balance, minimal disruptions. Meals that sustain focus through back-to-back meetings while staying rooted in BuxRamsey soul.
              </p>
              <ul className="text-gray-900/60 text-sm space-y-2">
                <li>• Grilled/slow-cooked meats, chakalaka control</li>
                <li>• Controlled portions + anti-inflammatory sides</li>
                <li>• Occasional palate reset (herbal tea, infused water)</li>
              </ul>
            </div>

            <div className="bg-white border border-emerald-500/20 p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-6 h-6 rounded-full bg-emerald-500 flex-shrink-0" />
                <h3 className="text-2xl font-medium">36+ Veteran</h3>
              </div>
              <p className="text-gray-900/70 leading-relaxed mb-4">
                Longevity, joint health, heart & gut focus. Gentler on the system, higher in anti-inflammatory spices, omega-3s, and fiber — still full of heritage flavor, just lighter execution.
              </p>
              <ul className="text-gray-900/60 text-sm space-y-2">
                <li>• More fish, pulses, turmeric/ginger</li>
                <li>• Lower red meat frequency, steamed/roasted veg heavy</li>
                <li>• Emphasis on recovery & sustained energy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION */}
      <section className="bg-gray-50 py-20 lg:py-24 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <h2 className="serif text-3xl md:text-4xl font-light tracking-tight mb-8 text-gray-900">
            Fully Customisable
          </h2>
          <p className="text-lg md:text-xl text-gray-900/70 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
            Every plan bends to fit your needs — Halal, vegan, gluten-free, low-carb — without ever losing the soul of home cooking.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { title: "Halal", desc: "Chicken and beef from certified sources only. Oxtail can be swapped for lamb shank or extra chicken." },
              { title: "Vegan", desc: "Soya mince, lentils, beans, chickpeas replace meat. Chakalaka, samp and veg sides stay at the heart." },
              { title: "Gluten-Free", desc: "Maize meal pap, rice or quinoa instead of wheat. Bread-based items can be skipped or swapped." },
              { title: "Low-Carb", desc: "More greens, spinach, beets — smaller pap/samp/rice portions. Protein and veg take centre stage." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 p-6 md:p-8 rounded-2xl text-left transition-all hover:border-[#c5a059]/30">
                <h4 className="text-[#c5a059] text-sm uppercase tracking-wider font-medium mb-3">{item.title}</h4>
                <p className="text-gray-900/75 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-900/60 text-sm mt-12 font-light italic">
            Whatever your path, the warmth of heritage stays — just shaped to suit you.
          </p>
        </div>
      </section>

      {/* PREP PHILOSOPHY & WEEK 1 GROCERY */}
      <section className="bg-gray-50 py-24 border-b border-white/5">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-16">
          <h2 className="serif text-5xl md:text-6xl font-light tracking-tight text-center mb-12">
            Prep Smart, Eat Soulfully
          </h2>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-900/70 leading-relaxed">
              Batch on weekends. Freeze portions. Use leftovers creatively. Every meal builds on the last — reducing waste while keeping flavor consistent.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-10 rounded-xl">
            <h3 className="text-3xl serif font-light mb-8 text-center">Week 1 Sample Grocery List</h3>
            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <h4 className="text-[#c5a059] uppercase text-sm tracking-widest mb-4">Proteins</h4>
                <ul className="text-gray-900/70 text-sm space-y-2">
                  <li>• Beef chuck / brisket 2–3 kg</li>
                  <li>• Free-range chicken quarters 2 kg</li>
                  <li>• Eggs 2 dozen</li>
                  <li>• Pilchards (tinned) 4–6 cans (Student)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#c5a059] uppercase text-sm tracking-widest mb-4">Veg & Sides</h4>
                <ul className="text-gray-900/70 text-sm space-y-2">
                  <li>• Spinach 4 bunches</li>
                  <li>• Butternut 4 medium</li>
                  <li>• Beetroot 2 kg</li>
                  <li>• Carrots, onions, tomatoes 3 kg combined</li>
                  <li>• Peppers & beans for chakalaka</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#c5a059] uppercase text-sm tracking-widest mb-4">Staples</h4>
                <ul className="text-gray-900/70 text-sm space-y-2">
                  <li>• Samp & beans 2 kg dry</li>
                  <li>• Maize meal (for pap) 5 kg</li>
                  <li>• Oats / Maltabella 2 kg (Student)</li>
                  <li>• Brown rice / wholewheat bread</li>
                  <li>• Spices: paprika, thyme, nutmeg, cinnamon</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-900/50 text-sm italic text-center mt-10 border-t border-gray-200 pt-8">
              Scale quantities based on household size. Buy fresh weekly for greens/spinach.
            </p>
          </div>
        </div>
      </section>

            {/* PHASE 1: DAYS 1–10 – ALWAYS VISIBLE */}
      <section id="phase-1" className="bg-gray-50 py-24 border-b border-white/5">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[#c5a059] text-xs tracking-widest uppercase font-semibold">Phase 1</span>
            <h2 className="serif text-5xl md:text-6xl font-light tracking-tight mt-4 mb-6">
              Days 1–10: Foundation & Heritage Peak
            </h2>
            <p className="text-gray-900/70 max-w-3xl mx-auto text-lg leading-relaxed">
              Build rhythm, stabilize energy, and earn the emotional & flavor payoff on Day 10 — the full 7-Colours Sabbath.
            </p>
          </div>

          {/* Day 01 – repeated for continuity */}
          <div id="day-01" className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">01</div>
            <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 01: Strategic Foundation</h3>

            <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
              <div className="border-l-4 border-blue-400/40 pl-6">
                <p className="text-blue-400 text-xs uppercase tracking-widest mb-4 font-semibold">Academic Excellence</p>
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Steel-cut Oats, Peanut Butter, Local Honey</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Grilled Chicken Breast (200g), Steamed Cabbage, Grated Carrots</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Tinned Pilchards in Tomato, Soft Stiff Pap, Fresh Spinach</div>
                </div>
              </div>
              <div className="border-l-4 border-[#c5a059]/40 pl-6 bg-white/[0.03] p-6 rounded-r-xl relative">
                <p className="text-[#c5a059] text-xs uppercase tracking-widest mb-4 font-semibold">Corporate Strategy</p>
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>2 Boiled Eggs, ½ Avocado, 1 slice Rye Toast</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Beef Chuck Stew (Lean), Cauliflower Rice, Chakalaka (Mild)</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Herb-Roasted Chicken, Creamed Spinach (No Flour), Butternut</div>
                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-[#c5a059] text-xs uppercase font-bold italic block">Palate Reset</span>
                    <p className="text-gray-900/60 text-xs">Rooibos Tea or Infused Water – Clean finish</p>
                  </div>
                </div>
              </div>
              <div className="border-l-4 border-emerald-500/40 pl-6">
                <p className="text-emerald-500 text-xs uppercase tracking-widest mb-4 font-semibold">Lively Spirit</p>
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Warm Paw-paw with Lime & Pumpkin Seeds</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Grilled Hake, Sweet Potato, Large Beetroot & Onion Salad</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Vegetable & Lentil Stew, Small portion of Samp, Steamed Greens</div>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-gray-200 text-gray-900/60 text-sm italic">
              Prep Tip: Cook extra beef stew and samp/beans on Day 1 evening — use for lunches Days 2–4.
            </div>
          </div>

          {/* Day 02 */}
          <div id="day-02" className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">02</div>
            <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 02: Sustained Output</h3>

            <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
              <div className="border-l-4 border-blue-400/40 pl-6">
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>2 Fried Eggs, 2 slices Brown Bread, Sliced Tomato</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Leftover Pilchard Pasta (Wholewheat), Fresh Parsley</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Chicken Livers (Mild), Stiff Pap, Sautéed Onions & Peppers</div>
                </div>
              </div>
              <div className="border-l-4 border-[#c5a059]/40 pl-6 bg-white/[0.03] p-6 rounded-r-xl">
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Greek Yogurt (Full Fat), Chia Seeds, Handful of Walnuts</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Roasted Chicken Salad, Feta, Olives, Lemon-Olive Oil Dressing</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Grilled Sirloin (Fat trimmed), Wilted Spinach, Butternut Mash</div>
                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-[#c5a059] text-xs uppercase font-bold italic block">Palate Reset</span>
                    <p className="text-gray-900/60 text-xs">Sparkling Water with Fresh Mint</p>
                  </div>
                </div>
              </div>
              <div className="border-l-4 border-emerald-500/40 pl-6">
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Oat Bran with Cinnamon & Grated Apple</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Quinoa or Millet Salad with Roasted Veg & Chickpeas</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Baked Salmon or Trout, Broccoli, Small Baked Potato</div>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-gray-200 text-gray-900/60 text-sm italic">
              Prep Tip: Roast a big tray of chicken and veg on Day 2 — repurpose for salads and dinners mid-week.
            </div>
          </div>

          {/* Day 03 */}
          <div id="day-03" className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">03</div>
            <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 03: Metabolic Stability</h3>

            <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
              <div className="border-l-4 border-blue-400/40 pl-6">
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>2 Weet-Bix, low-fat milk, sliced strawberries or apple</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Chicken mayo wholewheat wrap with shredded lettuce</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Soya mince chilli con carne with mixed beans & rice</div>
                </div>
              </div>
              <div className="border-l-4 border-[#c5a059]/40 pl-6 bg-white/[0.03] p-6 rounded-r-xl">
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Green smoothie: spinach, celery, ginger, lemon, whey protein</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Grilled beef strips, rocket salad, balsamic glaze (no starch)</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Baked hake with turmeric, garlic green beans, small sweet potato</div>
                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-[#c5a059] text-xs uppercase font-bold italic block">Palate Reset</span>
                    <p className="text-gray-900/60 text-xs">Sparkling water with bitters – digestive reset</p>
                  </div>
                </div>
              </div>
              <div className="border-l-4 border-emerald-500/40 pl-6">
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Poached egg on 1 slice seeded rye toast</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Vegetable lentil soup with a touch of cayenne pepper</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Grilled chicken thighs (skinless), roasted cauliflower & broccoli</div>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-gray-200 text-gray-900/60 text-sm italic">
              Prep Tip: Make a large batch of lentil/vegetable soup base today — becomes lunch or dinner for Days 4–5 across all tiers.
            </div>
          </div>

          {/* Day 04 */}
          <div id="day-04" className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">04</div>
            <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 04: Peak Cognitive Load</h3>

            <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
              <div className="border-l-4 border-blue-400/40 pl-6">
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Peanut butter & honey on 2 slices brown toast</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Tuna salad (tinned tuna, corn, light mayo) on crackers</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Chicken livers (mild) with soft stiff pap & steamed spinach</div>
                </div>
              </div>
              <div className="border-l-4 border-[#c5a059]/40 pl-6 bg-white/[0.03] p-6 rounded-r-xl">
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>3-egg omelette with mushrooms, peppers, and feta</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Roasted turkey or lean beef, avocado, mixed greens (zero dressing)</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Grilled lamb chops (trimmed), minty peas, roasted butternut</div>
                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-[#c5a059] text-xs uppercase font-bold italic block">Note</span>
                    <p className="text-gray-900/60 text-xs">High protein dinner to fuel tomorrow’s final weekly sprints</p>
                  </div>
                </div>
              </div>
              <div className="border-l-4 border-emerald-500/40 pl-6">
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Maltabella porridge (small portion) with almonds</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Steamed white fish (kingklip), lemon, asparagus</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Baked sweet potato stuffed with chickpeas & light yogurt</div>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-gray-200 text-gray-900/60 text-sm italic">
              Prep Tip: Roast extra butternut and chicken/turkey today — becomes quick salad bases or reheats for Days 5–6.
            </div>
          </div>

          {/* Day 05 */}
          <div id="day-05" className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">05</div>
            <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 05: The Friday Transition</h3>

            <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
              <div className="border-l-4 border-blue-400/40 pl-6">
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">End-of-week reward</span>2 pieces grilled chicken, chakalaka, small portion fries or fried pap</div>
                </div>
              </div>
              <div className="border-l-4 border-[#c5a059]/40 pl-6 bg-white/[0.03] p-6 rounded-r-xl">
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">Main</span>Sirloin steak (250 g), garlic butter, wilted spinach</div>
                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-[#c5a059] text-xs uppercase font-bold italic block">Palate Reset</span>
                    <p className="text-gray-900/60 text-xs">1× neat whisky – marking the close of the operational week</p>
                  </div>
                </div>
              </div>
              <div className="border-l-4 border-emerald-500/40 pl-6">
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">Main</span>Slow-cooked vegetable stew with a single portion dombolo (steamed bread). Comfort focus.</div>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-gray-200 text-gray-900/60 text-sm italic">
              Prep Tip: Use this day to batch-prep breakfast items for Days 8–9 (smoothies, chopped veg, boiled eggs) and begin lightening starch if following the priming protocol.
            </div>
          </div>

          {/* Day 06 */}
          <div id="day-06" className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">06</div>
            <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 06: Cognitive Overdrive</h3>

            <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
              <div className="border-l-4 border-blue-400/40 pl-6">
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Peanut butter & banana on wholewheat toast (2 slices)</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Tuna mayo salad with sweetcorn & celery (high omega-3)</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Beef mince with peas over rice (cheap, iron-dense)</div>
                </div>
              </div>
              <div className="border-l-4 border-[#c5a059]/40 pl-6 bg-white/[0.03] p-6 rounded-r-xl">
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Omelette: 3 whites, 1 yolk, mushroom & spinach</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Grilled snoek or salmon, asparagus, sliced tomato</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Oxtail (reduced portion), sautéed kale, cauliflower mash</div>
                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-[#c5a059] text-xs uppercase font-bold italic block">Palate Reset</span>
                    <p className="text-gray-900/60 text-xs">Old Fashioned (bourbon) – complex wood notes cut through richness</p>
                  </div>
                </div>
              </div>
              <div className="border-l-4 border-emerald-500/40 pl-6">
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Smoothie: blueberries, spinach, ginger, flaxseeds</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Chicken & vegetable soup (bone broth base), 1 slice rye</div>
                  <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Steamed white fish (kingklip), garlic green beans, baked pumpkin</div>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-gray-200 text-gray-900/60 text-sm italic">
              Prep Tip: If cooking oxtail tonight (for Day 10 preview), start low & slow so it’s ready to portion tomorrow.
            </div>
          </div>

          {/* Day 07 */}
          <div id="day-07" className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">07</div>
            <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 07: The Transition</h3>

            <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
              <div className="border-l-4 border-blue-400/40 pl-6">
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>“Chisa Nyama” style: grilled chicken pieces with spicy chakalaka & pap</div>
                </div>
              </div>
              <div className="border-l-4 border-[#c5a059]/40 pl-6 bg-white/[0.03] p-6 rounded-r-xl">
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Lamb chops (3), minty peas, roasted Mediterranean veg</div>
                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-[#c5a059] text-xs uppercase font-bold italic block">Palate Reset</span>
                    <p className="text-gray-900/60 text-xs">Whisky neat – celebrating a closed week of high performance</p>
                  </div>
                </div>
              </div>
              <div className="border-l-4 border-emerald-500/40 pl-6">
                <div className="space-y-5 text-sm text-gray-900/80">
                  <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Braised lamb shanks (small), root vegetables, glass of water with lemon</div>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-gray-200 text-gray-900/60 text-sm italic">
              Prep Tip: Use this day to batch-prep breakfast items for Days 8–9 (smoothies, chopped veg, boiled eggs) and begin lightening starch if following the priming protocol.
            </div>
          </div>

          {/* Days 08–09: Digestive Priming */}
          <div id="days-08-09" className="menu-card bg-gradient-to-br from-white/5 to-transparent border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">08–09</div>
            <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Days 08–09: Digestive Priming</h3>
            <p className="text-gray-900/60 italic text-sm mb-8">
              48-hour wind-down before the 7-Colours Sabbath. Reduce starch, increase greens & hydration, improve insulin sensitivity for maximum heritage enjoyment on Day 10.
            </p>

            <div className="text-center mb-8 border-b border-gray-200 pb-6">
              <p className="text-gray-900/40 text-xs uppercase tracking-widest mb-2">Shared Protocol – All Tiers</p>
              <p className="text-gray-900/80 text-base italic">
                Grilled / steamed proteins + large salads only. Zero starches for 48 hours. Intermittent fasting (16:8) strongly recommended. Warm herbal teas only. Light walking encouraged.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-900/80">
              <div>
                <p className="text-blue-400 font-medium mb-2">Student Example Dinner</p>
                <p>Grilled chicken breast, large garden salad, apple cider vinegar dressing</p>
              </div>
              <div>
                <p className="text-[#c5a059] font-medium mb-2">Corporate Example Dinner</p>
                <p>Grilled sirloin (lean), steamed broccoli & asparagus, lemon squeeze</p>
              </div>
              <div>
                <p className="text-emerald-500 font-medium mb-2">Veteran Example Dinner</p>
                <p>Steamed kingklip, sautéed spinach & zucchini, turmeric sprinkle</p>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200 text-gray-900/60 text-sm italic text-center">
              Prep Tip: This is the calm before the heritage storm. Use leftovers from Days 6–7 proteins + buy fresh greens for Day 10’s full spread.
            </div>
          </div>

          {/* Day 10 – Sabbath Highlight */}
          <div id="day-10" className="menu-card bg-gradient-to-br from-[#c5a059]/10 to-transparent border border-[#c5a059]/40 p-12 md:p-16 mb-16 relative overflow-hidden shadow-[0_0_50px_rgba(197,160,89,0.15)]">
            <div className="absolute top-0 right-6 p-4 opacity-30 serif text-8xl md:text-9xl italic text-[#c5a059]/20">10</div>
            <div className="text-center mb-10">
              <span className="text-[#c5a059] text-sm tracking-[0.3em] uppercase font-bold block mb-4">Heritage Peak</span>
              <h3 className="serif text-4xl md:text-5xl font-light mb-4">Day 10: The 7-Colours Sabbath</h3>
              <p className="text-gray-900/60 italic text-lg max-w-2xl mx-auto">
                The Boardroom Soul Feast. Full heritage celebration — controlled portions, maximum flavor.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center text-gray-900/80 text-sm md:text-base">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <p>• Slow-cooked Beef Stew<br />• Roast Chicken Quarters<br />• Stiff Pap with Gravy</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <p>• Creamed Spinach<br />• Vibrant Chakalaka<br />• Beetroot Salad</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <p>• Butternut Mash<br />• Potato Salad<br />• Malva Pudding Shot (dessert closer)</p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-900/60 text-sm italic">
              Prep Tip: Cook the full 7-colours spread Saturday afternoon. Portion for Sunday enjoyment + leftovers for Monday reset.
            </div>
          </div>
        </div>
      </section>

    {/* PHASE 2 – 4 + Days 11–30 (hidden until unlock) */}
      
          {/* PHASE 2 */}
                 {/* PHASE 2: DAYS 11–17 – HIDDEN UNTIL UNLOCK */}
      {isUnlocked && (
        <section id="phase-2" className="bg-gray-50 py-24 border-b border-white/5">
          <div className="max-w-screen-2xl mx-auto px-8 lg:px-16">
            <div className="text-center mb-16">
              <span className="text-[#c5a059] text-xs tracking-widest uppercase font-semibold">Phase 2</span>
              <h2 className="serif text-5xl md:text-6xl font-light tracking-tight mt-4 mb-6">
                Days 11–17: Reset → Mid-Cycle Grind
              </h2>
              <p className="text-gray-900/70 max-w-3xl mx-auto text-lg leading-relaxed">
                Flush the system after the Sabbath feast, then rebuild with clean, high-output meals. Introduce braai-style proteins mid-week while keeping energy steady and inflammation low.
              </p>
            </div>

            {/* Day 11 – System Flush (highlighted) */}
            <div id="day-11" className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">11</div>
              <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 11: System Flush</h3>

              <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
                <div className="border-l-4 border-blue-400/40 pl-6">
                  <p className="text-blue-400 text-xs uppercase tracking-widest mb-4 font-semibold">Monday Discipline</p>
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Black Coffee + 1 Apple (Fast until 10am)</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Leftover 7-Colours Veg (Spinach/Butternut) + 2 Boiled Eggs</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Cabbage & Potato Soup (Cheap, warming, high fiber)</div>
                  </div>
                </div>
                <div className="border-l-4 border-[#c5a059]/40 pl-6 bg-white/[0.03] p-6 rounded-r-xl">
                  <p className="text-[#c5a059] text-xs uppercase tracking-widest mb-4 font-semibold">Post-Feast Protocol</p>
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Green Tea + Lemon. Fasting until 12pm (OMAD optional)</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Smoked Trout/Chicken, Baby Spinach, Cucumber, Walnuts</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Grilled Lean Beef Mince Patties (No bun), Steamed Broccoli</div>
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-[#c5a059] text-xs uppercase font-bold italic block">Palate Reset</span>
                      <p className="text-gray-900/60 text-xs">San Pellegrino with Mint & Lime</p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-emerald-500/40 pl-6">
                  <p className="text-emerald-500 text-xs uppercase tracking-widest mb-4 font-semibold">Heart Focus</p>
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Warm Lemon Water + Handful of Raw Almonds</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Lentil Salad, Grated Beetroot, Fresh Parsley, Olive Oil</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Poached Chicken, Clear Vegetable Broth, Celery & Carrots</div>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-gray-200 text-gray-900/60 text-sm italic">
                Prep Tip: Make a big pot of vegetable broth and lentil soup on Day 11 — use for multiple dinners this week.
              </div>
            </div>

            {/* Day 12 */}
            <div id="day-12" className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">12</div>
              <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 12: Vitamin Integration</h3>

              <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
                <div className="border-l-4 border-blue-400/40 pl-6">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch Focus</span>Sardines on Wholewheat Toast + Sliced Onion & Chili</div>
                  </div>
                </div>
                <div className="border-l-4 border-[#c5a059]/40 pl-6 bg-white/[0.03] p-6 rounded-r-xl">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch Focus</span>Herb-Roasted Turkey or Chicken, Avocado, Pumpkin Seeds</div>
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-[#c5a059] text-xs uppercase font-bold italic block">Pairing</span>
                      <p className="text-gray-900/60 text-xs">Rooibos Tea (Antioxidant boost)</p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-emerald-500/40 pl-6">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch Focus</span>Roasted Cauliflower Steak, Tahini Dressing, Chickpeas</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 13 */}
            <div id="day-13" className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">13</div>
              <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 13: Mid-Cycle Consistency</h3>

              <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
                <div className="border-l-4 border-blue-400/40 pl-6">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Maltabella or soft porridge with cinnamon & grated apple</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Soya mince with mixed veg & small brown rice portion</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Boiled eggs (3), steamed spinach, grated carrot salad</div>
                  </div>
                </div>
                <div className="border-l-4 border-[#c5a059]/40 pl-6 bg-white/[0.03] p-6 rounded-r-xl">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Greek yogurt, chia seeds, handful almonds</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Grilled chicken breast, large mixed greens, lemon-olive oil</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Lean beef mince patties (no bun), sautéed broccoli & zucchini</div>
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-[#c5a059] text-xs uppercase font-bold italic block">Palate Reset</span>
                      <p className="text-gray-900/60 text-xs">Rooibos with fresh mint – calming & antioxidant</p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-emerald-500/40 pl-6">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Smoothie: spinach, berries, ginger, flaxseeds</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Lentil & veg stew, grated beetroot side</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Steamed white fish, garlic green beans, small portion pumpkin</div>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-gray-200 text-gray-900/60 text-sm italic">
                Prep Tip: Batch-cook lentil soup and mince patties today — they reheat easily for Days 14–15 lunches and dinners.
              </div>
            </div>

            {/* Day 14 */}
            <div id="day-14" className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">14</div>
              <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 14: Iron & Fibre Loading</h3>

              <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
                <div className="border-l-4 border-blue-400/40 pl-6">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>2 Weet-Bix, low-fat milk, sliced apple</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Chicken livers (mild), stiff pap, sautéed onions</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Beef mince with peas & carrots over brown rice (moderate portion)</div>
                  </div>
                </div>
                <div className="border-l-4 border-[#c5a059]/40 pl-6 bg-white/[0.03] p-6 rounded-r-xl">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>3-egg omelette with peppers & spinach</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Grilled sirloin strips (lean), large beetroot & rocket salad</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Slow-cooked beef stew (fat skimmed), steamed cabbage, small pumpkin</div>
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-[#c5a059] text-xs uppercase font-bold italic block">Executive Note</span>
                      <p className="text-gray-900/60 text-xs">Single espresso after lunch – metabolic rate support without calories</p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-emerald-500/40 pl-6">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Greek yogurt with walnuts & molasses drizzle</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Lentil & roasted vegetable salad, tahini-lemon dressing</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Grilled ostrich steak, roasted peppers, fine green beans</div>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-gray-200 text-gray-900/60 text-sm italic">
                Prep Tip: Cook extra beef stew or chicken livers — perfect for reheating or turning into wraps/salads tomorrow.
              </div>
            </div>

            {/* Day 15 */}
            <div id="day-15" className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">15</div>
              <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 15: Fibre & Recovery Focus</h3>

              <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
                <div className="border-l-4 border-blue-400/40 pl-6">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Oats with cinnamon & grated apple</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Leftover beef stew with extra steamed cabbage</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Vegetable soup (cabbage, carrot, onion base), boiled egg</div>
                  </div>
                </div>
                <div className="border-l-4 border-[#c5a059]/40 pl-6 bg-white/[0.03] p-6 rounded-r-xl">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Green smoothie: spinach, celery, apple, ginger, protein</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Grilled chicken salad, avocado, cucumber, balsamic</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Baked hake, large mixed greens, roasted sweet potato (small)</div>
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-[#c5a059] text-xs uppercase font-bold italic block">Palate Reset</span>
                      <p className="text-gray-900/60 text-xs">Herbal tea (chamomile or peppermint) – gut soothing</p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-emerald-500/40 pl-6">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Poached egg on seeded rye, sliced tomato</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Lentil & veg stew, grated beetroot side</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Steamed broccoli & cauliflower, grilled chicken thigh (skinless)</div>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-gray-200 text-gray-900/60 text-sm italic">
                Prep Tip: Steam a big batch of broccoli/cauliflower today — keeps for 3–4 days and adds instant fibre to any meal.
              </div>
            </div>

            {/* Day 16 */}
            <div id="day-16" className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">16</div>
              <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 16: Output Optimisation</h3>

              <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
                <div className="border-l-4 border-blue-400/40 pl-6">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Maltabella porridge with cinnamon & banana</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Beef mince curry with potatoes & carrots over rice</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Grilled chicken thighs (skinless), creamed spinach (light), butternut cubes</div>
                  </div>
                </div>
                <div className="border-l-4 border-[#c5a059]/40 pl-6 bg-white/[0.03] p-6 rounded-r-xl">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Smoked salmon or ham, scrambled eggs (3), no toast</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Grilled lamb chops (trimmed), minted peas, zucchini ribbons</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Pan-seared sea bass or kingklip, lemon-garlic butter, asparagus</div>
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-[#c5a059] text-xs uppercase font-bold italic block">Palate Reset</span>
                      <p className="text-gray-900/60 text-xs">Dry martini (extra olives) – clean, sharp, zero-sugar (optional)</p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-emerald-500/40 pl-6">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Greek yogurt with walnuts & molasses drizzle</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Roast chicken breast, avocado, large Greek salad</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Brown lentil soup with baby marrow & turmeric</div>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-gray-200 text-gray-900/60 text-sm italic">
                Prep Tip: Use today to evaluate how the last two weeks felt. Adjust spice levels or portion sizes slightly heading into the lean-out phase starting Day 20.
              </div>
            </div>

            {/* Day 17 */}
            <div id="day-17" className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">17</div>
              <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 17: Mid-Week Grind – Braai Integration</h3>

              <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
                <div className="border-l-4 border-blue-400/40 pl-6">
                  <p className="text-blue-400 text-xs uppercase tracking-widest mb-4 font-semibold">Student Logic</p>
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Main Focus</span>Braai'd chicken wings (no basting) + vinegar-based coleslaw</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Side</span>Small portion pap or brown rice if energy feels low</div>
                  </div>
                </div>
                <div className="border-l-4 border-[#c5a059]/40 pl-6 bg-white/[0.03] p-6 rounded-r-xl">
                  <p className="text-[#c5a059] text-xs uppercase tracking-widest mb-4 font-semibold">Corporate Strategy</p>
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Main</span>Grilled rump steak (300 g), chimichurri sauce, sautéed spinach</div>
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-[#c5a059] text-xs uppercase font-bold italic block">Palate Reset</span>
                      <p className="text-gray-900/60 text-xs">1× neat Scotch (single malt) – optional, sharp finish</p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-emerald-500/40 pl-6">
                  <p className="text-emerald-500 text-xs uppercase tracking-widest mb-4 font-semibold">Veteran Longevity</p>
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Main</span>Grilled ostrich steak (lean iron source), roasted peppers, fine beans</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Side</span>Large mixed greens with olive oil & lemon</div>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-gray-200 text-gray-900/60 text-sm italic">
                Prep Tip: Fire up the braai (or grill pan) early evening. Cook extra steak/chicken — slice for salads or wraps on Days 18–19.
              </div>
            </div>

            {/* Week 2 Prep Recap */}
            <div className="bg-gradient-to-br from-white/5 to-transparent border border-gray-200 p-10 md:p-12 rounded-xl text-center mt-12">
              <h3 className="serif text-3xl font-light mb-6">Week 2 Prep Recap</h3>
              <p className="text-gray-900/70 max-w-3xl mx-auto mb-8">
                Focus: Reset + rebuild. Stock up on greens (spinach, cabbage, broccoli), lean proteins (chicken, mince, fish), and broth bases. Batch soup and grilled items Sunday evening for quick mid-week assembly.
              </p>
              <a
                href="#phase-3"
                className="inline-block bg-[#c5a059]/80 text-[#001122] px-8 py-4 text-sm tracking-widest font-black uppercase hover:bg-white transition-colors"
              >
                Continue to Phase 3 →
              </a>
            </div>
          </div>
        </section>
      )}

          {/* PHASE 3 */}
               {/* PHASE 3: DAYS 18–25 – HIDDEN UNTIL UNLOCK */}
      {isUnlocked && (
        <section id="phase-3" className="bg-gray-50 py-24 border-b border-white/5">
          <div className="max-w-screen-2xl mx-auto px-8 lg:px-16">
            <div className="text-center mb-16">
              <span className="text-[#c5a059] text-xs tracking-widest uppercase font-semibold">Phase 3</span>
              <h2 className="serif text-5xl md:text-6xl font-light tracking-tight mt-4 mb-6">
                Days 18–25: Optimization & Reward
              </h2>
              <p className="text-gray-900/70 max-w-3xl mx-auto text-lg leading-relaxed">
                Lean out to prime the system, then deliver the richer heritage payoff on Day 25: full Oxtail Sunday Comfort.
                This is the cycle's emotional and flavor peak — earned through disciplined days.
              </p>
            </div>

            {/* Day 18 */}
            <div id="day-18" className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">18</div>
              <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 18: Sustained Grind – Leftover Utilisation</h3>

              <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
                <div className="border-l-4 border-blue-400/40 pl-6">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Maltabella or soft porridge with cinnamon & grated apple</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Leftover grilled chicken salad – mixed greens, cucumber, light vinaigrette</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Beef mince stir-fry with peppers & onions over small rice portion</div>
                  </div>
                </div>
                <div className="border-l-4 border-[#c5a059]/40 pl-6 bg-white/[0.03] p-6 rounded-r-xl">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Greek yogurt (full fat), chia seeds, handful walnuts</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Sliced leftover rump steak, rocket, avocado, lemon-olive oil</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Pan-seared hake or kingklip, garlic broccoli, cauliflower rice</div>
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-[#c5a059] text-xs uppercase font-bold italic block">Palate Reset</span>
                      <p className="text-gray-900/60 text-xs">Green tea with lemon – gentle liver support</p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-emerald-500/40 pl-6">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Warm paw-paw with lime & pumpkin seeds</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Leftover ostrich slices, large beetroot & onion salad, olive oil</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Vegetable & lentil curry (mild), steamed greens, small sweet potato</div>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-gray-200 text-gray-900/60 text-sm italic">
                Prep Tip: Slice and portion all leftover braai proteins immediately after cooling — store in glass containers for fast grab-and-go lunches.
              </div>
            </div>

            {/* Day 19 */}
            <div id="day-19" className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">19</div>
              <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 19: Pre-Weekend Stabilisation</h3>

              <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
                <div className="border-l-4 border-blue-400/40 pl-6">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>2 fried eggs, 1 slice brown toast, sliced tomato</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Leftover beef mince with mixed veg & small rice</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Grilled chicken thighs (skinless), creamed spinach (light), butternut cubes</div>
                  </div>
                </div>
                <div className="border-l-4 border-[#c5a059]/40 pl-6 bg-white/[0.03] p-6 rounded-r-xl">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>3-egg white scramble with spinach & mushrooms</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Grilled leftover steak strips, large Greek salad (no feta if watching dairy)</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Baked salmon or trout, wilted kale, asparagus</div>
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-[#c5a059] text-xs uppercase font-bold italic block">Palate Reset</span>
                      <p className="text-gray-900/60 text-xs">Rooibos with fresh ginger – anti-inflammatory closer</p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-emerald-500/40 pl-6">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Oat bran porridge with cinnamon & berries</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Chickpea & roasted veg salad, tahini-lemon dressing</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Steamed white fish, garlic green beans, small portion pumpkin</div>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-gray-200 text-gray-900/60 text-sm italic">
                Prep Tip: Use today to assess energy levels & adjust portions slightly for Days 20–25. Clear space in fridge for upcoming lean-out phase.
              </div>
            </div>

            {/* Day 20 – Lean-Out Highlight */}
            <div id="day-20" className="menu-card bg-gradient-to-br from-white/5 to-transparent border border-[#c5a059]/30 p-12 md:p-16 mb-16 relative overflow-hidden shadow-[0_0_30px_rgba(197,160,89,0.1)]">
              <div className="absolute top-0 right-6 p-4 opacity-30 serif text-7xl md:text-8xl italic text-[#c5a059]/20">20</div>
              <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 20: Pre-Weekend Lean-Out</h3>

              <div className="text-center mb-8 border-b border-gray-200 pb-6">
                <p className="text-gray-900/40 text-xs uppercase tracking-widest mb-2">Strategic Goal</p>
                <p className="text-gray-900/80 italic text-lg">
                  Depleting glycogen stores to make Day 25's heritage feast even more rewarding.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 text-center text-sm text-gray-900/80">
                <div className="bg-white p-8 rounded-xl border border-gray-200">
                  <p className="text-blue-400 font-medium mb-3">Student</p>
                  <p>Vegetable stir-fry with Tofu or Lean Chicken. No rice or starch.</p>
                </div>
                <div className="bg-white p-8 rounded-xl border border-[#c5a059]/30 shadow-[0_0_20px_rgba(197,160,89,0.1)]">
                  <p className="text-[#c5a059] font-medium mb-3">Corporate</p>
                  <p>Sashimi-style or Steamed Fish + Bok Choy / Asparagus. Zero alcohol / zero carbs for full effect.</p>
                </div>
                <div className="bg-white p-8 rounded-xl border border-gray-200">
                  <p className="text-emerald-500 font-medium mb-3">Veteran</p>
                  <p>Small bowl steamed lentils + sliced cucumber & celery. Focus on hydration & gentle movement.</p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-900/60 text-sm italic">
                Prep Tip: Keep portions small and hydration high. Light walks help accelerate the lean-out.
              </div>
            </div>

            {/* Day 21 – Example lean day */}
            <div id="day-21" className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">21</div>
              <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 21: Lean Operations</h3>

              <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
                <div className="border-l-4 border-blue-400/40 pl-6">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>2 Weet-Bix with Cold Milk & 1 tsp Honey</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Chicken & Mayo Sandwich (Wholewheat) with Fresh Cucumber</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Soya Mince "Bolognese" with Carrots & Peas over Spaghetti</div>
                  </div>
                </div>
                <div className="border-l-4 border-[#c5a059]/40 pl-6 bg-white/[0.03] p-6 rounded-r-xl">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Scrambled Tofu or 3 Egg Whites with Turmeric & Garlic</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Slow-Cooked Lamb Stew (Fat skimmed), Steamed Cabbage, Pumpkin</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Grilled Prawns or Hake, Lemon Butter, Side of Sautéed Spinach</div>
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-[#c5a059] text-xs uppercase font-bold italic block">Palate Reset</span>
                      <p className="text-gray-900/60 text-xs">Dry White Wine (Chenin Blanc) – optional, high acidity</p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-emerald-500/40 pl-6">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Poached Egg on 1 slice of Seeded Rye Toast</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Chickpea & Spinach Curry (Mild), Brown Rice, Grated Apple</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Roasted Butternut Soup with Toasted Sunflower Seeds</div>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-gray-200 text-gray-900/60 text-sm italic">
                Prep Tip: Use leftover lamb stew from lunch as a base for soup or patties later in the week.
              </div>
            </div>

            {/* Day 22 */}
            <div id="day-22" className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">22</div>
              <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 22: Iron & Fibre Loading (Pre-Lean)</h3>

              <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
                <div className="border-l-4 border-blue-400/40 pl-6">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Oats with peanut butter & sliced banana</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Chicken livers (mild), stiff pap, sautéed onions & peppers</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Beef mince with peas & carrots over brown rice (moderate portion)</div>
                  </div>
                </div>
                <div className="border-l-4 border-[#c5a059]/40 pl-6 bg-white/[0.03] p-6 rounded-r-xl">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>3-egg omelette with peppers & spinach</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Grilled sirloin strips (lean), large beetroot & rocket salad</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Slow-cooked lamb stew (fat skimmed), steamed cabbage, small pumpkin</div>
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-[#c5a059] text-xs uppercase font-bold italic block">Executive Note</span>
                      <p className="text-gray-900/60 text-xs">Single espresso after lunch – metabolic rate support without calories</p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-emerald-500/40 pl-6">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Greek yogurt with walnuts & a drizzle of molasses</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Lentil & roasted vegetable salad, tahini-lemon dressing</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Grilled ostrich steak, roasted peppers, fine green beans</div>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-gray-200 text-gray-900/60 text-sm italic">
                Prep Tip: Cook extra lamb stew or mince today — portion for tomorrow’s lunches and freeze one serving for post-Day 25 reset.
              </div>
            </div>

            {/* Day 23 */}
            <div id="day-23" className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">23</div>
              <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 23: Protein Emphasis</h3>

              <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
                <div className="border-l-4 border-blue-400/40 pl-6">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>2 boiled eggs, ½ avocado, sliced tomato</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Grilled chicken thighs (skinless), large garden salad, vinegar dressing</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Soya mince chilli (bean-heavy), steamed cabbage, no rice</div>
                  </div>
                </div>
                <div className="border-l-4 border-[#c5a059]/40 pl-6 bg-white/[0.03] p-6 rounded-r-xl">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Scrambled eggs (3 whole), spinach, mushrooms</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Grilled rump steak strips, large beetroot & rocket salad</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Baked salmon, wilted kale, asparagus (no starch)</div>
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-[#c5a059] text-xs uppercase font-bold italic block">Palate Reset</span>
                      <p className="text-gray-900/60 text-xs">Dry white wine (Chenin Blanc) – optional, high acidity to cut protein richness</p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-emerald-500/40 pl-6">
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Poached egg on 1 slice seeded rye (small)</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Chickpea & spinach curry (mild), large steamed veg side</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Steamed kingklip, garlic broccoli, small portion cauliflower</div>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-gray-200 text-gray-900/60 text-sm italic">
                Prep Tip: Grill or bake extra chicken/steak today — slice thinly for tomorrow’s zero-carb salads and quick assembly.
              </div>
            </div>

            {/* Day 24 – Strategic Cleanse (full no-starch) */}
            <div id="day-24" className="menu-card bg-gradient-to-br from-white/5 to-transparent border border-[#c5a059]/30 p-12 md:p-16 mb-16 relative overflow-hidden shadow-[0_0_30px_rgba(197,160,89,0.1)]">
              <div className="absolute top-0 right-6 p-4 opacity-30 serif text-7xl md:text-8xl italic text-[#c5a059]/20">24</div>
              <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 24: The Strategic Cleanse</h3>

              <div className="text-center mb-8 border-b border-gray-200 pb-6">
                <p className="text-gray-900/40 text-xs uppercase tracking-widest mb-2">Full no-starch day</p>
                <p className="text-gray-900/80 italic text-lg">
                  Glycogen depletion accelerates. Light proteins + high-volume greens to enter Day 25 primed for maximum heritage enjoyment.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 text-center text-sm text-gray-900/80">
                <div className="bg-white p-8 rounded-xl border border-gray-200">
                  <p className="text-blue-400 font-medium mb-3">Student</p>
                  <p>Grilled chicken skewers + plain large green salad<br />No dressing – lemon squeeze only</p>
                </div>
                <div className="bg-white p-8 rounded-xl border border-[#c5a059]/30 shadow-[0_0_20px_rgba(197,160,89,0.1)]">
                  <p className="text-[#c5a059] font-medium mb-3">Corporate</p>
                  <p>Water-poached or steamed fish + steamed asparagus & broccoli<br />Zero alcohol / zero carbs for full effect</p>
                </div>
                <div className="bg-white p-8 rounded-xl border border-gray-200">
                  <p className="text-emerald-500 font-medium mb-3">Veteran</p>
                  <p>Small bowl steamed lentils + sliced cucumber & celery<br />Focus on hydration & gentle movement</p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-900/60 text-sm italic">
                Prep Tip: Keep it ultra-simple today. Drink 3–4 L water / herbal tea. Light walk or stretch in the evening. Tomorrow is the reward — you’ve earned it.
              </div>
            </div>

            {/* Day 25 – Oxtail Reward Highlight */}
            <div id="day-25" className="menu-card bg-gradient-to-br from-[#c5a059]/15 to-transparent border border-[#c5a059]/50 p-12 md:p-16 mb-16 relative overflow-hidden shadow-[0_0_60px_rgba(197,160,89,0.2)]">
              <div className="absolute top-0 right-6 p-4 opacity-40 serif text-8xl md:text-9xl italic text-[#c5a059]/30">25</div>
              <div className="text-center mb-12">
                <span className="text-[#c5a059] text-sm md:text-base tracking-[0.4em] uppercase font-black block mb-4">Heritage Reward</span>
                <h3 className="serif text-4xl md:text-6xl font-light mb-8">Day 25: The Rich Reward</h3>
                <p className="text-gray-900/70 italic text-xl max-w-3xl mx-auto">
                  Oxtail Sunday Comfort — deeper, richer, fall-off-the-bone soul.<br />
                  The payoff for 24 days of discipline.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-center text-gray-900/80 text-base">
                <div className="bg-white p-8 rounded-xl border border-gray-200">
                  <p className="font-medium mb-2">Mains</p>
                  <p>• Slow-braised Oxtail Stew<br />• Yellow Rice with Raisins<br />• Samp & Beans</p>
                </div>
                <div className="bg-white p-8 rounded-xl border border-gray-200">
                  <p className="font-medium mb-2">Sides</p>
                  <p>• Creamed Spinach & Feta<br />• Beetroot & Onion Salad<br />• Sweet Potato Mash</p>
                </div>
                <div className="bg-white p-8 rounded-xl border border-gray-200">
                  <p className="font-medium mb-2">Accents</p>
                  <p>• Fresh Garden Salad<br />• Chakalaka (Extra Spicy)<br />• Malva Pudding Shot</p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-900/60 text-sm italic">
                Prep Tip: Start oxtail braise Friday night (low & slow overnight). Full spread Saturday for Sunday enjoyment + Monday leftovers.
              </div>
            </div>

            {/* Week 3 Prep Recap */}
            <div className="bg-gradient-to-br from-white/5 to-transparent border border-gray-200 p-10 md:p-12 rounded-xl text-center mt-12">
              <h3 className="serif text-3xl font-light mb-6">Week 3 Prep Recap</h3>
              <p className="text-gray-900/70 max-w-3xl mx-auto mb-8">
                Stock: Oxtail (3–4 kg), yellow rice, extra samp/beans, spinach/feta, sweet potato.<br />
                Batch braise early, freeze portions if needed. This week builds anticipation for the Day 25 feast.
              </p>
              <a
                href="#phase-4"
                className="inline-block bg-[#c5a059]/80 text-[#001122] px-8 py-4 text-sm tracking-widest font-black uppercase hover:bg-white transition-colors"
              >
                Move to Final Phase →
              </a>
            </div>
          </div>
        </section>
      )}
    

          {/* PHASE 4 */}
                {/* PHASE 4: DAYS 26–30 – HIDDEN UNTIL UNLOCK */}
      {isUnlocked && (
        <section id="phase-4" className="bg-gray-50 py-24 border-b border-white/5">
          <div className="max-w-screen-2xl mx-auto px-8 lg:px-16">
            <div className="text-center mb-16">
              <span className="text-[#c5a059] text-xs tracking-widest uppercase font-semibold">Final Phase</span>
              <h2 className="serif text-5xl md:text-6xl font-light tracking-tight mt-4 mb-6">
                Days 26–30: Sustain & Scale
              </h2>
              <p className="text-gray-900/70 max-w-3xl mx-auto text-lg leading-relaxed">
                Recover from the reward feast, lock in habits, and prepare to scale this lifestyle to your team or family.
                Discipline becomes identity. Heritage becomes fuel.
              </p>
            </div>

            {/* Day 26 – Post-Reward Reset */}
            <div id="day-26" className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">26</div>
              <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Day 26: Post-Oxtail Reset</h3>

              <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
                <div className="border-l-4 border-blue-400/40 pl-6">
                  <p className="text-blue-400 text-xs uppercase tracking-widest mb-4 font-semibold">Fridge Clean Protocol</p>
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Black Coffee + 1 slice Brown Toast (Dry)</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Leftover Sunday Veg (Spinach/Butternut) mashed with 1 Boiled Egg</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Boiled Cabbage with Onions & Potatoes (The "Survival" Bowl)</div>
                  </div>
                </div>
                <div className="border-l-4 border-[#c5a059]/40 pl-6 bg-white/[0.03] p-6 rounded-r-xl">
                  <p className="text-[#c5a059] text-xs uppercase tracking-widest mb-4 font-semibold">Metabolic Balance</p>
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Fasting until 12:00 (Water & Rooibos only)</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Grilled Chicken, Sliced Cucumber, Avocado, Apple Cider Vinegar dressing</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Grilled Snoek or Hake, Sautéed Green Beans (No Starch)</div>
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-[#c5a059] text-xs uppercase font-bold italic block">Palate Reset</span>
                      <p className="text-gray-900/60 text-xs">Still Mineral Water with Magnesium drop</p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-emerald-500/40 pl-6">
                  <p className="text-emerald-500 text-xs uppercase tracking-widest mb-4 font-semibold">Gentle Flow</p>
                  <div className="space-y-5 text-sm text-gray-900/80">
                    <div><span className="text-gray-900/50 text-xs uppercase block">Breakfast</span>Hot Water with Ginger & Honey</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Lunch</span>Pureed Vegetable Soup (Butternut/Leek base)</div>
                    <div><span className="text-gray-900/50 text-xs uppercase block">Dinner</span>Steamed Broccoli, Cauliflower, and a small portion of Steamed Fish</div>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-gray-200 text-gray-900/60 text-sm italic">
                Prep Tip: Clear the fridge of heavy leftovers. Focus on light soups and steamed veg to reset digestion.
              </div>
            </div>

            {/* Days 27–29: Condensed Sustain */}
            <div className="menu-card bg-white border border-gray-200 p-10 md:p-12 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-6 p-4 opacity-20 serif text-7xl md:text-8xl italic text-gray-900/10">27–29</div>
              <h3 className="text-[#c5a059] text-xs md:text-sm tracking-widest uppercase font-bold mb-6">Days 27–29: Sustainable Execution</h3>

              <p className="text-gray-900/60 text-sm italic mb-8 text-center">
                Lock in the rhythm. Small, frequent, nutrient-dense meals. Prepare for month-end social / team scaling.
              </p>

              <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-900/70">
                <div className="border-l-4 border-blue-400/30 pl-6">
                  <p className="text-blue-400 text-xs uppercase mb-2 font-semibold">Student Logic</p>
                  <p>Oats for Breakfast, Egg fried rice for dinner. Cheap, high-energy staples.</p>
                </div>
                <div className="border-l-4 border-[#c5a059]/30 pl-6 bg-white/[0.03] p-6 rounded-r-xl">
                  <p className="text-[#c5a059] text-xs uppercase mb-2 font-semibold">Corporate Strategy</p>
                  <p>High-protein, zero-carb dinners (Grilled Steak/Chicken + Greens). Prep for team rollout.</p>
                </div>
                <div className="border-l-4 border-emerald-500/30 pl-6">
                  <p className="text-emerald-500 text-xs uppercase mb-2 font-semibold">Veteran Longevity</p>
                  <p>Small, frequent meals. Berry-smoothies and nuts to maintain insulin stability.</p>
                </div>
              </div>
            </div>

            {/* Day 30 – Grand Finale */}
            <div id="day-30" className="menu-card bg-gradient-to-br from-[#c5a059]/20 to-transparent border-2 border-[#c5a059]/60 p-12 md:p-16 mb-16 relative overflow-hidden shadow-[0_0_80px_rgba(197,160,89,0.25)]">
              <div className="absolute top-0 right-6 p-4 opacity-40 serif text-9xl md:text-10xl italic text-[#c5a059]/30">30</div>
              <div className="text-center">
                <span className="text-[#c5a059] text-base md:text-lg tracking-[0.5em] uppercase font-black block mb-6">Project Complete</span>
                <h2 className="serif text-5xl md:text-7xl font-light mb-8">Day 30: The BuxRamsey Standard</h2>

                <p className="text-gray-900/80 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-12">
                  You have successfully integrated Boardroom Soul into daily operation.<br />
                  30 days of heritage respect, health precision, and hustle alignment.<br />
                  <span className="italic text-[#c5a059]">This is no longer a plan — it's who you are.</span>
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-12">
                  <a
                    href="#menus"
                    className="inline-block bg-[#c5a059] text-[#001122] px-10 py-5 text-sm tracking-widest font-black uppercase hover:bg-white transition-colors"
                  >
                    Bring This to Your Team
                  </a>
                  <a
                    href="mailto:consulting@buxino.co.za"
                    className="inline-block border-2 border-[#c5a059] text-[#c5a059] px-10 py-5 text-sm tracking-widest font-black uppercase hover:bg-[#c5a059]/10 transition-colors"
                  >
                    Book Executive Audit
                  </a>
                </div>

                <p className="text-gray-900/60 text-lg italic">
                  Ready to scale heritage catering to your boardroom, team lunches, or family events?<br />
                  Let's turn this 30-day personal standard into institutional soul.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA & WRAP-UP – LIGHT VERSION */}
<section className="bg-gray-50 py-24 text-center border-t border-gray-200">
  <div className="max-w-screen-2xl mx-auto px-8 lg:px-16">
    <h2 className="font-serif text-5xl md:text-6xl font-light tracking-tight mb-8 text-gray-900">
      Thank You for 30 Days of Soul & Strategy
    </h2>
    <p className="text-gray-700 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
      You've walked the path from township Sunday warmth to boardroom precision.<br />
      Now make it yours — and share it.
    </p>
    <div className="flex flex-wrap justify-center gap-6">
      <a
        href="/corporate_menus"
        className="bg-[#c5a059] text-gray-900 px-12 py-6 text-base tracking-widest font-black uppercase rounded-lg hover:bg-[#b08a3e] transition-colors shadow-sm hover:shadow-md"
      >
        Explore Signature Menus
      </a>
      <a
        href="/connect/contact-information"
        className="border-2 border-gray-300 text-gray-900 px-12 py-6 text-base tracking-widest font-black uppercase rounded-lg hover:border-[#c5a059] hover:bg-gray-100 transition-colors"
      >
        Get in Touch
      </a>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="bg-gray-50 py-20 border-t border-white/5 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <h3 className="serif text-3xl mb-4">BuxRamsey</h3>
            <p className="text-gray-900/40 text-sm max-w-xs">
              A division of Buxino Consulting. Elevating South African heritage through institutional execution and culinary precision.
            </p>
          </div>
          <div>
            <h4 className="text-[#c5a059] text-xs tracking-widest uppercase mb-6 font-bold">Navigation</h4>
            <ul className="text-sm space-y-3 text-gray-900/60">
              <li><a href="#meal-plan-hero" className="hover:text-gray-900">30-Day Overview</a></li>
              <li><a href="#menus" className="hover:text-gray-900">Heritage Menus</a></li>
              <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#c5a059] text-xs tracking-widest uppercase mb-6 font-bold">Contact</h4>
            <p className="text-sm text-gray-900/60">Pretoria, South Africa</p>
            <p className="text-sm text-gray-900/60 mt-2 italic underline">consulting@buxino.co.za</p>
          </div>
        </div>
        <div className="text-center mt-20 pt-10 border-t border-white/5">
          <p className="text-xs text-gray-900/20 tracking-widest uppercase">© 2026 Buxino Consulting (Pty) Ltd. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}

export default MealPlanPage;