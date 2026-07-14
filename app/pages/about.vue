<template>
  <div>
    <SiteHeader />
    <PageHeader pageTitle="About Us" pageName="About" />
    <AboutIntro />
    <ObjectivesSection />
    <TeamGrid
      :subtitle="about.trustees.subtitle"
      :title="about.trustees.title"
      :members="about.trustees.members"
    />
    <TeamGrid
      :subtitle="about.team.subtitle"
      :title="about.team.title"
      :members="about.team.members"
      gray
    />
    <CallToActionTwo className="join-one__about" />
    <Footer />
    <SearchPopup />
    <MobileDrawer />
  </div>
</template>

<script setup lang="ts">
import { about } from "~/data/content"
</script>
