"use client";

import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { technicalExpertise } from "@/content/technicalExpertise";

const TechnicalExpertise = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

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
                {technicalExpertise.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-4 md:p-6 rounded-2xl shadow-md hover:shadow-blue-500/40 transform transition-transform hover:scale-105 duration-300"
                        data-aos="fade-up"
                        data-aos-delay={idx * 150}
                    >
                        {<item.icon className={item.iconClassName} />}
                        <h2 className="mt-4 text-lg font-semibold text-white text-center">
                            {item.label}
                        </h2>
                        <p className="mt-2 text-sm text-gray-300 text-center">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnicalExpertise;
