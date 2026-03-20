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
  Users 
} from 'lucide-react';
import Footer from '@/components/Footer';

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
    <main className="bg-gray-50 min-h-screen font-sans text-gray-900 selection:bg-[#c5a059]/20 selection:text-gray-900 antialiased overflow-x-hidden">
      
{/* ── HERO – PADDED TO CLEAR NAVBAR, B&W IMAGE + ROTATION RETURNED ──────────────────────────────── */}
<div className="pt-20 md:pt-24"> {/* Clears fixed Navbar – adjust if needed */}
  <header className="relative min-h-[90vh] flex items-center bg-white border-b border-gray-200 overflow-hidden">
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <span className="text-gray-500 text-xs md:text-sm font-black tracking-[0.5em] uppercase mb-6 md:mb-8 block">
            Continuous Executive Oversight
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-gray-900 mb-8 md:mb-10">
            STRATEGY WITHOUT <br />
            <span className="font-serif italic font-light text-gray-700">Execution</span> IS{' '}
            <span className="text-gray-900">Negligence.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mb-10 md:mb-12">
            Buxino Retainers provide mid-market South African enterprises with high-grade strategic intelligence and commercial execution—without the R2.5M salary burden of a full-time C-Suite executive.
          </p>
          <div className="flex flex-wrap gap-6 md:gap-8 items-center">
            <button
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gray-900 text-white px-8 py-4 md:px-10 md:py-5 text-xs md:text-sm font-black tracking-[0.4em] uppercase border border-gray-900 hover:bg-gray-800 transition-all duration-500 rounded-lg shadow-md hover:shadow-lg"
            >
              Explore Retainer Tiers
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-gray-300" />
              <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-gray-500">
                Gauteng • National • SADC
              </span>
            </div>
          </div>
        </div>

        {/* Right-side image – B&W + rotation restored */}
        <div className="lg:col-span-4 relative hidden lg:block">
          <div className="relative z-10 border border-gray-200 p-3 bg-white shadow-lg rotate-3 hover:rotate-0 transition-transform duration-700 rounded-lg">
            <div className="aspect-[3/4] overflow-hidden grayscale-100">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                alt="Institutional Architecture"
                className="w-full h-full object-cover brightness-75"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>

      {/* ── BOTTLENECK SECTION ──────────────────────────────────────────────── */}
      <section id="bottleneck" className="py-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <h2 className="text-xs md:text-sm font-black tracking-[0.5em] text-[#c5a059] uppercase mb-6">
                The South African Context
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight">
                The Crisis of the <br />
                <span className="font-serif italic font-light text-gray-600">"Scaling Mid-Market."</span>
              </h3>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  Most South African businesses plateau at the R20M – R100M revenue mark. Why? Because the founder is trapped in <strong>operational gravity</strong>—solving daily fires instead of engineering market dominance.
                </p>
                <p>
                  The "Big Four" consultancies charge millions for slide decks that never get implemented. Generic business coaches lack the industrial experience to navigate local supply chains, retail dynamics, and B-BBEE complexities.
                </p>
                <p className="text-gray-900 font-medium border-l-4 border-[#c5a059] pl-6 py-2">
                  You don't need another consultant to tell you what's wrong. You need an <strong>Architect</strong> to oversee the correction.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-8 border border-gray-200 hover:border-[#c5a059] transition-all hover:shadow-lg group rounded-lg">
                <ChartLine className="text-[#c5a059] mb-6" size={32} />
                <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-tight">Revenue Stagnation</h4>
                <p className="text-gray-600 text-sm font-light">
                  Breaking through the "Founder Ceiling" requires systemic sales architecture, not just "harder work."
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-200 hover:border-[#c5a059] transition-all hover:shadow-lg group rounded-lg">
                <ShieldHalf className="text-[#c5a059] mb-6" size={32} />
                <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-tight">Operational Leakage</h4>
                <p className="text-gray-600 text-sm font-light">
                  Inefficient procurement and poor inventory management are the silent killers of SA margins.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-200 hover:border-[#c5a059] transition-all hover:shadow-lg group rounded-lg">
                <Scale className="text-[#c5a059] mb-6" size={32} />
                <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-tight">Compliance Drag</h4>
                <p className="text-gray-600 text-sm font-light">
                  Navigating the TASEZ, SEZ protocols, and local governance without a dedicated strategy partner.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-200 hover:border-[#c5a059] transition-all hover:shadow-lg group rounded-lg">
                <Users className="text-[#c5a059] mb-6" size={32} />
                <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-tight">Talent Vacuum</h4>
                <p className="text-gray-600 text-sm font-light">
                  The inability to attract or afford high-level Commercial Directors on a full-time basis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ──────────────────────────────────────────────────────── */}
      <section id="methodology" className="py-32 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-xs md:text-sm font-black tracking-[0.5em] text-[#c5a059] uppercase mb-6">
              The Buxino Methodology
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              The Trojan Horse Growth Engine.
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { num: '01', title: 'Identify the Anchor', desc: 'We perform a surgical audit of your commercial operations to find the "Anchor"—the single biggest process or person holding back R5M – R10M in annual growth.' },
              { num: '02', title: 'Embed the Strategy', desc: 'We don\'t just hand over a PDF. We embed Buxino frameworks into your daily operations, aligning your sales force and supply chain to a singular commercial objective.' },
              { num: '03', title: 'Scale the Output', desc: 'Once the foundation is stable, we trigger aggressive market expansion, leveraging our networks in retail, FMCG, and industrial special economic zones.' },
            ].map((step) => (
              <div key={step.num} className="relative group bg-white p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-[#c5a059] transition-all">
                <span className="text-6xl md:text-8xl font-black text-gray-100 absolute -top-8 -left-4 group-hover:text-[#c5a059]/10 transition-colors">
                  {step.num}
                </span>
                <h4 className="text-xl font-bold mb-6 text-gray-900">{step.title}</h4>
                <p className="text-gray-600 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ───────────────────────────────────────────────────────── */}
      <section id="casestudy" className="py-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded-xl shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                  alt="Institutional Architecture"
                  className="w-full h-full object-cover brightness-95 grayscale-[10%]"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#c5a059] text-gray-900 p-8 shadow-xl rounded-lg hidden md:block">
                <p className="text-4xl md:text-5xl font-black tracking-tighter mb-2">+22%</p>
                <p className="text-xs font-bold tracking-widest uppercase opacity-80">Net Margin Expansion</p>
              </div>
            </div>

            <div>
              <h2 className="text-xs md:text-sm font-black tracking-[0.5em] text-[#c5a059] uppercase mb-6">Case Study: 014-FMCG</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-8">
                Breaking the <span className="font-serif italic font-light text-gray-600">Distribution Deadlock.</span>
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm md:text-base font-black uppercase tracking-widest text-gray-500 mb-2">The Challenge</h4>
                  <p className="text-gray-600 font-light">
                    A Gauteng-based FMCG distributor was stuck at R45M annual turnover for three years. The founder was managing every sale, leading to a 14% "Operational Leakage" through poor inventory management and a stagnant sales force.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-black uppercase tracking-widest text-gray-500 mb-2">The Buxino Intervention</h4>
                  <p className="text-gray-600 font-light">
                    Under a <strong>Growth Engineering Retainer</strong>, we decommissioned the founder's role in daily sales and installed a "Trojan Horse" CRM architecture. We renegotiated procurement contracts at a Tier-1 level and restructured the sales commission model to favor high-margin SKU movement.
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-12">
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-gray-900">R62M</p>
                      <p className="text-xs uppercase tracking-widest text-gray-500">Post-Audit Revenue</p>
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-gray-900">180 Days</p>
                      <p className="text-xs uppercase tracking-widest text-gray-500">Time to Pivot</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RETAINER TIERS / PACKAGES ────────────────────────────────────────── */}
      <section id="packages" className="py-32 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-xs md:text-sm font-black tracking-[0.5em] text-[#c5a059] uppercase mb-6">
              Strategic Investment
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Execution Frameworks.
            </h3>
            <p className="mt-6 text-gray-600 font-light max-w-xl mx-auto text-lg">
              Retainers are billed monthly with a minimum 6-month commitment to ensure structural stability.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Level 01 */}
            <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md hover:border-[#c5a059] transition-all duration-500 flex flex-col">
              <div className="mb-10">
                <span className="text-xs font-black tracking-widest uppercase text-gray-500 mb-2 block">Level 01</span>
                <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tighter mb-4 text-gray-900">
                  The Commercial <br />Pilot
                </h4>
                <p className="text-gray-600 text-sm font-light">
                  For businesses requiring external "Sanity Checks" and monthly board-level guidance.
                </p>
              </div>
              <div className="mb-12 flex-grow">
                <ul className="space-y-5 text-sm text-gray-700 font-light">
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> 1× Monthly Strategic Deep-Dive (4 Hours)</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> P&L & Cash Flow Audit (Monthly)</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> High-Level Sales Funnel Monitoring</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> 24/7 Executive "Red Line" Access (WhatsApp)</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Monthly Retainer</p>
                <p className="text-2xl md:text-3xl font-bold tracking-tighter text-gray-900">R18,500</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Excl. VAT • 6-Month Term</p>
              </div>
            </div>

            {/* Level 02 – Highlighted */}
            <div className="bg-gray-50 border border-[#c5a059] p-8 md:p-10 rounded-xl shadow-lg relative z-10 scale-100 lg:scale-105 flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c5a059] text-gray-900 px-6 py-2 text-xs font-black tracking-widest uppercase whitespace-nowrap rounded-full">
                Recommended
              </div>
              <div className="mb-10">
                <span className="text-xs font-black tracking-widest uppercase text-gray-600 mb-2 block">Level 02</span>
                <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tighter mb-4 text-gray-900">
                  Enterprise <br />Growth Engine
                </h4>
                <p className="text-gray-600 text-sm font-light">
                  Active execution. We become your outsourced Commercial Director and Growth Architect.
                </p>
              </div>
              <div className="mb-12 flex-grow">
                <ul className="space-y-5 text-sm text-gray-700 font-light">
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> Weekly Execution Workshops (Site Visits)</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> Sales Force Training & CRM Implementation</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> Supply Chain & Procurement Negotiation</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> B-BBEE Strategy & CSD Positioning</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> Brand Activation Oversight</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-600 mb-2">Monthly Retainer</p>
                <p className="text-2xl md:text-3xl font-bold tracking-tighter text-[#c5a059]">R45,000</p>
                <p className="text-xs uppercase tracking-widest text-gray-600 mt-2">Excl. VAT • 12-Month Term</p>
              </div>
            </div>

            {/* Level 03 */}
            <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md hover:border-[#c5a059] transition-all duration-500 flex flex-col">
              <div className="mb-10">
                <span className="text-xs font-black tracking-widest uppercase text-gray-500 mb-2 block">Level 03</span>
                <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tighter mb-4 text-gray-900">
                  Institutional <br />Partner
                </h4>
                <p className="text-gray-600 text-sm font-light">
                  Total commercial immersion. Bespoke architecture for groups, holding companies, or PE-backed firms.
                </p>
              </div>
              <div className="mb-12 flex-grow">
                <ul className="space-y-5 text-sm text-gray-700 font-light">
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> Dedicated Project Manager & Lead Architect</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> Full M&A Advisory & Valuation Support</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> International Market Entry (SADC/Global)</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> Retained Crisis Management Oversight</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Monthly Retainer</p>
                <p className="text-2xl md:text-3xl font-bold tracking-tighter text-gray-900">Custom</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">POA • 12-Month Minimum</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMISSION / FORM – LIGHT VERSION ────────────────────────────────── */}
      <section id="commission" className="py-32 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-gray-900 mb-8 md:mb-10 leading-[0.85]">
            TRIGGER <span className="font-serif italic font-light text-[#c5a059]">Transformation.</span>
          </h2>
          <p className="text-gray-600 font-light text-lg md:text-xl mb-12 md:mb-16 max-w-3xl mx-auto">
            Our retainer capacity is strictly limited to 10 concurrent clients to ensure the depth of execution. Inquire to see if your enterprise qualifies for the Buxino Framework.
          </p>

          {!isSubmitted ? (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="text-left bg-gray-50 p-8 md:p-12 border border-gray-200 rounded-xl shadow-sm"
            >
              <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-10">
                <div>
                  <label className="text-xs font-black tracking-[0.3em] text-gray-500 mb-2 block">
                    Executive Principal
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    className="w-full bg-white border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#c5a059] transition-colors rounded-none"
                    placeholder="Full Name & Title"
                  />
                </div>
                <div>
                  <label className="text-xs font-black tracking-[0.3em] text-gray-500 mb-2 block">
                    Company Revenue Tier
                  </label>
                  <select
                    required
                    name="revenue_tier"
                    className="w-full bg-white border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#c5a059] transition-colors appearance-none text-gray-700 rounded-none"
                  >
                    <option value="" disabled>Select Tier</option>
                    <option value="R5M - R20M">R5M - R20M</option>
                    <option value="R20M - R100M">R20M - R100M</option>
                    <option value="R100M+">R100M+</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs font-black tracking-[0.3em] text-gray-500 mb-2 block">
                    The Primary Bottleneck
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full bg-white border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#c5a059] transition-colors rounded-none"
                    placeholder="Briefly describe the operational gravity holding you back..."
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 md:py-6 bg-gray-900 text-white text-xs md:text-sm font-black tracking-[0.4em] uppercase hover:bg-[#c5a059] hover:text-gray-900 transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-60 rounded-lg shadow-md"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={16} />
                    Transmitting
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Submit Strategy Brief
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-20 bg-white border border-[#c5a059]/20 rounded-xl shadow-sm">
              <CheckCircle className="mx-auto text-[#c5a059] mb-6" size={64} />
              <h2 className="text-4xl font-black tracking-tighter text-gray-900 mb-4">Brief Received</h2>
              <p className="text-gray-600 font-serif italic mb-8">
                Your transformation inquiry is now under executive review.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-black uppercase tracking-widest text-[#c5a059] border-b border-[#c5a059] pb-1 hover:text-gray-900 transition-colors"
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