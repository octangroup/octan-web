/* eslint-disable nuxt/no-globals-in-created */
<template>
  <div
    class="md:ml-12 md:pl-12 sm:ml-12 xs:mt-12 xs:m-0  relative flex flex-col z-10 items-center w-100 h-auto z-90 xl:hidden lg:hidden"
  >
    <div
      class="relative block w-90 sm:w-100 sm:ml-auto xs:w-100 mx-auto overflow-visible h-auto justify-content-between transform-3d bg-transparent z-0"
    >
      <div
        class="relative flex flex-wrap flex-col justify-between bg-transparent transform-0-50-origin transform-3d align-content-stretch items-center justify-content-start z-0 transform-45deg-3d"
      >
        <PortfolioGroup>
          <div
            v-for="(subgroup, k) in list[0]"
            :key="k"
            class="flex"
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
</template>
<script>
import chunk from 'lodash/chunk'
import PortfolioGroup from './Group'
import PortfolioCard from '~/components/cards/Portfolio'
export default {
  name: 'SimplifiedPortfolio',
  components: {
    PortfolioCard,
    PortfolioGroup
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    list() {
      let list = chunk(this.items, 3)
      list = chunk(list, 2)
      return list
    }
  }
}
</script>
