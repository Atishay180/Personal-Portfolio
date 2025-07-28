"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { education } from "@/content/education";

export default function Education() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div id="education-page" className="w-full flex flex-col items-center py-12">
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
                            <div className="absolute left-2 -top-6 bg-gray-600 text-sm px-3 py-1 rounded-full">
                                {item.time}
                            </div>

                            {/* Title Box */}
                            <div className="ml-2 bg-gray-900 p-4 rounded-t-lg border border-black">
                                <div className="flex items-center gap-2 font-bold text-lg">
                                    {<item.icon className="text-xl" />} {item.title}
                                </div>
                                <p className="font-semibold">{item.subtitle}</p>
                            </div>

                            {/* Description Box */}
                            <div className="ml-2 p-4 border border-t-0 border-black rounded-b-lg bg-gray-600">
                                {item.description.map((line, i) => (
                                    <p key={i} className="text-sm">
                                        <span className="text-white text-xl mr-1">-</span>
                                        {line}
                                    </p>
                                ))}
                                <a
                                    href={item.button.url}
                                    target="_blank"
                                    className="inline-block mt-2 bg-gray-900 text-white px-3 py-1 text-sm rounded"
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
