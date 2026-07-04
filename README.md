# starlight-theme-mdbook

A [Starlight](https://starlight.astro.build) theme that looks and feels like
[rust-lang's mdBook](https://github.com/rust-lang/mdBook) ([live example](https://rust-lang.github.io/mdBook/),
used for [The Rust Programming Language book](https://doc.rust-lang.org/book/))
— layout, chrome, and color schemes — while keeping all of Starlight's own
functionality untouched underneath.

This is a pnpm workspace with two packages:

| Path | What it is |
| --- | --- |
| [`packages/starlight-theme-mdbook`](./packages/starlight-theme-mdbook) | The installable npm package. Published as `starlight-theme-mdbook`. |
| [`docs`](./docs) | A Starlight site that consumes the theme via the plugin — both the dev sandbox for this repo and the theme's own usage guide. |

## Quick start

```sh
npm install starlight-theme-mdbook
```

```js
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

See [`packages/starlight-theme-mdbook/README.md`](./packages/starlight-theme-mdbook/README.md)
or the [full usage guide](./docs) for more.

## Developing this repo

```sh
pnpm install
cd docs && pnpm dev
```

The `docs` site depends on the theme package via `workspace:*`, so changes
to `packages/starlight-theme-mdbook` are picked up immediately.

## Credits

This theme's layout, chrome, and mdBook-native color schemes are visually
ported from [rust-lang/mdBook](https://github.com/rust-lang/mdBook)
(MPL-2.0). The Valentine and Caramellatte color themes are ported from
[daisyUI](https://github.com/saadeghi/daisyui) by Pouya Saadeghi.

## Support

If this theme is useful to you, donations are welcome. PayPal/Stripe-based
options aren't available where I'm based, so for now:

- **Binance Pay** — username `2u841r`, Pay ID `463419485`

## License

MIT
