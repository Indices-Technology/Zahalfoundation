<template>
  <div>
    <!--Site Footer One Start-->
    <footer class="site-footer">
      <div
        class="site-footer-bg"
        style="background-image: url('/images/backgrounds/footer-bg.jpg')"
      ></div>
      <div class="container">
        <div class="site-footer__top">
          <div class="row">
            <div class="col-xl-3 col-lg-6 col-md-6">
              <div class="footer-widget__column footer-widget__about">
                <h3 class="footer-widget__title">About</h3>
                <p class="footer-widget__text">
                  Lorem ipsum dolor sit ame consect etur pisicing elit sed do
                  eiusmod tempor incididunt ut labore.
                </p>
                <a href="#" class="footer-widget__about-btn"
                  ><i class="fa fa-heart"></i>Donate
                </a>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6">
              <div
                class="footer-widget__column footer-widget__explore clearfix"
              >
                <h3 class="footer-widget__title">Explore</h3>
                <ul class="footer-widget__explore-list list-unstyled">
                  <li><a href="#">Donate</a></li>
                  <li><a href="#">Campaigns</a></li>
                  <li><a href="#">Fundraise</a></li>
                  <li><a href="#">Volunteers</a></li>
                  <li><a href="#">Sponsors</a></li>
                </ul>
                <ul
                  class="footer-widget__explore-list footer-widget__explore-list-two list-unstyled"
                >
                  <li><a href="#">Fundraising</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Faqs</a></li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6">
              <div class="footer-widget__column footer-widget__contact">
                <h3 class="footer-widget__title">Contact</h3>
                <ul class="list-unstyled footer-widget__contact-list">
                  <li>
                    <div class="icon">
                      <i class="icon-chat"></i>
                    </div>
                    <div class="text">
                      <p>
                        <span>Call Anytime</span>
                        <a :href="`tel:${contact.phone}`">{{ contact.phone }}</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="icon-message"></i>
                    </div>
                    <div class="text">
                      <p>
                        <span>Send Email</span>
                        <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="icon-address"></i>
                    </div>
                    <div class="text">
                      <p><span>Visit Office</span>{{ contact.address }}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6">
              <div class="footer-widget__column footer-widget__newsletter">
                <h3 class="footer-widget__title">Newsletter</h3>
                <p class="footer-widget__newsletter-text">
                  Lorem ipsum dolor sit ame consect etur pisicing elit sed do.
                </p>
                <form class="footer-widget__newsletter-form" @submit.prevent>
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                  />
                  <button type="submit" class="footer-widget__newsletter-btn">
                    <i class="fas fa-arrow-circle-right"></i>Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="site-footer__bottom">
          <div class="row">
            <div class="col-xl-12">
              <div class="site-footer__bottom-inner">
                <div class="site-footer__bottom-logo-social">
                  <div class="site-footer__bottom-logo">
                    <nuxt-link to="/">
                      <img :src="logo.light" alt="" />
                    </nuxt-link>
                  </div>
                  <div class="site-footer__bottom-social">
                    <a v-for="s in social" :key="s.icon" :href="s.url"><i :class="s.icon"></i></a>
                  </div>
                </div>
                <div class="site-footer__bottom-copy-right">
                  <p>© Copyright {{ year }} by <a href="#">{{ site.name }}</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!--Site Footer One End-->
    <div v-if="sticky">
      <a
        @click="scrollTop"
        class="scroll-to-target scroll-to-top animated fadeInUp"
        ><i class="fa fa-angle-up"></i
      ></a>
    </div>
  </div>
</template>

<script setup lang="ts">
const { logo, social, contact, site } = useAppConfig()
const year = new Date().getFullYear()

const sticky = ref(false)
const handleScroll = () => {
  sticky.value = window.scrollY > 70
}
const scrollTop = () => window.scrollTo(0, 0)

onMounted(() => window.addEventListener("scroll", handleScroll))
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll))
</script>
