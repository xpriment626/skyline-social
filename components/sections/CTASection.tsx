"use client";

import { Button, Input } from "@/components/ui";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="flex items-center justify-center min-h-screen min-h-[100dvh] bg-black">
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
  );
}