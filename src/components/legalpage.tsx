import React from 'react';
import { Separator } from "@/components/ui/separator";

const LegalLandingPage = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <section className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-blue mb-2">Legal & Compliance</h1>
          <p className="text-gray-600 uppercase tracking-widest text-sm font-semibold">Buxino Consulting (Pty) Ltd</p>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-12 max-w-4xl">
        <div className="space-y-12">
          
          {/* PAIA & POPI Section */}
          <div>
            <h2 className="text-2xl font-bold text-navy-blue mb-4 uppercase tracking-tight">01. PAIA & POPIA Manual</h2>
            <Separator className="mb-6 bg-gold" />
            <p className="text-gray-700 leading-relaxed mb-4">
              In accordance with the Promotion of Access to Information Act (PAIA) and the Protection of Personal Information Act (POPIA), Buxino Consulting is committed to transparency and the protection of client data.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a strategic consultancy working within Financial Services and TMT, we handle sensitive corporate intelligence. Our manual outlines the procedures for requesting access to information held by Buxino Consulting and describes how we process personal data to ensure the highest levels of privacy and legal compliance.
            </p>
            <button className="mt-4 text-gold font-bold hover:underline">Download Buxino PAIA Manual (PDF)</button>
          </div>
             <a 
               href="/PAIA-Manual-Buxino-Consulting.pdf" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-sm font-semibold text-gold cursor-pointer hover:underline flex items-center gap-2"
             >
              <span>→</span> Download Section 51 PAIA Manual (PDF)
            </a>
          {/* Terms of Use */}
          <div>
            <h2 className="text-2xl font-bold text-navy-blue mb-4 uppercase tracking-tight">02. Terms of Use</h2>
            <Separator className="mb-6 bg-gold" />
            <p className="text-gray-700 leading-relaxed">
              By accessing the Buxino Consulting website and utilizing our digital "Blueprinted" resources, you agree to comply with our professional terms. All intellectual property, including strategy frameworks and proprietary consulting methodologies displayed on this site, are the exclusive property of Buxino Consulting (Pty) Ltd.
            </p>
          </div>

          {/* Email Disclaimer */}
          <div className="bg-navy-blue text-white p-8 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4 uppercase text-gold">Corporate Email Disclaimer</h2>
            <p className="text-sm leading-relaxed opacity-90">
              The information contained in any communication sent from <strong>consulting@buxino.co.za</strong> is confidential and may be legally privileged. It is intended solely for the use of the individual or entity to whom it is addressed. If you are not the intended recipient, you are hereby notified that any disclosure, copying, distribution, or taking action in reliance of the contents of this information is strictly prohibited and may be unlawful. 
            </p>
            <p className="text-sm mt-4 opacity-70">
              © 2026 Buxino Consulting (Pty) Ltd. Registered in South Africa.
            </p>
          </div>

          {/* Quality Policy */}
          <div>
            <h2 className="text-2xl font-bold text-navy-blue mb-4 uppercase tracking-tight">03. Quality & ISO Alignment</h2>
            <Separator className="mb-6 bg-gold" />
            <p className="text-gray-700 leading-relaxed">
              Buxino Consulting strives for operational excellence in line with ISO 9001 standards. Our quality policy is centered on the continuous improvement of our consulting delivery, ensuring that our strategic advice consistently adds measurable value to the balance sheets of our stakeholders.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default LegalLandingPage;