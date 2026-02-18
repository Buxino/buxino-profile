"use client";

import React from 'react';
import { Printer } from 'lucide-react';

export default function ComplianceHub() {
  const printSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const printWindow = window.open('', '', 'height=900,width=1200');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Buxino Compliance - ${sectionId.toUpperCase()}</title>
          <style>
            body { font-family: 'Inter', system-ui, sans-serif; color: #001F3F; margin: 0; padding: 40px; line-height: 1.7; font-size: 16px; }
            h1, h2, h3 { color: #001F3F; }
            .border-gold { border-color: #D4AF37 !important; }
            .text-gold { color: #D4AF37 !important; }
            .bg-navy-blue { background: #001F3F !important; color: white !important; }
            @page { margin: 20mm; size: A4; }
            .print-header { text-align: center; margin-bottom: 30px; border-bottom: 3px solid #D4AF37; padding-bottom: 20px; }
          </style>
        </head>
        <body>
          <div class="print-header">
            <h1 style="font-size: 2.2rem; margin: 0;">Buxino Consulting (Pty) Ltd</h1>
            <p style="font-size: 1.1rem; margin: 8px 0 0;">Compliance Documentation • Reg: 2021/965486/07</p>
            <p style="font-size: 0.9rem; color: #64748b; margin-top: 8px;">Generated: ${new Date().toLocaleDateString('en-ZA')}</p>
          </div>
          ${element.innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <div className="bg-white min-h-screen pb-24 print:bg-white print:text-black">
      {/* Header */}
      <section className="bg-navy-blue text-white py-20 text-center print:hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">Compliance Hub</h1>
          <p className="text-xl md:text-2xl mt-4 opacity-90">
            Legal, Governance & Regulatory Frameworks
          </p>
          <p className="text-sm md:text-base mt-3 opacity-70">
            Buxino Consulting (Pty) Ltd • Reg: 2021/965486/07 • Level 1 B-BBEE • Current as of February 2026
          </p>
        </div>
      </section>

      {/* Global Print Button */}
      <div className="container mx-auto px-6 py-8 text-right print:hidden">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-3 bg-gold text-navy-blue px-8 py-4 rounded-xl font-bold uppercase tracking-widest shadow-xl hover:bg-navy-blue hover:text-gold transition-all"
        >
          <Printer size={20} /> Print Entire Hub
        </button>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-6 max-w-5xl">
        {/* 01. PAIA Manual */}
        <div id="paia" className="mb-24 scroll-mt-20 print:mb-16">
          <div className="flex justify-between items-center mb-8 print:hidden">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue border-l-5 border-gold pl-5">
              01. PAIA Manual (Section 51)
            </h2>
            <button
              onClick={() => printSection('paia')}
              className="text-gold hover:text-navy-blue flex items-center gap-2 text-sm font-semibold"
            >
              <Printer size={16} /> Print this section
            </button>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 print:prose-base">
            <p className="mb-6">
              This manual is compiled in terms of Section 51 of the Promotion of Access to Information Act 2 of 2000 (PAIA). It provides guidance on how to request access to records held by Buxino Consulting (Pty) Ltd.
            </p>

            <h3 className="text-2xl font-bold text-navy-blue mt-10 mb-4">Company Details</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8 print:bg-white print:border print:border-gray-300">
              <p className="font-bold text-lg mb-2 text-gold print:text-navy-blue">Information Officer</p>
              <p className="text-xl font-semibold">Bakang Matjila</p>
              <p className="text-gold font-medium print:text-gray-700">Founder & Managing Director</p>
              <p className="mt-3 font-mono text-sm">legal@buxino.co.za</p>
              <p className="text-sm">Pretoria, South Africa</p>
            </div>

            <h3 className="text-2xl font-bold text-navy-blue mt-10 mb-4">Categories of Records Held</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Company registration and statutory documents</li>
              <li>Financial, tax, and accounting records</li>
              <li>Client contracts, proposals, and strategic deliverables</li>
              <li>Intellectual property (frameworks, models, concepts)</li>
              <li>SETA learner and employee records</li>
              <li>Marketing, branding, and internal policy documents</li>
            </ul>

            <h3 className="text-2xl font-bold text-navy-blue mt-10 mb-4">Request Procedure</h3>
            <div className="highlight-box bg-yellow-50 border-l-4 border-gold p-6 rounded-lg mb-8 print:bg-white print:border print:border-gray-300">
              <p className="font-semibold mb-3">To request access:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Complete PAIA Form C (available at justice.gov.za)</li>
                <li>Provide sufficient detail to identify the record</li>
                <li>Submit to the Information Officer via email</li>
                <li>Pay any applicable request and access fees</li>
              </ul>
            </div>

            <p className="text-sm text-gray-500 mt-12 print:text-gray-600">
              Last updated: February 2026 • Version 1.0
            </p>
          </div>
        </div>

        {/* 02. POPIA Compliance */}
        <div id="popia" className="mb-24 scroll-mt-20 print:mb-16">
          <div className="flex justify-between items-center mb-8 print:hidden">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue border-l-5 border-gold pl-5">
              02. POPIA Compliance Framework
            </h2>
            <button
              onClick={() => printSection('popia')}
              className="text-gold hover:text-navy-blue flex items-center gap-2 text-sm font-semibold"
            >
              <Printer size={16} /> Print this section
            </button>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 print:prose-base">
            <p className="mb-6">
              Buxino Consulting (Pty) Ltd is committed to protecting personal information in accordance with the Protection of Personal Information Act 4 of 2013 (POPIA).
            </p>

            <h3 className="text-2xl font-bold text-navy-blue mt-10 mb-4">Our Commitment</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8 print:bg-white print:border print:border-gray-300">
              <p className="font-semibold text-lg mb-3 text-gold print:text-navy-blue">
                We process personal information lawfully, transparently, and securely.
              </p>
              <p>We act as responsible party when determining purpose/means, and operator when processing on behalf of clients.</p>
            </div>

            <h3 className="text-2xl font-bold text-navy-blue mt-10 mb-4">Lawful Bases</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Consent (where applicable)</li>
              <li>Necessary for performance of contract</li>
              <li>Legitimate interest (strategic consulting delivery)</li>
              <li>Compliance with legal obligations (SETA, tax, B-BBEE reporting)</li>
            </ul>

            <h3 className="text-2xl font-bold text-navy-blue mt-10 mb-4">Security Measures</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>AES-256 encryption for stored data</li>
              <li>Role-based access controls</li>
              <li>Regular security training and reviews</li>
              <li>Incident response and breach notification protocol</li>
            </ul>

            <p className="text-sm text-gray-500 mt-12 print:text-gray-600">
              Last updated: February 2026 • Version 1.0
            </p>
          </div>
        </div>

        {/* 03. Terms of Use */}
        <div id="terms" className="mb-24 scroll-mt-20 print:mb-16">
          <div className="flex justify-between items-center mb-8 print:hidden">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue border-l-5 border-gold pl-5">
              03. Terms of Use
            </h2>
            <button
              onClick={() => printSection('terms')}
              className="text-gold hover:text-navy-blue flex items-center gap-2 text-sm font-semibold"
            >
              <Printer size={16} /> Print this section
            </button>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 print:prose-base">
            <p className="mb-6">
              By accessing buxino.co.za or engaging Buxino Consulting services, you agree to these Terms of Use and our Privacy Policy.
            </p>

            <h3 className="text-2xl font-bold text-navy-blue mt-10 mb-4">Intellectual Property</h3>
            <p className="mb-6">
              All content, strategy frameworks, financial models, branded concepts, and proprietary methodologies are the exclusive property of Buxino Consulting (Pty) Ltd. No reproduction or commercial use is permitted without written consent.
            </p>

            <h3 className="text-2xl font-bold text-navy-blue mt-10 mb-4">Services Disclaimer</h3>
            <p className="mb-6">
              Strategic advice and recommendations are provided in good faith based on information supplied by the client. Final commercial decisions and outcomes remain the client’s responsibility.
            </p>

            <h3 className="text-2xl font-bold text-navy-blue mt-10 mb-4">Governing Law</h3>
            <p>
              These terms are governed by the laws of the Republic of South Africa.
            </p>

            <p className="text-sm text-gray-500 mt-12 print:text-gray-600">
              Last updated: February 2026 • Version 1.0
            </p>
          </div>
        </div>

        {/* 04. Email Disclaimer */}
        <div id="disclaimer" className="mb-24 scroll-mt-20 print:mb-16">
          <div className="flex justify-between items-center mb-8 print:hidden">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue border-l-5 border-gold pl-5">
              04. Corporate Email Disclaimer
            </h2>
            <button
              onClick={() => printSection('disclaimer')}
              className="text-gold hover:text-navy-blue flex items-center gap-2 text-sm font-semibold"
            >
              <Printer size={16} /> Print this section
            </button>
          </div>

          <div className="bg-navy-blue text-white p-10 rounded-xl shadow-2xl print:bg-white print:text-black print:border-2 print:border-gray-300">
            <h3 className="text-2xl font-bold mb-6 uppercase text-gold print:text-navy-blue">
              Official Communication Disclaimer
            </h3>
            <p className="leading-relaxed opacity-90 print:opacity-100 text-lg">
              The information in this email and any attachments is confidential and may be legally privileged. It is intended solely for the named recipient(s). If you are not the intended recipient, you are notified that any disclosure, copying, distribution, or reliance is strictly prohibited and may be unlawful. Please notify the sender immediately and delete this message.
            </p>
            <p className="mt-8 text-sm opacity-70 print:opacity-100">
              © 2026 Buxino Consulting (Pty) Ltd. Reg: 2021/965486/07. All rights reserved.
            </p>
          </div>
        </div>

        {/* 05. Quality Policy */}
        <div id="quality" className="mb-24 scroll-mt-20 print:mb-16">
          <div className="flex justify-between items-center mb-8 print:hidden">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue border-l-5 border-gold pl-5">
              05. Quality Policy & ISO Alignment
            </h2>
            <button
              onClick={() => printSection('quality')}
              className="text-gold hover:text-navy-blue flex items-center gap-2 text-sm font-semibold"
            >
              <Printer size={16} /> Print this section
            </button>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 print:prose-base">
            <p className="mb-6">
              Buxino Consulting is committed to delivering strategic and executional excellence aligned with ISO 9001 principles of continual improvement, client focus, and measurable value creation.
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>Every client engagement is reviewed against defined quality objectives</li>
              <li>Client feedback loops are mandatory on all projects</li>
              <li>Internal processes are documented and audited quarterly</li>
              <li>Continuous professional development for team and learners</li>
            </ul>

            <p className="text-sm text-gray-500 mt-12 print:text-gray-600">
              Last updated: February 2026 • Version 1.0
            </p>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <footer className="text-center py-12 text-sm text-gray-500 print:hidden">
        Information Officer Reg. No. 2026-002370 • © 2026 Buxino Consulting (Pty) Ltd | Reg: 2021/965486/07 | All governance documents current as of February 2026
      </footer>
    </div>
  );
}