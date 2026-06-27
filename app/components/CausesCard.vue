<template>
  <!--Causes Page Single-->
  <div class="causes-one__single">
    <div class="causes-one__img">
      <div class="causes-one__img-box">
        <img :src="thumbnail" :alt="title" />
        <nuxt-link :to="url">
          <i class="fa fa-plus"></i>
        </nuxt-link>
      </div>
      <div class="causes-one__category">
        <span>{{ category }}</span>
      </div>
    </div>
    <div class="causes-one__content">
      <h3 class="causes-one__title">
        <nuxt-link :to="url" v-html="title"></nuxt-link>
      </h3>
      <p class="causes-one__text" v-html="excerpt"></p>
    </div>
    <div class="causes-one__progress">
      <div class="bar">
        <div
          ref="bar"
          class="bar-inner count-bar counted"
          :data-percent="`${percent}%`"
          :style="startBar ? `width: ${percent}%` : ''"
        >
          <div class="count-text">
            <CountTo :endVal="percent" :duration="3000" />%
          </div>
        </div>
      </div>
      <div class="causes-one__goals">
        <p><span>${{ amount.raised }}</span> Raised</p>
        <p><span>${{ amount.goal }}</span> Goal</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core"

const props = defineProps<{
  title: string
  amount: { raised: string; goal: string }
  category: string
  thumbnail: string
  excerpt: string
  url: string
}>()

const percent = computed(() => {
  const raised = parseInt(props.amount.raised.replace(/,/g, ""), 10)
  const goal = parseInt(props.amount.goal.replace(/,/g, ""), 10)
  return Math.round((raised / goal) * 100)
})

const bar = ref<HTMLElement | null>(null)
const startBar = ref(false)
const { stop } = useIntersectionObserver(bar, ([entry]) => {
  if (entry?.isIntersecting) {
    startBar.value = true
    stop()
  }
})
</script>
