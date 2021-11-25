<template>
  <div class="w-100 relative">
    <MainSection />
    <AboutSection />
    <ServicesSection />
    <ProcessSection />
    <PortfolioSection />
    <PartnersSection />
    <ContactSection />
  </div>
</template>

<script>
import MainSection from '~/components/sections/Main'
import AboutSection from '~/components/sections/About'
import ServicesSection from '~/components/sections/Services'
import ProcessSection from '~/components/sections/Process'
import PortfolioSection from '~/components/sections/Portfolio'
import PartnersSection from '~/components/sections/Partners'
import ContactSection from '~/components/sections/Contact'
export default {
  components: {
    MainSection,
    AboutSection,
    ServicesSection,
    ProcessSection,
    PartnersSection,
    ContactSection,
    PortfolioSection,
  },
  mounted() {
    this.$store.dispatch('navbar/setTransparentBackground', true)
    this.$store.dispatch('navbar/setFixedPosition', false)
  },
  beforeDestroy() {
    this.$store.dispatch('navbar/setTransparentBackground', false)
    this.$store.dispatch('navbar/setFixedPosition', true)
  },
}
</script>
