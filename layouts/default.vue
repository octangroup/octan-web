<template>
  <div class="static bg-grey-lightest h-100 min-h-screen">
    <div class="xl:block lg:block flex relative h-100 w-100">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/layout/Footer'
export default {
  components: {
    Footer
  }
}
</script>
