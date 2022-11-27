export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.svg' }
      ],
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'Bob Arndt | Web design and development professional in Dallas, Texas, USA',
          content: 'Bob Arndt | Web design and development professional in Dallas, Texas, USA'
        },
      ],
      script: [
        {
          hid: 'ionicons',
          src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
          defer: true
        }
      ],
      title: 'Bob Arndt | Web design and development professional in Dallas, Texas, USA'
    },
  },

  vue: {
    compilerOptions: {
      // treat all tags starting with 'ion-' as custom elements
      isCustomElement: tag => {
        return tag.startsWith('ion-');
      }
    }
  },

  css: [
    '@/assets/scss/main.scss'
  ]
})
