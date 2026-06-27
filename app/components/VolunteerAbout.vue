<template>
  <!--Team One Start-->
  <section class="team-one">
    <div class="container">
      <SectionTitle
        title="Meet the best team behind <br> our success story"
        subTitle="Professional Volunteers"
      />
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
    </div>
  </section>
  <!--Team One End-->
</template>

<script setup lang="ts">
import { volunteers as allVolunteers } from "~/data/content"

const volunteers = allVolunteers.slice(0, 3)
</script>
