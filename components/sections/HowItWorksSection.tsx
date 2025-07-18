"use client";

import { Card, CardContent } from "@/components/ui";
import { Sparkles } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section className="flex items-center justify-center min-h-screen min-h-[100dvh]">
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
  );
}