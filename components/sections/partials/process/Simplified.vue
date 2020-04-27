<template>
  <div class="xl:hidden lg:hidden md:hidden  overflow-hidden">
    <div class="xl:flex lg:flex w-100 pt-12">
      <ProcessCard
        class="w-100 text-center"
        :index="1"
        :title="items[0].title"
        :description="items[0].description"
      />
      <div class="flex w-100 overflow-hidden">
        <ProcessArrow
          animation="fade-down-right"
          inner-class="ml-auto rotate-30deg mr-12"
          class="w-50"
        />
        <ProcessArrow
          animation="fade-down-left"
          inner-class="mr-auto -rotate-30deg ml-12"
          class="w-50"
        />
      </div>
      <div class="flex">
        <ProcessCard
          class="w-50 text-center"
          :index="2"
          :title="items[1].title"
          :description="items[1].description"
        />
        <ProcessCard
          class="w-50 text-center"
          :index="3"
          :title="items[2].title"
          :description="items[2].description"
        />
      </div>
      <div class="flex w-100 overflow-hidden">
        <ProcessArrow
          animation="fade-down-right"
          inner-class="ml-auto -rotate-30deg mr-12"
          class="w-50"
        />
        <ProcessArrow
          animation="fade-down-left"
          inner-class="mr-auto rotate-30deg ml-12"
          class="w-50"
        />
      </div>
      <ProcessCard
        class="w-100 text-center"
        :index="4"
        :title="items[3].title"
        :description="items[3].description"
      />
      <ProcessArrow
        animation="fade-down"
        inner-class="mx-auto "
        class="w-100"
      />
      <ProcessCard
        class="w-100 text-center pt-3"
        :index="5"
        :title="items[4].title"
        :description="items[4].description"
      />
    </div>
  </div>
</template>

<script>
import ProcessCard from '~/components/cards/Process'
import ProcessArrow from '~/components/sections/partials/process/Arrow'

export default {
  name: 'ProcessSimplified',
  components: {
    ProcessCard,
    ProcessArrow
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
