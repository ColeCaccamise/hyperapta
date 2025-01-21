import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				typography: {
					strong: 'var(--typography-strong)',
					weak: 'var(--typography-weak)',
					muted: 'var(--typography-muted)'
				},
				fill: {
					DEFAULT: 'var(--fill)',
					solid: 'var(--fill-solid)'
				},
				stroke: {
					strong: 'var(--stroke-strong)',
					medium: 'var(--stroke-medium)',
					weak: 'var(--stroke-weak)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					stroke: {
						strong: 'var(--accent-stroke-strong)',
						weak: 'var(--accent-stroke-weak)'
					}
				},
				brand: {
					DEFAULT: 'var(--brand)',
					secondary: {
						DEFAULT: 'var(--brand-secondary)',
						stroke: {
							strong: 'var(--brand-secondary-stroke-strong)',
							weak: 'var(--brand-secondary-stroke-weak)'
						},
						fill: 'var(--brand-secondary-fill)'
					}
				},
				success: {
					DEFAULT: 'var(--success)',
					stroke: {
						strong: 'var(--success-stroke-strong)',
						weak: 'var(--success-stroke-weak)'
					},
					fill: 'var(--success-fill)'
				},
				error: {
					DEFAULT: 'var(--error)',
					stroke: {
						strong: 'var(--error-stroke-strong)',
						weak: 'var(--error-stroke-weak)'
					},
					fill: 'var(--error-fill)'
				},
				warning: {
					DEFAULT: 'var(--warning)',
					stroke: {
						strong: 'var(--warning-stroke-strong)',
						weak: 'var(--warning-stroke-weak)'
					},
					fill: 'var(--warning-fill)'
				},
				info: {
					DEFAULT: 'var(--info)',
					stroke: {
						strong: 'var(--info-stroke-strong)',
						weak: 'var(--info-stroke-weak)'
					},
					fill: 'var(--info-fill)'
				}
			}
		}
	},
	plugins: []
};
export default config;
