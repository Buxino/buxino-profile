"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Award 
} from 'lucide-react';
import Footer from '@/components/Footer';

const OurBusinessPage = () => {
  return (
    <main className="bg-gray-50 min-h-screen font-sans text-gray-900 selection:bg-[#c5a059]/20 selection:text-gray-900 antialiased overflow-x-hidden">
      
      {/* ── HERO – PADDED TO CLEAR NAVBAR, STRONG INSTITUTIONAL STATEMENT ──────────────────────────────── */}
      <div className="pt-20 md:pt-24">
        <header className="relative min-h-[90vh] flex items-center bg-white border-b border-gray-200 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="text-gray-500 text-xs md:text-sm font-black tracking-[0.5em] uppercase mb-6 md:mb-8 block">
                  Pretoria, Gauteng • Established 2021
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-gray-900 mb-8 md:mb-10">
                  ARCHITECTING<br />
                  <span className="font-serif italic font-light text-gray-700">EXECUTION</span> IS{' '}
                  <span className="text-gray-900">OUR DISCIPLINE.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mb-10 md:mb-12">
                  Buxino Consulting (Pty) Ltd is a Level 1 B-BBEE, 100% black-owned strategic services firm. 
                  We deliver institutional-grade advisory, digital education, and execution capability to South African enterprises — built from township roots with corporate precision.
                </p>
                <div className="flex flex-wrap gap-6 md:gap-8 items-center">
                  <Link
                    href="#business-model"
                    className="bg-gray-900 text-white px-8 py-4 md:px-10 md:py-5 text-xs md:text-sm font-black tracking-[0.4em] uppercase border border-gray-900 hover:bg-gray-800 transition-all duration-500 rounded-lg shadow-md hover:shadow-lg"
                  >
                    Explore Our Ecosystem
                  </Link>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-px bg-gray-300" />
                    <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-gray-500">
                      135% ESD Recognition • Hatfield Expansion 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Right-side visual – Boardroom image with subtle treatment */}
              <div className="lg:col-span-5 relative hidden lg:block">
                <div className="relative z-10 border border-gray-200 p-3 bg-white shadow-lg -rotate-2 hover:rotate-0 transition-transform duration-700 rounded-lg overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src="/Buxino Boardroom.png"
                      alt="Buxino Consulting boardroom – Institutional execution environment in Pretoria"
                      fill
                      className="object-cover brightness-90"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* ── CONTEXT / THE SOUTH AFRICAN REALITY ──────────────────────────────────────────────── */}
      <section id="context" className="py-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <h2 className="text-xs md:text-sm font-black tracking-[0.5em] text-[#c5a059] uppercase mb-6">
                The Transformation Imperative
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight">
                From Township Roots<br />
                <span className="font-serif italic font-light text-gray-600">to Institutional Excellence.</span>
              </h3>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  Most black-owned South African businesses struggle to move beyond survival mode. 
                  Limited access to infrastructure, professional networks, and execution systems keeps them small — even when the market opportunity is massive.
                </p>
                <p>
                  Corporates face the opposite challenge: they must meet aggressive ESD targets (3% of NPAT) but struggle to find reliable Level 1 B-BBEE partners who can deliver blue-chip quality.
                </p>
                <p className="text-gray-900 font-medium border-l-4 border-[#c5a059] pl-6 py-2">
                  Buxino exists to solve both problems simultaneously. We are the bridge.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-8 border border-gray-200 hover:border-[#c5a059] transition-all hover:shadow-lg group rounded-lg">
                <Users className="text-[#c5a059] mb-6" size={32} />
                <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-tight">Youth Unemployment</h4>
                <p className="text-gray-600 text-sm font-light">
                  44% of South African youth remain unemployed. We embed SETA learners directly into commercial delivery to create real, marketable skills.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-200 hover:border-[#c5a059] transition-all hover:shadow-lg group rounded-lg">
                <TrendingUp className="text-[#c5a059] mb-6" size={32} />
                <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-tight">ESD Compliance Gap</h4>
                <p className="text-gray-600 text-sm font-light">
                  Corporates need high-value Level 1 suppliers. Most suppliers deliver Level 4–5, costing clients 35–75% of potential scorecard points.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-200 hover:border-[#c5a059] transition-all hover:shadow-lg group rounded-lg">
                <Shield className="text-[#c5a059] mb-6" size={32} />
                <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-tight">Execution Deficit</h4>
                <p className="text-gray-600 text-sm font-light">
                  Beautiful strategies fail without disciplined execution. We architect both the plan and the delivery system.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-200 hover:border-[#c5a059] transition-all hover:shadow-lg group rounded-lg">
                <Award className="text-[#c5a059] mb-6" size={32} />
                <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-tight">IP &amp; Knowledge Gap</h4>
                <p className="text-gray-600 text-sm font-light">
                  Black South African business methodologies are rarely protected or scaled. Buxino Academy changes that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY – TROJAN HORSE GROWTH ENGINE ──────────────────────────────────────────────── */}
      <section id="methodology" className="py-32 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-xs md:text-sm font-black tracking-[0.5em] text-[#c5a059] uppercase mb-6">
              Proprietary Framework
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              The Trojan Horse Growth Engine™
            </h3>
            <p className="mt-6 text-gray-600 font-light max-w-2xl mx-auto text-lg">
              Every client engagement is designed as an entry point that naturally compounds into higher-value, multi-year relationships.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { 
                num: '01', 
                title: 'Low-Friction Entry', 
                desc: 'We begin with tangible, high-visibility deliverables such as premium corporate gifting or event execution. This builds trust quickly while generating immediate ESD value for the client.' 
              },
              { 
                num: '02', 
                title: 'Strategic Audit & Trust', 
                desc: 'During delivery, we conduct a natural commercial audit. This reveals deeper strategic gaps that only become visible once we are inside the client’s ecosystem.' 
              },
              { 
                num: '03', 
                title: 'Institutional Scaling', 
                desc: 'We transition the relationship into retainers, strategic plans, and Buxino Academy licensing — creating lifetime value while delivering measurable transformation.' 
              },
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

      {/* ── BUSINESS MODEL – FIVE INTEGRATED STREAMS ──────────────────────────────────────────────── */}
      <section id="business-model" className="py-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-xs md:text-sm font-black tracking-[0.5em] text-[#c5a059] uppercase mb-6">
              Integrated Revenue Architecture
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Four Streams.<br />One Relationship.
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-x-20 gap-y-16">
            {[
              {
                title: "01. Premium Corporate Gifting & Branding",
                desc: "We design and deliver curated executive kits, branded merchandise, and premium gifting solutions with white-glove service. Every order is strategically positioned to serve as both a high-impact client experience and a powerful ESD compliance tool. Clients receive full 135% Level 1 recognition while making a memorable impression on stakeholders.",
                value: "42–52% gross margin • Immediate visibility and trust-building entry point",
                benefit: "Turns discretionary spend into measurable scorecard value"
              },
              {
                title: "02. Business Consulting Retainers",
                desc: "Founder-led quarterly or annual retainers providing ongoing strategic advisory. We act as your external Commercial Architect — guiding ESD compliance, market penetration strategies, brand architecture, sales optimisation, and disciplined execution. No junior consultants. Direct access to institutional-grade thinking.",
                value: "Near 100% gross margin • Long-term strategic partnership",
                benefit: "Eliminates the cost of a full-time C-suite executive while maintaining high-level oversight"
              },
              {
                title: "03. Strategic Plans & Registrations",
                desc: "We produce bankable 5-year business plans, CIPC company registrations, tax structuring, B-BBEE coordination, and full ESD readiness packages. These are not generic templates — they are professionally engineered documents designed to pass the scrutiny of commercial banks, the IDC, SEFA, and corporate procurement teams.",
                value: "85–92% gross margin • Dual revenue model (direct SME sales + corporate commissions)",
                benefit: "Enables clients to meet supplier development targets while creating fundable, procurement-ready entities"
              },
              {
                title: "04. Event Planning & Logistics",
                desc: "End-to-end corporate event management including concept development, branded collateral, venue coordination, AV, and post-event ESD impact reporting. We leverage SETA learners for on-ground execution, significantly reducing labour costs while delivering professional, high-visibility outcomes that naturally lead to retainer and Academy upsells.",
                value: "~35% gross margin • Highest-visibility lead generator",
                benefit: "Demonstrates execution capability in real time and strengthens the overall client relationship"
              }
            ].map((stream, index) => (
              <div key={index} className="group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px bg-[#c5a059]" />
                  <span className="text-xs font-black tracking-widest uppercase text-[#c5a059]">Stream 0{index + 1}</span>
                </div>
                <h4 className="text-2xl font-bold tracking-tight text-gray-900 mb-5 group-hover:text-[#c5a059] transition-colors">
                  {stream.title}
                </h4>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  {stream.desc}
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-black uppercase tracking-widest text-[#c5a059]">{stream.value}</p>
                  <p className="text-sm text-gray-700 font-light">{stream.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT & YOUTH EMPOWERMENT ──────────────────────────────────────────────── */}
      <section className="py-32 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <h2 className="text-xs md:text-sm font-black tracking-[0.5em] text-[#c5a059] uppercase mb-6">
                Social Impact by Design
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight">
                Commercial Training<br />
                <span className="font-serif italic font-light text-gray-600">for Black Youth.</span>
              </h3>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  We do not separate profit from purpose. In 2026 we onboard five SETA-funded learners as market analysts, multimedia designers, and admin support. 
                  They work on live client projects — generating real leads, designs, and outcomes.
                </p>
                <p>
                  By 2029 we target 12+ youth in the programme. This is not theoretical training. It is commercial execution experience.
                </p>
              </div>
            </div>

            <div className="bg-white p-10 border border-gray-200 rounded-xl">
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <div className="text-6xl font-black text-gray-900 mb-2">2026</div>
                  <div className="text-[#c5a059] text-sm font-black tracking-widest uppercase">5 Learners</div>
                  <div className="mt-8 text-sm text-gray-500">Market Analysts ×2 • Designers ×2 • Admin ×1</div>
                </div>
                <div>
                  <div className="text-6xl font-black text-gray-900 mb-2">2029</div>
                  <div className="text-[#c5a059] text-sm font-black tracking-widest uppercase">12+ Youth</div>
                  <div className="mt-8 text-sm text-gray-500">Scaled commercial talent pipeline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-gray-900 mb-8 md:mb-10 leading-[0.85]">
            READY TO BUILD<br />
            <span className="font-serif italic font-light text-[#c5a059]">INSTITUTIONAL EXCELLENCE?</span>
          </h2>
          <p className="text-gray-600 font-light text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Whether you are a corporate seeking reliable Level 1 ESD partners or an enterprise ready for disciplined growth architecture, 
            Buxino is structured to deliver.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/connect/contact-information"
              className="bg-gray-900 text-white px-10 py-5 text-sm font-black tracking-[0.4em] uppercase hover:bg-[#c5a059] hover:text-gray-900 transition-all duration-500 rounded-lg shadow-md"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurBusinessPage;