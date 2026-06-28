<template>
  <!--Budget One Start-->
  <section class="budget-one">
    <div class="container">
      <SectionTitle :subTitle="budget.subtitle" :title="budget.title" />
      <p v-if="budget.text" class="budget-one__intro">{{ budget.text }}</p>
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="budget-one__chart">
            <svg viewBox="0 0 200 200" role="img" :aria-label="budget.title">
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#eff5f4"
                stroke-width="34"
              />
              <circle
                v-for="(arc, i) in arcs"
                :key="i"
                cx="100"
                cy="100"
                r="80"
                fill="none"
                :stroke="arc.color"
                stroke-width="34"
                :stroke-dasharray="arc.dasharray"
                :stroke-dashoffset="arc.dashoffset"
              />
            </svg>
            <div class="budget-one__chart-center">
              <span>{{ total }}%</span>
              <small>Allocated</small>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <ul class="budget-one__legend list-unstyled">
            <li v-for="(seg, i) in segments" :key="i">
              <span class="budget-one__dot" :style="{ backgroundColor: seg.color }">
                <i :class="seg.icon"></i>
              </span>
              <div class="budget-one__legend-text">
                <h4>{{ seg.label }} <span>{{ percent(seg.value) }}%</span></h4>
                <p>{{ seg.description }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!--Budget One End-->
</template>

<script setup lang="ts">
import { budget } from "~/data/content"

const segments = budget.segments
const total = segments.reduce((sum, s) => sum + s.value, 0)
const CIRCUMFERENCE = 2 * Math.PI * 80

// Position each segment with stroke-dashoffset (no per-element SVG transform, which is a
// read-only DOM prop and breaks hydration). The whole svg is rotated -90deg via CSS so the
// chart starts at the top.
let cumulative = 0
const arcs = segments.map((seg) => {
  const length = (seg.value / total) * CIRCUMFERENCE
  const arc = {
    color: seg.color,
    dasharray: `${length} ${CIRCUMFERENCE}`,
    dashoffset: -cumulative,
  }
  cumulative += length
  return arc
})

const percent = (value: number) => Math.round((value / total) * 100)
</script>

<style scoped>
.budget-one {
  padding: 100px 0;
}
.budget-one__intro {
  text-align: center;
  max-width: 640px;
  margin: -20px auto 50px;
}
.budget-one__chart {
  position: relative;
  max-width: 360px;
  margin: 0 auto;
}
.budget-one__chart svg {
  width: 100%;
  height: auto;
  transform: rotate(-90deg);
}
.budget-one__chart circle[stroke-dasharray] {
  transition: stroke-width 0.3s ease;
}
.budget-one__chart-center {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.budget-one__chart-center span {
  font-size: 42px;
  font-weight: 800;
  line-height: 1;
  color: var(--thm-black);
}
.budget-one__chart-center small {
  font-weight: 700;
  color: var(--thm-gray);
}
.budget-one__legend {
  margin: 0;
}
.budget-one__legend li {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 26px;
}
.budget-one__legend li:last-child {
  margin-bottom: 0;
}
.budget-one__dot {
  flex: 0 0 auto;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
}
.budget-one__legend-text h4 {
  margin: 0 0 6px;
  font-size: 20px;
  color: var(--thm-black);
}
.budget-one__legend-text h4 span {
  margin-left: 6px;
  color: var(--thm-primary);
}
.budget-one__legend-text p {
  margin: 0;
  font-size: 16px;
  line-height: 26px;
}
@media (max-width: 991px) {
  .budget-one__chart {
    margin-bottom: 50px;
  }
}
</style>
