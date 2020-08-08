<template>
  <div
    :class="[bottomLeft || topLeft ? 'ml-auto' : 'mr-auto']"
    class="w-50 xs:w-40 xs:px-0 relative my-4"
  >
    <div class="w-100">
      <div
        :class="{ 'ml-auto': bottomLeft || topLeft }"
        class="xl:w-rem-40 xl:h-rem-40 xs:h-rem-24 xs:w-rem-24 h-rem-32 w-rem-32 opacity-65 relative rounded-xl md:rounded-lg bg-accent-lightest shadow-lg"
      ></div>
      <div>
        <div
          ref="service"
          :class="{
            'l-20': topRight || bottomRight,
            'r-20': bottomLeft || topLeft,
            't-10': bottomLeft || bottomRight,
            '-t-10': topLeft || topRight,
          }"
          class="rounded-full absolute service-bubble-el mt-0 mb-0 xl:h-rem-40 xl:w-rem-40 h-rem-32 w-rem-32 xs:h-rem-24 xs:w-rem-24 mx-auto text-center shadow-md flex items-center justify-center text-2xl text-white service-bubble"
        >
          <img :src="icon" class="w-35 xl:ml-1 xl:mt-2 text-white" />
        </div>
      </div>
    </div>
    <h4
      :class="[bottomLeft || topLeft ? 'text-right pl-3' : 'text-left pr-3']"
      class="pt-4 text-lg leading-normal md:text-base sm:text-base xs:text-xs text-base font-primary"
    >
      {{ title }}
    </h4>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    topLeft: {
      type: Boolean,
      default: false,
    },
    bottomLeft: {
      type: Boolean,
      default: false,
    },
    topRight: {
      type: Boolean,
      default: false,
    },
    bottomRight: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.service-bubble {
  background: linear-gradient(to right, #155477, #01263f);
}
</style>
