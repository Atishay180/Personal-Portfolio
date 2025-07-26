"use client";

import React, { useEffect } from "react";
import { FaLaptopCode, FaPaintBrush, FaRobot, FaCloud } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const TechnicalExpertise = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const categoriesIcons = [
        {
            icon: <FaLaptopCode className="text-indigo-500 text-5xl drop-shadow-md" />,
            label: "Full Stack Development",
            text: "Built scalable web apps using the MERN stack",
        },
        {
            icon: <FaPaintBrush className="text-green-400 text-5xl drop-shadow-md" />,
            label: "Frontend Development",
            text: "Crafted responsive UIs with React & Tailwind",
        },
        {
            icon: <FaRobot className="text-yellow-300 text-5xl drop-shadow-md" />,
            label: "Automation Testing",
            text: "Tested apps with Selenium, Java & TestNG",
        },
        {
            icon: <FaCloud className="text-blue-400 text-5xl drop-shadow-md" />,
            label: "Cloud Computing",
            text: "Deployed Web Services on Amazon S3",
        },
    ];

    return (
        <section className="my-12 md:mt-20">
            <h2
                className="text-3xl md:text-4xl font-bold text-center mb-10 lg:mb-14"
                data-aos="fade-down"
            >
                Domains I <span className="text-blue-500">Worked In</span>
            </h2>

            <div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-7 lg:gap-10"
                data-aos="zoom-in-up"
            >
                {categoriesIcons.map((cat, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-4 md:p-6 rounded-2xl shadow-md hover:shadow-blue-500/40 transform transition-transform hover:scale-105 duration-300"
                        data-aos="fade-up"
                        data-aos-delay={idx * 150}
                    >
                        {cat.icon}
                        <h2 className="mt-4 text-lg font-semibold text-white text-center">
                            {cat.label}
                        </h2>
                        <p className="mt-2 text-sm text-gray-300 text-center">
                            {cat.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnicalExpertise;
