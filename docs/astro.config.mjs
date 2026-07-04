// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeMdbook from 'starlight-theme-mdbook';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'starlight-theme-mdbook',
			plugins: [starlightThemeMdbook()],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/2u841r/starlight-theme-mdbook' }],
			editLink: {
				baseUrl: 'https://github.com/2u841r/starlight-theme-mdbook/edit/main/docs/',
			},
			sidebar: [
				{ label: 'Introduction', slug: 'index' },
				{ label: 'Installation', slug: 'installation' },
				{ label: 'Configuration', slug: 'configuration' },
				{ label: 'Themes', slug: 'themes' },
			],
		}),
	],
});
