<template>
  <div class="static bg-grey-lightest h-100 min-h-screen">
    <div class="xl:block lg:block flex relative h-100 w-100">
      <div
        class="w-100 relative  overflow-x-hidden transition-500ms xl:mx-0 lg:mx-0"
        :class="{ '-ml-70%-temp': showSidebar }"
      >
        <Navbar :items="navItems" />
        <nuxt />
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
    Sidebar
  },
  data() {
    return {
      navItems: [
        {
          link: '/',
          label: 'Home'
        },
        {
          link: '/#services',
          label: 'What We Do'
        },
        {
          link: '/works',
          label: 'Works'
        },
        {
          link: '/team',
          label: 'Team'
        },
        {
          link: '/#contact-us',
          label: 'Contact Us',
          button: true
        }
      ]
    }
  },
  computed: {
    ...mapState({
      showSidebar: (state) => state.navbar.showSidebar
    })
  }
}
</script>
