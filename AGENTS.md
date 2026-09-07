## Development

Next.js App Router with static export (`output: "export"`), Tailwind CSS v4.

```
npm run dev      # localhost:3000
npm run build    # static export to ./out/
```

## Conventions

- All site copy lives in `lib/site.ts`. Editing content should never mean
  editing layout.
- Server components by default. Only `Nav` and `Torch` are `"use client"`,
  because they need IntersectionObserver and pointer events respectively.
- The Catppuccin palette is defined once as CSS custom properties in
  `app/globals.css`, then mapped into Tailwind with `@theme inline`. Add a
  colour there and it becomes a utility; do not hardcode hex in JSX.
- Prefer Tailwind utilities. The exceptions under `@layer components` are
  things Tailwind genuinely cannot express — a gradient positioned by a
  runtime custom property, `::before` decorations, sibling-dimming on
  hover, and a skip link that must unhide on focus. Each carries a comment
  saying why.
- Contrast ratios for the text ramp are documented in `globals.css`.
  `--overlay0` fails AA for body copy; keep it on borders and dividers.

## Documentation

- [App Router](https://nextjs.org/docs/app)
- [Static exports](https://nextjs.org/docs/app/guides/static-exports)
- [Tailwind v4 theme](https://tailwindcss.com/docs/theme)
