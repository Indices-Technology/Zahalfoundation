<template>
  <!--News Page Start-->
  <section class="news-page">
    <div class="container">
      <div class="row">
        <div v-for="(card, index) in news" :key="index" class="col-xl-4 col-lg-4">
          <div
            class="wow fadeInUp"
            :data-wow-delay="`${index * 100}ms`"
            data-wow-duration="1500ms"
          >
            <NewsCard
              :title="card.title"
              :author="card.author"
              :commentCount="card.commentCount"
              :date="card.date"
              :thumbnail="card.thumbnail"
              :excerpt="card.excerpt"
              :url="card.url"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--News Page End-->
</template>

<script setup lang="ts">
import { news } from "~/data/content"
</script>
