"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1600",
    caption: "Crystal Waters",
    span: "col-span-1 md:col-span-1 aspect-[4/3] md:aspect-square",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1600",
    caption: "Al Fresco Dining",
    span: "col-span-1 md:col-span-2 aspect-[4/3] md:aspect-[2/1]",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1600",
    caption: "Spa Sanctuary",
    span: "col-span-1 md:col-span-1 aspect-[4/3] md:aspect-[3/4] md:row-span-2",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=1600",
    caption: "Sunset Cruise",
    span: "col-span-1 md:col-span-1 aspect-[4/3] md:aspect-square",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1600",
    caption: "Private Beach",
    span: "col-span-1 md:col-span-1 aspect-[4/3] md:aspect-square",
  },
];

export default function GallerySection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  // Disable body scroll when lightbox is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedId]);

  return (
    <section id="gallery" className="relative py-24 md:py-48 bg-deep-dark text-stark-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Editorial Split Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div className="w-12 h-[1px] bg-turquoise-500 mb-6 md:mb-8" />
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-turquoise-400 mb-4 md:mb-6">
              Visual Stories
            </p>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stark-white tracking-tight leading-[0.9]">
              Captured <br className="hidden md:block" />
              <span className="italic text-turquoise-400">Moments</span>
            </h2>
          </div>
          
          <div className="max-w-sm">
            <p className="font-sans text-sm md:text-base text-white/50 leading-relaxed mb-6 md:mb-8">
              A curated collection of unforgettable experiences at Azure Haven. Each frame tells a story of luxury, tranquility, and natural beauty.
            </p>
            <button className="hover-target font-sans text-[10px] tracking-[0.2em] uppercase text-stark-white border border-white/20 px-8 py-3 rounded-full hover:bg-turquoise-500 hover:border-turquoise-500 hover:text-deep-dark transition-all duration-500">
              View Instagram
            </button>
          </div>
        </div>

        {/* Dynamic Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-4 md:gap-6">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              layoutId={`container-${image.id}`}
              onClick={() => setSelectedId(image.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden group cursor-none ${image.span} rounded-lg`}
            >
              {/* Actual Image */}
              <motion.img
                layoutId={`image-${image.id}`}
                src={image.src}
                alt={image.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
              />
              
              {/* Overlay */}
              <motion.div 
                layoutId={`overlay-${image.id}`}
                className="absolute inset-0 bg-deep-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none flex flex-col justify-center items-center"
              >
                {/* Custom 'View' cursor replacement on hover */}
                <div className="font-sans text-[10px] tracking-[0.3em] uppercase text-turquoise-400 border border-turquoise-400/50 rounded-full px-6 py-3 backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Expand
                </div>
              </motion.div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Expanded View */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[110] bg-deep-dark/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedId(null)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.3 }}
              className="absolute top-8 right-8 z-[120] text-stark-white hover:text-turquoise-400 transition-colors uppercase font-sans text-[10px] tracking-[0.2em] flex items-center gap-2"
              onClick={() => setSelectedId(null)}
            >
              <span className="w-8 h-[1px] bg-current" /> Close
            </motion.button>

            {galleryImages
              .filter((img) => img.id === selectedId)
              .map((image) => (
                <motion.div
                  key={image.id}
                  layoutId={`container-${image.id}`}
                  className="relative w-full max-w-6xl aspect-video md:aspect-[16/9] rounded-xl overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                >
                  <motion.img
                    layoutId={`image-${image.id}`}
                    src={image.src}
                    alt={image.caption}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Caption in Lightbox */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end"
                  >
                    <span className="font-serif text-3xl md:text-5xl text-stark-white">
                      {image.caption}
                    </span>
                    <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-turquoise-400">
                      Azure Haven
                    </span>
                  </motion.div>
                </motion.div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
