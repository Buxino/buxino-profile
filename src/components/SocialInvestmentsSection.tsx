"use client";
import React from 'react';
import { Minus } from 'lucide-react';

const SocialInvestmentsSection = () => {
  const services = [
    {
      title: "Branding & Gifting",
      description: "As an Amrod affiliate, we provide premium quality branded products and strategic identity systems that establish a sophisticated corporate image."
    },
    {
      title: "Sales Optimization",
      description: "Personalized frameworks designed to increase revenue and reach target markets effectively by focusing on mainstream market sales generation."
    },
    {
      title: "Planning & Registration",
      description: "Professional assistance in navigating business registration and creating 5-year financial plans and effective structural blueprints."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Service Grid */}
          <div className="lg:col-span-8">
            <div className="mb-12">
              <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold">Expertise</span>
              <h2 className="text-3xl font-light text-navy-blue mt-2 tracking-tight">Our Services</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-[1px] w-6 bg-gold transition-all duration-500 group-hover:w-10"></div>
                    <h3 className="text-sm font-bold text-navy-blue uppercase tracking-widest italic">
                        {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 font-light leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Philosophy Card */}
          <div className="lg:col-span-4">
            <div className="bg-navy-blue p-10 text-white relative overflow-hidden shadow-2xl">
              {/* Subtle Watermark */}
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Minus size={40} className="rotate-90 text-gold" />
              </div>
              
              <h3 className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6">The Purpose</h3>
              <h2 className="text-2xl font-light mb-8 leading-tight italic font-serif">
                Why are we <br/> in business?
              </h2>
              
              <div className="space-y-6 text-sm text-white/70 font-light leading-relaxed">
                <p>
                  It is our contribution to the communities around us—an ode to our philosophy of transforming society at large.
                </p>
                <p>
                  We are spearheading a deeper human development agenda in South Africa by identifying and applying <span className="text-gold italic">proudly African solutions.</span>
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10">
                <div className="h-1 w-8 bg-gold"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialInvestmentsSection;