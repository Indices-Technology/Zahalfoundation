// Circular progress rings — vue-ellipse-progress v2 (Vue 3 compatible).
// Registers the global <vue-ellipse-progress> component.
import VueEllipseProgress from "vue-ellipse-progress"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueEllipseProgress)
})
