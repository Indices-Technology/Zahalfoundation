<template>
  <section class="main-slider main-slider-two">
    <ClientOnly>
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :loop="true"
        :speed="1000"
        effect="fade"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ el: '#main-slider-pagination', type: 'bullets', clickable: true }"
        :navigation="{
          nextEl: '#main-slider__swiper-button-next',
          prevEl: '#main-slider__swiper-button-prev',
        }"
      >
        <SwiperSlide v-for="(item, i) in sliderTwo" :key="i">
          <div
            class="image-layer"
            :style="`background-image: url(${item.image});`"
          ></div>
          <div class="image-layer-overlay"></div>
          <!-- /.image-layer -->
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <div class="main-slider__content">
                  <p v-html="item.subtitle" />
                  <h2 v-html="item.title" />
                  <nuxt-link :to="item.buttonUrl" class="thm-btn">
                    <i class="fas fa-arrow-circle-right"></i>
                    {{ item.buttonLabel }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </ClientOnly>
    <!-- If we need navigation buttons -->
    <div class="swiper-pagination" id="main-slider-pagination"></div>
    <div class="main-slider__nav">
      <div class="swiper-button-prev" id="main-slider__swiper-button-next">
        <i class="icon-right-arrow icon-left-arrow"></i>
      </div>
      <div class="swiper-button-next" id="main-slider__swiper-button-prev">
        <i class="icon-right-arrow"></i>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"
import { sliderTwo } from "~/data/content"

const modules = [Navigation, Pagination, Autoplay, EffectFade]
</script>
