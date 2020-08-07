<template>
  <div ref="wrapper" class="relative z-50">
    <SectionWrapper id="services">
      <div class="xl:flex lg:flex w-100">
        <div class="w-45 md:w-70 xs:w-100 sm:w-80 xl:pr-4 lg:pr-4">
          <SectionHeader title="What we do" class="w-100">
            We do our best to become our customers' solutions, remarkable
            services are offered to make customer relationships a priority.
          </SectionHeader>
        </div>

        <div
          class="w-55 md:w-80 sm:w-90 sm:mx-auto md:mx-auto sm:mt-12 md:mt-12 xs:w-100 xl:pl-4 lg:pl-4 overflow-hidden"
        >
          <div
            class="flex w-90 xs:w-100 lg:w-100 mx-auto xl:mr-0 lg:mr-0 flex-wrap my-4"
          >
            <ServiceCard
              v-for="(service, i) in services"
              :key="i"
              :icon="service.icon"
              :title="service.title"
              :bottom-right="service.bottomRight == true"
              :bottom-left="service.bottomLeft == true"
              :top-left="service.topLeft == true"
              :top-right="service.topRight == true"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ServiceCard from '~/components/cards/Service'
import SectionHeader from '~/components/sections/partials/Header'
import SectionWrapper from '~/components/sections/partials/Wrapper'

export default {
  name: 'ServiceSection',
  components: {
    ServiceCard,
    SectionHeader,
    SectionWrapper,
  },
  data() {
    return {
      services: [
        {
          title: 'Web Development',
          icon: '/icons/services/sketch.svg',
          bottomRight: true,
        },
        {
          title: 'Mobile App Development',
          icon: '/icons/services/application.svg',
          bottomLeft: true,
        },
        {
          title: 'Graphic Design & Branding',
          icon: '/icons/services/graphic.svg',
          topRight: true,
        },
        {
          title: 'Search Engine Optimization (SEO)',
          icon: '/icons/services/seo.svg',
          topLeft: true,
        },
      ],
      animation: '',
      clientHeight: 0,
    }
  },
  computed: {
    ...mapState({
      isMobile: (state) => state.window.isMobile,
    }),
  },
  created() {
    if (process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('scroll', this.renderAnimation)
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.renderAnimation)
  },
  mounted() {
    this.animation = this.$anime.timeline({
      autoplay: false,
    })
    this.animation.add({
      targets: '.service-bubble-el',
      keyframes: [
        {
          translateY: -20,
        },
        {
          translateY: -10,
        },
        {
          translateY: 0,
        },
        {
          translateY: 10,
        },
        {
          translateY: 20,
        },
      ],
      easing: 'easeInOutSine',
    })
    this.clientHeight = this.$refs.wrapper.clientHeight
  },
  methods: {
    renderAnimation() {
      if (!this.isMobile) {
        const persentage = this.getScrollPercent()
        this.animation.seek(this.animation.duration * (persentage * 0.01))
      }
    },
    getScrollPercent() {
      const rect = this.$refs.wrapper.getBoundingClientRect()
      const top = rect.bottom / 2
      if (top <= this.clientHeight && top >= 0) {
        return 100 - (top * 100) / this.clientHeight
      }
      return 0
    },
  },
}
</script>
