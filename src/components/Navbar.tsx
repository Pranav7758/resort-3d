"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onBookNow: () => void;
}

export default function Navbar({ onBookNow }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navLinks = [
    { label: "Villas", href: "#villas" },
    { label: "Amenities", href: "#amenities" },
    { label: "Gallery", href: "#gallery" },
  ];

  return (
    <>
      {/* ─── Glassmorphic Floating Pill ─── */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 pt-5 md:pt-6"
      >
        <div
          className={`flex items-center justify-between gap-2 md:gap-4 w-full max-w-3xl transition-all duration-700 rounded-full px-4 md:px-6 ${
            isScrolled
              ? "py-3 bg-deep-dark/70 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "py-3 bg-white/[0.04] backdrop-blur-xl border border-white/[0.06]"
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="hover-target font-serif text-base md:text-lg tracking-[0.15em] text-stark-white uppercase font-light pl-2"
          >
            Azure<span className="text-turquoise-400">.</span>
          </a>

          {/* Desktop Links inside the pill */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover-target font-sans text-[10px] tracking-[0.12em] uppercase text-white/50 hover:text-stark-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/[0.06]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={onBookNow}
              className="hover-target hidden md:inline-flex font-sans text-[10px] tracking-[0.15em] uppercase bg-turquoise-500 text-deep-dark px-5 py-2 rounded-full hover:bg-turquoise-400 transition-colors duration-300 font-medium"
            >
              Reserve
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover-target md:hidden w-10 h-10 rounded-full flex flex-col items-center justify-center gap-[4px] hover:bg-white/[0.06] transition-colors duration-300"
              aria-label="Menu"
            >
              <span className={`block w-4 h-[1.5px] bg-stark-white transition-all duration-400 ${isOpen ? "rotate-45 translate-y-[2.75px]" : ""}`} />
              <span className={`block w-4 h-[1.5px] bg-stark-white transition-all duration-400 ${isOpen ? "-rotate-45 -translate-y-[2.75px]" : ""}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ─── Mobile Menu Overlay ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 z-[95] bg-deep-dark/95 backdrop-blur-3xl flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <div key={link.label} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-50%", opacity: 0, transition: { duration: 0.25 } }}
                    transition={{ duration: 0.7, delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    className="hover-target block font-serif text-5xl text-stark-white hover:text-turquoise-400 transition-colors duration-300 py-3 border-b border-white/5"
                  >
                    {link.label}
                  </motion.a>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12"
            >
              <button
                onClick={() => { setIsOpen(false); onBookNow(); }}
                className="hover-target font-sans text-[10px] tracking-[0.2em] uppercase bg-turquoise-500 text-deep-dark px-10 py-4 rounded-full font-medium"
              >
                Reserve Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
