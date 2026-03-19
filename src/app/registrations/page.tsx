"use client";

import React, { useState, useRef } from 'react';
import { Loader2, CheckCircle, Send, Check, X } from 'lucide-react';
import Footer from '@/components/Footer'; // ← assuming you have this from previous page

/**
 * BUXINO CORPORATE FOUNDATIONS | HTML → React Conversion
 * Theme: The Architecture of Enterprise
 */

const RegistrationsPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "d6c6bf82-1c1d-437d-87b1-8d0fdf43dc05"); // ← use your real key
    formData.append("from_name", "Buxino Foundations Engine");
    formData.append("subject", "New Corporate Foundations Request - Buxino");

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
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white min-h-screen font-sans text-[#0F172A] selection:bg-[#B5935B] selection:text-white antialiased overflow-x-hidden">
      
      {/* ── HERO ──────────────────────────────────────────────── */}
      <header className="relative min-h-[90vh] flex items-center pt-20 bg-white border-b border-gray-100">
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover grayscale opacity-20 lg:opacity-100"
            alt="Corporate Architecture"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-white/80 block lg:hidden" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <span className="text-[#B5935B] text-[11px] font-black tracking-[0.5em] uppercase mb-6 block">
              Registrations & Strategic Planning
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-slate-900 mb-8">
              THE ARCHITECTURE <br />
              OF{' '}
              <span className="font-serif italic font-light text-slate-500 text-5xl md:text-7xl">
                Enterprise.
              </span>
            </h1>
            <p className="text-xl text-slate-500 font-light leading-relaxed mb-12 max-w-xl">
              We do not just file paperwork. We engineer procurement-ready, funder-compliant institutional entities designed to deploy capital and capture market share in South Africa.
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <button
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#0F172A] text-white px-12 py-5 text-[10px] font-black tracking-[0.3em] uppercase border border-[#0F172A] hover:bg-transparent hover:text-[#0F172A] transition-all duration-300"
              >
                View Operational Packages
              </button>
              <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
                Company Formations • Financial Modeling • Strategy
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ── MANIFESTO / MARKET REALITY ────────────────────────── */}
      <section id="manifesto" className="py-32 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="h-1 w-16 bg-[#B5935B] mb-8" />
              <h2 className="text-[11px] font-black tracking-[0.5em] text-[#B5935B] uppercase mb-6">
                The Market Reality
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                The <span className="font-serif italic font-light text-slate-300">"R500 CIPC Trap."</span>
              </h3>
              <p className="text-slate-400 font-light text-lg">
                Why 80% of new South African enterprises are locked out of the formal economy on day one.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-12 border-l border-white/10 pl-8 md:pl-12">
              <div>
                <h4 className="text-2xl font-bold mb-4">The Illusion of Registration</h4>
                <p className="text-slate-300 leading-relaxed font-light text-lg">
                  Thousands of aspiring entrepreneurs fall into the trap of cheap, generic registration agents. They pay a minimal fee, receive a basic CIPC COR14.3 certificate, and believe they are in business.{' '}
                  <strong className="text-white font-medium">They are not.</strong>
                </p>
                <p className="text-slate-300 leading-relaxed font-light text-lg mt-4">
                  A naked PTY LTD cannot secure a government tender, cannot open a corporate credit facility, and cannot pass vendor onboarding for JSE-listed companies. Without a valid Tax Clearance Pin, a structured MOI, a B-BBEE Affidavit, and CSD alignment, the company is an empty shell.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-4">The Failure of Generic Business Plans</h4>
                <p className="text-slate-300 leading-relaxed font-light text-lg">
                  Similarly, entrepreneurs purchase copy-paste "business plan templates" to apply for funding. Commercial banks, SEFA, and the IDC reject these instantly. Why? Because capital is not allocated based on creative writing. Capital is allocated based on{' '}
                  <strong className="text-[#B5935B] font-medium">
                    Unit Economics, Cash Flow Projections, and Risk Mitigation.
                  </strong>
                </p>
              </div>

              <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-4 text-[#B5935B]">The Buxino Correction</h4>
                <p className="text-slate-200 leading-relaxed font-light">
                  At Buxino Consulting, we treat a company registration as the foundational architecture of an institution. We build complete, audited <strong>Compliance Stacks</strong> and engineer <strong>Capital-Acquisition Blueprints</strong> that pass the rigorous due diligence of South Africa's strictest credit committees and procurement officers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATOR GRID ───────────────────────────────── */}
      <section id="differentiator" className="py-32 bg-white border-b border-gray-100/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[11px] font-black tracking-[0.5em] text-[#B5935B] uppercase mb-6">
              The Buxino Standard
            </h2>
            <h3 className="text-4xl font-bold tracking-tight">Generic Agents vs. Strategic Architects</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
            {/* Generic Agent */}
            <div className="bg-slate-50 p-12">
              <div className="flex items-center gap-4 mb-8">
                <X className="text-red-800 opacity-50" size={32} />
                <h4 className="text-xl font-bold text-slate-500 uppercase tracking-tight">
                  The Generic Agent
                </h4>
              </div>
              <ul className="space-y-6 text-slate-500 font-light text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-1 h-1 bg-slate-300 mt-2 rounded-full shrink-0" />
                  <p>Provides a standard CIPC certificate with default (often restrictive) Memorandum of Incorporation (MOI).</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1 h-1 bg-slate-300 mt-2 rounded-full shrink-0" />
                  <p>Leaves the founder to figure out SARS Income Tax, VAT thresholds, and eFiling independently.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1 h-1 bg-slate-300 mt-2 rounded-full shrink-0" />
                  <p>Writes "Business Plans" focused on generic marketing copy with highly flawed, unrealistic financial guesses.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1 h-1 bg-slate-300 mt-2 rounded-full shrink-0" />
                  <p>Leaves the entity completely unprepared for government tenders (CSD) or private sector procurement.</p>
                </li>
              </ul>
            </div>

            {/* Buxino Architect */}
            <div className="bg-white p-12 shadow-2xl relative z-10 scale-100 md:scale-105 border-t-4 border-[#B5935B]">
              <div className="flex items-center gap-4 mb-8">
                <Check className="text-[#B5935B]" size={32} />
                <h4 className="text-xl font-bold text-slate-900 uppercase tracking-tight">
                  The Buxino Architect
                </h4>
              </div>
              <ul className="space-y-6 text-slate-700 font-light text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-1 h-1 bg-[#B5935B] mt-2 rounded-full shrink-0" />
                  <p><strong className="font-bold">Bespoke Structuring:</strong> Custom MOIs and share certificates tailored for future investment, equity distribution, and asset protection.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1 h-1 bg-[#B5935B] mt-2 rounded-full shrink-0" />
                  <p><strong className="font-bold">Full Compliance Stack:</strong> SARS Tax Clearance, COIDA (Letter of Good Standing), and compliant B-BBEE affidavits processed simultaneously.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1 h-1 bg-[#B5935B] mt-2 rounded-full shrink-0" />
                  <p><strong className="font-bold">Institutional Financials:</strong> 5-Year integrated financial models (Income, Cash Flow, Balance Sheet) engineered for banking and VC due diligence.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1 h-1 bg-[#B5935B] mt-2 rounded-full shrink-0" />
                  <p><strong className="font-bold">Procurement Readiness:</strong> Full onboarding onto the Central Supplier Database (CSD) and relevant industry bodies (e.g., CIDB).</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKAGES ─────────────────────────────────────────────── */}
      <section id="packages" className="py-32 bg-slate-50 border-b border-gray-100/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-[11px] font-black tracking-[0.5em] text-[#B5935B] uppercase mb-6">
              Financial Parameters
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Transparent Institutional Pricing
            </h3>
            <p className="text-slate-500 font-light max-w-2xl mx-auto text-lg">
              We do not compete with generic agents on price. We compete on procurement readiness and capital acquisition success. Below are our baseline operational stacks.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Phase 01 */}
            <div className="bg-white border border-slate-200 p-10 hover:border-[#B5935B] transition-all duration-500 group flex flex-col shadow-sm hover:shadow-xl">
              <div className="mb-8 border-b border-slate-100 pb-8">
                <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 mb-2 block">
                  Phase 01
                </span>
                <h4 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-[#B5935B] transition-colors">
                  Institutional Compliance Stack
                </h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  The absolute minimum required to pass corporate vendor onboarding and government CSD verification.
                </p>
              </div>
              <div className="flex-grow mb-10">
                <p className="text-[10px] font-black tracking-widest uppercase text-slate-900 mb-6">Deliverables:</p>
                <ul className="space-y-4 text-sm text-slate-600 font-light">
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> CIPC Registration & Bespoke MOI</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> SARS Income Tax & VAT Activation</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> Central Supplier Database (CSD) Profiling</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> COIDA Registration & Letter of Good Standing</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> B-BBEE Affidavit & Share Certificates</li>
                </ul>
              </div>
              <div>
                <span className="block text-[10px] font-black tracking-widest uppercase opacity-40 mb-2">Base Investment</span>
                <span className="text-3xl font-bold tracking-tighter text-slate-900">R8,500 – R15,000</span>
                <p className="text-[9px] uppercase tracking-widest text-slate-400 mt-2">Excl. VAT • 10-14 Working Days</p>
              </div>
            </div>

            {/* Phase 02 – Highlighted */}
            <div className="bg-[#0F172A] text-white border border-[#B5935B] p-10 transform scale-100 lg:scale-105 shadow-2xl relative z-10 flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#B5935B] text-[#0F172A] px-6 py-2 text-[10px] font-black tracking-widest uppercase whitespace-nowrap">
                The Funder Standard
              </div>
              <div className="mb-8 border-b border-white/10 pb-8 mt-4">
                <span className="text-[10px] font-black tracking-widest uppercase text-[#B5935B] mb-2 block">
                  Phase 02
                </span>
                <h4 className="text-2xl font-bold uppercase tracking-tight mb-4">Capital-Acquisition Blueprint</h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  Engineered strictly for Commercial Banks, the IDC, SEFA, and Private Equity due diligence.
                </p>
              </div>
              <div className="flex-grow mb-10">
                <p className="text-[10px] font-black tracking-widest uppercase text-white mb-6">Deliverables:</p>
                <ul className="space-y-4 text-sm text-slate-300 font-light">
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> 5-Year Integrated Financial Model</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> Unit Economics & Break-Even Analysis</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> Market Penetration & Defensibility Strategy</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> Operational Risk & Mitigation Framework</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> High-Impact Executive Pitch Deck</li>
                </ul>
              </div>
              <div>
                <span className="block text-[10px] font-black tracking-widest uppercase text-slate-500 mb-2">
                  Base Investment
                </span>
                <span className="text-3xl font-bold tracking-tighter text-[#B5935B]">R25,000 – R65,000</span>
                <p className="text-[9px] uppercase tracking-widest text-slate-500 mt-2">Excl. VAT • 21-30 Working Days</p>
              </div>
            </div>

            {/* Phase 03 */}
            <div className="bg-white border border-slate-200 p-10 hover:border-[#B5935B] transition-all duration-500 group flex flex-col shadow-sm hover:shadow-xl">
              <div className="mb-8 border-b border-slate-100 pb-8">
                <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 mb-2 block">
                  Phase 03
                </span>
                <h4 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-[#B5935B] transition-colors">
                  The Apex Architecture
                </h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  The complete turnkey solution for high-net-worth founders and corporate spin-offs.
                </p>
              </div>
              <div className="flex-grow mb-10">
                <p className="text-[10px] font-black tracking-widest uppercase text-slate-900 mb-6">Deliverables:</p>
                <ul className="space-y-4 text-sm text-slate-600 font-light">
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> Everything in Phase 01 + Phase 02</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> Corporate Governance & Board Structuring</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> 6 Months Retained Strategic Advisory</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> SEZ / Industrial Park Application Support</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#B5935B] mt-1 shrink-0" /> Asset Protection & Trust Integration</li>
                </ul>
              </div>
              <div>
                <span className="block text-[10px] font-black tracking-widest uppercase opacity-40 mb-2">
                  Base Investment
                </span>
                <span className="text-3xl font-bold tracking-tighter text-slate-900">R150,000+</span>
                <p className="text-[9px] uppercase tracking-widest text-slate-400 mt-2">
                  Project Based • Retainer Option Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM SECTION ──────────────────────────────────────── */}
      <section id="commission" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-16">
                <h2 className="text-5xl font-black tracking-tighter text-slate-900 mb-6">
                  INITIATE <span className="font-serif italic font-light text-[#B5935B]">Formation.</span>
                </h2>
                <p className="text-slate-500 font-light text-lg">
                  Establish your institutional presence. Submit your executive requirements below.
                </p>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-slate-50 p-12 border border-gray-100/10 shadow-sm"
              >
                <div className="md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2 block">
                    Principal Name & Title
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    className="w-full bg-transparent border-b border-slate-300 py-3 text-sm focus:outline-none focus:border-[#B5935B] transition-colors"
                    placeholder="e.g. Bakang Matjila | Managing Director"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2 block">
                    Direct Email
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    className="w-full bg-transparent border-b border-slate-300 py-3 text-sm focus:outline-none focus:border-[#B5935B] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2 block">
                    Strategic Objective
                  </label>
                  <select
                    required
                    name="service"
                    className="w-full bg-transparent border-b border-slate-300 py-3 text-sm focus:outline-none focus:border-[#B5935B] transition-colors text-slate-600"
                  >
                    <option value="Phase 01">Institutional Compliance (Phase 01)</option>
                    <option value="Phase 02">Capital Blueprint (Phase 02)</option>
                    <option value="Phase 03">Apex Architecture (Phase 03)</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2 block">
                    Executive Brief (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full bg-transparent border-b border-slate-300 py-3 text-sm focus:outline-none focus:border-[#B5935B] transition-colors"
                    placeholder="Briefly outline your industry and current bottlenecks..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="md:col-span-2 bg-[#0F172A] text-white py-6 text-[11px] font-black tracking-[0.5em] uppercase hover:bg-[#B5935B] transition-colors duration-500 flex items-center justify-center gap-4 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={16} />
                      Processing Brief
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Submit Strategy Brief
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-20 bg-slate-50 border border-[#B5935B]/20">
              <CheckCircle className="mx-auto text-[#B5935B] mb-6" size={64} />
              <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-4">
                Brief Logged.
              </h2>
              <p className="text-slate-500 font-serif italic mb-8">
                Your corporate architecture is now in the queue for executive review.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-[10px] font-black uppercase tracking-widest text-[#B5935B] border-b border-[#B5935B] pb-1 hover:text-[#B5935B]/80"
              >
                New Submission
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RegistrationsPage;