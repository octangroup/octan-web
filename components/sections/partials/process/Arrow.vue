<template>
  <div :data-aos="animation" :data-aos-duration="duration">
    <img v-if="icon" :src="icon" />
    <div
      v-else
      :class="[innerClass]"
      class="h-rem-32 border-0 border-l-2 border-solid border-black border-dashed w-0"
    />
  </div>
</template>

<script>
export default {
  name: 'ProcessArrow',
  props: {
    animation: {
      type: String,
      default: 'fade-in-right'
    },
    duration: {
      type: Number,
      default: 500
    },
    icon: {
      type: String,
      default: ''
    },
    innerClass: {
      type: String,
      default: ''
    }
  }
}
</script>
