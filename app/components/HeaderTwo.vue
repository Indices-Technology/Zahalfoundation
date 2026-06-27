<template>
  <div>
    <header class="main-header-two clearfix">
      <div class="main-header-two__inner">
        <div class="container">
          <div class="main-header-two__top clearfix">
            <div class="main-header-two__logo">
              <nuxt-link to="/">
                <img :src="logo.lightColored" alt="" />
              </nuxt-link>
            </div>
            <div class="main-header-two__contact-info">
              <ul class="main-header-two__contact-list list-unstyled">
                <li>
                  <div class="main-header-two__contact-icon">
                    <span class="icon-chat"></span>
                  </div>
                  <div class="main-header-two__contact-text">
                    <p>Call Anytime</p>
                    <a :href="`tel:${contact.phone}`">{{ contact.phone }}</a>
                  </div>
                </li>
                <li>
                  <div class="main-header-two__contact-icon">
                    <span class="icon-message"></span>
                  </div>
                  <div class="main-header-two__contact-text">
                    <p>Send Email</p>
                    <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
                  </div>
                </li>
                <li>
                  <div class="main-header-two__contact-icon">
                    <span class="icon-address"></span>
                  </div>
                  <div class="main-header-two__contact-text">
                    <p>Visit Office</p>
                    <h5>{{ contact.address }}</h5>
                  </div>
                </li>
              </ul>
              <div class="main-header-two__btn">
                <nuxt-link
                  to="/causes-details"
                  class="main-header-two__donate-btn"
                  ><i class="fa fa-heart"></i>Donate
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-header-two__bottom">
        <nav class="main-menu main-menu__two">
          <div class="container">
            <div class="main-menu__inner clearfix">
              <a
                href="#"
                class="mobile-nav__toggler"
                @click.prevent="mobileDrawerStatusChange"
              >
                <i class="fa fa-bars"></i>
              </a>
              <ul class="main-menu__list">
                <li
                  v-for="item in navMenus"
                  :key="item.name"
                  :class="`${undefined !== item.subItems ? 'dropdown ' : ' '}`"
                >
                  <nuxt-link :to="item.url">{{ item.name }}</nuxt-link>
                  <ul class="sub-menu" v-if="undefined !== item.subItems">
                    <li v-for="subitem in item.subItems" :key="subitem.name">
                      <nuxt-link :to="subitem.url">{{ subitem.name }}</nuxt-link>
                      <ul class="sub-menu" v-if="undefined !== subitem.subItems">
                        <li v-for="child in subitem.subItems" :key="child.name">
                          <nuxt-link :to="child.url">{{ child.name }}</nuxt-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <div class="main-menu__right">
                <div class="main-menu__right-social">
                  <a v-for="s in social" :key="s.icon" :href="s.url"><i :class="s.icon"></i></a>
                </div>
                <a
                  href="#"
                  class="main-menu__search search-toggler icon-magnifying-glass"
                  @click.prevent="searchPopupStatusChange"
                ></a>
                <a href="#" class="main-menu__cart icon-shopping-cart"></a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <div
      :class="`stricky-header stricked-menu main-menu main-menu__two ${
        sticky ? 'stricky-fixed' : ''
      }`"
    >
      <div class="sticky-header__content">
        <div class="container">
          <div class="main-menu__inner clearfix">
            <a
              href="#"
              class="mobile-nav__toggler"
              @click.prevent="mobileDrawerStatusChange"
            >
              <i class="fa fa-bars"></i>
            </a>
            <ul class="main-menu__list">
              <li
                v-for="item in navMenus"
                :key="item.name"
                :class="`${undefined !== item.subItems ? 'dropdown ' : ' '}`"
              >
                <nuxt-link :to="item.url">{{ item.name }}</nuxt-link>
                <ul class="sub-menu" v-if="undefined !== item.subItems">
                  <li v-for="subitem in item.subItems" :key="subitem.name">
                    <nuxt-link :to="subitem.url">{{ subitem.name }}</nuxt-link>
                    <ul class="sub-menu" v-if="undefined !== subitem.subItems">
                      <li v-for="child in subitem.subItems" :key="child.name">
                        <nuxt-link :to="child.url">{{ child.name }}</nuxt-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="main-menu__right">
              <div class="main-menu__right-social">
                <a v-for="s in social" :key="s.icon" :href="s.url"><i :class="s.icon"></i></a>
              </div>
              <a
                href="#"
                class="main-menu__search search-toggler icon-magnifying-glass"
                @click.prevent="searchPopupStatusChange"
              ></a>
              <a href="#" class="main-menu__cart icon-shopping-cart"></a>
            </div>
          </div>
        </div>
      </div>
      <!-- /.sticky-header__content -->
    </div>
    <!-- /.stricky-header -->
  </div>
</template>

<script setup lang="ts">
const { logo, navMenus, contact, social } = useAppConfig()
const {
  toggleMobileDrawer: mobileDrawerStatusChange,
  toggleSearchPopup: searchPopupStatusChange,
} = useUiState()

const sticky = ref(false)
const handleScroll = () => {
  sticky.value = window.scrollY > 70
}

onMounted(() => window.addEventListener("scroll", handleScroll))
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll))
</script>
