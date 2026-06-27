<template>
  <span ref="el">{{ display }}</span>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core"

const props = withDefaults(
  defineProps<{
    startVal?: number
    endVal: number
    duration?: number
    decimals?: number
    separator?: string
  }>(),
  { startVal: 0, duration: 2000, decimals: 0, separator: "," },
)

const el = ref<HTMLElement | null>(null)
const current = ref(props.startVal)
let started = false
let rafId: number | null = null

const format = (value: number) => {
  const fixed = value.toFixed(props.decimals)
  const [intPart, decPart] = fixed.split(".")
  const withSep = intPart!.replace(/\B(?=(\d{3})+(?!\d))/g, props.separator)
  return decPart ? `${withSep}.${decPart}` : withSep
}

const display = computed(() => format(current.value))

const run = () => {
  const startTime = performance.now()
  const from = props.startVal
  const to = props.endVal
  const tick = (now: number) => {
    const progress = Math.min((now - startTime) / props.duration, 1)
    // easeOutQuad
    const eased = progress * (2 - progress)
    current.value = from + (to - from) * eased
    if (progress < 1) rafId = requestAnimationFrame(tick)
  }
  rafId = requestAnimationFrame(tick)
}

const { stop } = useIntersectionObserver(el, ([entry]) => {
  if (entry?.isIntersecting && !started) {
    started = true
    run()
    stop()
  }
})

onBeforeUnmount(() => {
  if (rafId !== null) cancelAnimationFrame(rafId)
})
</script>
