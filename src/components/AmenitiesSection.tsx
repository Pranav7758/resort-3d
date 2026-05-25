"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Waves, UtensilsCrossed, Leaf, Sailboat, Wine } from "lucide-react";

const amenities = [
  {
    title: "Infinity Pools",
    subtitle: "Boundless Horizons",
    description:
      "Temperature-controlled infinity pools that seamlessly dissolve into the ocean horizon. Three distinct pools — sunrise, sunset, and starlight — each offering a unique experience.",
    stat: "3 Pools",
    icon: Waves,
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1920",
  },
  {
    title: "Gourmet Dining",
    subtitle: "Culinary Artistry",
    description:
      "Five world-class restaurants helmed by Michelin-starred chefs. From ocean-to-table sashimi to wood-fired Mediterranean fare, every meal is a destination.",
    stat: "5 Restaurants",
    icon: UtensilsCrossed,
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1920",
  },
  {
    title: "Holistic Spa",
    subtitle: "Ancient & Modern",
    description:
      "A 2,000 sq meter sanctuary blending Balinese healing traditions with cutting-edge cryotherapy and hydrotherapy. Private treatment suites overlooking the lagoon.",
    stat: "2,000 m²",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1920",
  },
  {
    title: "Water Sports",
    subtitle: "Thrill & Serenity",
    description:
      "From guided reef dives to private sunset sailing. Our PADI-certified team offers over 15 aquatic experiences across pristine coral reefs and crystal waters.",
    stat: "15+ Activities",
    icon: Sailboat,
    image:
      "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&q=80&w=1920",
  },
  {
    title: "Sunset Lounge",
    subtitle: "Golden Hour",
    description:
      "An open-air terrace perched above the western shoreline. Our resident mixologist crafts bespoke cocktails while a live jazz trio scores the fading light.",
    stat: "Open Air",
    icon: Wine,
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=1920",
  },
];

export default function AmenitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = amenities[activeIndex];
  const ActiveIcon = active.icon;

  const handleSelect = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section
      id="amenities"
      className="relative bg-deep-dark text-stark-white py-24 md:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-turquoise-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-turquoise-400 mb-5">
            Curated Experiences
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-sand-50 tracking-tight leading-[0.95]">
            Unmatched <span className="italic text-turquoise-400">Amenities</span>
          </h2>
        </div>

        {/* Main Content: Tabs + Showcase */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          {/* ─── Left: Tab list ─── */}
          <div className="w-full lg:w-[38%] lg:pr-12 flex flex-col">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              const isActive = index === activeIndex;
              return (
                <button
                  key={amenity.title}
                  onClick={() => handleSelect(index)}
                  className={`hover-target group flex items-center gap-4 md:gap-5 py-5 md:py-6 border-b text-left transition-all duration-500 ${
                    isActive
                      ? "border-turquoise-400/40"
                      : "border-white/5 hover:border-white/15"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      isActive
                        ? "bg-turquoise-500/15 border border-turquoise-400/30"
                        : "bg-white/[0.03] border border-white/[0.06] group-hover:bg-white/[0.06]"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 transition-colors duration-500 ${
                        isActive ? "text-turquoise-400" : "text-white/30 group-hover:text-white/60"
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <span
                      className={`block font-serif text-xl md:text-2xl transition-colors duration-500 ${
                        isActive ? "text-stark-white" : "text-white/40 group-hover:text-white/70"
                      }`}
                    >
                      {amenity.title}
                    </span>
                  </div>

                  {/* Active indicator */}
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 transition-all duration-500 ${
                      isActive ? "bg-turquoise-400 scale-100" : "bg-transparent scale-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* ─── Right: Showcase panel ─── */}
          <div className="w-full lg:w-[62%] relative">
            <div className="relative aspect-[4/3] md:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-deep-dark border border-white/[0.04]">
              {/* Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute inset-0"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${active.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-dark via-deep-dark/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-deep-dark/40 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Overlaid content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                  >
                    {/* Stat badge */}
                    <div className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-md border border-white/[0.08] rounded-full px-4 py-1.5 mb-5">
                      <ActiveIcon className="w-3.5 h-3.5 text-turquoise-400" strokeWidth={1.5} />
                      <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-turquoise-400 font-medium">
                        {active.stat}
                      </span>
                    </div>

                    {/* Subtitle */}
                    <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/40 mb-3">
                      {active.subtitle}
                    </p>

                    {/* Title */}
                    <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stark-white mb-4 leading-[1.1]">
                      {active.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-sm md:text-base text-white/60 leading-relaxed max-w-lg mb-6">
                      {active.description}
                    </p>

                    {/* CTA */}
                    <button className="hover-target font-sans text-[10px] tracking-[0.2em] uppercase text-stark-white border border-white/20 px-8 py-3 rounded-full hover:bg-turquoise-500 hover:border-turquoise-500 hover:text-deep-dark transition-all duration-500">
                      Learn More
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Progress bar */}
            <div className="flex gap-1.5 mt-5">
              {amenities.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className="hover-target h-[3px] rounded-full transition-all duration-700 flex-1"
                >
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      i === activeIndex ? "bg-turquoise-400 w-full" : "bg-white/10 w-full"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
