"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui";
import { HeroSection, FeaturesSection, HowItWorksSection, CTASection } from "@/components/sections";

interface Section {
  id: string;
  title: string;
  component: React.ComponentType<any>;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  
  const sections: Section[] = [
    { id: 'hero', title: 'Home', component: HeroSection },
    { id: 'features', title: 'Features', component: FeaturesSection },
    { id: 'how-it-works', title: 'How It Works', component: HowItWorksSection },
    { id: 'cta', title: 'Sign Up', component: CTASection }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToCTA = () => {
    scrollToSection('cta');
  };

  // Handle scroll-based active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'how-it-works', 'cta'];
      let currentSection = 0;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            currentSection = i;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blueprint Grid Background */}
      <div className="fixed inset-0 opacity-30 blueprint-grid pointer-events-none" />

      {/* Floating geometric elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-purple-400 geometric-square opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-emerald-400 geometric-circle opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-purple-300 opacity-50"></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-emerald-300 opacity-60"></div>
        <div className="absolute bottom-60 right-1/4 w-3 h-3 bg-purple-500 geometric-square opacity-50"></div>
        <div className="absolute top-80 right-1/3 w-5 h-5 bg-emerald-500 opacity-40"></div>
      </div>
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-gray-200/50 glass">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black flex items-center justify-center geometric-square">
              <span className="text-white font-bold text-lg transform -rotate-45">S</span>
            </div>
            <span className="text-2xl font-black tracking-[0.2em] text-black">SKYLINE</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {sections.slice(0, 3).map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-gray-600 hover:text-black transition-colors font-semibold tracking-wide ${
                  activeSection === index ? 'text-black border-b-2 border-purple-500' : ''
                }`}
                aria-label={`Navigate to ${section.title} section`}
              >
                {section.title}
              </button>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button onClick={scrollToCTA}>Get Started</Button>
          </div>
        </div>
      </header>


      {/* Main Content Area - All sections rendered */}
      <main role="main" className="relative z-10">
        <section id="hero" className="min-h-screen pt-20">
          <HeroSection onGetStarted={scrollToCTA} />
        </section>
        
        <section id="features" className="min-h-screen">
          <FeaturesSection onGetStarted={scrollToCTA} />
        </section>
        
        <section id="how-it-works" className="min-h-screen">
          <HowItWorksSection onGetStarted={scrollToCTA} />
        </section>
        
        <section id="cta" className="min-h-screen bg-gray-900">
          <CTASection onGetStarted={scrollToCTA} />
        </section>
      </main>
    </div>
  );
}