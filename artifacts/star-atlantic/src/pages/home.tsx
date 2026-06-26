import React from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Industries } from "@/components/industries";
import { About } from "@/components/about";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Industries />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
