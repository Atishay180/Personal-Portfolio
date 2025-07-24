"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTrophy, FaCertificate } from "react-icons/fa";

import { assets } from "../../public/assets/assets";

const Achievements = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const items = [
        {
            icon: <FaTrophy className="text-yellow-400 text-4xl" />,
            title: "ISTQB Certified Tester",
            description: "Certified for foundational knowledge in software testing principles and techniques.",
            image: assets.istqb,
            link: "https://example.com/istqb-certificate", // replace with your link
        },
        {
            icon: <FaCertificate className="text-blue-400 text-4xl" />,
            title: "AWS Certified Cloud Practitioner",
            description: "Earned foundational certification from AWS demonstrating cloud fluency and understanding of core services.",
            image: assets.awsPractitioner,
            link: "https://example.com/aws-practitioner", // replace with your link
        },
        {
            icon: <FaCertificate className="text-green-400 text-4xl" />,
            title: "AWS Cloud Foundations",
            description: "Completed introductory training on AWS core services, global infrastructure, and pricing models.",
            image: assets.awsFoundation,
            link: "https://example.com/aws-foundation", // replace with your link
        },
        {
            icon: <FaCertificate className="text-green-400 text-4xl" />,
            title: "Certificate of Appreciation",
            description: "Recognized for conducting training workshops on AWS Cloud and Modern Web Development during academic tenure.",
            image: assets.appreciation,
            link: "https://example.com/appreciation", // replace with your link
        },
    ];

    return (
        <section className="my-28">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14" data-aos="fade-down">
                Achievements & <span className="text-blue-500">Certifications</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10" data-aos="zoom-in-up">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center bg-gray-900 border border-gray-600 rounded-xl shadow-md hover:shadow-blue-500/30 transform transition-transform duration-300 max-w-4xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                    >
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 h-64 py-4 flex justify-center items-center bg-black/25 rounded-md overflow-hidden">
                            <div className="relative w-60 h-full">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Text & Button Section */}
                        <div className="w-full md:w-1/2 p-6 flex flex-col gap-4 items-start">
                            <div className="flex gap-4 items-start">
                                {item.icon}
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                    <p className="text-sm text-gray-300 mt-1">{item.description}</p>
                                </div>
                            </div>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition"
                            >
                                View Certificate
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
