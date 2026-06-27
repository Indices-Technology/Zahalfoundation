<template>
  <div
    :class="`mobile-nav__wrapper  ${mobileDrawer ? 'expanded ' : ' '}`"
  >
    <div
      class="mobile-nav__overlay mobile-nav__toggler"
      @click="toggleMobileDrawer"
    ></div>
    <!-- /.mobile-nav__overlay -->
    <div class="mobile-nav__content">
      <span
        class="mobile-nav__close mobile-nav__toggler"
        @click="toggleMobileDrawer"
        ><i class="fa fa-times"></i
      ></span>

      <div class="logo-box">
        <nuxt-link to="/">
          <img :src="logo.light" width="155" alt="" />
        </nuxt-link>
      </div>
      <!-- /.logo-box -->
      <div class="mobile-nav__container">
        <ul class="main-menu__list">
          <li
            v-for="item in navMenus"
            :key="item.name"
            :class="`${undefined !== item.subItems ? 'dropdown ' : ' '}`"
          >
            <nuxt-link :to="item.url">
              {{ item.name }}
              <button
                v-if="undefined !== item.subItems"
                @click="toggleDropdown"
              >
                <i class="fa fa-angle-down"></i>
              </button>
            </nuxt-link>

            <ul class="sub-menu" v-if="undefined !== item.subItems">
              <li v-for="subitem in item.subItems" :key="subitem.name">
                <nuxt-link :to="subitem.url">
                  {{ subitem.name }}
                  <button
                    v-if="undefined !== subitem.subItems"
                    @click="toggleDropdown"
                  >
                    <i class="fa fa-angle-down"></i>
                  </button>
                </nuxt-link>
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
      <!-- /.mobile-nav__container -->

      <ul class="mobile-nav__contact list-unstyled">
        <li>
          <i class="fa fa-envelope"></i>
          <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        </li>
        <li>
          <i class="fa fa-phone-alt"></i>
          <a :href="`tel:${contact.phone}`">{{ contact.phone }}</a>
        </li>
      </ul>
      <!-- /.mobile-nav__contact -->
      <div class="mobile-nav__top">
        <div class="mobile-nav__social">
          <a v-for="s in social" :key="s.icon" :href="s.url" :class="s.icon"></a>
        </div>
        <!-- /.mobile-nav__social -->
      </div>
      <!-- /.mobile-nav__top -->
    </div>
    <!-- /.mobile-nav__content -->
  </div>
  <!-- /.mobile-nav__wrapper -->
</template>

<script setup lang="ts">
const { logo, navMenus, contact, social } = useAppConfig()
const { mobileDrawer, toggleMobileDrawer } = useUiState()

const toggleDropdown = (event: MouseEvent) => {
  event.preventDefault()
  const clickedItem = event.currentTarget as HTMLElement
  clickedItem.classList.toggle("expanded")
  clickedItem.parentNode?.parentNode
    ?.querySelector(".sub-menu")
    ?.classList.toggle("show")
}
</script>
