const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			animation: {
				'meteor-effect': 'meteor 5s linear infinite',
			},
			scroll:
				'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
			keyframes: {
				scroll: {
					to: {
						transform: 'translate(calc(-50% - 0.5rem))',
					},
				},
				meteor: {
					'0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
					'70%': { opacity: '1' },
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: '0',
					},
				},
			},
		},
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		colors: {
			black: '#000',
			white: '#fff',
			orange: '#E06330',
		},
		fontFamily: {
			// Headings
			sans: ['Inter', 'sans-serif'],
			// Base text
			monospace: ['Inconsolata', 'monospace'],
		},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
		},
		letterSpacing: {
			wide: '.025em',
		},
	},
	plugins: [
		addVariablesForColors,
		plugin(function ({ addBase, theme }) {
			addBase({
				h2: {
					letterSpacing: theme('letterSpacing.wide'),
					fontWeight: 'bold',
				},
				li: {
					letterSpacing: theme('letterSpacing.wide'),
				},
			});
		}),
	],
};

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars,
	});
}
