"use client";

import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=100&w=2000",
    className: "col-span-1 md:col-span-1 row-span-1 aspect-square",
    caption: "Crystal Waters",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=100&w=2000",
    className: "col-span-1 md:col-span-2 row-span-1 aspect-video md:aspect-[2/1]",
    caption: "Al Fresco Dining",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=100&w=2000",
    className: "col-span-1 md:col-span-1 row-span-1 md:row-span-2 aspect-square md:aspect-[1/2]",
    caption: "Spa Sanctuary",
  },
  {
    src: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=100&w=2000",
    className: "col-span-1 md:col-span-1 row-span-1 aspect-square",
    caption: "Sunset Cruise",
  },
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=100&w=2000",
    className: "col-span-1 md:col-span-1 row-span-1 aspect-square",
    caption: "Private Beach",
  },
  {
    src: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&q=100&w=2000",
    className: "col-span-1 md:col-span-2 row-span-1 aspect-video md:aspect-[2/1]",
    caption: "Ocean Adventures",
  },
];

export default function GallerySection() {
  return (
    <section className="py-32 bg-deep-dark text-stark-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <div className="w-12 h-[1px] bg-turquoise-500 mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl text-sand-50 mb-4">
              Captured Moments
            </h2>
            <p className="font-sans text-sand-200/60 max-w-md text-sm leading-relaxed">
              A visual journey through the exquisite details and breathtaking vistas that define the Azure Haven experience.
            </p>
          </div>
        </motion.div>

        {/* Removed auto-rows-fr to let aspect ratios dictate height perfectly */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative overflow-hidden group rounded-sm ${image.className}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${image.src})` }}
              />
              <div className="absolute inset-0 bg-deep-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-stark-white font-semibold">
                  {image.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
