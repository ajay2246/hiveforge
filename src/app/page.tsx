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
import BackToTop from "@/components/site/BackToTop";
import Reveal from "@/components/site/Reveal";

export default function Home() {
  return (
    <div className="hf-honey-bg relative min-h-screen text-zinc-900">
      <div className="hf-hex absolute inset-0 pointer-events-none" />
      <div className="hf-noise" />
      <Navbar />
      <main className="relative">
        <Reveal><Hero /></Reveal>
        <div className="hf-section-divider" />
        <Reveal delayMs={80}><TrustBar /></Reveal>
        <div className="hf-section-divider" />
        <Reveal delayMs={120}><WhatIBuild /></Reveal>
        <div className="hf-section-divider" />
        <Reveal delayMs={140}><CloudDevOps /></Reveal>
        <div className="hf-section-divider" />
        <Reveal delayMs={160}><AppliedAI /></Reveal>
        <div className="hf-section-divider" />
        <Reveal delayMs={180}><FeaturedExperience /></Reveal>
        <div className="hf-section-divider" />
        <Reveal delayMs={200}><Process /></Reveal>
        <div className="hf-section-divider" />
        <Reveal delayMs={220}><About /></Reveal>
        <div className="hf-section-divider" />
        <Reveal delayMs={240}><CTA /></Reveal>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

