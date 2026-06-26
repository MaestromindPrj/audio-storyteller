import React from "react";

const industries = [
  "Filmmakers",
  "Content Creators",
  "Publishers",
  "Brands",
  "Podcast Creators",
  "Audiobook Publishers",
  "OTT Platforms",
  "Businesses"
];

export function Industries() {
  return (
    <section className="py-20 bg-background border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-medium text-white/40 uppercase tracking-widest mb-10">
          Trusted by industry leaders across
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
          {industries.map((industry) => (
            <div 
              key={industry}
              className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white/80 font-medium text-sm md:text-base backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
