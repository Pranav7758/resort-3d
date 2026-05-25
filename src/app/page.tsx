"use client";

import { useState } from "react";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GlobeSection from "@/components/GlobeSection";
import BookingModal from "@/components/BookingModal";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const { progress, isLoaded, images } = useImagePreloader(239, "/frames/frame_", "_delay-0.1s.webp");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-deep-dark text-stark-white">
      <AnimatePresence>
        {!isLoaded && <Preloader key="preloader" progress={progress} />}
      </AnimatePresence>

      <Navbar onBookNow={() => setIsModalOpen(true)} />
      
      {/* Wait for images to load before mounting the Hero Section to prevent early layout issues */}
      {isLoaded && <HeroSection images={images} />}
      
      <GlobeSection />
      
      {/* CTA section to open modal */}
      <section className="py-32 px-6 flex flex-col items-center justify-center bg-stark-white text-deep-dark text-center">
        <h2 className="font-serif text-4xl md:text-6xl mb-6">Ready for the extraordinary?</h2>
        <p className="font-sans text-lg text-deep-dark/70 max-w-2xl mx-auto mb-12">
          Contact our concierge team to begin curating your next unparalleled experience.
        </p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-12 py-5 bg-deep-dark text-stark-white hover:bg-turquoise-500 transition-colors duration-300 font-sans tracking-widest uppercase font-semibold"
        >
          Begin Journey
        </button>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
