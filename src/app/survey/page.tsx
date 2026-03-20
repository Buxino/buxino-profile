"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { ChevronRight, ChevronLeft, CheckCircle2, Send } from 'lucide-react';

const questions = [
  {
    id: 1,
    title: "Primary Objective",
    question: "What is your main goal for engaging with Buxino Consulting?",
    options: ["Brand Identity/Execution", "Business Strategy & Planning", "Corporate Gifting", "Retail Strategy (Licensed Brands)"]
  },
  {
    id: 2,
    title: "Industry Sector",
    question: "Which sector does your business primarily operate in?",
    options: ["FMCG / Retail", "Agriculture / Wine Industry", "Corporate / Finance", "Tech / Startups"]
  }
];

export default function CustomerSurvey() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleNext = () => {
    if (step < questions.length - 1) setStep(step + 1);
    else setStep(questions.length); 
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      
      {/* 1. EDITORIAL HERO SECTION – LIGHTENED */}
      <section className="relative h-[45vh] flex items-center bg-gray-100 overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 opacity-60">
          <Image 
            src="/SurveyPic.png" 
            alt="Buxino Survey"
            fill
            className="object-cover brightness-105"
            priority
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-gray-900 pt-20">
          <div className="max-w-4xl">
            <span className="text-[#c5a059] font-black tracking-[0.5em] text-[10px] uppercase mb-4 block border-l-2 border-[#c5a059] pl-4">
              Strategic Alignment
            </span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-[0.85] text-gray-900">
              Experience <br/><span className="text-[#c5a059] italic font-serif uppercase font-light tracking-normal">Survey</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. SURVEY INTERFACE – LIGHT VERSION */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          {!submitted ? (
            <div className="bg-white border border-gray-200 shadow-md p-12 relative overflow-hidden rounded-xl">
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100">
                <div 
                  className="bg-[#c5a059] h-full transition-all duration-700 ease-in-out" 
                  style={{ width: `${((step + 1) / (questions.length + 1)) * 100}%` }}
                />
              </div>

              {step < questions.length ? (
                <>
                  <div className="flex justify-between items-center mb-10">
                    <span className="text-[10px] font-black text-[#c5a059] uppercase tracking-[0.3em]">
                      Step {questions[step].id} <span className="text-gray-300 mx-2">/</span> {questions.length + 1}
                    </span>
                    <span className="text-[9px] text-gray-500 font-mono uppercase tracking-widest italic">
                      Internal Discovery
                    </span>
                  </div>

                  <h2 className="text-3xl font-black text-gray-900 mb-10 tracking-tighter leading-tight uppercase">
                    {questions[step].question}
                  </h2>

                  <div className="space-y-4">
                    {questions[step].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={handleNext}
                        className="w-full text-left p-6 bg-gray-50 text-gray-900 border border-gray-200 hover:bg-[#c5a059] hover:text-white transition-all duration-300 group flex justify-between items-center rounded-lg shadow-sm hover:shadow-md"
                      >
                        <span className="font-serif italic text-lg">{option}</span>
                        <ChevronRight size={18} className="text-[#c5a059] group-hover:text-white transition-transform group-hover:translate-x-1" />
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <span className="text-[10px] font-black text-[#c5a059] uppercase tracking-[0.3em] mb-4 block">Final Response</span>
                  <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tighter uppercase">
                    Additional Insights for Buxino Consulting?
                  </h2>
                  <textarea 
                    className="w-full p-6 bg-gray-50 border border-gray-200 focus:border-[#c5a059] outline-none text-sm mb-8 italic font-serif resize-none rounded-lg shadow-inner"
                    rows={5}
                    placeholder="Provide any further narrative regarding your experience..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                  <button 
                    onClick={() => setSubmitted(true)}
                    className="bg-gray-900 text-white hover:bg-[#c5a059] hover:text-gray-900 w-full py-5 flex items-center justify-center gap-3 transition-all duration-500 uppercase font-black tracking-[0.4em] text-[11px] rounded-lg shadow-md hover:shadow-lg"
                  >
                    Submit Feedback <Send size={14} />
                  </button>
                </>
              )}

              <div className="mt-12 flex justify-between items-center border-t border-gray-100 pt-8">
                <button 
                  onClick={() => step > 0 && setStep(step - 1)}
                  className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors ${step === 0 ? 'opacity-0 pointer-events-none' : 'text-gray-600 hover:text-[#c5a059]'}`}
                >
                  <ChevronLeft size={14} /> Previous
                </button>
                <div className="h-px w-12 bg-gray-200"></div>
              </div>
            </div>
          ) : (
            <div className="text-center bg-gray-50 p-20 shadow-md relative overflow-hidden rounded-xl border border-gray-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#c5a059]"></div>
              <div className="flex justify-center mb-8">
                <CheckCircle2 size={60} className="text-[#c5a059] stroke-[1px]" />
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-6 uppercase tracking-tighter">Analysis Complete</h2>
              <p className="text-gray-700 mb-10 leading-relaxed font-serif italic text-lg max-w-md mx-auto">
                Your insights help Buxino maintain the gold standard in strategic delivery.
              </p>
              <Link href="/" className="bg-[#c5a059] text-gray-900 px-10 py-4 inline-block uppercase font-black tracking-[0.3em] text-[10px] hover:bg-white transition-colors rounded-lg shadow-md hover:shadow-lg">
                Return to Blueprint
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}