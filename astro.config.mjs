import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: "https://canaryonco.com/",
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    react(),
    pagefind(),
  ],
});
