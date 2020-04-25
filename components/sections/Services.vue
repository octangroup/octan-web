<template>
  <div id="services" class="bg-white z-50 relative overflow-hidden">
    <div class="bg-transparent py-4 z-50 relative xs:px-0">
      <div
        class="xl:w-85 lg:w-95 md:w-95 xs:w-95 sm:w-90 mx-auto relative z-20 md:px-2"
      >
        <div class="xl:flex lg:flex w-100 pb-60 mb-6">
          <div class="w-45 md:w-70 xs:w-100 sm:w-80 xl:pr-4 lg:pr-4 mt-12">
            <h2
              class="font-bold text-3xl sm:text-xl  md:text-xl xs:text-xl text-dark font-primary"
            >
              What We Do
            </h2>
            <div class="w-10 bg-accent h-rem-1 rounded-full"></div>
            <p class="text-xl xs:text-base pt-12 mb-0 ">
              We do our best to become our customers' solutions, remarkable
              services are offered to make customer relationship a priority
            </p>
          </div>

          <div
            class="w-55 md:w-80 sm:w-90 sm:mx-auto md:mx-auto sm:mt-12 md:mt-12 xs:w-100 xl:pl-4 lg:pl-4 overflow-hidden"
          >
            <div
              class="flex w-90 xs:w-100 lg:w-100 xl:ml-auto xs:mx-auto flex-wrap"
            >
              <ServiceCard
                v-for="(service, i) in services"
                :key="i"
                :icon="service.icon"
                :title="service.title"
                :bottom-right="service.bottomRight == true"
                :bottom-left="service.bottomLeft == true"
                :top-left="service.topLeft == true"
                :top-right="service.topRight == true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCard from '~/components/cards/Service'
export default {
  name: 'ServiceSection',
  components: {
    ServiceCard
  },
  data() {
    return {
      services: [
        {
          title: 'Web Development',
          icon: '/icons/sketch.svg',
          bottomRight: true
        },
        {
          title: 'Mobile App Development',
          icon: '/icons/application.svg',
          bottomLeft: true
        },
        {
          title: 'Graphic Design & Branding',
          icon: '/icons/graphic.svg',
          topRight: true
        },
        {
          title: 'Search Engine Optimization (SEO)',
          icon: '/icons/seo.svg',
          topLeft: true
        }
      ]
    }
  }
}
</script>
