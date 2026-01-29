"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ChevronDown, Home } from "lucide-react";

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
      { name: "Company Profile", link: "/profile" }, // New addition for easy access
      { name: "Buxino Wines", link: "/buxino_wines" },
    ],
  },
  {
    name: "Governance",
    link: "#",
    align: "left",
    dropdown: [
      { name: "Founder: Bakang Matjila", link: "/governance" },
      { name: "Corporate Credentials", link: "/profile" }, // Links to the profile containing the 15yr history
    ],
  },
  {
    name: "Corporate Gifting",
    link: "/corporate-gifting",
    align: "right",
    dropdown: [
      { name: "Amrod Partnership", link: "/corporate-gifting" },
      { name: "View Catalog", link: "https://promoafrica.com/Buxino" }, // Updated with document URL
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
        
        {/* Logo & Home Combination */}
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
            <div className="flex items-center cursor-pointer transition-opacity hover:opacity-80">
              <Image
                src="/BW_logo.png"
                alt="Buxino Consulting"
                width={80}
                height={110}
                priority
                className="object-contain"
              />
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <div key={i} className="relative nav-item group">
              <div className="text-white hover:text-gold flex items-center gap-1 py-2 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer">
                {item.link !== "#" ? (
                  <Link href={item.link}>{item.name}</Link>
                ) : (
                  <span>{item.name}</span>
                )}
                {item.dropdown.length > 0 && (
                  <ChevronDown size={12} className="opacity-50 group-hover:rotate-180 transition-transform duration-300" />
                )}
              </div>

              {item.dropdown.length > 0 && (
                <div className={`
                  absolute top-full pt-4 hidden group-hover:block z-[60] animate-in fade-in slide-in-from-top-2
                  ${item.align === "right" ? "right-0" : "left-0"}
                `}>
                  <div className="bg-navy-blue shadow-2xl border border-gold/10 min-w-[240px] py-3">
                    <ul className="flex flex-col">
                      {item.dropdown.map((dropItem, j) => (
                        <li key={j}>
                          <Link
                            href={dropItem.link}
                            className="block px-6 py-3 text-white/80 hover:bg-gold/10 hover:text-gold text-[10px] uppercase tracking-widest transition-all border-b border-white/5 last:border-0"
                          >
                            {dropItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white">
          <button className="p-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;