export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#F8F9FA] pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo-full.png" alt="Star Atlantic Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-muted-foreground max-w-sm mb-6 font-light leading-relaxed">
              Crafting Sound That Tells Stories. Premium audio production and post-production studio based in Chennai, India.
            </p>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-primary transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-primary transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection("process")} className="text-muted-foreground hover:text-primary transition-colors">Process</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-primary transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-muted-foreground font-light">
              <li className="leading-relaxed">27/49 Shanmughamani Illam, Lake View Road, West Mambalam, Chennai 600033</li>
              <li><a href="mailto:staratlanticproductions@gmail.com" className="hover:text-primary transition-colors font-medium">staratlanticproductions@gmail.com</a></li>
              <li><a href="tel:+918883820208" className="hover:text-primary transition-colors font-medium">+91 88838 20208</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/60 text-sm">
            © 2025 Star Atlantic Productions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/terms" className="text-muted-foreground/60 hover:text-primary text-sm transition-colors" data-testid="link-terms">
              Terms &amp; Conditions
            </a>
            <a href="/privacy" className="text-muted-foreground/60 hover:text-primary text-sm transition-colors" data-testid="link-privacy">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
