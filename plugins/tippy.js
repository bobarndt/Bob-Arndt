import VueTippy from 'vue-tippy';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueTippy,
    {
      defaultProps: {
        animation: 'scale',
        delay: 300,
        duration: 300,
        hideOnClick: true,
        placement: 'auto-end',
        role: 'tooltip',
        theme: 'translucent'
      },
      directive: 'tippy'
    }
  );
});
