<template>
  <!--Testimonial One Start-->
  <section :class="`testimonial-one ${className}`">
    <div
      class="testimonial-one-bg"
      style="background-image: url('/images/backgrounds/testimonial-1-bg.jpg')"
    ></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-4">
          <div class="testimonial-one__left">
            <SectionTitle
              title="What they’re talking about charity"
              subTitle="Our Testimonials"
              alignment="left"
            />
          </div>
        </div>
        <div class="col-xl-8">
          <div class="testimonial-one__right">
            <div class="testimonial-one__carousel">
              <AppCarousel
                :pagination="false"
                :breakpoints="{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                }"
              >
                <SwiperSlide v-for="(item, i) in testimonials" :key="i">
                  <TestimonialsCard
                    :thumbnail="item.thumbnail"
                    :name="item.name"
                    :designation="item.designation"
                    :excerpt="item.excerpt"
                  />
                </SwiperSlide>
              </AppCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Testimonial One End-->
</template>

<script setup lang="ts">
import { SwiperSlide } from "swiper/vue"
import { testimonials } from "~/data/content"

withDefaults(defineProps<{ className?: string }>(), { className: "" })
</script>
