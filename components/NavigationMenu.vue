<template>
  <div class="menu-wrapper menu-hidden">
    <div class="menu-content">

      <nav class="menu-nav">
        <ul class="menu-list">
          <div class="menu-item-wrapper" @click="menuClose">
            <li ref="menuItems" class="menu-item"><a class="menu-link" href="/"><ion-icon src="/images/home.svg"></ion-icon><span data-content="Home">Home</span></a></li>
          </div>
          <div class="menu-item-wrapper" @click="menuClose">
            <li ref="menuItems" class="menu-item"><a class="menu-link" href="/about"><ion-icon src="/images/about-me.svg"></ion-icon><span data-content="About Me">About Me</span></a></li>
          </div>
          <div class="menu-item-wrapper" @click="menuClose">
            <li ref="menuItems" class="menu-item"><a class="menu-link" href="/resume"><ion-icon src="/images/resume.svg"></ion-icon><span data-content="Resume">Resume</span></a></li>
          </div>
          <div class="menu-item-wrapper" @click="menuClose">
            <li ref="menuItems" class="menu-item"><a class="menu-link" href="/contact"><ion-icon src="/images/contact-me.svg"></ion-icon><span data-content="Contact Me">Contact Me</span></a></li>
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
        soundClip: ''
      }
    },
    methods: {
      highlightCurrentMenuItem() {
        const pageNameFromURL = location.pathname.substring(1) || 'home';

        let menuItems = document.querySelectorAll(".menu-item");
        menuItems = new Array(...menuItems);

        menuItems.forEach(menuItem => {
          let pageNameFromMenuItem = menuItem.textContent.toLowerCase();
          let spacePosition = pageNameFromMenuItem.indexOf(' ');

          if (spacePosition > 0) {
            pageNameFromMenuItem = pageNameFromMenuItem.substring(0, spacePosition);
          }

          if (pageNameFromURL === pageNameFromMenuItem) {
            const icon = menuItem.firstChild.firstChild;

            icon.classList.add('active');
            menuItem.classList.add("active");
          }
        });
      },
      menuClose() {
        this.soundClip = this.$refs.menuAudioClose;
        this.soundClip.currentTime = 0;
        this.soundClip.play();
      }
    },
    mounted() {
      this.highlightCurrentMenuItem();
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

  .menu-item {
    text-align: center;

    &.active a span {
      color: var(--color-azure-400);
    }
  }

  .menu-item-wrapper {
    align-items: center;
    border-radius: 1.5rem;
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

    &:hover span::before,
    &:focus span::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    &:hover ion-icon {
      animation: pulse-icon-menu 2s linear 2;
      color: var(--color-white);
    }

    span {
      color: var(--color-slate-400);
      display: inline-block;
      position: relative;

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

    ion-icon {
      color: var(--color-slate-400);
      margin-bottom: -.2rem;
      margin-right: 4rem;

      &.active {
        color: var(--color-azure-400);
      }

      &:hover {
        animation: pulse-icon-menu 2s linear 2;
        color: var(--color-white);
      }
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

  .menu-nav {
    margin: 0 auto;
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
