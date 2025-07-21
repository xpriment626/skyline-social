"use client";

import { Button, SkylineLogo } from "@/components/ui";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blueprint Grid Background */}
      <div className="fixed inset-0 opacity-30 blueprint-grid pointer-events-none" />

      {/* App Header */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-gray-200/50 glass">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black flex items-center justify-center geometric-square">
              <SkylineLogo className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-[0.2em] text-black">SKYLINE</span>
          </div>
          
          {/* App Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button className="text-gray-600 hover:text-black transition-colors font-semibold tracking-wide">
              Workspaces
            </button>
            <button className="text-gray-600 hover:text-black transition-colors font-semibold tracking-wide">
              Discover
            </button>
            <button className="text-gray-600 hover:text-black transition-colors font-semibold tracking-wide">
              Analytics
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="secondary">Settings</Button>
            <Button variant="secondary">Profile</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 relative z-10">
        {children}
      </main>
    </div>
  );
}