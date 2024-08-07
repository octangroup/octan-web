export default {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Octan Group - Software Engineering',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Octan Group is a full-stack software development company based in Rwanda. The team primarily works for clients in Europe and North America and has experience in the fashion, travel, education, healthcare and financial services industries. Octan also plays an active role in shaping the Rwandan tech scene by spearheading peer-mentoring efforts and community-driven open source projects.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'software developers in rwanda, software developers, websites in rwanda, octan group, octan grp, Octan ltd, octan limited, mobile application in rwanda, mobile application development, web development in rwanda, web development, app development in rwanda, IT in rwanda, websites, app development, mobile development, ios development, android development, windows software development, ios development in rwanda, android development in rwanda, windows software development in rwanda, octan rwanda, octan grp rwanda, octan group rwanda, tech, technology, company, rwanda, rails, ruby, vue js, vue.js, php, laravel, lumen, shopify, wordpress, iot, javascript, kotlin, java, react native, blockchain, bpo, outsourcing, RasperryPi, rasperry pi, software testing, smart contracts, advertising, communication design, concept, corporate design,  corporate identity,  crypto,  digital,  digital design,  editorial design, exhibition design, graphic design, interaction design, new media, screen design, type design, typography, visual communication, web design, web development, freelancers, developers',
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#01263F',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@octangrp' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@octangrp' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Octan Group',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Software Engineering',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/og-image.png',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/og-image.png',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Octan Group',
      },
      { hid: 'og:title', name: 'og:title', content: 'Octan Group' },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Software Engineering',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff',
  },
  /*
   ** Global CSS
   */
  css: ['~/styles/app.scss', 'animate.css/animate.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/ogIcon.js',
    '~/plugins/anime.js',
    '~/plugins/scrollTo.js',
    {
      src: '~/plugins/aos',
      ssr: false,
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    [
      'nuxt-purgecss',
      {
        enabled: true,
      },
    ],
    // Doc: https://github.com/nuxt-community/analytics-module
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-170299741-1',
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    // 'nuxt-svg-loader',
    '@nuxtjs/dotenv',
    'nuxt-responsive-loader',
    'vue-scrollto/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    [
      'nuxt-bugsnag',
      {
        config: {
          apiKey: 'c8c5617f28bbe034f937e84d31675eab',
          enabledReleaseStages: ['staging', 'production'],
          reporterOptions: {
            releaseStage: process.env.NODE_ENV,
          },
        },
      },
    ],
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
    extractCSS: true,
    extend(config, ctx) {},
  },
  sitemap: {
    hostname: 'https://octan.group',
    path: '/main-sitemap.xml',
    gzip: true,
    defaults: {
      changefreq: 'monthly',
      priority: 0.5,
      lastmod: new Date(),
    },
    routes: [
      {
        url: '/',
        priority: 1,
      },
      '/team',
      '/works',
    ],
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://octan.group/main-sitemap.xml',
    Disallow: false,
  },
  responsiveLoader: {
    format: 'webp',
    adapter: require('responsive-loader/sharp'),
    sizes: [320, 640, 960, 1200, 1800, 2400],
    placeholder: true,
    placeholderSize: 75,
    quality: 75,
  },
  purgeCSS: {
    whitelist: ['-ml-70%-temp', 'w-70-temp'],
    whitelistPatterns: [/animate$/, /^aos/, /aos$/, /^nuxt/, /^og-icon/],
    whitelistPatternsChildren: [
      /animate$/,
      /^aos/,
      /aos$/,
      /^nuxt/,
      /^og-icon/,
    ],
  },
}
