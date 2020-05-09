<template>
  <SectionWrapper id="contact-us" theme="primary">
    <SectionHeader title="Get in touch" dark>
      We love working with new people, connect with us so we can get started!
    </SectionHeader>

    <div class="xs:mx-auto  text-white pt-6 xs:pt-0">
      <div class="xl:flex lg:flex md:flex sm:flex ">
        <div class="w-50 sm:w-40 md:w-50 xs:w-100">
          <h4
            class="font-light my-4 xs:my-6 text-xl md:text-lg sm:text-base xs:text-base "
          >
            <a
              class="inherit-color no-underline"
              target="_blank"
              href="https://www.google.cm/maps/place/Octan+Group/@-1.9545194,30.1051167,15z/data=!4m2!3m1!1s0x0:0x4eb7dc21ba41fa6?sa=X&ved=2ahUKEwioqNr4tLfnAhVGdcAKHSA3CdwQ_BIwE3oECAwQCA"
            >
              <i class="fi flaticon-placeholder font-bold mr-2"></i> 27 Kg 8 Ave
              Kigali, Rwanda
            </a>
          </h4>
          <h4
            class="font-light my-4 xs:my-6 text-xl md:text-lg sm:text-base xs:text-base"
          >
            <a
              class="inherit-color no-underline"
              target="_blank"
              href="mailto:info@octangrp.com"
              ><i class="fi flaticon-mail mr-2"></i>
              hello@octangrp.com
            </a>
          </h4>
          <h4
            class="font-light my-4 xs:my-6 text-xl md:text-lg sm:text-base xs:text-base"
          >
            <a
              class="inherit-color no-underline"
              target="_blank"
              href="tel:+250780468644"
            >
              <i class="fi flaticon-phone-call mr-2"></i> +250 780 468 644
            </a>
          </h4>
        </div>
        <transition
          mode="out-in"
          name="custom-classes-transition"
          enter-active-class="animated fadeInUp"
          leave-active-class="animated fadeOutDown"
          :duration="500"
        >
          <div
            v-show="showForm"
            class="w-50 sm:w-60 xs:mt-12 xs:w-100  sm:px-0 xs:px-0"
            style="display: none"
          ></div>
        </transition>
      </div>

      <div class="flex justify-center mt-12">
        <div class="mx-2">
          <a target="_blank" href="https://twitter.com/octangrp">
            <button
              class="btn bg-primary-lightest text-white h-rem-12 w-rem-12 p-0 rounded-full text-xl text-center"
            >
              <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
            </button>
          </a>
        </div>
        <div class="mx-2">
          <a target="_blank" href="https://facebook.com/octangrp">
            <button
              class="btn bg-primary-lightest text-white h-rem-12 w-rem-12 p-0 rounded-full text-xl text-center"
            >
              <font-awesome-icon
                :icon="['fab', 'facebook-f']"
              ></font-awesome-icon>
            </button>
          </a>
        </div>
        <div class="mx-2">
          <a target="_blank" href="https://www.instagram.com/octangrp">
            <button
              class="btn bg-primary-lightest text-white h-rem-12 w-rem-12 p-0 rounded-full text-xl text-center"
            >
              <font-awesome-icon
                :icon="['fab', 'instagram']"
              ></font-awesome-icon>
            </button>
          </a>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script>
import SectionHeader from '~/components/sections/partials/Header'
import SectionWrapper from '~/components/sections/partials/Wrapper'
export default {
  name: 'ContactSection',
  components: {
    SectionHeader,
    SectionWrapper
  },
  data() {
    return {
      showForm: false
    }
  }
}
</script>
