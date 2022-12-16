export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: `icon`, type: `image/x-icon`, href: `/images/favicon.svg` }
      ],
      meta: [
        { charset: `utf-8` },
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1`
        },
        {
          name: `Bob Arndt | Web design and development professional in Dallas, Texas, USA`,
          content: `Bob Arndt | Web design and development professional in Dallas, Texas, USA`
        },
      ],
      script: [],
      title: `Bob Arndt | Web design and development professional in Dallas, Texas, USA`
    }
  },

  css: [
    `@/assets/scss/main.scss`
  ]
})
