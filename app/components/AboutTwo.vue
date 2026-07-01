<template>
  <!--Welcome One Start-->
  <section class="welcome-one">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="welcome-one__left">
            <div class="welcome-one__img-box">
              <img src="/images/resources/welcome-one-img-1.jpg" alt="" />
              <div class="welcome-one__img-box-2">
                <img src="/images/resources/welcome-one-img-2.jpg" alt="" />
              </div>
              <h2 class="welcome-one__bottom-text">Helping Today</h2>
              <div class="welcome-one__heart-icon">
                <img src="/images/resources/welcome-one-heart-icon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="welcome-one__right">
            <div class="section-title text-left">
              <span class="section-title__tagline">Welcome to Zahal</span>
              <h2 class="section-title__title">
                Helping each other can make the world better
              </h2>
            </div>
            <p class="welcome-one__right-text">
              Zahal Empowerment and Community Development Foundation works
              alongside communities across Nigeria to improve health,
              education, livelihood and environmental sustainability.
            </p>
            <div class="welcome-one__our-mission-and-story">
              <div class="welcome-one__mission-and-story-single">
                <h3><i class="fas fa-arrow-circle-right"></i>Our Mission</h3>
                <p class="welcome-one__our-mission-and-story-text">
                  To empower vulnerable communities through sustainable,
                  community-led development.
                </p>
              </div>
              <div class="welcome-one__mission-and-story-single">
                <h3><i class="fas fa-arrow-circle-right"></i>Our Vision</h3>
                <p class="welcome-one__our-mission-and-story-text">
                  Inclusive, resilient communities where everyone can thrive.
                </p>
              </div>
            </div>
            <div ref="target" class="welcome-one__progress">
              <div class="welcome-one__progress-single">
                <h4 class="welcome-one__progress-title">Charity</h4>
                <div class="bar">
                  <div
                    :class="`bar-inner count-bar ${revealed ? 'counted' : ' '}`"
                    :data-percent="'83%'"
                    :style="revealed ? 'width: 83%' : ''"
                  >
                    <div class="count-text">
                      <CountTo :endVal="83" :duration="3000" />%
                    </div>
                  </div>
                </div>
              </div>
              <div class="welcome-one__progress-single">
                <h4 class="welcome-one__progress-title">Donations</h4>
                <div class="bar">
                  <div
                    :class="`bar-inner count-bar ${revealed ? 'counted' : ' '}`"
                    :data-percent="'38%'"
                    :style="revealed ? 'width: 38%' : ''"
                  >
                    <div class="count-text">
                      <CountTo :endVal="38" :duration="3000" />%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nuxt-link to="/about" class="welcome-one__btn thm-btn">
              <i class="fas fa-arrow-circle-right"></i>Learn More
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Welcome One End-->
</template>

<script setup lang="ts">
const { target, revealed } = useReveal()
</script>
