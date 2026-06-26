import React from "react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Why Star Atlantic</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
              World-class sound, <br />without compromise.
            </h3>
            
            <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed">
              <p>
                Based in the creative hub of Chennai, India, Star Atlantic Productions was born from a singular obsession: to provide a sanctuary where artists and creators can realize their ultimate sonic vision.
              </p>
              <p>
                We don't just hit record. We partner with you. From the initial consultation to the final mastering pass, our approach is meticulous, collaborative, and entirely focused on the emotional impact of the final product.
              </p>
              <p>
                Equipped with cutting-edge analog and digital gear, tuned acoustic spaces, and a team of seasoned engineers, we deliver audio experiences that stand shoulder-to-shoulder with the best in the world.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/10">
              <div>
                <h4 className="text-4xl font-display font-bold text-white mb-2">10+</h4>
                <p className="text-sm text-white/50 uppercase tracking-wider font-medium">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-display font-bold text-white mb-2">500+</h4>
                <p className="text-sm text-white/50 uppercase tracking-wider font-medium">Projects Delivered</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative border border-white/10 bg-card">
              <div className="absolute inset-0 bg-primary/10 mix-blend-color z-10"></div>
              <img 
                src="/about-studio.png" 
                alt="High-end studio microphone in cinematic lighting" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 blur-[50px] rounded-full z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full z-0"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
