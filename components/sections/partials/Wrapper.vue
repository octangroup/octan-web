<template>
  <div :class="[themeClass]" class="z-50 relative w-100 py-12 relative">
    <div class="relative">
      <div class="w-90 xl:w-85 mx-auto py-12 relative z-20">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SectionWrapper',
  props: {
    theme: {
      type: String,
      default: 'white',
      validator: (val) => ['primary', 'white', 'light'].includes(val),
    },
  },
  computed: {
    themeClass() {
      switch (this.theme) {
        case 'primary':
          return 'bg-primary text-white'
        case 'light':
          return 'bg-grey-lighter text-dark'
        default:
          return 'bg-white text-dark'
      }
    },
  },
}
</script>
