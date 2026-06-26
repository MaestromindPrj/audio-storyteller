import React from "react";
import { motion } from "framer-motion";

const clients = [
  { name: "Kuku FM", logo: "/kukufm.png" },
  { name: "Pocket FM", logo: "/pocketfm.png" },
  { name: "Guru App", logo: "/guruapp.png" },
  { name: "ShareChat", logo: "/sharechat.png" },
];

const industries = [
  "Filmmakers",
  "Content Creators",
  "Publishers",
  "Brands",
  "Podcast Creators",
  "Audiobook Publishers",
  "OTT Platforms",
  "Businesses",
];

export function Industries() {
  return (
    <section className="py-24 bg-background border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-white/40 uppercase tracking-widest mb-3">
            Our Clients
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              data-testid={`client-logo-${client.name.toLowerCase().replace(/\s+/g, "-")}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col items-center justify-center gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-xl overflow-hidden bg-white p-2">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white/80 font-semibold text-sm text-center group-hover:text-white transition-colors">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-center text-sm font-medium text-white/40 uppercase tracking-widest mb-8">
            Industries We Serve
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto">
            {industries.map((industry) => (
              <div
                key={industry}
                className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 font-medium text-sm backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
              >
                {industry}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
