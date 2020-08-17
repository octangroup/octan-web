<template>
  <div class="w-60 z-999 hidden lg:block xl:block">
    <div
      class="-mt-32 h-screen justify-center flex sticky z-50 max-w-100 w-100 ml-auto z-0 md:hidden sm:hidden xs:hidden relative"
    >
      <div
        class="relative flex w-screen h-screen justify-center w-100 portfolio-project"
      >
        <div
          :class="['project-section-' + index]"
          class="flex justify-start items-center bg-transparent"
        >
          <PortfolioGroup v-for="(group, i) in list" :key="i">
            <div
              v-for="(subgroup, k) in group"
              :key="k"
              class="flex"
              :class="[k == 0 ? 'items-end' : 'items-center']"
            >
              <PortfolioCard
                v-for="(picture, j) in subgroup"
                :key="j"
                :picture="picture"
              />
            </div>
          </PortfolioGroup>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PortfolioGroup from '~/components/sections/partials/portfolio/Group'
import PortfolioCard from '~/components/cards/Portfolio'
export default {
  name: 'ProjectDesktop',
  components: {
    PortfolioGroup,
    PortfolioCard,
  },
  props: {
    index: {
      type: Number,
      default: 0,
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      animationFly: '',
      animationShadow: '',
      animationFixedShadow: '',
      clientHeight: 0,
    }
  },
  created() {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('scroll', this.scrollingListener)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollingListener)
  },
  mounted() {
    this.initiliazeAnimations()
    this.clientHeight = this.$parent.$refs.wrapper.clientHeight
  },
  methods: {
    scrollingListener() {
      //   if (!this.isMobile) {
      const persentage = this.getScrollPercent()
      this.animationFly.seek(this.animationFly.duration * (persentage * 0.01))
      this.animationShadow.seek(
        this.animationShadow.duration * (persentage * 0.01)
      )
      this.animationFixedShadow.seek(
        this.animationFixedShadow.duration * (persentage * 0.01)
      )
      //   }
    },
    getScrollPercent() {
      const rect = this.$parent.$refs.wrapper.getBoundingClientRect()
      const top = rect.bottom / 2
      if (top <= this.clientHeight && top >= 0) {
        return 100 - (top * 100) / this.clientHeight
      }
      return 0
    },
    initiliazeAnimations() {
      this.animationFly = this.$anime({
        targets: `.project-section-${this.index} .works-movable-item`,
        translateX: -100,
        translateY: -100,
        delay(el, i) {
          return i * 50
        },
        autoplay: false,
        easing: 'easeInOutSine',
      })
      this.animationShadow = this.$anime({
        targets: `.project-section-${this.index} .works-movable-item-shadow`,
        opacity: '0.1',
        translateX: 20,
        translateY: 50,
        autoplay: false,
        delay(el, i) {
          return i * 50
        },
        easing: 'easeInOutSine',
      })
      this.animationFixedShadow = this.$anime({
        targets: `.project-section-${this.index} .works-fixed-item-shadow`,
        opacity: '0.1',
        translateX: 60,
        translateY: 90,
        translateZ: '-1px',
        delay(el, i) {
          return i * 50
        },
        scaleX: 0.691172,
        scaleY: 0.691172,
        scaleZ: 1,
        autoplay: false,
        easing: 'easeInOutSine',
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.portfolio-project {
  -webkit-transform: rotateX(49deg) rotateY(0deg) rotateZ(39deg);
  transform: rotateX(49deg) rotateY(0deg) rotateZ(39deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
</style>
