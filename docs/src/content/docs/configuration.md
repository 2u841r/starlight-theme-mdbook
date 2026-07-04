---
title: Configuration
description: What the theme picks up from your normal Starlight config.
---

`starlight-theme-mdbook` doesn't introduce its own configuration options —
it reads the same `starlight({ ... })` config you already have. A few
fields are worth calling out because the theme's navbar/sidebar render them
a little differently than stock Starlight.

## Title

`title` is shown centered in the navbar, matching mdBook's book title.

```js
starlight({
	title: 'My Docs',
});
```

## Social links → the git repository icon

Add an entry with `icon: 'github'` and it becomes the navbar's git
repository icon link (mdBook always links to the book's source repo there):

```js
starlight({
	social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/me/my-docs' }],
});
```

## Edit links → the pencil icon

Set `editLink.baseUrl` and it becomes the navbar's "suggest an edit" pencil
icon, in addition to the normal text link Starlight still shows in the page
footer:

```js
starlight({
	editLink: {
		baseUrl: 'https://github.com/me/my-docs/edit/main/',
	},
});
```

## Sidebar

Regular Starlight `sidebar` config (manual entries, `autogenerate`, nested
groups) all works normally. One recommendation specific to this theme: list
your `index` page explicitly instead of leaving it as an implicit homepage,
so it participates in prev/next chapter navigation — matching how mdBook
treats its own `index.md` as chapter one, not a landing page:

```js
starlight({
	sidebar: [
		{ label: 'Introduction', slug: 'index' },
		{
			label: 'Guides',
			items: [{ autogenerate: { directory: 'guides' } }],
		},
	],
});
```

## Table of contents

Starlight's `tableOfContents` option (heading levels, or `false` to
disable) still works as documented — the theme just relocates where those
headings render (inside the left sidebar, under the active chapter link)
instead of changing what's collected.
