"use client";

import { Button, Card } from "@/components/ui";

export default function AppDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="font-black text-6xl tracking-tight text-black mb-4 font-playfair">
          Welcome to Skyline
        </h1>
        <p className="text-gray-600 text-lg font-inter">
          Discover and analyze social media influencers with AI-powered insights.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <h3 className="font-bold text-xl text-black mb-2 font-inter">Create Workspace</h3>
          <p className="text-gray-600 mb-4 font-inter">
            Set up a new workspace for your brand or client.
          </p>
          <Button className="w-full">Get Started</Button>
        </Card>

        <Card className="p-6">
          <h3 className="font-bold text-xl text-black mb-2 font-inter">Discover Creators</h3>
          <p className="text-gray-600 mb-4 font-inter">
            Find influencers that match your brand aesthetic.
          </p>
          <Button variant="outline" className="w-full">Browse</Button>
        </Card>

        <Card className="p-6">
          <h3 className="font-bold text-xl text-black mb-2 font-inter">View Analytics</h3>
          <p className="text-gray-600 mb-4 font-inter">
            Analyze performance and trends across platforms.
          </p>
          <Button variant="outline" className="w-full">Explore</Button>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="mb-8">
        <h2 className="font-bold text-3xl text-black mb-6 font-playfair">Recent Activity</h2>
        <Card className="p-6">
          <div className="text-center py-8">
            <p className="text-gray-500 font-inter">No recent activity yet.</p>
            <p className="text-gray-400 text-sm mt-2 font-inter">
              Create your first workspace to get started.
            </p>
          </div>
        </Card>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 text-center">
          <div className="text-3xl font-black text-purple-500 mb-2 font-inter">0</div>
          <div className="text-gray-600 font-semibold font-inter">Workspaces</div>
        </Card>

        <Card className="p-6 text-center">
          <div className="text-3xl font-black text-emerald-500 mb-2 font-inter">0</div>
          <div className="text-gray-600 font-semibold font-inter">Creators Found</div>
        </Card>

        <Card className="p-6 text-center">
          <div className="text-3xl font-black text-purple-500 mb-2 font-inter">0</div>
          <div className="text-gray-600 font-semibold font-inter">Reports Generated</div>
        </Card>

        <Card className="p-6 text-center">
          <div className="text-3xl font-black text-emerald-500 mb-2 font-inter">0</div>
          <div className="text-gray-600 font-semibold font-inter">Trends Detected</div>
        </Card>
      </div>
    </div>
  );
}