<template>
  <button ref="backToTopButton" class="back-to-top-button" content="Back to Top" v-tippy>
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><g><rect fill="none" height="24" width="24"/><path d="M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20 M12,22c5.52,0,10-4.48,10-10c0-5.52-4.48-10-10-10 C6.48,2,2,6.48,2,12C2,17.52,6.48,22,12,22L12,22z M11,12l0,4h2l0-4h3l-4-4l-4,4H11z"/></g></svg>
  </button>
</template>

<script>
  export default {
    methods: {
      backToTopObserverCallback(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.$refs.backToTopButton.classList.add(`show-button`);
          } else {
            this.$refs.backToTopButton.classList.remove(`show-button`);
          }
        });
      },
      handleScroll() {
        const observerOptions = {
          rootMargin: `1000px`
        }
        let backToTopObserver = new IntersectionObserver(this.backToTopObserverCallback, observerOptions);
        backToTopObserver.observe(document.querySelector(`.back-to-top-observer-target`));
      },
      initialize() {
        this.loadPage();
      },
      loadPage() {
        document.addEventListener(`scroll`, this.handleScroll);
        this.$refs.backToTopButton.addEventListener(`click`, this.scrollToTop);
      },
      scrollToTop() {
        document.documentElement.scrollTo({
          top: 0,
          behavior: `smooth`
        });
      },
    },
    mounted() {
      this.initialize();
    }
  }
</script>

<style lang="scss" scoped>
  .back-to-top-button {
    background-color: transparent;
    bottom: 9.25rem;
    color: var(--color-rose-600);
    opacity: 0;
    position: fixed;
    right: 3.25rem;
    transform: translateY(15.5rem);
    transition: transform 1s ease;
    z-index: 50;

    &:hover {
      animation: pulse-icon 2s linear 2;
      opacity: 1;
    }
  }

  .show-button {
    opacity: .6;
    transform: translateY(0);
  }
</style>
