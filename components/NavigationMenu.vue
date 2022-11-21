<template>
  <div class="menu-wrapper menu-hidden">
    <div class="menu-content">

      <nav class="menu-nav">
        <ul class="menu-list">
          <li class="menu-item"><a class="menu-link" href="/"><span data-content="Home">Home</span></a></li>
          <li class="menu-item"><a class="menu-link" href="/about"><span data-content="About">About</span></a></li>
          <li class="menu-item"><a class="menu-link" href="/resume"><span data-content="Resume">Resume</span></a></li>
          <li class="menu-item"><a class="menu-link" href="/contact"><span data-content="Contact Me">Contact Me</span></a></li>
        </ul>
      </nav>

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
    border: .5rem solid rgba(0, 0, 0, .25);
    display: grid;
    font-size: var(--font-size-xlarge);
    height: 100%;
    max-width: var(--max-width-site);
    opacity: 0.9;
    place-items: center;
    width: 100%;
  }

  .menu-item {
    line-height: var(--line-height-menu-item);

    &.active a span {
        color: var(--color-azure-500);
      }
}

  .menu-link {
    cursor: pointer;
    font-weight: var(--font-weight-xbold);
    letter-spacing: var(--letter-spacing-xxwide);
    position: relative;
    text-decoration: none;
    transition: clip-path 275ms ease;

    &:hover span::before,
    &:focus span::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    span {
      color: var(--color-slate-200);
      display: inline-block;
      position: relative;

      &::before {
        content: attr(data-content);
        clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
        color: var(--color-link-overlay);
        letter-spacing: var(--letter-spacing-xxwide);
        position: absolute;
        text-decoration: underline;
        text-decoration-color: var(--color-link-overlay);
        transition: clip-path 350ms ease;
      }
    }
  }

  .menu-list {
    list-style: none;
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
