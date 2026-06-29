<template>
  <!--Home Video Start-->
  <section class="home-video">
    <div class="container">
      <SectionTitle :subTitle="homeVideo.subtitle" :title="homeVideo.title" />
      <div class="row justify-content-center">
        <div class="col-xl-9">
          <VideoPlayer :src="homeVideo.url" :poster="homeVideo.poster" />
        </div>
      </div>
    </div>
  </section>
  <!--Home Video End-->
</template>

<script setup lang="ts">
import { homeVideo } from "~/data/content"
</script>

<style scoped>
.home-video {
  padding: 100px 0 110px;
}
</style>
