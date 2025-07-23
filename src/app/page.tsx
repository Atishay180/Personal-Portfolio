'use client';

import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TechnicalExpertise from "@/components/TechnicalExpertise";

export default function Home() {
  return (
    <div className="px-6 md:px-10 py-4">
      <Hero />
      <TechnicalExpertise />
      <Skills />
      <Projects />
      <Education />
    </div>
  );
}
