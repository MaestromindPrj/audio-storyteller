import React from "react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo-full.png" alt="Star Atlantic Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-white/60 max-w-sm mb-6">
              Crafting Sound That Tells Stories. Premium audio production and post-production studio based in Chennai, India.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection("services")} className="text-white/60 hover:text-primary transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection("about")} className="text-white/60 hover:text-primary transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection("process")} className="text-white/60 hover:text-primary transition-colors">Process</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="text-white/60 hover:text-primary transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-white/60">
              <li>27/49 Shanmughamani Illam, Lake View Road, West Mambalam, Chennai 600033, Tamil Nadu, India</li>
              <li><a href="mailto:staratlanticproductions@gmail.com" className="hover:text-primary transition-colors">staratlanticproductions@gmail.com</a></li>
              <li><a href="tel:+918883820208" className="hover:text-primary transition-colors">+91 88838 20208</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2025 Star Atlantic Productions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
