<template>
  <!--Three Boxes Start-->
  <section class="three-boxes">
    <div class="container-box">
      <div class="row">
        <div class="col-xl-4" v-for="(feature, index) in features" :key="index">
          <!--Three Boxes Single-->
          <div :class="`three-boxes__single three-boxes__single-item-${index}`">
            <div
              class="three-boxes__single-bg"
              style="background-image: url('/images/resources/three-boxes-img-1.jpg')"
            ></div>
            <div class="three-boxes__content">
              <div class="three-boxes__icon">
                <span :class="feature.icon"></span>
              </div>
              <div class="three-boxes__text-box">
                <h2 v-html="feature.title" />
                <p class="three-boxes__text" v-html="feature.text" />
                <nuxt-link :to="feature.url" class="three-boxes__btn"
                  ><i class="fa fa-heart"></i>
                  {{ feature.buttonLabel }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Three Boxes End-->
</template>
<script setup lang="ts">
import { features } from "~/data/content"
</script>
