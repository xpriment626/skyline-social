# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Skyline is an AI-powered influencer discovery and vetting platform currently in the pre-implementation phase. The project has comprehensive documentation but no code implementation yet. The goal is to build a premium web application that helps users discover and analyze social media influencers across multiple platforms.

## Current Project State

- **Phase**: UI Design System Implementation (Phase 1 Complete - 50% Done)
- **Completed**: Typography system, component library foundation, liquid glass effects, design language specification
- **Next Steps**: Complete remaining UI components, implement data models, add interactivity
- **Tech Stack** (Implemented):
  - ✅ Frontend: React/Next.js with TypeScript
  - ✅ Styling: Tailwind CSS with sophisticated light theme
  - ✅ Typography: Playfair Display + Inter font system
  - ✅ Components: Button, Card, Input with liquid glass effects
  - 🟡 Backend: Node.js/Express microservices (planned)
  - 🟡 Database: PostgreSQL + Redis (planned)
  - 🟡 AI Services: Python-based (OpenAI CLIP for computer vision) (planned)

## Common Development Tasks

### Development Server (Active)
```bash
npm run dev      # Start Next.js development server
npm run build    # Build for production
npm run lint     # Run ESLint (if configured)
npm run test     # Run tests (if configured)
```

### Current Dependencies
```bash
# Core framework
next, react, react-dom, typescript

# Styling and UI
tailwindcss, lucide-react, class-variance-authority

# Typography
@next/font/google (Playfair Display, Inter)

# Development
eslint, @types/node, @types/react
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

### New Design Language (Light Theme Focus)
Based on the refined design language from `app/ref.page.tsx`, Skyline now follows a clean, professional aesthetic:

**Color Palette:**
- **Background**: Light gray (`bg-gray-50`) with blueprint grid pattern
- **Primary Accent**: Purple (`purple-400`, `purple-500`, `purple-600`)
- **Secondary Accent**: Emerald green (`emerald-400`, `emerald-500`, `emerald-600`)
- **Text**: Black primary text with gray variations for hierarchy
- **Cards**: Clean white backgrounds with subtle shadows

**Typography (Manhattan/Editorial Style):**
- **Primary Fonts**: Playfair Display (serif) for headlines, Inter (sans-serif) for body text
- **Hierarchy**: Bold, striking contrast - `font-black` headlines, `font-bold` subheadings, `font-normal` body
- **Editorial Aesthetic**: Magazine-inspired with tight tracking (`tracking-tight`) for headlines, wide tracking for labels
- **Sophisticated Weights**: Full range from hairline (100) to black (900) for dramatic hierarchy
- **Line Heights**: Tight leading (0.85) for headlines, relaxed for body text

**Components:**
- **Buttons**: Rounded full (`rounded-full`) with semibold text and liquid glass variants
- **Cards**: Clean white cards with subtle shadows and rounded corners
- **Inputs**: Rounded full with clean borders and sophisticated focus states
- **Glass Effects**: Apple-inspired liquid glass with subtle transparency (8-12%) and natural blur

**Geometric Elements:**
- **Shapes**: Rotated squares (`transform rotate-45`) and circles
- **Floating Elements**: Subtle geometric shapes with varying opacity
- **Grid Pattern**: Blueprint-style grid background

**Layout Principles:**
- **Spacing**: Generous whitespace and consistent padding
- **Responsive**: Mobile-first with careful breakpoint management
- **Clean Lines**: Minimal borders and clean separations
- **Professional Feel**: Business-focused rather than gaming/entertainment

### Implementation Guidelines

**Typography:**
- Use `.text-hero` for main headlines (Playfair Display, font-black, 8xl)
- Use `.text-section-title` for section headers (Playfair Display, font-bold, 6xl)  
- Use `.text-card-title` for component titles (Inter, font-bold, 2xl)
- Use `.text-body` for regular content (Inter, font-normal, base)
- Use `.text-muted` for labels (Inter, font-bold, uppercase, tracking)

**Components:**
- Prefer `rounded-full` for buttons and inputs with `font-semibold` text
- Use purple and emerald as accent colors sparingly
- Maintain sophisticated, editorial aesthetic
- Include geometric elements for visual interest  
- Apply blueprint grid backgrounds where appropriate
- Use liquid glass effects for premium interactions

**Current Component Library:**
- ✅ `Button` - 6 variants including liquid glass (purple/emerald)
- ✅ `Card` - Clean white cards with sophisticated shadows
- ✅ `Input` - Rounded inputs with proper focus states
- 🟡 Navigation, Modal, Dropdown (planned)
- 🟡 Data visualization components (planned)

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

## Requirements Summary

Based on user stories and acceptance criteria:

### Core User Stories
1. **Content Creator Discovery** - Discover trending accounts similar to brand with AI-powered recommendations
2. **Multi-Brand Workspace Management** - Create dedicated workspaces for different clients/brands
3. **Authenticity Analysis** - Fake follower detection and engagement authenticity scoring
4. **Premium UI Experience** - Dark luxury interface with liquid glass design patterns
5. **AI-Powered Aesthetic Matching** - Computer vision for visual similarity analysis
6. **Cross-Platform Analytics** - Unified creator analysis across Instagram, TikTok, YouTube
7. **Predictive Intelligence** - Real-time trend detection and engagement forecasting
8. **Workspace Scaling** - Advanced workspace management and organization

### Key Acceptance Criteria
- 24-hour trend notifications for workspace niches
- Independent discovery agents per workspace
- Authenticity scores with detailed evidence
- CLIP-based computer vision for aesthetic matching
- Cross-platform data aggregation and unified metrics
- Predictive engagement scoring and opportunity identification
- Premium dark theme with liquid glass effects
- Mobile-first responsive design

## Implementation Tasks

### Phase 1: Foundation (Tasks 1-3)
1. **Design System Setup** - React/Next.js + TypeScript, Tailwind CSS dark theme, Storybook
2. **Premium Landing Page** - Hero section, liquid glass effects, responsive design
3. **Component Library** - Glass cards, buttons, navigation, loading states

### Phase 2: Core Features (Tasks 4-6)
4. **Workspace Management** - Creation modal, dashboard, settings panel, switching
5. **Creator Discovery Feed** - Masonry layout, profile cards, similarity scoring, filtering
6. **Analytics Dashboard** - Authenticity scores, engagement charts, trend detection

### Phase 3: Polish (Tasks 7-10)
7. **Dummy Data System** - Realistic creator profiles, authenticity scenarios, trends
8. **Responsive Design** - Mobile optimization, touch interfaces, adaptive layouts
9. **Premium Interactions** - Animations, hover effects, onboarding, notifications
10. **Optimization** - Performance, accessibility, cross-browser compatibility

## Technical Architecture

### System Components
- **Frontend**: React/Next.js with TypeScript and Tailwind CSS
- **Backend**: Node.js/Express microservices architecture
- **Database**: PostgreSQL for structured data, Redis for caching
- **AI Services**: Python-based with OpenAI CLIP for computer vision
- **APIs**: Social media platform integrations (Instagram, TikTok, YouTube)

### Key Data Models
```typescript
// Core Workspace Management
interface Workspace {
  id: string;
  name: string;
  brandSpecification: BrandSpec;
  targetNiche: string[];
  isActive: boolean;
  createdAt: Date;
  lastUpdated: Date;
}

interface BrandSpec {
  aestheticPreferences: AestheticCriteria;
  contentTypes: string[];
  targetAudience: AudienceCriteria;
  excludeKeywords: string[];
}

// Creator Analysis
interface CreatorProfile {
  id: string;
  platforms: PlatformData[];
  aestheticScore: number;
  engagementMetrics: EngagementData;
  authenticityScore: number;
  trendingScore: number;
  similarityReason: string;
}

interface PlatformData {
  platform: 'instagram' | 'tiktok' | 'youtube';
  handle: string;
  followers: number;
  engagement: EngagementMetrics;
  recentContent: ContentItem[];
  growthTrend: GrowthData;
}

// AI Analysis Results
interface AestheticAnalysis {
  colorPalette: string[];
  visualStyle: string;
  contentThemes: string[];
  similarityScore: number;
  visualComparison: ComparisonData;
}

interface AuthenticityReport {
  overallScore: number; // 0-100
  fakeFollowerPercentage: number;
  suspiciousEngagement: SuspiciousPattern[];
  evidence: Evidence[];
  recommendation: 'high_risk' | 'medium_risk' | 'low_risk' | 'verified';
}

interface PredictiveInsights {
  growthPotential: number; // 0-100
  trendAlignment: TrendData[];
  predictedEngagement: EngagementForecast;
  opportunityScore: number;
  riskFactors: RiskFactor[];
}
```

### Database Schema
**PostgreSQL Tables**:
- `users` - User accounts and subscription info
- `workspaces` - Workspace configurations and brand specs
- `creators` - Creator profiles and cross-platform data
- `content_items` - Individual content pieces with analysis
- `authenticity_reports` - Fake follower and engagement analysis
- `trends` - Detected trends and their metadata
- `workspace_discoveries` - Many-to-many relationship between workspaces and creators

**Redis Cache Structure**:
- `creator:{id}` - Cached creator profiles (TTL: 1 hour)
- `trends:{niche}` - Trending content by niche (TTL: 30 minutes)
- `api_limits:{platform}:{user}` - API rate limiting counters

### AI Services Architecture
- **Computer Vision Service**: CLIP-based aesthetic matching
- **Content Analysis Service**: NLP for content categorization
- **Authenticity Detection**: ML-based fake follower identification
- **Trend Detection Service**: Real-time trend identification
- **Predictive Analytics**: Growth and engagement forecasting

### Error Handling Strategy
1. **API Rate Limiting** - Exponential backoff, request queuing
2. **AI Service Failures** - Graceful degradation, cached fallbacks
3. **Data Quality Issues** - Validation, confidence scores
4. **User Experience** - Clear errors, progressive loading, offline mode

### Testing Approach
- **Unit Tests**: AI services, data models, API endpoints
- **Integration Tests**: Social media APIs, database operations
- **E2E Tests**: Complete user workflows
- **Performance Tests**: AI processing load, database queries
- **AI Model Tests**: Accuracy validation against known datasets