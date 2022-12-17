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
      <section>
        <div class="composition">
          <a href="https://www.youtube.com/watch?v=p8zamUoteG4&list=OLAK5uy_lE2wWe8dAGFUlGyKn0olTL8EVOZADTe-Q" target="_blank"><img src="/images/slipknot.min.jpg" alt="The End, So Far - Slipknot" height="200" width="200" class="composition__photo composition__photo--p1"></a>
          <a href="https://www.youtube.com/watch?v=A7Er5TsQrGg&list=OLAK5uy_nDOHLgoRy4ZQLlz4F1xXuaIFxWjyDxbME" target="_blank"><img src="/images/duran-duran.min.jpg" alt="All You Need Is Now - Duran Duran" height="200" width="200" class="composition__photo composition__photo--p2"></a>
          <a href="https://www.youtube.com/watch?v=ho8iswvcNHU&list=OLAK5uy_lKdzXMXzdHU-LWNcx3HgaFLTiiRAjWKmE&index=1" target="_blank"><img src="/images/joe-jackson.min.jpg" alt="Fool - Joe Jackson" height="200" width="200" class="composition__photo composition__photo--p3"></a>
        </div>
      </section>

      <section>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/gGIap2_tmng?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>

      <!-- <section>
        <figure class="flag-caption">
          <img class="flag" src="images/flag.min.png" alt="American Flag">
          <figcaption>"I pledge allegiance to the flag of the United States of America, and to the republic for which it stands, one nation under God, indivisible, with liberty and justice for all."</figcaption>
        </figure>
      </section> -->

      <section>
        <p class="main-text">No Facebook. No Instagram. No Twitter. No pre-natal murder. No climate change. No foreign invasion. No scamdemic. No COVID. No vaccination. No mask. No Fauci. No Gates. No WHO. No cancel. No woke. No LGBT. No Antifa. No Stalinism. No Democrats. No Nancy. No Joe. No Bernie. No Beto. No ACLU. No UN. No FBI. No DOJ. No CRT. No BLM. No CNN. No MSM. No NPR. No PBS. No NFL. No NBA. No MLB. No ESPN. No Amazon. No Starbucks. No Disney. No apology.</p>
        <p class="main-text">Ultra MAGA. NRA. Re-fund the police. Finish the wall. No compromise. DeSantis 2024. God bless America. No apology.</p>
      </section>
    </main>
  </div>
</template>

<style scoped lang="scss">
  img {
    max-width: 100%;
    height: auto;
  }

  .flag {
    block-size: auto;
    filter: drop-shadow(1rem 1rem .6rem hsla(0deg, 0%, 0%, 0.3));
    max-inline-size: 100%;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .flag-caption {
    color: var(--color-pledge-text);
    font-family: var(--font-family-serif);
    font-size: var(--font-size-xxlarge);
    font-style: italic;
    font-weight: var(--font-weight-black);
    letter-spacing: .075rem;
    line-height: 2;
  }

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

  .main-text {
    @media (max-width: 640px) {
      &:last-of-type {
        margin-bottom: 7rem;
      }
    }
  }
</style>
