<template>
  <div class="bg-primary-darker relative">
    <div
      class="relative overflow-hidden xs:min-h-px-500 md:min-h-px-400 sm:min-h-px-400"
    >
      <div class="absolute l-0 w-100 h-100 z-999 py-12">
        <div
          class="absolute w-50 xs:w-70 h-100 bg-primary opacity-60 xs:opacity-70 z-0 t-0"
        />
        <div class="relative z-5 w-90 xl:w-85 mx-auto py-12">
          <div class="w-50 xs:w-65">
            <a class="inherit-color no-underline">
              <SectionHeader title="Our works" class="w-100" dark>
                We enjoy getting experience while doing what we love, <br />
                looking forward to building memorable experiences with you.
              </SectionHeader>
            </a>
          </div>
        </div>
      </div>
      <MainSection v-if="loaded" :items="items" />
      <SimplifiedSection v-if="loaded" :items="items" />
    </div>
  </div>
</template>

<script>
import SectionHeader from '~/components/sections/partials/Header'
import MainSection from '~/components/sections/partials/portfolio/Main'
import SimplifiedSection from '~/components/sections/partials/portfolio/Simplified'

export default {
  name: 'PortfolioSection',
  components: {
    SectionHeader,
    MainSection,
    SimplifiedSection,
  },
  data() {
    return {
      items: [
        {
          ...require('~/assets/img/portfolio/vivahill/vivahill-main-1.jpg'),
          portait: false,
        },
        {
          ...require('~/assets/img/portfolio/nzeri2.jpg'),
          portait: true,
        },
        {
          ...require('~/assets/img/portfolio/statetra-main.jpg'),
          portait: false,
        },
        {
          ...require('~/assets/img/portfolio/safali2.1.jpg'),
          portait: true,
        },
        {
          ...require('~/assets/img/portfolio/nzeri.jpg'),
          portait: false,
        },
        {
          ...require('~/assets/img/portfolio/safali0.jpg'),
          portait: false,
        },
        {
          ...require('~/assets/img/portfolio/alu.jpg'),
          portait: false,
        },
        {
          ...require('~/assets/img/portfolio/statetra-mob-2.jpg'),
          portait: true,
        },
        {
          ...require('~/assets/img/portfolio/vivahill/vivahill-main-5.jpg'),
          portait: false,
        },
        {
          ...require('~/assets/img/portfolio/vivahill/vivahill-mob-1.jpg'),
          portait: true,
        },
        {
          ...require('~/assets/img/portfolio/furaha-main.jpg'),
          portait: false,
        },
        {
          ...require('~/assets/img/portfolio/hts/hts-main-1.jpg'),
          portait: false,
        },
        {
          ...require('~/assets/img/portfolio/knots/main-1.jpg'),
          portait: false,
        },
        {
          ...require('~/assets/img/portfolio/safzo.jpg'),
          portait: true,
        },
        {
          ...require('~/assets/img/portfolio/nzeri1.jpg'),
          portait: false,
        },
        {
          ...require('~/assets/img/portfolio/furaha-mob-1.jpg'),
          portait: true,
        },
        {
          ...require('~/assets/img/portfolio/hts/hts-main-2.jpg'),
          portait: false,
        },
        {
          ...require('~/assets/img/portfolio/techinrwanda/main-1.jpg'),
          portait: false,
        },
        {
          ...require('~/assets/img/portfolio/alu.jpg'),
          portait: false,
        },
        {
          ...require('~/assets/img/portfolio/statetra-mob-2.jpg'),
          portait: true,
        },
        {
          ...require('~/assets/img/portfolio/vivahill/vivahill-main-5.jpg'),
          portait: false,
        },
        {
          ...require('~/assets/img/portfolio/nzeri5.jpg'),
          portait: true,
        },
        {
          ...require('~/assets/img/portfolio/furaha-main.jpg'),
          portait: false,
        },
        {
          ...require('~/assets/img/portfolio/hts/hts-main-1.jpg'),
          portait: false,
        },
      ],
      loaded: false,
    }
  },
  mounted() {
    this.loaded = true
  },
}
</script>
