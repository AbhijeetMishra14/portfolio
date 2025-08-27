"use client";

import React, { useState, useEffect } from "react";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navItems = ["about", "experience", "projects", "skills", "contact"];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/90 backdrop-blur-sm shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-white">John</span>
              <span className="text-gray-400">Doe</span>
            </h1>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                className="text-gray-400 hover:text-white focus:outline-none"
                onClick={() => {
                  const menu = document.getElementById("mobile-menu");
                  menu?.classList.toggle("hidden");
                }}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:space-x-8">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize transition-colors duration-300 ${
                  activeSection === section 
                    ? "text-white font-medium" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          
          {/* Mobile menu */}
          <div id="mobile-menu" className="hidden md:hidden mt-4 space-y-4">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  const menu = document.getElementById("mobile-menu");
                  menu?.classList.add("hidden");
                }}
                className={`block w-full text-left capitalize transition-colors py-2 ${
                  activeSection === section 
                    ? "text-white font-medium" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
