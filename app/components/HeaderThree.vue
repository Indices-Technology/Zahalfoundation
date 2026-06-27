<template>
  <div>
    <header class="main-header-three clearfix">
      <div class="main-header-three__menu-box clearfix">
        <nav class="main-menu main-menu-three clearfix">
          <div class="main-menu-three__container clearfix">
            <div class="main-menu-three__logo">
              <nuxt-link to="/">
                <img :src="logo.dark" alt="" />
              </nuxt-link>
            </div>
            <div class="main-menu-three__inner-upper clearfix">
              <div class="main-menu-three__btn">
                <nuxt-link
                  to="/causes-details"
                  class="main-menu-three__donate-btn"
                  ><i class="fa fa-heart"></i>Donate
                </nuxt-link>
              </div>
              <div class="main-menu-three__inner clearfix">
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
                    :class="`${
                      undefined !== item.subItems ? 'dropdown ' : ' '
                    }`"
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
              </div>
            </div>
            <div class="main-menu__right main-menu__right-three">
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
        </nav>
      </div>
    </header>

    <div
      :class="`stricky-header stricked-menu main-menu main-menu-three ${
        sticky ? 'stricky-fixed' : ''
      }`"
    >
      <div class="sticky-header__content">
        <div class="main-menu-three__container clearfix">
          <div class="main-menu-three__logo">
            <nuxt-link to="/">
              <img :src="logo.dark" alt="" />
            </nuxt-link>
          </div>
          <div class="main-menu-three__inner-upper clearfix">
            <div class="main-menu-three__btn">
              <nuxt-link
                to="/causes-details"
                class="main-menu-three__donate-btn"
                ><i class="fa fa-heart"></i>Donate
              </nuxt-link>
            </div>
            <div class="main-menu-three__inner clearfix">
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
            </div>
          </div>
          <div class="main-menu__right main-menu__right-three">
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
      <!-- /.sticky-header__content -->
    </div>
    <!-- /.stricky-header -->
  </div>
</template>

<script setup lang="ts">
const { logo, navMenus, social } = useAppConfig()
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
