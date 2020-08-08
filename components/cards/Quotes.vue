<template>
  <div
    class="w-80 h-rem-58 mt-10 lg:mt-6 md:w-100 mt-16 sm:w-100 md:mt-0 sm:mt-0 rounded-2xl bg-white shadow-lg relative lg:l-1 xs:hidden"
  >
    <div class="absolute -mt-10 mx-auto w-100">
      <div
        class="rounded-full mt-0 mb-0 h-rem-16 w-rem-16 bg-primary mx-auto text-center shadow-md flex items-center justify-center text-2xl text-white"
      >
        <transition
          mode="out-in"
          name="custom-classes-transition"
          enter-active-class="animated fadeInRight"
          leave-active-class="animated fadeOutLeft"
          :duration="500"
          ><span :key="index">
            <font-awesome-icon :icon="quotes[index].icon"></font-awesome-icon>
          </span>
        </transition>
      </div>
    </div>
    <div class="text-center text-black mx-auto my-12">
      <transition
        mode="out-in"
        name="custom-classes-transition"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        :duration="500"
      >
        <p
          :key="index"
          class="w-80 mx-auto xs:my-3 xs:text-lg sm:text-lg md:text-lg text-xl xs:w-90 font-normal leading-normal"
          v-text="quotes[index].message"
        />
      </transition>
    </div>
    <div class="absolute w-100 b-10 text-center text-2xl">
      <span class="mr-6"
        ><a
          target="_blank"
          href="https://twitter.com/octangrp?ref_src=twsrc%5Etfw"
          ><img
            src="https://img.icons8.com/ios/50/000000/add-user-male.png"
            class="w-rem-6" /></a
      ></span>
      <span class="ml-6"
        ><a
          target="_blank"
          :href="
            'https://twitter.com/intent/tweet?screen_name=octangrp&ref_src=twsrc%5Etfw&text=' +
            quotes[index].message
          "
          ><img
            src="https://img.icons8.com/ios/50/000000/retweet.png"
            class="w-rem-6" /></a
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quotes',
  data() {
    return {
      quotes: [
        {
          icon: 'mobile',
          message:
            'A great and memorable experience is obtained through our amazing mobile apps.',
        },
        {
          icon: 'globe',
          message:
            'A strong relationship with clients is built through our creative and inspiring websites.',
        },
        {
          icon: 'microchip',
          message:
            'A tangible and cherishable experience is acquired through our well developed hardware systems.',
        },
        {
          icon: 'pencil-alt',
          message:
            'Outstanding brands are made through our creative and fancy graphic designs.',
        },
      ],
      index: 0,
    }
  },
  created() {
    setInterval(() => {
      this.slideText()
    }, 7500)
  },
  methods: {
    slideText() {
      const i = this.index + 1
      if (i < this.quotes.length) {
        return (this.index = i)
      }

      return (this.index = 0)
    },
  },
}
</script>
