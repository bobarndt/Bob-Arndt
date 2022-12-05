<template>
  <div class="page-wrapper"><!-- Begin .page-wrapper div -->

    <button class="resume-back-to-top-button" content="Back to Top" v-tippy>
      <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M18.958 25.917h2.125v-7.875l3.25 3.291 1.459-1.458L20 14.083l-5.792 5.792 1.459 1.458 3.291-3.291ZM20 35.833q-3.25 0-6.146-1.25t-5.042-3.395q-2.145-2.146-3.395-5.042T4.167 20q0-3.292 1.25-6.187 1.25-2.896 3.395-5.021 2.146-2.125 5.042-3.375T20 4.167q3.292 0 6.188 1.25 2.895 1.25 5.02 3.375 2.125 2.125 3.375 5.021 1.25 2.895 1.25 6.187 0 3.25-1.25 6.146t-3.375 5.042q-2.125 2.145-5.02 3.395-2.896 1.25-6.188 1.25Zm0-2.083q5.75 0 9.75-4.021t4-9.729q0-5.75-4-9.75t-9.75-4q-5.708 0-9.729 4-4.021 4-4.021 9.75 0 5.708 4.021 9.729Q14.292 33.75 20 33.75ZM20 20Z"/></svg>
    </button>

    <div class="resume-wrapper"><!-- Begin .resume-wrapper div -->
      <div class="resume-scroll-progress-bar">
        <div class="resume-scroll-progress-bar-fill"></div>
      </div>

      <div class="hero-wrapper"><!-- Begin .hero div -->
        <div class="hero-animated-background-image">
          <img src="/images/vue-code.min.jpg" alt="Bob Arndt | Web design and development professional in Dallas, Texas, USA">
        </div>

        <div class="hero-content">
          <div class="hero-title-wrapper">
            <h1 class="hero-title">Professional Resume</h1>
            <h1 class="hero-title-overlay">
              <span>P</span>
              <span>r</span>
              <span>o</span>
              <span>f</span>
              <span>e</span>
              <span>s</span>
              <span>s</span>
              <span>i</span>
              <span>o</span>
              <span>n</span>
              <span>a</span>
              <span>l</span>
              <span>&nbsp;</span>
              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>e</span>
            </h1>
          </div>
        </div>
      </div><!-- End .hero div -->

      <main class="resume-main">
        <section class="resume-section">
          <div class="resume-section-flex-container">
            <h2 class="resume-article-title">Professional Profile</h2>
            <p class="resume-profile-text">Software development professional with over 20 years industry experience blending strong creative and technical skills. 15 years in the design and development of web sites and web applications for corporate, institutional, professional and individual clients. Adept designer with the skills to fashion clear and compelling user experiences. Strengths encompass both coding and graphic design resulting in function-rich, responsive, visually appealing sites that convey substance and professionalism.</p>
          </div>
        </section>

        <section class="resume-section">
          <div class="resume-section-flex-container">
            <h2 class="resume-article-title">Technical Skills</h2>
            <ul class="resume-skills-list">
              <li>JavaScript / VueJS / NuxtJS</li>
              <li>NodeJS / NPM / Vite</li>
              <li>Ajax / JSON / RESTful APIs</li>
              <li>HTML5 / Responsive Design</li>
              <li>CSS3 / Sass / Bootstrap / TailwindCSS</li>
              <li>Git / Github</li>
            </ul>
          </div>
        </section>

        <section class="resume-section">
          <div class="resume-section-flex-container">
            <h2 class="resume-article-title">Experience</h2>
            <div class="resume-article-column">
              <article class="resume-article">
                <div class="resume-article-header">
                  <h3 class="resume-employer">Independent Web Professional</h3>
                  <h3 class="resume-time-period">2008 to present</h3>
                </div>
                <span class="resume-employer-description">Recent Projects :</span>
                <h5 class="resume-recent-employer">Children's Health</h5>
                <p class="resume-body-text">Contributed to ongoing development and maintenance of enterprise site <a class="link" href="https://www.childrens.com" target="_blank"><span data-content="www.childrens.com">www.childrens.com</span></a>, as well as related internal and public-facing web properties for Children’s Medical Center of Dallas. Extensive use of IBM Websphere Application Server (CMS), JavaScript, jQuery, Sass and Gulp.</p>
                <h5 class="resume-recent-employer">CBRE</h5>
                <p class="resume-body-text">Participated in building CBRE myVantage with Angular 6 and Bootstrap. myVantage is an internal tool to empower CBRE salespeople to create and configure highly customized proposals for their prospects and existing customers.</p>
                <h5 class="resume-recent-employer">American Airlines</h5>
                <p class="resume-body-text">Developed front-end UI on ConnectMe chat/messaging application for airport maintenance group utilizing Angular 6. Concentration on converting Sketch designs/redlines to Angular component HTML templates. Created proof-of-concept mobile version with React Native.</p>
                <h5 class="resume-recent-employer">J.P. Morgan Chase</h5>
                <p class="resume-body-text">Participated in integration of Merchant Services accounts functionality into customer-facing online banking application using proprietary blueJS JavaScript framework.</p>
                <h5 class="resume-recent-employer">Cisco Systems</h5>
                <p class="resume-body-text">Worked on global development team building the Cisco Spark meeting, messaging and telephony application with AngularJS.</p>
                <h5 class="resume-recent-employer">Pier 1 Imports</h5>
                <p class="resume-body-text">Handled front-end behavioral, usability and styling enhancements, and markup optimization for corporate eCommerce site using Demandware. Responsible for extensive PSD to HTML conversions, including Omniture analytics tag placement. Tested supported browsers and addressed rendering issues as necessary.</p>
              </article>

              <article class="resume-article">
                <div class="resume-article-header">
                  <h3 class="resume-employer">Sewell Automotive Companies, Dallas, Texas</h3>
                  <h3 class="resume-time-period">2005 to 2008</h3>
                </div>
                <span class="resume-employer-description">Franchised retail automotive dealership group</span>
                <h4 class="resume-job-title">eCommerce Web Developer</h4>
                <p class="resume-body-text">Developed public web advertising, web advertising components and e-mail communications for Marketing Department. Assisted in maintenance of corporate internet and intranet sites.</p>
                <ul class="resume-bullet-list">
                  <li>Contributed to increasing floor traffic and new vehicle sales by providing timely, effective and coordinated web ad presence for 10 new car dealerships representing 17 franchises.</li>
                  <li>Assisted sales force in marketing to prospects and in maintaining existing customer relationships by designing and delivering HTML-based e-mail advertising and correspondence.</li>
                  <li>Greatly improved timeliness and accuracy of critical market share reporting to management by designing and implementing dedicated RDBMS.</li>
                  <li>Promoted corporate branding by creating marketing assets for third-party sites in accordance with strict corporate graphic standards.</li>
                  <li>Maintained accuracy of public sites by coordinating updates and changes to online content.</li>
                  <li>Successfully completed Dale Carnegie Course : Effective Communications and Human Relations.</li>
                </ul>
              </article>

              <article class="resume-article">
                <div class="resume-article-header">
                  <h3 class="resume-employer">AIG American General, Dallas, Texas</h3>
                  <h3 class="resume-time-period">2000 to 2003</h3>
                </div>
                <span class="resume-employer-description">Second largest life insurer in the United States whose parent company, American International Group, is one of the largest financial services companies in the world.</span>
                <h4 class="resume-job-title">Frontware Developer</h4>
                <p class="resume-body-text">Developed legacy system extension applications with ClientSoft Enterprise.</p>
                <ul class="resume-bullet-list">
                  <li>Achieved more than 1000% gain in efficiency with certain procedures by eliminating repetitive and redundant data entry of transactions into sales force database.</li>
                  <li>Increased data entry accuracy and identified training needs by designing methodology for extracting and summarizing error reports from mainframe systems for management review.</li>
                  <li>Enabled effective and objective evaluation of personnel performance by implementing system to track and report on workflow activity.</li>
                  <li>Successfully coded the conversion of multiple, highly complex IRMA scripts for the posting of premium and loan payments for Dallas Service Center which provides policyowner servicing for over 1.3 million life insurance contracts.</li>
                  <li>Formulated effective specifications for new development, enhancements, extensions and maintenance on all projects in direct consultation with unit supervisory personnel and end users, both locally and at remote locations.</li>
                  <li>Resolved system support issues on all projects for over 100 supervisory personnel and end users in 6 business units in 3 locations.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section class="resume-section back-to-top-observer-target">
          <div class="resume-section-flex-container">
            <h2 class="resume-article-title">Education</h2>
            <div class="resume-article-column">
              <h3 class="resume-degree">Bachelor of Arts</h3>
              <h4 class="resume-college">Combs College of Music, Philadelphia, Pennsylvania</h4>
            </div>
          </div>
        </section>

        <a class="resume-download-button-link" href="/Bob-Arndt-resume.pdf" target="_blank">
          <button class="resume-download-button">
            <span class="resume-download-button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"/></g></svg>
            </span>
            <span class="resume-download-button-text">Download Resume</span>
          </button>
        </a>

      </main>
    </div><!-- End .resume-wrapper div -->

  </div><!-- End .page-wrapper div -->
</template>

<script>
  export default {
    methods: {
      backToTopObserverCallback(entries) {
        const backToTopButton = document.querySelector('.resume-back-to-top-button');

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            backToTopButton.classList.add('resume-show-button');
          } else {
            backToTopButton.classList.remove('resume-show-button');
          }
        });
      },
      handleScroll() {
        const observerOptions = {
          rootMargin: '1000px'
        }
        let backToTopObserver = new IntersectionObserver(this.backToTopObserverCallback, observerOptions);
        backToTopObserver.observe(document.querySelector('.back-to-top-observer-target'));
      },
      loadPage() {
        document.addEventListener('scroll', this.handleScroll);
        document.querySelector('.resume-back-to-top-button')
          .addEventListener('click', this.scrollToTop);
      },
      scrollToTop() {
        document.documentElement.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      },
      showScrollDownProgress() {
        window.addEventListener('scroll', () => {
          const scrollProgressBarFill = document.querySelector('.resume-scroll-progress-bar-fill');
          let percentScrolled = 100;
          let scrollable = document.documentElement.scrollHeight - window.innerHeight;
          let scrolled = window.scrollY;

          if (scrollable > 0) {
            percentScrolled = Math.ceil(scrolled / scrollable * 100);
          }

          scrollProgressBarFill.style.width = `${ percentScrolled }%`;
        });
      }
    },
    mounted() {
      this.loadPage();
      this.showScrollDownProgress();
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

    span:nth-child(9) {
      animation: hero-title-fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(10) {
      animation: hero-title-fade-in 0.8s 1.0s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(11) {
      animation: hero-title-fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(12) {
      animation: hero-title-fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(13) {
      animation: hero-title-fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(14) {
      animation: hero-title-fade-in 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(15) {
      animation: hero-title-fade-in 0.8s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(16) {
      animation: hero-title-fade-in 0.8s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(17) {
      animation: hero-title-fade-in 0.8s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(18) {
      animation: hero-title-fade-in 0.8s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(19) {
      animation: hero-title-fade-in 0.8s 1.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }
  }

  .hero-title-wrapper {
    border: var(--border-indigo);
  }

  .resume-article {
    margin-top: 0;

    &:not(:first-of-type) {
      margin-top: 4rem;
    }
  }

  .resume-article-column {
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
  }

  .resume-article-header {
    display: flex;
    justify-content: space-between;
  }

  .resume-article-title {
    flex-shrink: 0;
    font-size: 1.8rem;
    font-weight: var(--font-weight-xbold);
    margin-bottom: 2rem;
    width: 16rem;
  }

  .resume-back-to-top-button {
    background-color: transparent;
    bottom: 9.25rem;
    color: var(--color-rose-600);
    opacity: 0;
    position: fixed;
    right: 3.25rem;
    transform: translateY(15.5rem);
    transition: all 1s ease;

    &:hover {
      animation: pulse-icon 2s linear 2;
      opacity: 1;
    }

    svg {
      fill: var(--color-rose-600);
    }
  }

  .resume-body-text {
    font-size: var(--font-size-xsmall);
    font-weight: var(--font-weight-medium);
    letter-spacing: var(--letter-spacing-xwide);
    line-height: 1.8;
    margin-top: 1rem;
  }

  .resume-bullet-list {
    font-size: var(--font-size-xsmall);
    letter-spacing: var(--letter-spacing-wide);
    list-style-type: disc;
    margin-left: 1.4rem;
    margin-top: 1rem;

    li {
      line-height: 1.8;
    }
  }

  .resume-college {
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-bold);
  }

  .resume-download-button {
    align-items: center;
    background-color: var(--color-resume-download-button);
    border-radius: var(--border-radius-small);
    color: var(--color-slate-400);
    cursor: pointer;
    display: flex;
    font-size: var(--font-size-xsmall);
    font-weight: 800;
    gap: 2rem;
    height: 4.6rem;
    justify-content: center;
    letter-spacing: var(--letter-spacing-xxwide);
    margin-bottom: 3rem;
    transition: all 0.5s ease-out;
    width: var(--width-full);

    &:focus,
    &:hover {
      background-color: var(--color-resume-download-button-hover);
      color: var(--color-white);
      outline: none;


      .resume-download-button-icon {
        animation: pulse-icon-download-resume 2s linear 2;
      }
    }

    @media (max-width: 640px) {
      margin-bottom: 6rem;
    }
  }

  .resume-download-button-link {
    outline: none;
    text-decoration: none;
  }

  .resume-degree,
  .resume-employer {
    color: var(--color-resume-employer);
    font-size: var(--font-size-large);
    font-style: italic;
    font-weight: var(--font-weight-black);
    padding-bottom: 1.4rem;
  }

  .resume-employer-description {
    font-size: var(--font-size-xxsmall);
    font-weight: var(--font-weight-normal);
    letter-spacing: var(--letter-spacing-wide);
    padding-bottom: 1.4rem;
  }

  .resume-job-title {
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-bold);
    padding-top: 1.4rem;

    & > p {
      padding-top: 1.4rem;
    }
  }

  .resume-main {
    background-color: var(--color-main-background);
    color: var(--color-main-text);
    padding: 3.2rem 3.2rem 12rem;
    width: var(--width-full);

    @media (max-width: 665px) {
      padding-bottom: 9rem;
    }
  }

  .resume-profile-text {
    font-size: var(--font-size-xsmall);
    font-weight: var(--font-weight-medium);
    letter-spacing: var(--letter-spacing-xwide);
    line-height: 1.8;
  }

  .resume-recent-employer {
    font-size: var(--font-size-xsmall);
    font-weight: var(--font-weight-xbold);
    margin-top: 3.2rem;

    &:first-of-type {
      margin-top: 2rem;
    }
  }

  .resume-scroll-progress-bar {
    background-color: var(--color-resume-progress-bar-background);
    height: .5rem;
    position: sticky;
    top: 6.4rem;
    z-index: 20;
  }

  .resume-scroll-progress-bar-fill {
    background-color: var(--color-resume-progress-bar-fill);
    height: 100%;
    width: 0%;
  }
  .resume-section {
    border-bottom: 1px solid var(--color-resume-section-divider);
    margin-bottom: 2.4rem;
    padding-bottom: 2.4rem;

    &:last-of-type {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 1rem;
    }
  }

  .resume-section-flex-container {
    display: flex;

    @media (max-width: 640px) {
      flex-direction: column;
    }
  }

  .resume-show-button {
    opacity: .6;
    transform: translateY(0);
  }

  .resume-skills-list {
    font-size: var(--font-size-xsmall);
    letter-spacing: var(--letter-spacing-wide);
    list-style-type: disc;
    margin-left: 1.4rem;

    li {
      line-height: 1.8;
    }
  }

  .resume-time-period {
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-bold);
    padding-bottom: 1.4rem;
  }
</style>
