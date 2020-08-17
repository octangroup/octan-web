<template>
  <div class="xl:hidden lg:hidden overflow-hidden sm:pb-0 md:pb-4">
    <div
      class="md:ml-12 md:pl-12 sm:ml-12 sm:pl-16 sm:pb-12 sm:mt-6 md:pt-12 xs:mt-12 relative flex flex-col z-10 items-center w-80 sm:w-100 xs:mx-auto h-auto z-90"
    >
      <div
        class="relative block w-90 sm:w-100 sm:ml-auto xs:w-100 mx-auto overflow-visible h-auto justify-between transform-3d bg-transparent z-0"
      >
        <div
          class="relative flex flex-wrap flex-col md:w-50 sm:w-60 md:ml-auto sm:mx-auto sm:items-start md:items-start bg-transparent transform-0-50-origin transform-3d justify-start z-0 transform-45deg-3d sm:pt-6"
        >
          <PortfolioGroup v-for="(group, i) in list" :key="i">
            <div
              v-for="(subgroup, k) in group"
              :key="k"
              class="flex relative"
              :class="[k == 0 ? 'items-end' : 'items-center']"
            >
              <PortfolioCard
                v-for="(picture, j) in subgroup"
                :key="j"
                :picture="picture"
                mobile
              />
            </div>
          </PortfolioGroup>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioGroup from '~/components/sections/partials/portfolio/Group'
import PortfolioCard from '~/components/cards/Portfolio'
export default {
  name: 'ProjectMobile',
  components: {
    PortfolioGroup,
    PortfolioCard,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
