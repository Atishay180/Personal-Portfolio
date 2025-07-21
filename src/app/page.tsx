'use client';

import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Education />
    </div>
  );
}
