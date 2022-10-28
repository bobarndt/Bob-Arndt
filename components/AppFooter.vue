<template>
  <div class="footer-wrapper"><!-- Begin .footer-wrapper div -->
    <footer class="footer">
      <img class="footer-logo" src="/images/Arndt-logo-white.svg" alt="Bob Arndt logo" width="76">
      <span class="footer-copyright">© 2022 REAlizations, Inc. All rights reserved.</span>
    </footer>
  </div><!-- End .footer-wrapper div -->
</template>

<script></script>

<style scoped lang="scss">
  .footer {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: var(--max-width-site);
    padding: 0 3.2rem;
    width: var(--width-full);

    @media (max-width: 40em) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .footer-copyright {
    color: var(--color-footer-text);
    font-size: var(--font-size-xxxsmall);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-xwide);

    @media (max-width: 40em) {
      font-size: var(--font-size-xxsmall);
      margin-top: 1rem;
    }
  }

  .footer-copyright,
  .footer-logo {
    display: block;
  }

  .footer-wrapper {
    align-items: center;
    background-color: var(--color-footer-background);
    bottom: 0;
    display: flex;
    height: 4.8rem;
    position: fixed;
    width: var(--width-full);

    @media (max-width: 40em) {
      height: 8rem;
    }
  }
</style>
