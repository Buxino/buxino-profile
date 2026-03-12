"use client";
import React from 'react';
import { Minus, ExternalLink, Cpu, ShoppingBag, Layers, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ServicesAndPhilosophy = () => {
  const services = [
    {
      title: "Branding & Gifting",
      subtitle: "Strategic Identity Systems",
      description: "As an Amrod affiliate, we leverage premium supply chains to deliver identity systems that move beyond 'merchandise' into sophisticated brand equity tools.",
      link: "/corporate-gifting"
    },
    {
      title: "Event Architecture",
      subtitle: "Corporate Function Management",
      description: "High-impact event planning tailored for the executive tier. From boardroom catering via BuxRamsey to full-scale corporate galas that mirror your institutional prestige.",
      link: "/events"
    },
    {
      title: "Strategic Consulting",
      subtitle: "Revenue Growth Frameworks",
      description: "Engineering personalized commercial playbooks designed to capture mainstream market share and optimize the lead-to-legacy conversion cycle.",
      link: "/retainers"
    },
    {
      title: "Planning & Registration",
      subtitle: "Institutional Blueprinting",
      description: "Navigating the rigors of compliance, business registration, and 5-year financial modeling to ensure your entity is tender-ready and bankable.",
      link: "/registrations"
    }
  ];

  const focusAreas = [
    {
      icon: <Cpu className="text-[#c5a059]" size={24} />,
      title: "TMT Sector",
      subtitle: "Tech & Telecomms",
      desc: "Capitalizing on digital infrastructure. We consult on and invest in high-growth tech narratives."
    },
    {
      icon: <ShoppingBag className="text-[#c5a059]" size={24} />,
      title: "FMCG & Retail",
      subtitle: "Consumer Goods",
      desc: "Driving operational excellence in retail value chains from shelf-space to lean supply principles."
    },
    {
      icon: <Layers className="text-[#c5a059]" size={24} />,
      title: "Financial Services",
      subtitle: "Capital Management",
      desc: "Architecting fiscal structures that ensure long-term net asset value growth and sustainable cash cycles."
    },
    {
      icon: <Globe className="text-[#c5a059]" size={24} />,
      title: "Marketing & Media",
      subtitle: "Strategic Narrative",
      desc: "Positioning brands for elite market entry and long-term equity through the Buxino narrative."
    }
  ];

  return (
    <>
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
                <p className="text-gray-400 mt-6 text-sm font-light max-w-xl italic">
                  We don't just provide services; we engineer corporate advantages. Each vertical is designed to integrate into your existing value chain.
                </p>
              </div>

              <div className="flex flex-col gap-12">
                {services.map((service, index) => (
                  <div key={index} className="group relative pl-8 border-l border-gray-100 hover:border-[#c5a059] transition-colors duration-700">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-[12px] font-bold text-[#001f3f] uppercase tracking-[0.25em]">
                          {service.title}
                      </h3>
                      <Link href={service.link} className="text-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[9px] font-black uppercase tracking-widest">
                        View Details <ArrowRight size={10} />
                      </Link>
                    </div>
                    <p className="text-[#c5a059] text-[10px] uppercase font-medium tracking-widest mb-3">{service.subtitle}</p>
                    <p className="text-gray-500 font-light leading-relaxed text-[13px] max-w-md">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: The Philosophy (Sticky Card) */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="bg-[#001f3f] p-12 text-white relative overflow-hidden shadow-2xl min-h-[450px] flex flex-col justify-between group">
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

      {/* PART 2: INDUSTRY FOCUS AREAS */}
      <section className="py-24 border-t border-gray-100 bg-[#FAFAFA]">
        <div className="container mx-auto px-10 max-w-7xl">
          <div className="mb-16">
            <h4 className="text-[#c5a059] text-[10px] font-black uppercase tracking-[0.4em] mb-4">
              Industry Focus Areas
            </h4>
            <p className="text-[#001f3f] text-sm font-light italic">Aligned with the 2026 Strategic Prospectus</p>
          </div>
          <div className="grid md:grid-cols-4 gap-x-12 gap-y-16">
            {focusAreas.map((sector, idx) => (
              <div key={idx} className="space-y-4">
                <span className="text-[#001f3f]/10 text-4xl font-black block">0{idx + 1}</span>
                <h3 className="text-lg font-black uppercase tracking-tighter text-[#001f3f]">{sector.title}</h3>
                <h5 className="text-[#c5a059] text-[9px] font-bold uppercase tracking-widest">{sector.subtitle}</h5>
                <p className="text-gray-500 text-xs font-serif italic leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesAndPhilosophy;