import { useIntersectionObserver } from "@vueuse/core"

// Sets `revealed` to true once `target` first scrolls into view (then stops observing).
// Used to trigger progress-bar width animations.
export function useReveal() {
  const target = ref<HTMLElement | null>(null)
  const revealed = ref(false)

  const { stop } = useIntersectionObserver(target, ([entry]) => {
    if (entry?.isIntersecting) {
      revealed.value = true
      stop()
    }
  })

  return { target, revealed }
}
