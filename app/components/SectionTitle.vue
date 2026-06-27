<template>
  <div
    :class="`section-title text-${
      undefined === alignment ? 'center' : alignment
    }`"
  >
    <span class="section-title__tagline">{{ subTitle }}</span>
    <h2 class="section-title__title" v-html="title"></h2>
  </div>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    subTitle?: string
    alignment?: string
  }>(),
  { title: "", subTitle: "", alignment: "center" },
)
</script>
