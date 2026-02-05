"use client";
import React from 'react';
import { Minus, ExternalLink } from 'lucide-react';

const ServicesAndPhilosophy = () => {
  const services = [
    {
      title: "Branding & Gifting",
      description: "As an Amrod affiliate, we provide premium quality branded products and strategic identity systems that establish a sophisticated corporate image.",
      link: "/corporate-gifting" // Optional internal link if needed
    },
    {
      title: "Sales Optimization",
      description: "Personalized frameworks designed to increase revenue and reach target markets effectively by focusing on mainstream market sales generation."
    },
    {
      title: "Planning & Registration",
      description: "Professional assistance in navigating business registration, creating 5-year financial plans, and designing effective structural blueprints."
    }
  ];

  return (
    <section className="py-32 bg-white border-t border-gray-50">
      <div className="container mx-auto px-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Left Side: The Service Expertise */}
          <div className="lg:col-span-7">
            <div className="mb-20">
              <span className="text-[#c5a059] uppercase tracking-[0.5em] text-[10px] font-bold">Expertise</span>
              <h2 className="text-[#001f3f] text-4xl md:text-5xl font-light mt-6 tracking-tighter leading-none">
                Our <span className="italic font-serif text-[#c5a059] lowercase">Services</span>
              </h2>
            </div>

            <div className="flex flex-col gap-16">
              {services.map((service, index) => (
                <div key={index} className="group relative pl-8 border-l border-gray-100 hover:border-[#c5a059] transition-colors duration-700">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-[12px] font-bold text-[#001f3f] uppercase tracking-[0.25em]">
                        {service.title}
                    </h3>
                    {index === 0 && <ExternalLink size={12} className="text-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </div>
                  <p className="text-gray-500 font-light leading-relaxed text-[13px] max-w-md">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: The Philosophy (Sticky Card) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="bg-[#001f3f] p-12 text-white relative overflow-hidden shadow-2xl min-h-[400px] flex flex-col justify-between group">
              
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 p-6 opacity-20 transition-transform duration-1000 group-hover:rotate-180">
                <Minus size={60} className="rotate-90 text-[#c5a059]" />
              </div>
              
              <div>
                <h3 className="text-[#c5a059] uppercase tracking-[0.4em] text-[9px] font-bold mb-8">The Purpose</h3>
                <h2 className="text-3xl font-light mb-8 leading-[1.2] italic font-serif text-white/90">
                  Why are we <br/> in business?
                </h2>
                
                <div className="space-y-6 text-[13px] text-white/60 font-light leading-relaxed">
                  <p>
                    It is our contribution to the communities around us—an ode to our philosophy of transforming society at large.
                  </p>
                  <p>
                    We are spearheading a deeper human development agenda in South Africa by identifying and applying <span className="text-[#c5a059] italic font-serif">proudly African solutions.</span>
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
                <div className="h-[1px] w-12 bg-[#c5a059]"></div>
                <span className="text-[9px] uppercase tracking-widest text-[#c5a059]">Buxino Cons.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesAndPhilosophy;