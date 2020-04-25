<template>
  <nav
    :class="[
      transparent ? 'bg-transparent text-primary' : 'bg-primary text-white',
      fixed && !showSidebar ? 'fixed' : 'absolute'
    ]"
    class="z-9999 transition-500ms w-100 m-0 t-0 l-0 r-0"
  >
    <div class="xl:w-85 lg:w-90 xs:w-90 sm:w-90 md:w-90 flex mx-auto py-2 mx-0">
      <ul class="w-50 lg:w-40 list mx-0 px-0">
        <li class="w-25 xs:w-50 sm:w-40 mx-0 px-0">
          <nuxt-link to="/"><Logo /></nuxt-link>
        </li>
      </ul>
      <ul
        class="list text-right w-50 lg:w-60  ml-auto my-2 hidden xl:block lg:block px-0 mr-0  text-sm"
      >
        <li v-for="(item, i) in items" :key="i" class="inline-block mx-4">
          <nuxt-link :to="item.link" class="inherit-color no-underline">{{
            item.label
          }}</nuxt-link>
        </li>
        <li class="inline-block ml-3 mr-0 lg:mr-0">
          <nuxt-link to="/#contact-us" class="inherit-color no-underline">
            <button
              :class="[
                transparent
                  ? 'btn-outline-primary text-primary hover:text-white'
                  : 'btn-outline-white text-white hover:bg-white hover:text-primary'
              ]"
              class="btn transition-250ms rounded-full border-1 mx-0"
            >
              Contact Us
            </button>
          </nuxt-link>
        </li>
      </ul>
      <ul
        class="mr-auto list w-50 text-right px-0 ml-1 xl:hidden lg:hidden py-0 my-2"
      >
        <li class="my-0">
          <button
            v-show="!showSidebar"
            class="px-0 bg-transparent py-0 my-0 outline-none"
            @click="toggleSidebar"
          >
            <div
              :class="[transparent ? 'border-primary' : 'border-white']"
              class="border-1 w-rem-8 "
            ></div>
            <div
              :class="[transparent ? 'border-primary' : 'border-white']"
              class="border-1 w-rem-8 my-1"
            ></div>
            <div
              :class="[transparent ? 'border-primary' : 'border-white']"
              class="border-1 w-rem-8 "
            ></div>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '~/components/Logo.vue'

export default {
  name: 'Navbar',
  components: {
    Logo
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState({
      transparent: (state) => state.navbar.transparent,
      fixed: (state) => state.navbar.fixed,
      showSidebar: (state) => state.navbar.showSidebar
    })
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('navbar/toggleSidebar', true)
    }
  }
}
</script>
