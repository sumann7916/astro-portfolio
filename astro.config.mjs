import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		mdx(),
		image(),
		react({
			include: ['**/react/*s'],
		}),
	],
});
