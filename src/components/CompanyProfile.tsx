"use client";
import React from 'react';
import { 
  Wine, Music, Utensils, ShieldCheck, Mail, Phone, MapPin, 
  Globe, Award, Briefcase, BarChart3, PieChart, ArrowUpRight, 
  Download, Landmark, TrendingUp, Info, Scale, Users, Leaf, 
  Landmark as PoliticalIcon 
} from 'lucide-react';

const CompanyProfile = () => {
  return (
    <div className="bg-white text-navy-blue p-8 md:p-20 max-w-6xl mx-auto border shadow-2xl my-10 font-sans print:shadow-none print:my-0 print:border-none">
      
      {/* 1. INSTITUTIONAL HEADER */}
      <header className="border-b-[6px] border-navy-blue pb-10 mb-16 flex justify-between items-end">
        <div>
          <h4 className="text-gold font-black uppercase tracking-[0.5em] text-[12px] mb-4 italic opacity-80">Corporate Identity</h4>
          <h1 className="text-6xl md:text-[7.5rem] font-black uppercase tracking-tighter leading-[0.75]">
            Buxino<br/>Consulting
          </h1>
          <p className="text-gold font-bold uppercase tracking-[0.3em] mt-8 flex items-center gap-3 text-sm">
            <Landmark size={20}/> Institutional Strategic Holdings
          </p>
        </div>
        <div className="text-right hidden md:block border-l border-gray-100 pl-8">
          <p className="text-[10px] font-black uppercase tracking-widest text-navy-blue/40 leading-loose">
            Profile: BX-2026-CP<br/>
            Cycle: 2026 — 2028<br/>
            Jurisdiction: Gauteng, RSA
          </p>
        </div>
      </header>

      {/* 2. EXECUTIVE VISION */}
      <section className="grid md:grid-cols-3 gap-16 mb-24">
        <div className="md:col-span-1">
          <h2 className="text-gold font-black uppercase tracking-widest text-xs mb-6 underline decoration-navy-blue decoration-2 underline-offset-8">The Mandate</h2>
          <p className="text-sm text-gray-600 leading-relaxed font-serif italic">
            "Architecting enterprise value through fifteen years of multinational exposure. We transition operational potential into sovereign market dominance."
          </p>
        </div>
        <div className="md:col-span-2">
           <h3 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none italic font-serif text-navy-blue/90">Institutional Execution</h3>
           <p className="text-navy-blue/70 text-lg mb-6 leading-relaxed font-medium">
             Buxino Consulting translates a decade and a half of FMCG and advertising management into a streamlined holding structure. Our 2026—2028 roadmap focuses on the aggressive scale of high-margin vertical service ecosystems.
           </p>
        </div>
      </section>

      {/* 3. CORE SERVICE HIGHLIGHT: CORPORATE GIFTING */}
      <section className="mb-24 bg-navy-blue text-white p-16 rounded-sm relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <h4 className="text-gold font-black uppercase tracking-widest text-[10px] mb-4">Strategic Revenue Pillar</h4>
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">Corporate Gifting & Branding</h2>
          <p className="text-xl text-white/80 font-serif italic mb-10 leading-relaxed">
            As a premier Amrod Affiliate, Buxino commands the primary value chain for corporate identity. This division serves as a high-volume engine, delivering bespoke branding solutions to multinational firms across Africa.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="https://promoafrica.com/Buxino" target="_blank" rel="noopener noreferrer" className="bg-gold text-navy-blue px-10 py-4 font-black uppercase text-[11px] tracking-widest hover:bg-white transition-all flex items-center gap-2">
              Access Institutional Catalogue <ArrowUpRight size={16}/>
            </a>
          </div>
        </div>
        <Briefcase className="absolute -right-20 -bottom-20 text-white/5" size={400} />
      </section>

      {/* 4. STRATEGIC FINANCIAL FORECAST (PESTEL INTEGRATED) */}
      <section className="mb-24">
        <div className="mb-12">
          <h2 className="text-navy-blue font-black uppercase tracking-tighter text-5xl">Strategic Outlook</h2>
          <p className="text-gold font-bold text-[10px] uppercase tracking-[0.3em] mt-2 italic">Growth Trajectory & Market Resilience</p>
        </div>

        {/* VISUAL GROWTH CHART */}
        <div className="relative h-64 w-full flex items-end gap-4 px-4 border-b-2 border-navy-blue mb-12">
          <div className="flex-1 group relative">
             <div className="bg-gray-200 h-24 w-full transition-all duration-700 group-hover:bg-navy-blue relative">
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-black opacity-0 group-hover:opacity-100 transition-all uppercase whitespace-nowrap">Service Baseline</span>
             </div>
             <p className="text-center mt-4 font-black text-[10px] uppercase tracking-widest">2026</p>
          </div>
          <div className="flex-1 group relative">
             <div className="bg-gray-300 h-44 w-full transition-all duration-700 group-hover:bg-gold relative">
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-black opacity-0 group-hover:opacity-100 transition-all uppercase whitespace-nowrap">+40% Market Expansion</span>
             </div>
             <p className="text-center mt-4 font-black text-[10px] uppercase tracking-widest">2027</p>
          </div>
          <div className="flex-1 group relative">
             <div className="bg-navy-blue h-64 w-full relative">
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase text-gold whitespace-nowrap">Market Dominance</span>
             </div>
             <p className="text-center mt-4 font-black text-[10px] uppercase tracking-widest">2028</p>
          </div>
        </div>

        {/* PESTEL STRATEGY MATRIX */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-8 border border-gray-100 bg-gray-50">
            <div className="flex items-center gap-3 mb-4 text-gold">
               <PoliticalIcon size={20}/>
               <h4 className="font-black uppercase text-[10px] tracking-[0.2em] text-navy-blue">Political & Legal</h4>
            </div>
            <p className="text-[11px] text-gray-500 leading-relaxed italic">
              <strong>Context:</strong> Evolving B-BBEE and trade regulations.<br/>
              <strong>Approach:</strong> Agile compliance management to ensure seamless multinational partnership standards.
            </p>
          </div>
          <div className="p-8 border-y-4 md:border-y-0 md:border-x-4 border-gold bg-navy-blue text-white shadow-xl">
            <div className="flex items-center gap-3 mb-4 text-gold">
               <TrendingUp size={20}/>
               <h4 className="font-black uppercase text-[10px] tracking-[0.2em] text-white">Economic</h4>
            </div>
            <p className="text-[11px] text-white/70 leading-relaxed italic">
              <strong>Context:</strong> Currency volatility affecting procurement.<br/>
              <strong>Approach:</strong> High-liquidity "war chests" used to hedge against price spikes and secure fixed-rate supply.
            </p>
          </div>
          <div className="p-8 border border-gray-100 bg-gray-50">
            <div className="flex items-center gap-3 mb-4 text-gold">
               <Users size={20}/>
               <h4 className="font-black uppercase text-[10px] tracking-[0.2em] text-navy-blue">Social & Enviro</h4>
            </div>
            <p className="text-[11px] text-gray-500 leading-relaxed italic">
              <strong>Context:</strong> Shift toward ESG-conscious branding.<br/>
              <strong>Approach:</strong> Transitioning to sustainable material catalogs and local supply chain empowerment.
            </p>
          </div>
        </div>

        {/* LAYMAN JUSTIFICATION */}
        <div className="p-10 bg-navy-blue text-white rounded-sm flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-shrink-0"><Info size={40} className="text-gold opacity-50"/></div>
          <div>
            <h4 className="font-black uppercase text-xs tracking-widest mb-2 text-gold">Strategic Growth Model</h4>
            <p className="text-sm italic font-serif leading-relaxed opacity-80">
              Buxino separates Market Activity from Operational Stability. While our projects generate multi-million rand turnover, we prioritize the growth of **Liquid Reserves**. This debt-free approach allows us to scale rapidly while maintaining the financial health required to service Africa's largest institutions.
            </p>
          </div>
        </div>
      </section>

      {/* 5. VERTICALS & STRATEGIC NETWORK */}
      <section className="mb-24 grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl font-black uppercase mb-10 tracking-tighter">Business Verticals</h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <Wine size={36} className="text-gold shrink-0 mt-1" strokeWidth={1.5}/>
              <div>
                <h4 className="font-black uppercase text-sm mb-1 tracking-widest">Buxino Wines</h4>
                <p className="text-xs text-gray-500 italic leading-relaxed">Luxury viticulture integrated with corporate networking assets and elite cellar procurement.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <Music size={36} className="text-gold shrink-0 mt-1" strokeWidth={1.5}/>
              <div>
                <h4 className="font-black uppercase text-sm mb-1 tracking-widest">In The Mino</h4>
                <p className="text-xs text-gray-500 italic leading-relaxed">Management agency for creative IP, applying professional business frameworks to entertainment logistics.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <Utensils size={36} className="text-gold shrink-0 mt-1" strokeWidth={1.5}/>
              <div>
                <h4 className="font-black uppercase text-sm mb-1 tracking-widest">BuxRamsy</h4>
                <p className="text-xs text-gray-500 italic leading-relaxed">Executive culinary services tailored for boardroom hospitality and high-stakes corporate gala events.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FAFAFA] p-10 border border-gray-100 shadow-sm">
          <h2 className="text-4xl font-black uppercase mb-10 tracking-tighter">Strategic Footprint</h2>
          <p className="text-sm text-gray-600 mb-8 font-serif italic">Buxino has delivered strategic branding and consulting for partners in:</p>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 bg-white border border-gray-100 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-navy-blue shadow-sm">
                <ShieldCheck size={14} className="text-gold"/> Multinational Retail
             </div>
             <div className="p-4 bg-white border border-gray-100 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-navy-blue shadow-sm">
                <ShieldCheck size={14} className="text-gold"/> TMT Infrastructure
             </div>
             <div className="p-4 bg-white border border-gray-100 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-navy-blue shadow-sm">
                <ShieldCheck size={14} className="text-gold"/> Private Viticulture
             </div>
             <div className="p-4 bg-white border border-gray-100 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-navy-blue shadow-sm">
                <ShieldCheck size={14} className="text-gold"/> Advertising Media
             </div>
          </div>
        </div>
      </section>

      {/* 6. AUTHORIZED REGISTRY */}
      <footer className="border-t-8 border-navy-blue pt-16 grid md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h4 className="font-black uppercase text-[11px] tracking-[0.5em] text-gold">Official Registry</h4>
          <div className="space-y-3 text-[11px] font-bold uppercase tracking-widest">
            <p className="flex items-center gap-4 hover:text-gold transition-colors cursor-pointer"><Phone size={16} className="text-gold"/> +27 79 264 4869</p>
            <p className="flex items-center gap-4 hover:text-gold transition-colors cursor-pointer"><Mail size={16} className="text-gold"/> consulting@buxino.com</p>
            <p className="flex items-center gap-4 hover:text-gold transition-colors cursor-pointer"><MapPin size={16} className="text-gold"/> 6159 Matlaisane St, Pretoria, 0208</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] uppercase font-black tracking-[0.4em] text-navy-blue/40 mb-2">Managing Director</p>
          <p className="font-serif italic text-6xl text-navy-blue">Bakang Matjila</p>
          <p className="text-[10px] uppercase font-black tracking-[0.4em] text-gold mt-6 border-t border-gray-100 pt-4 inline-block">Revision 2026.01 | Established 2022</p>
        </div>
      </footer>

      {/* DOWNLOAD CTA */}
      <div className="mt-24 text-center print:hidden border-t border-gray-100 pt-16">
        <button 
          onClick={() => window.print()}
          className="group flex items-center gap-6 mx-auto bg-navy-blue text-white px-16 py-6 font-black uppercase text-[12px] tracking-[0.3em] hover:bg-gold transition-all duration-700 shadow-2xl active:scale-95"
        >
          Download Company Profile <Download size={20} className="group-hover:translate-y-1 transition-transform duration-500"/>
        </button>
      </div>
    </div>
  );
};

export default CompanyProfile;