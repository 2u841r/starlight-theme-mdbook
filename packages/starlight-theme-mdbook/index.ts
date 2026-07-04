import type { StarlightPlugin } from '@astrojs/starlight/types';

import { overrideComponents } from './libs/starlight';

export default function starlightThemeMdbookPlugin(): StarlightPlugin {
	return {
		name: 'starlight-theme-mdbook',
		hooks: {
			'config:setup'({ config, logger, updateConfig }) {
				updateConfig({
					components: overrideComponents(
						config,
						[
							'Header',
							'ThemeProvider',
							'ThemeSelect',
							'PageFrame',
							'Sidebar',
							'PageSidebar',
							'Pagination',
							'Footer',
						],
						logger
					),
					customCss: [...(config.customCss ?? []), 'starlight-theme-mdbook/styles/theme'],
				});
			},
		},
	};
}
