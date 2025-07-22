"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface NavbarItems {
  href: string;
  label: string;
}

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);


  const navbarItems: NavbarItems[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "#projects-page", label: "Projects" },
    { href: "#education-page", label: "Education" },
  ];

  return (
    <nav className="w-full px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Title */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-blue-500">
          MyPortfolio
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-10 text-lg">
          {navbarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="hover:text-blue-500 transition duration-300 border-b-2 border-transparent hover:border-blue-500"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>


      <button
        className="fixed top-4 right-4 z-50 md:hidden text-white bg-blue-600 p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Sidebar Container */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-48 bg-gray-900 text-white p-6 transform transition-transform duration-300 z-40
  ${isOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0`}
      >
        <h1 className="text-xl font-bold mb-10 text-blue-500">MyPortfolio</h1>

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

      {/* Content padding on large screens */}
      <div className="md:ml-64" />
    </nav>
  );
};

export default Navbar;
