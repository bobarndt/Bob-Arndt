<template>
  <footer class="footer-wrapper">
    <div class="footer-row-wrapper-top">
      <div class="footer-row-top">
        <span class="footer-personal-name">Bob Arndt</span>
        <span class="footer-personal-description">Independent web developer in Dallas, Texas, USA</span>
      </div>
    </div>
    <div class="footer-row-wrapper-bottom">
      <div class="footer-row-bottom">
      <div class="footer-photo-wrapper"></div>
      <span class="footer-copyright">© 2023 REAlizations, Inc. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .footer-copyright {
    color: var(--color-footer-text);
    display: inline-block;
    font-weight: var(--font-weight-xbold);
    letter-spacing: var(--letter-spacing-xwide);
    margin-right: 3.2rem;

    @media only screen and (max-width: 665px) {
      margin-right: 1rem;
    }
  }

  .footer-personal-description {
    color: var(--color-slate-700);
    display: inline-block;
    font-size: var(--font-size-xsmall);
    font-weight: var(--font-weight-xbold);
    letter-spacing: var(--letter-spacing-xwide);
    margin-left: 4.5rem;

    @media only screen and (max-width: 700px) {
      display: none;
    }
  }

  .footer-personal-name {
    color: var(--color-indigo-800);
    display: inline-block;
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-xbold);
    letter-spacing: var(--letter-spacing-xwide);
    margin-left: 19rem;

    @media only screen and (max-width: 665px) {
      margin-left: 21.5rem;
    }
  }

  .footer-photo-wrapper {
    background-blend-mode: luminosity;
    background-color: var(--color-indigo-300);
    background-image: url('/images/rea-02.min.jpg');
    border-radius: 50%;
    bottom: 1rem;
    box-shadow: var(--box-shadow-high);
    height: 11rem;
    left: 3.2rem;
    overflow: hidden;
    position: absolute;
    width: 11rem;
    z-index: 70;
  }

  .footer-row-bottom {
    align-items: center;
    display: flex;
    height: 4rem;
    justify-content: flex-end;
    margin: 0 auto;
    max-width: var(--max-width-site);
    position: relative;
  }

  .footer-row-top {
    align-items: center;
    display: flex;
    height: 4rem;
    margin: 0 auto;
    max-width: var(--max-width-site);
  }

  .footer-row-wrapper-bottom {
    background-color: var(--color-indigo-900);
    width: var(--width-full);
  }

  .footer-row-wrapper-top {
    background-color: var(--color-slate-400);
    width: var(--width-full);
  }

  .footer-wrapper {
    bottom: 0;
    height: 8rem;
    position: fixed;
    width: var(--width-full);
    z-index: 70;

    @media only screen and (max-width: 440px) {
      height: 8rem;
    }
  }
</style>
