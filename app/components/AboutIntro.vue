<template>
  <!--About Intro Start-->
  <section class="about-page about-intro">
    <div class="container">
      <div class="row">
        <div class="col-xl-6">
          <div class="about-page__left">
            <div class="about-page__img">
              <img :src="who.image" :alt="who.title" />
              <div class="about-page__trusted">
                <h3>Reg. <span>{{ legal.regNumber }}</span></h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="about-page__right">
            <SectionTitle
              :subTitle="who.subtitle"
              :title="who.title"
              alignment="left"
            />
            <p class="about-page__right-text">{{ who.lead }}</p>
            <p class="about-intro__body">{{ who.body }}</p>
            <ul class="about-intro__reg list-unstyled">
              <li>
                <span>Registration (CAC)</span>
                <strong>{{ legal.regNumber }}</strong>
              </li>
              <li>
                <span>Tax ID (TIN)</span>
                <strong>{{ legal.tin }}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--About Intro End-->
</template>

<script setup lang="ts">
import { about } from "~/data/content"

const who = about.who
const { legal } = useAppConfig()
</script>

<style scoped>
.about-intro {
  padding: 100px 0;
}
.about-intro__body {
  margin-top: 20px;
}
.about-intro__reg {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 30px;
}
.about-intro__reg li {
  flex: 1 1 200px;
  padding: 16px 22px;
  border-radius: 10px;
  background: #eff5f4;
}
.about-intro__reg span {
  display: block;
  font-size: 14px;
  color: var(--thm-gray);
}
.about-intro__reg strong {
  font-size: 20px;
  color: var(--thm-black);
}
</style>
