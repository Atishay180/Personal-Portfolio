"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { assets } from "../../../public/assets/assets";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">

        {/* Image Section */}
        <div className="flex justify-center md:w-1/2" data-aos="fade-right">
          <div className="relative w-72 h-96 md:w-80 md:h-[26rem] rounded-2xl overflow-hidden border-4 border-indigo-500 shadow-lg shadow-indigo-500/30 hover:scale-105 transition-transform duration-300">
            <Image
              src={assets.profile}
              alt="Atishay Jain"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 space-y-8" data-aos="fade-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-indigo-400">
            About Me
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Hey! I’m <span className="text-indigo-400 font-semibold">Atishay Jain</span>, a passionate Full Stack Developer from India. I love building interactive and high-performance web apps with clean and scalable code. With expertise in React.js, Node.js, and MongoDB, I aim to deliver exceptional digital experiences.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-indigo-300 mb-1">🎓 Education</h3>
              <ul className="text-gray-400 list-disc ml-5 space-y-1">
                <li>B.Tech CSE - Gyan Ganga College (2021 - 2025)</li>
                <li>HSC - XYZ School (2019 - 2021)</li>
                <li>SSC - ABC School (2017 - 2019)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-indigo-300 mb-1">💻 Skills</h3>
              <ul className="text-gray-400 list-disc ml-5 space-y-1">
                <li>Frontend: React.js, Tailwind CSS, Next.js</li>
                <li>Backend: Node.js, Express.js</li>
                <li>Database: MongoDB, Firebase</li>
                <li>Testing: Selenium (Java), Postman</li>
                <li>Tools: Git, GitHub, VS Code, Render</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
