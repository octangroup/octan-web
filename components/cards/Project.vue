<template
  ><div
    ref="wrapper"
    class="py-12 z-50 relative overflow-hidden"
    :style="brandStyle"
    :class="[
      project.textColor == 'white' ? 'text-white' : 'text-black',
      !project.brandColor ? 'bg-white' : null,
    ]"
  >
    <div
      class="mx-auto xl:py-12 md:w-100 sm:w-100 w-85 sm:py-6 xs:px-0 h-px-700 md:h-auto sm:h-auto xs:h-auto xs:w-100"
    >
      <div class="xl:flex lg:flex w-100 xs:mt-6">
        <div
          class="w-40 md:w-85 sm:w-85 md:85 xs:w-85 md:mx-auto sm:mx-auto xs:mx-auto xs:text-center xl:pt-12 xs:pt-12 sm:pt-2"
        >
          <span
            :class="[
              project.textColor == 'white' ? 'border-white' : 'border-black',
            ]"
            class="text-xs p-2 text-center xs:mx-auto rounded-sm border-1 border-solid font-primary"
          >
            {{ project.category }}</span
          >
          <h2
            class="text-3xl sm:text-xl md:text-xl xs:text-xl font-primary my-8"
          >
            {{ project.title }}
          </h2>
          <p
            class="xl:w-80 xs:text-sm xl:text-lg lg:text-lg leading-normal opacity-95"
          >
            {{ project.description }}
          </p>

          <a
            :href="project.url"
            target="_blank"
            class="inherit-color no-underline"
          >
            <button
              class="btn bg-white rounded-sm shadow-xl my-6 sm:mb-0 text-black"
            >
              Visit Site
              <span class="pl-3">
                <og-icon
                  vertical-align="-0.385em"
                  icon="arrow-right"
                  color="black"
                />
              </span>
            </button>
          </a>
        </div>
        <!-- <div class="w-100"> -->
        <client-only>
          <ProjectDesktop v-if="!isMobile" :index="index" :list="list" />
          <ProjectMobile v-if="isMobile" :list="list" />
        </client-only>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import chunk from 'lodash/chunk'
import ProjectMobile from './partials/project/Mobile'
import ProjectDesktop from './partials/project/Desktop'
export default {
  name: 'ProjectCard',
  components: {
    ProjectMobile,
    ProjectDesktop,
  },
  props: {
    project: {
      type: Object,
      default: () => {
        return {
          url: '',
          title: '',
          description: '',
          category: '',
          brandColor: '',
          pictures: [],
        }
      },
    },
    rowChunks: {
      type: Number,
      default: 3,
    },
    index: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    ...mapState({
      isMobile: (state) => state.window.isMobile,
    }),
    list() {
      let list = chunk(this.project.pictures, this.rowChunks)
      list = chunk(list, 2)
      return list
    },
    brandStyle() {
      if (this.project.brandColor) {
        return {
          backgroundColor: this.project.brandColor,
        }
      }
      return {}
    },
  },
}
</script>
