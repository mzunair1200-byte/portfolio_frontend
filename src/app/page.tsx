"use client";
import Hero from "@/src/components/Hero";
import WorkGrid from "@/src/components/WorkGrid";
import About from "@/src/components/about";
import SystemConsole from "@/src/components/SystemConsole";
import TechnicalDNA from "@/src/components/TechnicalDNA";
import Footer from "@/src/components/Footer";
import AgentChat from "@/src/components/AgentChat";

export default function Home() {
  return (
    <main className="bg-[#DEDBD2] selection:bg-[#2D4F3E] selection:text-white scroll-smooth">
      {/* <SystemConsole /> */}
      <Hero />
      <About />
      <TechnicalDNA />
      <WorkGrid />
      <Footer />
      <AgentChat />
    </main>
  );
}