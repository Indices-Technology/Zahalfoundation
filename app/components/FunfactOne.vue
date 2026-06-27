<template>
  <!--Counters One Start-->
  <section class="counters-one about-page-counter">
    <div class="container">
      <ul class="counters-one__box list-unstyled">
        <li class="counter-one__single">
          <h3><CountTo :endVal="870" :duration="3000" /></h3>
          <span class="counter-one__letter">K</span>
          <p class="counter-one__text">Total Donations</p>
        </li>
        <li class="counter-one__single">
          <h3><CountTo :endVal="480" :duration="3000" /></h3>
          <p class="counter-one__text">Campaigns Closed</p>
        </li>
        <li class="counter-one__single">
          <h3><CountTo :endVal="977" :duration="3000" /></h3>
          <span class="counter-one__letter">K</span>
          <p class="counter-one__text">Happy People</p>
        </li>
        <li class="counter-one__single">
          <h3><CountTo :endVal="63" :duration="3000" /></h3>
          <span class="counter-one__letter">+</span>
          <p class="counter-one__text">Our Volunteers</p>
        </li>
      </ul>
    </div>
  </section>
  <!--Counters One Start-->
</template>

<script setup lang="ts"></script>
