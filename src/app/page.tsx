"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Handle scroll to section when activeSection changes
  useEffect(() => {
    if (!isLoading) {
      const element = document.getElementById(activeSection);
      if (element) {
        const navbarHeight = 80; // Approximate navbar height
        const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [activeSection, isLoading]);

  // Loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
          <h2 className="mt-6 text-2xl font-bold">Loading Portfolio</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <div id="home">
          <Hero setActiveSection={setActiveSection} />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="experience">
          <Experience />
        </div>
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="skills">
          <Skills />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}
