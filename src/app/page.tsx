"use client";

import { useState } from "react";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GlobeSection from "@/components/GlobeSection";
import VillaShowcase from "@/components/VillaShowcase";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
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
      
      {/* 1. Scroll-scrub Hero */}
      <HeroSection images={images} />
      
      {/* 2. Globe Intro */}
      <GlobeSection />

      {/* 3. Villa Stack Reveal */}
      <VillaShowcase />

      {/* 4. Hover Image Trail Amenities */}
      <AmenitiesSection />

      {/* 5. Parallax Gallery */}
      <GallerySection />

      {/* 6. Cinematic Footer */}
      <Footer />

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}

