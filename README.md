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

## Rebranding (where to edit)

Everything Zahal-specific is centralised so you rarely touch components:

| What | Where |
| --- | --- |
| Brand name, tagline, contact, social links, logo paths, nav menus | `app/app.config.ts` |
| Brand colours & fonts | `app/assets/css/theme.css` (`--zahal-*` variables) |
| Listing copy & imagery (causes, events, news, volunteers, gallery, testimonials) | `app/data/content.ts` |
| Page `<title>` / meta description | `nuxt.config.ts` |
| Logo / favicon files | `public/images/` and `public/favicon.ico` |

Spots that still hold demo copy/imagery to replace with final Zahal content are marked with
`ZAHAL:` comments.
