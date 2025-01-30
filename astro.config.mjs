import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://www.tecna-corp.com", // URL base de tu sitio
  integrations: [
    tailwind(),
    react(),
    icon(),
    sitemap(),
  ],
  output: "server",
  adapter: vercel({
    output: {
      static: "./.vercel/output/static", // Directorio estático de salida
    },
  }),
  experimental: {
    responsiveImages: true,
    svg: true,
  },
});
