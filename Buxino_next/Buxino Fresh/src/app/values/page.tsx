"use client";
import React from 'react';
import Footer from '@/components/Footer';

const ValuesPage = () => {
  const values = [
    { title: "Agility", desc: "Prioritizing speed and adaptability without compromising on precision." },
    { title: "Transformation", desc: "Uplifting communities surrounding the businesses we serve." },
    { title: "Integrity", desc: "Transparency as our baseline, operating with a governance-first mindset." },
    { title: "Innovation", desc: "Utilizing global tech to solve uniquely African business challenges." }
  ];

  return (
    <main className="bg-white min-h-screen">
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <h4 className="gold-accent mb-2 text-center">The Buxino Code</h4>
          <h1 className="text-navy-blue text-5xl font-light text-center uppercase tracking-tighter mb-16">
            Core <span className="italic font-serif">Values</span>
          </h1>

          {/* VIBRANT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-100 shadow-2xl">
            {values.map((val, index) => (
              <div 
                key={index} 
                className={`p-12 transition-all duration-500 group 
                  ${index % 3 === 0 ? 'bg-navy-blue text-white' : 'bg-white text-navy-blue'}
                  ${index === 1 || index === 2 ? 'bg-gray-50' : ''}
                `}
              >
                <div className="flex justify-between items-start mb-8">
                  <span className={`text-5xl font-serif italic ${index % 3 === 0 ? 'text-gold' : 'text-navy-blue/10 group-hover:text-gold'}`}>
                    0{index + 1}
                  </span>
                  <div className={`h-8 w-8 border ${index % 3 === 0 ? 'border-gold/30' : 'border-navy-blue/10'} rounded-full flex items-center justify-center`}>
                    <div className="h-1.5 w-1.5 bg-gold rounded-full"></div>
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold uppercase tracking-widest mb-4 ${index % 3 === 0 ? 'text-white' : 'text-navy-blue'}`}>
                  {val.title}
                </h3>
                <p className={`font-light leading-relaxed ${index % 3 === 0 ? 'text-white/70' : 'text-gray-500'}`}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ValuesPage;