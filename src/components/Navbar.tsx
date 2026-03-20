"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";   // ← this is the missing line
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
      { name: "Company Profile", link: "/profile" },
    ],
  },
  {
    name: "Services",
    dropdown: [
      { name: "Corporate Gifting", link: "/corporate-gifting" },
      { name: "Event Architecture", link: "/events" },
      { name: "Registrations & Strategy", link: "/registrations" },
      { name: "Strategic Consulting", link: "/retainers" },
      { name: "View Catalog", link: "https://promoafrica.com/Buxino" },
    ],
  },
  {
    name: "Investments",
    dropdown: [
      { name: "Buxino Wines", link: "/wines" },
      { name: "In The Mino", link: "/in-the-mino" },
      { name: "BuxRamsey", link: "/buxramsey" },
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
    name: "Connect",
    dropdown: [
      { name: "Contact Us", link: "/connect/contact-information" },
      { name: "Customer Survey", link: "/survey" },
      { name: "Careers", link: "/careers" },
    ],
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMobileSection(null);
  }, [pathname]);

  return (
    <>
      {/* Desktop + Mobile Sticky Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-500 z-[9999] ${
          isScrolled || mobileMenuOpen
            ? "bg-white/95 backdrop-blur-md py-4 border-b border-gray-200 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-10 flex justify-between items-center">
          
          {/* LEFT: Logo + Home */}
          <div className="flex items-center gap-6 md:gap-10">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="relative z-[10001] transition-opacity hover:opacity-80"
            >
              <Image
                src="/BW_logo.png"
                alt="Buxino"
                width={40}
                height={53}
                priority
                className="w-auto h-10 md:h-12"
              />
            </Link>

            <Link
              href="/"
              className="hidden md:block text-[#c5a059] text-[10px] uppercase tracking-[0.45em] font-light hover:text-[#001f3f] transition-colors"
            >
              Home
            </Link>
          </div>

          {/* RIGHT: Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => {
              const isActive = item.dropdown.some(sub => pathname === sub.link);
              return (
                <div
                  key={item.name}
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="relative"
                >
                  <DropdownMenu open={openDropdown === item.name}>
                    <DropdownMenuTrigger
                      className={cn(
                        "text-[10px] uppercase tracking-[0.45em] font-light flex items-center gap-1.5 outline-none transition-all",
                        isActive || openDropdown === item.name
                          ? "text-[#001f3f] font-medium"
                          : "text-[#c5a059] hover:text-[#001f3f]"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={8}
                        className={`transition-transform duration-300 ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      align="end"
                      sideOffset={8}
                      className="bg-white border border-gray-200 shadow-lg min-w-[220px] rounded-lg p-1 z-[10000]"
                    >
                      {item.dropdown.map((sub) => (
                        <DropdownMenuItem key={sub.name} asChild className="focus:bg-gray-50 rounded-md">
                          <Link
                            href={sub.link}
                            className={cn(
                              "block w-full px-5 py-2.5 text-[10px] uppercase tracking-widest transition-colors",
                              pathname === sub.link
                                ? "text-[#c5a059] font-medium"
                                : "text-gray-700 hover:text-[#c5a059]"
                            )}
                          >
                            {sub.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#c5a059] p-2 z-[10001]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay – LIGHT VERSION */}
      <div
        className={`fixed inset-0 bg-white md:hidden transition-all duration-500 z-[9998] overflow-y-auto ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-28 pb-10 px-8">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#001f3f] text-xl font-black uppercase tracking-tight mb-10 border-b border-gray-200 pb-6"
          >
            Home
          </Link>

          {navItems.map((item) => (
            <div key={item.name} className="border-b border-gray-200 py-6">
              <button
                onClick={() => setActiveMobileSection(activeMobileSection === item.name ? null : item.name)}
                className="w-full flex justify-between items-center text-[#001f3f] text-lg font-medium uppercase tracking-wide"
              >
                {item.name}
                <ChevronRight
                  size={20}
                  className={`transition-transform duration-300 ${
                    activeMobileSection === item.name ? "rotate-90" : ""
                  }`}
                />
              </button>

              {activeMobileSection === item.name && (
                <div className="mt-6 space-y-4 pl-4 border-l-2 border-[#c5a059]/30">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.link}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block text-base font-light py-2 transition-colors",
                        pathname === sub.link ? "text-[#c5a059]" : "text-gray-700 hover:text-[#c5a059]"
                      )}
                    >
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