import seoKeywords from './seo/keywords'

export default {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Octan - Software Engineering',
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
          'Octan is a full-stack software development company based in Rwanda. The team primarily works for clients in Europe and North America and has experience in the fashion, travel, education, healthcare and financial services industries. Octan also plays an active role in shaping the Rwandan tech scene by spearheading peer-mentoring efforts and community-driven open source projects.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: seoKeywords.join(', '),
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
        content: 'Octan',
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
        content: 'Octan',
      },
      { hid: 'og:title', name: 'og:title', content: 'Octan' },
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
    hostname: 'https://octan.rw',
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
    Sitemap: 'https://octan.rw/main-sitemap.xml',
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
