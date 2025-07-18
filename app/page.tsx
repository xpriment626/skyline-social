"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HeroSection, FeaturesSection, HowItWorksSection, CTASection } from "@/components/sections";

interface Section {
  id: string;
  title: string;
  component: React.ComponentType<any>;
}

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const sections: Section[] = [
    { id: 'hero', title: 'Home', component: HeroSection },
    { id: 'features', title: 'Features', component: FeaturesSection },
    { id: 'how-it-works', title: 'How It Works', component: HowItWorksSection },
    { id: 'cta', title: 'Sign Up', component: CTASection }
  ];

  const navigateToSection = async (index: number) => {
    if (index === currentSection || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Small delay for smooth transition
    await new Promise(resolve => setTimeout(resolve, 200));
    
    setCurrentSection(index);
    setIsTransitioning(false);
  };

  // Keyboard navigation and scroll prevention
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        navigateToSection(Math.min(2, currentSection + 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateToSection(Math.max(0, currentSection - 1));
      }
    };

    // Handle scroll-triggered navigation
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Debounce scroll events to prevent rapid section switching
      const now = Date.now();
      const timeSinceLastScroll = now - (window as any).lastScrollTime;
      (window as any).lastScrollTime = now;
      
      if (timeSinceLastScroll < 300 || isTransitioning) return;
      
      if (e.deltaY > 0) {
        // Scroll down - next section
        navigateToSection(Math.min(2, currentSection + 1));
      } else if (e.deltaY < 0) {
        // Scroll up - previous section
        navigateToSection(Math.max(0, currentSection - 1));
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    // Touch navigation for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const threshold = 50; // Minimum swipe distance
      
      if (touchStartX - touchEndX > threshold) {
        // Swipe left - next section
        navigateToSection(Math.min(2, currentSection + 1));
      } else if (touchEndX - touchStartX > threshold) {
        // Swipe right - previous section
        navigateToSection(Math.max(0, currentSection - 1));
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, sections.length]);

  const CurrentSectionComponent = sections[currentSection]?.component;

  return (
    <div className={`min-h-screen min-h-[100dvh] relative overflow-hidden transition-colors duration-500 ${
      currentSection === 3 ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Blueprint Grid Background - only show on non-CTA sections */}
      {currentSection !== 3 && <div className="absolute inset-0 opacity-30 blueprint-grid" />}

      {/* Floating geometric elements - only show on non-CTA sections */}
      {currentSection !== 3 && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-8 h-8 bg-purple-400 geometric-square opacity-60"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-emerald-400 geometric-circle opacity-40"></div>
          <div className="absolute bottom-40 left-20 w-4 h-4 bg-purple-300 opacity-50"></div>
          <div className="absolute top-60 left-1/3 w-2 h-2 bg-emerald-300 opacity-60"></div>
          <div className="absolute bottom-60 right-1/4 w-3 h-3 bg-purple-500 geometric-square opacity-50"></div>
          <div className="absolute top-80 right-1/3 w-5 h-5 bg-emerald-500 opacity-40"></div>
        </div>
      )}
      
      {/* Header - only show on non-CTA sections */}
      {currentSection !== 3 && (
        <header className="relative z-10 border-b border-gray-200/50 glass">
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
                  onClick={() => navigateToSection(index)}
                  className={`text-gray-600 hover:text-black transition-colors font-semibold tracking-wide ${
                    currentSection === index ? 'text-black border-b-2 border-purple-500' : ''
                  }`}
                  aria-label={`Navigate to ${section.title} section`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button onClick={() => navigateToSection(3)}>Get Started</Button>
            </div>
          </div>
        </header>
      )}

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 space-y-6">
        {sections.slice(0, 3).map((section, index) => (
          <button
            key={index}
            onClick={() => navigateToSection(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentSection === index 
                ? 'bg-purple-500 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Navigate to ${section.title} section`}
          />
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile for cleaner look */}
      <div className="hidden md:flex fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 items-center space-x-4">
        <button
          onClick={() => navigateToSection(Math.max(0, currentSection - 1))}
          disabled={currentSection === 0 || isTransitioning}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Go to previous section"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-sm font-medium text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200/50">
          {Math.min(currentSection + 1, 3)} / 3
        </span>
        <button
          onClick={() => navigateToSection(Math.min(2, currentSection + 1))}
          disabled={currentSection === 2 || isTransitioning}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Go to next section"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile swipe hint */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="text-xs text-gray-500 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200/50">
          Swipe or tap dots to navigate
        </div>
      </div>

      {/* Main Content Area - Single section rendering */}
      <main 
        className={`transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        role="main"
        aria-live="polite"
      >
        {CurrentSectionComponent && (
          <CurrentSectionComponent 
            onGetStarted={() => navigateToSection(3)}
          />
        )}
      </main>
    </div>
  );
}