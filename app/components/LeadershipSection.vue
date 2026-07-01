<template>
  <!--Leadership Start-->
  <section class="leadership">
    <div class="container">
      <SectionTitle :subTitle="leadership.subtitle" :title="leadership.title" />
      <div class="row justify-content-center gutter-y-30">
        <div
          class="col-xl-3 col-lg-4 col-md-6"
          v-for="(member, i) in leadership.members"
          :key="i"
        >
          <div class="leadership__single">
            <div class="leadership__img">
              <img :src="member.photo" :alt="member.name || member.role" />
            </div>
            <div class="leadership__content">
              <h3 class="leadership__name">{{ member.name || member.role }}</h3>
              <span v-if="member.name" class="leadership__role">{{ member.role }}</span>
              <ul
                v-if="member.phone || member.email"
                class="leadership__contact list-unstyled"
              >
                <li v-if="member.phone">
                  <i class="fa fa-phone-alt"></i>
                  <a :href="`tel:${member.phone}`">{{ member.phone }}</a>
                </li>
                <li v-if="member.email">
                  <i class="fa fa-envelope"></i>
                  <a :href="`mailto:${member.email}`">{{ member.email }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Leadership End-->
</template>

<script setup lang="ts">
import { about } from "~/data/content"

const leadership = about.leadership
</script>

<style scoped>
.leadership {
  padding: 100px 0 70px;
}
.leadership__single {
  height: 100%;
  text-align: center;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(var(--thm-black-rgb), 0.08);
}
.leadership__img img {
  width: 100%;
  height: 320px;
  object-fit: cover;
}
.leadership__content {
  padding: 26px 24px 30px;
}
.leadership__name {
  font-size: 22px;
  margin-bottom: 4px;
  color: var(--thm-black);
}
.leadership__role {
  color: var(--thm-primary);
  font-weight: 700;
}
.leadership__contact {
  margin: 18px 0 0;
}
.leadership__contact li {
  margin-bottom: 6px;
}
.leadership__contact i {
  color: var(--thm-primary);
  margin-right: 8px;
}
.leadership__contact a {
  color: var(--thm-gray);
}
</style>
