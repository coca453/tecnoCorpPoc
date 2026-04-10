# TECNA CORP Website

Official website for TECNA CORP - A holding specialized in Technology, Engineering, Commissioning, and Operation & Maintenance in the Oil & Gas, Mining, and Energy sectors.

**Live Site**: https://www.tecna-corp.com

## 🚀 About the Project

This is a modern, responsive website built with **Astro** and **React**, featuring:

- Interactive navigation and mobile-responsive design
- Service and certification information
- Client testimonials and case studies
- Contact forms and inquiry system
- SEO optimization with sitemap generation
- Dark mode support
- Smooth page transitions

## 📋 Prerequisites

- **Node.js** 18+ with pnpm (or npm)
- Git for version control

## 🛠️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd tecno
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or with pnpm
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:4321`

## 📦 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run start` | Alias for `npm run dev` |
| `npm run build` | Build for production with type checking |
| `npm run preview` | Preview production build locally |
| `npm run astro -- --help` | Get Astro CLI help and additional commands |

## 🏗️ Project Structure

```
src/
├── pages/              # File-based routing (each file = route)
│   ├── index.astro     # Homepage
│   ├── servicios/      # Services section
│   ├── sobrenosotros/  # About us section
│   ├── clientes.astro  # Clients page
│   ├── certificaciones.astro  # Certifications
│   ├── contacto.astro  # Contact page
│   └── proyectos.astro # Projects
├── components/         # Reusable components
│   ├── NavBar/         # Navigation (React)
│   ├── Footer/         # Footer section
│   ├── AboutUs/        # About section components
│   ├── Certificaciones/ # Certifications components
│   ├── Contact/        # Contact form
│   ├── clientes/       # Client testimonials
│   └── [other sections]
├── layouts/            # Page layouts
│   └── Layout.astro    # Main layout template
├── hooks/              # Custom React hooks
├── style/              # Global CSS styles
└── env.d.ts            # TypeScript definitions
```

## 🎨 Technology Stack

- **Astro 5.5.4** - Static site generation with hybrid SSR
- **React 18.3.1** - Interactive components
- **TypeScript 5.5.4** - Type safety
- **Tailwind CSS 3.4.10** - Utility-first styling
- **Tailwind Plugins** - Forms (@tailwindcss/forms) and Typography (@tailwindcss/typography)
- **Swiper 11.1.14** - Carousel/slider component
- **Headless UI** - Accessible component primitives
- **Heroicons** - SVG icon library
- **Vercel** - Deployment platform (SSR adapter)

## 🎯 Key Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Automatic theme switching based on OS preference
- **Interactive Components**: React integration for dynamic features
- **SEO Optimization**: Sitemap generation and meta tags
- **Performance**: Optimized images and SVG support
- **Type Safety**: Full TypeScript support across the project

## 🚀 Deployment

The site is configured for deployment on **Vercel** with server-side rendering (SSR).

To deploy:
1. Push changes to your repository
2. Vercel will automatically build and deploy
3. Production build includes type checking and optimization

### Build Process

```bash
npm run build
# Runs: astro check && astro build && npm run postbuild
```

This command:
1. Type-checks TypeScript files
2. Builds the static/dynamic site
3. Optimizes sitemap files

## 🌐 Localization

The site uses Spanish for routing and content:
- `/servicios` - Services
- `/sobrenosotros` - About Us
- `/clientes` - Clients
- `/certificaciones` - Certifications
- `/contacto` - Contact
- `/proyectos` - Projects

Future: i18n support can be added for multi-language content.

## 🎨 Styling & Theme

Custom theme defined in `tailwind.config.mjs`:

- **Primary Color**: Orange (#eb6209)
- **Secondary Color**: Blue (#023671)
- **Accent Colors**: Orange & Blue variants
- **Dark Mode**: Media-based (respects OS preference)
- **Custom Animations**: slideIn, fadeIn, pulso effects

## 📝 Component Development

### Creating a New React Component

```typescript
// src/components/MyComponent/MyComponent.tsx
import React from 'react';

export const MyComponent: React.FC<Props> = ({ prop1 }) => {
  return <div>{prop1}</div>;
};
```

### Creating a New Astro Component

```astro
---
// src/components/MyComponent/MyComponent.astro
const { title } = Astro.props;
---

<div class="my-component">
  <h2>{title}</h2>
</div>
```

### Using React Components in Astro

```astro
---
import { MyComponent } from './MyComponent';
---

<MyComponent client:load prop1="value" />
```

## 🔧 Development Tips

- **Hot Reload**: Changes to `.astro` and `.tsx` files automatically reload
- **TypeScript**: Run `astro check` to catch type errors
- **Tailwind**: Use utility classes from Tailwind (all custom colors available)
- **Icons**: Use `astro-icon` package for SVG icons
- **Mobile Menu**: NavBar component handles responsive navigation

## 📚 Useful Resources

- [Astro Documentation](https://docs.astro.build)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## 🤝 Contributing

When making changes:

1. Create a feature branch from `main`
2. Make your changes
3. Test locally with `npm run dev`
4. Build for production with `npm run build` to catch errors
5. Submit a pull request with a clear description

## 📧 Support

For issues or questions about the website, please contact the development team.

---

**Last Updated**: April 2025
