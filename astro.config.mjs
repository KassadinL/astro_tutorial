// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
import expressiveCode from "astro-expressive-code";
import rehypeMermaid from 'rehype-mermaid';


// https://astro.build/config
export default defineConfig({
  site: "https://kassadin.moe",
  markdown: {
    // Applied to .md and .mdx files
    rehypePlugins: [rehypeMermaid],
  },
  integrations: [
    preact(),
    expressiveCode({
      // Replace the default themes with a custom set of bundled themes:
      themes: ['catppuccin-latte', 'catppuccin-macchiato'],
      shiki: {
        // Allow using the alias 'mjs' for the 'javascript' language
        langAlias: {
          mjs: 'javascript',
          JavaScript: 'javascript',
          Python: 'python',
          Elixir: 'elixir',
        },
      },
    }),
  ]
});