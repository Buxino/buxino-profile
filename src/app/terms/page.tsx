"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PrintButton from '@/components/PrintButton';

const TermsOfUse = () => {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* 1. HERO HEADER - Hidden on Print */}
      <section className="bg-navy-blue pt-32 pb-20 print:hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-gold font-black tracking-[0.5em] text-[10px] uppercase mb-4 block border-l-2 border-gold pl-4">
              Governance & Compliance
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Terms of <br/>
              <span className="text-gold italic font-serif font-light lowercase tracking-normal">Use</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. CONTENT AREA */}
      <div className="text-navy-blue py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          
          {/* Action Row - Hidden on Print */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 pb-8 border-b border-gray-100 gap-6 print:hidden">
            <div>
              <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest block mb-1">Document Ref: BX-2026-TOU</span>
              <span className="text-[10px] text-navy-blue font-bold uppercase tracking-widest">Effective Date: January 28, 2026</span>
            </div>
            <PrintButton />
          </div>

          {/* PRINTABLE CONTENT */}
          <div className="space-y-12">
            
            {/* Professional Header - Only shows on PDF */}
            <div className="hidden print:block mb-12 border-b-4 border-navy-blue pb-8">
              <h2 className="text-3xl font-black uppercase tracking-tighter">Buxino Consulting</h2>
              <p className="text-gold font-serif italic text-lg">Official Website Terms & Conditions of Use</p>
            </div>

            <section className="group">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em] mb-4 flex items-center gap-4">
                01. Acceptance of Terms
                <div className="h-[1px] w-12 bg-gray-100 group-hover:w-24 transition-all duration-500"></div>
              </h2>
              <p className="text-gray-700 leading-relaxed font-serif italic text-lg mb-4">
                By accessing this digital blueprint, you agree to abide by our governance framework.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Your use of the Buxino Consulting website (buxino.co.za) is governed by these Terms and Conditions. If you do not agree to the precision and standards outlined herein, you must cease use of our digital assets immediately.
              </p>
            </section>

            <section className="group">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em] mb-4 flex items-center gap-4">
                02. Intellectual Property
                <div className="h-[1px] w-12 bg-gray-100 group-hover:w-24 transition-all duration-500"></div>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content, including but not limited to the "Blueprint Methodology," text, graphics, logos, and digital wine portfolio, is the exclusive property of <strong>Buxino Consulting (Pty) Ltd</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Unauthorized reproduction, distribution, or disruption of these proprietary assets is strictly prohibited and subject to legal recourse under South African Intellectual Property Law.
              </p>
            </section>

            <section className="group">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em] mb-4 flex items-center gap-4">
                03. Professional Disclaimer
                <div className="h-[1px] w-12 bg-gray-100 group-hover:w-24 transition-all duration-500"></div>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The information provided on this platform is for general strategic interest and does not constitute formal professional advice. Formal consulting engagements are subject to separate service-level agreements (SLAs).
              </p>
              <div className="bg-gray-50 border-l-4 border-gold p-8 shadow-sm">
                <p className="text-navy-blue font-black uppercase tracking-widest text-[10px] mb-2">Liability Clause</p>
                <p className="text-gray-600 text-sm italic font-serif leading-relaxed">
                  Buxino Consulting shall not be held liable for any decisions made based solely on the public-facing content of this website. Strategic execution is unique to each client ecosystem.
                </p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em] mb-4 flex items-center gap-4">
                04. Governing Law
                <div className="h-[1px] w-12 bg-gray-100 group-hover:w-24 transition-all duration-500"></div>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These terms are governed by and construed in accordance with the laws of the <strong>Republic of South Africa</strong>. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts located in Gauteng.
              </p>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default TermsOfUse;