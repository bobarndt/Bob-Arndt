<template>
  <div class="page-wrapper"><!-- Begin .page-wrapper div -->
    <div class="hero"><!-- Begin .hero div -->
      <div class="hero-animated-background-image">
        <img src="/images/treeline.min.jpg" alt="Bob Arndt | Web design and development professional in Dallas, Texas, USA">
      </div>

      <div class="hero-content">
        <div class="hero-greeting-wrapper">
          <h1 class="hero-greeting">Hi, I'm Bob Arndt</h1>
        </div>

        <div class="hero-profile">
          <p class="hero-profile-text">Software development professional with over 20 years industry experience blending strong creative and technical skills. 15 years in the design and development of web sites and web applications for corporate, institutional, professional and individual clients. Adept designer with the skills to fashion clear and compelling user experiences. Strengths encompass both coding and graphic design resulting in function-rich, responsive, visually appealing sites that convey substance and professionalism.</p>
        </div>
      </div>
    </div><!-- End .hero div -->

    <main class="main">
      <p class="main-text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
      <p class="main-text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
      <p class="main-text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
      <p class="main-text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
    </main>
  </div><!-- End .page-wrapper div -->
</template>

<script></script>

<style scoped lang="scss">
  .hero {
    background: transparent;
    margin-top: 6.4rem;
    max-width: var(--max-width-site);
    overflow: hidden;
    position: relative;
  }

  .hero-animated-background-image img {
    animation: hero-background-image 30s infinite;
    height: 100%;
    position: absolute;
    width: 100%;

    @media (max-width: 56rem) {
      animation: none;
    }
  }

  .hero-content {
    padding: 4rem 3.2rem 2.4rem;
  }

  .hero-greeting {
    color: var(--color-indigo-500);
    font-size: 7.2rem;
    font-weight: var(--font-weight-black);
    letter-spacing: var(--letter-spacing-xxwide);
    text-align: center;
    text-shadow: var(--text-shadow);
  }

  .hero-greeting-wrapper {
    background-color: var(--color-black);
    backdrop-filter: var(--backdrop-blur);
    border: var(--border-indigo);
    border-radius: var(--border-radius);
    box-shadow: var(--drop-shadow-dark);
    margin-bottom: 3.2rem;
    margin-top: 16rem;
    opacity: 0.7;
    padding: 4.8rem 3.2rem;
  }

  .hero-profile {
    background-color: var(--color-black);
    backdrop-filter: var(--backdrop-blur);
    border: var(--border-indigo);
    border-radius: var(--border-radius);
    box-shadow: var(--drop-shadow-dark);
    margin-bottom: 3.2rem;
    margin-top: 3.2rem;
    opacity: 0.7;
    padding: 3.2rem;
  }

  .hero-profile-text {
    color: var(--color-slate-200);
    font-size: var(--font-size-medium);
    font-style: var(--font-style-italic);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wide);
    line-height: 3.75rem;
    text-shadow: var(--text-shadow);
  }

  .page-wrapper {
    padding-top: 0;
  }
</style>
