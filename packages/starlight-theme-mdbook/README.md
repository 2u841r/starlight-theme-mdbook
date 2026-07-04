# starlight-theme-mdbook

A [Starlight](https://starlight.astro.build) theme that looks and feels like
[rust-lang's mdBook](https://github.com/rust-lang/mdBook) ([live example](https://rust-lang.github.io/mdBook/),
used for [The Rust Programming Language book](https://doc.rust-lang.org/book/))
— layout, chrome, and color schemes — while keeping all of Starlight's own
functionality (content collections, Markdown/MDX, Pagefind search, i18n,
sidebar autogeneration, etc.) untouched underneath.

## Install

```sh
npm install starlight-theme-mdbook
```

## Usage

Add the plugin to your `astro.config.mjs`:

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

That's it — the theme wires up its component overrides and CSS automatically.

## What's included

- **Color schemes** — Light, Dark (mdBook's Coal), Rust, plus two bonus
  palettes ported from [daisyUI](https://daisyui.com) (Valentine,
  Caramellatte) — selectable from an icon-only paintbrush button in the
  navbar, matching mdBook's own theme popup.
- **Layout** — a genuine full-height left sidebar, a navbar confined to the
  content column with mdBook's exact button layout (hamburger · theme ·
  search — left; print · git repo · edit — right), and a draggable resize
  handle on the sidebar's edge.
- **"On this page"** — heading TOC injected directly into the left sidebar
  under the active chapter link, instead of Starlight's default right
  sidebar (mdBook doesn't have a separate TOC column).
- **Chapter navigation** — floating `←`/`→` arrow buttons pinned to the
  viewport edges (collapsing to inline buttons on narrow screens), with real
  Left/Right arrow-key navigation ported from mdBook's `book.js`.
- **Mobile** — the sidebar is a true collapsible overlay at any screen
  width, auto-closes when you tap a real navigating link, and the navbar's
  icon clusters shrink to fit narrow screens.

This theme does not ship custom webfonts (mdBook uses Open Sans/Source Code
Pro) — an npm package can't easily place font files into a consumer's
`public/` directory, so it uses Starlight's default system-font stack
instead.

## Configuring your docs

Same as any Starlight site — `title`, `social`, `editLink`, `sidebar`, etc.
all work normally alongside the plugin. One recommendation: list your
`index` page explicitly in `sidebar` (e.g. `{ label: 'Introduction', slug:
'index' }`) so it participates in prev/next chapter navigation instead of
being an orphaned homepage, matching how mdBook treats its own `index.md`.

## Credits

This theme's layout, chrome, and color schemes are visually ported from
[rust-lang/mdBook](https://github.com/rust-lang/mdBook) (MPL-2.0) — all
code here is freshly written for Astro/Starlight, not a fork, but the
design and several behaviors (drag-to-resize, arrow-key chapter navigation)
are directly adapted from mdBook's own front-end. Full credit to the mdBook
maintainers and contributors.

The Valentine and Caramellatte color themes are ported from
[daisyUI](https://github.com/saadeghi/daisyui) by Pouya Saadeghi. Thanks!

## License

MIT
