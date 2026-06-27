# Zahal Foundation

Charity / donation website built with **Nuxt 4** (Vue 3 + TypeScript).
Migrated from the "Halpes" Nuxt 2 template.

## Stack

- [Nuxt 4](https://nuxt.com) (Vue 3, Vite, Nitro)
- TypeScript (`<script setup lang="ts">` throughout)
- [Swiper 11](https://swiperjs.com) for all carousels (`AppCarousel.vue` wrapper)
- [@vueuse/core](https://vueuse.org) for scroll-reveal / counters
- Bootstrap 5 grid + the template's own CSS
- jarallax (parallax), wow.js + animate.css (reveal animations), GLightbox (video), accordion-js (FAQ)

## Setup

```bash
npm install
npm run dev        # dev server
npm run build      # production build
npm run preview    # preview the production build
npm run typecheck  # vue-tsc type check
```

## Project structure

```
app/
  app.config.ts        # <- brand name, contact, social, logo paths, nav menus
  app.vue
  assets/
    css/
      theme.css        # <- Zahal brand colours (CSS variables, single source)
      zahal.css        # template styles (consume the theme variables)
      zahal-responsive.css
    vendors/           # fontawesome, halpes-icons, reey-font, ...
  components/          # all UI components (auto-imported)
  composables/         # useUiState (drawer/search), useReveal (scroll reveal)
  data/content.ts      # <- typed listing data (causes, events, news, gallery, ...)
  layouts/default.vue
  pages/               # routes (index, index-2, index-3, about, causes, ...)
  plugins/             # jarallax / wow / ellipse-progress (client-only)
public/
  images/              # all imagery (served at /images/**)
  favicon.ico
nuxt.config.ts
```

## Content editing (CMS)

Non-technical staff edit text and images via **Sveltia CMS** at **`/admin`** — see
[CMS.md](CMS.md) for the staff guide and one-time GitHub/Vercel setup. Content is stored as JSON in
[`content/`](content/); the app imports it (no database).

## Rebranding (where to edit)

Most Zahal-specific content is now CMS-managed; for the rest:

| What | Where |
| --- | --- |
| Brand name, contact, social, logo + listing content (causes/events/news/gallery/volunteers/testimonials/hero) | **CMS** → `/admin` (files in `content/`) |
| Navigation menu | `app/app.config.ts` |
| Brand colours & fonts | `app/assets/css/theme.css` (`--zahal-*` variables) |
| Page `<title>` / meta description | `nuxt.config.ts` |
| Favicon | `public/favicon.ico` |

Spots that still hold demo copy/imagery to replace with final Zahal content are marked with
`ZAHAL:` comments.
