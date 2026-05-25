"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-dark text-stark-white relative overflow-hidden">
      {/* Massive Typographic CTA */}
      <div className="border-t border-white/5 py-32 md:py-48 px-6 md:px-16 text-center">
        <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-turquoise-400 mb-8">
          Begin Your Journey
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tight mb-12"
        >
          Let&apos;s Create <br />
          <span className="italic text-turquoise-400">Memories</span>
        </motion.h2>
        <a
          href="mailto:reservations@azurehaven.com"
          className="hover-target inline-block font-sans text-[10px] tracking-[0.3em] uppercase border border-white/20 px-12 py-5 rounded-full text-stark-white hover:bg-stark-white hover:text-deep-dark transition-all duration-500"
        >
          reservations@azurehaven.com
        </a>
      </div>

      {/* Minimal Footer Info */}
      <div className="border-t border-white/5 px-6 md:px-16 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <a href="#" className="font-serif text-2xl tracking-[0.2em] uppercase font-light hover-target">
            Azure
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 font-sans text-[10px] tracking-[0.2em] uppercase text-white/40">
            <a href="#" className="hover:text-stark-white hover-target transition-colors">Instagram</a>
            <a href="#" className="hover:text-stark-white hover-target transition-colors">Facebook</a>
            <a href="#" className="hover:text-stark-white hover-target transition-colors">Twitter</a>
            <a href="#" className="hover:text-stark-white hover-target transition-colors">Privacy</a>
            <a href="#" className="hover:text-stark-white hover-target transition-colors">Terms</a>
          </div>

          {/* Copyright */}
          <p className="font-sans text-[10px] tracking-[0.1em] text-white/20 uppercase">
            &copy; {currentYear} Azure Haven
          </p>
        </div>
      </div>
    </footer>
  );
}
