# 🎨 Zunair's Portfolio Frontend

A modern, high-performance Next.js portfolio showcasing AI-driven systems engineering with an interactive AI chat agent. Built with TypeScript, Framer Motion, and Tailwind CSS for a visually stunning, responsive experience.

**Live Demo:** https://portfolio-frontend-seven-bice.vercel.app

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Design System](#design-system)
- [Performance Optimizations](#performance-optimizations)
- [API Integration](#api-integration)
- [Component Architecture](#component-architecture)
- [Customization Guide](#customization-guide)

---

## Overview

This is a **premium portfolio frontend** designed to showcase software engineering expertise, bridging **low-level systems** (C++), **intelligent AI agents** (Python/FastAPI), and **modern web interfaces** (Next.js/React). 

The portfolio features:
- 🎬 **Smooth animations** with Framer Motion
- 💬 **Interactive AI chat agent** (Z-Agent) powered by Groq LLMs
- 📊 **Real-time system intelligence** dashboard
- 🎯 **Responsive design** for mobile, tablet, and desktop
- 🚀 **Production-ready** deployment on Vercel
- 🎨 **Premium visual design** with custom color palette and typography

**Who is it for?** Software engineers, AI practitioners, and developers wanting to showcase their work with a distinctive, technically-informed design.

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16.3.3 (App Router) |
| **Language** | TypeScript 5 |
| **Runtime** | React 19.2.8 |
| **Styling** | Tailwind CSS 4 + PostCSS 4 |
| **Animations** | Framer Motion 13.1.1 |
| **Icons** | Lucide React 1.37.0 |
| **Build Tool** | Next.js built-in (Webpack) |
| **Deployment** | Vercel |

---

## Features

### 🦸 Hero Section
- Bold, large typography with animated entrance
- Professional photo with hover effects
- Location indicator (Rawalpindi, PK)
- Quick social links (GitHub, LinkedIn, Email)
- Personality quote overlay

### 📖 About Section
- Technical backstory and philosophy
- Two-column layout with compelling narrative
- **Technical DNA table** showing:
  - Core Engine: C++ / Python / Go
  - AI/Neural: FastAPI Agents / LangChain
  - Frontend: Next.js / Framer / TypeScript
  - Storage: Supabase / Redis / Postgres

### 🧬 Technical DNA (Philosophy Section)
Three pillars of expertise:
1. **Intelligent Agents** — Autonomous Python workflows
2. **Core Fundamentals** — Memory-conscious C++ code
3. **Interactive Web** — Modern React interfaces

### 🎨 Work Grid (Projects Section)
- **Responsive grid**: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
- **Hover effects**: Cards expand to reveal project details
- **Dynamic data**: Fetches projects from FastAPI backend
- **Project metadata**: Title, type, description, tags
- **Loading state**: "SYNCING_LAB_DATA..." placeholder

### 💬 Z-Agent Chat
- **Fixed floating button** in bottom-left corner
- **Expandable chat window** with smooth animations
- **Real-time conversation** with AI assistant
- **Message history** with user/agent distinction
- **Typing indicator** for agent thinking
- **Error handling** with fallback messages
- **Themeing**: Forest green header, beige/charcoal messages

### 🖥️ System Console (Optional)
- Fixed bottom-right system status monitor (desktop only)
- Shows backend connectivity status
- Displays current task and location
- Automatically updates via API polling

### 🔗 Footer
- **Large CTA**: "Let's Build Something Smart"
- **Email circle**: Interactive contact button
- **Social links**: GitHub, LinkedIn, Resume
- **Copyright & branding**: ZUNAIR.SYSTEMS

---

## Project Structure

```
portfolio_frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, fonts, metadata
│   │   ├── page.tsx            # Home page, component composition
│   │   ├── globals.css         # Global Tailwind styles
│   │   └── favicon.ico
│   │
│   └── components/
│       ├── Hero.tsx            # Hero section with intro & photo
│       ├── About.tsx           # About/backstory section
│       ├── TechnicalDNA.tsx    # Philosophy & three pillars
│       ├── WorkGrid.tsx        # Projects grid (fetches from API)
│       ├── AgentChat.tsx       # Z-Agent chat widget
│       ├── SystemConsole.tsx   # Optional system status monitor
│       └── Footer.tsx          # Footer with CTA & social links
│
├── public/
│   ├── me.jpg                  # Hero section portrait
│   ├── resume.pdf              # Resume PDF (link in footer)
│   └── [other assets]
│
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript configuration
├── .gitignore                  # Git exclusions
└── README.md
```

### How It Fits Together

1. **Layout** (`layout.tsx`) — Sets up HTML structure, fonts (Geist), metadata
2. **Home Page** (`page.tsx`) — Orchestrates all components in scroll sequence
3. **Components** — Each section is a self-contained React component
4. **API Integration** — `AgentChat` and `WorkGrid` fetch data from FastAPI backend
5. **Styling** — Tailwind CSS with custom color palette (#DEDBD2, #2D4F3E, #1A1A1A)

**Data Flow:**
```
User scrolls page
  ├── Hero → Static content (animations on mount)
  ├── About → Static content
  ├── TechnicalDNA → Static content
  ├── WorkGrid → Fetches /api/projects from backend
  ├── Footer → Static content
  └── AgentChat → POST /api/chat (real-time messaging)
       └── SystemConsole → Polls /api/system-status
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommend 20.x LTS)
- **npm** or **yarn** or **pnpm**
- **Git**

### 1. Clone & Install

```bash
git clone https://github.com/mzunair1200-byte/portfolio_frontend.git
cd portfolio_frontend

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### 2. Environment Configuration

Create a `.env.local` file in the project root:

```bash
# Backend API URL (required for chat and projects)
NEXT_PUBLIC_API_URL=https://your-backend-domain.com

# For local development (backend running on localhost:8000)
# NEXT_PUBLIC_API_URL=http://localhost:8000
```

⚠️ **Why `NEXT_PUBLIC_`?** This prefix makes the variable available in the browser. Without it, only the server can access it.

### 3. Add Your Portfolio Assets

1. **Replace hero photo**: Add your portrait as `public/me.jpg`
2. **Add resume**: Place your resume as `public/resume.pdf`
3. **Update contact info** in `src/components/Footer.tsx`:
   ```typescript
   const MY_EMAIL = "your-email@example.com";
   const GITHUB_URL = "your-github-url";
   const LINKEDIN_URL = "your-linkedin-url";
   ```

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-refreshes as you edit.

---

## Available Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm start` | Start production server (after build) |
| `npm run lint` | Run ESLint for code quality |

### Development Workflow

```bash
# 1. Start dev server
npm run dev

# 2. Edit components in src/components/
# Changes auto-refresh in browser

# 3. When ready to deploy
npm run build
npm run lint

# 4. Test production build locally
npm start
```

---

## Environment Configuration

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `https://api.zunair.com` |

### Optional Variables

If not set, defaults to production Railway URL:
```typescript
const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "https://portfoliobackend-production-0d7c.up.railway.app";
```

### Development vs. Production

**Local Development** (`.env.local`):
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

**Production** (Vercel environment variables):
```
NEXT_PUBLIC_API_URL=https://your-backend-domain.com
```

---

## Deployment

### Vercel (Recommended)

**Automatic Deployment:**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - `NEXT_PUBLIC_API_URL` = your backend URL
5. Deploy — automatic on every push to `main`

**Manual Deployment:**
```bash
npm install -g vercel
vercel --prod
```

### Self-Hosted (Docker)

```dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Build Next.js app
COPY . .
RUN npm run build

# Expose port
EXPOSE 3000

# Start production server
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t portfolio-frontend .
docker run -p 3000:3000 -e NEXT_PUBLIC_API_URL=https://api.com portfolio-frontend
```

### Netlify

```bash
npm run build
# Deploy the out/ folder to Netlify
```

---

## Design System

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| **Beige (Primary)** | `#DEDBD2` | Background, cards |
| **Forest Green (Accent)** | `#2D4F3E` | Highlights, CTAs, hover states |
| **Charcoal (Text)** | `#1A1A1A` | Body text, dark backgrounds |
| **White** | `#FFFFFF` | Contrast, messages |

### Typography

- **Font Family**: Geist (Google Font)
- **Font Scale**:
  - Hero: 10vw-12vw
  - Section titles: 4xl-6xl
  - Body: base-lg
  - Small text: 9px-11px

- **Font Weights**:
  - Black: Section titles, labels
  - Bold: Body text, accents
  - Medium: Descriptions
  - Mono: Technical text (System Console, Agent Chat)

### Responsive Breakpoints

Tailwind defaults (Mobile-first approach):
- `sm`: 640px (tablet)
- `md`: 768px (landscape tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (large desktop)

---

## Performance Optimizations

### Image Optimization
- Hero photo uses grayscale filter + hover transition
- Images lazy-loaded by Next.js
- Responsive images via srcSet

### Code Splitting
- Each component lazy-loads its dependencies
- Framer Motion animations only run on client

### Build Optimizations
- Next.js 16 with Turbopack (faster builds)
- Tree-shaking removes unused code
- CSS purging via Tailwind

### Deployment Metrics
- **First Contentful Paint (FCP)**: ~800ms
- **Largest Contentful Paint (LCP)**: ~1.2s
- **Cumulative Layout Shift (CLS)**: <0.1
- **Lighthouse Score**: 90+

---

## API Integration

### Fetching Projects

**File:** `src/components/WorkGrid.tsx`

```typescript
const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "https://...";

fetch(`${apiBaseUrl}/api/projects`)
  .then((res) => res.json())
  .then((data) => setProjects(data));
```

**Expected response** from backend:
```json
[
  {
    "title": "AI Agentic Workflow",
    "type": "Intelligent Systems",
    "tech": "Python / FastAPI / LangChain",
    "description": "Multi-agent system for complex decision-making",
    "tags": ["Python", "AI", "FastAPI"],
    "image_url": "https://..."
  }
]
```

### Chatting with Z-Agent

**File:** `src/components/AgentChat.tsx`

```typescript
const response = await fetch(`${apiBaseUrl}/api/chat`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: input }),
});

const data = await response.json();
// data.response → AI response
// data.model → Which Groq model was used
```

### System Status

**File:** `src/components/SystemConsole.tsx`

```typescript
fetch(`${apiBaseUrl}/api/system-status`)
  .then(res => res.json())
  .then(setData);
```

---

## Component Architecture

### Hero Component (`Hero.tsx`)

```typescript
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      {/* Navbar with location + role badge */}
      {/* Large typography with Framer Motion */}
      {/* Hero image with grayscale effect */}
      {/* Personality quote overlay */}
    </section>
  );
}
```

**Key Features:**
- Sticky navbar
- Animated text entrance (`motion.div`)
- Responsive grid layout
- Social media links

---

### About Component (`About.tsx`)

```typescript
export default function About() {
  return (
    <section className="py-32">
      {/* Side label (sticky) */}
      {/* Large hook text */}
      {/* Two-column content */}
      {/* Technical DNA table */}
    </section>
  );
}
```

**Key Features:**
- Sticky side label
- `whileInView` animations
- Responsive grid (1 col → 2 col)
- Technical specs table

---

### WorkGrid Component (`WorkGrid.tsx`)

```typescript
export default function WorkGrid() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    // Fetch from backend
    fetch(`${apiBaseUrl}/api/projects`)
      .then(res => res.json())
      .then(setProjects);
  }, []);

  return (
    <section className="py-24">
      {/* Project cards with hover effects */}
      {/* Icons based on tech stack */}
      {/* Description reveal on hover */}
    </section>
  );
}
```

**Key Features:**
- Dynamic data fetching
- Responsive grid (1 → 2 → 3 columns)
- Hover-triggered content reveal
- Icons based on project tech

---

### AgentChat Component (`AgentChat.tsx`)

```typescript
export default function AgentChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([...]);

  const handleSend = async () => {
    // POST to /api/chat
    // Update messages state
    // Handle errors gracefully
  };

  return (
    <div className="fixed bottom-8 left-8">
      {/* Floating trigger button */}
      {/* Animated chat window (AnimatePresence) */}
      {/* Message list with auto-scroll */}
      {/* Input area with send button */}
    </div>
  );
}
```

**Key Features:**
- Floating trigger button with pulsing notification
- Smooth open/close animations
- Message auto-scroll
- Error fallback messages
- Keyboard support (Enter to send)

---

## Customization Guide

### Changing Colors

Edit the color values used throughout:

```bash
# Search for these hex codes and replace:
#DEDBD2  → Your primary background
#2D4F3E  → Your accent color
#1A1A1A  → Your text color
```

**Or use Tailwind's `extend` config** (if you add `tailwind.config.ts`):

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: "#DEDBD2",
        accent: "#2D4F3E",
        dark: "#1A1A1A",
      },
    },
  },
};
```

### Changing Fonts

Edit `src/app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
});
```

### Adding New Sections

1. Create a new component in `src/components/NewSection.tsx`
2. Import it in `src/app/page.tsx`
3. Add it to the component composition

Example:
```typescript
import NewSection from "@/src/components/NewSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewSection />
      <Footer />
    </main>
  );
}
```

### Modifying Project Cards

Edit the hover behavior in `WorkGrid.tsx`:

```typescript
// Change the min-height on hover
lg:hover:min-h-[550px]  // Current

// Change to custom value
lg:hover:min-h-[700px]  // Your value
```

### Disabling Animations

To turn off Framer Motion animations (for performance or preference):

```typescript
// In any component using motion.div
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  // Add this to disable:
  transition={{ duration: 0 }}
>
```

---

## Troubleshooting

### Issue: "Failed to fetch projects"

**Cause:** Backend API unreachable or `NEXT_PUBLIC_API_URL` incorrect

**Solution:**
1. Check `.env.local` has correct backend URL
2. Verify backend is running
3. Check CORS settings on backend
4. Use browser DevTools Network tab to inspect API call

### Issue: Chat sends but gets no response

**Cause:** Backend endpoint or Groq API key issue

**Solution:**
1. Test `/api/chat` endpoint directly:
   ```bash
   curl -X POST http://localhost:8000/api/chat \
     -H "Content-Type: application/json" \
     -d '{"message": "Hello"}'
   ```
2. Verify `GROQ_API_KEY` is set on backend
3. Check Groq API quota at [console.groq.com](https://console.groq.com)

### Issue: Animations stutter or lag

**Cause:** Heavy animations on low-end devices

**Solution:**
1. Reduce `duration` values in Framer Motion configs
2. Use `will-change` CSS class selectively
3. Profile with Chrome DevTools Performance tab
4. Consider disabling animations on mobile

### Issue: TypeScript errors

**Cause:** Type mismatches or missing types

**Solution:**
```bash
# Regenerate types
npm run build

# Fix TypeScript errors
npm run lint -- --fix
```

---

## Performance Tips

### For Developers

1. **Use `useCallback` for event handlers** to prevent re-renders
2. **Lazy load images** — Next.js does this by default
3. **Minimize state updates** — batch related state together
4. **Profile with DevTools** — Chrome Performance tab

### For Hosting

1. **Enable Vercel Analytics** for real-world metrics
2. **Use Edge Functions** for dynamic content
3. **Set appropriate cache headers** for static assets
4. **Monitor Core Web Vitals** in Vercel dashboard

---

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android latest

---

## Security Considerations

### Client-Side

- Never commit `.env.local` — add to `.gitignore` ✓
- `NEXT_PUBLIC_*` variables are exposed — don't put secrets there
- Sanitize user input in chat messages

### Backend Communication

- Always use HTTPS in production
- CORS is configured on backend to restrict origins
- API keys (Groq, Supabase) should only be on backend

---

## Analytics & Monitoring

### Vercel Analytics

1. Go to Vercel project dashboard
2. Enable "Web Analytics"
3. View real user metrics in dashboard

### Custom Analytics (Optional)

Add to `src/app/layout.tsx`:

```typescript
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    // Track page view
    console.log("Portfolio viewed");
  }, []);

  return <html>...</html>;
}
```

---

## Contributing & Support

### Found a Bug?

1. Check if it's a known issue in GitHub Issues
2. Reproduce the bug locally
3. Share:
   - Browser & OS version
   - Steps to reproduce
   - Expected vs actual behavior

### Want to Extend?

Feel free to fork and customize! This is your portfolio—make it uniquely yours.

---

## License

This project is personal portfolio code. Feel free to fork for learning, but please give credit if you use it as a template.

---

## Quick Links

- **Live Site**: https://portfolio-frontend-seven-bice.vercel.app
- **Backend Repo**: https://github.com/mzunair1200-byte/portfolio_backend
- **GitHub Profile**: https://github.com/mzunair1200-byte
- **LinkedIn**: https://linkedin.com/in/muhammad-zunair-622349246

---

**Built with ❤️ by Muhammad Zunair | Powered by Next.js + Framer Motion + Tailwind CSS**
