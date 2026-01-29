"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const VisionPage = () => {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* Reduced padding from pt-48 to pt-32 for a tighter look */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h4 className="gold-accent mb-2">Strategic Framework</h4>
          <h1 className="text-navy-blue text-5xl md:text-6xl font-light uppercase tracking-tighter">
            Vision & <span className="italic font-serif text-gold">Mission</span>
          </h1>
        </div>
      </section>

      <section className="pb-24 container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start border-t border-gray-100 pt-12">
          {/* Mission */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-blue uppercase tracking-tight">Mission</h2>
            <p className="text-gray-500 font-light leading-relaxed text-lg">
              To engineer sustainable growth through precision advisory, bridging the gap between traditional industry heritage and modern economic demands.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-blue uppercase tracking-tight">Vision</h2>
            <p className="text-gray-500 font-light leading-relaxed text-lg">
              Becoming Africa’s foremost strategic partner, leading the continent's business transformation one balance sheet at a time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default VisionPage;