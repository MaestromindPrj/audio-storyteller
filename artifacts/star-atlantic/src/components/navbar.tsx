import React from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
          <img src="/logo-full.png" alt="Star Atlantic Logo" className="h-10 w-auto object-contain" />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-white/70 hover:text-white transition-colors">Services</button>
          <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-white/70 hover:text-white transition-colors">About</button>
          <button onClick={() => scrollToSection("process")} className="text-sm font-medium text-white/70 hover:text-white transition-colors">Process</button>
        </nav>
        
        <div>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 rounded-full"
            data-testid="button-nav-contact"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
