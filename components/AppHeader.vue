<template>
  <div class="header-wrapper">
    <header class="header">
      <a class="header-logo" href="/" @click="playSound"></a>

      <a ref="headerIconHome" class="header-link-icon home" href="/" @click="playSound" content="Go to Homepage" v-tippy></a>

      <a ref="headerIconLinkedIn" class="header-link-icon" href="https://www.linkedin.com/in/bob-arndt/" @click="playSound" target="_blank" content="View LinkedIn Profile" v-tippy></a>

      <a ref="headerIconGithub" class="header-link-icon" href="https://github.com/bobarndt/Bob-Arndt" @click="playSound" target="_blank" content="View Code on GitHub" v-tippy></a>

      <div ref="hamburger" class="hamburger" role="switch" aria-label="menu" @click="toggleMenuDisplay" content="Open Menu" v-tippy>
        <div class="hamburger-container">
          <div class="hamburger-inner"></div>
          <div class="hamburger-hidden"></div>
        </div>
      </div>

      <button ref="headerIconThemeSwitch" class="header-theme-switch" @click="switchTheme" role="switch" aria-label="light/dark mode" content="Light/Dark Theme" v-tippy></button>
    </header>

    <audio ref="headerAudioOpen" class="header-link-audio-open" src="/audio/menu-open.mp3"></audio>
    <audio ref="headerAudioClose" class="header-link-audio-close" src="/audio/menu-close.mp3"></audio>
    <audio ref="headerThemeSwitchAudioLight" class="header-theme-switch-audio-light" src="/audio/light-on.mp3"></audio>
    <audio ref="headerThemeSwitchAudioDark" class="header-theme-switch-audio-dark" src="/audio/light-off.mp3"></audio>
    <audio ref="headerLinkAudio" class="header-link-audio" src="/audio/light-on.mp3"></audio>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        audio: ``,
        displayedTheme: ``,
        headerIconHome: ``,
        headerIconGithub: ``,
        headerIconLinkedIn: ``,
        headerIconThemeSwitch: ``,
        githubSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>`,
        homeSVG: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M13,18h-2v-2h2V18z M15,14H9v6h6V14L15,14z M19,9.3L19,9.3V4h-3v2.6v0L12,3L2,12h3l7-6.31L19,12h3L19,9.3z"/></svg>`,
        linkedinSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>`,
        moonSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" /></svg>`,
        preferredTheme: ``,
        root: ``,
        storedTheme: ``,
        systemTheme: ``,
        sunSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" /></svg>`
      }
    },
    methods: {
      initialize() {
        this.loadIcons();
        this.loadTheme();
        this.toggleHamburgerState();
      },
      loadIcons() {
        this.$refs.headerIconHome.innerHTML = this.homeSVG;
        this.$refs.headerIconGithub.innerHTML = this.githubSVG;
        this.$refs.headerIconLinkedIn.innerHTML = this.linkedinSVG;
      },
      loadTheme() {
        this.headerIconThemeSwitch = this.$refs.headerIconThemeSwitch;

        this.storedTheme = localStorage.getItem(`bob-arndt-theme`);

        this.systemTheme = window
          .matchMedia(`(prefers-color-scheme: dark)`)
          .matches ? `dark` : `light`;

        this.preferredTheme = this.storedTheme || this.systemTheme;

        if (this.preferredTheme === `light`) {
          this.headerIconThemeSwitch.innerHTML = this.moonSVG;
          this.audio = this.$refs.headerThemeSwitchAudioLight;
        } else {
          this.headerIconThemeSwitch.innerHTML = this.sunSVG;
          this.audio = this.$refs.headerThemeSwitchAudioDark;
        }

        this.root = document.querySelector(`:root`);
        this.root.setAttribute(`color-scheme`, this.preferredTheme);

        localStorage.setItem(`bob-arndt-theme`, this.preferredTheme);
      },
      playSound() {
        this.audio = this.$refs.headerLinkAudio;
        this.audio.currentTime = 0;
        this.audio.play();
      },
      switchTheme() {
        if (this.preferredTheme === `light`) {
          this.preferredTheme = `dark`;
          this.headerIconThemeSwitch.innerHTML = this.sunSVG;
          this.audio = this.$refs.headerThemeSwitchAudioLight;
        } else {
          this.preferredTheme = `light`;
          this.headerIconThemeSwitch.innerHTML = this.moonSVG;
          this.audio = this.$refs.headerThemeSwitchAudioDark;
        }

        this.root.setAttribute(`color-scheme`, this.preferredTheme);
        localStorage.setItem(`bob-arndt-theme`, this.preferredTheme);

        this.audio.currentTime = 0;
        this.audio.play();
      },
      toggleHamburgerState() {
        this.$refs.hamburger
          .addEventListener(`click`, event => {
            event.currentTarget.classList.toggle(`is-active`);
          })
      },
      toggleMenuDisplay() {
        const menu = document.querySelector(`.menu-wrapper`);

        if (!menu.classList.contains(`menu-hidden`)) {
          this.audio = this.$refs.headerAudioClose;
        } else {
          this.audio = this.$refs.headerAudioOpen;
        }

        menu.classList.toggle(`menu-hidden`);

        this.audio.currentTime = 0;
        this.audio.play();
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

  .header-link-icon {
    color: var(--color-header-link-icon);
    display: inline-block;
    height: 2.8rem;
    margin-right: 4rem;
    margin-top: .5rem;
    width: 2.8rem;

    &:focus,
    &:hover {
      animation: pulse-icon 2s linear 2;
      color: var(--color-header-link-icon-hover);
      filter: var(--filter-header-link-icon-shadow);
      outline: none;
    }

    &:last-of-type {
      margin-right: 2rem;
    }

    @media only screen and (min-width: 441px) and (max-width: 640px) {
      margin-right: 2rem;

      &:last-of-type {
        margin-right: .4rem;
      }
    }

    @media only screen and (max-width: 440px) {
      &.home {
        display: none;
      }
    }
  }

  .header-logo {
    background-image: var(--header-logo-background-image);
    height: 4.2rem;
    margin-right: auto;
    width: 12rem;

    &:focus {
      outline: none;
    }
  }

  .header-theme-switch {
    background-color: transparent;
    color: var(--color-header-theme-switch);
    cursor: pointer;
    height: 2.5rem;
    transition: color 0.25s ease-in;
    width: 2.5rem;

    &:focus,
    &:hover {
      animation: pulse-icon 2s linear 2;
      color: var(--color-header-theme-switch-hover);
      filter: var(--filter-header-link-icon-shadow);
      outline: none;
    }
  }

  .header-wrapper {
    align-items: center;
    background-color: var(--color-header-background);
    display: flex;
    box-shadow: (var(--box-shadow-header));
    height: 6.4rem;
    position: fixed;
    top: 0;
    width: var(--width-full);
    z-index: 100;
  }
</style>
