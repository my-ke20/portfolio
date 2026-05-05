# Portfolio Website Specification

## Project Identity
Personal portfolio website for a Mechatronics Engineering student based in Kenya.  
Design language: **industrial · embedded systems · military-grade UI**

---

## Core Design System

### Color Palette
- Background: #0a0a0a
- Surface: #1a1a1a
- Primary Accent: #f59e0b (amber)
- Secondary Accent: #22c55e (signal green)
- Text Primary: #e2e8f0
- Text Muted: #6b7280

### Typography
- Headings: Rajdhani / Orbitron / Barlow Condensed
- Body: JetBrains Mono / IBM Plex Mono

### Visual Style
- PCB / circuit-inspired backgrounds
- Terminal UI elements
- Sharp edges (no rounded bubbly cards)
- Subtle scanlines / HUD overlays
- Monospace UI accents

---

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- next/image (image optimization)

---

## Site Architecture

### 1. Hero Section
- Full viewport
- Terminal boot animation (typewriter effect)
- Name + subtitle
- CTA buttons:
  - View Projects
  - Download CV
- Animated SVG background (circuit traces or drone path)

---

### 2. About Section
- Two-column layout
- Left: Profile image (hexagonal crop)
- Right: Bio text
- Skills grid:
  - Progress bars OR hex badges

---

### 3. Experience Timeline
- Vertical timeline
- Entries:
  - Eve Shield
  - KIWASCO
  - Dedan Kimathi University

---

### 4. Projects Section
- Responsive grid
- Each card includes:
  - Status badge
  - Title
  - Tagline
  - Description
  - Tech stack

Projects:
- EDU-LENS
- AERIAL-KE
- AGRI-EYE
- IRONWATCH

---

### 5. Philosophy Section
- Editorial layout
- Two columns
- Pull quote highlighted in amber

---

### 6. Contact Section
- Terminal-style info block
- Contact form:
  - Name
  - Email
  - Message

---

### 7. Footer
- Minimal
- Social icons

---

## Image Requirements

### General Rules
- Use **real, relevant images from the internet**
- Optimize using `next/image`
- Use **lazy loading**
- Prefer:
  - Unsplash
  - Pexels
  - Wikimedia
  - Official datasets

### Section-specific Images

#### Hero
- Abstract circuit board or drone HUD visualization

#### About
- Professional engineering portrait (placeholder)

#### Projects
Each project should have a relevant image:

- EDU-LENS → VR headset / AR classroom
- AERIAL-KE → delivery drone
- AGRI-EYE → drone farming / NDVI maps
- IRONWATCH → surveillance drone / robotics system

#### Philosophy
- Kenyan landscape / farmland / aerial terrain

---

## Responsiveness

- Mobile-first
- Breakpoints:
  - <768px → single column
  - ≥768px → multi-column

---

## Animations

- Typewriter effect (hero)
- Scroll reveal (fade + slide)
- Hover glow (cards)
- Skill bar fill animation
- Nav underline animation

---

## SEO

- Meta tags:
  - description
  - og:title
  - og:image
- robots.txt

---

## Performance

- Lighthouse optimized
- Lazy loading images
- Minimal JS
- No heavy UI libraries

---

## Constraints

- No Bootstrap / MUI / default UI kits
- Strict color palette
- No gradients or "AI-looking" UI
- All headings use `// comment_style`

---

## Deliverables

- Fully working Next.js app
- Clean component structure
- Production-ready build