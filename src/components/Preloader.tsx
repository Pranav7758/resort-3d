"use client";

import { motion } from "framer-motion";

export default function Preloader({ progress }: { progress: number }) {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ocean-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Decorative top line */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-turquoise-500/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center"
      >
        {/* Decorative accent */}
        <div className="w-8 h-[1px] bg-turquoise-500 mb-6" />
        
        <div className="font-serif text-5xl md:text-6xl text-sand-50 tracking-ultra-wide mb-2">
          AZURE HAVEN
        </div>
        <div className="font-sans text-[10px] tracking-[0.5em] uppercase text-turquoise-400 mb-12">
          Resort &amp; Spa
        </div>

        {/* Progress bar */}
        <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-turquoise-500 to-turquoise-400"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>

        <div className="mt-6 font-sans text-[11px] tracking-[0.3em] text-sand-300/60 uppercase">
          {progress < 100 ? "Preparing your experience" : "Welcome"}
        </div>
      </motion.div>

      {/* Decorative bottom line */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-turquoise-500/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      />
    </motion.div>
  );
}
