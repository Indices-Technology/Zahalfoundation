// Reveal-on-scroll animations for elements using `class="wow <animate.css class>"`.
// Replaces the Vue 2 `vue-wow` plugin with wow.js directly.

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", async () => {
    // wowjs is CommonJS and ships no types; access the WOW constructor via interop.
    const wowjs = (await import("wowjs")) as any
    const WOW = wowjs.WOW || wowjs.default?.WOW || wowjs.default
    setTimeout(() => {
      new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: false,
      }).init()
    }, 50)
  })
})
