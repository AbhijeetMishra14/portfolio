"use client";

import React from "react";

export default function About() {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Left column with animated gradient border */}
          <div className="md:col-span-2 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            <div className="relative bg-black rounded-lg p-5">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">5+</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Years Experience</h3>
                    <p className="text-sm text-gray-400">Full-stack Development</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">20+</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Projects</h3>
                    <p className="text-sm text-gray-400">Completed</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">10+</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Technologies</h3>
                    <p className="text-sm text-gray-400">Mastered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column with text */}
          <div className="md:col-span-3 space-y-4 text-gray-300">
            <p className="leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience building 
              scalable web applications. I specialize in modern JavaScript frameworks, cloud 
              technologies, and creating seamless user experiences.
            </p>
            <p className="leading-relaxed">
              My approach combines technical excellence with business understanding to deliver 
              solutions that not only work flawlessly but also drive real value for users and 
              stakeholders.
            </p>
            <p className="leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge through technical writing and mentoring.
            </p>
            
            <div className="pt-4">
              <a 
                href="#" 
                className="inline-flex items-center text-white font-medium hover:text-gray-300 transition-colors"
              >
                Download Resume
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
