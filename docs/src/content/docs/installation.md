---
title: Installation
description: Add starlight-theme-mdbook to a new or existing Starlight project.
---

## Install the package

```sh
npm install starlight-theme-mdbook
```

## Add the plugin

Add `starlightThemeMdbook()` to your `plugins` array in `astro.config.mjs`:

```js {4,10}
// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeMdbook from 'starlight-theme-mdbook';

export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			plugins: [starlightThemeMdbook()],
		}),
	],
});
```

That's it. The plugin registers its own component overrides and CSS
automatically — there's nothing else to wire up, and none of your existing
Starlight config (`sidebar`, `social`, `editLink`, content collections,
i18n, etc.) needs to change.

:::note
If your project already overrides one of the same components this theme
uses (`Header`, `ThemeProvider`, `ThemeSelect`, `PageFrame`, `Sidebar`,
`PageSidebar`, or `Pagination`), the plugin will log a warning and leave
your override in place rather than silently replacing it.
:::

## Starting from scratch

If you don't have a Starlight project yet:

```sh
npm create astro@latest -- --template starlight
cd my-docs
npm install starlight-theme-mdbook
```

Then add the plugin to `astro.config.mjs` as shown above.
