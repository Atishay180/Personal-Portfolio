"use client";

import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaLinkedin  } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const discussionTopic = ["Web Development", "Hiring Opportunity", "Automation Testing", "Other"];

const Contact = () => {
    const [selectedInterest, setSelectedInterest] = useState("Web Development");

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <section className="min-h-screen bg-gray-900 text-white border border-gray-600 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-10 rounded-xl">
            {/* Left Side */}
            <div className="md:w-1/2 space-y-8 mb-10 md:mb-0" data-aos="fade-right">
                <h2 className="text-4xl font-bold leading-snug">
                    Let’s discuss <br /> on something <span className="text-pink-500">cool</span> together
                </h2>

                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-lg">
                        <FaEnvelope className="text-pink-500" />
                        atishayjain@gmail.com
                    </div>
                    <div className="flex items-center gap-3 text-lg">
                        <FaPhoneAlt className="text-pink-500" />
                        9893312749
                    </div>
                    <div className="flex items-center gap-3 text-lg">
                        <FaMapMarkerAlt className="text-pink-500" />
                        Jabalpur MP
                    </div>
                </div>

                <div className="flex gap-5 mt-6 text-xl">
                    <FaFacebookF className="cursor-pointer hover:text-pink-500" />
                    <FaInstagram className="cursor-pointer hover:text-pink-500" />
                    <FaLinkedin className="cursor-pointer hover:text-pink-500" />
                </div>
            </div>

            {/* Right Side - Form */}
            <div
                className="bg-white text-black rounded-xl p-8 w-full md:w-1/2 shadow-lg"
                data-aos="fade-left"
            >
                <p className="font-medium mb-4">Let discuss...</p>

                <div className="flex flex-wrap gap-3 mb-6">
                    {discussionTopic.map((topic) => (
                        <button
                            key={topic}
                            onClick={() => setSelectedInterest(topic)}
                            className={`px-4 py-2 rounded-full border ${
                                selectedInterest === topic
                                    ? "bg-pink-600 text-white border-pink-600"
                                    : "bg-white border-gray-300 text-black hover:bg-gray-100"
                            }`}
                        >
                            {topic}
                        </button>
                    ))}
                </div>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your name"
                        className="w-full border-b border-pink-600 py-2 outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Your email"
                        className="w-full border-b border-pink-600 py-2 outline-none"
                    />
                    <textarea
                        placeholder="Your message"
                        rows={3}
                        className="w-full border-b border-pink-600 py-2 outline-none"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded-lg flex items-center gap-2 mt-4"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
                             viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M14.752 11.168l-9.804-3.92a1 1 0 00-1.316 1.316l3.92 9.804a1 1 0 001.884.048l1.585-4.263a1 1 0 01.597-.597l4.263-1.585a1 1 0 00-.048-1.884z"/>
                        </svg>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
