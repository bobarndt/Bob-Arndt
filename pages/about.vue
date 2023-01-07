<template>
  <Head>
    <Title>Bob Arndt | About Me</Title>
  </Head>

  <div class="page-wrapper">
    <BackToTop />
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
      <h2 class="section-title first">Pleased To Meet You</h2>
      <section class="section-wrapper greeting">
        <div class="intro-greeting-wrapper">
          <div class="intro-greeting">
            <h2 class="intro-subheader">I'm Bob Arndt. Thanks for visiting my site.</h2>
            <p class="intro-text">This is not my autobiography. Just &ldquo;stuff&rdquo; that means &ldquo;stuff&rdquo; to me.</p>
            <p class="intro-quote">&ldquo;My girlfriend called up and said &lsquo;come on over, nobody's home.&rsquo; So I went over to her house and sure enough, nobody was home!&rdquo; ~ Rodney Dangerfield</p>
          </div>
          <div class="intro-photo" height="274" width="200"></div>
        </div>
      </section>
      <h2 class="section-title first">What I'm Listening To</h2>
      <section class="section-wrapper music-wrapper">
        <div class="music">
          <div class="music-inner">
            <a class="album joe-jackson" href="https://www.youtube.com/watch?v=ho8iswvcNHU&list=OLAK5uy_lKdzXMXzdHU-LWNcx3HgaFLTiiRAjWKmE&index=1" @mouseover="switchCaption(`joejackson`)" @mouseout="loadDefaultCaption" target="_blank"><img src="/images/joe-jackson.min.jpg" alt="Fool - Joe Jackson" height="250" width="250"></a>
            <a class="album duran-duran" href="https://www.youtube.com/watch?v=A7Er5TsQrGg&list=OLAK5uy_nDOHLgoRy4ZQLlz4F1xXuaIFxWjyDxbME" @mouseover="switchCaption(`duranduran`)" @mouseout="loadDefaultCaption" target="_blank"><img src="/images/duran-duran.min.jpg" alt="All You Need Is Now - Duran Duran" height="250" width="250"></a>
            <a class="album slipknot" href="https://www.youtube.com/watch?v=p8zamUoteG4&list=OLAK5uy_lE2wWe8dAGFUlGyKn0olTL8EVOZADTe-Q" @mouseover="switchCaption(`slipknot`)" @mouseout="loadDefaultCaption" target="_blank"><img src="/images/slipknot.min.jpg" alt="The End, So Far - Slipknot" height="250" width="250"></a>
          </div>
        </div>
        <div ref="compositionCaption" class="music-caption"></div>
      </section>

      <h2 class="section-title">Too Funny To Not Share</h2>
      <section class="video-wrapper">
        <div class="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gGIap2_tmng?rel=0&iv_load_policy=3&fs=0&disablekb=1" title="Mike Leach on wedding planning" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <div ref="videoCaption" class="video-caption"><p>Wedding planning advice from an unlikely source, Mike Leach (March 9, 1961 – December 12, 2022), head football coach at Mississippi State</p>
          <p>&ldquo;He truly did invest in other people. And it's a great reminder for us all. Rest in peace, my friend. There will never be another one like you.&rdquo; ~ Lincoln Riley, head football coach at the University of Southern California</p>
        </div>
      </section>

      <h2 class="section-title">I Pledge Allegiance . . .</h2>
      <section class="pledge-wrapper">
        <p class="pledge-text">I pledge allegiance to the flag of the United States of America, and to the republic for which it stands, one nation under God, indivisible, with liberty and justice for all.</p>
      </section>

      <h2 class="section-title">The Truth About &ldquo;Democracy&rdquo;</h2>
      <section class="section-wrapper back-to-top-observer-target">
        <p class="section-text">&ldquo;A democracy cannot exist as a permanent form of government. It can only exist until the voters discover that they can vote themselves largesse from the public treasury. From that moment on, the majority always votes for the candidates promising the most benefits from the public treasury with the result that a democracy always collapses over loose fiscal policy, always followed by a dictatorship. The average age of the world's greatest civilizations has been 200 years. These nations have progressed through this sequence: From bondage to spiritual faith; From spiritual faith to great courage; From courage to liberty; From liberty to abundance; From abundance to selfishness; From selfishness to apathy; From apathy to dependence; From dependence back into bondage.&rdquo; ~ Alexander Tytler</p>
        <p class="section-text">&ldquo;This [the U.S. Constitution] is likely to be administered for a course of years and then end in despotism . . . when the people shall become so corrupted as to need despotic government, being incapable of any other.&rdquo; ~ Benjamin Franklin</p>
      </section>

      <a href="https://rearndt.netlify.app" target="_blank">
        <button class="cta-button">
          <span ref="ctaButtonIcon" class="cta-button-icon"></span>
          <span class="cta-button-text" data-content="View My Personal Website From 2003">View My Personal Website From 2003</span>
        </button>
      </a>

    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        externalLinkSVG: `<svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>`,
        innerHTMLSlipknot: `<span style="color: hsl(330, 81%, 49%)">The End, So Far</span> is the seventh studio album by American heavy metal band <span  style="color: hsl(330, 81%, 49%)">Slipknot</span>, released on September 30, 2022, by Roadrunner Records. This is the band's final album to be released through Roadrunner, whom the band signed with in 1998. Click the album cover to listen on YouTube.`,
        innerHTMLDuranDuran: `<span  style="color: hsl(330, 81%, 49%)">All You Need Is Now</span> is the thirteenth studio album by English new wave band <span  style="color: hsl(330, 81%, 49%)">Duran Duran</span>. Produced by Mark Ronson, a truncated version of the album was released digitally on 21 December 2010.  Click the album cover to listen on YouTube.`,
        innerHTMLJoeJackson: `<span  style="color: hsl(330, 81%, 49%)">Fool</span> is the 20th studio album by British singer-songwriter <span  style="color: hsl(330, 81%, 49%)">Joe Jackson</span>. Recorded the day after the end of his Fast Forward tour at the Tonic Room Studios in Boise, Idaho. Click the album cover to listen on YouTube.`,
        websiteSVG: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><path d="M20,4H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M4,9h10.5v3.5H4V9z M4,14.5 h10.5V18L4,18V14.5z M20,18l-3.5,0V9H20V18z"/></g></svg>`,
      }
    },
    methods: {
      initialize() {
        this.loadDefaultCaption();
        this.loadIcons();
      },
      loadDefaultCaption() {
        this.$refs.compositionCaption.innerHTML = this.innerHTMLSlipknot;
      },
      loadIcons() {
        this.$refs.ctaButtonIcon.innerHTML = this.websiteSVG;
      },
      switchCaption(artist) {
        if (artist === 'joejackson') {
          this.$refs.compositionCaption.innerHTML = this.innerHTMLJoeJackson;
        } else if (artist === 'duranduran') {
          this.$refs.compositionCaption.innerHTML = this.innerHTMLDuranDuran;
        } else {
          this.$refs.compositionCaption.innerHTML = this.innerHTMLSlipknot;
        }
      }
    },
    mounted() {
      this.initialize();
    }
  }
</script>

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

  .intro-greeting {
    padding: 7rem 0 0 6rem;
    width: 70%;

    @media only screen and (min-width: 811px) and (max-width: 1000px) {
      padding: 6rem 0 0 3rem;
      width: 65%;
    }

    @media only screen and (min-width: 781px) and (max-width: 810px) {
      padding: 4rem 0 0 2rem;
      width: 60%;
    }

    @media only screen and (min-width: 721px) and (max-width: 780px) {
      padding: 3rem 0 0 2rem;
      width: 60%;
    }

    @media only screen and (min-width: 601px) and (max-width: 720px) {
      padding: 3rem 0 0 2rem;
      width: 60%;
    }

    @media only screen and (max-width: 600px) {
      padding: 2rem 2rem 3rem;
      width: 100%;
    }
  }

  .intro-greeting-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 0 0 0;

    @media only screen and (max-width: 600px) {
      flex-direction: column-reverse;
    }
  }

  .intro-photo {
    align-self: center;
    background-blend-mode: luminosity;
    background-color: var(--color-indigo-300);
    background-image: url('/images/rea-01.min.jpg');
    background-size: cover;
    border-radius: var(--border-radius-large);
    height: 27.4rem;
    width: 20rem;

    @media only screen and (min-width: 601px) and (max-width: 780px) {
    }

    @media only screen and (max-width: 600px) {
      margin-top: 2rem;
    }
  }

  .intro-quote {
    color: var(--color-intro-quote);
    font-size: var(--font-size-xsmall);
    font-style: var(--font-style-italic);
    font-weight: var(--font-weight-semi-bold);
    letter-spacing: var(--letter-spacing-xwide);
    line-height: var(--line-height-base);
    margin-top: 2rem;
  }

  .intro-subheader {
    color: var(--color-subheader);
    font-size: var(--font-size-xlarge);
    font-style: var(--font-style-italic);
    font-weight: var(--font-weight-semi-bold);
    letter-spacing: var(--letter-spacing-xwide);
  }

  .intro-text {
    color: var(--color-subheader);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-normal);
    letter-spacing: var(--letter-spacing-wide);
    line-height: var(--line-height-medium);
    margin-top: 2rem;
  }

  .music {
    display: flex;
    justify-content: center;
    margin-top: 6rem;

    @media only screen and (max-width: 460px) {
      padding-bottom: 4rem;
      margin-top: 0;
    }
  }

  .music-caption {
    color: var(--color-about-section-music-caption);
    font-size: var(--font-size-medium);
    font-style: var(--font-style-italic);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-xwide);
    line-height: var(--line-height-tall);
    padding: 1.25rem 2rem .25rem;

    @media only screen and (max-width: 800px) {
      padding: 1.25rem 0 0;
    }
  }

  .music-inner {
    height: 40rem;
    position: relative;
    width: 50rem;

    &:hover .album:not(:hover) {
      transform: scale(.95);
    }

    .album {
      box-shadow: var(--box-shadow-low);
      outline-offset: 1rem;
      position: absolute;
      transition: all .8s;
      width: 25rem;

      &.duran-duran {
        left: 0;
        top: -2rem;
      }

      &.joe-jackson {
        right: 0;
        top: 2rem;
      }

      &.slipknot {
        left: 20%;
        top: 10rem;
      }

      &:hover {
        box-shadow: var(--box-shadow-high);
        outline: 1.25rem solid var(--color-about-album-outline);
        transform: scale(1.05) translateY(-.5rem);
        z-index: 20;
      }
    }

    @media only screen and (min-width: 461px) and (max-width: 660px) {
      height: 32rem;

      .album {
        width: 18rem;
      }
    }

    @media only screen and (max-width: 460px) {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 64rem;
      justify-content: flex-start;
      position: static;

      .album {
        margin-top: 4rem;
        position: static;
        width: 17.5rem;
      }
    }
  }

  .pledge-text {
    color: var(--color-slate-700);
    font-family: var(--font-family-serif);
    font-size: var(--font-size-xxxxlarge);
    font-style: var(--font-style-italic);
    font-weight: var(--font-weight-xbold);
    letter-spacing: var(--letter-spacing-wide);
    line-height: var(--line-height-tall);
    margin-right: 8rem;
    width: 50%;

    // iPad Pro 12" | 1024px wide
    @media only screen and (min-width: 846px) and (max-width: 1030px) {
      color: var(--color-slate-800);
      font-size: var(--font-size-xxxxlarge);
      font-weight: var(--font-weight-xbold);
      letter-spacing: var(--letter-spacing-normal);
      line-height: var(--line-height-tall);
      margin: 0 3.5rem 3rem;
      width: 50%;
    }

    // iPad Pro 11" portrait | 1194px wide
    // iPhone 12 Pro landscape | 844px wide
    @media only screen and (min-width: 401px) and (max-width: 845px) {
      color: var(--color-pledge-text);
      font-size: var(--font-size-xxlarge);
      font-weight: var(--font-weight-xbold);
      letter-spacing: var(--letter-spacing-normal);
      line-height: var(--line-height-base);
      margin: 0 3.5rem 3rem;
      width: 80%;
    }

    // iPhone 12 Pro portrait | 390px wide
    @media only screen and (min-width: 375px) and (max-width: 400px) {
      color: var(--color-pledge-text);
      font-size: var(--font-size-xxlarge);
      font-weight: var(--font-weight-bold);
      letter-spacing: var(--letter-spacing-normal);
      line-height: var(--line-height-base);
      margin: 0 0 3rem 0;
      width: 80%;
    }
  }

  .pledge-wrapper {
    align-items: center;
    background-image: url('/images/American-flag.min.jpg'), var(--background-image-pledge-wrapper);
    background-size: cover;
    border-radius: var(--border-radius-large);
    box-shadow: var(--box-shadow-section-background);
    display: flex;
    justify-content: flex-end;
    min-height: 59.8rem;
    margin-bottom: 8rem;
    overflow: hidden;
    position: relative;
    width: 100%;

    @media only screen and (min-width: 651px) and (max-width: 845px) {
      background-size: contain;
      flex-direction: column;
      justify-content: flex-end;
      min-height: 61rem;
    }

    @media only screen and (max-width: 650px) {
      background-size: contain;
      flex-direction: column;
      justify-content: flex-end;
      min-height: 60rem;
    }
  }

  .music-wrapper {
    min-height: 63rem;

    @media only screen and (max-width: 1100px) {
      min-height: 67rem;
    }
  }

  .section-wrapper {
    @media only screen and (max-width: 600px) {
      margin-bottom: 5rem;
      padding: 2rem 2rem 2rem;
    }
  }

  .section-wrapper.greeting {
    padding: 0 0 0;
  }

  .video {
    height: 0;
    margin: 4rem 0 3rem;
    padding-bottom: 56.25%;
    position: relative;
    width: 100%;

    @media only screen and (max-width: 640px) {
      width: 100%;
    }

    iframe {
      border-radius: var(--border-radius-large);
      box-shadow: var(--box-shadow-section-background);
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  .video-caption p {
    color: var(--color-about-section-video-caption);
    font-size: var(--font-size-medium);
    font-style: var(--font-style-italic);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-xwide);
    line-height: var(--line-height-tall);
    padding: 1.25rem 2rem .25rem;

    @media only screen and (max-width: 800px) {
      padding: 1.25rem 2rem 0;

      &:last-of-type {
        padding-bottom: 3rem;
        padding-top: 2rem;
      }
    }
  }

  .video-wrapper {
    background-image: var(--background-image-section-wrapper);
    border-radius: var(--border-radius-large);
    box-shadow: var(--box-shadow-section-background);
    margin-bottom: 8rem;
    padding: 2rem 6rem 4rem;
    width: 100%;

    @media only screen and (max-width: 800px) {
      padding: 0 0 0;
    }
  }
</style>
