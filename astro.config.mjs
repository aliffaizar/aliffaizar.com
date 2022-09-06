import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://aliffaizar.com',
  output: 'server',
  adapter: node(),
  integrations: [mdx(), sitemap(), tailwind(), react()],
});
