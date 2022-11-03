<template>
  <div class="page-wrapper">
    <div class="hero"><!-- Begin .hero div -->
      <div class="hero-animated-background-image">
        <img src="/images/treeline.min.jpg" alt="Bob Arndt | Web design and development professional in Dallas, Texas, USA">
      </div>

      <div class="hero-content">
          <div class="hero-title-wrapper">
            <h1 class="hero-title">About Me</h1>
          </div>
        </div>
    </div><!-- End .hero div -->

    <main class="main">
      <p class="main-text">No Facebook. No Instagram. No Twitter. No pre-natal murder. No climate change. No foreign invasion. No LGBT. No Fauci. No Gates. No WHO. No COVID. No vaccination. No mask. No cancel. No woke. No Antifa. No Stalinism. No Democrats. No Nancy. No Joe. No Bernie. No Beto. No UN. No FBI. No DOJ. No CRT. No BLM. No CNN. No MSM. No NPR. No PBS. No NFL. No NBA. No MLB. No ESPN. No Amazon. No Starbucks. No Disney. No apology.</p>
      <p class="main-text">Ultra MAGA. NRA. Re-fund the police. Finish the wall. No compromise. Trump 2024. God bless America. No apology.</p>
      <p class="main-text">Built with Nuxt3/Vue3, Sass, and Vite in VSCode. Deployed on Netlify. No React. No Tailwind. No gradients. No apology.</p>
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

  .hero-title {
    color: var(--color-indigo-500);
    font-size: 7.2rem;
    font-weight: var(--font-weight-black);
    letter-spacing: var(--letter-spacing-xxwide);
    text-align: center;
    text-shadow: var(--text-shadow);
  }

  .hero-title-wrapper {
    background-color: var(--color-black);
    backdrop-filter: var(--backdrop-blur);
    border: var(--border-indigo);
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
