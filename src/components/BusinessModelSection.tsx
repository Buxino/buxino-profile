// import React from 'react';
// import Link from 'next/link';

// const BusinessModelSection = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-navy-blue mb-8">OUR BUSINESS MODEL</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           <div className="col-span-1 md:col-span-2">
//             <p className="text-gray-700 mb-6">
//               As a consultancy-based Company, we operate on a simple business model and flat structure, which is geared towards long-term consulting whilst appreciating opportunities that can realise short-term revenue generation. Our strategic objective is to grow our net asset value, cash flows and revenue across all our investments in line with our 5-year strategic plan.
//             </p>

//             <Link href="/investments">
//               <div className="inline-block gold-button mb-6">See All Our Services</div>
//             </Link>

//             <p className="text-gray-700 mb-6">
//               To maximise short-term revenue generation opportunities, the company has established operating business units to unlock more value and leverage the value chains further down in the sectors where we have a vested interest. BuxRamsy, our catering division which will focus on event and personal catering. Buxino In The Mino, which will focus more on artist management et al.
//             </p>

//             <p className="text-gray-700">
//               The key strategic sectors where we operate are Financial Services, Marketing, Sales (retail | fast moving consumer goods), Technology Media & Telecomms.
//             </p>
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BusinessModelSection;

"use client";
import React from 'react';
import HeroSection from '@/components/HeroSection';

const OurBusinessPage = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. HERO - Use a high-quality photo here, not a logo file */}
      <HeroSection 
        title="Inside Buxino Consulting" 
        backgroundImage="CorporateOffice.png" // Use your high-res office/interior photo
        buttonText="View Our Values"
        buttonLink="/values"
        height="h-[60vh]"
      />

      {/* 2. PHYSICAL PRESENCE (The Space) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h4 className="gold-accent mb-4">The Environment</h4>
          <h2 className="text-3xl md:text-4xl font-light text-navy-blue mb-8 uppercase tracking-tight">
            A Space for <span className="italic font-serif">Strategic Thinking</span>
          </h2>
          <p className="text-gray-500 font-light text-lg leading-relaxed mb-12">
            Located in the heart of Gauteng, our offices reflect the precision and 
            transparency we bring to every engagement. Traditional corporate excellence 
            meets contemporary innovation in a space designed for the next generation of industry leaders.
          </p>
          <div className="h-[1px] w-24 bg-gold mx-auto"></div>
        </div>
      </section>

      {/* 3. THE BLUEPRINT METHODOLOGY (Dark Section) */}
      <section className="bg-navy-blue py-24 text-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-6">
              <h4 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6">Execution</h4>
              <h3 className="text-3xl md:text-4xl font-light mb-8 leading-tight">
                The Blueprint <br/><span className="italic font-serif">Methodology</span>
              </h3>
              
              <p className="text-white/70 font-light mb-10 leading-relaxed">
                We operate across three core strategic pillars, utilizing a flat, agile structure to move with the speed of your market.
              </p>

              <div className="space-y-8">
                {[
                  { id: "01", title: "Operational Excellence", desc: "Applying corporate lean principles to supply chains." },
                  { id: "02", title: "Strategic Narrative", desc: "Bridging the gap between heritage and modern expectations." },
                  { id: "03", title: "Market Disruption", desc: "Data-driven business intelligence frameworks." }
                ].map((pillar) => (
                  <div key={pillar.id} className="flex gap-6 group">
                    <span className="text-gold font-serif italic text-2xl opacity-50 group-hover:opacity-100 transition-opacity">
                      {pillar.id}
                    </span>
                    <div>
                      <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-2">{pillar.title}</h5>
                      <p className="text-white/50 font-light text-sm">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visualizing the Cycle */}
            <div className="lg:col-span-6 relative">
              <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm">
                <h4 className="text-center text-[10px] uppercase tracking-widest text-gold mb-8">The Engagement Cycle</h4>
                {/* Instead of a blurry PNG, we use a clean container for your diagram.
                  Ensure BC_diagram.png is a high-resolution export.
                */}
                <div className="relative aspect-square w-full flex items-center justify-center">
                   <img 
                    src="/BC_diagram.png" 
                    alt="Buxino Engagement Cycle" 
                    className="w-full h-auto object-contain brightness-110 contrast-110" 
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. REFINED PHILOSOPHY TIERS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "Integrity", desc: "Ensuring transparency and compliance at every level of consulting." },
              { title: "Heritage", desc: "Drawing from our roots to inform global decisions with authentic perspective." },
              { title: "Innovation", desc: "Tech-forward strategies to future-proof client balance sheets." }
            ].map((item) => (
              <div key={item.title} className="group">
                <div className="w-10 h-[1px] bg-gold mb-6 group-hover:w-20 transition-all duration-500"></div>
                <h4 className="text-navy-blue text-lg font-bold uppercase tracking-widest mb-4">{item.title}</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurBusinessPage;