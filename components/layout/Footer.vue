<template>
  <div class="p-3 bg-primary-dark h-auto min-h-auto">
    <div class="text-center text-white  xs:text-xs text-sm font-medium">
      &copy; 2016 - {{ year }} Octan Group &middot; All rights reserved &middot;
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>
