// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  experimental: {
    svg: true,
  },
  adapter: node({
    mode: "standalone",
  }),
});