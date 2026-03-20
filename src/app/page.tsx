"use client";

import React from 'react';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CompanyStatsSection from '@/components/CompanyStatsSection';
import OurStorySection from '@/components/OurStorySection';
import ServicesAndPhilosophy from '@/components/ServicesAndPhilosophy';

export default function Home() {
  return (
    <main className="bg-white min-h-screen font-sans scroll-smooth scroll-pt-20 md:scroll-pt-24">
      
      {/* NO NAVBAR HERE – it's already in RootLayout */}

      {/* Hero – padded to clear fixed Navbar */}
      <div className="pt-20 md:pt-24">
        <HeroSection
          title="Welcome to Buxino Consulting"
          backgroundImage="BuxinoConsultingBanner.png"
          buttonText="Our Business"
          buttonLink="/business"
          height="h-[80vh]"
        />
      </div>

      {/* Main Content Flow */}
      <div className="relative z-10 bg-white">
        
        <CompanyStatsSection />
        
        <div className="container mx-auto px-10">
          <div className="h-[1px] w-full bg-gray-100/60"></div>
        </div>

        <OurStorySection />

        <ServicesAndPhilosophy />

      </div>

      <Footer />
    </main>
  );
}