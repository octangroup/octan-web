<template>
  <div class="relative w-100">
    <div class="bg-primary p-0 z-50 relative">
      <div class="text-center py-12 xl:w-50 lg:w-75 w-80 mx-auto">
        <h1
          class="text-white pt-12 mt-12 lg:text-3xl sm:text-2xl xs:text-2xl md:text-2xl text-4xl font-primary text-accent"
        >
          OUR WORK
        </h1>
        <p class="xl:py-4 xl:text-xl lg:text-lg text-base text-white">
          All our projects have one thing in common: Whatever should be
          communicated, we use the most suitable channels to convey your message
          holistically and to put your brand or your product in the perfect
          light.
        </p>
      </div>
      <div class="relative overflow-hidden p-0">
        <div class="curves-pattern-overlay z-0 p-0 m-0"></div>
        <div
          style="background-color: #f7f7f7"
          class="curves-pattern relative z-10 p-0 m-0 border-none"
        ></div>
      </div>
    </div>
    <ProjectCard
      v-for="(project, i) in projects"
      :key="i"
      :index="i"
      :project="project"
      :row-chunks="project.rowChunks ? project.rowChunks : 3"
    />
  </div>
</template>
<script>
import ProjectCard from '~/components/cards/Project'
export default {
  name: 'Works',
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          url: 'https://folkdays.com/',
          title: 'Folkdays',
          brandColor: '#f7f7f7',
          description:
            'FOLKDAYS is a lifestyle brand for fair trade accessories. We sell products like jewellery, bags and scarves handmade by artisans from around the world.',
          category: 'Shop',
          pictures: [
            {
              ...require('~/assets/img/portfolio/folkdays/main-1.jpg'),
              portait: false,
            },
            {
              ...require('~/assets/img/portfolio/folkdays/main-4.jpg'),
              portait: true,
            },
            {
              ...require('~/assets/img/portfolio/folkdays/main-6.jpg'),
              portait: true,
            },
            {
              ...require('~/assets/img/portfolio/folkdays/main-7.jpg'),
              portait: false,
            },
          ],
          rowChunks: 2,
        },
        {
          url: 'https://www.alusb.com/graduation',
          title: 'ALU',
          description:
            'The ALU School of Business is pioneering a fresh approach to business education, tailored to the needs of a rising Africa,serving as a catalyst for prosperity in Africa by developing African business leaders and entrepreneurs to help make this century The African Century.',
          category: 'School',
          brandColor: '#a33e39',
          textColor: 'white',
          pictures: [
            {
              ...require('~/assets/img/portfolio/alu.jpg'),
              portait: false,
            },
            {
              ...require('~/assets/img/portfolio/alu3.jpg'),
              portait: true,
            },
            {
              ...require('~/assets/img/portfolio/alu2.jpg'),
              portait: true,
            },
            {
              ...require('~/assets/img/portfolio/alu1.jpg'),
              portait: false,
            },
          ],
          rowChunks: 2,
        },
        {
          url: 'https://betahills.com',
          title: 'betahills',
          description:
            'Betahills offers QA software testing services and works with a remote team of women in Rwanda!',
          category: 'Software Testing',
          brandColor: '#f7f7f7',
          pictures: [
            {
              ...require('~/assets/img/portfolio/betahills/main.jpg'),
              portait: false,
            },
            {
              ...require('~/assets/img/portfolio/betahills/mob-2.jpg'),
              portait: true,
            },
            {
              ...require('~/assets/img/portfolio/betahills/mob.jpg'),
              portait: true,
            },
            {
              ...require('~/assets/img/portfolio/betahills/main-2.jpg'),
              portait: false,
            },
          ],
          rowChunks: 2,
        },
        {
          url: 'http://furahapublisher.com/',
          title: 'Furaha Publishers',
          description:
            'Furaha Publishers is a children’s book publishing house registered as a company from September 2014 by Dr. Christine Warugaba. ',
          category: 'Books',
          brandColor: '#aeb5a9',
          textColor: 'white',
          pictures: [
            {
              ...require('~/assets/img/portfolio/furaha-main.jpg'),
              portait: false,
            },
            {
              ...require('~/assets/img/portfolio/furaha-mob-2.jpg'),
              portait: true,
            },
            {
              ...require('~/assets/img/portfolio/furaha-mob-1.jpg'),
              portait: true,
            },
            {
              ...require('~/assets/img/portfolio/furaha-main-2.jpg'),
              portait: false,
            },
          ],
          rowChunks: 2,
        },
        {
          url: 'https://the-knots.com',
          title: 'The Knots',
          description:
            'THE KNOTS is an online platform for unique handmade rugs that are picked with love.',
          category: 'Shop',
          brandColor: '#f7f7f7',
          pictures: [
            {
              ...require('~/assets/img/portfolio/knots/main.jpg'),
              portait: false,
            },
            {
              ...require('~/assets/img/portfolio/knots/main-2.jpg'),
              portait: true,
            },
            {
              ...require('~/assets/img/portfolio/knots/main-1.jpg'),
              portait: false,
            },
            {
              ...require('~/assets/img/portfolio/knots/main-4.jpg'),
              portait: true,
            },
            {
              ...require('~/assets/img/portfolio/knots/main-6.jpg'),
              portait: false,
            },
            {
              ...require('~/assets/img/portfolio/knots/main-5.jpg'),
              portait: false,
            },
          ],
        },
      ],
    }
  },
  head: {
    title: 'Octan Group | Works',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'All our projects have one thing in common: Whatever should be communicated, we use the most suitable channels to convey your message holistically and to put your brand or your product in the perfect light.',
      },
    ],
    noscript: [{ innerHTML: 'Body No Scripts', body: true }],
  },
}
</script>
