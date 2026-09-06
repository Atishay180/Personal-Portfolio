import React, { useEffect } from 'react';
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

import { TypeAnimation } from 'react-type-animation';

import Link from 'next/link';

import { assets } from '../../public/assets/assets';
import { contact } from '@/content/contact';

const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="py-12 md:mt-10 lg:mt-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 text-center md:text-left">
                {/* Text Section */}
                <div className="w-full md:w-1/2" data-aos="fade-right">
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'>
                        Hi I Am{' '}
                        <span className="text-blue-500">
                            <TypeAnimation
                                sequence={[
                                    'Atishay Jain',
                                    2000,
                                    '',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>

                    <p className="mt-4 md:mt-6 text-sm md:text-lg text-gray-400" data-aos="fade-up">
                        Full-stack developer and automation engineer. I build React/Next.js apps with real backends, and the Playwright/Selenium frameworks that keep them from breaking in production.
                    </p>

                    <div className="mt-6 flex gap-2 md:gap-4 justify-center md:justify-start" data-aos="fade-up" data-aos-delay="100">
                        <Link
                            href="#projects-page"
                            className="rounded text-sm md:text-base bg-blue-500 px-3 sm:px-4 md:px-6 py-3 text-white text-center font-medium hover:bg-blue-600 transition"
                        >
                            View Projects
                        </Link>
                        <a
                            target='_blank'
                            href="https://drive.google.com/file/d/1CcxRRQWSKdmJRqxUQxuDEJgY-XFLKebu/view?usp=drive_link"
                            className="rounded text-sm md:text-base border border-gray-600 px-3 sm:px-4 md:px-6 py-3 text-gray-300 text-center font-medium hover:bg-gray-800 transition"
                        >
                            Download Resume
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="mt-8 flex gap-6 justify-center md:justify-start text-2xl md:text-4xl text-gray-300" data-aos="zoom-in" data-aos-delay="200">
                        {contact.socialMedia.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target='_blank'
                                className="hover:text-pink-400"
                            >
                                <item.logo />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center" data-aos="zoom-in-left">
                    <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.6)] ring-4 ring-blue-500/30 animate-float">
                        <Image
                            src={assets.profile}
                            alt="Profile"
                            fill
                            className="object-contain brightness-100 transition-transform duration-300 hover:scale-105"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
