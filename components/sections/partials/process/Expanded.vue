<template>
  <div class="w-100 relative xs:hidden">
    <div class="xl:flex lg:flex sm:flex md:flex w-100 pt-16">
      <ProcessCard
        class="w-30"
        :index="1"
        :title="items[0].title"
        :description="items[0].description"
      />
      <ProcessArrow
        class="w-40"
        animation="fade-right"
        icon="/icons/process/arrow-1.svg"
      />
      <ProcessCard
        class="w-30 text-right xs:text-center xs:pt-16"
        :index="2"
        :title="items[1].title"
        :description="items[1].description"
      />
    </div>
    <ProcessArrow
      class="w-10 float-right xl:pt-16 ml-auto xl:mr-6"
      icon="/icons/process/arrow-2.svg"
      offset="100"
      animation="fade-left"
    />
    <div class="xl:flex md:flex lg:flex sm:flex pt-16">
      <ProcessArrow
        class="w-50 px-12 sm:pr-3 lg:px-2 md:pt-5 md:px-8 mt-12"
        icon="/icons/process/arrow-3.svg"
        offset="400"
        duration="800"
        animation="fade-left"
      />
      <ProcessCard
        class="w-50 md:px-3 px-12 xl:pt-16 ml-auto xl:mr-4"
        :index="3"
        :title="items[2].title"
        :description="items[2].description"
      />
    </div>
    <ProcessCard
      class="w-45 pr-12 xl:mr-4"
      :index="4"
      :title="items[3].title"
      :description="items[3].description"
    />
    <div class="w-100">
      <div class="w-100 ml-auto">
        <ProcessArrow
          class="w-10 lg:w-15 md:w-15 mx-auto -mt-20 mb-12 md:mb-8"
          icon="/icons/process/arrow-4.svg"
          offset="200"
          animation="fade-down"
        />
        <ProcessCard
          class="w-50 ml-auto px-12 lg:px-10 md:px-10 mr-6 pt-16 md:pt-6"
          :index="5"
          :title="items[4].title"
          :description="items[4].description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProcessCard from '~/components/cards/Process'
import ProcessArrow from '~/components/sections/partials/process/Arrow'

export default {
  name: 'ProcessExpanded',
  components: {
    ProcessCard,
    ProcessArrow,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
