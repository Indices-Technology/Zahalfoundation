<template>
  <!--News Two Single-->
  <div class="news-two__single">
    <div class="news-two__img-box">
      <div class="news-two__img">
        <img :src="thumbnail" :alt="title" />
        <nuxt-link :to="url">
          <i class="fa fa-plus"></i>
        </nuxt-link>
      </div>
      <div class="news-two__date">
        <p>{{ date }}</p>
      </div>
    </div>
    <div class="news-two__content">
      <ul class="list-unstyled news-two__meta">
        <li>
          <a href="#"><i class="far fa-user-circle"></i> {{ author }}</a>
        </li>
        <li><span>/</span></li>
        <li>
          <a href="#"
            ><i class="far fa-comments"></i> {{ commentCount }} Comments</a
          >
        </li>
      </ul>
      <h3>
        <nuxt-link :to="url" v-html="title"></nuxt-link>
      </h3>
      <p class="news-two__text" v-html="excerpt"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  author: string
  date: string
  commentCount: string
  thumbnail: string
  excerpt: string
  url: string
}>()
</script>
