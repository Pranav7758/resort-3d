"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const villas = [
  {
    id: 1,
    name: "Oceanfront",
    type: "Suite",
    tagline: "Where the sea meets your doorstep",
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 2,
    name: "Garden",
    type: "Sanctuary",
    tagline: "Nestled in tropical paradise",
    price: "$950",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 3,
    name: "Overwater",
    type: "Bungalow",
    tagline: "Suspended above crystal lagoons",
    price: "$2,100",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 4,
    name: "Presidential",
    type: "Estate",
    tagline: "Ultimate luxury, absolute privacy",
    price: "$5,500",
    image: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&q=80&w=1600",
  },
];

export default function VillaShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track vertical scroll progress over the entire 400vh section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Move the entire track horizontally. 
  // With 4 items (each 100vw), track is 400vw. We need to translate by -75% of the track width to reach the end.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="villas" className="relative h-[400vh] bg-deep-dark">
      {/* Sticky container that holds the horizontal track */}
      <div className="sticky top-0 h-screen overflow-hidden bg-deep-dark flex items-center">
        
        {/* The scrolling track */}
        <motion.div style={{ x }} className="flex h-full w-[400vw]">
          {villas.map((villa, index) => (
            <div key={villa.id} className="relative w-screen h-full flex items-center justify-center p-6 md:p-12 lg:p-24 overflow-hidden">
              
              {/* Massive background typography */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                <span className="font-serif text-[15vw] leading-none whitespace-nowrap text-white font-bold tracking-tighter">
                  {villa.name}
                </span>
              </div>

              <div className="relative w-full max-w-[1400px] h-[70vh] md:h-[80vh] flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                
                {/* Image Panel with Parallax */}
                <div className="relative w-full lg:w-[60%] h-[50vh] lg:h-full overflow-hidden rounded-2xl group">
                  <motion.div 
                    className="absolute inset-0 w-[120%] h-full bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${villa.image})`,
                      // The image slowly moves opposite to the scroll direction to create depth
                      x: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                  
                  {/* Floating Price Badge */}
                  <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-2">
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-turquoise-400">
                      From {villa.price}
                    </span>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="relative w-full lg:w-[40%] flex flex-col justify-center z-10">
                  <div className="overflow-hidden mb-4">
                    <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-turquoise-400">
                      0{index + 1} // Sanctuary
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-6xl md:text-7xl lg:text-8xl text-stark-white mb-2 leading-[0.9] tracking-tight flex flex-col">
                    <span>{villa.name}</span>
                    <span className="italic text-white/50">{villa.type}</span>
                  </h3>
                  
                  <p className="font-sans text-sm md:text-base text-white/50 mb-10 max-w-sm mt-6 leading-relaxed">
                    {villa.tagline}
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <button className="hover-target group relative px-8 py-4 border border-white/20 rounded-full overflow-hidden">
                      <div className="absolute inset-0 bg-stark-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                      <span className="relative z-10 font-sans text-[10px] tracking-[0.2em] uppercase text-stark-white group-hover:text-deep-dark transition-colors duration-500">
                        Reserve Villa
                      </span>
                    </button>
                    <a href="#" className="hover-target font-sans text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-turquoise-400 transition-colors">
                      Explore Details →
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>

        {/* Global Progress Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-[2px] bg-white/10 overflow-hidden">
          <motion.div 
            className="h-full bg-turquoise-400 origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>
      </div>
    </section>
  );
}
