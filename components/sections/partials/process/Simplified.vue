<template>
  <div class="xl:hidden lg:hidden md:hidden sm:hidden overflow-hidden">
    <div class="xl:flex lg:flex w-100 pt-12">
      <ProcessCard
        class="w-100 text-center"
        :index="1"
        :title="items[0].title"
        :description="items[0].description"
      />
    </div>
  </div>
</template>

<script>
import ProcessCard from '~/components/cards/Process'
export default {
  name: 'ProcessSimplified',
  components: {
    ProcessCard
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
