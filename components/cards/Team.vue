<template>
  <div
    class="bg-white p-3 xl:w-30 lg:w-45 md:w-45 sm:w-45 md:mr-3 rounded-lg overflow-hidden shadow-lg xl:inline-block lg:inline-block md:inline-block sm:inline-block sm:m-3 xl:m-3 lg:m-3 mt-3"
  >
    <div
      class="h-rem-74 w-rem-74 sm:h-rem-64 sm:w-rem-64 xxs:h-rem-48 xxs:w-rem-48 rounded-full overflow-hidden mx-auto my-2"
    >
      <img :srcset="member.avatar.srcSet" class="clip-full" />
    </div>
    <div class="px-3 py-2">
      <h5 class="my-2 font-primary text-black">{{ member.names }}</h5>
      <p class="font-medium">{{ member.position }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamMember',
  props: {
    member: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
