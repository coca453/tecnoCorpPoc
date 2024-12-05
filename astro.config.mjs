import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";

import vercel from "@astrojs/vercel";

export default defineConfig({
  integrations: [tailwind(), react(), icon()],
  output: "server",
  adapter: vercel(),
  experimental: {
    responsiveImages: true,
    svg: true,
  },
});
