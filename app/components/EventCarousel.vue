<template>
  <!--Events One Start-->
  <section class="events-one">
    <div class="container">
      <div class="row">
        <div class="col-xl-4">
          <div class="events-one__left">
            <div class="section-title text-left">
              <span class="section-title__tagline">Upcoming Events</span>
              <h2 class="section-title__title">Check latest upcoming events</h2>
            </div>
            <p class="events-one__text">
              There are many variations of passages of lorem ipsum available but
              the majority have suffered.
            </p>
            <a href="#" class="events-one__btn thm-btn"
              ><i class="fas fa-arrow-circle-right"></i>Learn More</a
            >
          </div>
        </div>
        <div class="col-xl-8">
          <div class="events-one__right">
            <div class="events-one__carousel">
              <AppCarousel
                :pagination="false"
                :breakpoints="{
                  0: { slidesPerView: 1 },
                  800: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }"
              >
                <SwiperSlide v-for="item in eventItems" :key="item.id" class="item">
                  <!--Events One Single-->
                  <div class="events-one__single">
                    <div class="events-one__img">
                      <img :src="item.img" alt="" />
                      <div class="events-one__date-box">
                        <p>20 <br /> Jan</p>
                      </div>
                      <div class="events-one__bottom">
                        <p><i class="far fa-clock"></i>8:00 pm</p>
                        <h3 class="events-one__bottom-title">
                          <nuxt-link to="/events-details" v-html="item.title" />
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </AppCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Events One End-->
</template>

<script setup lang="ts">
import { SwiperSlide } from "swiper/vue"

const eventItems = [
  { id: 1, img: "/images/resources/events-one-img-1.jpg", title: "Play for the <br /> world with us" },
  { id: 2, img: "/images/resources/events-one-img-2.jpg", title: "Mission for Fresh <br /> & Clean Water" },
  { id: 3, img: "/images/resources/events-one-img-3.jpg", title: "Education for <br /> poor children" },
  { id: 4, img: "/images/resources/events-one-img-1.jpg", title: "Play for the <br /> world with us" },
  { id: 5, img: "/images/resources/events-one-img-2.jpg", title: "Mission for Fresh <br /> & Clean Water" },
  { id: 6, img: "/images/resources/events-one-img-3.jpg", title: "Education for <br /> poor children" },
]
</script>
