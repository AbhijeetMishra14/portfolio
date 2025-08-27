"use client";

import React, { useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const skills: Skill[] = [
    // Programming Languages
    { name: "TypeScript", level: 90, category: "languages" },
    { name: "JavaScript", level: 95, category: "languages" },
    { name: "Python", level: 85, category: "languages" },
    { name: "C++", level: 70, category: "languages" },
    
    // Frontend
    { name: "React", level: 95, category: "frontend" },
    { name: "Next.js", level: 90, category: "frontend" },
    { name: "Tailwind CSS", level: 85, category: "frontend" },
    { name: "HTML/CSS", level: 95, category: "frontend" },
    
    // Backend
    { name: "Node.js", level: 90, category: "backend" },
    { name: "Express", level: 85, category: "backend" },
    { name: "FastAPI", level: 80, category: "backend" },
    { name: "Django", level: 75, category: "backend" },
    
    // Database
    { name: "PostgreSQL", level: 85, category: "database" },
    { name: "MongoDB", level: 90, category: "database" },
    { name: "Redis", level: 75, category: "database" },
    
    // DevOps & Tools
    { name: "Git", level: 90, category: "devops" },
    { name: "Docker", level: 85, category: "devops" },
    { name: "AWS", level: 80, category: "devops" },
    { name: "CI/CD", level: 75, category: "devops" },
    
    // Other
    { name: "GraphQL", level: 80, category: "other" },
    { name: "REST APIs", level: 90, category: "other" },
    { name: "Testing", level: 85, category: "other" },
    { name: "UI/UX", level: 75, category: "other" },
  ];

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "languages", name: "Languages" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "devops", name: "DevOps" },
    { id: "other", name: "Other" },
  ];

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 mx-auto mb-8"></div>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-white text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Skills grid with progress bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-gray-500 to-white rounded-full transition-all duration-1000 ease-out group-hover:from-white group-hover:to-gray-500"
                  style={{ width: `${skill.level}%`, transitionDelay: "100ms" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional skills section */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Additional Tools & Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["Git", "GitHub", "VS Code", "Figma", "Webpack", "Jest", "Cypress", "Storybook", "Redux", "Sass", "Material UI", "Bootstrap"].map((tool) => (
              <div 
                key={tool} 
                className="border border-gray-800 rounded-lg p-4 text-center hover:border-gray-600 transition-colors"
              >
                <span className="text-sm">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
