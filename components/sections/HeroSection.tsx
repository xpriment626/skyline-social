"use client";

import { Button } from "@/components/ui";

export function HeroSection() {
  return (
    <section className="flex items-center justify-center min-h-screen min-h-[100dvh]">
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
  );
}