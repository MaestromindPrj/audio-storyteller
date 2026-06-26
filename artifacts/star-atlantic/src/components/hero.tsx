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
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-white bg-dot-pattern">
      {/* Decorative blurred shapes */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-blue-300/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container relative z-30 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 text-balance leading-[1.1] tracking-tight">
                Crafting Sound <br />
                <span className="text-primary">That Tells Stories.</span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-md font-light leading-relaxed"
            >
              Premium audio production and post-production for filmmakers, brands, and creators. We combine world-class creativity with cutting-edge technology.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-base h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                onClick={() => scrollToSection("contact")}
                data-testid="button-hero-contact"
              >
                Get in Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto text-base h-14 px-8 rounded-full border-gray-200 hover:bg-gray-50 text-foreground"
                onClick={() => scrollToSection("services")}
                data-testid="button-hero-services"
              >
                Our Services
              </Button>
            </motion.div>
          </div>

          {/* 3D Geometric Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative flex items-center justify-center h-[500px]"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 orb-3d z-10">
                <img
                  src="/logo-icon-hero.jpg"
                  alt="Star Atlantic Logo"
                  className="absolute inset-0 w-full h-full object-cover rounded-full"
                  style={{ mixBlendMode: "multiply", opacity: 0.85 }}
                />
              </div>
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-48 h-8 orb-shadow z-0"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
