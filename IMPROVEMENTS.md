# Portfolio Improvements

Actionable improvements for the portfolio, organized by priority and category. Each item references the current codebase state as of January 2026.

---

## 1. SEO & Discoverability

### Add `robots.txt` and `sitemap.xml`

No `robots.txt` or sitemap exists. Next.js App Router supports these natively.

- Create `src/app/robots.ts` exporting a default function returning `MetadataRoute.Robots`
- Create `src/app/sitemap.ts` exporting a default function returning `MetadataRoute.Sitemap` with entries for `/` and `/photography`

### Add Open Graph images

The photography page (`src/app/photography/layout.tsx`) has basic OG metadata (title, description, type) but no OG image. The home page (`src/app/layout.tsx`) has general metadata but no OG properties at all.

- Add `src/app/opengraph-image.tsx` (or a static `opengraph-image.png`) for the home page
- Add `src/app/photography/opengraph-image.tsx` for the photography page

### Add JSON-LD structured data

No structured data exists anywhere in the project.

- Add a `<script type="application/ld+json">` block in `src/app/layout.tsx` with a `Person` schema including name, url, jobTitle, and sameAs links (GitHub, LinkedIn from the Contact component)

### Add canonical URLs

No canonical URLs are set. The metadata in `src/app/layout.tsx` uses `metadataBase` but does not specify `alternates.canonical`.

- Add `alternates: { canonical: "/" }` to the root layout metadata
- Add `alternates: { canonical: "/photography" }` to the photography layout metadata

---

## 2. Accessibility

### Add a skip-to-content link

The header (`src/components/Header.tsx`) is a fixed navigation bar. There is no skip link for keyboard users.

- Add a visually-hidden skip link as the first child of `<body>` in `src/app/layout.tsx` (or the Header) that targets `#main-content`
- Add `id="main-content"` to the `<main>` element in `src/app/page.tsx` and `src/app/photography/page.tsx`

### Respect `prefers-reduced-motion`

Framer Motion is used extensively across the project (AnimateOnScroll, FadeText, GradualSpacing, PhotoGallery, Hero) with no `prefers-reduced-motion` checks.

- Use Framer Motion's `useReducedMotion()` hook to conditionally disable or simplify animations
- Apply `@media (prefers-reduced-motion: reduce)` in `src/app/globals.css` to disable CSS animations (e.g., `animate-rainbow` on the RainbowButton)
- The `particle-links.tsx` component should also reduce or disable particle animation when reduced motion is preferred

### Add `aria-current="page"` to active nav items

The header (`src/components/Header.tsx`) applies visual styling to the active navigation item based on `pathname` but does not set `aria-current="page"`.

- Add `aria-current={isActive ? "page" : undefined}` to navigation links

### Improve lightbox accessibility

The lightbox in `src/components/PhotoGallery.tsx` supports keyboard navigation (Escape, arrow keys) and click-to-close, but:

- The overlay `<div>` lacks `role="dialog"` and `aria-modal="true"`
- Focus is not trapped within the modal — keyboard focus can escape to elements behind the overlay
- The close button uses a raw `×` character without an accessible label

Fixes:
- Add `role="dialog"`, `aria-modal="true"`, and `aria-label="Photo lightbox"` to the lightbox container
- Implement focus trapping (move focus into the modal on open, restore on close)
- Add `aria-label="Close"` to the close button, `aria-label="Previous photo"` and `aria-label="Next photo"` to navigation buttons

### Add descriptive `alt` text to photography images

Images in `src/data/photos.ts` have a `title` field (e.g., `"wedding-001"`) which is used as `alt` text via the LazyImage component. These titles are not descriptive.

- Add a descriptive `alt` field to each photo entry in `src/data/photos.ts`
- Update LazyImage in `src/components/PhotoGallery.tsx` to use `photo.alt` (falling back to `photo.title`)

---

## 3. Performance

### Font loading

Fonts are already loaded via `next/font/local` in `src/app/layout.tsx` using Geist Sans and Geist Mono variable fonts. **No action needed** — this is already optimized.

### Preload the LCP image

The profile avatar (`/images/TriGuitarHeadshot.jpg`) in `src/components/Hero.tsx` is the likely LCP element. However, it is loaded inside a dynamically imported component (`ProfileAvatar`) with `ssr: false`, which delays rendering.

- Consider making ProfileAvatar a regular import (not dynamic) or at minimum adding a `<link rel="preload">` for the image in `src/app/layout.tsx`
- Add `priority` prop to the avatar `<Image>` component (or `fetchPriority="high"` if using a raw `<img>`)

### Add `fetchPriority="high"` to above-the-fold images

The hero avatar and any above-the-fold content images should use `priority={true}` on the Next.js `<Image>` component, which sets `fetchPriority="high"` automatically.

### Preload adjacent lightbox images

When a user opens the lightbox in `src/components/PhotoGallery.tsx`, only the current image is loaded. Navigating to the next/previous image may show a loading delay.

- Preload the next and previous images using hidden `<Image>` components or `<link rel="prefetch">` when the lightbox is open

### Evaluate heavy dependencies

Two libraries contribute significant bundle size:

- **`@tsparticles/react` + `@tsparticles/preset-links`** — used in `src/components/ui/particle-links.tsx`, rendered in Hero, Skills, and Photography pages
- **`react-icon-cloud`** — used in `src/components/ui/icon-cloud.tsx`, rendered in the Skills section

Both are already dynamically imported in `src/app/page.tsx` (via `next/dynamic`). Consider:
- Loading them only when their container scrolls into view (Intersection Observer trigger) rather than on page load
- Measuring the actual bundle impact with `@next/bundle-analyzer`

---

## 4. UX Enhancements

### Add a custom 404 page

No `not-found.tsx` exists. Next.js shows its default 404 page.

- Create `src/app/not-found.tsx` with a styled page that matches the portfolio design and includes a link back to home

### Add error boundaries

No `error.tsx` or `global-error.tsx` exists.

- Create `src/app/error.tsx` with a user-friendly error UI and a "Try again" button (must be a Client Component)
- Create `src/app/global-error.tsx` to catch errors in the root layout

### Add page transition animations

Navigation between `/` and `/photography` has no transition animation.

- Add a shared layout animation using Framer Motion's `AnimatePresence` in `src/app/layout.tsx`
- Or use Next.js `loading.tsx` files with animated skeletons

### Improve photo gallery loading state

The LazyImage component in `src/components/PhotoGallery.tsx` shows a plain `bg-gray-800` placeholder while images load.

- Replace with a shimmer/skeleton animation (a pulsing gradient placeholder)
- Tailwind's `animate-pulse` class is a simple option

### Consider a contact form

The Contact section (`src/components/Contact.tsx`) contains social media icon links (GitHub, LinkedIn, email mailto). There is no contact form.

- Consider adding a contact form using a service like Resend, EmailJS, or Formspree
- This would allow visitors to send messages without leaving the site

### Add EXIF/metadata display in lightbox

Photography images have `title` and `category` in `src/data/photos.ts` but no camera/lens metadata.

- Extend the photo data model in `src/data/photos.ts` with optional EXIF fields (camera, lens, focalLength, aperture, shutterSpeed, iso)
- Display metadata in the lightbox overlay in `src/components/PhotoGallery.tsx`

---

## 5. Code Quality & DX

### Add testing setup

No testing framework is installed or configured.

- Install Vitest and React Testing Library (`vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`)
- Add a `vitest.config.ts` at the project root
- Add a test script to `package.json`
- Start with tests for critical components: Header navigation, PhotoGallery filtering, and lightbox keyboard interactions

### TypeScript strict mode

**Already enabled.** `tsconfig.json` has `"strict": true`. No action needed.

### Add Lighthouse CI or performance budgets

No CI pipeline configuration or performance monitoring exists beyond Vercel Analytics (`@vercel/analytics`).

- Add a GitHub Actions workflow with Lighthouse CI to run on PRs
- Set performance budgets (e.g., LCP < 2.5s, CLS < 0.1, bundle size limits)

### Consider upgrading to Next.js 15

The project uses Next.js 14.2.13 and React 18. Next.js 15 brings React 19 support, improved caching defaults, and `Turbopack` stability improvements.

- Review the [Next.js 15 upgrade guide](https://nextjs.org/docs/app/building-your-application/upgrading/version-15) for breaking changes
- Test compatibility with current dependencies (Framer Motion, Radix UI, tsparticles, react-icon-cloud)

---

## 6. Design & Polish

### Add light/dark mode toggle

`next-themes` (v0.3.0) is installed but only used internally by `src/components/ui/icon-cloud.tsx` for theme-aware icon colors. No `<ThemeProvider>` wraps the app, and no toggle UI exists.

- Wrap the app in `<ThemeProvider>` in `src/app/layout.tsx`
- Add a theme toggle button to `src/components/Header.tsx`
- The Tailwind config (`tailwind.config.ts`) already has `darkMode: ["class"]`, which is compatible with `next-themes`
- Audit components for dark mode styling — current styles use hardcoded dark colors (e.g., `bg-black`, `text-white`) rather than theme-aware classes

### Add hover effects to project cards

The BentoGrid component (`src/components/ui/bento-grid.tsx`) displays project cards. Current hover effect is a subtle background change.

- Add a preview image expansion, border glow, or info overlay on hover
- Consider adding a brief project description that appears on hover

### Add scroll progress indicator

A ScrollToTop button exists (`src/components/ScrollToTop.tsx`) with proper `aria-label`. There is no scroll progress bar.

- Add a fixed progress bar at the top of the viewport that fills based on scroll position
- Complement the existing scroll-to-top button

### Improve the footer

The footer (`src/components/Footer.tsx`) contains only a copyright notice.

- Add navigation links mirroring the header sections (About, Projects, Skills, Contact)
- Add social media links (already available in Contact component data)
- Add a link to the photography portfolio

### Add micro-interactions to skills section

The Skills component (`src/components/Skills.tsx`) lists technology names alongside the IconCloud. The list items have no interactive behavior.

- Add hover tooltips showing proficiency level or years of experience
- Consider subtle scale or highlight animations on hover

---

## File Reference

| File | Current State |
|------|---------------|
| `src/app/layout.tsx` | Root layout with Geist fonts, metadata, Vercel Analytics |
| `src/app/page.tsx` | Home page with dynamic imports for all sections |
| `src/app/photography/layout.tsx` | Photography metadata with basic OG tags |
| `src/app/photography/page.tsx` | Gallery page with ParticleLinks background |
| `src/app/globals.css` | Tailwind directives and CSS custom properties |
| `src/components/Header.tsx` | Fixed nav bar with smooth scroll, no aria-current |
| `src/components/Hero.tsx` | Profile avatar, animations, particle background |
| `src/components/PhotoGallery.tsx` | Masonry grid, lightbox, lazy loading, keyboard nav |
| `src/components/Footer.tsx` | Copyright notice only |
| `src/components/Contact.tsx` | Social links (GitHub, LinkedIn, email) |
| `src/components/Skills.tsx` | IconCloud + skill list with particle background |
| `src/components/ScrollToTop.tsx` | Scroll-to-top button with aria-label |
| `src/components/ui/particle-links.tsx` | tsparticles wrapper (369 particles) |
| `src/components/ui/icon-cloud.tsx` | 3D icon cloud with theme-aware colors |
| `src/components/ui/bento-grid.tsx` | Project cards grid layout |
| `src/data/photos.ts` | Photo entries with title and category fields |
| `package.json` | Next.js 14.2.13, React 18, next-themes 0.3.0 |
| `tsconfig.json` | strict: true (already enabled) |
| `tailwind.config.ts` | darkMode: ["class"], custom theme extensions |
