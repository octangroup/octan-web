<template>
  <div
    class="transform-0-50-origin flex-wrap justify-content-between flex-col flex relative portfolio-group-wrapper"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.portfolio-group-wrapper {
  will-change: opacity, transform;
  opacity: 1;
}
</style>
