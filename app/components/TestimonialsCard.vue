<template>
  <!--Testimonial One Single-->
  <div :class="`testimonial-one__single ${className}`">
    <p class="testimonial-one__text" v-html="excerpt"></p>
    <div class="testimonial-one__client-info">
      <div class="testimonial-one__client-img">
        <img :src="thumbnail" :alt="name" />
        <div class="testimonial-one__quote"></div>
      </div>
      <div class="testimonial-one__client-name">
        <h3 v-html="name"></h3>
        <p v-html="designation"></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    className?: string
    designation: string
    name: string
    thumbnail: string
    excerpt: string
  }>(),
  { className: "" },
)
</script>
