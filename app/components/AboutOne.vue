<template>
  <!--About Page Start-->
  <section class="about-page">
    <div class="container">
      <div class="row">
        <div class="col-xl-6">
          <div class="about-page__left">
            <div class="about-page__img">
              <img src="/images/resources/about-page-img-1.jpg" alt="" />
              <div class="about-page__trusted">
                <h3>We’re trusted by <span>9,8750</span> donors</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="about-page__right">
            <div class="section-title text-left">
              <span class="section-title__tagline">Our Inroductions</span>
              <h2 class="section-title__title">
                We believe that we can save more lifes
              </h2>
            </div>
            <p class="about-page__right-text">
              We are trusted by our clients and have a reputation for the best
              services in the field. Lorem ipsum is simply free text dolor sit
              amett consectetur adipiscing elit. It is a long established fact
              that a reader will be distracted by the readable content of a
              page.
            </p>
            <h3 class="about-page__right-title">
              Zahal Foundation is a trusted community making a difference
            </h3>
            <div class="about-five__progress-wrap">
              <div class="about-five__progress">
                <div class="about-five__progress-box">
                  <div class="circle-progress">
                    <client-only>
                      <vue-ellipse-progress
                        :progress="90"
                        :size="138"
                        :thickness="3"
                        emptyThickness="3%"
                        color="var(--zahal-primary)"
                        emptyColor="#e5eeec"
                        :legend="false"
                      />
                    </client-only>
                  </div>
                  <!-- /.circle-progress -->
                  <span>90%</span>
                </div>
                <div class="about-five__progress-content">
                  <h3>Successful causes</h3>
                </div>
              </div>
              <div class="about-five__progress">
                <div class="about-five__progress-box">
                  <div class="circle-progress">
                    <client-only>
                      <vue-ellipse-progress
                        :progress="50"
                        :size="138"
                        :thickness="3"
                        emptyThickness="3%"
                        color="var(--zahal-primary)"
                        emptyColor="#e5eeec"
                        :legend="false"
                      />
                    </client-only>
                  </div>
                  <!-- /.circle-progress -->
                  <span>50%</span>
                </div>
                <!-- /.about-five__progress-box -->
                <div class="about-five__progress-content">
                  <h3>Amazing donors</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--About Page Start-->
</template>
