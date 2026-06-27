<template>
  <!--News three Start-->
  <section class="news-two news-three">
    <div class="container">
      <SectionTitle
        title="Latest news & articles directly <br /> coming from the blog"
        subTitle="Get Daily Updates"
      />
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
  <!--News three End-->
</template>

<script setup lang="ts">
import { news as allNews } from "~/data/content"

const news = allNews.slice(0, 3)
</script>
