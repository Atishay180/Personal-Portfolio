"use client";

import React from "react";

const Footer = () => {
    return (
        <footer className="py-6 flex flex-col items-center">
            <p className="text-sm text-gray-400 text-center md:text-left">
                © {new Date().getFullYear()} Atishay Jain. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
