"use client";

import { Card, CardContent } from "@/components/ui";
import { Brain, Target, BarChart3 } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="flex items-center justify-center min-h-screen min-h-[100dvh]">
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
  );
}