<template>
  <div
    class="relative mr-vw-2 mb-vh-20 z-50 portfolio-card"
    :class="[picture.portait ? 'w-vh-20 z-4 mt-4' : 'w-vh-40 z-50']"
  >
    <div
      :class="{ 'works-movable-item': !picture.portait && !mobile }"
      class="h-auto relative z-999 block transform-3d translate-3d-0-0-9 portfolio-card__movable"
    >
      <img :srcset="picture.srcSet" class="w-100" />
    </div>
    <div
      class="absolute t-0 b-0 r-0 l-0 w-100 h-auto inline-block bg-black-darkest transform-3d portfolio-card__shadow transform-50-100-origin z-0 translate-3d-0-0-1"
      :class="{
        'works-movable-item-shadow': !picture.portait && !mobile,
        'works-fixed-item-shadow': picture.portait && !mobile,
      }"
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
          portait: false,
        }
      },
    },
    mobile: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss" scoped>
.portfolio-card {
  &__movable {
    will-change: transform;
  }
  &__shadow {
    will-change: opacity, transform;
    opacity: 0.6;
  }
}
</style>
