<template>
  <div class="page-wrapper">
    <div class="hero-wrapper"><!-- Begin .hero-wrapper div -->
      <div class="hero-animated-background-image">
        <img src="/images/graffiti.min.jpg" alt="Bob Arndt | Web design and development professional in Dallas, Texas, USA">
      </div>

      <div class="hero-content">
        <div class="hero-title-wrapper">
          <h1 class="hero-title">Contact Me</h1>
          <h1 class="hero-title-overlay">
            <span>C</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
            <span>&nbsp;</span>
            <span>M</span>
            <span>e</span>
          </h1>
        </div>
      </div>
    </div><!-- End .hero-wrapper div -->

    <main class="main">
      <section class="section-form">
        <h1 class="success-message">Your message was received. Thank you!</h1>
      </section>
    </main>
  </div>
</template>

<style scoped lang="scss">
  .hero-title-overlay {
    span:nth-child(1) {
      animation: hero-title-fade-in 1.0s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(2) {
      animation: hero-title-fade-in 1.0s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(3) {
      animation: hero-title-fade-in 1.0s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(4) {
      animation: hero-title-fade-in 1.0s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(5) {
      animation: hero-title-fade-in 1.0s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(6) {
      animation: hero-title-fade-in 1.0s 1.0s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(7) {
      animation: hero-title-fade-in 1.0s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(8) {
      animation: hero-title-fade-in 1.0s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(9) {
      animation: hero-title-fade-in 1.0s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(10) {
      animation: hero-title-fade-in 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }
  }

  .hero-title-wrapper {
    border: var(--border-indigo);
  }

  .main {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .section-form {
    align-items: center;
    background-image: var(--background-image-gradient);
    border-radius: var(--border-radius-large);
    box-shadow: var(--box-shadow-section-background);
    display: flex;
    justify-content: center;
    padding: 4rem 6rem 4rem;
    width: 100%;

    @media only screen and (min-width: 701px) and (max-width: 1000px) {
      margin-bottom: 1rem;
      width: 90%;
    }

    @media only screen and (max-width: 700px) {
      margin-bottom: .5rem;
      padding: 2rem 4rem 4rem;
      width: 100%;
    }
  }

  .success-message {
    color: var(--color-indigo-800);
    font-size: var(--font-size-xxlarge);
    font-style: var(--font-style-italic);
  }
</style>
