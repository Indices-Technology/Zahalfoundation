// Reveal-on-scroll animations for elements using `class="wow <animate.css name>"`.
// Replaces the unmaintained wow.js (which threw a getComputedStyle error and didn't match
// animate.css v4's class names) with a small IntersectionObserver that applies the v4
// `animate__animated animate__<name>` classes when an element scrolls into view.

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>(".wow")
      if (!els.length) return

      const io = new IntersectionObserver(
        (entries, obs) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            const el = entry.target as HTMLElement
            const name = Array.from(el.classList).find(
              (c) => c !== "wow" && !c.startsWith("animate__"),
            )
            if (el.dataset.wowDelay) el.style.animationDelay = el.dataset.wowDelay
            if (el.dataset.wowDuration) el.style.animationDuration = el.dataset.wowDuration
            el.style.visibility = ""
            el.classList.add("animate__animated")
            if (name) el.classList.add(`animate__${name}`)
            obs.unobserve(el)
          }
        },
        { threshold: 0.1 },
      )

      els.forEach((el) => {
        // hide until revealed (progressive enhancement: stays visible if JS is off)
        el.style.visibility = "hidden"
        io.observe(el)
      })
    }, 50)
  })
})
