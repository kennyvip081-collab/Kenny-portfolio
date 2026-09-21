import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-header">
          <span className="contact-badge">Let's Work Together</span>
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            I am open to frontend development opportunities, freelance projects,
            collaborations, and full-time roles.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <div className="contact-intro">
              <span className="contact-small-heading">CONTACT ME</span>
              <h3>Let's build something useful together.</h3>
              <p>
                If you are looking for a frontend developer who enjoys creating
                responsive, modern, and user-friendly websites, feel free to reach out.
              </p>
            </div>

            <div className="contact-details">

              <a
                href="mailto:hamzatkehinde43@gmail.com"
                className="contact-detail"
              >
                <div className="contact-detail-icon">@</div>
                <div>
                  <span className="contact-detail-label">Email</span>
                  <span className="contact-detail-value">
                    hamzatkehinde43@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="tel:08142666934"
                className="contact-detail"
              >
                <div className="contact-detail-icon">☎</div>
                <div>
                  <span className="contact-detail-label">Phone</span>
                  <span className="contact-detail-value">
                    0814 266 6934
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/2348142666934"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail"
              >
                <div className="contact-detail-icon">W</div>
                <div>
                  <span className="contact-detail-label">WhatsApp</span>
                  <span className="contact-detail-value">
                    Chat with me on WhatsApp
                  </span>
                </div>
              </a>

            </div>

            <div className="contact-availability">
              <span className="contact-live-dot"></span>
              <div>
                <strong>Currently open to opportunities</strong>
                <span>Available for freelance and frontend development work.</span>
              </div>
            </div>

            <div className="contact-actions">
              <a
                href="mailto:hamzatkehinde43@gmail.com"
                className="contact-primary-btn"
              >
                Email Me <span>→</span>
              </a>

              <a
                href="https://wa.me/2348142666934"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-secondary-btn"
              >
                WhatsApp <span>→</span>
              </a>
            </div>

          </div>

          <div className="contact-form-wrapper">

            <div className="contact-form-header">
              <h3>Send Me a Message</h3>
              <p>
                Have a project, job opportunity, or question? Send me a message.
              </p>
            </div>

            <form
              className="contact-form"
              action="https://formsubmit.co/hamzatkehinde43@gmail.com"
              method="POST"
            >

              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              <div className="contact-form-row">

                <div className="contact-field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>

              </div>

              <div className="contact-field">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Job opportunity, project, collaboration..."
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me a little about the opportunity or project..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message <span>→</span>
              </button>

            </form>

          </div>

        </div>

        <div className="contact-bottom">

          <div className="contact-cv">
            <div className="contact-cv-icon">CV</div>

            <div className="contact-cv-text">
              <h3>Looking for my CV?</h3>
              <p>
                Download my professional CV to learn more about my skills,
                experience, and qualifications.
              </p>
            </div>

            <a
              href="/Kenny-CV.pdf"
              download
              className="contact-cv-btn"
            >
              Download CV <span>↓</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}