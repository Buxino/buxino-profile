"use client";

import React, { useState, useRef } from 'react';
import { 
  Loader2, 
  CheckCircle, 
  Send, 
  Check, 
  ChartLine, 
  ShieldHalf, 
  Scale, 
  Users     // ← fixed: replaced UsersGear with Users
} from 'lucide-react';
import Footer from '@/components/Footer'; // ← assuming you have this component

const RetainersPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "d6c6bf82-1c1d-437d-87b1-8d0fdf43dc05");
    formData.append("from_name", "Buxino Retainers Engine");
    formData.append("subject", "New Retainer Inquiry - Buxino");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        formRef.current?.reset();
      } else {
        alert("Transmission error. Please email consulting@buxino.co.za directly.");
      }
    } catch (err) {
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white min-h-screen font-sans text-[#0F172A] selection:bg-[#B5935B] selection:text-white antialiased overflow-x-hidden">
      
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <header className="relative min-h-[90vh] flex items-center pt-40 pb-32 bg-gradient-to-br from-slate-50 via-white to-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="text-[#B5935B] text-[11px] font-black tracking-[0.5em] uppercase mb-8 block">
                Continuous Executive Oversight
              </span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-slate-900 mb-10">
                STRATEGY WITHOUT <br />
                <span className="font-serif italic font-light text-slate-400">Execution</span> IS{' '}
                <span className="text-[#B5935B]">Negligence.</span>
              </h1>
              <p className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl mb-12">
                Buxino Retainers provide mid-market South African enterprises with high-grade strategic intelligence and commercial execution—without the R2.5M salary burden of a full-time C-Suite executive.
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                <button
                  onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#0F172A] text-white px-10 py-5 text-[10px] font-black tracking-[0.4em] uppercase border border-[#0F172A] hover:bg-[#B5935B] hover:border-[#B5935B] transition-all duration-500 hover:shadow-2xl"
                >
                  Explore Retainer Tiers
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-px bg-slate-300" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
                    Gauteng • National • SADC
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="relative z-10 border border-slate-200 p-3 bg-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                <div className="aspect-[3/4] overflow-hidden grayscale contrast-125">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                    alt="Institutional Architecture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#0F172A] p-6 shadow-xl">
                  <p className="text-[#B5935B] text-[10px] font-black tracking-widest uppercase mb-1">Status</p>
                  <p className="text-white text-[10px] font-light uppercase tracking-widest">Active Oversight</p>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 border-r-2 border-t-2 border-[#B5935B]/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </header>

      {/* ── BOTTLENECK SECTION ────────────────────────────────────────── */}
      <section id="bottleneck" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-[11px] font-black tracking-[0.5em] text-[#B5935B] uppercase mb-6">
                The South African Context
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
                The Crisis of the <br />
                <span className="font-serif italic font-light">"Scaling Mid-Market."</span>
              </h3>
              <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                <p>
                  Most South African businesses plateau at the R20M – R100M revenue mark. Why? Because the founder is trapped in <strong>operational gravity</strong>—solving daily fires instead of engineering market dominance.
                </p>
                <p>
                  The "Big Four" consultancies charge millions for slide decks that never get implemented. Generic business coaches lack the industrial experience to navigate local supply chains, retail dynamics, and B-BBEE complexities.
                </p>
                <p className="text-slate-900 font-medium border-l-4 border-[#B5935B] pl-6 py-2">
                  You don't need another consultant to tell you what's wrong. You need an <strong>Architect</strong> to oversee the correction.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-8 border border-slate-200 hover:border-[#B5935B] transition-all hover:shadow-xl group">
                <ChartLine className="text-[#B5935B] mb-6" size={32} />
                <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-tight">Revenue Stagnation</h4>
                <p className="text-sm text-slate-500 font-light">
                  Breaking through the "Founder Ceiling" requires systemic sales architecture, not just "harder work."
                </p>
              </div>

              <div className="bg-slate-50 p-8 border border-slate-200 hover:border-[#B5935B] transition-all hover:shadow-xl group">
                <ShieldHalf className="text-[#B5935B] mb-6" size={32} />
                <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-tight">Operational Leakage</h4>
                <p className="text-sm text-slate-500 font-light">
                  Inefficient procurement and poor inventory management are the silent killers of SA margins.
                </p>
              </div>

              <div className="bg-slate-50 p-8 border border-slate-200 hover:border-[#B5935B] transition-all hover:shadow-xl group">
                <Scale className="text-[#B5935B] mb-6" size={32} />
                <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-tight">Compliance Drag</h4>
                <p className="text-sm text-slate-500 font-light">
                  Navigating the TASEZ, SEZ protocols, and local governance without a dedicated strategy partner.
                </p>
              </div>

              <div className="bg-slate-50 p-8 border border-slate-200 hover:border-[#B5935B] transition-all hover:shadow-xl group">
                <Users className="text-[#B5935B] mb-6" size={32} />
                <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-tight">Talent Vacuum</h4>
                <p className="text-sm text-slate-500 font-light">
                  The inability to attract or afford high-level Commercial Directors on a full-time basis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ───────────────────────────────────────────────── */}
      <section id="methodology" className="py-32 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-[11px] font-black tracking-[0.5em] text-[#B5935B] uppercase mb-6">
              The Buxino Methodology
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
              The Trojan Horse Growth Engine.
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {[
              { num: '01', title: 'Identify the Anchor', desc: 'We perform a surgical audit of your commercial operations to find the "Anchor"—the single biggest process or person holding back R5M – R10M in annual growth.' },
              { num: '02', title: 'Embed the Strategy', desc: 'We don\'t just hand over a PDF. We embed Buxino frameworks into your daily operations, aligning your sales force and supply chain to a singular commercial objective.' },
              { num: '03', title: 'Scale the Output', desc: 'Once the foundation is stable, we trigger aggressive market expansion, leveraging our networks in retail, FMCG, and industrial special economic zones.' },
            ].map((step) => (
              <div key={step.num} className="relative group">
                <span className="text-8xl font-black text-white/5 absolute -top-12 -left-4 group-hover:text-[#B5935B]/20 transition-colors">
                  {step.num}
                </span>
                <h4 className="text-xl font-bold mb-6 text-[#B5935B]">{step.title}</h4>
                <p className="text-slate-400 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ────────────────────────────────────────────────── */}
      <section id="casestudy" className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-slate-200 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center grayscale contrast-125"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#B5935B] text-white p-12 hidden md:block">
                <p className="text-5xl font-black tracking-tighter mb-2">+22%</p>
                <p className="text-[10px] font-bold tracking-widest uppercase opacity-80">Net Margin Expansion</p>
              </div>
            </div>

            <div>
              <h2 className="text-[11px] font-black tracking-[0.5em] text-[#B5935B] uppercase mb-6">Case Study: 014-FMCG</h2>
              <h3 className="text-4xl font-bold tracking-tight text-slate-900 mb-8">
                Breaking the <span className="font-serif italic font-light">Distribution Deadlock.</span>
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">The Challenge</h4>
                  <p className="text-slate-600 font-light">
                    A Gauteng-based FMCG distributor was stuck at R45M annual turnover for three years. The founder was managing every sale, leading to a 14% "Operational Leakage" through poor inventory management and a stagnant sales force.
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">The Buxino Intervention</h4>
                  <p className="text-slate-600 font-light">
                    Under a <strong>Growth Engineering Retainer</strong>, we decommissioned the founder's role in daily sales and installed a "Trojan Horse" CRM architecture. We renegotiated procurement contracts at a Tier-1 level and restructured the sales commission model to favor high-margin SKU movement.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-200">
                  <div className="flex gap-12">
                    <div>
                      <p className="text-2xl font-bold text-slate-900">R62M</p>
                      <p className="text-[9px] uppercase tracking-widest text-slate-400">Post-Audit Revenue</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">180 Days</p>
                      <p className="text-[9px] uppercase tracking-widest text-slate-400">Time to Pivot</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKAGES / RETAINER TIERS ────────────────────────────────── */}
      <section id="packages" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-[11px] font-black tracking-[0.5em] text-[#B5935B] uppercase mb-6">Strategic Investment</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Execution Frameworks.</h3>
            <p className="mt-6 text-slate-500 font-light max-w-xl mx-auto">
              Retainers are billed monthly with a minimum 6-month commitment to ensure structural stability.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Level 01 */}
            <div className="bg-white border border-slate-200 p-12 hover:border-[#B5935B] transition-all group flex flex-col shadow-sm hover:shadow-xl">
              <div className="mb-10">
                <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 mb-2 block">Level 01</span>
                <h4 className="text-2xl font-bold uppercase tracking-tighter mb-4 text-slate-900">
                  The Commercial <br />Pilot
                </h4>
                <p className="text-slate-500 text-sm font-light">
                  For businesses requiring external "Sanity Checks" and monthly board-level guidance.
                </p>
              </div>
              <div className="mb-12 flex-grow">
                <ul className="space-y-5 text-sm text-slate-600 font-light">
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> 1× Monthly Strategic Deep-Dive (4 Hours)</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> P&L & Cash Flow Audit (Monthly)</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> High-Level Sales Funnel Monitoring</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> 24/7 Executive "Red Line" Access (WhatsApp)</li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Monthly Retainer</p>
                <p className="text-4xl font-black tracking-tighter text-slate-900">R18,500</p>
                <p className="text-[9px] uppercase tracking-widest text-slate-400 mt-2">Excl. VAT • 6-Month Term</p>
              </div>
            </div>

            {/* Level 02 – Highlighted */}
            <div className="bg-[#0F172A] text-white p-12 relative lg:scale-105 shadow-2xl z-10 border-t-4 border-[#B5935B] flex flex-col">
              <div className="absolute top-6 right-6 text-[9px] font-black tracking-widest bg-[#B5935B] text-white px-3 py-1 uppercase">
                Recommended
              </div>
              <div className="mb-10">
                <span className="text-[10px] font-black tracking-widest uppercase text-[#B5935B] mb-2 block">Level 02</span>
                <h4 className="text-2xl font-bold uppercase tracking-tighter mb-4">Enterprise <br />Growth Engine</h4>
                <p className="text-slate-400 text-sm font-light">
                  Active execution. We become your outsourced Commercial Director and Growth Architect.
                </p>
              </div>
              <div className="mb-12 flex-grow">
                <ul className="space-y-5 text-sm text-slate-300 font-light">
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> Weekly Execution Workshops (Site Visits)</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> Sales Force Training & CRM Implementation</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> Supply Chain & Procurement Negotiation</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> B-BBEE Strategy & CSD Positioning</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> Brand Activation Oversight</li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Monthly Retainer</p>
                <p className="text-4xl font-black tracking-tighter text-white">R45,000</p>
                <p className="text-[9px] uppercase tracking-widest text-slate-500 mt-2">Excl. VAT • 12-Month Term</p>
              </div>
            </div>

            {/* Level 03 */}
            <div className="bg-white border border-slate-200 p-12 hover:border-[#B5935B] transition-all group flex flex-col shadow-sm hover:shadow-xl">
              <div className="mb-10">
                <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 mb-2 block">Level 03</span>
                <h4 className="text-2xl font-bold uppercase tracking-tighter mb-4 text-slate-900">
                  Institutional <br />Partner
                </h4>
                <p className="text-slate-500 text-sm font-light">
                  Total commercial immersion. Bespoke architecture for groups, holding companies, or PE-backed firms.
                </p>
              </div>
              <div className="mb-12 flex-grow">
                <ul className="space-y-5 text-sm text-slate-600 font-light">
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> Dedicated Project Manager & Lead Architect</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> Full M&A Advisory & Valuation Support</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> International Market Entry (SADC/Global)</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> Retained Crisis Management Oversight</li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Monthly Retainer</p>
                <p className="text-4xl font-black tracking-tighter text-slate-900">Custom</p>
                <p className="text-[9px] uppercase tracking-widest text-slate-400 mt-2">POA • 12-Month Minimum</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMISSION / FORM ────────────────────────────────────────── */}
      <section id="commission" className="py-32 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-10 leading-[0.85]">
            TRIGGER <span className="font-serif italic font-light text-[#B5935B]">Transformation.</span>
          </h2>
          <p className="text-slate-400 font-light text-lg mb-16">
            Our retainer capacity is strictly limited to 10 concurrent clients to ensure the depth of execution. Inquire to see if your enterprise qualifies for the Buxino Framework.
          </p>

          {!isSubmitted ? (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="text-left bg-white/5 p-12 backdrop-blur-sm border border-white/10"
            >
              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <label className="text-[9px] font-black tracking-widest uppercase text-slate-500 mb-3 block">
                    Executive Principal
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#B5935B] transition-colors placeholder:text-white/30"
                    placeholder="Full Name & Title"
                  />
                </div>
                <div>
                  <label className="text-[9px] font-black tracking-widest uppercase text-slate-500 mb-3 block">
                    Company Revenue Tier
                  </label>
                  <select
                    required
                    name="revenue_tier"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#B5935B] transition-colors appearance-none"
                  >
                    <option value="" disabled className="bg-[#0F172A]">Select Tier</option>
                    <option value="R5M - R20M" className="bg-[#0F172A]">R5M - R20M</option>
                    <option value="R20M - R100M" className="bg-[#0F172A]">R20M - R100M</option>
                    <option value="R100M+" className="bg-[#0F172A]">R100M+</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-[9px] font-black tracking-widest uppercase text-slate-500 mb-3 block">
                    The Primary Bottleneck
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#B5935B] transition-colors placeholder:text-white/30"
                    placeholder="Briefly describe the operational gravity holding you back..."
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 bg-[#B5935B] text-white text-[11px] font-black tracking-[0.4em] uppercase hover:bg-white hover:text-[#0F172A] transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={16} /> Transmitting
                  </>
                ) : (
                  <>
                    <Send size={16} /> Submit Strategy Brief
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-20 bg-white/5 border border-[#B5935B]/20 backdrop-blur-sm">
              <CheckCircle className="mx-auto text-[#B5935B] mb-6" size={64} />
              <h2 className="text-4xl font-black tracking-tighter text-white mb-4">Brief Received</h2>
              <p className="text-slate-300 font-serif italic mb-8">
                Your transformation inquiry is now under executive review.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-[10px] font-black uppercase tracking-widest text-[#B5935B] border-b border-[#B5935B] pb-1 hover:text-white"
              >
                New Inquiry
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RetainersPage;