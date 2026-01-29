"use client"; // Required for the print function
import React from 'react';
import { Printer, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LegalPage = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="bg-white min-h-screen">
      <div className="print:hidden">
        <Navbar />
      </div>

      <div className="text-navy-blue pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Header Section */}
          <div className="flex justify-between items-end mb-8 border-b-2 border-gold pb-6">
            <div>
              <h1 className="text-4xl font-bold uppercase tracking-tighter">Legal Compliance</h1>
              <p className="text-gray-500 text-sm mt-2 uppercase tracking-widest">Buxino Consulting (Pty) Ltd</p>
            </div>
            
            {/* Print Button - Hidden when printing */}
            <button 
              onClick={handlePrint}
              className="print:hidden flex items-center gap-2 bg-navy-blue text-white px-5 py-2 hover:bg-gold transition-all font-bold text-xs uppercase tracking-widest shadow-md"
            >
              Print to PDF <Printer size={16} />
            </button>
          </div>

          {/* This header only appears on the printed PDF */}
          <div className="hidden print:block mb-10 text-center border-b pb-6">
            <h1 className="text-3xl font-bold uppercase">Buxino Consulting</h1>
            <p className="text-gray-600">Official Regulatory & Compliance Documentation</p>
            <p className="text-xs text-gray-400 mt-2">Generated on {new Date().toLocaleDateString()}</p>
          </div>

          <section className="space-y-12">
            {/* PAIA Section */}
            <div className="border-l-4 border-gold pl-6">
              <h2 className="text-2xl font-bold uppercase mb-4 flex items-center gap-2">
                01. PAIA Manual
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In accordance with Section 51 of the Promotion of Access to Information Act (No. 2 of 2000), 
                Buxino Consulting maintains a manual that outlines the records held by the company 
                and the process for requesting access to such information.
              </p>
              <p className="text-sm font-semibold text-gold print:text-navy-blue">
                → Requests for the full manual can be directed to the Information Officer below.
              </p>
            </div>

            {/* POPI Section */}
            <div className="border-l-4 border-gold pl-6">
              <h2 className="text-2xl font-bold uppercase mb-4">02. POPIA Alignment</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We prioritize the privacy and security of the data entrusted to us by our clients 
                and partners in the TMT, FMCG, and Media sectors.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="bg-gray-50 p-4 border border-gray-100 print:bg-white print:border-gray-300">
                  <h4 className="font-bold mb-2">Data Collection</h4>
                  <p>We only collect data necessary for strategic consulting and operational execution.</p>
                </div>
                <div className="bg-gray-50 p-4 border border-gray-100 print:bg-white print:border-gray-300">
                  <h4 className="font-bold mb-2">Data Security</h4>
                  <p>All client blueprints and proprietary narratives are stored using industry-standard encryption.</p>
                </div>
              </div>
            </div>

            {/* Terms of Use & Privacy Policy Integration */}
            <div className="border-l-4 border-gold pl-6">
              <h2 className="text-2xl font-bold uppercase mb-4">03. Terms & Privacy Policy</h2>
              <div className="prose prose-sm text-gray-700 max-w-none space-y-4">
                <p>
                  <strong>Usage:</strong> By engaging with Buxino Consulting platforms, users agree to the 
                  confidentiality of proprietary strategic frameworks.
                </p>
                <p>
                  <strong>Liability:</strong> While Buxino Consulting provides high-level financial projections 
                  and retail strategy, final commercial decisions remain the responsibility of the client.
                </p>
              </div>
            </div>

            {/* Information Officer Section */}
            <div className="border-l-4 border-gold pl-6 page-break-before">
              <h2 className="text-2xl font-bold uppercase mb-4">04. Information Officer</h2>
              <p className="text-gray-700 leading-relaxed">
                Designated Information Officer for Buxino Consulting:
              </p>
              <div className="mt-4 p-6 bg-navy-blue text-white rounded-sm print:bg-white print:text-black print:border print:border-gray-300">
                <p className="font-bold text-lg">Bakang Matjila</p>
                <p className="text-sm text-gold print:text-gray-600 font-bold">Founder & CEO / Information Officer</p>
                <p className="text-sm mt-2 font-mono">legal@buxino.co.za</p>
              </div>
            </div>
          </section>

          <footer className="mt-20 pt-10 border-t text-[10px] text-gray-400 uppercase tracking-widest text-center">
            © 2026 Buxino Consulting (Pty) Ltd | Reg: 2021/965486/07
          </footer>
        </div>
      </div>

      <div className="print:hidden">
        <Footer />
      </div>
    </main>
  );
};

export default LegalPage;