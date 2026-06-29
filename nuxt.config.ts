// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  devtools: { enabled: true },

  // GitHub OAuth credentials for the CMS sign-in relay (server/routes/auth + callback).
  // Set in Vercel as NUXT_GITHUB_OAUTH_ID / NUXT_GITHUB_OAUTH_SECRET.
  runtimeConfig: {
    githubOauthId: "",
    githubOauthSecret: "",
  },

  // Brand/site values live in app/app.config.ts; theme colours in app/assets/css/theme.css

  app: {
    head: {
      title: "Zahal Foundation",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          key: "description",
          name: "description",
          // ZAHAL: replace with real meta description
          content: "Zahal Foundation — supporting those in need.",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "//fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,700,700i,800,800i,900,900i",
        },
      ],
    },
  },

  css: [
    "animate.css/animate.min.css",
    "bootstrap/dist/css/bootstrap.min.css",
    "swiper/css",
    "swiper/css/navigation",
    "swiper/css/pagination",
    "swiper/css/effect-fade",
    "glightbox/dist/css/glightbox.min.css",
    "accordion-js/dist/accordion.min.css",
    "~/assets/vendors/fontawesome/css/all.min.css",
    "~/assets/vendors/halpes-icons/style.css",
    "~/assets/vendors/reey-font/stylesheet.css",
    "~/assets/css/theme.css",
    "~/assets/css/zahal.css",
    "~/assets/css/zahal-responsive.css",
  ],
})
