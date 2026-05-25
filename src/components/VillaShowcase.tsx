"use client";

import { motion } from "framer-motion";

const villas = [
  {
    id: 1,
    name: "Oceanfront Suite",
    description: "Panoramic views of the endless azure sea with a private infinity plunge pool.",
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    name: "Garden Sanctuary",
    description: "Nestled among lush tropical foliage with an open-air rain shower.",
    price: "$950",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    name: "Overwater Bungalow",
    description: "Direct lagoon access with a glass floor viewing panel and private deck.",
    price: "$2,100",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    name: "Presidential Estate",
    description: "Ultimate luxury with 3 bedrooms, private chef, and exclusive beach access.",
    price: "$5,500",
    image: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function VillaShowcase() {
  return (
    <section id="villas" className="relative py-32 bg-stark-white overflow-hidden">
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
            <h2 className="font-serif text-4xl md:text-5xl text-deep-dark mb-4">
              Sanctuaries of Serenity
            </h2>
            <p className="font-sans text-deep-dark/60 max-w-md">
              Discover our collection of architecturally stunning villas, designed to blur the lines between indoor luxury and outdoor majesty.
            </p>
          </div>
          <button className="flex-shrink-0 border-b border-deep-dark pb-1 font-sans text-[10px] tracking-[0.2em] uppercase font-semibold text-deep-dark hover:text-turquoise-500 hover:border-turquoise-500 transition-colors">
            View All Villas
          </button>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
          {villas.map((villa, index) => (
            <motion.div
              key={villa.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center group cursor-pointer"
            >
              <div className="relative h-[500px] md:h-[600px] overflow-hidden mb-6">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${villa.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="text-stark-white">
                    <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-turquoise-400 mb-2">
                      From {villa.price} / Night
                    </p>
                    <h3 className="font-serif text-2xl mb-1">{villa.name}</h3>
                  </div>
                </div>
              </div>

              <div className="px-2">
                <p className="font-sans text-sm text-deep-dark/70 mb-4 line-clamp-2">
                  {villa.description}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-sans tracking-[0.2em] uppercase text-deep-dark font-semibold group-hover:text-turquoise-500 transition-colors">
                  <span>Explore</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
