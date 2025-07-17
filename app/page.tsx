import { Button } from "@/components/ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Gradient mesh background */}
      <div className="fixed inset-0 gradient-mesh opacity-30" />
      
      {/* Main content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center justify-center space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-6 max-w-3xl">
              <h1 className="text-6xl md:text-8xl font-bold">
                <span className="text-gradient">Skyline</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                AI-Powered Influencer Discovery Platform
              </p>
              <p className="text-lg text-muted-foreground/80">
                Premium design system and component library showcase
              </p>
            </div>

            {/* Button Showcase */}
            <div className="glass-card max-w-4xl w-full">
              <h2 className="text-2xl font-semibold mb-8">Button Components</h2>
              
              <div className="space-y-8">
                {/* Primary Buttons */}
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-4">
                    Variants
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="glass">Glass</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="outline">Outline</Button>
                  </div>
                </div>

                {/* Size Variations */}
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-4">
                    Sizes
                  </h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">✨</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Glass Card Examples */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
              <div className="glass-card">
                <h3 className="text-lg font-semibold mb-2">Glass Effect</h3>
                <p className="text-sm text-muted-foreground">
                  Beautiful liquid glass effect with backdrop blur
                </p>
              </div>
              
              <div className="glass-card shimmer">
                <h3 className="text-lg font-semibold mb-2">Shimmer Effect</h3>
                <p className="text-sm text-muted-foreground">
                  Premium loading animation effect
                </p>
              </div>
              
              <div className="glass-card hover:shadow-glow transition-all duration-300">
                <h3 className="text-lg font-semibold mb-2">Glow Effect</h3>
                <p className="text-sm text-muted-foreground">
                  Hover for a beautiful glow animation
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 items-center">
              <Button variant="glass" asChild>
                <a href="/storybook" target="_blank">
                  View Storybook
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com" target="_blank">
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}