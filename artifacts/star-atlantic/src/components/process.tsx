import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Consultation",
    description: "We discuss your creative vision, technical requirements, deliverables, and timeline."
  },
  {
    number: "2",
    title: "Pre-Production",
    description: "Script analysis, casting, session planning, and asset organization to ensure a smooth workflow."
  },
  {
    number: "3",
    title: "Production",
    description: "Recording sessions, Foley tracking, ADR, or music composition in our premium acoustic spaces."
  },
  {
    number: "4",
    title: "Post-Production",
    description: "Editing, sound design, mixing, and mastering to industry specifications."
  },
  {
    number: "5",
    title: "Delivery",
    description: "Final review, revisions, and secure delivery of perfectly formatted audio stems and masters."
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-gray-50/50 border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Workflow</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">The Process.</h3>
          <p className="text-muted-foreground text-lg font-light">
            A streamlined, professional approach designed to keep your project on track, on budget, and sounding incredible.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start justify-between relative">
            
            {/* Horizontal line for desktop */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-primary/30 z-0"></div>

            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex md:flex-col items-start md:items-center relative z-10 mb-12 md:mb-0 md:w-1/5 group"
              >
                {/* Vertical line for mobile */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute left-10 top-20 bottom-[-48px] w-[2px] border-l-2 border-dashed border-primary/30 z-0" />
                )}
                
                <div className="shrink-0 mr-6 md:mr-0 md:mb-8 flex justify-center w-20 md:w-full">
                  <div className="w-20 h-20 process-orb-3d flex items-center justify-center text-white font-display text-3xl font-bold shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>
                
                <div className="pt-2 md:pt-0 md:text-center">
                  <h4 className="text-xl font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed px-2">{step.description}</p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
