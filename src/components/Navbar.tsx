"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onBookNow: () => void;
}

export default function Navbar({ onBookNow }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled || isMobileMenuOpen
            ? "bg-stark-white/95 backdrop-blur-xl text-deep-dark shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            : "bg-transparent text-stark-white"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex flex-col items-start z-50">
            <span className="font-serif text-xl tracking-ultra-wide font-semibold leading-tight">
              AZURE HAVEN
            </span>
            <span
              className={`text-[8px] tracking-[0.4em] uppercase transition-colors duration-700 ${
                isScrolled || isMobileMenuOpen ? "text-turquoise-600" : "text-turquoise-400"
              }`}
            >
              Resort &amp; Spa
            </span>
          </a>

          {/* Desktop Nav Links */}
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

          <div className="flex items-center gap-4 z-50">
            {/* CTA */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookNow();
              }}
              className={`group relative px-5 md:px-7 py-2 md:py-2.5 font-sans text-[9px] md:text-[10px] tracking-[0.25em] uppercase font-semibold overflow-hidden transition-all duration-500 ${
                isScrolled || isMobileMenuOpen
                  ? "border border-deep-dark/20 text-deep-dark hover:text-stark-white"
                  : "border border-white/30 text-stark-white hover:text-deep-dark"
              }`}
            >
              <span
                className={`absolute inset-0 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 ${
                  isScrolled || isMobileMenuOpen ? "bg-deep-dark" : "bg-stark-white"
                }`}
              />
              <span className="relative z-10">Reserve</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span
                className={`block w-6 h-[1px] transition-transform duration-300 ${
                  isScrolled || isMobileMenuOpen ? "bg-deep-dark" : "bg-stark-white"
                } ${isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`block w-6 h-[1px] transition-opacity duration-300 ${
                  isScrolled || isMobileMenuOpen ? "bg-deep-dark" : "bg-stark-white"
                } ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`block w-6 h-[1px] transition-transform duration-300 ${
                  isScrolled || isMobileMenuOpen ? "bg-deep-dark" : "bg-stark-white"
                } ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-stark-white flex flex-col justify-center items-center pt-20"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-4xl text-deep-dark hover:text-turquoise-500 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-12 flex flex-col items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-deep-dark/10" />
              <div className="flex gap-6 font-sans text-[10px] tracking-[0.2em] uppercase text-deep-dark/60">
                <a href="#" className="hover:text-turquoise-500 transition-colors">Insta</a>
                <a href="#" className="hover:text-turquoise-500 transition-colors">Fb</a>
                <a href="#" className="hover:text-turquoise-500 transition-colors">X</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
