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
          name: `Bob Arndt`,
          content: `bobarndt.com is the personal website of front end web developer Bob Arndt of Dallas, Texas, USA, and was developed using JavaScript, HTML5, CSS3, Nuxt3, Vue3, Sass and Vite in VSCode and deployed on Netlify.`
        },
      ],
      noscript: [
        { children: `Unfortunately, JavaScript is disabled in your browser. In order to view this site properly, please enable JavaScript.` }
      ],
      script: [],
      title: `Bob Arndt | Web design and development professional in Dallas, Texas, USA`
    }
  },

  css: [
    `@/assets/scss/main.scss`
  ],

  nitro: {
    preset: 'netlify-static'
  }
})
