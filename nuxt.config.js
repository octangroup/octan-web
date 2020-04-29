export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Octan Group',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Octan Group is a full-stack software development company based in Rwanda. The team primarily works for clients in Europe and North America and has experience in the fashion, travel, education, healthcare and financial services industries. Octan also plays an active role in shaping the Rwandan tech scene by spearheading peer-mentoring efforts and community-driven open source projects.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'software developers in rwanda, software developers, websites in rwanda, octan group, octan grp, Octan ltd, octan limited, mobile application in rwanda, mobile application development, web development in rwanda, web development, app development in rwanda, IT in rwanda, websites, app development, mobile development, ios development, android development, windows software development, ios development in rwanda, android development in rwanda, windows software development in rwanda, octan rwanda, octan grp rwanda, octan group rwanda, tech, technology, company, rwanda, rails, ruby, vue js, vue.js, php, laravel, lumen, shopify, wordpress, iot, javascript, kotlin, java, react native, blockchain, bpo, outsourcing, RasperryPi, rasperry pi, software testing, smart contracts, advertising, communication design, concept, corporate design,  corporate identity,  crypto,  digital,  digital design,  editorial design, exhibition design, graphic design, interaction design, new media, screen design, type design, typography, visual communication, web design, web development, freelancers, developers'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/styles/app.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'animate.css/animate.css',
    '~/static/assets/fonts/_flaticon.css',
    '~/static/assets/fonts/flaticonV2/flaticon.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/anime.js',
    '~/plugins/scrollTo.js',
    { src: '~/plugins/aos', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    'nuxt-purgecss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-responsive-loader',
    'vue-scrollto/nuxt'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  purgeCSS: {
    css: ['~/styles/app.scss']
  }
}
