"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="py-24 bg-stark-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-turquoise-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-coral-400/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-deep-dark rounded-sm p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_20px_40px_rgba(0,0,0,0.1)] relative overflow-hidden"
        >
          {/* Subtle gradient overlay on the dark card */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

          <div className="max-w-lg text-center md:text-left relative z-10">
            <h3 className="font-serif text-3xl md:text-4xl text-sand-50 mb-4">
              Join the Azure Circle
            </h3>
            <p className="font-sans text-sm text-sand-200/70 leading-relaxed">
              Subscribe to receive exclusive invitations, seasonal offers, and stories from our oceanfront paradise directly to your inbox.
            </p>
          </div>

          <div className="w-full md:w-auto flex-shrink-0 relative z-10">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full sm:w-64 bg-transparent border-b border-white/20 px-0 py-3 text-stark-white font-sans text-sm placeholder:text-white/40 focus:outline-none focus:border-turquoise-500 transition-colors"
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="group relative px-8 py-3 bg-stark-white text-deep-dark font-sans text-[10px] tracking-[0.2em] uppercase font-bold overflow-hidden"
              >
                <div className="absolute inset-0 bg-turquoise-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="relative z-10 flex items-center gap-2">
                  {isSubscribed ? (
                    "Subscribed"
                  ) : (
                    <>
                      Subscribe <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
