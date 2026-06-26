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
    <section className="py-24 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Our Clients
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
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
              className="group flex flex-col items-center justify-center gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:border-primary/20 hover:shadow-md transition-all duration-300"
            >
              <div className="w-24 h-24 flex items-center justify-center rounded-xl overflow-hidden bg-white">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-full h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-center text-sm font-semibold text-primary uppercase tracking-widest mb-8">
            Industries We Serve
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto">
            {industries.map((industry) => (
              <div
                key={industry}
                className="px-5 py-2.5 rounded-full border border-gray-200 bg-gray-50 text-foreground font-medium text-sm hover:bg-white hover:border-primary/30 hover:shadow-sm transition-all cursor-default"
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
