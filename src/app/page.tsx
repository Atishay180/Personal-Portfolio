'use client';

import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TechnicalExpertise from "@/components/TechnicalExpertise";

export default function Home() {
  return (
    <div className="px-6 md:px-10 py-4 flex flex-col gap-6">
      <Hero />
      <TechnicalExpertise />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
    </div>
  );
}
