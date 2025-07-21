"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import chatAppImg from "@/../public/assets/chat-app.png";
import healthCareImg from "@/../public/assets/health-care.png";
import twitterCloneImg from "@/../public/assets/twiiter-clone.png";
import onlineFoodImg from "@/../public/assets/online-food-delivery.png";

const projects = [
    {
        name: "Health Care Website",
        image: healthCareImg,
        tech: ["Next.js", "Firebase", "OpenAI API"],
        description: "An AI-powered platform for mock interviews, code practice, and tracking progress for tech job aspirants.",
        link: "https://youraiproject.vercel.app",
        github: "https://github.com/yourgithub/ai-interview",
    },
    {
        name: "Online Food Ordering Website",
        image: onlineFoodImg,
        tech: ["React", "Node.js", "MongoDB", "JWT"],
        description: "Admin and user login system for managing appointments, doctors, and patients with secure flows and analytics.",
        link: "https://yourapp.live",
        github: "https://github.com/yourgithub/healthcare-dashboard",
    },
    {
        name: "Real-Time Chat Application",
        image: chatAppImg,
        tech: ["MERN", "Tailwind CSS", "Socket.io"],
        description: "A full-featured video streaming platform with real-time commenting, creator following, and personalized feeds.",
        link: "https://yourapp.live",
        github: "https://github.com/yourgithub/video-stream-app",
    },
    {
        name: "Twitter Clone",
        image: twitterCloneImg,
        tech: ["MERN", "Tailwind CSS", "Socket.io"],
        description: "A full-featured video streaming platform with real-time commenting, creator following, and personalized feeds.",
        link: "https://yourapp.live",
        github: "https://github.com/yourgithub/video-stream-app",
    },
];

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="projects-page" className="min-h-screen flex flex-col items-center py-16">
            <div className="max-w-6xl flex flex-col items-center">
                <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">
                    My <span className="text-indigo-500">Projects</span>
                </h2>

                <div className="flex flex-wrap justify-evenly gap-10 w-full">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition duration-300 w-[300px] sm:w-[280px] md:w-[300px] lg:w-[320px]"
                            data-aos="zoom-in-up"
                        >
                            {project.image && (
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-44 object-cover rounded-lg mb-4"
                                />
                            )}

                            <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                                {project.name}
                            </h3>

                            <p className="text-gray-300 text-sm mb-3">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 text-sm justify-center">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-indigo-400 hover:underline"
                                    >
                                        Live Demo
                                    </a>
                                )}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-400 hover:underline"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
