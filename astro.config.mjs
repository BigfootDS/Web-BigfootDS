// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://bigfootds.com',
    integrations: [mdx(), sitemap(), react({experimentalReactChildren: true}), icon()],
});