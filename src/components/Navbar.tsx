"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const navItems = [
  {
    name: "Company",
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
    dropdown: [
      { name: "Founder: Bakang Matjila", link: "/governance" },
      { name: "Corporate Credentials", link: "/profile" },
    ],
  },
  {
    name: "Corporate Gifting",
    dropdown: [
      { name: "Amrod Partnership", link: "/corporate-gifting" },
      { name: "View Catalog", link: "https://promoafrica.com/Buxino" },
    ],
  },
  {
    name: "Connect",
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
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-700 z-[9999] ${
          isScrolled || mobileMenuOpen 
            ? "bg-[#001f3f]/95 py-3 border-b border-[#c5a059]/15 shadow-2xl" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-10 flex justify-between items-center">
          
          {/* LEFT SIDE: Logo & Home Button Pair */}
          <div className="flex items-center gap-8">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="relative z-[10001] transition-opacity hover:opacity-80">
              <Image 
                src="/BW_logo.png" 
                alt="Buxino" 
                width={40} 
                height={53} 
                priority 
                className="w-auto h-10 md:h-12" /* Reduced height slightly to pull UI up */
              />
            </Link>
            
            <Link 
              href="/" 
              className="hidden md:block text-[#c5a059] text-[9px] uppercase tracking-[0.45em] font-light hover:text-white transition-colors"
            >
              Home
            </Link>
          </div>

          {/* RIGHT SIDE: Desktop Nav */}
          <div className="hidden md:flex gap-10 font-inter items-center">
            {navItems.map((item) => (
              <div 
                key={item.name}
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
                className="relative"
              >
                <DropdownMenu open={openDropdown === item.name}>
                  <DropdownMenuTrigger className="text-[#c5a059] text-[9px] uppercase tracking-[0.45em] font-light flex items-center gap-1.5 outline-none transition-all hover:text-white">
                    <span>{item.name}</span>
                    <ChevronDown size={7} className="opacity-30" />
                  </DropdownMenuTrigger>
                  
                  <DropdownMenuContent 
                    className="bg-[#001f3f] border border-[#c5a059]/20 min-w-[190px] rounded-none shadow-2xl p-0 z-[10000] animate-in fade-in zoom-in-95 duration-200"
                    align="end"
                  >
                    <div className="h-[1px] w-full bg-[#c5a059]/30"></div>
                    <div className="py-2">
                      {item.dropdown.map((sub) => (
                        <DropdownMenuItem key={sub.name} asChild className="focus:bg-white/[0.03] rounded-none outline-none cursor-pointer">
                          <Link href={sub.link} className="block w-full px-6 py-2.5 text-[8px] text-white/50 hover:text-[#c5a059] uppercase tracking-[0.25em] transition-colors font-light">
                            {sub.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden z-[10001]">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#c5a059] p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#001f3f] md:hidden transition-all duration-500 z-[9998] ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-12">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="border-b border-white/5 py-5 text-[#c5a059] text-[13px] font-light uppercase tracking-[0.3em]"
          >
            Home
          </Link>
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-white/5 py-5">
              <button
                onClick={() => setActiveMobileSection(activeMobileSection === item.name ? null : item.name)}
                className="w-full flex justify-between items-center text-[#c5a059] text-[13px] font-light uppercase tracking-[0.3em]"
              >
                {item.name}
                <ChevronRight size={14} className={`transition-transform duration-500 ${activeMobileSection === item.name ? "rotate-90 text-white" : "text-[#c5a059]/30"}`} />
              </button>
              {activeMobileSection === item.name && (
                <div className="mt-4 space-y-4 flex flex-col border-l border-[#c5a059]/20 ml-1">
                  {item.dropdown.map((sub) => (
                    <Link key={sub.name} href={sub.link} onClick={() => setMobileMenuOpen(false)} className="text-white/40 text-[10px] uppercase tracking-[0.2em] pl-6">
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;