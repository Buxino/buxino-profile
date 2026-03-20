"use client";

import React, { useState, useRef } from 'react';
import { Loader2, CheckCircle, Send, Check, X } from 'lucide-react';
import Footer from '@/components/Footer';

const RegistrationsPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "d6c6bf82-1c1d-437d-87b1-8d0fdf43dc05");
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
    <main className="bg-gray-50 min-h-screen font-sans text-gray-900 selection:bg-[#c5a059]/20 selection:text-gray-900 antialiased overflow-x-hidden">
      
      {/* ── HERO – LIGHT & PADDED TO CLEAR NAVBAR ──────────────────────────────── */}
      <div className="pt-20 md:pt-24"> {/* Clears fixed Navbar – adjust if your Navbar height differs */}
        <header className="relative min-h-[90vh] flex items-center bg-white border-b border-gray-200">
          <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
              className="w-full h-full object-cover brightness-95 grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
              alt="Corporate Architecture"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <span className="text-[#c5a059] text-[11px] font-black tracking-[0.5em] uppercase mb-6 block">
                Registrations & Strategic Planning
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-gray-900 mb-8">
                THE ARCHITECTURE <br />
                OF{' '}
                <span className="font-serif italic font-light text-gray-600 text-4xl md:text-6xl">
                  Enterprise.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-12 max-w-xl">
                We do not just file paperwork. We engineer procurement-ready, funder-compliant institutional entities designed to deploy capital and capture market share in South Africa.
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                <button
                  onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gray-900 text-white px-10 py-5 text-xs md:text-sm font-black tracking-[0.3em] uppercase border border-gray-900 hover:bg-[#c5a059] hover:text-gray-900 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg"
                >
                  View Operational Packages
                </button>
                <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-gray-500">
                  Company Formations • Financial Modeling • Strategy
                </p>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* ── MANIFESTO / MARKET REALITY ──────────────────────────────────────── */}
      <section id="manifesto" className="py-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="h-1 w-16 bg-[#c5a059] mb-8" />
              <h2 className="text-xs md:text-sm font-black tracking-[0.5em] text-[#c5a059] uppercase mb-6">
                The Market Reality
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6 text-gray-900">
                The <span className="font-serif italic font-light text-gray-600">"R500 CIPC Trap."</span>
              </h3>
              <p className="text-gray-600 font-light text-lg">
                Why 80% of new South African enterprises are locked out of the formal economy on day one.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-12 border-l border-gray-200 pl-8 md:pl-12">
              <div>
                <h4 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">The Illusion of Registration</h4>
                <p className="text-gray-700 leading-relaxed font-light text-lg">
                  Thousands of aspiring entrepreneurs fall into the trap of cheap, generic registration agents. They pay a minimal fee, receive a basic CIPC COR14.3 certificate, and believe they are in business.{' '}
                  <strong className="text-gray-900 font-medium">They are not.</strong>
                </p>
                <p className="text-gray-700 leading-relaxed font-light text-lg mt-4">
                  A naked PTY LTD cannot secure a government tender, cannot open a corporate credit facility, and cannot pass vendor onboarding for JSE-listed companies. Without a valid Tax Clearance Pin, a structured MOI, a B-BBEE Affidavit, and CSD alignment, the company is an empty shell.
                </p>
              </div>

              <div>
                <h4 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">The Failure of Generic Business Plans</h4>
                <p className="text-gray-700 leading-relaxed font-light text-lg">
                  Similarly, entrepreneurs purchase copy-paste "business plan templates" to apply for funding. Commercial banks, SEFA, and the IDC reject these instantly. Why? Because capital is not allocated based on creative writing. Capital is allocated based on{' '}
                  <strong className="text-[#c5a059] font-medium">
                    Unit Economics, Cash Flow Projections, and Risk Mitigation.
                  </strong>
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-200 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold mb-4 text-[#c5a059]">The Buxino Correction</h4>
                <p className="text-gray-700 leading-relaxed font-light">
                  At Buxino Consulting, we treat a company registration as the foundational architecture of an institution. We build complete, audited <strong>Compliance Stacks</strong> and engineer <strong>Capital-Acquisition Blueprints</strong> that pass the rigorous due diligence of South Africa's strictest credit committees and procurement officers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATOR GRID ──────────────────────────────────────────────── */}
      <section id="differentiator" className="py-32 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs md:text-sm font-black tracking-[0.5em] text-[#c5a059] uppercase mb-6">
              The Buxino Standard
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">Generic Agents vs. Strategic Architects</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-xl overflow-hidden">
            {/* Generic Agent */}
            <div className="bg-white p-10 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <X className="text-red-600 opacity-70" size={32} />
                <h4 className="text-xl md:text-2xl font-bold text-gray-600 uppercase tracking-tight">
                  The Generic Agent
                </h4>
              </div>
              <ul className="space-y-6 text-gray-600 font-light text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-gray-300 mt-2 rounded-full shrink-0" />
                  <p>Provides a standard CIPC certificate with default (often restrictive) Memorandum of Incorporation (MOI).</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-gray-300 mt-2 rounded-full shrink-0" />
                  <p>Leaves the founder to figure out SARS Income Tax, VAT thresholds, and eFiling independently.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-gray-300 mt-2 rounded-full shrink-0" />
                  <p>Writes "Business Plans" focused on generic marketing copy with highly flawed, unrealistic financial guesses.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-gray-300 mt-2 rounded-full shrink-0" />
                  <p>Leaves the entity completely unprepared for government tenders (CSD) or private sector procurement.</p>
                </li>
              </ul>
            </div>

            {/* Buxino Architect – Highlighted */}
            <div className="bg-gray-50 p-10 md:p-12 relative z-10 border-t-4 border-[#c5a059] shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <Check className="text-[#c5a059]" size={32} />
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-tight">
                  The Buxino Architect
                </h4>
              </div>
              <ul className="space-y-6 text-gray-700 font-light text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-[#c5a059] mt-2 rounded-full shrink-0" />
                  <p><strong className="font-bold">Bespoke Structuring:</strong> Custom MOIs and share certificates tailored for future investment, equity distribution, and asset protection.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-[#c5a059] mt-2 rounded-full shrink-0" />
                  <p><strong className="font-bold">Full Compliance Stack:</strong> SARS Tax Clearance, COIDA (Letter of Good Standing), and compliant B-BBEE affidavits processed simultaneously.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-[#c5a059] mt-2 rounded-full shrink-0" />
                  <p><strong className="font-bold">Institutional Financials:</strong> 5-Year integrated financial models (Income, Cash Flow, Balance Sheet) engineered for banking and VC due diligence.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-[#c5a059] mt-2 rounded-full shrink-0" />
                  <p><strong className="font-bold">Procurement Readiness:</strong> Full onboarding onto the Central Supplier Database (CSD) and relevant industry bodies (e.g., CIDB).</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKAGES ──────────────────────────────────────────────────────────── */}
      <section id="packages" className="py-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-xs md:text-sm font-black tracking-[0.5em] text-[#c5a059] uppercase mb-6">
              Financial Parameters
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Transparent Institutional Pricing
            </h3>
            <p className="text-gray-600 font-light max-w-2xl mx-auto text-lg">
              We do not compete with generic agents on price. We compete on procurement readiness and capital acquisition success. Below are our baseline operational stacks.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Phase 01 */}
            <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md hover:border-[#c5a059] transition-all duration-500 flex flex-col">
              <div className="mb-8 border-b border-gray-200 pb-8">
                <span className="text-xs font-black tracking-widest uppercase text-gray-500 mb-2 block">
                  Phase 01
                </span>
                <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 text-gray-900 group-hover:text-[#c5a059] transition-colors">
                  Institutional Compliance Stack
                </h4>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  The absolute minimum required to pass corporate vendor onboarding and government CSD verification.
                </p>
              </div>
              <div className="flex-grow mb-10">
                <p className="text-xs font-black tracking-widest uppercase text-gray-900 mb-6">Deliverables:</p>
                <ul className="space-y-4 text-sm text-gray-700 font-light">
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> CIPC Registration & Bespoke MOI</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> SARS Income Tax & VAT Activation</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> Central Supplier Database (CSD) Profiling</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> COIDA Registration & Letter of Good Standing</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> B-BBEE Affidavit & Share Certificates</li>
                </ul>
              </div>
              <div>
                <span className="block text-xs font-black tracking-widest uppercase text-gray-500 mb-2">Base Investment</span>
                <span className="text-2xl md:text-3xl font-bold tracking-tighter text-gray-900">R8,500 – R15,000</span>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Excl. VAT • 10-14 Working Days</p>
              </div>
            </div>

            {/* Phase 02 – Highlighted */}
            <div className="bg-gray-50 border border-[#c5a059] p-8 md:p-10 rounded-xl shadow-lg relative z-10 scale-100 lg:scale-105 flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c5a059] text-gray-900 px-6 py-2 text-xs font-black tracking-widest uppercase whitespace-nowrap rounded-full">
                The Funder Standard
              </div>
              <div className="mb-8 border-b border-gray-200 pb-8 mt-4">
                <span className="text-xs font-black tracking-widest uppercase text-gray-600 mb-2 block">
                  Phase 02
                </span>
                <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 text-gray-900">
                  Capital-Acquisition Blueprint
                </h4>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Engineered strictly for Commercial Banks, the IDC, SEFA, and Private Equity due diligence.
                </p>
              </div>
              <div className="flex-grow mb-10">
                <p className="text-xs font-black tracking-widest uppercase text-gray-900 mb-6">Deliverables:</p>
                <ul className="space-y-4 text-sm text-gray-700 font-light">
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> 5-Year Integrated Financial Model</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> Unit Economics & Break-Even Analysis</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> Market Penetration & Defensibility Strategy</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> Operational Risk & Mitigation Framework</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> High-Impact Executive Pitch Deck</li>
                </ul>
              </div>
              <div>
                <span className="block text-xs font-black tracking-widest uppercase text-gray-600 mb-2">
                  Base Investment
                </span>
                <span className="text-2xl md:text-3xl font-bold tracking-tighter text-[#c5a059]">R25,000 – R65,000</span>
                <p className="text-xs uppercase tracking-widest text-gray-600 mt-2">Excl. VAT • 21-30 Working Days</p>
              </div>
            </div>

            {/* Phase 03 */}
            <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md hover:border-[#c5a059] transition-all duration-500 flex flex-col">
              <div className="mb-8 border-b border-gray-200 pb-8">
                <span className="text-xs font-black tracking-widest uppercase text-gray-500 mb-2 block">
                  Phase 03
                </span>
                <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 text-gray-900 group-hover:text-[#c5a059] transition-colors">
                  The Apex Architecture
                </h4>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  The complete turnkey solution for high-net-worth founders and corporate spin-offs.
                </p>
              </div>
              <div className="flex-grow mb-10">
                <p className="text-xs font-black tracking-widest uppercase text-gray-900 mb-6">Deliverables:</p>
                <ul className="space-y-4 text-sm text-gray-700 font-light">
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> Everything in Phase 01 + Phase 02</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> Corporate Governance & Board Structuring</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> 6 Months Retained Strategic Advisory</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> SEZ / Industrial Park Application Support</li>
                  <li className="flex items-start gap-3"><Check size={14} className="text-[#c5a059] mt-1 shrink-0" /> Asset Protection & Trust Integration</li>
                </ul>
              </div>
              <div>
                <span className="block text-xs font-black tracking-widest uppercase text-gray-500 mb-2">
                  Base Investment
                </span>
                <span className="text-2xl md:text-3xl font-bold tracking-tighter text-gray-900">R150,000+</span>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">
                  Project Based • Retainer Option Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM SECTION – LIGHT & ELEGANT ────────────────────────────────────── */}
      <section id="commission" className="py-32 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                  INITIATE <span className="font-serif italic font-light text-[#c5a059]">Formation.</span>
                </h2>
                <p className="text-gray-600 font-light text-lg">
                  Establish your institutional presence. Submit your executive requirements below.
                </p>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 md:p-12 border border-gray-200 rounded-xl shadow-sm"
              >
                <div className="md:col-span-2">
                  <label className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-2 block">
                    Principal Name & Title
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#c5a059] transition-colors"
                    placeholder="e.g. Bakang Matjila | Managing Director"
                  />
                </div>

                <div>
                  <label className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-2 block">
                    Direct Email
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#c5a059] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-2 block">
                    Strategic Objective
                  </label>
                  <select
                    required
                    name="service"
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#c5a059] transition-colors text-gray-700"
                  >
                    <option value="Phase 01">Institutional Compliance (Phase 01)</option>
                    <option value="Phase 02">Capital Blueprint (Phase 02)</option>
                    <option value="Phase 03">Apex Architecture (Phase 03)</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-2 block">
                    Executive Brief (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#c5a059] transition-colors rounded-none"
                    placeholder="Briefly outline your industry and current bottlenecks..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="md:col-span-2 bg-gray-900 text-white py-5 text-xs md:text-sm font-black tracking-[0.5em] uppercase hover:bg-[#c5a059] hover:text-gray-900 transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-60 rounded-lg shadow-md"
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
            <div className="text-center py-20 bg-white border border-[#c5a059]/20 rounded-xl shadow-sm">
              <CheckCircle className="mx-auto text-[#c5a059] mb-6" size={64} />
              <h2 className="text-4xl font-black uppercase tracking-tighter text-gray-900 mb-4">
                Brief Logged.
              </h2>
              <p className="text-gray-600 font-serif italic mb-8">
                Your corporate architecture is now in the queue for executive review.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-black uppercase tracking-widest text-[#c5a059] border-b border-[#c5a059] pb-1 hover:text-gray-900 transition-colors"
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