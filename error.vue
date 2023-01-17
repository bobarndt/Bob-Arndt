<template>
  <Head>
    <Title>Bob Arndt | Something's Wrong!</Title>
  </Head>

  <div id="app-wrapper">
    <AppHeader />
    <div class="page-wrapper">
      <main class="main">
        <section class="error-wrapper">
          <div>
            <span class="error-icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 13.5c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5zM7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zm4.17-10C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.18-12.24l-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06z"/>
              </svg>
            </span>
          </div>

          <div class="error-message">
            <p class="error-status-code">{{ error.statusCode }}</p>
            <p>{{ error.message }}</p>
          </div>

          <div class="error-button-wrapper">
            <a href="/">
              <button class="error-button">
                <span ref="errorButtonIcon" class="error-button-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z"/></svg></span>
                <span class="error-button-text" data-content="Return to Homepage">Return to Homepage</span>
              </button>
            </a>
          </div>
        </section>
      </main>
    </div>
    <AppFooter />
    <NavigationMenu />
  </div>
</template>

<script setup>
  defineProps([`error`]);
</script>

<style lang="scss" scoped>
  .error-button {
    align-items: center;
    background-color: var(--color-error-button);
    border-radius: var(--border-radius-small);
    color: var(--color-slate-400);
    cursor: pointer;
    display: flex;
    gap: 2rem;
    height: 4.6rem;
    justify-content: center;
    margin-bottom: 3.5rem;
    transition: box-shadow 500ms ease, clip-path 275ms ease, transform 500ms ease;
    width: 100%;

    &:hover {
      background-color: var(--color-error-button-hover);
      box-shadow: var(--box-shadow-medium);
      color: var(--color-white);
      outline: none;
      transform: translateY(-.2rem);

      span.error-button-text::before,
      span.error-button-text::before {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
    }

    &:hover .error-button-icon {
      animation: pulse-icon-menu 2s linear 2;
      color: var(--color-white);
    }
  }

  .error-button-text {
    color: var(--color-slate-400);
    display: inline-block;
    font-size: var(--font-size-xsmall);
    font-weight: var(--font-weight-xbold);
    letter-spacing: var(--letter-spacing-xwide);
    text-decoration: none;

    &::before {
      content: attr(data-content);
      clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
      color: var(--color-menu-link-overlay);
      letter-spacing: var(--letter-spacing-xwide);
      position: absolute;
      text-decoration: underline;
      text-decoration-color: var(--color-menu-link-overlay);
      transition: clip-path 350ms ease;
    }

    @media only screen and (max-width: 460px) {
      font-size: var(--font-size-xxsmall);
      gap: .5rem;
    }
  }

  .error-button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 4rem;

    a {
      display: inline-block;
      width: 80%;
    }
  }

  .error-icon {
    color: var(--color-rose-600);
    display: inline-block;
    filter: var(--filter-shadow-medium);

    svg {
      height: 20rem;
      width: 20rem;
    }
  }

  .error-message {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    p {
      color: var(--color-error-message);
      font-family: var(--font-family-sans);
      font-size: var(--font-size-xxlarge);
      font-style: var(--font-style-italic);
      font-weight: var(--font-weight-black);
      letter-spacing: var(--letter-spacing-xxwide);
      line-height: var(--line-height-xtall);
    }

    .error-status-code {
      font-size: var(--font-size-jumbo);
    }
  }

  .error-wrapper {
    background-image: var(--background-image-error-section);
    border-radius: var(--border-radius-large);
    box-shadow: var(--box-shadow-section-background);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    text-align: center;
    width: 100%;
  }

  .main {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 92%;
    justify-content: center;
    margin: 6.4rem 0 10rem;
  }
</style>
