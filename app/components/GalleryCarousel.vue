<template>
  <!--Gallery One Start-->
  <section :class="`gallery-one ${className}`">
    <div class="gallery-one__container-box clearfix">
      <div class="gallery-one__carousel">
        <AppCarousel
          :space-between="20"
          :pagination="false"
          :breakpoints="{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 5 },
          }"
        >
          <SwiperSlide v-for="(item, i) in gallery" :key="i" class="item">
            <GalleryCard
              :title="item.title"
              :thumbnail="item.thumbnail"
              :category="item.category"
            />
          </SwiperSlide>
        </AppCarousel>
      </div>
    </div>
  </section>
  <!--Gallery One End-->
</template>

<script setup lang="ts">
import { SwiperSlide } from "swiper/vue"
import { gallery } from "~/data/content"

withDefaults(defineProps<{ className?: string }>(), { className: "" })
</script>
