import { jarallax, jarallaxVideo } from "jarallax"
import "jarallax/dist/jarallax.min.css"

// Initialise jarallax parallax backgrounds after each navigation (client only).
export default defineNuxtPlugin((nuxtApp) => {
  const init = () => {
    jarallaxVideo()
    jarallax(document.querySelectorAll<HTMLElement>(".jarallax"), { speed: 0.2 })
    jarallax(document.querySelectorAll<HTMLElement>(".jarallax-video"), {
      speed: 0.2,
      videoSrc: "https://youtu.be/mru3Q5m4lkY",
    })
  }

  nuxtApp.hook("page:finish", () => {
    // wait for the DOM to settle before measuring
    setTimeout(init, 50)
  })
})
