"use client";

import React from 'react';
import { Printer } from 'lucide-react';

export default function ComplianceHub() {
  const printSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const printWindow = window.open('', '', 'height=1000,width=1200');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Buxino Compliance - ${sectionId.toUpperCase()}</title>
          <style>
            body { font-family: 'Inter', system-ui, sans-serif; color: #001F3F; margin: 0; padding: 60px 50px; line-height: 1.8; font-size: 17px; }
            h1, h2, h3 { color: #001F3F; font-family: 'Montserrat', sans-serif; font-weight: 700; }
            .border-gold { border-color: #D4AF37 !important; }
            .text-gold { color: #D4AF37 !important; }
            .bg-navy-blue { background: #001F3F !important; color: white !important; }
            .print-header { text-align: center; margin-bottom: 60px; border-bottom: 5px solid #D4AF37; padding-bottom: 30px; }
            @page { margin: 30mm; size: A4 portrait; }
            section { break-inside: avoid; page-break-inside: avoid; margin-bottom: 50px; }
            .print-hidden { display: none !important; }
          </style>
        </head>
        <body>
          <div class="print-header">
            <h1 style="font-size: 3rem; margin: 0; font-weight: 900;">Buxino Consulting (Pty) Ltd</h1>
            <p style="font-size: 1.5rem; margin: 15px 0 0; font-weight: 600;">Governance & Compliance Framework</p>
            <p style="font-size: 1.1rem; color: #64748b; margin-top: 15px;">
              Reg: 2021/965486/07 • Level 1 B-BBEE • Generated: ${new Date().toLocaleDateString('en-ZA')}
            </p>
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
    <div className="bg-white min-h-screen pb-32 print:bg-white print:text-black print:pb-0">
      {/* Print-only global header */}
      <div className="hidden print:block text-center mb-20 border-b-4 border-gold pb-12">
        <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-navy-blue mb-4">
          Buxino Consulting (Pty) Ltd
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-gold">
          Full Governance & Compliance Framework
        </p>
        <p className="text-lg md:text-xl text-gray-600 mt-6">
          Reg: 2021/965486/07 • Level 1 B-BBEE • Generated: {new Date().toLocaleDateString('en-ZA')}
        </p>
      </div>

      {/* On-screen hero header – matching Governance style */}
      <section className="pt-32 pb-24 bg-white text-center print:hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <h4 className="text-gold mb-4 uppercase tracking-widest text-sm font-semibold">
            Institutional Governance
          </h4>
          <h1 className="text-5xl md:text-6xl font-light uppercase tracking-tighter text-navy-blue">
            Compliance & <span className="italic font-serif text-gold">Regulatory Frameworks</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mt-8 max-w-4xl mx-auto font-light">
            Full legal and compliance documentation – transparent, current, and ready for review.
          </p>
          <p className="text-base text-gray-500 mt-6">
            Buxino Consulting (Pty) Ltd • Reg: 2021/965486/07 • Level 1 B-BBEE • February 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 md:px-12 py-16 max-w-6xl print:px-8 print:py-10">
        <div className="space-y-32 print:space-y-20">
          {/* 01. PAIA Manual */}
          <section id="paia" className="scroll-mt-20">
            <div className="flex justify-between items-center mb-10 print:hidden">
              <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight text-navy-blue border-l-6 border-gold pl-6">
                01. PAIA Manual (Section 51)
              </h2>
              <button
                onClick={() => printSection('paia')}
                className="print-hidden flex items-center gap-3 text-gold hover:text-navy-blue font-semibold text-base uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                <Printer size={20} /> Print Section
              </button>
            </div>

            <div className="prose prose-xl max-w-none text-gray-800 print:prose-lg">
              <p className="lead text-xl mb-10 font-light">
                Compiled in accordance with Section 51 of the Promotion of Access to Information Act (Act 2 of 2000), this manual provides clear guidance on requesting access to records held by Buxino Consulting (Pty) Ltd.
              </p>

              <h3 className="text-3xl font-bold text-navy-blue mt-12 mb-6">Information Officer</h3>
              <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200 mb-12 print:bg-white print:border print:border-gray-300">
                <p className="font-bold text-3xl text-navy-blue mb-3">Bakang Matjila</p>
                <p className="text-gold font-semibold text-2xl mb-5">Founder & Managing Director / Information Officer</p>
                <p className="font-mono text-xl">legal@buxino.co.za</p>
                <p className="text-xl mt-3">Pretoria, South Africa</p>
              </div>

              <h3 className="text-3xl font-bold text-navy-blue mt-12 mb-6">Categories of Records Held</h3>
              <ul className="list-disc pl-8 space-y-5 text-xl mb-12">
                <li>Statutory and company registration documents</li>
                <li>Financial statements, tax records, and accounting ledgers</li>
                <li>Client contracts, proposals, strategic deliverables and blueprints</li>
                <li>Intellectual property (frameworks, models, brand concepts)</li>
                <li>SETA learner agreements and compliance records</li>
                <li>Marketing, branding, and internal policy documents</li>
              </ul>

              <h3 className="text-3xl font-bold text-navy-blue mt-12 mb-6">Request Procedure</h3>
              <div className="bg-yellow-50 border-l-6 border-gold p-10 rounded-2xl mb-12 print:bg-white print:border print:border-gray-300">
                <p className="font-semibold text-2xl mb-5">To request access:</p>
                <ul className="list-disc pl-8 space-y-4 text-xl">
                  <li>Complete PAIA Form C (available at justice.gov.za)</li>
                  <li>Provide sufficient detail to identify the requested record</li>
                  <li>Submit to the Information Officer via email</li>
                  <li>Pay any applicable request and access fees</li>
                </ul>
              </div>

              <p className="text-base text-gray-600 mt-16 print:text-gray-700 font-light">
                Last updated: February 2026 • Version 1.0
              </p>
            </div>
          </section>

          {/* 02. POPIA Compliance */}
          <section id="popia" className="scroll-mt-20">
            <div className="flex justify-between items-center mb-10 print:hidden">
              <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight text-navy-blue border-l-6 border-gold pl-6">
                02. POPIA Compliance Framework
              </h2>
              <button
                onClick={() => printSection('popia')}
                className="print-hidden flex items-center gap-3 text-gold hover:text-navy-blue font-semibold text-base uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                <Printer size={20} /> Print Section
              </button>
            </div>

            <div className="prose prose-xl max-w-none text-gray-800 print:prose-lg">
              <p className="lead text-xl mb-10 font-light">
                Buxino Consulting (Pty) Ltd processes personal information in full compliance with the Protection of Personal Information Act (POPIA – Act 4 of 2013).
              </p>

              <h3 className="text-3xl font-bold text-navy-blue mt-12 mb-6">Commitment Statement</h3>
              <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200 mb-12 print:bg-white print:border print:border-gray-300">
                <p className="font-bold text-3xl text-navy-blue mb-4">
                  We collect, process and protect personal information lawfully, transparently and securely.
                </p>
                <p className="text-2xl font-light">
                  We act as responsible party when determining purpose and means, and as operator when processing on behalf of clients.
                </p>
              </div>

              <h3 className="text-3xl font-bold text-navy-blue mt-12 mb-6">Lawful Bases for Processing</h3>
              <ul className="list-disc pl-8 space-y-5 text-xl mb-12">
                <li>Consent (where required)</li>
                <li>Performance of a contract (consulting, events, gifting)</li>
                <li>Legitimate interest (strategic delivery and client relationship management)</li>
                <li>Legal obligation (SETA reporting, B-BBEE verification, tax compliance)</li>
              </ul>

              <h3 className="text-3xl font-bold text-navy-blue mt-12 mb-6">Security Measures</h3>
              <ul className="list-disc pl-8 space-y-5 text-xl mb-12">
                <li>AES-256 encryption for data at rest</li>
                <li>Role-based access controls and audit logs</li>
                <li>Regular security awareness training</li>
                <li>Incident response and breach notification procedure</li>
              </ul>

              <p className="text-base text-gray-600 mt-16 print:text-gray-700 font-light">
                Last updated: February 2026 • Version 1.0
              </p>
            </div>
          </section>

          {/* 03. Terms of Use */}
          <section id="terms" className="scroll-mt-20">
            <div className="flex justify-between items-center mb-10 print:hidden">
              <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight text-navy-blue border-l-6 border-gold pl-6">
                03. Website & Service Terms of Use
              </h2>
              <button
                onClick={() => printSection('terms')}
                className="print-hidden flex items-center gap-3 text-gold hover:text-navy-blue font-semibold text-base uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                <Printer size={20} /> Print Section
              </button>
            </div>

            <div className="prose prose-xl max-w-none text-gray-800 print:prose-lg">
              <p className="lead text-xl mb-10 font-light">
                By accessing buxino.co.za or engaging Buxino Consulting services, you accept these Terms of Use.
              </p>

              <h3 className="text-3xl font-bold text-navy-blue mt-12 mb-6">Intellectual Property Rights</h3>
              <p className="mb-8 text-xl">
                All content — including strategy frameworks, financial models, branded concepts, proprietary methodologies, and deliverables — is the exclusive intellectual property of Buxino Consulting (Pty) Ltd.
              </p>
              <p className="mb-8 text-xl">
                No reproduction, distribution, adaptation or commercial use is permitted without prior written consent.
              </p>

              <h3 className="text-3xl font-bold text-navy-blue mt-12 mb-6">Services Disclaimer</h3>
              <p className="mb-8 text-xl">
                All strategic advice, projections and recommendations are provided in good faith based on information supplied. Final commercial decisions and outcomes remain the client’s responsibility.
              </p>

              <h3 className="text-3xl font-bold text-navy-blue mt-12 mb-6">Governing Law</h3>
              <p className="text-xl">
                These terms are governed exclusively by the laws of the Republic of South Africa.
              </p>

              <p className="text-base text-gray-600 mt-16 print:text-gray-700 font-light">
                Last updated: February 2026 • Version 1.0
              </p>
            </div>
          </section>

          {/* 04. Corporate Email Disclaimer */}
          <section id="disclaimer" className="scroll-mt-20">
            <div className="flex justify-between items-center mb-10 print:hidden">
              <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight text-navy-blue border-l-6 border-gold pl-6">
                04. Corporate Email Disclaimer
              </h2>
              <button
                onClick={() => printSection('disclaimer')}
                className="print-hidden flex items-center gap-3 text-gold hover:text-navy-blue font-semibold text-base uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                <Printer size={20} /> Print Section
              </button>
            </div>

            <div className="bg-navy-blue text-white p-12 md:p-16 rounded-3xl shadow-2xl print:bg-white print:text-black print:border-2 print:border-gray-300 print:p-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 uppercase text-gold print:text-navy-blue">
                Official Communication & Email Disclaimer
              </h3>
              <p className="text-xl md:text-2xl leading-relaxed opacity-95 print:opacity-100">
                This email and any attachments are confidential and may contain legally privileged information. They are intended solely for the named recipient(s). If you are not the intended recipient, you are notified that any disclosure, copying, distribution or reliance on the contents is strictly prohibited and may be unlawful. Please notify the sender immediately by return email and permanently delete this message and any attachments.
              </p>
              <p className="mt-10 text-lg opacity-80 print:opacity-100">
                © 2026 Buxino Consulting (Pty) Ltd. All rights reserved.<br/>
                Registration No: 2021/965486/07
              </p>
            </div>
          </section>

          {/* 05. Quality Policy */}
          <section id="quality" className="scroll-mt-20">
            <div className="flex justify-between items-center mb-10 print:hidden">
              <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight text-navy-blue border-l-6 border-gold pl-6">
                05. Quality Policy & ISO 9001 Alignment
              </h2>
              <button
                onClick={() => printSection('quality')}
                className="print-hidden flex items-center gap-3 text-gold hover:text-navy-blue font-semibold text-base uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                <Printer size={20} /> Print Section
              </button>
            </div>

            <div className="prose prose-xl max-w-none text-gray-800 print:prose-lg">
              <p className="lead text-xl mb-10 font-light">
                Buxino Consulting is committed to delivering strategic and executional excellence aligned with ISO 9001 principles — client focus, process approach, continual improvement and evidence-based decision making.
              </p>

              <ul className="list-disc pl-8 space-y-5 text-xl mb-12">
                <li>Every client engagement is measured against defined quality objectives</li>
                <li>Structured feedback loops are mandatory at project close</li>
                <li>Internal processes are documented, audited quarterly, and improved continuously</li>
                <li>Professional development is embedded for team members and SETA learners</li>
                <li>Client satisfaction and measurable value creation remain the ultimate benchmarks</li>
              </ul>

              <p className="text-base text-gray-600 mt-16 print:text-gray-700 font-light">
                Last updated: February 2026 • Version 1.0
              </p>
            </div>
          </section>

          {/* 06. Anti-Bribery & Corruption Policy */}
          <section id="bribery" className="scroll-mt-20">
            <div className="flex justify-between items-center mb-10 print:hidden">
              <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight text-navy-blue border-l-6 border-gold pl-6">
                06. Anti-Bribery & Corruption Policy
              </h2>
              <button
                onClick={() => printSection('bribery')}
                className="print-hidden flex items-center gap-3 text-gold hover:text-navy-blue font-semibold text-base uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                <Printer size={20} /> Print Section
              </button>
            </div>

            <div className="prose prose-xl max-w-none text-gray-800 print:prose-lg">
              <p className="lead text-xl mb-10 font-light">
                Buxino Consulting (Pty) Ltd maintains a zero-tolerance policy towards bribery and corruption in all business dealings, in line with the Prevention and Combating of Corrupt Activities Act (Act 12 of 2004).
              </p>

              <h3 className="text-3xl font-bold text-navy-blue mt-12 mb-6">Key Commitments</h3>
              <ul className="list-disc pl-8 space-y-5 text-xl mb-12">
                <li>No employee, agent or partner may offer, give, request or accept bribes</li>
                <li>All gifts and hospitality must be declared and recorded</li>
                <li>Due diligence is conducted on third parties (suppliers, partners)</li>
                <li>Training on anti-corruption is mandatory for all staff</li>
                <li>Whistleblowing mechanism is available and protected</li>
              </ul>

              <p className="text-base text-gray-600 mt-16 print:text-gray-700 font-light">
                Last updated: February 2026 • Version 1.0
              </p>
            </div>
          </section>

          {/* 07. Conflict of Interest Policy */}
          <section id="conflict" className="scroll-mt-20">
            <div className="flex justify-between items-center mb-10 print:hidden">
              <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight text-navy-blue border-l-6 border-gold pl-6">
                07. Conflict of Interest Policy
              </h2>
              <button
                onClick={() => printSection('conflict')}
                className="print-hidden flex items-center gap-3 text-gold hover:text-navy-blue font-semibold text-base uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                <Printer size={20} /> Print Section
              </button>
            </div>

            <div className="prose prose-xl max-w-none text-gray-800 print:prose-lg">
              <p className="lead text-xl mb-10 font-light">
                Buxino Consulting (Pty) Ltd requires all employees, directors and agents to identify, declare and manage conflicts of interest to ensure impartiality and integrity.
              </p>

              <h3 className="text-3xl font-bold text-navy-blue mt-12 mb-6">Declaration Process</h3>
              <ul className="list-disc pl-8 space-y-5 text-xl mb-12">
                <li>All potential conflicts (financial, personal, relational) must be declared in writing</li>
                <li>Annual conflict declaration form required from all staff</li>
                <li>Recusal from decision-making where conflict exists</li>
                <li>Register of declarations maintained by Information Officer</li>
              </ul>

              <p className="text-base text-gray-600 mt-16 print:text-gray-700 font-light">
                Last updated: February 2026 • Version 1.0
              </p>
            </div>
          </section>

          {/* 08. Health & Safety Policy */}
          <section id="safety" className="scroll-mt-20">
            <div className="flex justify-between items-center mb-10 print:hidden">
              <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight text-navy-blue border-l-6 border-gold pl-6">
                08. Health & Safety Policy
              </h2>
              <button
                onClick={() => printSection('safety')}
                className="print-hidden flex items-center gap-3 text-gold hover:text-navy-blue font-semibold text-base uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                <Printer size={20} /> Print Section
              </button>
            </div>

            <div className="prose prose-xl max-w-none text-gray-800 print:prose-lg">
              <p className="lead text-xl mb-10 font-light">
                Buxino Consulting (Pty) Ltd is committed to providing a safe working environment for all employees, learners and visitors, in compliance with the Occupational Health and Safety Act (Act 85 of 1993).
              </p>

              <h3 className="text-3xl font-bold text-navy-blue mt-12 mb-6">Key Measures</h3>
              <ul className="list-disc pl-8 space-y-5 text-xl mb-12">
                <li>Risk assessments conducted for office, travel and event activities</li>
                <li>PPE provided and required where applicable (e.g. learner workshops)</li>
                <li>Vehicle safety checks for VW Caddy (maintenance, insurance)</li>
                <li>Emergency procedures and first-aid trained staff</li>
                <li>Incident reporting and review process in place</li>
              </ul>

              <p className="text-base text-gray-600 mt-16 print:text-gray-700 font-light">
                Last updated: February 2026 • Version 1.0
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Screen-only footer */}
      <footer className="mt-32 py-16 text-center text-lg text-gray-600 border-t print:hidden">
        © 2026 Buxino Consulting (Pty) Ltd • Reg: 2021/965486/07 • Level 1 B-BBEE<br />
        All governance documentation is current as of February 2026
      </footer>
    </div>
  );
}