"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
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
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative h-[45vh] flex items-center bg-navy-blue overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/SurveyPic.png" 
            alt="Buxino Survey"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white pt-20">
          <div className="max-w-4xl">
            <span className="text-gold font-black tracking-[0.5em] text-[10px] uppercase mb-4 block border-l-2 border-gold pl-4">
              Strategic Alignment
            </span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-[0.85] text-white">
              Experience <br/><span className="text-gold italic font-serif uppercase font-light tracking-normal">Survey</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. SURVEY INTERFACE */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-2xl mx-auto px-6">
          {!submitted ? (
            <div className="bg-white border border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-12 relative overflow-hidden">
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100">
                <div 
                  className="bg-gold h-full transition-all duration-700 ease-in-out" 
                  style={{ width: `${((step + 1) / (questions.length + 1)) * 100}%` }}
                />
              </div>

              {step < questions.length ? (
                <>
                  <div className="flex justify-between items-center mb-10">
                    <span className="text-[10px] font-black text-gold uppercase tracking-[0.3em]">
                      Step {questions[step].id} <span className="text-gray-300 mx-2">/</span> {questions.length + 1}
                    </span>
                    <span className="text-[9px] text-gray-400 font-mono uppercase tracking-widest italic">
                      Internal Discovery
                    </span>
                  </div>

                  <h2 className="text-3xl font-black text-navy-blue mb-10 tracking-tighter leading-tight uppercase">
                    {questions[step].question}
                  </h2>

                  <div className="space-y-4">
                    {questions[step].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={handleNext}
                        /* UPDATED: Blocks are now permanently Navy Blue with White text */
                        className="w-full text-left p-6 bg-navy-blue text-white border border-navy-blue hover:bg-gold hover:text-navy-blue transition-all duration-300 group flex justify-between items-center shadow-lg"
                      >
                        <span className="font-serif italic text-lg">{option}</span>
                        <ChevronRight size={18} className="text-gold group-hover:text-navy-blue transition-transform group-hover:translate-x-1" />
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <span className="text-[10px] font-black text-gold uppercase tracking-[0.3em] mb-4 block">Final Response</span>
                  <h2 className="text-3xl font-black text-navy-blue mb-8 tracking-tighter uppercase">
                    Additional Insights for Bakang?
                  </h2>
                  <textarea 
                    className="w-full p-6 bg-gray-50 border border-gray-100 focus:border-gold outline-none text-sm mb-8 italic font-serif resize-none shadow-inner"
                    rows={5}
                    placeholder="Provide any further narrative regarding your experience..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                  <button 
                    onClick={() => setSubmitted(true)}
                    className="bg-navy-blue text-white hover:bg-gold hover:text-navy-blue w-full py-5 flex items-center justify-center gap-3 transition-all duration-500 uppercase font-black tracking-[0.4em] text-[11px] shadow-xl"
                  >
                    Submit Feedback <Send size={14} />
                  </button>
                </>
              )}

              <div className="mt-12 flex justify-between items-center border-t border-gray-50 pt-8">
                <button 
                  onClick={() => step > 0 && setStep(step - 1)}
                  className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors ${step === 0 ? 'opacity-0 pointer-events-none' : 'text-gray-400 hover:text-gold'}`}
                >
                  <ChevronLeft size={14} /> Previous
                </button>
                <div className="h-px w-12 bg-gray-100"></div>
              </div>
            </div>
          ) : (
            <div className="text-center bg-navy-blue p-20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
              <div className="flex justify-center mb-8">
                <CheckCircle2 size={60} className="text-gold stroke-[1px]" />
              </div>
              <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">Analysis Complete</h2>
              <p className="text-gray-300 mb-10 leading-relaxed font-serif italic text-lg max-w-md mx-auto">
                Your insights help Buxino maintain the gold standard in strategic delivery.
              </p>
              <Link href="/" className="bg-gold text-navy-blue px-10 py-4 inline-block uppercase font-black tracking-[0.3em] text-[10px] hover:bg-white transition-colors">
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