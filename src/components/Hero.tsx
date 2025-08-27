"use client";

import React from "react";

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-6 inline-block">
            <span className="text-sm font-medium text-gray-400 tracking-wider uppercase">
              Portfolio
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mt-2"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Full-Stack Developer
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern technologies and clean architecture
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => setActiveSection("contact")}
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
            <button
              onClick={() => setActiveSection("projects")}
              className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="flex justify-center mt-20">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-gray-400" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
