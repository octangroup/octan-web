<template>
  <div
    class="relative mr-vw-2 mb-vh-20 z-50"
    :class="[picture.portait ? 'w-vh-20 z-4 mt-4' : 'w-vh-40 z-50']"
  >
    <img
      :srcset="picture.srcSet"
      sizes="(max-width: 991px) 100vw, 24vw"
      :class="{ 'works-movable-item': !picture.portait }"
      class="h-auto relative z-999 block transform-3d translate-3d-0-0-9"
      style="will-change: transform; transform: translate3d(0vw, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
    />
    <div
      data-w-id="508d64cb-80bc-4530-6150-374c81f4d787"
      class="absolute t-0 b-0 r-0 l-0 w-100 h-auto inline-block bg-black-darkest transform-3d transform-50-100-origin z-0 translate-3d-0-0-1"
      :class="{
        'works-movable-item-shadow': !picture.portait,
        'works-fixed-item-shadow': picture.portait
      }"
      style="will-change: opacity, transform; opacity: 0.6; transform: translate3d(1.39616vw, 1.91972vh, -1px) scale3d(0.930192, 0.930192, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
    />
  </div>
</template>
<script>
export default {
  name: 'PortfolioCard',
  props: {
    picture: {
      type: Object,
      default: () => {
        return {
          url: '',
          portait: false
        }
      }
    }
  }
}
</script>
