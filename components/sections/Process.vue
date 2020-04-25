<template>
  <SectionWrapper id="process" theme="light">
    <SectionHeader title="Our Process">
      Our process is one that turns your ideas into amazing products. We take
      pride in each step of our process and want to be the partner that launches
      your next digital solution.
    </SectionHeader>
  </SectionWrapper>
</template>

<script>
import SectionHeader from '~/components/sections/partials/Header'
import SectionWrapper from '~/components/sections/partials/Wrapper'
export default {
  name: 'ProcessSection',
  components: {
    SectionHeader,
    SectionWrapper
  },
  data() {
    return {}
  }
}
</script>
