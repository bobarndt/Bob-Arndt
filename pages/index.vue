<template>
  <div class="home-page-wrapper"><!-- Begin .home-page-wrapper div -->
    <div class="hero"><!-- Begin .hero div -->
      <div class="hero-image-wrapper">
        <img class="hero-image" src="/images/REA-1955.jpg" alt="Bob Arndt portrait">
      </div>

      <div class="hero-greeting-wrapper">
        <h1 class="hero-greeting">Hi, I'm Bob Arndt</h1>
      </div>

      <div class="hero-profile">
        <p class="hero-profile-text">Software development professional with over 20 years industry experience blending strong creative and technical skills. 15 years in the design and development of web sites and web applications for corporate, institutional, professional and individual clients. Adept designer with the skills to fashion clear and compelling user experiences. Strengths encompass both coding and graphic design resulting in function-rich, responsive, visually appealing sites that convey substance and professionalism.</p>
      </div>
    </div><!-- End .hero div -->

    <main class="main">
      <p class="main-text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
      <p class="main-text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
      <p class="main-text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
      <p class="main-text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
    </main>
  </div><!-- End .home-page-wrapper div -->
</template>

<script></script>

<style scoped lang="scss">
  .hero {
    background-image: url('/images/macbook.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 2.4rem;
    padding-left: 3.2rem;
    padding-right: 3.2rem;
    width: var(--width-full);
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
    margin-top: 3.2rem;
    opacity: 0.7;
    padding: 4.8rem 3.2rem;
  }

  .hero-image {
    border: var(--border-rose);
    border-radius: var(--border-radius);
    box-shadow: var(--drop-shadow-dark);
    margin-top: 3.2rem;
    width: 24rem;
  }

  .hero-image-wrapper {
    display: flex;
    justify-content: center;
  }

  .hero-profile {
    background-color: var(--color-black);
    backdrop-filter: var(--backdrop-blur);
    border: var(--border-rose);
    border-radius: var(--border-radius);
    box-shadow: var(--drop-shadow-dark);
    margin-bottom: 3.2rem;
    margin-top: 3.2rem;
    opacity: 0.7;
    padding: 3.2rem;
  }

  .hero-profile-text {
    color: var(--color-white);
    font-size: var(--font-size-medium);
    font-style: var(--font-style-italic);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wide);
    line-height: 3.75rem;
    text-shadow: var(--text-shadow);
  }

  .home-page-wrapper {
    margin-left: auto;
    margin-right: auto;
    max-width: var(--max-width-site);
    padding-bottom: 1rem;
    padding-top: 6.4rem;
  }

  .main {
    background-color: var(--color-main-background);
    color: var(--color-main-text);
    padding-bottom: 4rem;
    padding-top: 4rem;
  }

  .main-text {
    font-size: var(--font-size-medium);
    letter-spacing: var(--letter-spacing-normal);
    line-height: 3.4rem;
    padding-left: 3.2rem;
    padding-right: 3.2rem;

    &:not(:first-of-type) {
      margin-top: 2.4rem;
    }

    &:last-of-type {
      margin-bottom: 4rem;
    }
  }
</style>
