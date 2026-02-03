"use client";
import React from 'react';

const CompanyStatsSection = () => {
  const stats = [
    { value: "2021", label: "Year Founded" },
    { value: "1", label: "B-BBEE Level" },
    { value: "100%", label: "Black Owned" },
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold">The Blueprint</span>
            <h2 className="text-3xl font-light text-navy-blue mt-2 tracking-tight">Enterprise Credentials</h2>
          </div>
          <div className="h-[1px] flex-grow mx-8 bg-gray-100 hidden md:block mb-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group relative">
              {/* Number - Now Navy Blue for clarity with a Gold underline transition */}
              <div className="text-6xl md:text-7xl font-extralight text-navy-blue mb-4 tracking-tighter transition-transform duration-500 group-hover:-translate-y-2">
                {stat.value}
              </div>
              
              {/* Label - More spacing (tracking) for a premium feel */}
              <div className="uppercase text-gold text-[10px] font-bold tracking-[0.3em]">
                {stat.label}
              </div>

              {/* Subtle accent line that appears on hover */}
              <div className="mt-6 mx-auto w-8 h-[1px] bg-gray-200 group-hover:w-16 group-hover:bg-gold transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStatsSection;