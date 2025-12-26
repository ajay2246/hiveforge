import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import TrustBar from "@/components/site/TrustBar";
import WhatIBuild from "@/components/site/WhatIBuild";
import CloudDevOps from "@/components/site/CloudDevOps";
import AppliedAI from "@/components/site/AppliedAI";
import FeaturedExperience from "@/components/site/FeaturedExperience";
import Process from "@/components/site/Process";
import About from "@/components/site/About";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/site/Reveal";

export default function Home() {
  return (
    <div className="hf-honey-bg relative min-h-screen text-zinc-900">
      <div className="hf-hex absolute inset-0 pointer-events-none" />
      <div className="hf-noise" />
      <Navbar />
      <main className="relative">
        <Reveal><Hero /></Reveal>
        <Reveal delayMs={80}><TrustBar /></Reveal>
        <Reveal delayMs={120}><WhatIBuild /></Reveal>
        <Reveal delayMs={140}><CloudDevOps /></Reveal>
        <Reveal delayMs={160}><AppliedAI /></Reveal>
        <Reveal delayMs={180}><FeaturedExperience /></Reveal>
        <Reveal delayMs={200}><Process /></Reveal>
        <Reveal delayMs={220}><About /></Reveal>
        <Reveal delayMs={240}><CTA /></Reveal>
      </main>
      <Footer />
    </div>
  );
}

