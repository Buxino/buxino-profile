"use client";

import React from 'react';
import { 
  Wine, Music, Utensils, ShieldCheck, Mail, Phone, MapPin, 
  Award, Briefcase, ArrowUpRight, 
  Download, Landmark, TrendingUp, Info, Users, 
  Target, GraduationCap, BarChart3, ShieldAlert
} from 'lucide-react';

const CompanyProfile = () => {
  return (
    <main className="bg-[#020617] min-h-screen font-sans selection:bg-[#C5A059] selection:text-[#020617]">
      {/* 1. HERO SECTION: INSTITUTIONAL IDENTITY */}
      <header className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 border-b border-[#C5A059]/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')] bg-cover bg-center opacity-10" />
        
        <div className="relative z-10 mb-12">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-2 font-serif uppercase">
            BUXINO
          </h1>
          <p className="text-[#C5A059] tracking-[0.8em] font-bold text-sm md:text-xl uppercase">
            Consulting (Pty) Ltd
          </p>
        </div>
        
        <div className="relative z-10 w-32 h-[1px] bg-[#C5A059] mb-12" />
        
        <div className="relative z-10 space-y-4">
          <h2 className="text-2xl md:text-4xl font-light text-white uppercase tracking-[0.3em] font-serif italic">
            Architecting Execution
          </h2>
          <p className="text-[#94a3b8] uppercase tracking-[0.5em] text-[10px] font-bold">
            Level 1 B-BBEE • 100% Black Owned • Institutional Excellence
          </p>
        </div>

        <div className="absolute bottom-10 flex gap-8 opacity-40 text-[9px] tracking-[0.4em] text-white uppercase font-bold">
          <span>Reg: 2021/965486/07</span>
          <span>SARS Compliant</span>
          <span>POPIA Registered</span>
        </div>
      </header>

      {/* 2. THE MANDATE: 2026 STRATEGY OVERVIEW */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-x border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="text-left">
            <h3 className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.5em] mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C5A059]" /> The 2026 Mandate
            </h3>
            <h2 className="text-5xl text-white mb-10 font-serif uppercase leading-tight">
              Bridging Blue-Chip <br />Strategy & Compliance
            </h2>
            <p className="text-[#94a3b8] text-xl leading-relaxed mb-8 font-serif italic border-l-2 border-[#C5A059] pl-8">
              "We help blue-chip companies meet their 3% Net Profit After Tax (NPAT) ESD targets faster and more cost-effectively while building a scalable knowledge business."
            </p>
            <p className="text-[#94a3b8] text-base leading-relaxed mb-6 opacity-80">
              Buxino leverages a hybrid engine that combines a lean strategic core with SETA-funded support wings. This enables us to deliver premium-tier execution at high-margin efficiency, addressing South Africa's 44% youth unemployment crisis.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
            {[
              { label: "B-BBEE Recognition", val: "135%" },
              { label: "Projected Margin (2029)", val: "90%" },
              { label: "Annual ESD Spend Focus", val: "R30B" },
              { label: "Procurement Advantage", val: "Level 1" }
            ].map((stat, i) => (
              <div key={i} className="bg-[#020617] p-10 text-center group hover:bg-white/5 transition-colors">
                <span className="block text-4xl font-bold text-white mb-2 group-hover:text-[#C5A059] transition-colors">{stat.val}</span>
                <span className="text-[9px] text-[#C5A059] tracking-widest uppercase font-black">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EXECUTION ECOSYSTEM: CORE REVENUE PILLARS */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.6em] mb-4">The Execution Ecosystem</h2>
            <p className="text-white text-3xl font-serif uppercase tracking-widest">Revenue Scaling Framework</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                id: "01",
                title: "Corporate Gifting",
                desc: "Premium executive kits sourced via Amrod affiliate network. The 'Trojan Horse' entry wedge for blue-chip accounts.",
                icon: <Briefcase size={20} />,
                tags: ["Automotive Incentive Kits", "Mining SLP Gifts", "FMCG Launch Kits"]
              },
              {
                id: "02",
                title: "Strategy Consulting",
                desc: "Retainer-based sales optimization and ESD compliance navigation. Our core recurring revenue engine.",
                icon: <Target size={20} />,
                tags: ["R35k - R75k+ Retainers", "Procurement Infiltration", "TMT Market Entry"]
              },
              {
                id: "03",
                title: "Buxino Academy",
                desc: "Knowledge monetization through digital toolkits and mentorship. Turning execution IP into a digital flywheel.",
                icon: <GraduationCap size={20} />,
                tags: ["Self-Serve Toolkits", "Done-With-You Mentorship", "Licensing Systems"]
              }
            ].map((pillar, i) => (
              <div key={i} className="group p-12 border border-white/5 bg-black/40 hover:border-[#C5A059]/30 transition-all relative">
                <span className="absolute top-8 right-8 text-[#C5A059]/20 text-4xl font-black italic">{pillar.id}</span>
                <div className="text-[#C5A059] mb-8">{pillar.icon}</div>
                <h3 className="text-white text-2xl mb-6 font-serif uppercase tracking-wider">{pillar.title}</h3>
                <p className="text-xs text-[#94a3b8] leading-loose mb-10 opacity-70">{pillar.desc}</p>
                <ul className="space-y-3">
                  {pillar.tags.map((tag, j) => (
                    <li key={j} className="text-[9px] text-[#C5A059] flex items-center gap-3 tracking-[0.2em] font-bold uppercase italic">
                      <span className="w-1.5 h-1.5 bg-[#C5A059]/30 rounded-full" /> {tag}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STRATEGIC OUTLOOK: PESTLE ANALYSIS */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
            <h2 className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.6em] mb-4 text-center">Macro Positioning</h2>
            <p className="text-white text-3xl font-serif uppercase tracking-widest">2026 PESTLE Matrix</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {[
            { cat: "Political", detail: "B-BBEE reforms & 3% NPAT fund favor Level 1 firms." },
            { cat: "Economic", detail: "TMT 3.12% CAGR; Mining +2.5% production growth." },
            { cat: "Social", detail: "Addressing 44% youth unemployment via SETA training." },
            { cat: "Technological", detail: "Leveraging 5G/IoT growth for branding & logistics." },
            { cat: "Legal", detail: "EEA & POPIA compliance mandatory for corporate tenders." },
            { cat: "Environmental", detail: "Eco-friendly gifting aligning with green procurement." }
          ].map((item, i) => (
            <div key={i} className="bg-[#020617] p-10 group hover:bg-[#C5A059]/5 transition-all">
              <h4 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <ShieldAlert size={14} className="text-[#C5A059]" /> {item.cat}
              </h4>
              <p className="text-[11px] text-[#94a3b8] leading-relaxed opacity-60 italic">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. THE ARCHITECT & GOVERNANCE */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="border-l border-[#C5A059]/30 pl-12">
            <h3 className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.5em] mb-8 italic">The Architect</h3>
            <h2 className="text-4xl text-white mb-8 font-serif uppercase tracking-tighter">Bakang Matjila</h2>
            <p className="text-[#94a3b8] text-sm leading-loose mb-8 opacity-80">
              Managing Director with a BCom in Economic Management Sciences. A multi-disciplinary strategist synthesizing Marketing Management and Financial Accounting to create structural freedom for African brands.
            </p>
            <div className="flex gap-4">
              <div className="h-10 w-10 border border-[#C5A059]/30 rounded-full flex items-center justify-center text-[10px] text-[#C5A059] font-black cursor-pointer hover:bg-[#C5A059] hover:text-[#020617] transition-all">LI</div>
              <div className="h-10 w-10 border border-[#C5A059]/30 rounded-full flex items-center justify-center text-[10px] text-[#C5A059] font-black cursor-pointer hover:bg-[#C5A059] hover:text-[#020617] transition-all">IG</div>
            </div>
          </div>
          
          <div className="bg-white/[0.03] p-12 rounded-sm border border-white/5">
            <h3 className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.5em] mb-10 italic">Institutional Governance</h3>
            <div className="space-y-8">
              {[
                { title: "B-BBEE Level 1", desc: "135% Procurement Recognition. 100% Black Owned." },
                { title: "Compliance", desc: "SARS Tax Compliant, POPIA Registered, SETA-Aligned." },
                { title: "Vision 2027", desc: "Strategic HQ expansion into Hatfield financial hub." }
              ].map((g, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="h-2 w-2 bg-[#C5A059] mt-2 rotate-45" />
                  <div>
                    <p className="text-white text-xs font-black uppercase tracking-widest mb-1">{g.title}</p>
                    <p className="text-[10px] text-[#94a3b8] opacity-60 font-medium">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 border-t border-white/5 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl text-white font-serif uppercase mb-6 italic tracking-widest">"Architecting Execution."</h2>
          <p className="text-[10px] text-[#94a3b8] tracking-[0.8em] uppercase mb-16 font-bold opacity-50 italic">Out of the night, into prosperity.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-[10px] text-[#C5A059] tracking-[0.4em] font-black uppercase italic mb-20">
            <a href="tel:0792644869" className="hover:text-white transition-colors">079 264 4869</a>
            <a href="mailto:consulting@buxino.co.za" className="hover:text-white transition-colors">CONSULTING@BUXINO.CO.ZA</a>
            <a href="https://www.buxino.co.za" className="hover:text-white transition-colors">WWW.BUXINO.CO.ZA</a>
          </div>
          
          <div className="opacity-20 text-[8px] tracking-[1.2em] text-white font-black uppercase">
            BUXINO CONSULTING (PTY) LTD • 2021/965486/07 • LEVEL 1 B-BBEE
          </div>
        </div>
      </footer>

      {/* PDF EXPORT TRIGGER */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => window.print()}
          className="group flex items-center gap-4 bg-[#C5A059] text-[#020617] px-8 py-4 text-[10px] font-black tracking-[0.4em] uppercase hover:bg-white hover:scale-105 transition-all shadow-2xl active:scale-95"
        >
          Institutional Profile <Download size={14} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </main>
  );
};

export default CompanyProfile;