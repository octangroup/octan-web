<template>
  <div class="w-50 md:w-70 xs:w-100 sm:w-80 xl:pr-4 lg:pr-4 relative">
    <h2
      :class="[dark ? 'text-accent' : 'text-dark']"
      class="text-3xl sm:text-xl  md:text-xl xs:text-xl font-bold font-primary"
    >
      {{ title }}
    </h2>
    <div class="w-rem-12 bg-accent h-rem-1 rounded-full mb-12"></div>
    <p
      class="xl:text-xl lg:text-lg opacity-95"
      :class="[dark ? 'text-white' : 'text-dark']"
    >
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    title: {
      type: String,
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>
