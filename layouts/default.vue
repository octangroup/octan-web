<template>
  <div class="static bg-grey-lightest h-100 min-h-screen">
    <div class="xl:block lg:block flex relative h-100 w-100">
      <div
        class="w-100 relative overflow-x-hidden transition-500ms xl:mx-0 lg:mx-0"
        :class="{ '-ml-70%-temp': showSidebar }"
      >
        <Navbar :items="navItems" />
        <div class="w-100 relative min-h-screen" @click="toggleSidebar">
          <nuxt />
        </div>
      </div>
      <Sidebar :items="navItems" />
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Footer from '~/components/layout/Footer'
import Navbar from '~/components/layout/Navbar'
import Sidebar from '~/components/layout/Sidebar'

export default {
  components: {
    Footer,
    Navbar,
    Sidebar,
  },
  data() {
    return {
      navItems: [
        {
          link: { path: '/' },
          label: 'Home',
        },
        {
          link: { path: '/', hash: 'services' },
          label: 'What We Do',
        },
        {
          link: { path: '/works' },
          label: 'Works',
        },
        {
          link: { path: '/team' },
          label: 'Team',
        },
        {
          link: { path: '/blog' },
          label: 'Blog',
        },
        {
          link: { path: '/', hash: 'contact-us' },
          label: 'Contact Us',
          button: true,
        },
      ],
    }
  },
  computed: {
    ...mapState({
      showSidebar: (state) => state.navbar.showSidebar,
    }),
  },
  created() {
    if (process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('resize', this.updateWindowSize)
      this.updateWindowSize()
    }
  },
  destroy() {
    window.removeEventListener('resize', this.updateWindowSize)
  },
  methods: {
    updateWindowSize() {
      this.$store.dispatch('window/updateWidth', window.innerWidth)
    },
    toggleSidebar() {
      if (this.showSidebar) {
        this.$store.dispatch('navbar/toggleSidebar', false)
      }
    },
  },
}
</script>
