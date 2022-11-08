<template>
  <SectionWrapper id="partners">
    <SectionHeader title="Our partners" class="w-100">
      These brands think we're awesome.<br />
      The feeling's mutual.
    </SectionHeader>
    <div class="flex flex-wrap items-center justify-center text-center py-8">
      <div
        v-for="(partner, i) in list"
        :key="i"
        class="w-30 xs:w-50 mx-auto my-6"
      >
        <div>
          <a
            :href="partner.link"
            class="inherit-color no-underline portfolio-icon transition-500ms block"
            target="_blank"
            :title="partner.title"
            ><img
              :src="partner.logo"
              :srcset="partner.logo.srcSet"
              class="w-50 lg:w-60 md:w-70 sm:w-70 xs:w-80"
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
    SectionWrapper,
  },
  data() {
    return {
      list: [
        {
          title: 'Ried Berlin',
          link: 'https://www.ried-berlin.com',
          logo: require('~/assets/img/partners/ried-logo.svg'),
        },
        {
          title: 'Folkdays',
          link: 'https://folkdays.com/',
          logo: require('~/assets/img/partners/folkdays-logo.png'),
        },
        {
          title: 'Code of Africa',
          link: 'https://www.codeofafrica.com/',
          logo: require('~/assets/img/partners/coa-logo.png'),
        },
        {
          title: 'German Tech Network',
          link: 'https://techinrwanda.com',
          logo: require('~/assets/img/partners/techinruanda-logo.svg'),
        },
        {
          title: 'Dacade',
          link: 'https://dacade.org',
          logo: require('~/assets/img/partners/dacade-logo.svg'),
        },
        {
          title: 'betahills',
          link: 'http://betahills.com/',
          logo: require('~/assets/img/partners/betahills-logo.png'),
        },
        {
          title: 'Ape Unit',
          link: 'https://www.apeunit.com/',
          logo: require('~/assets/img/partners/ape-unit-logo.png'),
        },
        {
          title: 'Codeshift',
          link: 'https://www.codeshift.co/',
          logo: require('~/assets/img/partners/codeshift.svg'),
        },
        {
          title: 'ALUSB',
          link: 'https://www.alusb.com/graduation/',
          logo: require('~/assets/img/partners/alusb-logo.png'),
        },
        {
          title: 'Tech Team Berlin',
          link: 'https://techteamberlin.com/',
          logo: require('~/assets/img/partners/tech-team-berlin.png'),
        },
      ],
    }
  },
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
