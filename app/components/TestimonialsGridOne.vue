<template>
  <!--Testimonial One Start-->
  <section :class="`testimonial-two ${className}`">
    <div class="container">
      <SectionTitle
        title="What they’re talking <br> about charity"
        subTitle="Our Testimonials"
      />
      <div class="row">
        <div
          v-for="(item, index) in testimonials"
          class="col-xl-4 col-lg-4"
          :key="index"
        >
          <TestimonialsCard
            className="testimonial-two__single"
            :thumbnail="item.thumbnail"
            :name="item.name"
            :designation="item.designation"
            :excerpt="item.excerpt"
          />
        </div>
      </div>
    </div>
  </section>
  <!--Testimonial One End-->
</template>

<script setup lang="ts">
import { testimonials } from "~/data/content"

withDefaults(defineProps<{ className?: string }>(), { className: "" })
</script>
