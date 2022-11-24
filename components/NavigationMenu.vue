<template>
  <div class="menu-wrapper menu-hidden">
    <div class="menu-content">

      <nav class="menu-nav">
        <ul class="menu-list">
          <div class="menu-item-wrapper">
            <li class="menu-item"><a class="menu-link" href="/"><ion-icon src="/images/home.svg"></ion-icon><span data-content="Home">Home</span></a></li>
          </div>
          <div class="menu-item-wrapper">
            <li class="menu-item"><a class="menu-link" href="/about"><ion-icon src="/images/about-me.svg"></ion-icon><span data-content="About Me">About Me</span></a></li>
          </div>
          <div class="menu-item-wrapper">
            <li class="menu-item"><a class="menu-link" href="/resume"><ion-icon src="/images/resume.svg"></ion-icon><span data-content="Resume">Resume</span></a></li>
          </div>
          <div class="menu-item-wrapper">
            <li class="menu-item"><a class="menu-link" href="/contact"><ion-icon src="/images/contact-me.svg"></ion-icon><span data-content="Contact Me">Contact Me</span></a></li>
          </div>
        </ul>
      </nav>

      <section class="menu-tech-stack desktop">
        <p>Built with <ion-icon src="/images/nuxt3.svg"></ion-icon>, <ion-icon src="/images/vue3.svg"></ion-icon>, <ion-icon src="/images/sass.svg"></ion-icon>, and <ion-icon src="/images/vite.svg"></ion-icon> in <ion-icon src="/images/vscode.svg"></ion-icon>. Deployed on <ion-icon src="/images/netlify.svg"></ion-icon>. No React. No Tailwind. No gradients. No apology.</p>
      </section>

      <section class="menu-tech-stack tablet">
        <p>Built with <ion-icon src="/images/nuxt3.svg"></ion-icon>, <ion-icon src="/images/vue3.svg"></ion-icon>, <ion-icon src="/images/sass.svg"></ion-icon>, and <ion-icon src="/images/vite.svg"></ion-icon> in <ion-icon src="/images/vscode.svg"></ion-icon>. Deployed on <ion-icon src="/images/netlify.svg"></ion-icon>.</p>
        <p>No React. No Tailwind. No gradients. No apology.</p>
      </section>

      <section class="menu-tech-stack phone">
        <p>Built with <ion-icon src="/images/nuxt3.svg"></ion-icon>, <ion-icon src="/images/vue3.svg"></ion-icon>, <ion-icon src="/images/sass.svg"></ion-icon>, and <ion-icon src="/images/vite.svg"></ion-icon> in <ion-icon src="/images/vscode.svg"></ion-icon>.</p>
        <p>Deployed on <ion-icon src="/images/netlify.svg"></ion-icon>.</p>
        <p>No React. No Tailwind. No gradients. No apology.</p>
      </section>

    </div>
  </div>
</template>

<script>
  export default {
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
            menuItem.classList.add("active");
          }
        });
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
    grid-template-rows: 1fr 15rem;
    height: 100%;
    max-width: var(--max-width-site);
    opacity: 0.9;
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
    justify-content: start;
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
    margin: 8rem auto 0;
  }

  .menu-tech-stack {
    background-color: var(--color-indigo-300);
    border: .75rem solid var(--color-menu-tech-stack-border);
    border-radius: 1.5rem;
    font-size: var(--font-size-xxxsmall);
    font-weight: var(--font-weight-xbold);
    letter-spacing: var(--letter-spacing-xxxwide);
    margin: 0 auto 6rem;
    text-align: center;
    width: 85%;

    p {
      color: var(--color-slate-900);
      line-height: var(--line-height-base);
      padding: 1rem 0;
    }

    ion-icon {
      display: inline-block;
      font-size: 1.8rem;
      margin-bottom: -.5rem;
      width: 2.2rem;
    }

    &.tablet,
    &.phone {
      display: none;
    }

    @media (max-width: 860px) {
      &.desktop,
      &.phone {
        display: none;
      }
      &.tablet {
        display: block;
        margin: 0 auto 8rem;
        width: 95%;

        p {
          line-height: var(--line-height-default);
          padding-top: 1rem;

          &:last-of-type {
            padding-bottom: 1rem;
            padding-top: .25rem;
          }
        }
      }
    }

    @media (max-width: 640px) {
      &.tablet {
        margin: 0 auto 14rem;
      }
    }

    @media (max-width: 420px) {
      &.desktop,
      &.tablet {
        display: none;
      }
      &.phone {
        display: block;
        margin-bottom: 12rem;
        width: 95%;

        p {
          line-height: var(--line-height-default);
          padding: .75rem 0;

          &:nth-of-type(2) {
            padding-bottom: 1rem;
            padding-top: .1rem;
          }

          &:last-of-type {
            padding-bottom: 1rem;
            padding-top: .25rem;
          }
        }
      }
    }
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
