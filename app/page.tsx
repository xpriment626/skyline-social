"use client";

import { useState, useEffect } from "react";
import { Button, Card, CardContent, CardHeader, CardTitle, Input } from "@/components/ui";
import { ArrowRight, Search, Users, Zap, Eye, Target, Star, ChevronLeft, ChevronRight, BarChart3, Brain, Sparkles } from "lucide-react";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = [
    { id: 'hero', title: 'Hero' },
    { id: 'features', title: 'Features' },
    { id: 'how-it-works', title: 'How It Works' },
    { id: 'cta', title: 'Get Started' }
  ];

  const navigateToSection = (index: number) => {
    setCurrentSection(index);
    
    // Hide all sections first
    sections.forEach((_, i) => {
      const element = document.getElementById(sections[i].id);
      if (element) {
        element.style.opacity = '0';
        element.style.pointerEvents = 'none';
      }
    });
    
    // Show the target section after a brief delay
    setTimeout(() => {
      const targetElement = document.getElementById(sections[index].id);
      if (targetElement) {
        targetElement.style.opacity = '1';
        targetElement.style.pointerEvents = 'auto';
      }
    }, 300);
  };

  // Initialize first section as visible and add keyboard navigation
  useEffect(() => {
    // Show first section on load
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.style.opacity = '1';
      heroElement.style.pointerEvents = 'auto';
    }

    // Keyboard navigation
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        navigateToSection(Math.min(sections.length - 1, currentSection + 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateToSection(Math.max(0, currentSection - 1));
      }
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
        navigateToSection(Math.min(sections.length - 1, currentSection + 1));
      } else if (touchEndX - touchStartX > threshold) {
        // Swipe right - previous section
        navigateToSection(Math.max(0, currentSection - 1));
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection]);

  return (
    <div className="h-screen bg-gray-50 relative overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-30 blueprint-grid" />

      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-purple-400 geometric-square opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-emerald-400 geometric-circle opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-purple-300 opacity-50"></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-emerald-300 opacity-60"></div>
        <div className="absolute bottom-60 right-1/4 w-3 h-3 bg-purple-500 geometric-square opacity-50"></div>
        <div className="absolute top-80 right-1/3 w-5 h-5 bg-emerald-500 opacity-40"></div>
      </div>
      
      {/* Header */}
      <header className="relative z-10 border-b border-gray-200/50 glass">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black flex items-center justify-center geometric-square">
              <span className="text-white font-bold text-lg transform -rotate-45">S</span>
            </div>
            <span className="text-2xl font-black tracking-[0.2em] text-black">SKYLINE</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => navigateToSection(index)}
                className={`text-gray-600 hover:text-black transition-colors font-semibold tracking-wide ${
                  currentSection === index ? 'text-black border-b-2 border-purple-500' : ''
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Start Free Trial</Button>
          </div>
        </div>
      </header>

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 space-y-3">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => navigateToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === index 
                ? 'bg-purple-500 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile for cleaner look */}
      <div className="hidden md:flex fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 items-center space-x-4">
        <button
          onClick={() => navigateToSection(Math.max(0, currentSection - 1))}
          disabled={currentSection === 0}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-sm font-medium text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200/50">
          {currentSection + 1} / {sections.length}
        </span>
        <button
          onClick={() => navigateToSection(Math.min(sections.length - 1, currentSection + 1))}
          disabled={currentSection === sections.length - 1}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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

      {/* Carousel Container */}
      <div className="relative h-screen">
        {/* Hero Section */}
        <section id="hero" className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center">
                <div className="badge-purple mb-8">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  AI-POWERED INFLUENCER DISCOVERY
                </div>

                <h1 className="text-hero mb-6">
                  Discover <span className="text-hero-accent">Authentic</span>
                  <br />
                  Influencers at Scale
                </h1>
                
                <p className="text-body-large max-w-3xl mx-auto mb-8">
                  Skyline uses advanced AI to find genuine creators who perfectly match your brand aesthetic and audience. Stop wasting time on fake followers and start building real connections.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button>Start Free Trial</Button>
                  <Button variant="secondary">Watch Demo</Button>
                </div>

                <div className="mt-12 text-center">
                  <p className="text-caption mb-4">TRUSTED BY FORWARD-THINKING BRANDS</p>
                  <div className="flex items-center justify-center space-x-8 opacity-60">
                    <div className="w-24 h-8 bg-gray-300 rounded"></div>
                    <div className="w-20 h-8 bg-gray-300 rounded"></div>
                    <div className="w-28 h-8 bg-gray-300 rounded"></div>
                    <div className="w-16 h-8 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-700">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="badge-emerald mb-6">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  INTELLIGENT FEATURES
                </div>
                <h2 className="text-section-title mb-6">
                  Beyond basic metrics with <span className="text-emerald-600 font-black">AI-powered insights</span>
                </h2>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-purple-500 flex items-center justify-center mb-6 rounded-lg">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-card-title mb-4">AI Aesthetic Matching</h3>
                    <p className="text-body mb-6">
                      Computer vision technology analyzes visual style, color palettes, and brand alignment to find creators who truly match your aesthetic.
                    </p>
                    <div className="flex space-x-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 geometric-square"></div>
                      <div className="w-12 h-12 bg-gray-200 geometric-square mt-2"></div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-emerald-500 flex items-center justify-center mb-6 rounded-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-card-title mb-4">Authenticity Detection</h3>
                    <p className="text-body mb-6">
                      Advanced algorithms detect fake followers, bot engagement, and suspicious patterns to ensure you partner with genuine creators.
                    </p>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-emerald-400 geometric-square"></div>
                      <div className="w-12 h-12 bg-emerald-500 geometric-square"></div>
                      <div className="w-8 h-8 bg-gray-200 geometric-square"></div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-purple-600 flex items-center justify-center mb-6 rounded-lg">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-card-title mb-4">Predictive Analytics</h3>
                    <p className="text-body mb-6">
                      Forecast growth potential, engagement trends, and ROI before you reach out. Make data-driven decisions with confidence.
                    </p>
                    <div className="grid grid-cols-3 gap-1 w-16">
                      <div className="w-4 h-8 bg-purple-400"></div>
                      <div className="w-4 h-12 bg-emerald-500"></div>
                      <div className="w-4 h-6 bg-purple-300"></div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-16 text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="text-3xl font-black text-purple-600 mb-2">99.2%</div>
                      <div className="text-caption">AUTHENTICITY ACCURACY</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-emerald-600 mb-2">47%</div>
                      <div className="text-caption">HIGHER ENGAGEMENT</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-purple-600 mb-2">3.2x</div>
                      <div className="text-caption">FASTER DISCOVERY</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-700">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="badge-purple mb-6">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  SIMPLE PROCESS
                </div>
                <h2 className="text-section-title mb-6">
                  Find your perfect creators in <span className="text-purple-600 font-black">three steps</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-500 flex items-center justify-center mx-auto mb-6 rounded-full">
                    <span className="text-white font-black text-2xl">1</span>
                  </div>
                  <h3 className="text-card-title mb-4">Define Your Brand</h3>
                  <p className="text-body">
                    Upload your brand assets and describe your aesthetic. Our AI analyzes your visual identity and target audience to understand your unique style.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-emerald-500 flex items-center justify-center mx-auto mb-6 rounded-full">
                    <span className="text-white font-black text-2xl">2</span>
                  </div>
                  <h3 className="text-card-title mb-4">AI Discovery</h3>
                  <p className="text-body">
                    Our algorithms scan millions of profiles across Instagram, TikTok, and YouTube to find creators who match your aesthetic and authenticity criteria.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-600 flex items-center justify-center mx-auto mb-6 rounded-full">
                    <span className="text-white font-black text-2xl">3</span>
                  </div>
                  <h3 className="text-card-title mb-4">Connect & Collaborate</h3>
                  <p className="text-body">
                    Review detailed analytics, authenticity scores, and predicted performance. Reach out to verified creators with confidence and start building relationships.
                  </p>
                </div>
              </div>

              <div className="mt-16 text-center">
                <Card className="max-w-4xl mx-auto">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center mb-6">
                      <Sparkles className="w-8 h-8 text-purple-500 mr-3" />
                      <h3 className="text-card-title">Join 500+ brands already using Skyline</h3>
                    </div>
                    <p className="text-body mb-6">
                      "Skyline helped us find micro-influencers with 10x higher engagement rates than our previous campaigns. The authenticity detection saved us from countless fake accounts."
                    </p>
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-full mr-3"></div>
                      <div className="text-left">
                        <div className="font-semibold text-sm">Sarah Chen</div>
                        <div className="text-caption">Marketing Director, Fashion Forward</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-700 bg-black">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to Discover Authentic Creators?
              </h2>
              <p className="text-xl text-gray-300 font-medium leading-relaxed mb-8">
                Start your free trial today and find influencers who truly align with your brand. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Input
                  placeholder="Enter your work email"
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 max-w-md"
                />
                <Button className="bg-emerald-500 hover:bg-emerald-600">
                  Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-400">
                Free 14-day trial • No setup fees • Cancel anytime
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}