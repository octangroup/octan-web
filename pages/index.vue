<template>
  <div class="w-100 relative">
    <MainSection />
    <AboutSection />
    <ServicesSection />
    <ProcessSection />
    <PartnersSection />
    <ContactSection />
  </div>
</template>

<script>
import MainSection from '~/components/sections/Main'
import AboutSection from '~/components/sections/About'
import ServicesSection from '~/components/sections/Services'
import ProcessSection from '~/components/sections/Process'
import PartnersSection from '~/components/sections/Partners'
import ContactSection from '~/components/sections/Contact'
export default {
  components: {
    MainSection,
    AboutSection,
    ServicesSection,
    ProcessSection,
    PartnersSection,
    ContactSection
  },
  mounted() {
    this.$store.dispatch('navbar/setTransparentBackground', true)
    this.$store.dispatch('navbar/setFixedPosition', false)
  },
  beforeDestroy() {
    this.$store.dispatch('navbar/setTransparentBackground', false)
    this.$store.dispatch('navbar/setFixedPosition', true)
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
