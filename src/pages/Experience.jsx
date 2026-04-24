import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: "Senior Software Engineer — Frontend",
    company: "Paytm (Insurance)",
    date: "June 2025 — Present",
    current: true,
    description:
      "Building Paytm's Motor and Health Insurance products. Ship customer-facing features with React.js and Next.js, and own Backend-for-Frontend (BFF) services in Node.js / Nest.js — API orchestration, data shaping, and integration with downstream services. Drove a 2–3% reduction in overall defect/drop-off rate across insurance flows.",
    stack: ["React.js", "Next.js", "Nest.js", "Node.js", "TypeScript"],
  },
  {
    role: "Software Developer",
    company: "Gameium LLP",
    date: "June 2023 — June 2025",
    description:
      "Built interactive web applications with TypeScript, JavaScript and Node.js — handling both frontend and backend. Worked on core logic and multiplayer backend services, optimizing real-time performance and network communication.",
    stack: ["TypeScript", "JavaScript", "Node.js", "WebSockets"],
  },
  {
    role: "Software Developer",
    company: "GamixLabs",
    date: "Nov 2021 — June 2023",
    description:
      "Built HTML5 web applications and interactive experiences with JavaScript and TypeScript. Contributed to architecture, core logic and UI flows across multiple releases.",
    stack: ["JavaScript", "TypeScript", "HTML5", "Cocos"],
  },
];

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="section-heading reveal">
        <span className="eyebrow">// What I've been up to</span>
        <h2>Experience</h2>
        <span className="underline" />
      </div>

      <div className="timeline">
        <div className="timeline-line" />
        {experiences.map((exp, i) => (
          <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'} reveal`} key={i}>
            <div className="timeline-dot">
              {exp.current && <span className="dot-pulse" />}
            </div>
            <article className="timeline-card">
              <div className="timeline-date">
                <i className="far fa-calendar" /> {exp.date}
                {exp.current && <span className="badge-current">Current</span>}
              </div>
              <h3>{exp.role}</h3>
              <div className="timeline-company">
                <i className="fas fa-building" /> {exp.company}
              </div>
              <p>{exp.description}</p>
              {exp.stack && (
                <ul className="timeline-stack">
                  {exp.stack.map((s) => <li key={s}>{s}</li>)}
                </ul>
              )}
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
