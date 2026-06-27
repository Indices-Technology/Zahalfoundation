<template>
  <div>
    <header class="main-header clearfix">
      <div class="main-header__logo">
        <nuxt-link to="/">
          <img :src="logo.light" alt="" />
        </nuxt-link>
      </div>
      <div class="main-menu-wrapper">
        <div class="main-menu-wrapper__top">
          <div class="main-menu-wrapper__top-inner">
            <div class="main-menu-wrapper__left">
              <div class="main-menu-wrapper__left-content">
                <div class="main-menu-wrapper__left-text">
                  <p>{{ contact.welcomeText }}</p>
                </div>
                <div class="main-menu-wrapper__left-email-box">
                  <div class="icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="email">
                    <a :href="`mailto:${contact.email}`">
                      {{ contact.email }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="main-menu-wrapper__right">
              <div class="main-menu-wrapper__right-social">
                <a v-for="s in social" :key="s.icon" :href="s.url"><i :class="s.icon"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="main-menu-wrapper__bottom">
          <nav class="main-menu">
            <div class="main-menu__inner">
              <a
                href="#"
                class="mobile-nav__toggler"
                @click.prevent="toggleMobileDrawer"
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
                      <nuxt-link :to="subitem.url">{{
                        subitem.name
                      }}</nuxt-link>
                      <ul
                        class="sub-menu"
                        v-if="undefined !== subitem.subItems"
                      >
                        <li
                          v-for="child in subitem.subItems"
                          :key="child.name"
                        >
                          <nuxt-link :to="child.url">{{
                            child.name
                          }}</nuxt-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <div class="main-menu__right">
                <a
                  href="#"
                  class="main-menu__search search-toggler icon-magnifying-glass"
                  @click.prevent="toggleSearchPopup"
                ></a>
                <a href="#" class="main-menu__cart icon-shopping-cart"></a>
                <div class="main-menu__phone-contact">
                  <div class="main-menu__phone-icon">
                    <span class="icon-chat"></span>
                  </div>
                  <div class="main-menu__phone-number">
                    <p>Call Anytime</p>
                    <a :href="`tel:${contact.phone}`">{{ contact.phone }}</a>
                  </div>
                </div>
                <nuxt-link to="/causes-details" class="main-menu__donate-btn"
                  ><i class="fa fa-heart"></i>Donate
                </nuxt-link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>

    <div
      :class="`stricky-header stricked-menu main-menu ${
        sticky ? 'stricky-fixed' : ''
      }`"
    >
      <div class="sticky-header__content">
        <div class="main-menu__inner">
          <a
            href="#"
            class="mobile-nav__toggler"
            @click.prevent="toggleMobileDrawer"
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
                      <nuxt-link :to="child.url">{{
                        child.name
                      }}</nuxt-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <div class="main-menu__right">
            <a
              href="#"
              class="main-menu__search search-toggler icon-magnifying-glass"
              @click.prevent="toggleSearchPopup"
            ></a>
            <a href="#" class="main-menu__cart icon-shopping-cart"></a>
            <div class="main-menu__phone-contact">
              <div class="main-menu__phone-icon">
                <span class="icon-chat"></span>
              </div>
              <div class="main-menu__phone-number">
                <p>Call Anytime</p>
                <a :href="`tel:${contact.phone}`">{{ contact.phone }}</a>
              </div>
            </div>
            <nuxt-link to="/causes-details" class="main-menu__donate-btn"
              ><i class="fa fa-heart"></i>Donate
            </nuxt-link>
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
const { toggleMobileDrawer, toggleSearchPopup } = useUiState()

const sticky = ref(false)

const handleScroll = () => {
  sticky.value = window.scrollY > 70
}

onMounted(() => window.addEventListener("scroll", handleScroll))
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll))
</script>
