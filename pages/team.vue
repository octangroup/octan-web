<template>
  <div class="relative">
    <div class="bg-primary p-0 mt-6 z-50 relative">
      <div class="px-4 text-center py-12 xl:w-50 lg:w-75 w-80  mx-auto">
        <h1
          class="text-accent font-primary my-12 lg:text-3xl sm:text-2xl xs:text-2xl md:text-2xl text-4xl"
        >
          Let's Build A Great Future Together.
        </h1>
        <p
          class="my-0 text-white xl:text-xl lg:text-lg text-base leading-normal"
        >
          We brought together smart, talented thinkers and unleashed their
          combined creativity on the world
        </p>
      </div>
      <div class="relative overflow-hidden p-0">
        <div class="curves-pattern-overlay z-0 p-0 m-0"></div>
        <div
          class="curves-pattern bg-grey-lightest relative z-10 p-0 m-0 border-none"
        ></div>
      </div>
    </div>
    <div class="panel mt-0 py-6 w-85  md:w-95 xs:w-100 sm:w-100 mx-auto">
      <div class="p-8 text-center sm:px-0">
        <TeamMember v-for="(member, i) in members" :key="i" :member="member" />
      </div>
    </div>
  </div>
</template>

<script>
import TeamMember from '~/components/cards/Team'

export default {
  components: {
    TeamMember
  },
  data() {
    return {
      members: [
        {
          avatar: '/img/team/arsy.jpg',
          names: 'Mr Arsene J. Karema',
          position: 'UI & Graphic'
        },
        {
          avatar: '/img/team/yannick.jpg',
          names: 'Mr Yannick Musafiri',
          position: 'Back-End & UI'
        },
        {
          avatar: '/img/team/lewis.jpg',
          names: 'Mr Lewis Nkuranga',
          position: 'Back-End'
        },
        {
          avatar: '/img/team/promesse.jpg',
          names: 'Mr Promesse D. Ishimwe',
          position: 'Back-End'
        },
        {
          avatar: '/img/team/herve.jpg',
          names: 'Mr Herve Ngenzi',
          position: 'Back-End'
        },
        {
          avatar: '/img/team/bobo.jpg',
          names: 'Mr Landry Gahizi',
          position: 'UI, UX & Graphic'
        },
        {
          avatar: '/img/team/derrick.jpg',
          names: 'Mr Derrick Murengezi',
          position: 'Sales'
        }
      ]
    }
  }
}
</script>
