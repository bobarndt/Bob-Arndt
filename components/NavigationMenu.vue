<template>
  <div class="menu-wrapper menu-hidden">
    <div class="menu-content">

      <nav class="menu-nav">
        <ul class="menu-list">
          <div class="menu-item-wrapper" @click="menuClose">
            <li class="menu-item"><a class="menu-link" href="/"><span ref="menuIconHome" class="menu-icon"></span><span class="menu-link-text" data-content="Home">Home</span></a></li>
          </div>

          <div class="menu-item-wrapper" @click="menuClose">
            <li class="menu-item"><a class="menu-link" href="/about"><span ref="menuIconAboutMe" class="menu-icon"></span><span class="menu-link-text" data-content="About Me">About Me</span></a></li>
          </div>

          <div class="menu-item-wrapper" @click="menuClose">
            <li class="menu-item"><a class="menu-link" href="/resume"><span ref="menuIconResume" class="menu-icon"></span><span class="menu-link-text" data-content="Resume">Resume</span></a></li>
          </div>

          <div class="menu-item-wrapper" @click="menuClose">
            <li class="menu-item"><a class="menu-link" href="/contact"><span ref="menuIconContactMe" class="menu-icon"></span><span class="menu-link-text" data-content="Contact Me">Contact Me</span></a></li>
          </div>
        </ul>
      </nav>

      <audio ref="menuAudioClose" src="/audio/menu-close.mp3"></audio>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        aboutmeSVG: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/></svg>`,
        audio: ``,
        contactmeSVG: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h9v-2H4V8l8,5l8-5v5h2V6C22,4.9,21.1,4,20,4z M12,11L4,6h16L12,11z M19,15l4,4 l-4,4v-3h-4v-2h4V15z"/></g></svg>`,
        homeSVG: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M13,18h-2v-2h2V18z M15,14H9v6h6V14L15,14z M19,9.3L19,9.3V4h-3v2.6v0L12,3L2,12h3l7-6.31L19,12h3L19,9.3z"/></svg>`,
        resumeSVG: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>`,
      }
    },
    methods: {
      highlightCurrentMenuItem() {
        const pageNameFromURL = location.pathname.substring(1) || `home`;

        let menuItems = document.querySelectorAll(`.menu-item`);
        menuItems = new Array(...menuItems);

        menuItems.forEach(menuItem => {
          let pageNameFromMenuItem = menuItem.textContent.toLowerCase();
          let spacePosition = pageNameFromMenuItem.indexOf(` `);

          if (spacePosition > 0) {
            pageNameFromMenuItem = pageNameFromMenuItem.substring(0, spacePosition);
          }

          if (pageNameFromURL === pageNameFromMenuItem) {
            const icon = menuItem.firstChild.firstChild;

            icon.classList.add(`active`);
            menuItem.classList.add(`active`);
          }
        });
      },
      initialize() {
        this.highlightCurrentMenuItem();
        this.loadIcons();
      },
      loadIcons() {
        this.$refs.menuIconAboutMe.innerHTML = this.aboutmeSVG;
        this.$refs.menuIconContactMe.innerHTML = this.contactmeSVG;
        this.$refs.menuIconHome.innerHTML = this.homeSVG;
        this.$refs.menuIconResume.innerHTML = this.resumeSVG;
      },
      menuClose() {
        this.audio = this.$refs.menuAudioClose;
        this.audio.currentTime = 0;
        this.audio.play();
      }
    },
    mounted() {
      this.initialize();
    }
  }
</script>

<style lang="scss" scoped>
  .menu-content {
    background-color: var(--color-menu-background);
    border: .75rem solid rgba(0, 0, 0, .25);
    display: grid;
    font-size: var(--font-size-xlarge);
    grid-template-rows: 1fr;
    height: 100%;
    max-width: var(--max-width-site);
    opacity: 0.92;
    place-items: center;
    width: 100%;
  }

  .menu-icon {
    color: var(--color-slate-400);
    display: inline-block;
    margin-bottom: -.5rem;
    margin-right: 4rem;

    &.active {
      color: var(--color-azure-400);
    }

    &:hover {
      animation: pulse-icon-menu 2s linear 2;
      color: var(--color-white);
    }
  }

  .menu-item {
    &.active {
      .menu-link {
        .menu-link-text {
          color: var(--color-azure-400);
        }
      }
    }
  }

  .menu-item-wrapper {
    align-items: center;
    display: flex;
    height: 4.5rem;
    justify-content: flex-start;
  }

  .menu-link {
    cursor: pointer;
    display: inline-block;
    font-weight: var(--font-weight-xbold);
    letter-spacing: var(--letter-spacing-xxwide);
    text-decoration: none;
    transition: clip-path 275ms ease;

    &:hover span.menu-link-text::before,
    &:focus span.menu-link-text::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    &:hover .menu-icon {
      animation: pulse-icon-menu 2s linear 2;
      color: var(--color-white);
    }

  }

  .menu-link-text {
    color: var(--color-slate-400);
    display: inline-block;

    &::before {
      content: attr(data-content);
      clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
      color: var(--color-menu-link-overlay);
      letter-spacing: var(--letter-spacing-xxwide);
      position: absolute;
      text-decoration: underline;
      text-decoration-color: var(--color-menu-link-overlay);
      transition: clip-path 350ms ease;
    }
  }

  .menu-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
    list-style: none;
    width: 100%;
  }

  .menu-wrapper {
    bottom: 0;
    display: grid;
    left: 0;
    place-items: center;
    position: fixed;
    right: 0;
    top: 0;
  }

  .menu-hidden {
    visibility: hidden;
  }
</style>
