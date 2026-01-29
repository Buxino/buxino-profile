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
      {/* 1. Transparent Navbar with Home Button */}

      {/* 2. Hero Section: Image First, Typography Below */}
      <div className="pt-24 lg:pt-32">
        <HeroSection
          title="Welcome to Buxino Consulting"
          backgroundImage="IMG_3183.jpg"
          buttonText="About Us"
          buttonLink="/business"
          height="h-[65vh]" 
        />
      </div>

      {/* 3. Logical Narrative Flow */}
      <div className="space-y-0">
        
        {/* Company Stats acts as the immediate 'Credentials' anchor */}
        <CompanyStatsSection />
        
        {/* Subtle separator for seamless transition */}
        <div className="container mx-auto px-8">
          <div className="h-[1px] w-full bg-gray-100/60"></div>
        </div>

        {/* Narrative sections */}
        <OurStorySection />
        
        <SocialInvestmentsSection />
      </div>

      {/* 4. Global Footer */}
      <Footer />
    </main>
  );
}