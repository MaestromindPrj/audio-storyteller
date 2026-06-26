import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Headphones, Music, Radio, MonitorPlay, Film, BookOpen, Volume2, Video, Sparkles } from "lucide-react";

const services = [
  {
    id: "music",
    title: "Music Production",
    description: "Original score and composition that drives emotion and elevates your narrative.",
    icon: Music
  },
  {
    id: "sound-design",
    title: "Sound Design",
    description: "Immersive foley and custom sound creation to build rich, believable worlds.",
    icon: Volume2
  },
  {
    id: "dubbing",
    title: "Dubbing",
    description: "Professional ADR and voice replacement with perfect lip-sync and emotional matching.",
    icon: Mic
  },
  {
    id: "mixing",
    title: "Mixing & Mastering",
    description: "Industry-standard sonic balance and loudness compliance for theaters and streaming.",
    icon: Headphones
  },
  {
    id: "dialogue",
    title: "Dialogue Editing",
    description: "Surgical cleaning and enhancement of location audio for pristine clarity.",
    icon: Radio
  },
  {
    id: "podcast",
    title: "Podcast Production",
    description: "End-to-end podcast recording, editing, and distribution packaging.",
    icon: MonitorPlay
  },
  {
    id: "audiobook",
    title: "Audiobook Production",
    description: "ACX-compliant recording, editing, and mastering for publishers and authors.",
    icon: BookOpen
  },
  {
    id: "ott",
    title: "OTT Audio Post",
    description: "Deliverables tailored specifically for Netflix, Amazon Prime, and other streaming specs.",
    icon: Film
  },
  {
    id: "video-production",
    title: "Complete Video Production",
    description: "Full-service video production — concept to final cut — with cinematic visuals and professional-grade post-production.",
    icon: Video
  },
  {
    id: "ai-filmmaking",
    title: "AI Film Making",
    description: "Next-generation AI-assisted filmmaking — from script to screen — combining generative tools with human creative direction.",
    icon: Sparkles
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground">Comprehensive <br className="hidden md:block" />Audio Services.</h3>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id} 
                variants={item}
                whileHover={{ scale: 1.02, y: -4, rotateX: -3, rotateY: 5 }}
                style={{ perspective: 1000 }}
                className="h-full"
              >
                <Card className="bg-white border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full rounded-2xl overflow-hidden group">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">{service.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
