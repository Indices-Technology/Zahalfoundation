<template>
  <!--Why Choose Start-->
  <section class="why-choose">
    <div
      class="why-choose-bg"
      style="background-image: url('/images/backgrounds/why-choose-bg.jpg')"
    ></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-8">
          <div class="why-choose__left">
            <div class="section-title text-left">
              <span class="section-title__tagline">Get Daily Updates</span>
              <h2 class="section-title__title">
                Why you should choose our <br />
                charity foundation
              </h2>
            </div>
            <div class="why-choose__left-bottom">
              <div class="why-choose__left-text-box">
                <p class="why-choose__left-text">
                  There are many variations of passages of but the majority have
                  suffered alteration in some form by injected humour or which
                  don't look even slightly believe.
                </p>
                <h2 class="why-choose__left-signature">Mike Hardson</h2>
              </div>
              <div class="why-choose__left-list-box">
                <ul class="why-choose__left-list list-unstyled">
                  <li v-for="(text, i) in listItems" :key="i">
                    <div class="icon">
                      <i class="fas fa-arrow-circle-right"></i>
                    </div>
                    <div class="text">
                      <h5>{{ text }}</h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="why-choose__right">
            <div class="why-choose__urgent">
              <h3 class="why-choose__urgent-title">
                Raise Fund for Save Animals
              </h3>
              <p class="why-choose__urgent-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                eiusmod tempor incididunt.
              </p>
              <div class="why-choose__progress">
                <div class="bar">
                  <div
                    ref="target"
                    class="bar-inner count-bar counted"
                    :data-percent="`${percent}%`"
                    :style="revealed ? `width: ${percent}%` : ''"
                  >
                    <div class="count-text">
                      <CountTo :endVal="percent" :duration="3000" />%
                    </div>
                  </div>
                </div>
                <div class="why-choose__goals">
                  <p><span>$25,270</span> Raised</p>
                  <p><span>$30,000</span> Goal</p>
                </div>
              </div>
              <a href="#" class="why-choose__right-btn"
                ><i class="fa fa-heart"></i>Donate</a
              >
              <div class="why-choose__right-category">
                <span>Medical</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Why Choose End-->
</template>

<script setup lang="ts">
const { target, revealed } = useReveal()
const percent = Math.round((25270 / 30000) * 100)

const listItems = [
  "Making this first true generator",
  "Many desktop publish packages",
  "Lorem Ipsum is not simply",
  "If you are going to passage",
  "It has roots in a piece",
  "The point of using",
]
</script>
