"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";

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
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);

  const toggleSection = (name: string) => {
    setActiveMobileSection(activeMobileSection === name ? null : name);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
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
          isScrolled || mobileMenuOpen ? "bg-black/95 py-3 shadow-xl" : "bg-transparent py-5"
        }`}
        style={{
          zIndex: 9999,
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
        }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="relative z-[10001]"
          >
            <Image
              src="/BW_logo.png"
              alt="Buxino"
              width={55}
              height={75}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group pt-2">
                <button className="text-white text-[11px] uppercase tracking-widest flex items-center gap-1">
                  {item.name} <ChevronDown size={12} />
                </button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-black border border-white/10 min-w-[220px] mt-2 shadow-2xl">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.link}
                      className="block p-4 text-[10px] text-white hover:bg-white/5 uppercase tracking-widest"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center text-white relative z-[10001] p-2"
            style={{
              width: "50px",
              height: "50px",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {mobileMenuOpen ? (
              <X size={32} className="text-gold" />
            ) : (
              <Menu size={32} />
            )}
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black md:hidden transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
        style={{
          zIndex: 9990,
          pointerEvents: mobileMenuOpen ? "auto" : "none",
        }}
      >
        <div className="flex flex-col h-full pt-32 px-10 overflow-y-auto pb-20">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-white/10 py-6">
              <button
                onClick={() => toggleSection(item.name)}
                className="w-full flex justify-between items-center text-white text-xl font-light uppercase tracking-[0.25em]"
              >
                {item.name}
                <ChevronRight
                  className={`transition-transform duration-300 ${
                    activeMobileSection === item.name ? "rotate-90 text-gold" : ""
                  }`}
                />
              </button>

              <div
                className={`mt-6 space-y-6 overflow-hidden transition-all duration-500 ${
                  activeMobileSection === item.name ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {item.dropdown.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-white/60 text-sm uppercase tracking-[0.2em] pl-4 active:text-gold"
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