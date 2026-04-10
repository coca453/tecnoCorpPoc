# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start Commands

All commands run from the project root:

| Command | Purpose |
|---------|---------|
| `npm run dev` or `npm start` | Start development server (localhost:4321) |
| `npm run build` | Build production site with type checking |
| `npm run preview` | Preview built site locally |
| `npm run astro -- --help` | Get help with Astro CLI commands |

## Technology Stack

- **Framework**: Astro 5.5.4 (hybrid SSR with Vercel adapter)
- **JavaScript**: TypeScript 5.5.4 with React 18.3.1
- **Styling**: Tailwind CSS 3.4 with custom theme + @tailwindcss/forms and @tailwindcss/typography
- **Components**: Mix of Astro (static) and React (interactive)
- **Package Manager**: pnpm
- **Deployment**: Vercel (server output mode)
- **Additional**: astro-icon, swiper for sliders, Headless UI, Heroicons

## Project Architecture

### Directory Structure

```
src/
├── pages/              # File-based routing (each .astro file = route)
│   ├── index.astro     # Homepage
│   ├── servicios/      # Services pages
│   ├── sobrenosotros/  # About pages
│   ├── clientes.astro  # Clients page
│   ├── certificaciones.astro
│   ├── contacto.astro
│   └── proyectos.astro
├── components/         # Reusable components (organized by feature)
│   ├── NavBar/         # Navigation (React components for interactivity)
│   ├── Footer/
│   ├── AboutUs/
│   ├── Certificaciones/
│   ├── Contact/
│   ├── clientes/
│   └── [other feature folders]
├── layouts/            # Page templates (Layout.astro is main layout)
├── hooks/              # Custom React hooks (e.g., scrollHooks.tsx)
├── style/              # Global CSS
└── env.d.ts            # Astro type definitions
```

### Component Patterns

- **React Components** (`*.tsx`): Used for interactive features (mobile menu toggle, image sliders, scroll effects)
  - Import React utilities from React library
  - Use Headless UI for accessible components
  - Components exported as named exports
  - Example: NavBar handles state for mobile menu and scroll detection

- **Astro Components** (`*.astro`): Used for static/template content
  - Frontmatter (---) for server-side logic
  - Props passed via `Astro.props`
  - Uses `<ViewTransitions>` for smooth page transitions

### Styling

- **Tailwind Configuration**: `tailwind.config.mjs` defines custom theme
- **Custom Colors**:
  - `primary` (orange): #eb6209 with light/medium/dark variants
  - `secondary` (blue): #023671 with variants
  - `accent` colors for orange and blue
  - `neutral` colors for light/dark modes
- **Dark Mode**: Media-based (respects OS preference)
- **Custom Animations**: slideIn, fadeIn, pulso keyframes defined
- **Inset Values**: Extended with percentage values for positioning

### Site Configuration

- **Base URL**: https://www.tecna-corp.com (in astro.config.mjs)
- **Output Mode**: Server-side rendering (SSR)
- **Static Output**: `./.vercel/output/static/`
- **Integrations**: Tailwind, React, Icon, Sitemap
- **Experimental**: Responsive images and SVG support enabled

## Type Safety

- Astro pages receive props via `Astro.props` (untyped by default)
- React components use TypeScript for prop typing
- Types auto-generated from Astro collections in `./.astro/types.d.ts`

## Build & Deployment Process

1. `npm run build` runs:
   - `astro check` — TypeScript validation
   - `astro build` — Builds to `/dist/`
   - `npm run postbuild` — Moves sitemap files to `.vercel/output/static/`

2. Vercel adapter handles SSR and static file serving

## Key Implementation Details

- **Navigation**: NavBar component tracks scroll state and current route for active link styling
- **Client-Side Hydration**: React components in Astro use `client:load` directive (assumed for interactive components)
- **Layout Inheritance**: All pages use the main Layout.astro which includes NavBar and Footer
- **SEO**: Meta tags set in Layout.astro frontmatter (title, description, keywords, robots)
- **Routing**: Spanish-language routes (servicios, sobrenosotros, etc.) — i18n structure not yet implemented

## Common Development Patterns

- Feature-based component organization: Create new folders in `/src/components/` for new features
- Keep data (e.g., footer links) in `.ts` files (`footerData.ts`) for easy updates
- Use Tailwind utility classes for styling (custom config in `tailwind.config.mjs`)
- React hooks in `/src/hooks/` for shared client-side logic
- Test components in isolation by accessing them via their routes

## Notes

- No testing framework or linter currently configured
- Components manually organized by feature (no file-by-file auto-indexing)
- Build process includes type checking, so catch TypeScript errors early