<template>
  <div
    id="index-panel"
    class="bg-primary z-10 px-0  pt-0 bg-white t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto"
  >
    <div class="absolute -t-10  xl:w-70 xl:block hidden  -r-5">
      <MainShape />
    </div>
    <div
      class="absolute  -t-5 w-100 sm:w-75 md xl:hidden md:w-70 md:-t-10 lg:w-85 -r-10"
    >
      <MainShape class="lg:-mt-10 sm:-mt-20 xs:-mt-5" />
    </div>
    <div
      class="py-3 min-h-screen  sm:min-h-auto xs:min-h-auto h-100 xl:w-85 w-90 -mt-24 xs:mt-12 lg:-mt-32 md:-mt-3  xs:mt-12 lg:mt-3 lg:pt-3 sm:mt-8 mx-auto xl:flex md:flex  lg:flex sm:flex relative"
    >
      <div class="flex items-end relative w-60 pb-6 xs:w-95 mx-auto">
        <div
          class="xs:w-100 md:w-100 sm:w-95 md:mt-18  xl:mt-18 sm:mb-8 xl:pt-18  xs:mx-auto  xs:mt-18  xs:pt-18"
        >
          <h1
            class="xl:text-4xl  xl:w-65 lg:w-80 sm:w-90 sm:mt-6 md:w-80 lg:text-3xl md:mt-6 mt-3 xs:mt-6 xxs:mt-6 text-accent mb-2 font-primary sm:text-2xl xs:text-2xl md:text-2xl"
          >
            CREATIVITY, QUALITY AND RELIABILITY
          </h1>
          <p
            class="text-white xs:mx-auto xl:w-70 lg:w-80 lg:my-6 md:my-6 my-12 sm:my-6 xs:my-8 leading-normal md:w-70 text-xl xs:text-lg sm:text-lg md:text-lg xs:mt-12"
          >
            Outstanding systems that enhance people’s daily lives are developed
            here.
          </p>
          <div class=" mt-3 w-100 sm:mt-2 xs:mt-2">
            <a href="#main-section">
              <button
                class="btn btn-outline-accent text-base font-medium text-accent hover:text-primary focus:text-primary border-2 hover:bg-accent focus:bg-accent transition-250ms rounded-full "
              >
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        class="flex items-center relative w-40 mt-32 lg:mt-10 sm:mt-0 sm:pt-6 pt-12 md:pt-0 md:mt-16"
      >
        <QuotesCard />
      </div>
    </div>
    <div class="absolute w-100 z-999 b-5 xs:b-15">
      <div
        class="border-1 border-solid border-white h-rem-10 w-rem-6 rounded-full mx-auto overflow-hidden md:invisible sm:invisible xxs:invisible"
      >
        <div
          class="w-px h-rem-2 bg-white mx-auto mt-1 mb-3 sliding-down-icon"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import QuotesCard from '~/components/cards/Quotes'
import MainShape from '~/components/vectors/MainShape'
export default {
  name: 'MainSection',
  components: {
    QuotesCard,
    MainShape
  }
}
</script>
