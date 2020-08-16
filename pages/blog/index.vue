<template>
  <div class="relative">
    <div class="bg-primary pt-8 z-50 relative">
      <div class="px-4 text-center py-12 xl:w-50 lg:w-75 w-80 mx-auto">
        <h1
          class="text-accent font-primary my-12 lg:text-3xl sm:text-2xl xs:text-2xl md:text-2xl text-4xl"
        >
          Blog
        </h1>
        <p
          class="my-0 text-white xl:text-xl lg:text-lg text-base leading-normal"
        >
          We brought together smart, talented thinkers and unleashed their
          combined creativity on the world.
        </p>
      </div>
      <div class="relative overflow-hidden p-0">
        <div class="curves-pattern-overlay z-0 p-0 m-0"></div>
        <div
          class="curves-pattern bg-grey-lightest relative z-10 p-0 m-0 border-none"
        ></div>
      </div>
    </div>
    <div class="px-2 mt-0 py-6 w-85 md:w-95 xs:w-100 sm:w-100 mx-auto">
      <div class="p-8 text-center sm:px-0">
        <div
          v-for="(post, i) in posts.items"
          :key="i"
          class="w-30 mx-auto shadow-md bg-white rounded-xl overflow-hidden"
        >
          <nuxt-link :to="`/blog/${post.sys.id}/${toKebab(post.fields.title)}`">
            <img :src="post.fields.cover.fields.file.url" />
            <div class="">
              <h3 class="text-2xl mb-2">{{ post.fields.title }}</h3>
              <div
                class="text-left mx-6"
                v-html="renderDescription(post.fields.content)"
              />
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { kebabCase } from 'lodash'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
export default {
  computed: {
    ...mapState({
      posts: (state) => state.blog.posts,
    }),
  },
  created() {
    this.$store.dispatch('blog/getPosts')
  },
  methods: {
    renderDescription(rawData) {
      return documentToHtmlString(rawData)
    },
    toKebab(value) {
      return kebabCase(value)
    },
  },
}
</script>
