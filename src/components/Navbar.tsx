"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ChevronDown, Home, Menu, X } from "lucide-react"; // Added Menu and X icons

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // NEW: State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-gold/10 py-2"
            : "bg-gradient-to-b from-black/80 to-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* Logo & Home */}
          <div className="flex items-center gap-4">
            <Link href="/" className="group flex items-center gap-2 text-white hover:text-gold transition-colors">
               <div className="p-1.5 rounded-full border border-white/10 group-hover:border-gold/30 transition-all">
                  <Home size={16} />
               </div>
               <span className="text-[10px] uppercase tracking-[0.2em] font-bold border-r border-white/10 pr-4 hidden sm:block">
                  Home
               </span>
            </Link>
            
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <Image src="/BW_logo.png" alt="Logo" width={60} height={80} priority className="object-contain" />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
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

          {/* Mobile Menu Toggle (THE FIX) */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay (THE MISSING PIECE) */}
      <div className={`fixed inset-0 z-[40] bg-black transition-transform duration-500 md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col pt-24 px-8 space-y-6">
          {navItems.map((item, i) => (
            <div key={i} className="border-b border-white/10 pb-4">
              <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-4 font-bold">{item.name}</p>
              <div className="flex flex-col space-y-3 pl-2">
                {item.dropdown.map((drop, j) => (
                  <Link key={j} href={drop.link} onClick={() => setMobileMenuOpen(false)} className="text-white text-sm uppercase tracking-wider hover:text-gold">
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