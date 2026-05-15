export const contactHtml = `
  <section id="contact">
    <div class="wrap contact-grid">
      <article class="contact-card contact-card--intro">
        <div class="section-head section-head--contact">
          <div>
            <h2>Contact Me</h2>
          </div>
        </div>
        <p class="contact-success" id="contactSuccess" hidden>
          Thanks, your message has been sent successfully.
        </p>
      </article>

      <article class="contact-card contact-card--form">
        <form class="contact-form" action="https://formspree.io/f/mkoydjdv" method="POST">
          <input type="hidden" name="_subject" value="New portfolio contact message" />
          <input type="hidden" name="_next" id="contactNext" value="" />
          <div class="contact-form-grid">
            <label class="contact-field">
              <span>First name</span>
              <input type="text" name="firstName" autocomplete="given-name" required />
            </label>
            <label class="contact-field">
              <span>Last name</span>
              <input type="text" name="lastName" autocomplete="family-name" required />
            </label>
          </div>

          <label class="contact-field">
            <span>Company</span>
            <input type="text" name="company" autocomplete="organization" />
          </label>

          <label class="contact-field">
            <span>Email</span>
            <input type="email" name="email" autocomplete="email" required />
          </label>

          <label class="contact-field">
            <span>Your message</span>
            <textarea name="message" rows="9" required></textarea>
          </label>

          <button class="button primary" type="submit">Submit</button>
        </form>
      </article>
    </div>
  </section>
`;