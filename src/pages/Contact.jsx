import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaStackOverflow, FaGlobe } from 'react-icons/fa'; // Import the icons
;

const Contact = () => {
  return (
    
    <div className="contact-container">
      <div className='Contact'>
      <div className='n'><h3>Contact with Me<hr/></h3></div>    
      <div className="contact-left">
        <p>
          If you have any questions or concerns, please don't hesitate to contact me. I am open to any
          work opportunities that align with my skills and interests.
        </p>
        <form className="contact-form">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" placeholder="Your Name" />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" placeholder="Your Email" />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" rows="5" placeholder="Your Message"></textarea>

          <div className="captcha"> 
            <input type="checkbox" id="robot-check" />
            <label htmlFor="robot-check ">I'm not a robot</label>
          </div>

          <button type="submit" className="send-btn">
            Send Message <span role="img" aria-label="email"></span>
          </button>
        </form>
      </div>
      </div>
      <div className="contact-right ">
        <ul>
          <li><span role="img" aria-label="email">📧</span> dhanuverma9721@gmail.com</li>
          <li><span role="img" aria-label="phone">📞</span> 8858318301</li>
          <li><span role="img" aria-label="location">📍</span> Crossing Republic ,Vijaynagar ,Ghaziabad</li>
        </ul>
        <div className="social-icons">
        <a href="www.github.com/dhanu9721" className="github" aria-label="GitHub"><FaGithub /></a>
        <a href="#" className="linkedin" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="#" className="other" aria-label="Website"><FaGlobe /></a>
        <a href="#" className="stackoverflow" aria-label="Stack Overflow"><FaStackOverflow /></a>

      </div>
      </div>
    </div>

  );
};

export default Contact;
