"use client";

import React from 'react';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CompanyStatsSection from '@/components/CompanyStatsSection';
import OurStorySection from '@/components/OurStorySection';
import ServicesAndPhilosophy from '@/components/ServicesAndPhilosophy';

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen font-sans scroll-smooth scroll-pt-20 md:scroll-pt-24">
      
      {/* Navbar is in RootLayout – no duplicate here */}

      {/* Hero – NO height prop */}
      <HeroSection
        title="Welcome to Buxino Consulting"
        backgroundImage="BuxinoConsultingBanner.png"
        buttonText="Our Business"
        buttonLink="/business"
      />

      {/* Main Content */}
      <div className="relative z-10 bg-white">
        <CompanyStatsSection />
        
        <div className="container mx-auto px-6 md:px-10">
          <div className="h-px w-full bg-gray-200"></div>
        </div>

        <OurStorySection />
        <ServicesAndPhilosophy />
      </div>

      <Footer />
    </main>
  );
}