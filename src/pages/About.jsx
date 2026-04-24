import React from 'react';
import './About.css';

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '15+', label: 'Shipped Games' },
  { value: '3', label: 'Companies' },
  { value: '∞', label: 'Cups of Chai' },
];

const About = () => {
  return (
    <section className="about-section">
      <div className="section-heading reveal">
        <span className="eyebrow">// Get to know me</span>
        <h2>About Me</h2>
        <span className="underline" />
      </div>

      <div className="about-grid">
        <div className="about-image reveal">
          <div className="about-image-wrap">
            <img
              src={`${process.env.PUBLIC_URL}/images/profileImage.jpeg`}
              alt="Dhananjay Maurya"
            />
            <div className="about-image-frame" />
          </div>
        </div>

        <div className="about-text reveal">
          <h3>Game Developer & Full-Stack JS Engineer</h3>
          <p>
            I'm <strong>Dhananjay Maurya</strong>, a passionate game developer with a
            self-learning mindset and a love for JavaScript. I build fast, fun,
            production-ready games — from slot and casino backends to multiplayer
            fish-shooter and poker experiences.
          </p>
          <p>
            Currently building gaming experiences at <strong>Paytm (Insurance)</strong>.
            I enjoy solving gnarly problems, learning new stacks, and shipping
            polished products that players actually love.
          </p>

          <ul className="about-chips">
            <li><i className="fas fa-location-dot" /> Ghaziabad, India</li>
            <li><i className="fas fa-graduation-cap" /> B.Tech CS, ABESIT</li>
            <li><i className="fas fa-briefcase" /> 4+ years</li>
            <li><i className="fas fa-language" /> English · Hindi</li>
          </ul>
        </div>
      </div>

      <div className="about-stats">
        {stats.map((s) => (
          <div className="stat-card reveal" key={s.label}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
