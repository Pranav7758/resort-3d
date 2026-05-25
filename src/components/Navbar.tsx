"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  onBookNow: () => void;
}

export default function Navbar({ onBookNow }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Villas", href: "#villas" },
    { label: "Amenities", href: "#amenities" },
    { label: "Dining", href: "#dining" },
    { label: "Spa", href: "#spa" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-700 ${
        isScrolled
          ? "bg-stark-white/95 backdrop-blur-xl text-deep-dark shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-transparent text-stark-white"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex flex-col items-start">
          <span className="font-serif text-xl tracking-ultra-wide font-semibold leading-tight">
            AZURE HAVEN
          </span>
          <span
            className={`text-[8px] tracking-[0.4em] uppercase transition-colors duration-700 ${
              isScrolled ? "text-turquoise-600" : "text-turquoise-400"
            }`}
          >
            Resort &amp; Spa
          </span>
        </a>

        {/* Nav Links */}
        <div className="hidden lg:flex gap-8 font-sans text-[11px] tracking-[0.2em] uppercase font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative py-1 transition-colors duration-300 hover:text-turquoise-500 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled ? "after:bg-turquoise-600" : "after:bg-turquoise-400"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={onBookNow}
          className={`group relative px-7 py-2.5 font-sans text-[10px] tracking-[0.25em] uppercase font-semibold overflow-hidden transition-all duration-500 ${
            isScrolled
              ? "border border-deep-dark/20 text-deep-dark hover:text-stark-white"
              : "border border-white/30 text-stark-white hover:text-deep-dark"
          }`}
        >
          <span
            className={`absolute inset-0 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 ${
              isScrolled ? "bg-deep-dark" : "bg-stark-white"
            }`}
          />
          <span className="relative z-10">Reserve</span>
        </button>
      </div>
    </motion.nav>
  );
}
