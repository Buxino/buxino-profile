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
  // State to track which dropdown is open via hover
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-500 z-[9999] ${
          isScrolled || mobileMenuOpen ? "bg-black/95 py-3 border-b border-white/10" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="relative z-[10001]">
            <Image src="/BW_logo.png" alt="Buxino" width={45} height={60} priority />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <div 
                key={item.name}
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
                className="relative"
              >
                <DropdownMenu open={openDropdown === item.name}>
                  {/* Changed text-white to text-[#D4AF37] so the text IS gold */}
                  <DropdownMenuTrigger className="text-[#D4AF37] text-[9px] uppercase tracking-[0.4em] font-medium flex items-center gap-2 outline-none group">
                    <span>{item.name}</span>
                    <ChevronDown size={10} className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </DropdownMenuTrigger>
                  
                  <DropdownMenuContent 
                    className="bg-black border border-white/10 min-w-[240px] rounded-none shadow-2xl p-0 z-[10000]"
                  >
                    <div className="h-[1px] w-full bg-[#D4AF37]"></div>
                    <div className="py-2">
                      {item.dropdown.map((sub) => (
                        <DropdownMenuItem key={sub.name} asChild className="focus:bg-white/5 rounded-none outline-none">
                          <Link href={sub.link} className="block w-full px-6 py-3 text-[8px] text-white/70 hover:text-[#D4AF37] uppercase tracking-[0.25em] transition-colors">
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

          {/* Mobile Toggle Button */}
          <div className="md:hidden z-[10001]">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black md:hidden transition-transform duration-500 ease-in-out z-[9998] ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-10 overflow-y-auto pb-20 font-asap">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-white/5 py-6">
              <button
                onClick={() => setActiveMobileSection(activeMobileSection === item.name ? null : item.name)}
                className="w-full flex justify-between items-center text-[#D4AF37] text-lg font-light uppercase tracking-[0.2em]"
              >
                {item.name}
                <ChevronRight className={`transition-transform duration-300 ${activeMobileSection === item.name ? "rotate-90 text-white" : "text-[#D4AF37]/50"}`} />
              </button>
              {activeMobileSection === item.name && (
                <div className="mt-6 space-y-5 flex flex-col border-l border-[#D4AF37]/30 ml-1">
                  {item.dropdown.map((sub) => (
                    <Link key={sub.name} href={sub.link} onClick={() => setMobileMenuOpen(false)} className="text-white/40 text-[10px] uppercase tracking-[0.2em] pl-6 hover:text-white transition-colors">
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