"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ChevronDown, Home, Menu, X, ChevronRight } from "lucide-react";

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
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);

  const toggleSection = (name: string) => {
    setActiveMobileSection(activeMobileSection === name ? null : name);
  };

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Stay visible if menu is open
      if (!mobileMenuOpen) {
        setIsVisible(window.scrollY <= 100 || window.scrollY < 20);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full transition-all duration-300 ${
          isScrolled || mobileMenuOpen ? "bg-black/95 py-2" : "bg-transparent py-4"
        } ${isVisible || mobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
        style={{ zIndex: 9999 }} // Forced to the very top
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image src="/BW_logo.png" alt="Buxino" width={50} height={70} priority className="object-contain" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group pt-2">
                <button className="text-white text-[11px] uppercase tracking-widest flex items-center gap-1">
                  {item.name} <ChevronDown size={12} />
                </button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-black border border-white/10 min-w-[200px] mt-2">
                  {item.dropdown.map((sub) => (
                    <Link key={sub.name} href={sub.link} className="block p-4 text-[10px] text-white hover:bg-white/5 uppercase tracking-tighter">
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Toggle Button - EXTREME PRIORITY */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation(); // Stops the Hero section from stealing the click
              setMobileMenuOpen(!mobileMenuOpen);
            }} 
            className="md:hidden text-white p-4 -mr-4 relative"
            style={{ zIndex: 10000, touchAction: 'manipulation' }}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={32} className="text-gold" /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black md:hidden transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 9990 }}
      >
        <div className="flex flex-col h-full pt-32 px-8 overflow-y-auto pb-10">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-white/5 py-5">
              <button 
                onClick={() => toggleSection(item.name)}
                className="w-full flex justify-between items-center text-white text-xl font-light uppercase tracking-[0.2em]"
              >
                {item.name}
                <ChevronRight className={`transition-transform duration-300 ${activeMobileSection === item.name ? "rotate-90 text-gold" : ""}`} />
              </button>
              
              <div className={`mt-6 space-y-5 overflow-hidden transition-all duration-300 ${
                activeMobileSection === item.name ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}>
                {item.dropdown.map((sub) => (
                  <Link 
                    key={sub.name} 
                    href={sub.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-white/70 text-sm uppercase tracking-widest pl-4 active:text-gold"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;