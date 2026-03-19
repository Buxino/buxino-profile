"use client";

import React, { useState, useRef } from 'react';
import { 
  Loader2, CheckCircle, Send, Award, ShieldCheck, Zap, 
  ArrowRight, ChevronRight 
} from 'lucide-react';
import Footer from '@/components/Footer'; // assuming shared Footer

const EventsPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "d6c6bf82-1c1d-437d-87b1-8d0fdf43dc05");
    formData.append("from_name", "Buxino Events Engine");
    formData.append("subject", "New Event Commission Brief - Buxino");

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
        alert("Transmission error. Please contact consulting@buxino.co.za directly.");
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
      <header className="relative min-h-screen flex items-center pt-24 bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover grayscale opacity-10"
            alt="Institutional structure"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-4xl">
            <span className="text-[#B5935B] text-[11px] font-black tracking-[0.5em] uppercase mb-8 block">
              Commissioned Execution
            </span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-slate-900 mb-10">
              THE ARCHITECTURE <br />
              OF <span className="font-serif italic font-light text-slate-400">INFLUENCE.</span>
            </h1>
            <p className="text-2xl text-slate-500 font-light leading-relaxed max-w-2xl mb-12">
              Buxino Consulting engineers high-stakes environments for South African institutions. We move beyond "planning" into the strategic deployment of protocol, security, and logistical command.
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <button
                onClick={() => document.getElementById('mandates')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#0F172A] text-white px-14 py-6 text-[11px] font-black tracking-[0.4em] uppercase border border-[#0F172A] hover:bg-transparent hover:text-[#0F172A] transition-all duration-500 hover:shadow-2xl"
              >
                Explore Operational Scope
              </button>
              <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">
                Est. 2021 • Johannesburg • Pretoria
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ── MANDATES OVERVIEW ─────────────────────────────────────────── */}
      <section id="mandates" className="py-32 bg-white border-t border-slate-100 overflow-clip">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-5xl font-bold leading-tight mb-8 italic">
                Grouped by <br />Institutional Objective.
              </h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                One-liner services do not address the complexity of South African eventing. We group our capabilities by the <strong className="text-slate-900">nature of the mandate</strong>, ensuring that the infrastructure matches the stakes of the moment.
              </p>
            </div>
            <div className="lg:col-span-7 border-l border-slate-100 pl-12 space-y-12">
              <div className="flex gap-8">
                <span className="text-[#B5935B] font-black text-xl">01</span>
                <p className="text-slate-600 font-light">
                  <strong>Structural Integrity:</strong> Every build is JOC-compliant and structurally certified, from temporary marquees to stadium stages.
                </p>
              </div>
              <div className="flex gap-8">
                <span className="text-[#B5935B] font-black text-xl">02</span>
                <p className="text-slate-600 font-light">
                  <strong>Protocol Fidelity:</strong> We manage VIP, Diplomatic, and State protocol with absolute precision, ensuring zero-breach environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MANDATE 01 ────────────────────────────────────────────────── */}
      <section className="py-32 bg-slate-50 border-t border-slate-100 overflow-clip">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="lg:sticky lg:top-32">
              <img
                src="/Mandate 1.jpg" // ← replace with real path/URL
                className="w-full aspect-[4/5] object-cover shadow-2xl mb-6"
                alt="State Protocol"
              />
              <div className="flex justify-between items-baseline border-b border-slate-200 pb-4">
                <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">Mandate Valuation</span>
                <span className="text-2xl font-bold tracking-tighter text-slate-900 uppercase">
                  R4.5M — R12M<span className="text-[#B5935B]">+</span>
                </span>
              </div>
              <p className="text-[9px] text-slate-400 mt-3 uppercase tracking-widest italic leading-relaxed">
                Includes Multi-Agency JOC Coordination & Sovereign Security Protocols.
              </p>
            </div>

            <div>
              <span className="text-[#B5935B] text-[11px] font-black tracking-[0.5em] uppercase mb-6 block">Mandate 01</span>
              <h3 className="text-5xl font-black tracking-tighter uppercase mb-8">
                State, Sovereign & <br />
                <span className="font-serif italic font-light text-slate-500">Protocol Mandates.</span>
              </h3>

              <div className="space-y-10">
                <div className="mandate-card p-8 bg-white border border-slate-200 hover:border-[#B5935B] transition-all hover:shadow-xl">
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">State Funerals & Memorials</h4>
                  <p className="text-slate-600 font-light mb-6">
                    High-stakes national logistics requiring the highest level of dignity and command. We manage the transition from site selection to the final broadcast with a focus on national sentiment and public safety.
                  </p>
                  <ul className="text-xs font-bold tracking-widest uppercase space-y-3 opacity-60">
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Multi-Agency JOC Coordination</li>
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Dignitary Seating & Protocol Mapping</li>
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Global Media Pool Management</li>
                  </ul>
                </div>

                <div className="mandate-card p-8 bg-white border border-slate-200 hover:border-[#B5935B] transition-all hover:shadow-xl">
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Diplomatic Summits & Inaugurations</h4>
                  <p className="text-slate-600 font-light mb-6">
                    Designing the theatre of diplomacy. We create secure, high-tech environments where international leaders can engage without the distraction of logistical friction.
                  </p>
                  <ul className="text-xs font-bold tracking-widest uppercase space-y-3 opacity-60">
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Secure Venue Encapsulation</li>
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Simultaneous Interpretation Systems</li>
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Bilateral Meeting Room Architecture</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MANDATE 02 ────────────────────────────────────────────────── */}
      <section className="py-32 bg-white border-t border-slate-100 overflow-clip">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="order-2 lg:order-1">
              <span className="text-[#B5935B] text-[11px] font-black tracking-[0.5em] uppercase mb-6 block">Mandate 02</span>
              <h3 className="text-5xl font-black tracking-tighter uppercase mb-8">
                Corporate Governance & <br />
                <span className="font-serif italic font-light text-slate-500">Stakeholder Alignment.</span>
              </h3>

              <div className="space-y-10">
                <div className="mandate-card p-8 bg-white border border-slate-200 hover:border-[#B5935B] transition-all hover:shadow-xl">
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">JSE-Listed AGMs & Townhalls</h4>
                  <p className="text-slate-600 font-light mb-6">
                    Where transparency meets precision. We architect annual meetings that project corporate strength, ensuring that AV, voting systems, and security facilitate clear communication with shareholders.
                  </p>
                  <ul className="text-xs font-bold tracking-widest uppercase space-y-3 opacity-60">
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Live Broadcast & Hybrid Integration</li>
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Secure Digital Voting Infrastructure</li>
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> ESG-Compliant Event Reporting</li>
                  </ul>
                </div>

                <div className="mandate-card p-8 bg-white border border-slate-200 hover:border-[#B5935B] transition-all hover:shadow-xl">
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Stakeholder Galas & Year-End Command</h4>
                  <p className="text-slate-600 font-light mb-6">
                    Strategic celebrations that go beyond the "party." These are alignment moments designed to reward performance and reinforce the brand narrative to external partners.
                  </p>
                  <ul className="text-xs font-bold tracking-widest uppercase space-y-3 opacity-60">
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Bespoke Brand-Immersion Staging</li>
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Silent Service Protocol (BuxRamsey)</li>
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Impact & Sentiment Measurement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:sticky lg:top-32">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
                className="w-full aspect-[4/5] object-cover grayscale mb-6 shadow-2xl"
                alt="Corporate Gala"
              />
              <div className="flex justify-between items-baseline border-b border-slate-200 pb-4">
                <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">Mandate Valuation</span>
                <span className="text-2xl font-bold tracking-tighter text-slate-900 uppercase">R850k — R3.5M</span>
              </div>
              <p className="text-[9px] text-slate-400 mt-3 uppercase tracking-widest italic leading-relaxed">
                Valuation based on JSE-listed reporting requirements & hybrid connectivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MANDATE 03 ────────────────────────────────────────────────── */}
      <section className="py-32 bg-slate-50 border-t border-slate-100 overflow-clip">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="lg:sticky lg:top-32">
              <img
                src="/Mandate 3.jpg" // ← replace with real path/URL
                className="w-full aspect-[4/5] object-cover grayscale mb-6 shadow-2xl"
                alt="Industrial Launch"
              />
              <div className="flex justify-between items-baseline border-b border-slate-200 pb-4">
                <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">Mandate Valuation</span>
                <span className="text-2xl font-bold tracking-tighter text-slate-900 uppercase">
                  R1.4M — R5.5M<span className="text-[#B5935B]">+</span>
                </span>
              </div>
              <p className="text-[9px] text-slate-400 mt-3 uppercase tracking-widest italic leading-relaxed">
                Covers Temporary Infrastructure, Power Grids & Site Safety Engineering.
              </p>
            </div>

            <div>
              <span className="text-[#B5935B] text-[11px] font-black tracking-[0.5em] uppercase mb-6 block">Mandate 03</span>
              <h3 className="text-5xl font-black tracking-tighter uppercase mb-8">
                Public Spectacle & <br />
                <span className="font-serif italic font-light text-slate-500">Macro-Infrastructure.</span>
              </h3>

              <div className="space-y-10">
                <div className="mandate-card p-8 bg-white border border-slate-200 hover:border-[#B5935B] transition-all hover:shadow-xl">
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">SEZ Launches & Industrial Commissions</h4>
                  <p className="text-slate-600 font-light mb-6">
                    Launching a Special Economic Zone (SEZ) like TASEZ or OR Tambo SEZ requires more than a ribbon-cutting. It requires the management of complex "dusty-site" logistics, where we transform construction zones into world-class investment theatres.
                  </p>
                  <ul className="text-xs font-bold tracking-widest uppercase space-y-3 opacity-60">
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Industrial Site Safety & PPE Management</li>
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Large-Scale Temporary Power Grids</li>
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Investment Declaration Sign-Off Protocols</li>
                  </ul>
                </div>

                <div className="mandate-card p-8 bg-white border border-slate-200 hover:border-[#B5935B] transition-all hover:shadow-xl">
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Mass Public Festivals & Stadium Activations</h4>
                  <p className="text-slate-600 font-light mb-6">
                    Managing the flow of thousands requires a military-grade approach to crowd control and site restoration. We oversee the entire lifecycle of stadium events, ensuring that brand activations are high-impact while remaining structurally sound.
                  </p>
                  <ul className="text-xs font-bold tracking-widest uppercase space-y-3 opacity-60">
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Tier 1 Crowd Management Systems</li>
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Multi-Agency Venue Ops Centre (VOC) Setup</li>
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Disaster Management & Emergency Extraction</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MANDATE 04 ────────────────────────────────────────────────── */}
      <section className="py-32 bg-white border-t border-slate-100 overflow-clip">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="order-2 lg:order-1">
              <span className="text-[#B5935B] text-[11px] font-black tracking-[0.5em] uppercase mb-6 block">Mandate 04</span>
              <h3 className="text-5xl font-black tracking-tighter uppercase mb-8">
                The Heritage <br />
                <span className="font-serif italic font-light text-slate-500">Social Season.</span>
              </h3>

              <div className="space-y-10">
                <div className="mandate-card p-8 bg-white border border-slate-200 hover:border-[#B5935B] transition-all hover:shadow-xl">
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Thoroughbred Racing Marquees</h4>
                  <p className="text-slate-600 font-light mb-6">
                    From the Hollywoodbets Durban July to The Met in Cape Town, we design the "City within a City." Our hospitality marquees feature air-conditioned glass façades, private betting totes, and "Silent Service" culinary execution.
                  </p>
                  <ul className="text-xs font-bold tracking-widest uppercase space-y-3 opacity-60">
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Structural Marquee Engineering Sign-off</li>
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> High-Key Fashion & Media Logistics</li>
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Bespoke Premium Bar & Tote Management</li>
                  </ul>
                </div>

                <div className="mandate-card p-8 bg-white border border-slate-200 hover:border-[#B5935B] transition-all hover:shadow-xl">
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Equestrian Polo Summits</h4>
                  <p className="text-slate-600 font-light mb-6">
                    Bespoke "Sport of Kings" hospitality for Sandton or Val de Vie environments. We manage the delicate balance of high-society networking with the rigorous logistical demands of equine management and VIP arrival protocol.
                  </p>
                  <ul className="text-xs font-bold tracking-widest uppercase space-y-3 opacity-60">
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> EQUUS-Grade Lounge Architecture</li>
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Butler-Serviced Field-Side Suites</li>
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#B5935B]" /> Sponsor Activation & Trophy Presentation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:sticky lg:top-32">
              <img
                src="/Mandate 4.jpg" // ← replace with real path/URL
                className="w-full aspect-[4/5] object-cover shadow-2xl mb-6"
                alt="Polo Match"
              />
              <div className="flex justify-between items-baseline border-b border-slate-200 pb-4">
                <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">Mandate Valuation</span>
                <span className="text-2xl font-bold tracking-tighter text-slate-900 uppercase">R1.2M — R4M</span>
              </div>
              <p className="text-[9px] text-slate-400 mt-3 uppercase tracking-widest italic leading-relaxed">
                Bespoke Field-Side Architecture & Premium Hospitality Protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ECONOMICS / COST TABLE ───────────────────────────────────── */}
      <section id="economics" className="py-32 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-[11px] font-black tracking-[0.5em] text-[#B5935B] uppercase mb-6">Financial Transparency</h2>
            <h3 className="text-4xl font-bold tracking-tighter uppercase">Operational Cost Parameters</h3>
            <p className="text-slate-500 font-light mt-4">
              Calculated on institutional-grade redundancy and JOC compliance standards for Gauteng/National deployment.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-slate-900">
                  <th className="py-6 text-[10px] font-black tracking-[0.4em] uppercase opacity-50">Line Item Component</th>
                  <th className="py-6 text-[10px] font-black tracking-[0.4em] uppercase opacity-50">Operational Standard</th>
                  <th className="py-6 text-[10px] font-black tracking-[0.4em] uppercase opacity-50 text-right">Investment Range (EST)</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-8">
                    <span className="block text-slate-900">Primary & Redundant Power</span>
                    <span className="text-[10px] font-light text-slate-400 uppercase tracking-widest">Generators + Auto-Sync Switches</span>
                  </td>
                  <td className="py-8 text-slate-500 font-light">Twin 150kVA - 500kVA sets with 24h onsite technician.</td>
                  <td className="py-8 text-right font-bold text-slate-900">R28,500 – R85,000</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-8">
                    <span className="block text-slate-900">Strategic Protection & Protocol</span>
                    <span className="text-[10px] font-light text-slate-400 uppercase tracking-widest">PSIRA Vetted Officers</span>
                  </td>
                  <td className="py-8 text-slate-500 font-light">VIP Close Protection + Perimeter Tactical + Crowd Management.</td>
                  <td className="py-8 text-right font-bold text-slate-900">R45,000 – R220,000</td>
                </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="py-8">
                            <span className="block text-slate-900">Regulatory Compliance (JOC/SASREA)</span>
                            <span className="text-[10px] font-light text-slate-400 uppercase tracking-widest">Municipal Permits & EMS</span>
                        </td>
                        <td className="py-8 text-slate-500 font-light">Submission to City JOC, Fire Safety, and Onsite Medical (ALS).</td>
                        <td className="py-8 text-right font-bold text-slate-900">R15,000 – R65,000</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="py-8">
                            <span className="block text-slate-900">Structural Professional Sign-offs</span>
                            <span className="text-[10px] font-light text-slate-400 uppercase tracking-widest">Pr.Eng Certification</span>
                        </td>
                        <td className="py-8 text-slate-500 font-light">Engineer stamps for marquees, stages, and electrical COCs.</td>
                        <td className="py-8 text-right font-bold text-slate-900">R12,500 – R45,000</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="py-8">
                            <span className="block text-slate-900">Logistics & Heavy Transport</span>
                            <span className="text-[10px] font-light text-slate-400 uppercase tracking-widest">Fleet & Load-In</span>
                        </td>
                        <td className="py-8 text-slate-500 font-light">8-Ton fleet deployment, site-crew labor, and 48h load-in/out.</td>
                        <td className="py-8 text-right font-bold text-slate-900">R35,000 – R110,000</td>
                    </tr>
                
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">
            *Note: Final costings are subject to site inspection and specific mandate risk-grading.
          </p>
        </div>
      </section>

      {/* ── PROVENANCE / CASE CARDS ──────────────────────────────────── */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <h2 className="text-[11px] font-black tracking-[0.5em] text-[#B5935B] uppercase mb-6">Provenance</h2>
            <h3 className="text-4xl font-bold tracking-tighter uppercase">Selected Mandate Performance</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                title: "JSE-Listed AGM Architecture",
                desc: "Managed the end-to-end execution for 1,200 delegates and board members. Focus was on seamless hybrid broadcast and secure voting protocol.",
                metrics: [
                  { label: "Protocol", value: "Zero Incidents" },
                  { label: "Engagement", value: "+47% Uplift" },
                ],
              },
              {
                title: "SEZ Industrial Launch",
                desc: "Conversion of an active construction site into a 400-guest investor theatre. Full off-grid infrastructure deployment including power, water, and sanitation.",
                metrics: [
                  { label: "Safety", value: "100% Compliance" },
                  { label: "Infrastructure", value: "Full Off-Grid" },
                ],
              },
              {
                title: "State Memorial Protocol",
                desc: "Rapid 24-hour deployment for a 3,000-person public memorial. Managed multi-agency JOC command and national media pool logistics.",
                metrics: [
                  { label: "Deployment", value: "24h Response" },
                  { label: "Attendance", value: "3,000+ Vetted" },
                ],
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="h-1 w-12 bg-[#B5935B] mb-8 group-hover:w-full transition-all duration-700" />
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-8">{item.desc}</p>
                <div className="space-y-4 pt-6 border-t border-slate-50">
                  {item.metrics.map((m, j) => (
                    <div key={j} className="flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{m.label}</span>
                      <span className="text-[11px] font-bold text-emerald-600 uppercase">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFRASTRUCTURE STANDARDS ────────────────────────────────── */}
      <section className="py-32 bg-[#0F172A] text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-24">
            <span className="text-[#B5935B] text-[11px] font-black tracking-[0.5em] uppercase mb-6 block">Operational Integrity</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-8 leading-none">
              THE BUXINO STANDARD <br />
              <span className="font-serif italic font-light text-slate-400 text-5xl">Engineered for Zero Failure.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="group">
              <div className="w-16 h-16 mb-8 flex items-center justify-center border border-white/20 group-hover:border-[#B5935B] transition-colors">
                <Award className="text-[#B5935B] text-2xl" />
              </div>
              <h5 className="text-white font-bold text-lg uppercase tracking-tight mb-4">Pr.Eng Structural Sign-off</h5>
              <p className="text-sm text-slate-400 leading-relaxed">
                We do not guess; we calculate. All temporary structures—from glass marquees to stadium stages—are certified by professional structural engineers before a single guest enters.
              </p>
            </div>

            <div className="group">
              <div className="w-16 h-16 mb-8 flex items-center justify-center border border-white/20 group-hover:border-[#B5935B] transition-colors">
                <ShieldCheck className="text-[#B5935B] text-2xl" />
              </div>
              <h5 className="text-white font-bold text-lg uppercase tracking-tight mb-4">JOC/SASREA Command</h5>
              <p className="text-sm text-slate-400 leading-relaxed">
                Buxino acts as your primary liaison with Municipal Joint Operations Committees. We manage the fire, health, and disaster management approvals required for national-scale events.
              </p>
            </div>

            <div className="group">
              <div className="w-16 h-16 mb-8 flex items-center justify-center border border-white/20 group-hover:border-[#B5935B] transition-colors">
                <Zap className="text-[#B5935B] text-2xl" />
              </div>
              <h5 className="text-white font-bold text-lg uppercase tracking-tight mb-4">N+1 Power Redundancy</h5>
              <p className="text-sm text-slate-400 leading-relaxed">
                Local grid failure is a variable we control. Every event operates on a dual-generator loop with automatic failover, ensuring that AV, lighting, and security never lose pulse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMISSION FORM ───────────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-5xl italic font-light mb-12 text-slate-900">
            Commission your next <br />
            <span className="not-italic font-black uppercase text-6xl tracking-tighter">Institutional Moment.</span>
          </h2>
          <p className="text-slate-500 mb-16">
            Buxino Consulting does not provide "quotes." We provide <strong>Strategic Operational Proposals</strong>. Submit your high-level brief below for a confidential consultation.
          </p>

          {!isSubmitted ? (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left"
            >
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 block">
                  Full Name & Title
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  className="w-full border-b-2 border-slate-100 py-4 focus:outline-none focus:border-[#B5935B] transition-colors placeholder:text-slate-400"
                  placeholder="e.g. Director of Operations"
                />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 block">
                  Organization / Department
                </label>
                <input
                  required
                  name="organization"
                  type="text"
                  className="w-full border-b-2 border-slate-100 py-4 focus:outline-none focus:border-[#B5935B] transition-colors placeholder:text-slate-400"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 block">
                  Nature of Mandate
                </label>
                <select
                  required
                  name="mandate_type"
                  className="w-full border-b-2 border-slate-100 py-4 focus:outline-none focus:border-[#B5935B] bg-transparent text-slate-600"
                >
                  <option value="">Select Mandate Type</option>
                  <option value="State & Protocol">State & Protocol</option>
                  <option value="Corporate Governance / AGM">Corporate Governance / AGM</option>
                  <option value="Industrial Infrastructure Launch">Industrial Infrastructure Launch</option>
                  <option value="Heritage Social Season Marquee">Heritage Social Season Marquee</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 block">
                  Brief Operational Overview
                </label>
                <textarea
                  name="overview"
                  rows={4}
                  className="w-full border-2 border-slate-100 p-6 focus:outline-none focus:border-[#B5935B] transition-colors placeholder:text-slate-400"
                  placeholder="Outline the scale, location, and objective..."
                />
              </div>
              <div className="md:col-span-2 text-center pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#0F172A] text-white px-20 py-8 text-[11px] font-black tracking-[0.4em] uppercase border border-[#0F172A] hover:bg-[#B5935B] hover:border-[#B5935B] transition-all duration-500 shadow-2xl flex items-center justify-center gap-4 mx-auto disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={16} /> Processing
                    </>
                  ) : (
                    <>
                      Submit Commission Brief <Send size={16} />
                    </>
                  )}
                </button>
                <p className="mt-8 text-[10px] text-slate-400 uppercase tracking-widest">
                  Confidential Response within 4 Operational Hours
                </p>
              </div>
            </form>
          ) : (
            <div className="text-center py-20 bg-slate-50 border border-[#B5935B]/20">
              <CheckCircle className="mx-auto text-[#B5935B] mb-6" size={64} />
              <h2 className="text-4xl font-black tracking-tighter text-slate-900 mb-4">Brief Received</h2>
              <p className="text-slate-500 font-serif italic mb-8">
                Your institutional moment is now under executive review.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-[10px] font-black uppercase tracking-widest text-[#B5935B] border-b border-[#B5935B] pb-1 hover:text-[#B5935B]/80"
              >
                New Commission
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default EventsPage;