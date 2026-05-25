"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import CanvasScrubber from "./CanvasScrubber";

interface HeroSectionProps {
  images: HTMLImageElement[];
}

export default function HeroSection({ images }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // We are already using Lenis for smooth scrolling, so we don't need useSpring 
  // on top of it. Double smoothing causes massive lag and rubber-banding.
  const progress = scrollYProgress;

  // Narrative text fades during the transition
  const opacity1 = useTransform(progress, [0.05, 0.12, 0.25, 0.35], [0, 1, 1, 0]);
  const y1 = useTransform(progress, [0.05, 0.12], [40, 0]);

  const opacity2 = useTransform(progress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.35, 0.45], [40, 0]);

  const opacity3 = useTransform(progress, [0.65, 0.75, 0.82, 0.88], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.65, 0.75], [40, 0]);

  // Final CTA
  const finalOpacity = useTransform(progress, [0.88, 0.94], [0, 1]);
  const finalY = useTransform(progress, [0.88, 0.94], [50, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-deep-dark">
        <CanvasScrubber images={images} progress={progress} />

        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-dark/90 via-deep-dark/20 to-deep-dark/30 pointer-events-none" />

        {/* Narrative Sequencing */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-center px-6">
          <motion.div
            style={{ opacity: opacity1, y: y1 }}
            className="absolute flex flex-col items-center"
          >
            <div className="w-10 h-[1px] bg-turquoise-400 mb-6" />
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stark-white leading-tight">
              Discover Paradise
            </h2>
            <p className="mt-4 font-sans text-sm md:text-base tracking-[0.2em] uppercase text-sand-200/80">
              Where the ocean meets luxury
            </p>
          </motion.div>

          <motion.div
            style={{ opacity: opacity2, y: y2 }}
            className="absolute flex flex-col items-center"
          >
            <div className="w-10 h-[1px] bg-coral-400 mb-6" />
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stark-white leading-tight">
              You Deserve This
            </h2>
            <p className="mt-4 font-sans text-sm md:text-base tracking-[0.2em] uppercase text-sand-200/80">
              Private villas · Infinity pools · White sand
            </p>
          </motion.div>

          <motion.div
            style={{ opacity: opacity3, y: y3 }}
            className="absolute flex flex-col items-center"
          >
            <div className="w-10 h-[1px] bg-turquoise-400 mb-6" />
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stark-white leading-tight">
              Flexible Stays
            </h2>
            <p className="mt-4 font-sans text-sm md:text-base tracking-[0.2em] uppercase text-sand-200/80">
              Seasonal packages · Payment plans available
            </p>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          style={{ opacity: finalOpacity, y: finalY }}
          className="absolute bottom-16 md:bottom-24 left-0 w-full flex flex-col items-center justify-center pointer-events-auto"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-turquoise-400 mb-3">
            Your retreat awaits
          </p>
          <h3 className="font-serif text-3xl md:text-5xl text-stark-white mb-8">
            What are you waiting for?
          </h3>
          <button className="group relative px-12 py-4 border border-turquoise-500/50 hover:border-turquoise-500 overflow-hidden transition-all duration-500">
            <span className="absolute inset-0 bg-turquoise-500 transition-transform duration-500 origin-bottom scale-y-0 group-hover:scale-y-100" />
            <span className="relative z-10 font-sans text-[11px] tracking-[0.3em] uppercase font-semibold text-stark-white group-hover:text-deep-dark transition-colors duration-500">
              Schedule a Visit
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
