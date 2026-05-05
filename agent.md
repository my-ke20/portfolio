# Agent Instructions — Portfolio Website Build

## Objective
Build a **production-grade Next.js portfolio website** that follows the spec exactly.

---

## Execution Rules

### 1. Architecture
- Use Next.js 14 App Router
- Structure:
  /app
  /components
  /styles
  /public

---

### 2. Component Strategy

Create reusable components:

- Navbar
- HeroTerminal
- SectionWrapper
- Timeline
- ProjectCard
- SkillsGrid
- ContactForm
- Footer

---

### 3. Styling

- Use Tailwind CSS
- Define theme colors in tailwind.config.js
- Avoid inline styles unless necessary

---

### 4. Animations

Use Framer Motion:

- Fade + slide on scroll
- Stagger animations for lists
- Typewriter effect for hero

---

### 5. Image Integration (IMPORTANT)

## REQUIRED: Automatically fetch relevant images from the internet

### Sources (priority order)
1. Unsplash (preferred)
2. Pexels
3. Wikimedia Commons

---

### Implementation Rules

- Use `next/image`
- Use remote URLs (no local downloads required)
- Add fallback placeholder images
- Include alt text for accessibility

---

### Suggested Image Queries

Use these search queries:

- "circuit board dark"
- "drone delivery"
- "vr headset education"
- "precision agriculture drone"
- "surveillance drone military"
- "kenya farmland aerial"
- "engineering portrait"

---

### Example Usage

```tsx
<Image
  src="https://images.unsplash.com/photo-XXXX"
  alt="Drone delivery system"
  width={800}
  height={600}
  className="object-cover"
/>