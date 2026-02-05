"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import OurStorySection from '@/components/OurStorySection';
import SocialInvestmentsSection from '@/components/ServicesAndPhilosophy';
import CompanyStatsSection from '@/components/CompanyStatsSection';

/** * CRITICAL FIX: Using a relative path for MilestonesSection 
 * to resolve the TypeScript / Next.js 16 build alias conflict.
 */
import MilestonesSection from '../components/MilestonesSection';

export default function Home() {
  return (
    <main className="bg-white min-h-screen font-sans overflow-x-hidden">
      {/* 1. Navbar: Global Navigation */}
      <Navbar />

      {/* 2. Hero Section: Primary Brand Impression */}
      <div className="pt-24 lg:pt-32">
        <HeroSection
          title="Welcome to Buxino Consulting"
          backgroundImage="/IMG_3183.jpg" // Ensure leading slash for public assets
          buttonText="About Us"
          buttonLink="/business"
          height="h-[65vh]" 
        />
      </div>

      {/* 3. Logical Narrative Flow */}
      <div className="space-y-0">
        
        {/* Company Stats: Credentials Anchor */}
        <CompanyStatsSection />
        
        {/* Minimalist Section Separator */}
        <div className="container mx-auto px-8">
          <div className="h-[1px] w-full bg-gray-100/60"></div>
        </div>

        {/* Narrative: The Buxino Story */}
        <OurStorySection />

        {/* Trajectory: Milestones & Growth */}
        <MilestonesSection />
        
        {/* Corporate Citizenship: Social Investments */}
        <SocialInvestmentsSection />
      </div>

      {/* 4. Global Footer */}
      <Footer />
    </main>
  );
}