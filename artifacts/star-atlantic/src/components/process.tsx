import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We discuss your creative vision, technical requirements, deliverables, and timeline."
  },
  {
    number: "02",
    title: "Pre-Production",
    description: "Script analysis, casting, session planning, and asset organization to ensure a smooth workflow."
  },
  {
    number: "03",
    title: "Production",
    description: "Recording sessions, Foley tracking, ADR, or music composition in our premium acoustic spaces."
  },
  {
    number: "04",
    title: "Post-Production",
    description: "Editing, sound design, mixing, and mastering to industry specifications."
  },
  {
    number: "05",
    title: "Delivery",
    description: "Final review, revisions, and secure delivery of perfectly formatted audio stems and masters."
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-card/30 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Workflow</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">The Process.</h3>
          <p className="text-white/60 text-lg font-light">
            A streamlined, professional approach designed to keep your project on track, on budget, and sounding incredible.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-12 relative pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute left-12 top-24 bottom-0 w-px bg-white/10" />
              )}
              
              <div className="md:w-32 flex shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-card border border-white/10 flex items-center justify-center z-10">
                  <span className="text-3xl font-display font-bold text-primary">{step.number}</span>
                </div>
              </div>
              
              <div className="md:pt-6">
                <h4 className="text-2xl font-bold text-white mb-3">{step.title}</h4>
                <p className="text-white/60 text-lg leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
