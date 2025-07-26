"use client";

import React from "react";

const Footer = () => {
    return (
        <footer className="py-6 flex flex-col items-center">
            <p className="text-base text-gray-300 text-center md:text-left">
                © {new Date().getFullYear()} <span className="text-pink-500">Atishay Jain</span>. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
