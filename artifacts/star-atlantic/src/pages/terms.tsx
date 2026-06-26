import { useLocation } from "wouter";

export default function Terms() {
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
        <h1 className="text-4xl font-bold text-foreground mb-3">Terms &amp; Conditions</h1>
        <p className="text-muted-foreground mb-10 text-sm">Last updated: June 2025</p>

        <div className="prose prose-gray max-w-none space-y-10 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>By engaging the services of Star Atlantic Productions ("we", "us", or "our"), you ("Client") agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not proceed with any service engagement.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Services</h2>
            <p>Star Atlantic Productions provides audio production, post-production, video production, AI-assisted filmmaking, and related creative services from our studio in Chennai, India. The exact scope of services for each project will be defined in a separate project agreement or invoice.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Project Agreements &amp; Quotations</h2>
            <p>All quotations are valid for 30 days from the date of issue. A project commences only upon receipt of a signed agreement and the agreed advance payment. We reserve the right to decline any project at our discretion.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Payment Terms</h2>
            <p>Standard payment terms require a 50% advance before work begins and the remaining 50% upon project completion and before final file delivery. All prices are in Indian Rupees (INR) unless otherwise agreed. Late payments may attract interest at 2% per month.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Revisions</h2>
            <p>Each project includes a defined number of revision rounds as specified in the project agreement. Additional revisions beyond the agreed scope will be billed at our standard hourly rate. Revision requests must be submitted in writing within 7 days of receiving deliverables.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Intellectual Property</h2>
            <p>Upon receipt of full payment, the Client receives a licence to use the final deliverables for the agreed purpose. Star Atlantic Productions retains the right to use project work in its portfolio and promotional materials unless the Client requests confidentiality in writing prior to project commencement.</p>
            <p className="mt-3">All source files, stems, session files, and raw recordings remain the property of Star Atlantic Productions unless explicitly transferred in the project agreement.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Confidentiality</h2>
            <p>We treat all Client materials and project details as confidential. We will not share, reproduce, or distribute any Client-provided material to third parties without written consent, except where required by law.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Cancellation Policy</h2>
            <p>If a Client cancels a project after work has commenced, the advance payment is non-refundable. If work beyond 50% is completed, an additional payment proportional to work done may be required. Cancellations must be communicated in writing.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Limitation of Liability</h2>
            <p>Star Atlantic Productions shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability in any matter is limited to the total fees paid for the specific project in question.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Governing Law</h2>
            <p>These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">11. Changes to Terms</h2>
            <p>We reserve the right to update these Terms and Conditions at any time. Continued engagement of our services after changes constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">12. Contact</h2>
            <p>For any questions regarding these Terms, please contact us at <a href="mailto:staratlanticproductions@gmail.com" className="text-primary hover:underline">staratlanticproductions@gmail.com</a> or call <a href="tel:+918883820208" className="text-primary hover:underline">+91 88838 20208</a>.</p>
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
