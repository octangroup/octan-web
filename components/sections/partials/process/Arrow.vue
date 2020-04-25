<template>
  <div :data-aos="animation" data-aos-duration="500">
    <img :src="icon" />
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
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
