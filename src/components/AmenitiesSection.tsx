"use client";

import { motion } from "framer-motion";
import { Waves, UtensilsCrossed, Leaf, Sailboat, Wine, Sparkles } from "lucide-react";

const amenities = [
  {
    title: "Infinity Pools",
    description: "Seamlessly blending with the horizon, our temperature-controlled infinity pools offer breathtaking views.",
    icon: Waves,
    className: "col-span-1 md:col-span-2 row-span-2",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=100&w=3840"
  },
  {
    title: "Gourmet Dining",
    description: "Michelin-starred chefs crafting culinary masterpieces from locally sourced ingredients.",
    icon: UtensilsCrossed,
    className: "col-span-1 row-span-1",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=100&w=3840"
  },
  {
    title: "Holistic Spa",
    description: "Rejuvenate your mind and body with ancient healing traditions and modern therapies.",
    icon: Leaf,
    className: "col-span-1 row-span-1",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=100&w=3840"
  },
  {
    title: "Water Sports",
    description: "From paddleboarding to deep-sea diving, explore the crystal-clear waters.",
    icon: Sailboat,
    className: "col-span-1 row-span-1",
    image: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&q=100&w=2000"
  },
  {
    title: "Sunset Lounge",
    description: "Sip on signature cocktails while watching the sky paint itself in hues of fire.",
    icon: Wine,
    className: "col-span-1 md:col-span-2 row-span-1",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=100&w=3840"
  },
  {
    title: "Concierge",
    description: "24/7 dedicated service to fulfill your every desire and curate bespoke experiences.",
    icon: Sparkles,
    className: "col-span-1 md:col-span-3 row-span-1",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=100&w=3840"
  },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-32 bg-deep-dark text-stark-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="w-12 h-[1px] bg-turquoise-500 mx-auto mb-6" />
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-turquoise-400 mb-4">
            Curated Experiences
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-sand-50">
            Unparalleled Amenities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[250px]">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative group overflow-hidden rounded-sm p-8 flex flex-col justify-between border border-white/5 hover:border-turquoise-500/30 transition-colors duration-500 ${amenity.className}`}
              >
                {/* 4K Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${amenity.image})` }}
                />
                
                {/* Dark Overlay so text is readable */}
                <div className="absolute inset-0 bg-deep-dark/60 group-hover:bg-deep-dark/40 transition-colors duration-700" />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-turquoise-500/0 to-turquoise-500/0 group-hover:from-turquoise-500/20 group-hover:to-transparent transition-all duration-700" />
                
                <Icon className="w-8 h-8 text-turquoise-400 mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10" strokeWidth={1.5} />
                
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl mb-3 text-sand-50">{amenity.title}</h3>
                  <p className="font-sans text-sm text-sand-200/80 leading-relaxed max-w-sm drop-shadow-lg">
                    {amenity.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
