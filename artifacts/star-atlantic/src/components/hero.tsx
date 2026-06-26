import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-20" />
        <img 
          src="/hero-bg.png" 
          alt="World-class audio recording studio control room at night" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container relative z-30 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance leading-tight">
              Crafting Sound <br className="hidden md:block" />
              <span className="text-primary">That Tells Stories.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light"
          >
            Premium audio production and post-production for filmmakers, brands, and creators. We combine world-class creativity with cutting-edge technology.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_40px_rgba(74,144,217,0.3)] hover:shadow-[0_0_60px_rgba(74,144,217,0.5)] transition-all"
              onClick={() => scrollToSection("contact")}
              data-testid="button-hero-contact"
            >
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto text-base h-14 px-8 rounded-full border-white/20 hover:bg-white/5 hover:text-white text-white"
              onClick={() => scrollToSection("services")}
              data-testid="button-hero-services"
            >
              Our Services
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
