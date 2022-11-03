<template>
  <div class="page-wrapper">
    <div class="hero"><!-- Begin .hero div -->
      <div class="hero-animated-background-image">
        <img src="/images/leaf-water-drops.min.jpg" alt="Bob Arndt | Web design and development professional in Dallas, Texas, USA">
      </div>

      <div class="hero-content">
          <div class="hero-title-wrapper">
            <h1 class="hero-title">Contact Me</h1>
          </div>
        </div>
    </div><!-- End .hero div -->

    <main class="main">
    </main>
  </div>
</template>

<style scoped lang="scss">
  .hero {
    align-items: center;
    background: transparent;
    display: flex;
    justify-content: center;
    margin-top: 6.4rem;
    max-width: var(--max-width-site);
    min-height: 50rem;
    overflow: hidden;
    position: relative;
  }

  .hero-animated-background-image img {
    animation: hero-background-image 30s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    @media (max-width: 56rem) {
      animation: none;
    }
  }

  .hero-content {
    padding: 0 3.2rem;
    width: 100%;
    z-index: 100;
  }

  .hero-greeting {
    color: var(--color-rose-300);
    font-size: 7.2rem;
    font-weight: var(--font-weight-black);
    letter-spacing: var(--letter-spacing-xxwide);
    text-align: center;
    text-shadow: var(--text-shadow);
  }

  .hero-greeting-wrapper {
    background-color: var(--color-black);
    backdrop-filter: var(--backdrop-blur);
    border: var(--border-rose);
    border-radius: var(--border-radius);
    box-shadow: var(--drop-shadow-dark);
    margin-bottom: 3.2rem;
    margin-top: 16rem;
    opacity: 0.7;
    padding: 4.8rem 3.2rem;
  }

  .hero-title {
    color: var(--color-rose-300);
    font-size: 7.2rem;
    font-weight: var(--font-weight-black);
    letter-spacing: var(--letter-spacing-xxwide);
    text-align: center;
    text-shadow: var(--text-shadow);
  }

  .hero-title-wrapper {
    background-color: var(--color-black);
    backdrop-filter: var(--backdrop-blur);
    border: var(--border-rose);
    border-radius: var(--border-radius);
    box-shadow: var(--drop-shadow-dark);
    opacity: 0.7;
    padding: 4.8rem 3.2rem;
    width: 100%;
  }

  .page-wrapper {
    padding-top: 0;
  }
</style>
