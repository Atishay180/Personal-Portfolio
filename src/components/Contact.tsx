"use client";

import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

import AOS from "aos";
import "aos/dist/aos.css";

import { contact } from "@/content/contact";
import toast from "react-hot-toast";
import axios from "axios";

const Contact = () => {
    const [selectedInterest, setSelectedInterest] = useState("Web Development");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const wordCount = message.trim().split(/\s+/).length;

        if (wordCount < 10 || wordCount > 1000) {
            toast.error("Message must be between 10 and 1000 words.");
            setLoading(false);
            return;
        }

        try {
            const { data } = await axios.post(`/api/send-email`, { name, email, message, topic: selectedInterest })

            if (data.success) {
                toast.success("Message sent successfully")
            }

            setName("");
            setEmail("");
            setMessage("");
            setSelectedInterest("Web Development");
        } catch (error: any) {
            toast.error(error?.response?.data?.error || error.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <section id="contact-page" className="bg-gray-900 text-white border border-gray-700 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-10 rounded-xl">
            {/* Left Side */}
            <div className="md:w-1/2 space-y-8 mb-10 md:mb-0" data-aos="fade-right">
                <h2 className="text-4xl font-bold leading-snug">
                    Let’s discuss <br /> on something <span className="text-pink-500">cool</span> together
                </h2>

                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-lg">
                        <FaEnvelope className="text-pink-500" />
                        {contact.email}
                    </div>
                    <div className="flex items-center gap-3 text-lg">
                        <FaPhoneAlt className="text-pink-500" />
                        {contact.mobile}
                    </div>
                    <div className="flex items-center gap-3 text-lg">
                        <FaMapMarkerAlt className="text-pink-500" />
                        {contact.address}
                    </div>
                </div>

                <div className="flex gap-5 mt-6 text-2xl">
                    {contact.socialMedia.map((item, index) => (
                        <a
                            key={index}
                            target="_blank"
                            href={item.url}
                        >
                            {<item.logo className="cursor-pointer hover:text-pink-500" />}
                        </a>
                    ))}
                </div>
            </div>

            {/* Right Side - Form */}
            <div
                className="bg-white text-black rounded-xl p-8 w-full md:w-1/2 shadow-lg"
                data-aos="fade-left"
            >
                <p className="font-medium mb-4">Let discuss...</p>

                <div className="flex flex-wrap gap-3 mb-6">
                    {contact.discussionTopics.map((topic) => (
                        <button
                            key={topic}
                            onClick={() => setSelectedInterest(topic)}
                            className={`px-4 py-2 rounded-full border ${selectedInterest === topic
                                ? "bg-pink-600 text-white border-pink-600"
                                : "bg-white border-gray-300 text-black hover:bg-gray-100"
                                }`}
                        >
                            {topic}
                        </button>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Your name"
                        className="w-full border-b border-pink-600 py-2 outline-none"
                        required
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Your email"
                        className="w-full border-b border-pink-600 py-2 outline-none"
                        required
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                        rows={3}
                        className="w-full border-b border-pink-600 py-2 outline-none"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 cursor-pointer rounded-lg flex items-center gap-2 mt-4"
                    >
                        {!loading ?
                            (
                                <>
                                    <IoIosSend /> Send Message
                                </>
                            ) : (
                                "Loading..."
                            )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
