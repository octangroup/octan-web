<template>
  <div
    :style="{
      height: height,
      width: height,
      backgroundSize: 'cover',
      backgroundImage: placeholder,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ImagePlaceholder',
  props: {
    image: {
      type: Object,
      default: null,
    },
    height: {
      type: String,
      default: '100%',
    },
    width: {
      type: String,
      default: '100%',
    },
  },
  computed: {
    placeholder() {
      return `url("${this.image.placeholder}")`
    },
  },
}
</script>
