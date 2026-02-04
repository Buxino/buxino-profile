"use client";
import React from 'react';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import OurStorySection from '@/components/OurStorySection';
import SocialInvestmentsSection from '@/components/SocialInvestmentsSection';
import CompanyStatsSection from '@/components/CompanyStatsSection';

export default function Home() {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* Hero starts at the top, Navbar sits over it transparently */}
      <HeroSection
        title="Welcome to Buxino Consulting"
        backgroundImage="IMG_3183.jpg"
        buttonText="About Us"
        buttonLink="/business"
        height="h-[75vh]" 
      />

      <div className="relative z-10 bg-white">
        <CompanyStatsSection />
        
        <div className="container mx-auto px-8">
          <div className="h-[1px] w-full bg-gray-100/60"></div>
        </div>

        <OurStorySection />
        <SocialInvestmentsSection />
      </div>

      <Footer />
    </main>
  );
}