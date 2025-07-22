"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    FaLaptopCode,
    FaPaintBrush,
    FaRobot,
    FaCloud
} from "react-icons/fa";

const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const skillCategories = [
        {
            title: "Web Development",
            skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "MongoDB"],
        },
        {
            title: "Automation Testing",
            skills: ["Selenium", "Java", "JUnit", "TestNG"],
        },
        {
            title: "Computer Science Fundamentals",
            skills: ["Data Structures", "Algorithms", "OOPs"],
        },
        {
            title: "Cloud & DevOps",
            skills: ["AWS (Cloud Practitioner)", "GitHub", "CI/CD basics"],
        },
    ];

    const categoriesIcons = [
        {
            icon: <FaLaptopCode className="text-indigo-500 text-5xl" />,
            label: "Full Stack Development"
        },
        {
            icon: <FaPaintBrush className="text-green-400 text-5xl" />,
            label: "Frontend Development"
        },
        {
            icon: <FaRobot className="text-yellow-300 text-5xl" />,
            label: "Automation Testing"
        },
        {
            icon: <FaCloud className="text-blue-400 text-5xl" />,
            label: "Cloud Computing"
        }
    ];

    return (
        <section id="skills-page" className="min-h-screen py-16 flex flex-col items-center">
            {/* Header Logos Section */}
            <div className="max-w-6xl flex flex-col items-center mb-20">
                <h2 className="text-4xl font-bold text-center mb-10" data-aos="fade-up">
                    Domains I Work In
                </h2>
                <div className="flex flex-wrap justify-center gap-6 text-center" data-aos="fade-up">
                    {categoriesIcons.map((cat, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center bg-gray-900 p-6 rounded-xl hover:scale-105 transition duration-300 shadow-md w-40"
                        >
                            {cat.icon}
                            <span className="mt-3 text-lg font-medium">{cat.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Skills Card Section */}
            <div className="max-w-5xl flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold mb-10" data-aos="fade-up">
                    My <span className="text-indigo-500">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-10">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-indigo-500/30 transition duration-300 w-72"
                            data-aos="zoom-in-up"
                        >
                            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                            <ul className="space-y-2">
                                {category.skills.map((skill, i) => (
                                    <li key={i} className="text-gray-300 hover:text-indigo-400 transition">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
