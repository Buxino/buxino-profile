"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Award, ArrowRight, Globe, TrendingUp, Users, Zap, ChevronDown, BarChart2, Star } from "lucide-react";

/* ─────────────────────────────────────────────
   DATA (unchanged)
───────────────────────────────────────────── */
const collection = [
  {
    id: 'reserve-red',
    name: 'The Reserve Red',
    vintage: '2023 Vintage',
    price: 'R 350',
    image: '/reserve_red.jpg',
    tasting: 'Bold · Structured · Meticulous Oak Integration',
    notes: 'Deep ruby with crimson hues. The nose opens with dark plum, cassis, and a whisper of smoked cedar. On the palate, concentrated black fruit is balanced by firm, polished tannins and a lingering finish that rewards patience.',
    pairing: 'Braised short rib · Aged cheddar · Lamb rack',
    profile: ['Blackcurrant', 'Dark Plum', 'Cedar', 'Tobacco', 'Vanilla'],
    stats: { body: 90, tannin: 82, acidity: 68, finish: 88 },
  },
  {
    id: 'signature-white',
    name: 'Signature White',
    vintage: '2024 Vintage',
    price: 'R 280',
    image: '/signature_white.jpg',
    tasting: 'Vibrant · Crisp · Contemporary Elegance',
    notes: 'Pale gold with green highlights. Expressive aromatics of white peach, green apple, and lemon zest with a subtle floral lift. The palate is fresh and precise, with a mineral backbone that extends through a clean, refreshing finish.',
    pairing: 'Grilled kingklip · Burrata · Light summer fare',
    profile: ['White Peach', 'Green Apple', 'Citrus Zest', 'Mineral', 'Jasmine'],
    stats: { body: 58, tannin: 20, acidity: 84, finish: 76 },
  },
];

const giftingTiers = [
  {
    tier: 'Bronze',
    label: 'The Executive Pulse',
    price: 'From R 8,500',
    frequency: 'Per quarter',
    description: 'Calibrated for professional continuity and project milestones. Subtle laser-etched branding. Ideal for consistent client retention and team recognition programmes.',
    includes: ['2 × Signature White', '2 × Reserve Red', 'Branded delivery packaging', 'Personalised note card', 'Digital proof of delivery'],
    cta: 'Inquire Bronze',
    accent: '#c5a059',
  },
  {
    tier: 'Silver',
    label: 'The Strategic Alliance',
    price: 'From R 22,000',
    frequency: 'Per engagement',
    description: 'Raised metallic finishes and hand-applied monograms for high-stakes account management and senior-level relationship building.',
    includes: ['6 × Reserve Red', '6 × Signature White', 'Branded wooden presentation box', 'Custom monogram engraving', 'Handwritten executive note', 'White-glove delivery'],
    cta: 'Secure Silver',
    accent: '#c5a059',
    featured: true,
  },
  {
    tier: 'Gold',
    label: 'The Institutional Signature',
    price: 'From R 55,000',
    frequency: 'Annual retainer',
    description: 'Deep-engraved legacy pieces with 24k gold leaf inscriptions. Reserved for board-level diplomacy, landmark deal closures, and annual gifting calendar management.',
    includes: ['Curated mixed case (12 bottles)', 'Bespoke hand-crafted mahogany box', '24k gold leaf inscription', 'Annual gifting calendar management', 'Dedicated account manager', 'Quarterly replenishment contract'],
    cta: 'Request Gold Allocation',
    accent: '#c5a059',
  },
];

const channels = [
  {
    pct: '40%',
    name: 'Corporate Gifting',
    kpi: 'AOV & Repeat Order Rate',
    desc: 'Professional B2B sales motion. High-value, long-term contracts exceeding R50,000 per year. The Silent Sales Pitch strategy converts sampling into retainer gifting relationships.',
    icon: <Award size={20} />,
  },
  {
    pct: '35%',
    name: 'Direct-to-Consumer',
    kpi: 'Conversion Rate & CLV',
    desc: 'High-margin e-commerce through buxino.co.za/wines. Ascent Rewards loyalty programme. Founder story and tasting notes drive brand connection and repeat purchases.',
    icon: <Users size={20} />,
  },
  {
    pct: '25%',
    name: 'Retail & HoReCa',
    kpi: 'SKU Turnover Rate',
    desc: 'Selectivity over ubiquity. Premium outlets only — Spar Tops, independent fine wine stores, and 4–5 star restaurant F&B lists. High-traffic placement, front-of-list.',
    icon: <Globe size={20} />,
  },
];

const financials = [
  { year: 'Year 1', label: 'Establishment', cases: '5,000',  margin: '45%', focus: 'Distribution, D2C Loyalty', width: '30%' },
  { year: 'Year 2', label: 'Growth & Scaling', cases: '12,000', margin: '50%', focus: 'Scale corporate gifting, positive cash flow', width: '60%' },
  { year: 'Year 3', label: 'Maturation & Export', cases: '20,000', margin: '52%', focus: 'Domestic profitability, Europe/NA distribution', width: '100%' },
];

const competitors = [
  { type: 'Mass-Market Premium', brand: 'Boschendal', range: 'R180–R250', driver: 'Volume, History, Accessibility', buxino: 'Superior contemporary design aesthetic and higher cultural relevance for the young professional.' },
  { type: 'Modern Challenger', brand: 'Black Elephant Vintners', range: 'R250–R320', driver: 'Niche appeal, unique winemaking', buxino: 'FMCG strategy and targeted corporate gifting to drive volume through high-margin channels.' },
  { type: 'Established Luxury', brand: 'Meerlust', range: 'R400–R800+', driver: 'Heritage, critic scores, ageability', buxino: 'Immediate cultural relevance and accessibility within the luxury tier — relevance, not legacy.' },
];

const pillars = [
  { icon: <Zap size={22} />, title: 'Intentional Design', desc: 'Minimalist, high-contrast deep charcoal and metallic gold. Superior shelf appeal engineered to command the room before the first sip.' },
  { icon: <Users size={22} />, title: 'Approachability', desc: 'Making high-end wine legible and aspirational for the new professional wine drinker — without the condescension of traditional wine marketing.' },
  { icon: <BarChart2 size={22} />, title: 'FMCG Science', desc: 'Flavor profiles developed for menu versatility. Consumer psychology and strategic positioning applied directly from the fastest-moving markets on earth.' },
  { icon: <Star size={22} />, title: 'Socio-Cultural Value', desc: 'Pioneered by a young Black South African entrepreneur. Positioning stockists as progressive. Relevance as a competitive weapon, not legacy.' },
];

/* ─────────────────────────────────────────────
   STAT BAR COMPONENT
───────────────────────────────────────────── */
interface StatBarProps {
  label: string;
  value: number;
}

function StatBar({ label, value }: StatBarProps) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-medium">
          {label}
        </span>
        <span className="text-[9px] text-[#c5a059] font-bold">
          {value}/100
        </span>
      </div>
      <div className="h-[2px] bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#c5a059] rounded-full transition-all duration-1000"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SECTION LABEL COMPONENT
───────────────────────────────────────────── */
interface SectionLabelProps {
  children: React.ReactNode;
}

function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-[10px] uppercase tracking-[0.55em] font-black mb-4 text-[#c5a059]">
      {children}
    </p>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE – LIGHT THEME
───────────────────────────────────────────── */
const BuxinoWinesPage = () => {
  const [activeWine, setActiveWine] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen w-full overflow-x-hidden">

      {/* HERO – Light Version with Better Image Visibility */}
      <section
        className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.75) 50%, rgba(248,249,250,0.95) 100%), url('/hero_vineyard.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className={`relative z-10 max-w-5xl pt-28 transition-all duration-1000 ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="h-[1px] w-16 bg-[#c5a059]/40" />
            <SectionLabel>The Art of the Ascent</SectionLabel>
            <div className="h-[1px] w-16 bg-[#c5a059]/40" />
          </div>

          <h1 className="text-7xl md:text-[120px] lg:text-[140px] font-black uppercase tracking-[-0.04em] leading-none mb-2 text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
            Buxino
          </h1>
          <div className="text-5xl md:text-7xl lg:text-8xl font-light italic text-[#c5a059] mb-12 tracking-wide" style={{ fontFamily: "'Georgia', serif" }}>
            Wines
          </div>

          <p className="text-gray-700 text-lg md:text-xl tracking-widest font-light max-w-2xl mx-auto leading-relaxed mb-16">
            A cultural statement. A strategic vision. A premium South African wine designed for the modern ascent.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-20">
            {['Pretoria · Cape Town', 'Est. 2025', 'R280 – R350', 'Level 1 B-BBEE Aligned'].map(tag => (
              <span key={tag} className="border border-[#c5a059]/40 text-[#c5a059] text-[9px] uppercase tracking-[0.3em] px-5 py-2 font-medium rounded">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/connect/contact-information#inquiry-form"
              className="bg-[#c5a059] text-black px-12 py-4 text-[10px] uppercase tracking-[0.3em] font-black hover:bg-gray-900 hover:text-white transition-all rounded">
              Acquire Allocation
            </Link>
            <Link href="#collection"
              className="border border-gray-300 text-gray-700 px-12 py-4 text-[10px] uppercase tracking-[0.3em] font-medium hover:border-[#c5a059] hover:text-[#c5a059] transition-all rounded">
              View Collection
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
          <ChevronDown size={16} className="text-[#c5a059]" />
        </div>
      </section>

      {/* Stat Strip – Light */}
      <div className="border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { val: 'R 3.5M', label: 'Year 1 Revenue Target' },
            { val: '5,000', label: 'Cases — Year 1 Est.' },
            { val: '3', label: 'Revenue Channels' },
            { val: 'R 350', label: 'Max Retail Price' },
          ].map((s, i) => (
            <div key={i} className={`px-10 py-8 text-center ${i < 3 ? 'border-r border-gray-200' : ''}`}>
              <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>{s.val}</div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy */}
      <section className="py-36 bg-white relative overflow-hidden border-b border-gray-200">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[18vw] font-black text-gray-100 leading-none select-none pointer-events-none uppercase tracking-tighter" style={{ fontFamily: "'Georgia', serif" }}>
          ASCENT
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-24 items-center">

            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-3 border border-gray-200 translate-x-3 translate-y-3 transition-transform duration-700 group-hover:translate-x-1 group-hover:translate-y-1" />
              <div className="relative overflow-hidden border border-gray-200">
                <img
                  src="/hero_vineyard.jpg"
                  alt="Bakang Matjila — Founder"
                  className="w-full h-[620px] object-cover brightness-90 transition-all duration-1000 group-hover:brightness-95 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-[9px] uppercase tracking-[0.35em] text-[#c5a059] mb-2">Founder</p>
                  <p className="text-xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>Bakang Matjila</p>
                  <p className="text-xs text-gray-500 mt-1 tracking-wider">FMCG Strategist · Winemaker · Entrepreneur</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <SectionLabel>The Founder's Evolution</SectionLabel>
                <h2 className="text-4xl md:text-5xl font-light leading-tight text-gray-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                  Where FMCG precision<br/>
                  <span className="italic text-[#c5a059]">meets terroir</span>
                </h2>
              </div>

              <p className="text-gray-600 text-base leading-[1.9] font-light">
                The story of Buxino Wines began not in the vineyard, but in the boardroom. Bakang Matjila spent years honing a disciplined, visionary approach in corporate strategy and business development — mastering market analysis, consumer psychology, and the science of brands that move at scale.
              </p>
              <p className="text-gray-600 text-base leading-[1.9] font-light">
                The pivot came from a recognition that the South African premium wine market had a significant gap: world-class Cape Winelands quality, paired with an authentic contemporary cultural narrative for a younger, globally-minded professional class. <span className="text-gray-900">Buxino Wines was the answer.</span>
              </p>

              <blockquote className="border-l-2 border-[#c5a059]/30 pl-6 my-8">
                <p className="text-lg italic text-gray-600 leading-relaxed font-light" style={{ fontFamily: "'Georgia', serif" }}>
                  "Wine should be as meticulously planned and executed as a successful business venture. Every bottle is a strategic document."
                </p>
                <cite className="text-[9px] text-[#c5a059] uppercase tracking-[0.3em] mt-3 block not-italic">— Bakang Matjila, Founder</cite>
              </blockquote>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: 'Founded', val: '2025' },
                  { label: 'Origin', val: 'Pretoria' },
                  { label: 'Sourcing', val: 'Cape Winelands' },
                  { label: 'Target', val: 'Ages 25–38' },
                ].map(d => (
                  <div key={d.label} className="border border-gray-200 p-4">
                    <div className="text-[8px] uppercase tracking-[0.35em] text-gray-500 mb-1">{d.label}</div>
                    <div className="text-sm font-medium text-gray-700">{d.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <SectionLabel>Brand Architecture</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
              The Four Pillars of <em className="text-[#c5a059] italic">Buxino Wines</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100">
            {pillars.map((p, i) => (
              <div key={i} className="bg-white p-8 group hover:bg-gray-50 transition-colors">
                <div className="text-[#c5a059] mb-6 group-hover:text-[#c5a059] transition-colors">{p.icon}</div>
                <h3 className="text-gray-900 text-lg font-light mb-4" style={{ fontFamily: "'Georgia', serif" }}>{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection – Fixed for Visibility */}
      <section id="collection" className="py-36 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <SectionLabel>The Portfolio</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                Signature <em className="text-[#c5a059] italic">Offerings</em>
              </h2>
            </div>
            <p className="text-gray-600 text-sm max-w-sm leading-relaxed font-light text-right">
              Each bottle is a considered statement. Sourced from the Cape Winelands, designed for the boardroom.
            </p>
          </div>

          <div className="flex gap-px mb-16 bg-gray-100 w-fit rounded">
            {collection.map((w, i) => (
              <button
                key={i}
                onClick={() => setActiveWine(i)}
                className={`px-8 py-3 text-[9px] uppercase tracking-[0.3em] font-black transition-all rounded
                  ${activeWine === i ? 'bg-[#c5a059] text-white' : 'bg-white text-gray-500 hover:text-gray-900'}`}
              >
                {w.name}
              </button>
            ))}
          </div>

          {collection.map((wine, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ${activeWine === i ? 'block' : 'hidden'}`}
            >
              <div className="grid lg:grid-cols-5 gap-0 border border-gray-200">
                {/* Image Side – Improved Visibility */}
                <div className="lg:col-span-2 relative overflow-hidden group" style={{ minHeight: '560px' }}>
                  <img
                    src={wine.image}
                    alt={wine.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-90"
                  />
                  
                  {/* Softer, darker gradient for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
                  
                  {/* Price & Vintage – Now white for strong visibility */}
                  <div className="absolute top-8 left-8">
                    <div className="text-[9px] uppercase tracking-[0.4em] text-white/90 mb-1">{wine.vintage}</div>
                    <div className="text-4xl font-light text-white drop-shadow-md" style={{ fontFamily: "'Georgia', serif" }}>
                      {wine.price}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-3 p-10 lg:p-14 bg-white flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>{wine.name}</h3>
                    <p className="text-[9px] uppercase tracking-[0.4em] text-[#c5a059] mb-8 font-medium">{wine.tasting}</p>

                    <p className="text-gray-600 text-sm leading-[1.9] mb-8 font-light">{wine.notes}</p>

                    <div className="mb-10">
                      <div className="text-[8px] uppercase tracking-[0.4em] text-gray-400 mb-3 font-medium">Tasting Profile</div>
                      <div className="flex flex-wrap gap-2">
                        {wine.profile.map(f => (
                          <span key={f} className="border border-gray-200 text-gray-600 text-[10px] px-3 py-1 font-light">{f}</span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 mb-10">
                      {Object.entries(wine.stats).map(([k, v]) => (
                        <StatBar key={k} label={k.charAt(0).toUpperCase() + k.slice(1)} value={v} />
                      ))}
                    </div>

                    <div className="border-l-2 border-[#c5a059]/30 pl-5 mb-10">
                      <div className="text-[8px] uppercase tracking-[0.4em] text-[#c5a059] mb-2 font-medium">Food Pairing</div>
                      <div className="text-sm text-gray-600 font-light">{wine.pairing}</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link href="/connect/contact-information#inquiry-form"
                      className="bg-[#c5a059] text-black px-10 py-4 text-[9px] uppercase tracking-[0.3em] font-black hover:bg-gray-900 hover:text-white transition-all inline-flex items-center gap-3">
                      Acquire Allocation <ArrowRight size={12} />
                    </Link>
                    <Link href="/connect/contact-information#inquiry-form"
                      className="border border-gray-300 text-gray-600 px-8 py-4 text-[9px] uppercase tracking-[0.3em] font-medium hover:border-[#c5a059] hover:text-[#c5a059] transition-all">
                      Request Sample
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Gifting – Fixed for Better Image Visibility */}
      <section className="py-36 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Image Side – Improved Visibility */}
            <div className="relative hidden lg:block sticky top-24">
              <div className="absolute -inset-3 border border-gray-200 translate-x-3 translate-y-3" />
              <div className="relative border border-gray-200 overflow-hidden group" style={{ height: '640px' }}>
                <img
                  src="/corporate_gifting.jpg"
                  alt="Buxino Corporate Gifting"
                  className="w-full h-full object-cover brightness-85 group-hover:brightness-95 group-hover:scale-[1.02] transition-all duration-1000"
                />
                
                {/* Softer, darker gradient for better image visibility */}
                <div className="absolute inset-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                
                <div className="absolute bottom-1 left-5 right-5">
                  <div className="border border-gray-30 p-8 bg-white/80 backdrop-blur-sm">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-[#c5a059] mb-2">The Silent Sales Pitch</p>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      Send a premium two-bottle gift to a decision-maker. No pricing, no hard ask — just the brand speaking for itself. Follow up in 7–10 days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Award className="text-[#c5a059] mb-8" size={40} />
              <SectionLabel>Corporate Solutions</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                Gifting that<br/>
                <em className="italic text-[#c5a059]">closes deals</em>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed font-light mb-12 max-w-md">
                Tiered corporate gifting solutions crafted to signal executive excellence, cement institutional partnerships, and manage your annual gifting calendar. We handle the logistics; you handle the handshake.
              </p>

              <div className="space-y-4">
                {giftingTiers.map((tier) => (
                  <div
                    key={tier.tier}
                    className={`border transition-all group ${tier.featured ? 'border-[#c5a059]/30 bg-[#c5a059]/[0.03]' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-5">
                        <div>
                          <span className="text-[9px] uppercase tracking-[0.4em] font-black mb-2 block" style={{ color: tier.accent }}>
                            {tier.tier} Tier
                          </span>
                          <h4 className="text-xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>{tier.label}</h4>
                        </div>
                        <div className="text-right">
                          <div className="text-lg text-gray-900 font-light" style={{ fontFamily: "'Georgia', serif" }}>{tier.price}</div>
                          <div className="text-[9px] text-gray-500 uppercase tracking-wider mt-1">{tier.frequency}</div>
                        </div>
                      </div>

                      <p className="text-gray-600 text-[13px] leading-relaxed mb-6 font-light">{tier.description}</p>

                      <div className="grid grid-cols-2 gap-2 mb-7">
                        {tier.includes.map((item, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <span className="text-[#c5a059] text-xs mt-0.5">—</span>
                            <span className="text-gray-600 text-[11px] leading-relaxed font-light">{item}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/connect/contact-information#inquiry-form"
                        className="inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] font-black group-hover:gap-5 transition-all"
                        style={{ color: tier.accent }}
                      >
                        {tier.cta} <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-36 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <SectionLabel>3-Channel Strategy</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
              Revenue <em className="text-[#c5a059] italic">Model</em>
            </h2>
            <p className="text-gray-600 text-sm mt-4 max-w-md mx-auto font-light leading-relaxed">
              High allocation to Corporate Gifting and DTC for maximised margin and brand control. Retail for visibility, not volume.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-gray-100 mb-24">
            {channels.map((ch, i) => (
              <div key={i} className="bg-white p-10 group hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-8">
                  <div className="text-[#c5a059] group-hover:text-[#c5a059] transition-colors">{ch.icon}</div>
                  <div className="text-5xl font-light text-gray-100 group-hover:text-gray-200 transition-colors" style={{ fontFamily: "'Georgia', serif" }}>{ch.pct}</div>
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>{ch.name}</h3>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#c5a059] mb-5 font-medium">KPI: {ch.kpi}</p>
                <p className="text-gray-600 text-sm leading-relaxed font-light">{ch.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="text-[9px] uppercase tracking-[0.4em] text-gray-400 mb-5 text-center">Volume Allocation</div>
            <div className="flex h-3 overflow-hidden rounded-sm bg-gray-100">
              <div className="bg-[#c5a059]" style={{ width: '40%' }} />
              <div className="bg-[#c5a059]/60 border-x border-white" style={{ width: '35%' }} />
              <div className="bg-[#c5a059]/30" style={{ width: '25%' }} />
            </div>
            <div className="flex justify-between text-[9px] uppercase tracking-[0.2em] text-gray-500">
              <span>Corporate Gifting 40%</span>
              <span>DTC 35%</span>
              <span>Retail & HoReCa 25%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-36 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <SectionLabel>Growth Projections</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                3-Year <em className="text-[#c5a059] italic">Financial Model</em>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed font-light mb-12 max-w-md">
                Built on measured growth from a verified Cape Winelands supply chain. Year 1 focuses on distribution and brand establishment. Year 3 targets domestic profitability and international distribution agreements.
              </p>

              <div className="space-y-8">
                {financials.map((f, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-end mb-3">
                      <div>
                        <span className="text-[9px] uppercase tracking-[0.3em] text-[#c5a059] font-medium">{f.year}</span>
                        <p className="text-[11px] text-gray-500 font-light">{f.label}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-[#c5a059]">{f.margin} margin</p>
                      </div>
                    </div>
                    <div className="h-[3px] bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#c5a059] rounded-full transition-all duration-1000"
                        style={{ width: f.width }}
                      />
                    </div>
                    <p className="text-[10px] text-gray-500 mt-2 font-light">{f.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel>Competitive Landscape</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                Positioned in the <em className="text-[#c5a059] italic">profitable middle</em>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed font-light mb-10 max-w-md">
                Above mass-market premium on cultural relevance. Below established luxury on accessibility. Competing on relevance, not legacy.
              </p>

              <div className="space-y-3">
                {competitors.map((c, i) => (
                  <div key={i} className={`border p-6 ${i === 1 ? 'border-[#c5a059]/30 bg-[#c5a059]/[0.03]' : 'border-gray-200'}`}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className={`text-[9px] uppercase tracking-[0.3em] font-black ${i === 1 ? 'text-[#c5a059]' : 'text-gray-500'}`}>{i === 1 ? '★ Buxino Wines' : c.type}</span>
                        <p className="text-sm text-gray-600 mt-1 font-light">{i === 1 ? 'R 280 – R 350' : c.brand + ' · ' + c.range}</p>
                      </div>
                    </div>
                    <p className="text-[11px] text-gray-600 leading-relaxed font-light">{i === 1 ? 'Our position: Cultural relevance, intentional design, FMCG-led corporate sales motion.' : c.buxino}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Approach */}
      <section className="py-36 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <SectionLabel>Integrated Marketing</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
              The <em className="text-[#c5a059] italic">"Art of the Ascent"</em> Campaign
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-gray-100 mb-16">
            {[
              {
                type: 'ATL', full: 'Above the Line', label: 'Brand Awareness',
                items: ['Targeted LinkedIn & digital video ads', 'Select print: GQ, House & Leisure, Financial Mail', 'High-impact display on business news sites'],
              },
              {
                type: 'TTL', full: 'Through the Line', label: 'Experiential & Integrated',
                items: ['Pop-up Art/Wine Galleries in Johannesburg & Cape Town', 'Influencer partnerships — finance, fashion, lifestyle thought leaders', 'Founder podcast appearances as brand strategist, not winemaker'],
                featured: true,
              },
              {
                type: 'BTL', full: 'Below the Line', label: 'Direct Engagement',
                items: ['Silent Sales Pitch gift boxes to corporate decision-makers', 'Private tastings at premium co-working spaces & members clubs', 'Aggressive DTC retargeting + Ascent Rewards loyalty programme'],
              },
            ].map((m, i) => (
              <div key={i} className={`p-10 ${m.featured ? 'bg-[#c5a059]/[0.04]' : 'bg-white'}`}>
                <div className="text-[10px] uppercase tracking-[0.5em] text-[#c5a059] font-black mb-2">{m.type}</div>
                <h3 className="text-sm text-gray-500 font-light mb-1">{m.full}</h3>
                <h4 className="text-xl font-light text-gray-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>{m.label}</h4>
                <div className="space-y-3">
                  {m.items.map((item, j) => (
                    <div key={j} className="flex gap-3 items-start">
                      <span className="text-[#c5a059] text-xs mt-0.5 flex-shrink-0">—</span>
                      <span className="text-gray-600 text-[12px] leading-relaxed font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-px bg-gray-100">
            {[
              { platform: 'LinkedIn', role: 'Thought Leadership & B2B Sales', content: 'Founder-led articles on corporate gifting psychology, FMCG-to-wine entrepreneurship, and status-signalling at the executive level.' },
              { platform: 'Instagram', role: 'Visual Luxury & Lifestyle', content: 'Minimalist photography of the bottle in aspirational settings — boardrooms, modern apartments, luxury events. Reels: "A Wine for Every Milestone."' },
              { platform: 'Podcasts', role: 'Founder Narrative', content: 'Targeted finance & entrepreneurship shows. Bakang positioned as a brand strategist, not a winemaker. Unique listener promo codes for direct ROI tracking.' },
            ].map((p, i) => (
              <div key={i} className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="text-[9px] uppercase tracking-[0.4em] text-[#c5a059] font-black mb-2">{p.platform}</div>
                <h4 className="text-sm font-light text-gray-600 mb-4" style={{ fontFamily: "'Georgia', serif" }}>{p.role}</h4>
                <p className="text-gray-600 text-[11px] leading-relaxed font-light">{p.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Ambition */}
      <section className="py-40 bg-white border-t border-gray-200 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center relative">
          <TrendingUp className="text-[#c5a059] mx-auto mb-10" size={40} />
          <SectionLabel>Future Expansion</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-8 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
            Built for<br/>
            <em className="text-[#c5a059] italic">global ascent</em>
          </h2>
          <p className="text-gray-600 text-base leading-[1.9] max-w-2xl mx-auto font-light mb-12">
            Near-term focus: establish dominance in the South African young professional market. The brand identity and quality standards are developed to be globally competitive from day one. Target expansion into Europe, North America, and Asia — introducing the unique story of Bakang Matjila and the premium, sophisticated taste of South African wine to the world.
          </p>

          <div className="grid grid-cols-3 gap-px bg-gray-100 max-w-lg mx-auto mt-12">
            {['Europe', 'North America', 'Asia'].map(region => (
              <div key={region} className="bg-white py-6 px-4 text-center border border-gray-200">
                <Globe size={14} className="text-[#c5a059] mx-auto mb-3" />
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-medium">{region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-44 bg-white text-center border-t border-gray-200">
        <div className="relative z-10 container mx-auto px-6 max-w-3xl">
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="h-[1px] flex-1 bg-[#c5a059]/20" />
            <SectionLabel>The Ascent Awaits</SectionLabel>
            <div className="h-[1px] flex-1 bg-[#c5a059]/20" />
          </div>

          <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
            Join the<br/>
            <em className="text-[#c5a059] italic">Ascent</em>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed font-light mb-14 max-w-xl mx-auto">
            Whether you're acquiring for personal cellar, corporate gifting, or institutional partnership — Buxino Wines is the statement your brand deserves.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/connect/contact-information#inquiry-form"
              className="bg-[#c5a059] text-black px-14 py-5 uppercase font-black tracking-[0.2em] text-[10px] hover:bg-gray-900 hover:text-white transition-all">
              Request Gifting Catalogue
            </Link>
            <Link href="/connect/contact-information#inquiry-form"
              className="border border-gray-300 text-gray-600 px-14 py-5 uppercase font-medium tracking-[0.2em] text-[10px] hover:border-[#c5a059] hover:text-[#c5a059] transition-all">
              Schedule a Private Tasting
            </Link>
          </div>

          <div className="border-t border-gray-200 pt-12 grid grid-cols-3 gap-px bg-gray-100 max-w-xl mx-auto">
            {[
              { label: 'Email', val: 'consulting@buxino.co.za' },
              { label: 'Phone', val: '079 264 4869' },
              { label: 'Location', val: 'Pretoria, SA' },
            ].map(c => (
              <div key={c.label} className="bg-white py-5 px-4 text-center border border-gray-200">
                <div className="text-[8px] uppercase tracking-[0.4em] text-gray-400 mb-2">{c.label}</div>
                <div className="text-[11px] text-gray-600 font-light">{c.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default BuxinoWinesPage;