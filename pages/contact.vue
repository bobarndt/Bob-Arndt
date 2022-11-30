<template>
  <div class="page-wrapper">
    <div class="hero-wrapper"><!-- Begin .hero div -->
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
    </div><!-- End .hero div -->

    <main class="main">
      <section class="section-form">
        <form class="contact-me-form" method="POST" name="Contact Me" data-netlify="true" netlify-honeypot="bot-field">
          <fieldset>
            <ul>
              <li>
                <input type="hidden" name="form-name" value="contact">
              </li>
              <li class="form-field bot-field">
                <input type="text" name="bot-field">
                <label for="bot-field">Don’t fill this out if you’re human.</label>
              </li>
              <li class="form-field">
                <input id="first-name" type="text" name="First Name" placeholder="First name" aria-labelledby="contact-me-form first-name" tabindex="1">
                <span class="error-message first-name">Please enter your first name.</span>
                <label for="first-name">First Name</label>
              </li>
              <li class="form-field">
                <input id="last-name" type="text" name="Last Name" placeholder="Last name" aria-labelledby="contact-me-form last-name" tabindex="2">
                <span class="error-message last-name">Please enter your last name.</span>
                <label for="last-name">Last Name</label>
              </li>
              <li class="form-field">
                <input id="email" type="email" name="Email Address" placeholder="Email address" aria-labelledby="contact-me-form email" tabindex="3">
                <span class="error-message email">Please enter a valid email address (i.e. john.doe@example.com)</span>
                <label for="email">Email Address</label>
              </li>
              <li class="form-field">
                <textarea id="message" name="Message" cols="70" rows="10" placeholder="Message" aria-labelledby="contact-me-form message" tabindex="4"></textarea>
                <span class="error-message message">Please enter your message</span>
                <label for="message">Message</label>
              </li>
            </ul>
            <button type="button" role="button" class="send-button" name="send-button" tabindex="5" onclick="validateForm()">Send</button>
          </fieldset>
        </form>
      </section>

    </main>
  </div>
</template>

<script>
  export default {
    methods: {
      clearErrorMessages() {},
      displayErrorMessages() {},
      initialize() {
        const firstName = document.querySelector('#first-name');
        firstName.focus();
      },
      validateForm() {},
    },
    mounted() {
      this.initialize();
    }
  }
</script>

<style scoped lang="scss">
  fieldset {
    border: none;
    margin-top: 1.5rem;
  }

  input,
  textarea {
    border: 1px solid var(--color-slate-400);
    border-radius: var(--border-radius-small);
    display: block;
    font-family: var(--font-family-sans);
    font-size: 1.5rem;
    margin: 1rem 0 0.75rem;
    padding: 0.75rem 1rem;
    width: 25rem;
  }

  input:focus,
  textarea:focus {
    border-color: var(--color-indigo-600);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
    outline: none;
  }

  input:hover,
  textarea:hover {
    cursor: pointer;
  }

  input.invalid,
  textarea.invalid {
    border: 1px solid var(--color-rose-500);
  }

  input:placeholder-shown ~ label,
  textarea:placeholder-shown ~ label {
    opacity: 0;
    transform: translateY(-4rem);
    visibility: hidden;
  }

  label {
    display: block;
    font-size: 1.1rem;
    font-weight: 600;
    padding-left: 0.75rem;
    transition: all 0.3s;
  }

  textarea {
    resize: none;
  }

  ul {
    font-size: 1.5rem;
    list-style-type: none;
  }

  .error {
    color: var(--color-rose-500);
    font-size: 1.5rem;
    margin-top: 6rem;
    text-align: center;
    display: none;
  }

  .error-message {
    color: var(--color-rose-500);
    display: block;
    font-size: 1.2rem;
    font-weight: 400;
    left: 27rem;
    position: absolute;
    top: 1rem;
    visibility: hidden;
  }

  .error-visible {
    display: block;
  }

  .form-field {
    position: relative;
  }

  .form-field.bot-field {
    display: none;
  }

  .form-field span.name.show {
    visibility: visible;
  }

  .form-field span.email.show {
    visibility: visible;
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

    span:nth-child(9) {
      animation: hero-title-fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(10) {
      animation: hero-title-fade-in 0.8s 1.0s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }
  }

  .hero-title-wrapper {
    border: var(--border-indigo);
  }

  .main {
    padding-bottom: 15rem;
  }

  .section-form {
    background-image: linear-gradient(to bottom right, var(--color-slate-200), var(--color-slate-400));
    border: 1px solid var(--color-slate-400);
    border-radius: var(--border-radius-large);
    box-shadow: var(--drop-shadow-medium);
    display: flex;
    justify-content: flex-start;
    margin-bottom: .5rem;
    padding: 2rem 6rem 4rem;
    position: relative;
    width: 100%;
  }

  .send-button {
    background-image: linear-gradient(to bottom, var(--color-slate-300) 5%, var(--color-white) 100%);
    border: 1px solid var(--color-indigo-400);
    border-radius: var(--border-radius-small);
    color: var(--color-slate-900);
    display: inline-block;
    font-weight: var(--font-weight-normal);
    letter-spacing: var(--letter-spacing-xxwide);
    margin-top: 1rem;
    outline: none;
    padding: 1rem 3rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.2s;
  }

  .send-button:active,
  .send-button:visited {
    background-image: linear-gradient(to bottom, var(--color-white) 5%, var(--color-slate-300) 100%);
    border: 1px solid var(--color-green-500);
    box-shadow: none;
    cursor: pointer;
    font-weight: var(--font-weight-bold);
    transform: scale(1.1) translateY(-3px);
  }

  .send-button:focus,
  .send-button:hover {
    background-image: linear-gradient(to bottom, var(--color-white) 5%, var(--color-slate-300) 100%);
    border: 1px solid var(--color-green-500);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
    cursor: pointer;
    font-weight: var(--font-weight-bold);
  }
</style>
