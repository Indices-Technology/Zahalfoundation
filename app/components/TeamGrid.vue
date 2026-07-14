<template>
  <!--Team Grid Start-->
  <section :class="['team-grid', { 'team-grid--gray': gray }]">
    <div class="container">
      <SectionTitle :subTitle="subtitle" :title="title" />
      <div class="row justify-content-center gutter-y-30">
        <div
          class="col-xl-3 col-lg-4 col-md-6 col-sm-6"
          v-for="(member, i) in members"
          :key="i"
        >
          <div class="team-grid__single">
            <div class="team-grid__img">
              <img :src="member.photo" :alt="member.name || member.role" />
            </div>
            <div class="team-grid__content">
              <h3 class="team-grid__name">{{ member.name || member.role }}</h3>
              <span v-if="member.name" class="team-grid__role">{{ member.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Team Grid End-->
</template>

<script setup lang="ts">
import type { Leader } from "~/data/content"

withDefaults(
  defineProps<{
    subtitle?: string
    title?: string
    members: Leader[]
    gray?: boolean
  }>(),
  { subtitle: "", title: "", gray: false },
)
</script>

<style scoped>
.team-grid {
  padding: 100px 0 70px;
}
.team-grid--gray {
  background: #eff5f4;
}
.team-grid__single {
  height: 100%;
  text-align: center;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 20px 50px rgba(var(--thm-black-rgb), 0.08);
}
.team-grid__img {
  /* Fixed ratio so cards align; object-position keeps the face in view */
  aspect-ratio: 3 / 4;
  overflow: hidden;
}
.team-grid__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}
.team-grid__content {
  padding: 24px 20px 28px;
}
.team-grid__name {
  font-size: 20px;
  margin-bottom: 4px;
  color: var(--thm-black);
}
.team-grid__role {
  color: var(--thm-primary);
  font-weight: 700;
}
</style>
