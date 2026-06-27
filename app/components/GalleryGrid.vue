<template>
  <section class="gallery-page">
    <div class="container">
      <div class="row">
        <div
          class="col-xl-4 col-lg-6 col-md-6"
          v-for="(item, index) in gallery"
          :key="index"
        >
          <GalleryCard
            :title="item.title"
            :thumbnail="item.thumbnail"
            :category="item.category"
          />
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.gallery-page -->
</template>
<script setup lang="ts">
import { gallery } from "~/data/content"
</script>
