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
    tagline: site.tagline,
    description: site.description,
  },

  logo: site.logo,

  contact: site.contact,

  social: site.social as { icon: string; url: string }[],

  navMenus: [
    { name: "Home", url: "/" },
    {
      name: "Pages",
      url: "/about",
      subItems: [
        { name: "About", url: "/about" },
        { name: "Volunteers", url: "/volunteers" },
        { name: "Gallery", url: "/gallery" },
        { name: "Become a Volunteer", url: "/become-volunteer" },
      ],
    },
    {
      name: "Donations",
      url: "/causes",
      subItems: [
        { name: "Causes", url: "/causes" },
        { name: "Causes Details", url: "/causes-details" },
      ],
    },
    {
      name: "Events",
      url: "/events",
      subItems: [
        { name: "Events", url: "/events" },
        { name: "Events Details", url: "/events-details" },
      ],
    },
    {
      name: "News",
      url: "/news",
      subItems: [
        { name: "News", url: "/news" },
        { name: "News Details", url: "/news-details" },
      ],
    },
    { name: "Contact", url: "/contact" },
  ] as NavItem[],
})
