"use client";

import { motion } from "framer-motion";

export default function GlobeSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-ocean-900 flex items-center justify-center py-32">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-resort-near-the-sea-4068-large.mp4"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-dark via-transparent to-ocean-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/60 via-transparent to-ocean-900/60" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="w-12 h-[1px] bg-turquoise-500 mx-auto mb-8" />
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-turquoise-400 mb-6">
            World-Class Destination
          </p>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-9xl text-sand-50 tracking-wide leading-none mb-8">
            Oceanfront
            <br />
            <span className="text-gradient-ocean">Paradise</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-sand-200/70 max-w-xl mx-auto leading-relaxed">
            Nestled along pristine coastlines, Azure Haven offers an exclusive 
            sanctuary where every detail has been crafted for the discerning guest.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "42", label: "Private Villas" },
            { value: "5★", label: "Rating" },
            { value: "∞", label: "Experiences" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-3xl md:text-4xl text-turquoise-400 mb-1">
                {stat.value}
              </div>
              <div className="font-sans text-[9px] tracking-[0.3em] uppercase text-sand-300/50">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
