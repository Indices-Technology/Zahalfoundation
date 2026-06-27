// Central Zahal Foundation brand/site configuration.
// Edit values here (and theme colours in app/assets/css/theme.css) to rebrand the whole site.
// Components read these via `useAppConfig()`.

export interface NavItem {
  name: string
  url: string
  subItems?: NavItem[]
}

export default defineAppConfig({
  site: {
    // ZAHAL: confirm final brand wording
    name: "Zahal Foundation",
    tagline: "Helping Them Today",
    description: "Zahal Foundation — supporting those in need.",
  },

  logo: {
    // ZAHAL: replace with final logo files in public/images/resources
    light: "/images/zahal_logo_white.jpg",
    dark: "/images/resources/logo-3.png",
    lightColored: "/images/resources/logo-2.png",
  },

  contact: {
    // ZAHAL: replace with real contact details
    email: "needhelp@zahalfoundation.org",
    phone: "92 666 888 0000",
    address: "88 Broklyn Golden Street, USA",
    welcomeText: "Welcome to the Zahal Foundation",
  },

  social: [
    { icon: "fab fa-twitter", url: "#" },
    { icon: "fab fa-facebook-square", url: "#" },
    { icon: "fab fa-dribbble", url: "#" },
    { icon: "fab fa-instagram", url: "#" },
  ] as { icon: string; url: string }[],

  navMenus: [
    {
      name: "Home",
      url: "/",
      subItems: [
        { name: "Home 01", url: "/" },
        { name: "Home 02", url: "/index-2" },
        { name: "Home 03", url: "/index-3" },
        {
          name: "Header Styles",
          url: "#",
          subItems: [
            { name: "Header 01", url: "/" },
            { name: "Header 02", url: "/index-2" },
            { name: "Header 03", url: "/index-3" },
          ],
        },
      ],
    },
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
