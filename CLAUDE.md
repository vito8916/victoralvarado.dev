# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start local dev server
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
npx astro check  # Type-check .astro files
```

## Architecture

**Astro 4** static site with optional **React 18** islands. No backend, no CMS — everything is source-controlled.

### Routing & Pages (`src/pages/`)

File-based routing. Dynamic routes use `getStaticPaths()` + `getCollection()` to generate pages at build time:
- `projects/[slug].astro` — case study detail pages
- `work/[slug].astro` — work experience detail pages
- `education/[slug].astro` — education detail pages

### Content Collections (`src/content/`)

Three collections defined with Zod schemas in `src/content/config.ts`:

- **`projects/`** — Case studies (`.md`). Rich frontmatter: `title`, `description`, `publishDate`, `stack`, `metrics`, `links`, `gallery`, `myRole`, `team`, `tags`, `draft`, `featured`
- **`work/`** — Career entries (`.md`/`.mdx`). Fields: `position`, `company`, `date`, `endDate`, `bullets`, `tags`
- **`education/`** — Education entries (`.md`/`.mdx`). Same shape as `work`

Draft filtering pattern used in `getCollection` calls:
```ts
getCollection('projects', ({ data }) => !data.draft)
```

### Data Files (`src/data/`)

Hardcoded TypeScript arrays for content that doesn't come from collections:
- `featureProjects.ts` — featured projects shown on the homepage (curated subset, not auto-derived)
- `profiles.ts` — social profile links
- `menu.ts` — navigation items
- `setupHardware.ts`, `setupSoftware.ts` — /setup page content

### Component Hierarchy

```
Layout.astro          ← global HTML shell, nav, footer
  Page (*.astro)      ← route handler, fetches collection data
    ContentPreview    ← wraps rendered markdown with header, tags, breadcrumbs
    *Preview.astro    ← ProjectPreview, WorkPreview, EducationPreview (listing cards)
    sections/aboutme/ ← standalone sections composed on /about (Greeting, Facts, Memory, etc.)
```

### Styling

Custom CSS with CSS variables — no Tailwind or other CSS framework. Design tokens defined in `src/styles/global.css` (`:root`):
- Colors: `--color-bg`, `--color-text`, `--color-primary` (cyan)
- Typography: all monospace via `--font-sans` / `--font-serif` (Roboto Mono)
- Spacing scale: `--spacing`, `--spacing-s`, `--spacing-m`, `--spacing-l`
- Dark mode via `@media (prefers-color-scheme: dark)`

### Path Aliases (tsconfig)

```
@/*           → src/*
@assets/*     → assets/*
@components/* → components/*
```

### Images

Static images in `/public/assets/images/` (served as-is). Use Astro's `<Image>` component for optimization. Source images for Astro's image pipeline live in `src/assets/`.
