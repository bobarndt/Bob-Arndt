<template>
  <Head>
    <Title>Bob Arndt | Contact Me</Title>
  </Head>

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
        <form ref="contactMeForm" class="contact-me-form" action="/success" method="POST" @submit.prevent="handleSubmit" name="Contact Me" data-netlify="true" netlify-honeypot="bot-field" novalidate>
          <fieldset class="fieldset">
            <ul class="ul">
              <li>
                <input type="hidden" name="form-name" value="Contact Me">
              </li>
              <li>
                <input type="hidden" name="subject" value="Contact Me submission from bobarndt.com" />
              </li>
              <li class="input-wrapper bot-field">
                <input type="text" name="bot-field">
                <label for="bot-field" class="label">Don’t fill this out if you’re human.</label>
              </li>
              <li ref="firstNameParent" class="input-wrapper">
                <input ref="firstNameInput" v-model="formValues.firstNameValue" id="first-name" class="input" type="text" name="First Name" placeholder="First name" aria-labelledby="contact-me-form first-name" tabindex="1">
                <span ref="firstNameError" class="error-message"></span>
                <label for="first-name" class="label">First Name</label>
              </li>
              <li ref="lastNameParent" class="input-wrapper">
                <input ref="lastNameInput" v-model="formValues.lastNameValue" id="last-name" class="input" type="text" name="Last Name" placeholder="Last name" aria-labelledby="contact-me-form last-name" tabindex="2">
                <span ref="lastNameError" class="error-message"></span>
                <label for="last-name" class="label">Last Name</label>
              </li>
              <li ref="emailParent" class="input-wrapper">
                <input ref="emailInput" v-model="formValues.emailValue" id="email" class="input" type="email" name="Email Address" placeholder="Email address" aria-labelledby="contact-me-form email" tabindex="3">
                <span ref="emailError" class="error-message"></span>
                <label for="email" class="label">Email Address</label>
              </li>
              <li ref="messageParent" class="input-wrapper">
                <textarea ref="messageInput" v-model="formValues.messageValue" id="message" class="textarea" name="Message" cols="70" rows="10" placeholder="Message" aria-labelledby="contact-me-form message" tabindex="4"></textarea>
                <span ref="messageError" class="error-message message"></span>
                <label for="message" class="label">Message</label>
              </li>
            </ul>
          </fieldset>

          <div class="button-wrapper">
            <button ref="formClearButton" type="reset" class="form-button-clear" name="clear-button" tabindex="6" role="button" @click="handleReset">
              <span ref="formClearButtonIcon" class="form-button-clear-icon"></span>
              <span class="form-button-text" data-content="Clear">Clear</span>
            </button>
            <button ref="formSendButton" type="submit" class="form-button-send" name="send-button" tabindex="5" role="button">
              <span ref="formSendButtonIcon" class="form-button-send-icon"></span>
              <span class="form-button-text" data-content="Send">Send</span>
            </button>
          </div>

        </form>
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        clearIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"/></svg>`,
        emailRegex: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
        formValues: {
          firstNameValue: ``,
          lastNameValue: ``,
          emailValue: ``,
          messageValue: ``
        },
        isEmailValid: false,
        isFirstNameValid: false,
        isFormValid: false,
        isLastNameValid: false,
        isMessageValid: false,
        sendIcon: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><g><rect fill="none" height="24" width="24"/><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h9v-2H4V8l8,5l8-5v5h2V6C22,4.9,21.1,4,20,4z M12,11L4,6h16L12,11z M19,15l4,4 l-4,4v-3h-4v-2h4V15z"/></g></svg>`
      }
    },
    methods: {
      handleReset() {
        this.$refs.firstNameParent.classList.remove(`valid`, `invalid`);
        this.$refs.firstNameParent.children[1].textContent = ``;
        this.$refs.lastNameParent.classList.remove(`valid`, `invalid`);
        this.$refs.lastNameParent.children[1].textContent = ``;
        this.$refs.emailParent.classList.remove(`valid`, `invalid`);
        this.$refs.emailParent.children[1].textContent = ``;
        this.$refs.messageParent.classList.remove(`valid`, `invalid`);
        this.$refs.messageParent.children[1].textContent = ``;
        this.setFocus();
      },
      handleSubmit(event) {
        this.isFirstNameValid = this.validateName(`first`),
        this.isLastNameValid = this.validateName(`last`),
        this.isEmailValid = this.validateEmail(),
        this.isMessageValid = this.validateMessage();

        this.isFormValid = this.isFirstNameValid &&
          this.isLastNameValid &&
          this.isEmailValid &&
          this.isMessageValid;

        if (this.isFormValid) {
          this.$refs.contactMeForm.submit();
        }
      },
      initialize() {
        this.loadIcons();
        this.setFocus();
      },
      isBetween(valueLength, minimumLength, maximumLength) {
        return valueLength < minimumLength || valueLength > maximumLength ? false : true;
      },
      isEmailFormatted(emailValue) {
        return this.emailRegex.test(emailValue);
      },
      isRequired(inputValue) {
        return inputValue === `` ? false : true;
      },
      loadIcons() {
        this.$refs.formClearButtonIcon.innerHTML = this.clearIcon;
        this.$refs.formSendButtonIcon.innerHTML = this.sendIcon;
      },
      setFocus() {
        this.$refs.firstNameInput.focus();
      },
      showError(input, message) {
        const inputWrapper = input.parentElement;

        inputWrapper.classList.remove(`valid`);
        inputWrapper.classList.add(`invalid`);

        const errorMessageSpan = inputWrapper.children[1];
        errorMessageSpan.textContent = message;
      },
      showSuccess(input) {
        const inputWrapper = input.parentElement;

        inputWrapper.classList.remove(`invalid`);
        inputWrapper.classList.add(`valid`);

        const errorMessageSpan = inputWrapper.children[1];
        errorMessageSpan.textContent = ``;
      },
      validateEmail() {
        const emailInput = this.$refs.emailInput;
        const emailValue = this.formValues.emailValue.trim();
        let isValid = false;

        if (!this.isRequired(emailValue)) {
          this.showError(emailInput, `Please enter your email address.`);
        } else if (!this.isEmailFormatted(emailValue)) {
          this.showError(emailInput, `Please enter a valid email address (i.e. john.doe@example.com)`);
        } else {
          this.showSuccess(emailInput);
          return isValid = true;
        }

        return isValid;
      },
      validateMessage() {
        const messageInput = this.$refs.messageInput;
        const messageValue = this.formValues.messageValue.trim();
        const minimumLength = 3, maximumLength = 300;
        let isValid = false;

        if (!this.isRequired(messageValue)) {
          this.showError(messageInput, `Please enter your message.`);
        } else if (!this.isBetween(messageValue.length, minimumLength, maximumLength)) {
          this.showError(messageInput, `Your message must be between ${minimumLength} and ${maximumLength} characters.`);
        } else {
          this.showSuccess(messageInput);
          isValid = true;
        }

        return isValid;
      },
      validateName(name) {
        const minimumLength = 3, maximumLength = 25;
        let isValid = false;
        let nameToValidate = ``;
        let valueToValidate = ``;

        if (name === `first`) {
          nameToValidate = this.$refs.firstNameInput;
          valueToValidate = this.formValues.firstNameValue.trim();
        } else {
          nameToValidate = this.$refs.lastNameInput;
          valueToValidate = this.formValues.lastNameValue.trim();
        }

        if (!this.isRequired(valueToValidate)) {
          this.showError(nameToValidate, `Please enter your ${name} name.`);
        } else if (!this.isBetween(valueToValidate.length, minimumLength, maximumLength)) {
          this.showError(nameToValidate, `Your ${name} name must be between ${minimumLength} and ${maximumLength} characters.`);
        } else {
          this.showSuccess(nameToValidate);
          isValid = true;
        }

        return isValid;
      }
    },
    mounted() {
      this.initialize();
    }
  }
</script>

<style scoped lang="scss">
  .button-wrapper {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    margin-top: 1rem;

    @media only screen and (min-width: 501px) and (max-width: 800px) {
      flex-direction: column-reverse;

      .form-button-clear {
        margin-top: .5rem;
      }
    }

    @media only screen and (max-width: 500px) {
      margin-top: 0;
    }
  }

  .error-message {
    color: var(--color-rose-600);
    display: block;
    font-size: var(--font-size-xsmall);
    font-weight: var(--font-weight-xbold);
    letter-spacing: var(--letter-spacing-xwide);
    right: 1.5rem;
    position: absolute;
    top: 6rem;
    transition: all 0.3s;

    &.message {
      top: 23.95rem;
    }

    @media only screen and (max-width: 800px) {
      left: 1.5rem;
      right: unset;
      top: 8rem;

      &.message {
        top: 26rem;
      }
    }
  }

  .fieldset {
    border: none;
    margin-top: 1.5rem;
  }

  .form-button-clear,
  .form-button-send {
    align-items: center;
    background-color: var(--color-indigo-800);
    border-radius: var(--border-radius-small);
    color: var(--color-slate-400);
    cursor: pointer;
    display: flex;
    font-size: var(--font-size-xsmall);
    font-weight: var(--font-weight-black);
    gap: 2rem;
    height: 4.6rem;
    justify-content: center;
    letter-spacing: var(--letter-spacing-xwide);
    transition: box-shadow 500ms ease, clip-path 275ms ease, transform 500ms ease;
    width: 100%;

    &:focus,
    &:hover {
      background-color: var(--color-cta-button-hover);
      box-shadow: var(--box-shadow-medium);
      color: var(--color-white);
      outline: none;
      transform: translateY(-.2rem);

      span.form-button-text::before,
      span.form-button-text::before {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }

      .form-button-clear-icon,
      .form-button-send-icon {
        animation: pulse-icon 2s linear 2;
      }
    }
  }

  .form-button-text::before {
    content: attr(data-content);
    clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
    color: var(--color-menu-link-overlay);
    letter-spacing: var(--letter-spacing-xwide);
    position: absolute;
    text-decoration: underline;
    text-decoration-color: var(--color-menu-link-overlay);
    transition: clip-path 500ms ease;
  }

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
      animation: hero-title-fade-in 1.0s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }
  }

  .hero-title-wrapper {
    border: var(--border-indigo);
  }

  .input,
  .textarea {
    background-color: var(--color-slate-300);
    border-bottom: .4rem solid transparent;
    border-radius: var(--border-radius-small);
    color: var(--color-slate-800);
    display: block;
    font-family: inherit;
    font-size: 1.5rem;
    font-weight: var(--font-weight-semi-bold);
    letter-spacing: var(--letter-spacing-wide);
    margin: 1rem 0 0.75rem;
    padding: 1.4rem 1.5rem 1rem;
    transition: all .5s;
    width: 100%;

    &:focus {
      background-color: var(--color-white);
      border-color: var(--color-indigo-700);
      box-shadow: var(--box-shadow-form-input);
      color: var(--color-black);
      outline: none;
    }

    &:hover {
      cursor: pointer;
    }

    &::placeholder {
      color: var(--color-slate-900);
      opacity: .4;
    }

    &:placeholder-shown ~ label {
      opacity: 0;
      transform: translateY(-4rem);
      visibility: hidden;
    }
  }

  .input-wrapper {
    margin-bottom: 3rem;
    position: relative;

    &.valid {
      .input:focus,
      .textarea:focus {
        border-color: var(--color-indigo-700);
      }
    }

    &.invalid input,
    &.invalid textarea {
      border-color: var(--color-rose-500);
      box-shadow: var(--box-shadow-form-input);
    }

    &.valid input,
    &.valid textarea {
      border-color: transparent;
    }

    &.valid .error-message {
      visibility: hidden;
    }

    &.inValid .error-message {
      visibility: visible;
    }

    @media only screen and (min-width: 561px) and (max-width: 800px) {
      margin-bottom: 4rem;

      &.message {
        top: 26rem;
      }
    }

    @media only screen and (max-width: 560px) {
      margin-bottom: 6rem;

      &.message {
        top: 30rem;
      }
    }
  }

  .input-wrapper.bot-field {
    display: none;
  }

  .label {
    display: block;
    color: var(--color-contact-form-input-label);
    font-size: var(--font-size-xxsmall);
    font-weight: var(--font-weight-xbold);
    letter-spacing: var(--letter-spacing-wide);
    padding: .25rem 0 0 1.5rem;
    transition: all 0.3s;
  }

  .main {
    display:flex;
    padding-bottom: 15rem;
    justify-content: center;
  }

  .section-form {
    background-image: var(--background-image-gradient);
    border-radius: var(--border-radius-large);
    box-shadow: var(--box-shadow-section-background);
    margin-bottom: 1.5rem;
    padding: 2rem 6rem 4rem;
    position: relative;
    width: 75%;

    ::selection {
      background-color: var(--color-indigo-600);
      color: var(--color-white);
    }

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

  .textarea {
    resize: none;

    @media only screen and (max-width: 405px) {
      margin-top: 8rem;
    }
  }

  .ul {
    font-size: 1.5rem;
    list-style-type: none;
  }
</style>
