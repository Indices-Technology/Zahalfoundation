<template>
  <section class="team-one team-page">
    <div class="container">
      <div class="row">
        <div
          class="col-xl-4 col-lg-4"
          v-for="(item, index) in volunteers"
          :key="index"
        >
          <VolunteerCard
            :thumbnail="item.thumbnail"
            :title="item.title"
            :designation="item.designation"
            :excerpt="item.excerpt"
            :social="item.social"
          />
        </div>
        <!-- /.col-xl-4 col-lg-4 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.team-one team-page -->
</template>
<script setup lang="ts">
import { volunteers } from "~/data/content"
</script>
