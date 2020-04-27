<template
  ><div
    ref="wrapper"
    class="py-12 z-50 p-0 relative overflow-hidden"
    :style="brandStyle"
    :class="[
      project.textColor == 'white' ? 'text-white' : 'text-black',
      !project.brandColor ? 'bg-white' : null
    ]"
  >
    <div
      class="mx-auto xl:py-12 md:w-100 sm:w-100 w-85 sm:py-6 xs:px-0  h-px-700  sm:h-auto xs:h-auto  xs:w-100"
    >
      <div class="xl:flex lg:flex w-100  xs:mt-6">
        <div
          class="w-40 md:w-85 sm:w-85 md:85 xs:w-85 md:mx-auto sm:mx-auto xs:mx-auto xs:text-center xl:pt-12 xs:pt-12 sm:pt-2"
        >
          <span
            :class="[
              project.textColor == 'white' ? 'border-white' : 'border-black'
            ]"
            class="text-xs p-2  text-center  xs:mx-auto rounded-sm border-1 border-solid  font-primary"
          >
            {{ project.category }}</span
          >
          <h2 class=" xs:text-xl font-primary">
            {{ project.title }}
          </h2>
          <p
            class="xl:w-80  xs:text-sm  xl:text-lg lg:text-lg leading-normal opacity-95"
          >
            {{ project.description }}
          </p>

          <a
            :href="project.url"
            target="_blank"
            class="inherit-color no-underline"
          >
            <button
              class="btn bg-white  rounded-sm shadow-lg my-6 sm:mb-0 text-black"
            >
              Visit Site
              <span class="pl-3">
                <font-awesome-icon
                  icon="long-arrow-alt-right"
                ></font-awesome-icon>
              </span>
            </button>
          </a>
        </div>
        <div class="w-60 z-999 hidden lg:block xl:block">
          <div
            class="-mt-32 h-screen justify-center flex sticky z-50 max-w-100 w-100 ml-auto z-0 md:hidden sm:hidden xs:hidden relative"
          >
            <div
              class="relative flex w-screen h-screen justify-center w-100 "
              style="-webkit-transform: rotateX(49deg) rotateY(0deg) rotateZ(39deg);
            transform: rotateX(49deg) rotateY(0deg) rotateZ(39deg);
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;"
            >
              <div
                :class="['project-section-' + index]"
                class="flex justify-content-start items-center bg-transparent"
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
      </div>
    </div>
  </div>
</template>

<script>
import chunk from 'lodash/chunk'
import PortfolioGroup from '~/components/sections/partials/portfolio/Group'
import PortfolioCard from '~/components/cards/Portfolio'
export default {
  name: 'ProjectCard',
  components: {
    PortfolioGroup,
    PortfolioCard
  },
  props: {
    project: {
      type: Object,
      default: () => {
        return {
          url: '',
          title: '',
          description: '',
          category: '',
          brandColor: '',
          pictures: []
        }
      }
    },
    rowChunks: {
      type: Number,
      default: 3
    },
    index: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      animationFly: '',
      animationShadow: '',
      animationFixedShadow: '',
      clientHeight: 0
    }
  },
  computed: {
    list() {
      let list = chunk(this.project.pictures, this.rowChunks)
      list = chunk(list, 2)
      return list
    },
    brandStyle() {
      if (this.project.brandColor) {
        return {
          backgroundColor: this.project.brandColor
        }
      }
      return {}
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
      const persentage = this.getScrollPercent()
      console.log(persentage)
      this.animationFly.seek(this.animationFly.duration * (persentage * 0.01))
      this.animationShadow.seek(
        this.animationShadow.duration * (persentage * 0.01)
      )
      this.animationFixedShadow.seek(
        this.animationFixedShadow.duration * (persentage * 0.01)
      )
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
      this.animationFly = this.$anime({
        targets: `.project-section-${this.index} .works-movable-item`,
        translateX: -100,
        translateY: -100,
        delay(el, i) {
          return i * 50
        },
        autoplay: false,
        easing: 'easeInOutSine'
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
        easing: 'easeInOutSine'
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
        easing: 'easeInOutSine'
      })
    }
  }
}
</script>
