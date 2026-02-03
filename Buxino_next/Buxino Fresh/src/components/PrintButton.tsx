"use client";
import React from 'react';
import { Printer } from 'lucide-react';

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button 
      onClick={handlePrint}
      className="group flex items-center gap-3 bg-navy-blue text-white px-6 py-3 hover:bg-gold hover:text-navy-blue transition-all duration-500 shadow-xl"
    >
      <span className="text-[10px] font-black uppercase tracking-[0.3em]">
        Download / Print PDF
      </span>
      <Printer size={16} className="group-hover:rotate-12 transition-transform" />
    </button>
  );
};

export default PrintButton;