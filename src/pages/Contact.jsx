import React, { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaStackOverflow, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\nFrom: ${name} <${email}>`;
    window.location.href = `mailto:dhanuverma9721@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="contact-section">
      <div className="section-heading reveal">
        <span className="eyebrow">// Let's talk</span>
        <h2>Get in Touch</h2>
        <span className="underline" />
      </div>

      <div className="contact-grid">
        <div className="contact-info reveal">
          <h3>Let's build something great together.</h3>
          <p>
            Have a project, a question, or a job opportunity? I'd love to hear about it.
            Drop me a message — I usually respond within a day.
          </p>

          <ul className="contact-list">
            <li>
              <span className="contact-icon"><i className="fas fa-envelope" /></span>
              <div>
                <div className="contact-label">Email</div>
                <a href="mailto:dhanuverma9721@gmail.com">dhanuverma9721@gmail.com</a>
              </div>
            </li>
            <li>
              <span className="contact-icon"><i className="fas fa-phone" /></span>
              <div>
                <div className="contact-label">Phone</div>
                <a href="tel:+918858318301">+91 8858318301</a>
              </div>
            </li>
            <li>
              <span className="contact-icon"><i className="fas fa-location-dot" /></span>
              <div>
                <div className="contact-label">Location</div>
                <span>Crossing Republic, Ghaziabad</span>
              </div>
            </li>
          </ul>

          <div className="contact-socials">
            <a href="https://github.com/dhanu9721" target="_blank" rel="noopener noreferrer" className="social github" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social linkedin" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" className="social other" aria-label="Website"><FaGlobe /></a>
            <a href="#" className="social stackoverflow" aria-label="Stack Overflow"><FaStackOverflow /></a>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required placeholder="John Doe" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required placeholder="you@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="5" required placeholder="Tell me about your project..."></textarea>
          </div>

          <button type="submit" className="send-btn">
            {sent ? (
              <><i className="fas fa-check" /> Opening your email…</>
            ) : (
              <>Send Message <i className="fas fa-paper-plane" /></>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
