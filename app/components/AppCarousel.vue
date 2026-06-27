<template>
  <ClientOnly>
    <Swiper
      :modules="modules"
      :loop="loop"
      :space-between="spaceBetween"
      :slides-per-view="slidesPerView"
      :effect="effect"
      :autoplay="autoplay ? { delay: autoplayDelay, disableOnInteraction: false } : false"
      :pagination="pagination ? { clickable: true } : false"
      :navigation="navigation"
      :breakpoints="breakpoints"
    >
      <slot />
    </Swiper>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Swiper } from "swiper/vue"
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"
import type { SwiperOptions } from "swiper/types"

const props = withDefaults(
  defineProps<{
    loop?: boolean
    spaceBetween?: number
    slidesPerView?: number | "auto"
    effect?: "slide" | "fade"
    autoplay?: boolean
    autoplayDelay?: number
    pagination?: boolean
    navigation?: boolean
    breakpoints?: SwiperOptions["breakpoints"]
  }>(),
  {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    effect: "slide",
    autoplay: true,
    autoplayDelay: 5000,
    pagination: true,
    navigation: false,
  },
)

const modules = computed(() => {
  const mods = [Navigation, Pagination, Autoplay]
  if (props.effect === "fade") mods.push(EffectFade)
  return mods
})
</script>
