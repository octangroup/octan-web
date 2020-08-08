<template>
  <SectionWrapper id="process" theme="light">
    <SectionHeader title="Our Process">
      Our process is one that turns your ideas into amazing products. We take
      pride in each step of our process and want to be the partner that launches
      your next digital solution.
    </SectionHeader>
    <ProcessExpanded :items="items" />
    <ProcessSimplified :items="items" />
  </SectionWrapper>
</template>

<script>
import SectionHeader from '~/components/sections/partials/Header'
import SectionWrapper from '~/components/sections/partials/Wrapper'
import ProcessExpanded from '~/components/sections/partials/process/Expanded'
import ProcessSimplified from '~/components/sections/partials/process/Simplified'

export default {
  name: 'ProcessSection',
  components: {
    SectionHeader,
    SectionWrapper,
    ProcessExpanded,
    ProcessSimplified,
  },
  data() {
    return {
      items: [
        {
          title: 'Gather Information',
          description:
            'Our first step is to gather information through meetings, phone calls and surveys, guiding you each step of the way',
        },
        {
          title: 'Developing A Plan',
          description:
            'We run the information you’ve given us through the filter of vast experience to develop a plan detailing design, development and marketing goals.',
        },
        {
          title: 'Design',
          description:
            'Our designers, using the information gathered, can design exactly what is needed for your project to be successful.',
        },
        {
          title: 'Build',
          description:
            'With your goals in mind, our developers bring the new designs to life. Our team has years of coding experience and specializes in coding for the user.',
        },
        {
          title: 'Test And Deploy…',
          description:
            'After thoroughly testing on a development server, we take it live! Our relationship doesn’t end there. We stay connected. We want to see your success grow and build for years to come..',
        },
      ],
    }
  },
}
</script>
