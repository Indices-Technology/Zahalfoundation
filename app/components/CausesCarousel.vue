<template>
  <section class="causes-one">
    <div class="container">
      <SectionTitle
        subTitle="Latest Causes"
        title="Find the popular cause <br> and donate them"
      />
      <div class="row">
        <div class="col-xl-12">
          <div class="causes-one__carousel">
            <AppCarousel
              :breakpoints="{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
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
          <!-- /.causes-one__carousel -->
        </div>
        <!-- /.col-xl-12 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.causes-one causes-page -->
</template>

<script setup lang="ts">
import { SwiperSlide } from "swiper/vue"
import { causes } from "~/data/content"
</script>
