"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { MdWork } from "react-icons/md";

export default function Education() {
    const education = [
        {
            title: "Gyan Ganga College of Technology",
            subtitle: "BTech - CSE",
            time: "2021 - 2025",
            description: [
                "INTERNSHIP at web Development and Designing in OASIS INFOTECH.",
                "CGPA: 8.27",
            ],
            icon: <MdWork className="text-xl" />,
            button: { label: "Details", url: "#" },
        },
        {
            title: "Noble Children Academy",
            subtitle: "Higher Secondary Education",
            time: "2020 - 2021",
            description: [
                "I have studied basic software engineering subjects like DS, Algorithms, DBMS, etc.",
                "Percentage: 63.2%",
            ],
            icon: <FaGraduationCap className="text-xl" />,
            button: { label: "Website", url: "#" },
        },
        {
            title: "Small Wonders Senior Secondary School",
            subtitle: "Senior Secondary Education",
            time: "2018 - 2019",
            description: [
                "I have studied science stream subjects like Physics, Chemistry, Mathematics etc.",
                "Percentage: 64.8%",
            ],
            icon: <FaSchool className="text-xl" />,
            button: { label: "Website", url: "#" },
        },
    ];

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div id="education-page" className="w-full flex flex-col items-center py-16">
            <div className="py-6 md:py-12 border-white w-[80vw]">
                <h2
                    className="text-4xl font-bold text-center mb-24"
                    data-aos="zoom-in"
                >
                    Education <span className="text-blue-500">Timeline</span>
                </h2>

                <div className="relative border-l-2 border-blue-600 pl-8">
                    <div
                        className="absolute -left-10 -top-16 text-sm font-semibold bg-blue-600 text-white px-4 py-1 rounded-full"
                        data-aos="fade-right"
                    >
                        LEARNING
                    </div>

                    {education.map((item, idx) => (
                        <div
                            key={idx}
                            className="mb-16 relative"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                        >
                            <div className="w-4 h-6"></div>

                            {/* Timeline Dot */}
                            <div className="absolute -left-10 -top-4 w-4 h-4 bg-blue-600 rounded-full border-2 border-white z-10"></div>

                            {/* Time Label */}
                            <div className="absolute left-2 -top-6 bg-gray-500 text-sm px-3 py-1 rounded-full">
                                {item.time}
                            </div>

                            {/* Title Box */}
                            <div className="ml-2 bg-gray-800 p-4 rounded-t-lg border border-black">
                                <div className="flex items-center gap-2 font-bold text-lg">
                                    {item.icon} {item.title}
                                </div>
                                <p className="font-semibold">{item.subtitle}</p>
                            </div>

                            {/* Description Box */}
                            <div className="ml-2 p-4 border border-t-0 border-black rounded-b-lg bg-gray-500">
                                {item.description.map((line, i) => (
                                    <p key={i} className="text-sm">
                                        <span className="text-red-600 mr-1">*</span>
                                        {line}
                                    </p>
                                ))}
                                <a
                                    href={item.button.url}
                                    target="_blank"
                                    className="inline-block mt-2 bg-gray-800 text-white px-3 py-1 text-sm rounded"
                                >
                                    {item.button.label}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
