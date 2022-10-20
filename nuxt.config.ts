// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Bob Arndt | Web design and development professional in Dallas, Texas, USA',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'Bob Arndt | Web design and development professional in Dallas, Texas, USA',
          content: 'Bob Arndt | Web design and development professional in Dallas, Texas, USA'
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.svg' }
      ]
    },
  },

  css: [
    '@/assets/scss/main.scss'
  ]
})
