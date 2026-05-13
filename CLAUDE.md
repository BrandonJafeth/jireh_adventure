# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
```

No lint, test, or type-check scripts configured. Astro uses TypeScript strict mode via `tsconfig.json`.

## Architecture

Single-page bilingual marketing site for a Costa Rica adventure tour operator. Astro 6 + React 19. No CMS, no content collections, no backend — pure SSG.

**Component split:**
- `.astro` components: static sections (Hero, AboutUs, ToursGrid, etc.) — server-rendered
- `.tsx` React components: interactive only (Navbar, FAQ) — hydrated with `client:idle` or `client:visible`

All sections assemble in `src/pages/index.astro`. Layout wraps everything in `src/layouts/Layout.astro`.

## i18n System

Two-language (ES/EN) client-side system. Language stored in `localStorage['jireh-lang']`, synced to `document.documentElement.data-lang`.

**In Astro components** — render both languages, toggle via CSS:
```astro
<span class="lang-es">Texto en español</span>
<span class="lang-en">English text</span>
```

**In React components** — use the hook:
```tsx
import { useLang } from '../i18n/useLang';
const [lang, setLang] = useLang();
const text = t(translations.section.key, lang);
```

All copy lives in `src/i18n/translations.ts`. Structure: `{ section: { key: { es: '...', en: '...' } } }`. Add new text there first, then use in components.

The `t()` helper and `Lang` type are exported from `translations.ts`. The hook, `getLang()`, and `setLang()` are from `useLang.ts`.

## Styling

Tailwind CSS v4 via Vite plugin (not PostCSS). No `tailwind.config.*` file — configuration is in `src/styles/global.css` using `@theme` and `@layer`.

Custom CSS utilities defined in `global.css`:
- `.liquid-glass` — frosted glass card effect
- `.animate-on-scroll` — IntersectionObserver-triggered fade-up
- `@keyframes fade-up` — scroll animation

Fonts: Barlow Condensed (headings) + Barlow (body) via `@fontsource` — self-hosted, no Google Fonts.

## Images

External images served from Cloudinary (`res.cloudinary.com`). Astro's image optimization is configured to allow this domain. Use standard `<img>` or `<Image />` with Cloudinary URLs directly.

## CTAs

No forms, no payment. All booking CTAs are WhatsApp links with pre-filled messages. Message templates stored in `translations.whatsapp`. Phone: `+506 8668-4823`.

## Smooth Scrolling

Lenis initialized globally in `Layout.astro` via rAF loop. Instance exposed as `window.__lenis` for programmatic scroll control.

## SEO

Comprehensive Schema.org markup (Organization, LocalBusiness, TouristAttraction, FAQPage) in `Layout.astro`. Hreflang and geo tags included. Update both ES and EN versions of metadata when changing copy.
