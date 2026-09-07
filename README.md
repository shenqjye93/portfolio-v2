# Portfolio

Personal site — Next.js (App Router, static export), Tailwind CSS v4,
Catppuccin Macchiato.

## Structure

```text
/
├── app/
│   ├── globals.css      # tokens + @theme mapping + component classes
│   ├── layout.tsx       # <html>, metadata, torch mount
│   └── page.tsx         # the whole page
├── components/
│   ├── Card.tsx         # one Experience/Work entry (server)
│   ├── Icon.tsx         # inline SVG paths (server)
│   ├── Nav.tsx          # scroll-spy rail nav (client)
│   └── Torch.tsx        # cursor torchlight (client)
├── lib/
│   └── site.ts          # all copy lives here
└── public/
```

All content is in `lib/site.ts` so editing the site never means editing
layout. Only `Nav` and `Torch` are client components; everything else
renders on the server.

## Styling

`app/globals.css` holds the Catppuccin tokens as plain CSS custom
properties, then maps them into Tailwind via `@theme inline` — so
`bg-base`, `text-accent`, and `font-mono` work in JSX while the palette
keeps exactly one definition.

A handful of rules stay hand-written under `@layer components`: the
torchlight gradient (its centre is a custom property updated per frame),
the nav tick `::before`, the card hover-dim, and the skip link. Each is
commented with why Tailwind isn't the right tool there.

## Commands

| Command         | Action                                  |
| :-------------- | :-------------------------------------- |
| `npm install`   | Install dependencies                    |
| `npm run dev`   | Dev server at `localhost:3000`          |
| `npm run build` | Static export to `./out/`               |
| `npm start`     | Serve the production build              |
