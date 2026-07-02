// Central Zahal Foundation brand/site configuration.
// Brand name, logo, contact and social are CMS-managed in /content/site.json (edited via /admin).
// Theme colours live in app/assets/css/theme.css. Components read these via `useAppConfig()`.
// The navigation menu below is intentionally NOT in the CMS (developer-managed).

import site from "~~/content/site.json"

export interface NavItem {
  name: string
  url: string
  subItems?: NavItem[]
}

export default defineAppConfig({
  site: {
    name: site.name,
    fullName: site.fullName,
    tagline: site.tagline,
    description: site.description,
  },

  logo: site.logo,

  contact: site.contact,

  legal: site.legal,

  social: site.social as { icon: string; url: string }[],

  navMenus: [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Causes", url: "/causes" },
    { name: "Gallery", url: "/gallery" },
    { name: "News", url: "/news" },
    { name: "Contact", url: "/contact" },
  ] as NavItem[],
})
