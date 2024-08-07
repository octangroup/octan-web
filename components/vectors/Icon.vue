<template>
  <i
    class="og-icon"
    :class="[
      `og-icon--${size}`,
      `og-icon__content--${icon}`,
      `og-icon__color--${color}`,
    ]"
    :style="{
      verticalAlign: verticalAlign,
    }"
  />
</template>

<script>
export default {
  name: 'OGIcon',
  props: {
    icon: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'small',
    },
    color: {
      type: String,
      default: 'white',
    },
    verticalAlign: {
      type: String,
      default: '-0.125em',
    },
  },
}
</script>
<style lang="scss" scoped>
/* purgecss ignore */
.og-icon {
  display: inline-block;
  font-size: inherit;
  overflow: visible;
  fill: white;
  height: 20px;
  width: 20px;
  mask-repeat: no-repeat;

  &__color {
    background-color: white;
    &--white {
      background-color: white;
    }
    &--black {
      background-color: #000;
    }
  }

  &--small {
    height: 20px;
    width: 20px;
  }
  &--medium {
    height: 26px;
    width: 26px;
  }

  &__content {
    &--phone {
      mask: url('~assets/vectors/icons/phone.svg') no-repeat center;
    }
    &--map {
      mask: url('~assets/vectors/icons/map.svg') no-repeat center;
    }
    &--email {
      mask: url('~assets/vectors/icons/email.svg') no-repeat center;
    }
    &--mobile {
      mask: url('~assets/vectors/icons/mobile.svg') no-repeat center;
    }
    &--globe {
      mask: url('~assets/vectors/icons/globe.svg') no-repeat center;
    }
    &--microchip {
      mask: url('~assets/vectors/icons/microchip.svg') no-repeat center;
    }
    &--pencil {
      mask: url('~assets/vectors/icons/pencil.svg') no-repeat center;
    }
    &--close {
      mask: url('~assets/vectors/icons/close.svg') no-repeat center;
    }

    &--twitter {
      mask: url('~assets/vectors/icons/twitter.svg') no-repeat center;
    }
    &--facebook {
      mask: url('~assets/vectors/icons/facebook.svg') no-repeat center;
    }
    &--instagram {
      mask: url('~assets/vectors/icons/instagram.svg') no-repeat center;
    }
    &--github {
      mask: url('~assets/vectors/icons/github.svg') no-repeat center;
    }
    &--linkedin {
      mask: url('~assets/vectors/icons/linkedin.svg') no-repeat center;
    }
    &--arrow-right {
      mask: url('~assets/vectors/icons/arrow-right.svg') no-repeat center;
    }
  }
}
</style>
