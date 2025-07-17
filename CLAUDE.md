# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Skyline is an AI-powered influencer discovery and vetting platform currently in the pre-implementation phase. The project has comprehensive documentation but no code implementation yet. The goal is to build a premium web application that helps users discover and analyze social media influencers across multiple platforms.

## Current Project State

- **Phase**: Design & Planning (no code implementation yet)
- **Next Step**: Initialize project and begin implementation of tasks in `tasks.md`
- **Tech Stack** (Planned):
  - Frontend: React/Next.js with TypeScript
  - Styling: Tailwind CSS with custom dark theme
  - Backend: Node.js/Express microservices
  - Database: PostgreSQL + Redis
  - AI Services: Python-based (OpenAI CLIP for computer vision)

## Common Development Tasks

### Initial Project Setup (Not yet done)
```bash
# Initialize Next.js project with TypeScript
npx create-next-app@latest skyline-app --typescript --tailwind --app

# Install additional dependencies (once package.json exists)
npm install framer-motion     # For animations
npm install @radix-ui/react-* # For accessible UI components
npm install react-query       # For data fetching
npm install storybook        # For component development
```

### Running Development Server (After setup)
```bash
npm run dev      # Start Next.js development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run test     # Run tests (once configured)
```

## High-Level Architecture

### Core Concepts
1. **Workspace-Centric**: Each workspace acts as an independent AI agent for discovering influencers
2. **Cross-Platform Analysis**: Unified data model across Instagram, TikTok, YouTube
3. **AI-Powered Discovery**: Computer vision (CLIP) for aesthetic matching, ML for authenticity scoring
4. **Premium UI/UX**: Dark theme with "liquid glass" design patterns

### Key Components to Build

1. **Landing Page** (`/`) - Premium marketing site with liquid glass effects
2. **Workspace Dashboard** (`/app/workspaces`) - Manage multiple brand workspaces
3. **Discovery Feed** (`/app/workspace/[id]/discover`) - AI-curated creator recommendations
4. **Creator Profile** (`/app/creator/[id]`) - Detailed cross-platform analytics
5. **Analytics Dashboard** (`/app/workspace/[id]/analytics`) - Trends and insights

### Data Flow Architecture
```
User Input → Workspace Settings → AI Discovery Engine → Creator Analysis → UI Display
                                          ↓
                                  Social Media APIs → Data Normalization → Database
```

## Implementation Priorities

Follow the tasks in `tasks.md` in order:
1. Design system setup (Task 1)
2. Landing page with premium aesthetics (Task 2)
3. Component library development (Task 3)
4. Core app features (Tasks 4-6)
5. Dummy data system (Task 7)
6. Polish and optimization (Tasks 8-10)

## Design Guidelines

- **Theme**: Dark luxury aesthetic with purple/blue gradients
- **Effects**: Liquid glass (backdrop blur), smooth animations, micro-interactions
- **Components**: All UI should feel premium and exclusive
- **Responsive**: Mobile-first approach with careful attention to touch interfaces

## Testing Strategy

When implementing tests:
- Unit tests for utility functions and data transformations
- Component tests with React Testing Library
- E2E tests for critical user flows (workspace creation, creator discovery)
- Visual regression tests for premium UI components

## Key Files to Reference

- `requirements.md` - User stories and acceptance criteria
- `design.md` - Detailed technical architecture and data models
- `tasks.md` - Step-by-step implementation plan

## TypeScript Interfaces

Key interfaces from design.md to implement:
- `Workspace`, `BrandSpec` - Workspace management
- `CreatorProfile`, `PlatformData` - Creator data models  
- `AuthenticityReport`, `PredictiveInsights` - Analytics models
- `AestheticAnalysis`, `EngagementMetrics` - AI analysis results