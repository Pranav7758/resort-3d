"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "An absolute paradigm of luxury. The attention to detail in the Oceanfront Suite left us speechless. Azure Haven redefined our expectations of a luxury resort.",
    author: "Elena Rothschild",
    location: "London, UK",
  },
  {
    id: 2,
    quote: "From the Michelin-starred dining to the serene holistic spa, every moment felt curated perfectly for us. The best week of our lives.",
    author: "Marcus Chen",
    location: "Singapore",
  },
  {
    id: 3,
    quote: "Waking up in the Overwater Bungalow and stepping directly into the lagoon is an experience I will cherish forever. Unmatched hospitality.",
    author: "Sophia Laurent",
    location: "Paris, France",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-stark-white overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="w-12 h-[1px] bg-turquoise-500 mx-auto mb-6" />
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-turquoise-600 mb-12">
            Guest Reflections
          </p>
        </motion.div>

        <div className="relative min-h-[250px] flex items-center justify-center">
          {/* Decorative large quote mark */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 font-serif text-[150px] text-deep-dark/5 select-none leading-none">
            &quot;
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="relative z-10"
            >
              <h3 className="font-serif text-2xl md:text-4xl text-deep-dark leading-relaxed mb-8">
                {testimonials[currentIndex].quote}
              </h3>
              <div className="flex flex-col items-center">
                <p className="font-sans text-xs tracking-[0.2em] uppercase font-bold text-deep-dark mb-1">
                  {testimonials[currentIndex].author}
                </p>
                <p className="font-sans text-[10px] tracking-[0.1em] text-deep-dark/50">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="w-12 h-6 flex items-center justify-center group"
            >
              <div
                className={`h-[1px] transition-all duration-500 ${
                  index === currentIndex
                    ? "w-12 bg-turquoise-500"
                    : "w-4 bg-deep-dark/20 group-hover:bg-turquoise-500/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
