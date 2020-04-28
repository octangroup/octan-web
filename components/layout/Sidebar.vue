<template>
  <div
    class="w-0-temp transition-view xl:hidden lg:hidden transition-500ms h-100"
    :class="{ 'w-70-temp': showSidebar }"
  >
    <div class="bg-primary-darker h-100 fixed w-100 ">
      <div class="my-0 w-65 py-4 text-right">
        <span class="text-2xl text-white" @click="toggleSidebar">
          <i class="fi flaticon-close"></i>
        </span>
      </div>
      <ul
        class="list py-3 text-left text-white pt-3  -mt-4 p-0 pb-4 mx-auto xs:w-80 w-90 relative xl:hidden lg:hidden text-white"
      >
        <li
          v-for="(item, i) in items"
          :key="i"
          class="my-4 text-lg  cursor-pointer"
          @click="toggleSidebar"
        >
          <nuxt-link
            v-scroll-to="{ el: item.link.hash ? '#' + item.link.hash : null }"
            :to="item.link"
            class="inherit-color font-light no-underline"
          >
            {{ item.label }}</nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Sidebar',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState({
      showSidebar: (state) => state.navbar.showSidebar
    })
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('navbar/toggleSidebar', false)
    }
  }
}
</script>
