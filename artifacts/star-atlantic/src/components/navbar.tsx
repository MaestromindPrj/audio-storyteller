import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200/50" : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
          <img src="/logo-full.png" alt="Star Atlantic Logo" className="h-12 w-auto object-contain" />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">Services</button>
          <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollToSection("process")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">Process</button>
        </nav>
        
        <div>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 text-white font-medium px-6 rounded-full"
            data-testid="button-nav-contact"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
