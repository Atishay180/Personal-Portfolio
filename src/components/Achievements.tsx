"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import { achievements } from "@/content/achievements";

const Achievements = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="md:mt-12 mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" data-aos="fade-down">
                Achievements & <span className="text-blue-500">Certifications</span>
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12'>
                {achievements.map((item, index) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        key={index}
                        className="flex flex-col sm:flex-row-reverse items-center sm:items-start gap-4 p-6 rounded-xl border border-gray-700 bg-gray-900 w-full lg:max-w-3xl mx-auto"
                    >
                        <div className="w-full sm:w-48 h-44 flex-shrink-0 overflow-hidden rounded-lg">
                            <Image
                                alt=""
                                src={item.image}
                                className="object-cover w-full h-full"
                                width={192}
                                height={128}
                            />
                        </div>

                        <div className="flex flex-col justify-evenly w-full h-full min-w-0">
                            <h3 className="text-xl font-semibold text-white break-words">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-400 mt-1 line-clamp-2 break-words">
                                {item.description}
                            </p>

                            <a
                                href={item.link}
                                target="_blank"
                                className="mt-3 inline-block w-fit px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition"
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
