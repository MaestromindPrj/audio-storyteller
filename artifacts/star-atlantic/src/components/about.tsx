import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-white overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Why Star Atlantic</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
              World-class sound, <br />without compromise.
            </h3>
            
            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
              <p>
                Based in the creative hub of Chennai, India, Star Atlantic Productions was born from a singular obsession: to provide a sanctuary where artists and creators realize their ultimate sonic vision. What sets us apart is our artist-first philosophy and our close-knit creative community, where collaboration and innovation drive every project. We thrive on fostering authentic connections, helping artists break new ground while staying true to their individual voice.
              </p>
              <p>
                We don't just hit record. We partner with you. From the initial consultation to the final mastering, our approach is meticulous, collaborative, and focused on the emotional impact of the final product. When you begin a project with us, we start by listening to your vision and inspirations, then hold a brainstorming session to outline your goals and preferences. Throughout the process, we provide creative input, share progress updates, and welcome your feedback at every stage ensuring your voice stays at the center of every decision.
              </p>
              <p>
                Equipped with cutting-edge analog and digital gear including the classic Neumann U87 microphones, Universal Audio Apollo interfaces, and vintage SSL mixing consoles as well as acoustically treated spaces for optimal sound, we deliver audio experiences that stand shoulder to shoulder with the best in the world. Our engineers specialise in genres from indie pop to classical fusion, each bringing years of experience in both live and studio environments.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-100">
              <div>
                <h4 className="text-5xl font-display font-bold text-primary mb-2">10+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Years Experience</p>
              </div>
              <div>
                <h4 className="text-5xl font-display font-bold text-primary mb-2">243+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Projects Delivered</p>
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
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-gray-100 shadow-2xl shadow-black/5 bg-white">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 transition-opacity hover:opacity-50"></div>
              <img 
                src="/about-studio.jpg" 
                alt="High-end studio microphone in cinematic lighting" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            {/* 3D floating orb accent */}
            <div className="absolute -bottom-12 -left-12 w-32 h-32 process-orb-3d z-20 animate-[float-orb_6s_ease-in-out_infinite]"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
