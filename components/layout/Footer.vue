<template>
  <div class="panel bg-primary-dark h-auto min-h-auto">
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
      return '2020'
    }
  }
}
</script>
