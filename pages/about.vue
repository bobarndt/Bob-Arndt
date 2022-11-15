<template>
  <div class="page-wrapper">
    <div class="hero-wrapper"><!-- Begin .hero div -->
      <div class="hero-animated-background-image">
        <img src="/images/treeline.min.jpg" alt="Bob Arndt | Web design and development professional in Dallas, Texas, USA">
      </div>

      <div class="hero-content">
          <div class="hero-title-wrapper">
            <h1 class="hero-title">About Me</h1>
            <h1 class="hero-title-overlay">
              <span>A</span>
              <span>b</span>
              <span>o</span>
              <span>u</span>
              <span>t</span>
              <span>&nbsp;</span>
              <span>M</span>
              <span>e</span>
            </h1>
          </div>
        </div>
    </div><!-- End .hero div -->

    <main class="main">
      <p class="main-text">Software development professional with over 20 years industry experience blending strong creative and technical skills. 15 years in the design and development of web sites and web applications for corporate, institutional, professional and individual clients. Adept designer with the skills to fashion clear and compelling user experiences. Strengths encompass both coding and graphic design resulting in function-rich, responsive, visually appealing sites that convey substance and professionalism.</p>
      <p class="main-text">No Facebook. No Instagram. No Twitter. No pre-natal murder. No climate change. No foreign invasion. No LGBT. No Fauci. No Gates. No WHO. No COVID. No vaccination. No mask. No cancel. No woke. No Antifa. No Stalinism. No Democrats. No Nancy. No Joe. No Bernie. No Beto. No UN. No FBI. No DOJ. No CRT. No BLM. No CNN. No MSM. No NPR. No PBS. No NFL. No NBA. No MLB. No ESPN. No Amazon. No Starbucks. No Disney. No apology.</p>
      <p class="main-text">Ultra MAGA. NRA. Re-fund the police. Finish the wall. No compromise. DeSantis 2024. God bless America. No apology.</p>
      <p class="main-text">Built with Nuxt3/Vue3, Sass, and Vite in VSCode. Deployed on Netlify. No React. No Tailwind. No gradients. No apology.</p>
    </main>
  </div>
</template>

<style scoped lang="scss">
  .hero-title-overlay {
    span:nth-child(1) {
      animation: hero-title-fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(2) {
      animation: hero-title-fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(3) {
      animation: hero-title-fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(4) {
      animation: hero-title-fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(5) {
      animation: hero-title-fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(6) {
      animation: hero-title-fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(7) {
      animation: hero-title-fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(8) {
      animation: hero-title-fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }
  }

  .hero-title-wrapper {
    border: var(--border-indigo);
  }
</style>
