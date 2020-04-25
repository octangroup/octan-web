<template>
  <div class="relative">
    <div class="mx-auto w-100">
      <div class=" w-rem-18 h-rem-18 relative inline-block">
        <div
          class="w-100 h-100 absolute z-0 -mt-3 rounded-full  growing-icon  p-1"
          style="background: rgba(88,220,208,0.1)"
        >
          <div
            class="w-100 h-100 rounded-full mx-auto p-1"
            style="background: rgba(88,220,208,0.4)"
          ></div>
        </div>
        <div
          class="w-rem-12 h-rem-12 z-99 relative rounded-full bg-accent mx-auto text-white flex items-center justify-center"
        >
          <p class="m-0">{{ index }}</p>
        </div>
      </div>
    </div>

    <h3
      class=" my-1 text-accent xl:pt-6 lg:pt-3 font-bold font-primary text-xl md:text-base xs:text-base sm:text-base sm:ml-3 xs:text-center sm:my-3 xs:my-3"
    >
      {{ title }}
    </h3>
    <div class="w-100  xl:pt-2 lg:pt-1 sm:ml-3 xs:text-center xs:hidden">
      <p
        class="sm:text-xs md:text-sm text-lg left xs:text-xs xs:mx-auto xs:w-80 opacity-95"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProcessCard',
  props: {
    index: {
      type: Number,
      default: 1
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>
