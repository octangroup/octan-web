<template>
  <SectionWrapper id="partners">
    <SectionHeader title="Our partners" class="w-100">
      These brands think we're awesome.<br />
      The feeling's mutual.
    </SectionHeader>
    <div class="flex flex-wrap items-center justify-center text-center py-8">
      <div v-for="(partner, i) in list" :key="i" class="w-30 mx-auto my-6">
        <div>
          <a
            :href="partner.link"
            class="inherit-color no-underline portfolio-icon transition-1s"
            target="_blank"
            ><img :src="partner.logo" class="w-50"
          /></a>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script>
import SectionHeader from '~/components/sections/partials/Header'
import SectionWrapper from '~/components/sections/partials/Wrapper'
export default {
  name: 'PartnersSection',
  components: {
    SectionHeader,
    SectionWrapper
  },
  data() {
    return {
      list: [
        {
          link: 'https://www.proto.cx/',
          logo: '/img/partners/proto.png'
        },
        {
          link: 'https://folkdays.com/',
          logo: '/img/partners/folkdays-logo.png'
        },
        {
          link: 'https://www.codeofafrica.com/',
          logo: '/img/partners/coa-logo.png'
        },
        {
          link: 'https://www.alusb.com/graduation/',
          logo: '/img/partners/alusb-logo.png'
        },
        {
          link: 'https://techinrwanda.com',
          logo: '/img/partners/techinrwanda-logo.png'
        },
        {
          link: 'http://betahills.com/',
          logo: '/img/partners/betahills-logo.png'
        },
        {
          link: 'https://www.apeunit.com/',
          logo: '/img/partners/ape-unit-logo.png'
        },
        {
          link: 'https://dacade.org',
          logo: '/img/partners/dacade-logo.png'
        },
        {
          link: 'http://business-inventor.com/',
          logo: '/img/partners/business-inventor-logo.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio-icon {
  filter: grayscale(100%);
  opacity: 0.6;
  &:hover,
  &:focus {
    filter: none;
    opacity: 1;
  }
}
</style>
