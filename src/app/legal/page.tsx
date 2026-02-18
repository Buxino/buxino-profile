"use client"; // Still needed for window.print() and any client-side interactivity

import React from 'react';
import { Printer } from 'lucide-react';
import LegalLandingPage from '@/components/ComplianceHub'; // <-- This is the key import
import Footer from '@/components/Footer';

const LegalPage = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="bg-white min-h-screen">
      {/* The reusable legal content component */}
      <LegalLandingPage />

      {/* Footer – hidden when printing */}
      <div className="print:hidden">
        <Footer />
      </div>
    </main>
  );
};

export default LegalPage;