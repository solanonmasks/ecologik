// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // The live web address. Used for SEO tags (canonical links, social previews).
  site: 'https://ecologik.ca',
  vite: {
    plugins: [tailwindcss()],
  },
});
