// Circular progress rings — vue-ellipse-progress v2.
// The library touches `document` on load, so it must only run on the client. On the server we
// register a no-op stub for the same component name so SSR doesn't warn "failed to resolve"
// (the real rings are wrapped in <client-only> and only render on the client anyway).
export default defineNuxtPlugin(async (nuxtApp) => {
  if (import.meta.client) {
    const VueEllipseProgress = (await import("vue-ellipse-progress")).default
    nuxtApp.vueApp.use(VueEllipseProgress)
  } else {
    nuxtApp.vueApp.component("vue-ellipse-progress", { render: () => null })
  }
})
