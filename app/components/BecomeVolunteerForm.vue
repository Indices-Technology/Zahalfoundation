<template>
  <!--Become Volunteer Page Start-->
  <section class="become-volunteer-page">
    <div class="container">
      <div class="section-title text-center">
        <span class="section-title__tagline">Register Now</span>
        <h2 class="section-title__title">
          Let’s join our community to <br />
          become a volunteer
        </h2>
      </div>
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="become-volunteer-page__left">
            <div class="become-volunteer-page__img">
              <img src="/images/resources/become-a-volunteer.jpg" alt="" />
            </div>
            <h3 class="become-volunteer-page__title">Requirements</h3>
            <p class="become-volunteer-page__text">
              Give your time, skills and passion to make a real difference.
              Volunteers are at the heart of everything we do — from clean-water
              projects and school drives to medical outreaches and advocacy.
              Fill in the form and our team will be in touch.
            </p>
            <ul class="become-volunteer-page__list list-unstyled">
              <li>
                <div class="icon">
                  <i class="fas fa-arrow-circle-right"></i>
                </div>
                <div class="text">
                  <p>Be 18 years or older</p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <i class="fas fa-arrow-circle-right"></i>
                </div>
                <div class="text">
                  <p>A passion for community development</p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <i class="fas fa-arrow-circle-right"></i>
                </div>
                <div class="text">
                  <p>Reliable and willing to learn</p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <i class="fas fa-arrow-circle-right"></i>
                </div>
                <div class="text">
                  <p>Able to give a few hours a week</p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <i class="fas fa-arrow-circle-right"></i>
                </div>
                <div class="text">
                  <p>Respectful of all communities we serve</p>
                </div>
              </li>
            </ul>
            <div class="become-volunteer-page__phone">
              <div class="become-volunteer-page__phone-icon">
                <span class="icon-chat"></span>
              </div>
              <div class="become-volunteer-page__phone-text">
                <p>Call Anytime</p>
                <a :href="`tel:${contact.phone}`">{{ contact.phone }}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="become-volunteer-page__right">
            <form
              action="#"
              class="become-volunteer-page__form contact-form-validated"
            >
              <div class="row">
                <div class="col-xl-12">
                  <div class="become-volunteer-page__input">
                    <input type="text" placeholder="Your name" name="name" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6">
                  <div class="become-volunteer-page__input">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                    />
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="become-volunteer-page__input">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="phone"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-12">
                  <div class="become-volunteer-page__input">
                    <input type="text" placeholder="Address" name="address" />
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="become-volunteer-page__input">
                    <input
                      type="text"
                      placeholder="Date of Birth"
                      name="Date of Birth"
                    />
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="become-volunteer-page__input">
                    <input
                      type="text"
                      placeholder="Occupation"
                      name="Occupation"
                    />
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="become-volunteer-page__input">
                    <textarea
                      name="message"
                      placeholder="Write message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    class="thm-btn become-volunteer-page__btn"
                  >
                    <i class="fas fa-arrow-circle-right"></i>Submit Comment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Become Volunteer Page End-->
</template>

<script setup lang="ts">
const { contact } = useAppConfig()
</script>
