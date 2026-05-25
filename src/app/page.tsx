"use client";

import { useState } from "react";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GlobeSection from "@/components/GlobeSection";
import VillaShowcase from "@/components/VillaShowcase";
import ParallaxDivider from "@/components/ParallaxDivider";
import AmenitiesSection from "@/components/AmenitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const { progress, isLoaded, images } = useImagePreloader(239, "/frames/frame_", "_delay-0.1s.webp");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-deep-dark text-stark-white selection:bg-turquoise-500/30">
      <AnimatePresence>
        {!isLoaded && <Preloader key="preloader" progress={progress} />}
      </AnimatePresence>

      <Navbar onBookNow={() => setIsModalOpen(true)} />
      
      {/* 1. Scroll-scrub Hero */}
      <HeroSection images={images} />
      
      {/* 2. Globe Intro */}
      <GlobeSection />

      {/* 3. Villa Showcase */}
      <VillaShowcase />

      {/* 4. Parallax Break */}
      <ParallaxDivider />

      {/* 5. Amenities Bento Grid */}
      <AmenitiesSection />

      {/* 6. Testimonials */}
      <TestimonialsSection />

      {/* 7. Photo Gallery */}
      <GallerySection />

      {/* 8. Newsletter Strip */}
      <NewsletterSection />
      
      {/* 9. Cinematic CTA section */}
      <section className="relative py-40 px-6 flex flex-col items-center justify-center bg-deep-dark text-stark-white text-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ocean-900/40 via-deep-dark to-deep-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] border border-white/5 rounded-full animate-pulse-glow" />
        
        <div className="relative z-10 max-w-4xl">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 tracking-wide leading-none">
            Ready for the <br className="hidden md:block" />
            <span className="text-gradient-ocean italic">extraordinary?</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-sand-200/70 max-w-2xl mx-auto mb-14 leading-relaxed">
            Contact our concierge team to begin curating your next unparalleled experience at Azure Haven.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group relative px-12 py-5 border border-turquoise-500/50 bg-deep-dark text-stark-white hover:text-deep-dark transition-colors duration-500 font-sans tracking-[0.3em] uppercase font-semibold overflow-hidden shadow-[0_0_40px_rgba(64,224,208,0.15)]"
          >
            <span className="absolute inset-0 bg-turquoise-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
            <span className="relative z-10">Begin Journey</span>
          </button>
        </div>
      </section>

      {/* 10. Footer */}
      <Footer />

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
