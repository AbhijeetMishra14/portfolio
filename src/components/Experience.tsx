"use client";

import React, { useState } from "react";

interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  responsibilities: string[];
}

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState<number>(1);

  const experiences: Experience[] = [
    {
      id: 1,
      role: "Senior Full-Stack Developer",
      company: "Tech Solutions Inc.",
      duration: "2022 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers.",
      responsibilities: [
        "Architected and implemented microservices using Node.js and TypeScript",
        "Led a team of 5 developers to deliver projects on time and within budget",
        "Implemented CI/CD pipelines using GitHub Actions and AWS",
        "Reduced application load time by 40% through performance optimizations"
      ]
    },
    {
      id: 2,
      role: "Full-Stack Developer",
      company: "Digital Innovations",
      duration: "2020 - 2022",
      description: "Built and maintained multiple client projects using modern web technologies.",
      responsibilities: [
        "Developed responsive web applications using React and Next.js",
        "Implemented RESTful APIs using Express and MongoDB",
        "Collaborated with designers to implement pixel-perfect UI components",
        "Participated in code reviews and mentored junior developers"
      ]
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "Startup Hub",
      duration: "2019 - 2020",
      description: "Developed responsive user interfaces and improved application performance.",
      responsibilities: [
        "Built interactive UIs using React and Redux",
        "Implemented responsive designs using CSS Grid and Flexbox",
        "Optimized application performance and accessibility",
        "Collaborated with backend developers to integrate APIs"
      ]
    }
  ];

  return (
    <section className="py-20 px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left column with company tabs */}
          <div className="space-y-2">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExperience(exp.id)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                  activeExperience === exp.id
                    ? "bg-gray-800 border-l-4 border-white"
                    : "bg-gray-900 hover:bg-gray-800"
                }`}
              >
                <div className="font-medium">{exp.company}</div>
                <div className="text-sm text-gray-400">{exp.duration}</div>
              </button>
            ))}
          </div>
          
          {/* Right column with experience details */}
          <div className="md:col-span-2">
            {experiences
              .filter((exp) => exp.id === activeExperience)
              .map((exp) => (
                <div key={exp.id} className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-gray-400 mb-4">{exp.company} • {exp.duration}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
