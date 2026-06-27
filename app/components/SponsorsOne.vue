<template>
  <!--Brand One Start-->
  <section :class="`brand-one ${className}`">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="brand-one__carousel">
            <AppCarousel
              :space-between="0"
              :pagination="false"
              :breakpoints="{
                0: { slidesPerView: 1 },
                600: { slidesPerView: 2 },
                800: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
              }"
            >
              <SwiperSlide
                v-for="(item, i) in sponsors"
                :key="i"
                class="brand-one__single"
              >
                <div class="brand-one__img">
                  <img :src="item.thumbnail" alt="" />
                </div>
              </SwiperSlide>
            </AppCarousel>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Brand One End-->
</template>

<script setup lang="ts">
import { SwiperSlide } from "swiper/vue"
import { sponsors } from "~/data/content"

withDefaults(defineProps<{ className?: string }>(), { className: "" })
</script>
