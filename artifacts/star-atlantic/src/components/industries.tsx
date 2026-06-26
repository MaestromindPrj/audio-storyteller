import { motion } from "framer-motion";

const clients: { name: string; logo: string | null; color: string }[] = [
  { name: "Kuku FM",         logo: "/kukufm.png",   color: "#F97316" },
  { name: "Kuku TV",         logo: "/kukutv.png",   color: "#EF4444" },
  { name: "Pocket FM",       logo: "/pocketfm.png", color: "#8B5CF6" },
  { name: "ShareChat",       logo: "/sharechat.png",color: "#10B981" },
  { name: "Guru App (Tamil)",logo: "/guruapp.png",  color: "#F59E0B" },
  { name: "Quick TV",        logo: "/quicktv.png",  color: "#3B82F6" },
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
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base">
            Partnering with India's top audio and streaming platforms to deliver world-class sound.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-20">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              data-testid={`client-logo-${client.name.toLowerCase().replace(/[\s()]+/g, "-")}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col items-center justify-center gap-4 p-7 rounded-2xl border border-gray-100 bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ boxShadow: "0 1px 4px 0 rgba(0,0,0,0.04)" }}
            >
              {client.logo ? (
                <div className="w-20 h-20 flex items-center justify-center rounded-xl overflow-hidden bg-white p-1">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
              ) : (
                <div
                  className="w-20 h-20 flex items-center justify-center rounded-xl font-bold text-white text-lg tracking-tight"
                  style={{ background: `linear-gradient(135deg, ${client.color}, ${client.color}cc)` }}
                >
                  {client.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </div>
              )}
              <span
                className="font-semibold text-sm text-center transition-colors duration-300 group-hover:text-primary"
                style={{ color: "#1a1a2e" }}
              >
                {client.name}
              </span>
              <div
                className="h-0.5 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: client.color }}
              />
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
