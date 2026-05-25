"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Moves the image slower than the scroll speed to create a parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        className="absolute inset-0 w-full h-[140%] -top-[20%] bg-cover bg-center"
        style={{ 
          y,
          backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2000')"
        }}
      />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-deep-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-dark via-transparent to-deep-dark" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <p className="font-serif text-3xl md:text-5xl text-stark-white italic font-light leading-relaxed">
          &quot;A place where time stands still, and every moment is an invitation to experience the extraordinary.&quot;
        </p>
      </motion.div>
    </section>
  );
}
