<template>
  <!--Join One Start-->
  <section :class="`join-one ${className}`">
    <client-only>
      <div
        class="join-one-bg jarallax"
        data-jarallax
        data-speed="0.2"
        data-imgPosition="50% 0%"
      >
        <img
          src="/images/backgrounds/join-one-bg.jpg"
          class="jarallax-img"
        />
      </div>
    </client-only>
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="join-one__inner">
            <h2 class="join-one__title">
              Join us in empowering <br />
              communities across Nigeria
            </h2>
            <nuxt-link to="/contact" class="join-one__btn thm-btn">
              <i class="fas fa-arrow-circle-right"></i>
              Get in Touch
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Join One End-->
</template>
<script setup lang="ts">
withDefaults(defineProps<{ className?: string }>(), { className: "" })
</script>
