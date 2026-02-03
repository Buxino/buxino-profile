"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";

// --- UI COMPONENT LINKS ---
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    name: "Company",
    link: "#",
    dropdown: [
      { name: "Our Business", link: "/business" },
      { name: "Our Vision", link: "/milestones" },
      { name: "Our Values", link: "/values" },
      { name: "Investments", link: "/investments" },
      { name: "Company Profile", link: "/profile" },
      { name: "Buxino Wines", link: "/buxino_wines" },
    ],
  },
  {
    name: "Governance",
    link: "#",
    dropdown: [
      { name: "Founder: Bakang Matjila", link: "/governance" },
      { name: "Corporate Credentials", link: "/profile" },
    ],
  },
  {
    name: "Corporate Gifting",
    link: "/corporate-gifting",
    dropdown: [
      { name: "Amrod Partnership", link: "/corporate-gifting" },
      { name: "View Catalog", link: "https://promoafrica.com/Buxino" },
    ],
  },
  {
    name: "Connect",
    link: "#",
    dropdown: [
      { name: "Contact Us", link: "/connect/contact-information" },
      { name: "Customer Survey", link: "/survey" },
      { name: "Careers", link: "/careers" },
    ],
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Improved Scroll Lock for Mobile Devices
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-300 ${
          isScrolled || mobileMenuOpen ? "bg-navy-blue py-3 shadow-xl" : "bg-transparent py-5"
        }`}
        style={{ zIndex: 10000 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo - Linked to Home */}
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="relative z-[10001]">
            <Image 
              src="/BW_logo.png" 
              alt="Buxino" 
              width={55} 
              height={75} 
              priority 
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav - Using your 'luxury' tracking */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group pt-2">
                <button className="text-white text-[11px] uppercase tracking-luxury flex items-center gap-1 hover:text-gold transition-colors">
                  {item.name} <ChevronDown size={12} />
                </button>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 hidden group-hover:block bg-navy-blue border border-white/10 min-w-[220px] mt-2 shadow-2xl z-[10002]">
                  {item.dropdown.map((sub) => (
                    <Link 
                      key={sub.name} 
                      href={sub.link} 
                      className="block p-4 text-[10px] text-white hover:bg-white/10 hover:text-gold uppercase tracking-widest transition-all border-b border-white/5 last:border-0"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Toggle Button - Using your UI Button Component */}
          <div className="md:hidden z-[10001]">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-white hover:bg-white/10 focus:outline-none touch-manipulation"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={32} className="text-gold" /> : <Menu size={32} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay using Accordion UI */}
      <div
        className={`fixed inset-0 bg-navy-blue md:hidden transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 9999 }}
      >
        <div className="flex flex-col h-full pt-32 px-10 overflow-y-auto pb-20 scrollbar-hide">
          <Accordion type="single" collapsible className="w-full">
            {navItems.map((item) => (
              <AccordionItem key={item.name} value={item.name} className="border-b border-white/10 py-2">
                <AccordionTrigger className="text-white text-xl font-light uppercase tracking-header hover:no-underline hover:text-gold">
                  {item.name}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-6 pt-4 pb-6">
                  {item.dropdown.map((sub) => (
                    <Link 
                      key={sub.name} 
                      href={sub.link} 
                      onClick={() => setMobileMenuOpen(false)} 
                      className="block text-white/60 text-sm uppercase tracking-widest pl-4 active:text-gold transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Navbar;