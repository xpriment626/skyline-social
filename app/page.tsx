"use client";

import { Button, Card, CardContent, CardHeader, CardTitle, Input } from "@/components/ui";
import { ArrowRight, Search, Users, Zap, Eye, Target, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
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
            <a href="#components" className="text-gray-600 hover:text-black transition-colors font-semibold tracking-wide">
              Components
            </a>
            <a href="#design" className="text-gray-600 hover:text-black transition-colors font-semibold tracking-wide">
              Design System
            </a>
            <a href="#showcase" className="text-gray-600 hover:text-black transition-colors font-semibold tracking-wide">
              Showcase
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">View Docs</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="badge-purple mb-8">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                DESIGN SYSTEM SHOWCASE
              </div>

              <h1 className="text-hero mb-6">
                Skyline's <span className="text-hero-accent">Revolutionary</span>
                <br />
                Design Language
              </h1>
              
              <p className="text-body-large max-w-3xl mx-auto mb-8">
                Sophisticated aesthetics meet cutting-edge functionality. A premium interface designed for the modern digital elite.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>Explore Components</Button>
                <Button variant="secondary">View Documentation</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section id="components" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="badge-emerald mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                COMPONENTS
              </div>
              <h2 className="text-section-title mb-6">
                Sophisticated components with <span className="text-emerald-600 font-black">editorial precision</span>
              </h2>
            </div>

            {/* Button Showcase */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Button Components</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-muted mb-4">VARIANTS</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="primary">Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="glass">Glass</Button>
                      <Button variant="glass-purple">Purple Glass</Button>
                      <Button variant="glass-emerald">Emerald Glass</Button>
                      <Button variant="outline">Outline</Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-muted mb-4">SIZES</h3>
                    <div className="flex flex-wrap items-center gap-4">
                      <Button size="sm">Small</Button>
                      <Button size="md">Medium</Button>
                      <Button size="lg">Large</Button>
                      <Button size="icon">✨</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-500 flex items-center justify-center mb-6 rounded-lg">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-card-title mb-4">Search Components</h3>
                  <p className="text-body mb-6">
                    Precision-engineered input fields with flawless interaction design.
                  </p>
                  <Input placeholder="Try typing here..." className="mb-4" />
                  <div className="flex space-x-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 geometric-square"></div>
                    <div className="w-12 h-12 bg-gray-200 geometric-square mt-2"></div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-emerald-500 flex items-center justify-center mb-6 rounded-lg">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-card-title mb-4">Visual Hierarchy</h3>
                  <p className="text-body mb-6">
                    Editorial-grade typography system with Manhattan sophistication.
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
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-card-title mb-4">Interaction Design</h3>
                  <p className="text-body mb-6">
                    Liquid glass effects with Apple-inspired refinement and elegance.
                  </p>
                  <div className="grid grid-cols-3 gap-1 w-16">
                    <div className="w-4 h-8 bg-purple-400"></div>
                    <div className="w-4 h-12 bg-emerald-500"></div>
                    <div className="w-4 h-6 bg-purple-300"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Build with Skyline?
            </h2>
            <p className="text-xl text-gray-300 font-medium leading-relaxed mb-8">
              Start building with the most sophisticated design system available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 max-w-md"
              />
              <Button className="bg-emerald-500 hover:bg-emerald-600">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}