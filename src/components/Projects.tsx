"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import { assets } from "../../public/assets/assets";

const projects = [
    {
        name: "Healthcare Website",
        image: assets.heathCare,
        tech: ["MERN Stack", "Tailwind CSS", "Cloudinary", "AOS", "Stripe"],
        description:
            "Role-based portal for doctors, users, and admins with real-time availability, appointment booking, secure login, and online payments.",
        link: "https://healthcare-website-y0yg.onrender.com",
        github: "https://github.com/Atishay180/Healthcare-Website",
    },
    {
        name: "Online Food Ordering Website",
        image: assets.onlineFood,
        tech: ["MERN Stack", "Cloudinary", "Stripe"],
        description:
            "Admin dashboard for managing orders, inventory, and users with dynamic menu browsing and real-time updates.",
        link: "https://food-ecommerce-website-frontend.onrender.com",
        github: "https://github.com/Atishay180/Food-Delivery-Website",
    },
    {
        name: "Real-Time Chat Application",
        image: assets.chatApp,
        tech: ["MERN", "Tailwind CSS", "Socket.io"],
        description:
            "Group/private chat app with typing indicators, real-time presence tracking, media sharing, and smooth UX.",
        link: "https://chat-application-c3n5.onrender.com",
        github: "https://github.com/Atishay180/Chat-App",
    },
    {
        name: "Twitter Clone",
        image: assets.twitterClone,
        tech: ["MERN Stack", "Tailwind CSS", "TanStack Query", "Cloudinary"],
        description:
            "Twitter-like platform with tweeting, following, liking, media uploads, and real-time feed updates.",
        link: "https://twitter-clone-7340.onrender.com",
        github: "https://github.com/Atishay180/Twitter-Clone",
    },
];

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section id="projects-page" className="mt-20 py-8 md:py-16">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-14" data-aos="fade-up">
                    My <span className="text-blue-500">Projects</span>
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-900 rounded-xl shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition duration-300 flex flex-col"
                            data-aos="zoom-in-up"
                        >
                            {project.image && (
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    className="rounded-t-2xl w-full h-48 object-cover"
                                />
                            )}

                            <div className="p-5 flex flex-col justify-between h-full">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-700">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-blue-400 hover:underline"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-blue-400 hover:underline"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
