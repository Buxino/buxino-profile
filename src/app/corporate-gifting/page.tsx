"use client";
import React from 'react';
import Image from 'next/image';
import { ExternalLink, CheckCircle, Package, Truck, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const ServiceCard = ({ icon, title, desc }: ServiceCardProps) => (
  <div className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 text-center group">
    <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-500">{icon}</div>
    {/* Solid Navy for Title */}
    <h3 className="text-xl font-black text-navy-blue mb-3 uppercase tracking-tight">{title}</h3>
    {/* Darker Gray for readability */}
    <p className="text-sm text-gray-500 leading-relaxed font-light">{desc}</p>
  </div>
);

const CorporateGifting = () => {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center bg-navy-blue overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/CorporateGifting.png" 
            alt="Buxino Corporate Gifting"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white pt-20">
          <div className="max-w-4xl">
            {/* High-visibility Gold Label */}
            <span className="text-gold font-black tracking-[0.5em] text-[10px] uppercase mb-6 block">
              Strategic Branding Solutions
            </span>
            {/* Pure White Header - No Opacity */}
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.85] text-white">
              Corporate <br/><span className="text-gold italic font-serif lowercase font-light tracking-normal">Gifting</span>
            </h1>
            {/* Solid White Paragraph */}
            <p className="text-lg md:text-xl text-white leading-relaxed mb-10 max-w-2xl font-light">
              Buxino Consulting leverages Africa’s most sophisticated supply chain to deliver 
              bespoke branding solutions that resonate with your corporate identity.
            </p>
            {/* Formal Hyperlink Button */}
            <a 
              href="https://www.promoafrica.com/buxino" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-gold text-navy-blue font-black text-[11px] uppercase tracking-[0.4em] px-10 py-5 hover:bg-white transition-all duration-300 shadow-2xl"
            >
              Explore Catalog <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="text-gold font-black tracking-[0.3em] text-[10px] uppercase mb-4">Procurement Excellence</h4>
              <h2 className="text-4xl md:text-5xl font-black text-navy-blue uppercase mb-8 tracking-tighter leading-tight">
                Strategic Partnership <br/><span className="text-gold italic font-serif lowercase font-light tracking-normal">with Amrod</span>
              </h2>
              <p className="text-navy-blue/80 leading-relaxed mb-10 text-lg font-light">
                Access over 16,000 product SKUs and world-class in-house branding facilities through our established trade partnership.
              </p>
              <ul className="space-y-5">
                {[
                  "Access to R500m+ in physical stock",
                  "18 unique branding techniques",
                  "Seamless logistical execution nationwide",
                  "B-BBEE Level 1 value-add procurement"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-navy-blue font-bold text-[11px] uppercase tracking-[0.2em]">
                    <CheckCircle className="text-gold mt-0.5 flex-shrink-0" size={20} /> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Vibrant Partnership Card */}
            <div className="bg-navy-blue p-16 shadow-2xl flex flex-col items-center justify-center text-center relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gold"></div>
              <span className="text-[9px] uppercase tracking-[0.5em] text-white/50 mb-8 font-black">Official Registered Supplier</span>
              <div className="text-7xl font-black text-white/5 group-hover:text-gold/10 transition-colors duration-700 mb-8 tracking-tighter">AMROD</div>
              <p className="text-white italic font-serif text-xl max-w-xs leading-relaxed">
                "Delivering Excellence through Africa's Premier Trade-Only Partner"
              </p>
              <div className="mt-10 pt-10 border-t border-white/10 w-full">
                 <p className="text-gold font-black text-[10px] uppercase tracking-[0.5em]">Buxino Managed Supply Chain</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center mb-20">
          <h4 className="text-gold font-black tracking-[0.3em] text-[10px] uppercase mb-4">Capabilities</h4>
          <h2 className="text-4xl font-black text-navy-blue uppercase tracking-tighter">Our Gifting Services</h2>
          <div className="h-[1px] w-24 bg-gold mx-auto mt-6"></div>
        </div>
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Package size={40} strokeWidth={1.5} className="text-gold" />}
            title="Curated Selection"
            desc="Strategic selection of apparel, tech, and executive gifts that align with your campaign goals."
          />
          <ServiceCard 
            icon={<ShieldCheck size={40} strokeWidth={1.5} className="text-gold" />}
            title="Quality Branding"
            desc="High-precision branding using the latest CO2 laser, digital printing, and embroidery technology."
          />
          <ServiceCard 
            icon={<Truck size={40} strokeWidth={1.5} className="text-gold" />}
            title="Bulk Fulfillment"
            desc="Efficient handling of high-volume orders with door-to-door delivery throughout Gauteng and beyond."
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-blue py-28 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h4 className="text-gold font-black tracking-[0.3em] text-[10px] uppercase mb-6">Take Action</h4>
          <h3 className="text-3xl md:text-6xl font-black mb-12 uppercase tracking-tighter">Ready to elevate your <br/><span className="italic font-serif text-gold lowercase font-light tracking-normal">brand presence?</span></h3>
          <a 
            href="https://www.promoafrica.com/buxino" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-navy-blue font-black text-[11px] uppercase tracking-[0.4em] px-14 py-6 hover:bg-gold transition-all duration-300"
          >
            Browse the Buxino Portal
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CorporateGifting;