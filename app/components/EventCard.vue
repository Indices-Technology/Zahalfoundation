<template>
  <!--Events One Single-->
  <div class="events-one__single">
    <div class="events-one__img">
      <img :src="thumbnail" :alt="title" />
      <div class="events-one__date-box">
        <p v-html="date"></p>
      </div>
      <div class="events-one__bottom">
        <p><i class="far fa-clock"></i>{{ time }}</p>
        <h3 class="events-one__bottom-title">
          <nuxt-link :to="url" v-html="title"></nuxt-link>
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  time: string
  date: string
  thumbnail: string
  url: string
}>()
</script>
