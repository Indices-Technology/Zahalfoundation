<template>
  <!--Objectives Start-->
  <section class="objectives">
    <div class="container">
      <SectionTitle :subTitle="objectives.subtitle" :title="objectives.title" />
      <div class="row gutter-y-30">
        <div
          class="col-xl-4 col-lg-6"
          v-for="(item, i) in objectives.items"
          :key="i"
        >
          <div class="objectives__single">
            <div class="objectives__icon">
              <span :class="item.icon"></span>
            </div>
            <h3 class="objectives__title">{{ item.title }}</h3>
            <p class="objectives__text">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Objectives End-->
</template>

<script setup lang="ts">
import { about } from "~/data/content"

const objectives = about.objectives
</script>

<style scoped>
.objectives {
  padding: 100px 0 70px;
  background: #eff5f4;
}
.objectives__single {
  height: 100%;
  background: #fff;
  border-radius: 12px;
  padding: 40px 34px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.objectives__single:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 60px rgba(var(--thm-black-rgb), 0.08);
}
.objectives__icon {
  width: 74px;
  height: 74px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--thm-primary);
  color: #fff;
  font-size: 34px;
  margin-bottom: 26px;
}
.objectives__title {
  font-size: 22px;
  margin-bottom: 12px;
  color: var(--thm-black);
}
.objectives__text {
  margin: 0;
}
</style>
