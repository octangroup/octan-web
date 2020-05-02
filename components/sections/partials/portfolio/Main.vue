/* eslint-disable nuxt/no-globals-in-created */
<template>
  <div
    ref="wrapper"
    class="t-0 justify-center xl:flex lg:flex overflow-hidden z-50 max-w-100 w-100 ml-auto z-50  hidden relative"
    style="height:120vh"
  >
    <div
      class="relative flex w-screen justify-center w-80"
      style="-webkit-transform: rotateX(55deg) rotateY(0deg) rotateZ(45deg);height:120vh;
            transform: rotateX(55deg) rotateY(0deg) rotateZ(45deg);
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;"
    >
      <div
        class="flex justify-start items-center bg-transparent works-scroll-container"
        style="will-change: transform; transform: translate3d(50%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
      >
        <PortfolioGroup v-for="(group, i) in list" :key="i">
          <div
            v-for="(subgroup, k) in group"
            :key="k"
            class="flex relative"
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
</template>
<script>
import { mapState } from 'vuex'
import chunk from 'lodash/chunk'
import PortfolioGroup from './Group'
import PortfolioCard from '~/components/cards/Portfolio'
export default {
  name: 'MainPortfolio',
  components: {
    PortfolioCard,
    PortfolioGroup
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      animationContainer: '',
      animationFly: '',
      animationShadow: '',
      animationFixedShadow: '',
      clientHeight: 0
    }
  },
  computed: {
    ...mapState({
      isMobile: (state) => state.window.isMobile
    }),
    list() {
      let list = chunk(this.items, 3)
      list = chunk(list, 2)
      return list
    }
  },
  created() {
    if (process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('scroll', this.scrollingListener)
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollingListener)
  },
  mounted() {
    this.initiliazeAnimations()
    this.clientHeight = this.$refs.wrapper.clientHeight
  },
  methods: {
    scrollingListener() {
      if (!this.isMobile) {
        const persentage = this.getScrollPercent()
        this.animationContainer.seek(
          this.animationContainer.duration * (persentage * 0.01)
        )
        this.animationFly.seek(this.animationFly.duration * (persentage * 0.01))
        this.animationShadow.seek(
          this.animationShadow.duration * (persentage * 0.01)
        )
        this.animationFixedShadow.seek(
          this.animationFixedShadow.duration * (persentage * 0.01)
        )
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
    initiliazeAnimations() {
      this.animationContainer = this.$anime({
        targets: '.works-scroll-container',
        translateX: -1360,
        autoplay: false,
        easing: 'easeInOutSine'
      })
      this.animationFly = this.$anime({
        targets: '.works-movable-item',
        translateX: -120,
        translateY: -120,
        delay(el, i) {
          return i * 50
        },
        autoplay: false,
        easing: 'easeInOutSine'
      })
      this.animationShadow = this.$anime({
        targets: '.works-movable-item-shadow',
        opacity: '0.2',
        translateX: 20,
        translateY: 50,
        autoplay: false,
        delay(el, i) {
          return i * 50
        },
        easing: 'easeInOutSine'
      })
      this.animationFixedShadow = this.$anime({
        targets: '.works-fixed-item-shadow',
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
        easing: 'easeInOutSine'
      })
    }
  }
}
</script>
