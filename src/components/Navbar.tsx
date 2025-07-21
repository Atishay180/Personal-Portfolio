"use client";

import Link from "next/link";
import React from "react";

interface NavbarItems {
  href: string;
  label: string;
}

const Navbar = () => {
  const navbarItems: NavbarItems[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "#skills-page", label: "Skills" },
    { href: "#projects-page", label: "Projects" },
    { href: "#education-page", label: "Education" },
  ];

  return (
    <nav className="w-full px-6 py-4 bg-gray-900 text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Title */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-blue-400">
          MyPortfolio
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-10 text-lg">
          {navbarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="hover:text-blue-400 transition duration-300 border-b-2 border-transparent hover:border-blue-400"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
