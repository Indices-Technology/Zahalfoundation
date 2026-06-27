<template>
  <div class="main-slider__counter">
    <ul class="main-slider__counter-box list-unstyled">
      <li v-for="(count, i) in sliderOneCounter" :key="i">
        <h3 class="main-sldier__counter-digit">
          <CountTo :endVal="count.count" :duration="3000" separator="" />
        </h3>
        <span class="main-slider__counter-text">{{ count.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { sliderOneCounter } from "~/data/content"
</script>
