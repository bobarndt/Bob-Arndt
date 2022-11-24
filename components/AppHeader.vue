<template>
  <div class="header-wrapper">
    <header class="header">
      <a class="header-logo" href="/"></a>

      <a class="header-social-link-icon" href="https://www.linkedin.com/in/bob-arndt/" target="_blank"><ion-icon class="linkedin" name="logo-linkedin"></ion-icon></a>

      <a class="header-social-link-icon github" href="https://github.com/bobarndt/Bob-Arndt" target="_blank"><ion-icon class="github" name="logo-github"></ion-icon></a>

      <div class="hamburger" role="switch" aria-label="menu" @click="toggleMenuDisplay">
        <div class="hamburger-container">
          <div class="hamburger-inner"></div>
          <div class="hamburger-hidden"></div>
        </div>
      </div>

      <button class="header-theme-switch" @click="switchTheme" role="switch" aria-label="light/dark mode" content="Light/Dark Mode"></button>
    </header>

    <audio class="header-menu-audio-open" src="/audio/menu-open.mp3"></audio>
    <audio class="header-menu-audio-close" src="/audio/menu-close.mp3"></audio>
    <audio class="header-theme-switch-audio-light" src="/audio/light-on.mp3"></audio>
    <audio class="header-theme-switch-audio-dark" src="/audio/light-off.mp3"></audio>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        soundClip: '',
        displayedTheme: '',
        headerThemeSwitch: '',
        moonSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
          </svg>`,
        preferredTheme: '',
        root: '',
        storedTheme: '',
        systemTheme: '',
        sunSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>`
      }
    },
    methods: {
      initialize() {
        this.loadTheme();
        this.toggleHamburgerState();
      },
      loadTheme() {
        this.headerThemeSwitch = document.querySelector('.header-theme-switch');

        this.storedTheme = localStorage.getItem('bob-arndt-theme');

        this.systemTheme = window
          .matchMedia('(prefers-color-scheme: dark)')
          .matches ? 'dark' : 'light';

        this.preferredTheme = this.storedTheme || this.systemTheme;

        if (this.preferredTheme === 'light') {
          this.headerThemeSwitch.innerHTML = this.moonSVG;
          this.audio = document.querySelector('.header-theme-switch-audio-on');
        } else {
          this.headerThemeSwitch.innerHTML = this.sunSVG;
          this.audio = document.querySelector('.header-theme-switch-audio-off');
        }

        this.root = document.querySelector(':root');
        this.root.setAttribute('color-scheme', this.preferredTheme);

        localStorage.setItem('bob-arndt-theme', this.preferredTheme);
      },
      switchTheme() {
        if (this.preferredTheme === 'light') {
          this.preferredTheme = 'dark';
          this.headerThemeSwitch.innerHTML = this.sunSVG;
          this.soundClip = document.querySelector('.header-theme-switch-audio-light');
        } else {
          this.preferredTheme = 'light';
          this.headerThemeSwitch.innerHTML = this.moonSVG;
          this.soundClip = document.querySelector('.header-theme-switch-audio-dark');
        }

        this.root.setAttribute('color-scheme', this.preferredTheme);
        localStorage.setItem('bob-arndt-theme', this.preferredTheme);

        this.soundClip.currentTime = 0;
        this.soundClip.play();
      },
      toggleHamburgerState() {
        document.querySelector('.hamburger')
          .addEventListener('click', event => {
            event.currentTarget.classList.toggle('is-active');
          })
      },
      toggleMenuDisplay() {
        const menu = document.querySelector('.menu-wrapper');

        if (!menu.classList.contains('menu-hidden')) {
          this.soundClip = document.querySelector('.header-menu-audio-close');
        } else {
          this.soundClip = document.querySelector('.header-menu-audio-open');
        }

        menu.classList.toggle('menu-hidden');

        this.soundClip.currentTime = 0;
        this.soundClip.play();
      }
    },
    mounted() {
      this.initialize();
    }
  }
</script>

<style scoped lang="scss">
  .header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: var(--max-width-site);
    padding: 0 3.2rem;
    position: relative;
    width: var(--width-full);
  }

  .header-logo {
    background-image: var(--header-logo-background-image);
    height: 4.2rem;
    margin-right: auto;
    width: 12rem;
  }

  .header-social-link-icon {
    display: inline-block;
    height: 2.8rem;
    margin-right: 4rem;
    width: 2.8rem;

    &:last-of-type {
      margin-right: 2rem;
    }

    @media (max-width: 640px) {
      margin-right: 2rem;

      &:last-of-type {
        margin-right: .4rem;
      }
    }

    @media (max-width: 440px) {
      &.home {
        display: none;
      }
    }
  }

  .header-theme-switch {
    background-color: transparent;
    color: var(--color-azure-600);
    cursor: pointer;
    height: 2.5rem;
    transition: color 0.25s ease-in;
    width: 2.5rem;

    &:hover {
      animation: pulse-icon 2s linear 2;
      color: var(--color-header-theme-switch);
    }
  }

  .header-wrapper {
    align-items: center;
    background-color: var(--color-header-background);
    display: flex;
    box-shadow: (var(--drop-shadow-header));
    height: 6.4rem;
    position: fixed;
    top: 0;
    width: var(--width-full);
    z-index: 10;
  }

  ion-icon {
    color: var(--color-header-menu-icon);
    font-size: 2.2rem;
    margin-top: .25rem;

    &:hover {
      animation: pulse-icon 2s ease-in-out 2;
      color: var(--color-header-menu-icon-hover);
    }
  }
</style>
