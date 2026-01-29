"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ChevronDown, Home, Menu, X } from "lucide-react";

const navItems = [
  {
    name: "Company",
    link: "#",
    align: "left",
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
    align: "left",
    dropdown: [
      { name: "Founder: Bakang Matjila", link: "/governance" },
      { name: "Corporate Credentials", link: "/profile" },
    ],
  },
  {
    name: "Corporate Gifting",
    link: "/corporate-gifting",
    align: "right",
    dropdown: [
      { name: "Amrod Partnership", link: "/corporate-gifting" },
      { name: "View Catalog", link: "https://promoafrica.com/Buxino" },
    ],
  },
  {
    name: "Connect",
    link: "#",
    align: "right",
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
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Don't hide navbar if mobile menu is open
      if (!mobileMenuOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full transition-all duration-500 ease-in-out ${
          // Ensure navbar stays visible if menu is open
          (isVisible || mobileMenuOpen) ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${
          isScrolled || mobileMenuOpen
            ? "bg-black/95 backdrop-blur-md border-b border-gold/10 py-2"
            : "bg-gradient-to-b from-black/80 to-transparent py-4"
        }`}
        // Higher Z-index to stay above the overlay
        style={{ zIndex: 100 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          <div className="flex items-center gap-4">
            <Link href="/" className="group flex items-center gap-2 text-white hover:text-gold transition-colors">
               <div className="p-1.5 rounded-full border border-white/10 group-hover:border-gold/30 transition-all">
                  <Home size={16} />
               </div>
               <span className="text-[10px] uppercase tracking-[0.2em] font-bold border-r border-white/10 pr-4 hidden sm:block">
                  Home
               </span>
            </Link>
            
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <div className="flex items-center cursor-pointer">
                <Image src="/BW_logo.png" alt="Logo" width={60} height={80} priority className="object-contain" />
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <div key={i} className="relative group">
                <div className="text-white hover:text-gold flex items-center gap-1 py-2 text-[11px] uppercase tracking-[0.2em] font-medium cursor-pointer">
                  {item.link !== "#" ? <Link href={item.link}>{item.name}</Link> : <span>{item.name}</span>}
                  {item.dropdown.length > 0 && <ChevronDown size={12} />}
                </div>

                {item.dropdown.length > 0 && (
                  <div className={`absolute top-full hidden group-hover:block z-[60] bg-black border border-gold/10 min-w-[200px] py-2 ${item.align === "right" ? "right-0" : "left-0"}`}>
                    {item.dropdown.map((drop, j) => (
                      <Link key={j} href={drop.link} className="block px-4 py-2 text-[10px] text-white hover:text-gold uppercase tracking-widest border-b border-white/5">
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* IMPROVED Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-white p-2 relative z-[110] touch-manipulation"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={32} className="text-gold" /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* IMPROVED Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-[90] transition-all duration-500 ease-in-out md:hidden ${
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col pt-32 px-8 space-y-8 overflow-y-auto h-full pb-10">
          {navItems.map((item, i) => (
            <div key={i} className="border-b border-white/10 pb-4">
              <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-4 font-bold">{item.name}</p>
              <div className="flex flex-col space-y-4 pl-2">
                {item.dropdown.map((drop, j) => (
                  <Link 
                    key={j} 
                    href={drop.link} 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="text-white text-base uppercase tracking-wider active:text-gold"
                  >
                    {drop.name}
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