<template>
  <div class="relative">
    <div class="bg-white pt-8 z-50 relative">
      <div
        v-if="post"
        class="px-4 text-center py-12 xl:w-80 lg:w-75 w-80 mx-auto"
      >
        <h1 class="text-4xl mt-12">{{ post.fields.title }}</h1>
        <div class="my-12">
          <img :src="post.fields.cover.fields.file.url" />
        </div>
        <div class="p-2">
          <div
            class="text-left"
            v-html="renderDescription(post.fields.content)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
export default {
  data() {
    return {
      post: null,
    }
  },
  created() {
    this.$store
      .dispatch('blog/getPost', {
        id: this.$route.params.id,
      })
      .then((response) => {
        this.post = response
      })
  },
  methods: {
    renderDescription(rawData) {
      return documentToHtmlString(rawData)
    },
  },
}
</script>
