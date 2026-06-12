# Sewanu Isaiah — Personal Site

A single-page personal site — a quiet, document-of-my-life timeline rather than a résumé.
Food engineering, research, and software, told as chapters down one vertical thread.

Built with **React 19 + TypeScript + Vite**, packaged with **Bun**. Brown-and-grey theme,
no routing, no animation, content-driven.

## Getting started

```bash
bun install      # install dependencies
bun run dev      # start the dev server (http://localhost:5173)
bun run build    # type-check + production build to dist/
bun run preview  # serve the production build locally
bun run lint     # run ESLint
```

## How it's built

All content lives in **`src/data/constants.ts`** — the components are generic and render
whatever the data describes. To change what the site says, you almost never touch a component.

```
src/
  types.ts                 # shared interfaces (Chapter, WritingItem, Contact, Resume…)
  data/constants.ts        # ALL content: profile, chapters, writing, contact, résumé
  components/
    hero.tsx               # portrait + name + tagline (horizontal header)
    timeline.tsx           # the vertical rail; maps over chapters + Words + Find me
    timeline-section.tsx   # one node on the rail: label, year, optional header action
    prose.tsx              # renders a chapter's paragraphs
    writing.tsx            # the Words list (links + citations)
    contact.tsx            # Find me links
    resume-link.tsx        # single source for the résumé download
  app.tsx                  # composes Hero + Timeline
  index.css                # theme variables (palette) + reset
```

Each component is paired with its own `*.module.css`.

## Editing content

- **Add a life chapter** → add an object to `CHAPTERS` in `constants.ts` (`title`, optional
  `meta` year range, and `paragraphs`). It renders automatically as a new node on the timeline.
- **Add writing** → add to `WRITING`. Omit `link` for unpublished work (renders as plain text).
- **Update the résumé** → drop the PDF in `public/` and point `RESUME.href` at it.
- **Replace the portrait** → swap the image imported in `src/components/hero.tsx`.
- **Recolor the site** → edit the CSS variables at the top of `src/index.css`.

## Conventions

- **DRY** — anything reused becomes a component (e.g. `ResumeLink`); no copy-pasted markup.
- **Small files** — one component per file, each with its own CSS module.
- **Central constants** — all content and config live in `src/data/constants.ts`.
- **Filenames** — lowercase `kebab-case` (e.g. `timeline-section.tsx`).
