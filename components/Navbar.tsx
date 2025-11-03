// components/Navbar.tsx

"use client";

import Link from "next/link";
import { useState, useEffect } from "react"; // useEffect add කලා
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Scroll state එක

  // Scroll Event Listener එක
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // 50px වඩා scroll කලා නම්
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "News", href: "/news" },
    { title: "Events", href: "/events" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent" // Scroll කරද්දි background එක වෙනස් කරන්න
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className={`text-2xl font-bold ${
                isScrolled ? "text-blue-900" : "text-white" // Scroll කරද්දි logo color එක වෙනස් කරන්න
              }`}
            >
              St. Joseph's
            </Link>
          </div>

          {/* 2. Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={`${
                  isScrolled ? "text-gray-700 hover:text-blue-700" : "text-white hover:text-blue-200"
                } font-medium transition duration-150`}
              >
                {link.title}
              </Link>
            ))}
            <Link href="/admission" className={`${
                isScrolled ? "bg-blue-600 text-white" : "bg-white text-blue-900" // Scroll කරද්දි button color එක වෙනස් කරන්න
              } px-4 py-2 rounded-md font-medium hover:bg-opacity-80 transition duration-150`}
            >
                Admissions
            </Link>
          </div>

          {/* 3. Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {isOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* 4. Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-lg z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-2 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md font-medium"
            >
              {link.title}
            </Link>
          ))}
          <Link href="/admission" 
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 text-white text-center px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-150">
              Admissions
          </Link>
        </div>
      </div>
    </nav>
  );
}