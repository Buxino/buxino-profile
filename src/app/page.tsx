"use client";
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'; // Assuming you have the Navbar component
import HeroSection from '@/components/HeroSection';
import CompanyStatsSection from '@/components/CompanyStatsSection'; // Keep your existing stats section
import OurStorySection from '@/components/OurStorySection';
import ServicesAndPhilosophy from '@/components/ServicesAndPhilosophy';

export default function Home() {
  return (
    <main className="bg-white min-h-screen font-sans">
      
      {/* 1. Navbar (Overlay) */}
      <Navbar />

      {/* 2. Hero (The Hook) */}
      <HeroSection
        title="Welcome to Buxino Consulting"
        backgroundImage="IMG_3183.jpg"
        buttonText="Our Business"
        buttonLink="/business"
        height="h-[80vh]" 
      />

      {/* 3. The Main Content Flow */}
      <div className="relative z-10 bg-white">
        
        {/* Step A: Credibility */}
        <CompanyStatsSection />
        
        {/* Step B: Separator */}
        <div className="container mx-auto px-10">
          <div className="h-[1px] w-full bg-gray-100/60"></div>
        </div>

        {/* Step C: Context (Founder/Story) */}
        <OurStorySection />

        {/* Step D: Execution (Services & Philosophy) */}
        <ServicesAndPhilosophy />

      </div>

      <Footer />
    </main>
  );
}