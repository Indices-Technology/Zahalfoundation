<template>
  <section class="causes-three">
    <div class="container">
      <div class="causes-three__top">
        <div class="causes-three__top-title">
          <div class="section-title text-left">
            <span class="section-title__tagline">Latest Causes</span>
            <h2 class="section-title__title">
              Find the popular cause <br />
              and donate them
            </h2>
          </div>
        </div>
        <div class="causes-three__top-btn-box">
          <a href="#" class="causes-three__top-btn thm-btn"
            ><i class="fas fa-arrow-circle-right"></i>View More</a
          >
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="causes-three__carousel">
            <AppCarousel
              :breakpoints="{
                0: { slidesPerView: 1 },
                800: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }"
            >
              <SwiperSlide v-for="(item, i) in causes" :key="i" class="item">
                <CausesCard
                  :title="item.title"
                  :amount="item.amount"
                  :category="item.category"
                  :thumbnail="item.thumbnail"
                  :excerpt="item.excerpt"
                  :url="item.url"
                />
              </SwiperSlide>
            </AppCarousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SwiperSlide } from "swiper/vue"
import { causes } from "~/data/content"
</script>
