<template>
  <section class="causes-one causes-page">
    <div class="container">
      <div class="row">
        <div
          class="col-xl-4 col-lg-6 col-md-6"
          v-for="(item, index) in causes"
          :key="index"
        >
          <CausesCard
            :title="item.title"
            :amount="item.amount"
            :category="item.category"
            :thumbnail="item.thumbnail"
            :excerpt="item.excerpt"
            :url="item.url"
          />
        </div>
        <!-- /.col-xl-4 col-lg-6 col-md-6 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.causes-one causes-page -->
</template>
<script setup lang="ts">
import { causes } from "~/data/content"
</script>
