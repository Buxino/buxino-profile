"use client";
import React from 'react';
import Footer from '@/components/Footer';
import PrintButton from '@/components/PrintButton'; // Using the component we created

const PrivacyPage = () => {
  return (
    <main className="bg-white min-h-screen">

      {/* 1. HERO HEADER - Hidden on Print */}
      <section className="bg-navy-blue pt-32 pb-20 print:hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-gold font-black tracking-[0.5em] text-[10px] uppercase mb-4 block border-l-2 border-gold pl-4">
              Legal Framework
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Privacy <br/>
              <span className="text-gold italic font-serif font-light lowercase tracking-normal">Policy</span>
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
              <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest block mb-1">Document Ref: BX-2026-PP</span>
              <span className="text-[10px] text-navy-blue font-bold uppercase tracking-widest">Effective Date: January 28, 2026</span>
            </div>
            <PrintButton />
          </div>

          {/* PRINTABLE CONTENT */}
          <div className="space-y-12">
            
            {/* Professional Header - Only shows on PDF */}
            <div className="hidden print:block mb-12 border-b-4 border-navy-blue pb-8">
              <h2 className="text-3xl font-black uppercase tracking-tighter">Buxino Consulting</h2>
              <p className="text-gold font-serif italic">Official Privacy & Data Sovereignty Protocol</p>
            </div>

            <section className="group">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em] mb-4 flex items-center gap-4">
                01. POPIA Compliance 
                <div className="h-[1px] w-12 bg-gray-100 group-hover:w-24 transition-all duration-500"></div>
              </h2>
              <p className="text-gray-700 leading-relaxed font-serif italic text-lg mb-4">
                Buxino Consulting (Pty) Ltd respects your right to privacy. 
              </p>
              <p className="text-gray-600 leading-relaxed">
                In strict accordance with the <strong>Protection of Personal Information Act (POPIA)</strong>, we only collect and process data that is strictly necessary to provide our strategic consulting services, respond to formal inquiries, or fulfill contractual obligations.
              </p>
            </section>

            <section className="group">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em] mb-4 flex items-center gap-4">
                02. Data Sovereignty & Protection
                <div className="h-[1px] w-12 bg-gray-100 group-hover:w-24 transition-all duration-500"></div>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement industry-leading security protocols to ensure that your corporate data, business intelligence, and personal identifiers are kept strictly confidential. 
              </p>
              <blockquote className="border-l-4 border-gold bg-gray-50 p-6 italic font-serif text-navy-blue">
                "Our security measures are designed to prevent unauthorized access, loss, or destruction of information, maintaining the 'Gold Standard' of data integrity."
              </blockquote>
            </section>

            <section className="group">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em] mb-4 flex items-center gap-4">
                03. Information Officer
                <div className="h-[1px] w-12 bg-gray-100 group-hover:w-24 transition-all duration-500"></div>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                For any queries regarding the access, correction, or deletion of your personal information, please direct your communication to our designated Information Officer:
              </p>
              <div className="mt-6 p-6 bg-navy-blue text-white inline-block">
                <p className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Electronic Mail</p>
                <p className="font-mono text-sm">consulting@buxino.co.za</p>
              </div>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default PrivacyPage;