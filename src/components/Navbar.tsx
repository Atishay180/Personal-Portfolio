"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { assets } from "../../public/assets/assets";

interface NavbarItems {
  href: string;
  label: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarItems: NavbarItems[] = [
    { href: "#skills-page", label: "Skills" },
    { href: "#projects-page", label: "Projects" },
    { href: "#education-page", label: "Education" },
    { href: "#contact-page", label: "Contact" },
  ];

  return (
    <nav className="w-full px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
        >
          <Image src={assets.logoPortfolio} className="w-28 sm:w-32 md:w-36 h-auto" alt="Logo" width={50} height={50} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-lg">
          {navbarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="hover:text-blue-500 font-semibold transition duration-300 border-b-2 border-transparent hover:border-blue-500"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 right-4 z-50 md:hidden text-white bg-blue-600 p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gray-900 text-white p-6 transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <Image src={assets.logoPortfolio} className="w-28 sm:w-32 md:w-36 h-auto mb-10" alt="Logo" width={50} height={50} />

        <nav className="flex flex-col gap-6 text-lg">
          {navbarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
