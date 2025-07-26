"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import { skills } from "@/content/skills";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="skills-page"
      className="rounded-2xl shadow-lg bg-gray-900 p-12 border border-gray-700"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-center mb-12 border-b border-gray-700 pb-4">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Object.entries(skills).map(([category, techs], idx) => (
          <div key={idx}>
            <h3 className="text-xl font-bold mb-4 text-blue-500">{category}:</h3>
            <div className="flex flex-wrap gap-3">
              {techs.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-black border border-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-blue-500 transition text-sm"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={20}
                    height={20}
                    className="rounded-full invert object-contain"
                  />
                  <span className="text-white">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
