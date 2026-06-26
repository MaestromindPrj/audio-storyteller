import { useLocation } from "wouter";

export default function Privacy() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <button onClick={() => setLocation("/")} className="flex items-center gap-2 cursor-pointer">
            <img src="/logo-full.png" alt="Star Atlantic Logo" className="h-12 w-auto object-contain" />
          </button>
          <button
            onClick={() => setLocation("/")}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Back to Home
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-foreground mb-3">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10 text-sm">Last updated: June 2025</p>

        <div className="prose prose-gray max-w-none space-y-10 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
            <p>Star Atlantic Productions ("we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or engage our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong className="text-foreground">Contact Information</strong> — Name, company name, email address, and phone number submitted through our contact form.</li>
              <li><strong className="text-foreground">Project Information</strong> — Details about your project, budget range, timeline, and requirements that you voluntarily share with us.</li>
              <li><strong className="text-foreground">Usage Data</strong> — Standard web analytics data such as pages visited, time spent on site, and browser type (collected anonymously).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
            <p>We use the information collected to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Respond to your enquiries and provide requested services</li>
              <li>Send project updates, invoices, and relevant communications</li>
              <li>Improve our website and service offerings</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or trade your personal information to any third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Storage &amp; Security</h2>
            <p>Your information is stored securely and accessible only to authorised staff. We use industry-standard security measures to protect your data against unauthorised access, alteration, or disclosure. However, no method of electronic transmission is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Cookies</h2>
            <p>Our website may use cookies to enhance your browsing experience and gather anonymous usage statistics. You can disable cookies through your browser settings; however, some features of the site may not function correctly without them.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Third-Party Services</h2>
            <p>We may use third-party tools such as Google Maps (for location display) and analytics services. These third parties have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of third-party services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. WhatsApp &amp; Email Communications</h2>
            <p>If you contact us via WhatsApp or email, your contact details and message content are used solely to respond to your enquiry. These communications are not stored beyond what is necessary to handle your request.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Withdraw consent for marketing communications at any time</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, please contact us at the details below.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Data Retention</h2>
            <p>We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law. Project-related data is typically retained for 3 years after project completion.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">11. Contact Us</h2>
            <p>For any questions or concerns about this Privacy Policy, please contact us:</p>
            <div className="mt-3 space-y-1">
              <p><strong className="text-foreground">Star Atlantic Productions</strong></p>
              <p>27/49 Shanmughamani Illam, Lake View Road, West Mambalam, Chennai 600033, Tamil Nadu, India</p>
              <p><a href="mailto:staratlanticproductions@gmail.com" className="text-primary hover:underline">staratlanticproductions@gmail.com</a></p>
              <p><a href="tel:+918883820208" className="text-primary hover:underline">+91 88838 20208</a></p>
            </div>
          </section>

        </div>
      </main>

      <footer className="border-t border-gray-200 py-8 mt-12">
        <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground/60 text-sm">
          © 2025 Star Atlantic Productions. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
