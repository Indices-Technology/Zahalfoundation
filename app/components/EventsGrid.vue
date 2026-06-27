<template>
  <section class="events-page">
    <div class="container">
      <div class="row">
        <div
          class="col-xl-4 col-lg-6 col-md-6"
          v-for="(item, index) in events"
          :key="index"
        >
          <div
            class="wow fadeInUp"
            :data-wow-delay="`${index * 100}ms`"
            data-wow-duration="1500ms"
          >
            <EventCard
              :title="item.title"
              :url="item.url"
              :time="item.time"
              :thumbnail="item.thumbnail"
              :date="item.date"
            />
          </div>
        </div>
        <!-- /.col-xl-4 col-lg-6 col-md-6 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.events-page -->
</template>

<script setup lang="ts">
import { events } from "~/data/content"
</script>
