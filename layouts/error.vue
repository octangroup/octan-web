<template>
  <div class="relative pt-32 min-h-screen flex items-center justify-center">
    <div class="relative text-center">
      <div v-if="error.statusCode === 404">
        <h1>Page not found</h1>
        <p>
          Looks like you've followed a broken link or entered a URL that doesn't
          exist on this site.
        </p>
      </div>
      <h1 v-else>An error occurred - {{ error.statusCode }}</h1>
      <span
        ><NuxtLink to="/" class="underline cursor-pointer"
          >Go Home page</NuxtLink
        ></span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  layout: 'error', // you can set a custom layout for the error page
}
</script>
