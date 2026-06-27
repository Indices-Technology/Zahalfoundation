<template>
  <section class="causes-two">
    <div class="container-box">
      <SectionTitle
        subTitle="Latest Causes"
        title="Find the popular cause <br> and donate them"
      />
      <div class="row">
        <div class="col-xl-12">
          <div class="causes-two__carousel">
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
