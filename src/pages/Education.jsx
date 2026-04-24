import React from 'react';
import './Experience.css';

const education = [
  {
    role: "B.Tech — Computer Science & Engineering",
    company: "ABESIT College of Engineering",
    date: "2018 — 2022",
    description:
      "Graduated with a strong foundation in data structures, algorithms, and software engineering. Built passion projects in Unity and web tech.",
  },
  {
    role: "Senior Secondary (12th)",
    company: "St. Xavier's, Ballia",
    date: "2016 — 2018",
    description: "Science stream (PCM) — mathematics and computer science fundamentals.",
  },
  {
    role: "Secondary (10th)",
    company: "Devasthaly VidyaPeeth",
    date: "2013 — 2015",
    description: "Core academics and early introduction to programming logic.",
  },
];

const Education = () => {
  return (
    <section className="experience-section">
      <div className="section-heading reveal">
        <span className="eyebrow">// Where I studied</span>
        <h2>Education</h2>
        <span className="underline" />
      </div>

      <div className="timeline">
        <div className="timeline-line" />
        {education.map((ed, i) => (
          <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'} reveal`} key={i}>
            <div className="timeline-dot" />
            <article className="timeline-card">
              <div className="timeline-date">
                <i className="far fa-calendar" /> {ed.date}
              </div>
              <h3>{ed.role}</h3>
              <div className="timeline-company">
                <i className="fas fa-graduation-cap" /> {ed.company}
              </div>
              <p>{ed.description}</p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
