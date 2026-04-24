import React from 'react';
import './Skills.css';

const img = (name) => `${process.env.PUBLIC_URL}/images/${name}`;
const devicon = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

const groups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', image: img('react.svg') },
      { name: 'Next.js', image: devicon('nextjs/nextjs-original.svg'), invert: true },
      { name: 'TypeScript', image: img('TypeScript.svg') },
      { name: 'JavaScript', image: img('javascript.svg') },
      { name: 'HTML5', image: img('html.svg') },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Nest.js', image: devicon('nestjs/nestjs-original.svg') },
      { name: 'Node.js', image: img('Node.js.svg') },
    ],
  },
  {
    title: 'Game Engines',
    skills: [
      { name: 'Cocos Creator', image: img('cocos-1.svg') },
      { name: 'Unity', image: img('Unity.svg') },
      { name: 'Pixi.js', image: img('Pixi.svg') },
      { name: 'C#', image: img('CSharp.svg') },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', image: img('git.svg') },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="section-heading reveal">
        <span className="eyebrow">// My stack</span>
        <h2>Skills & Tools</h2>
        <span className="underline" />
      </div>

      <div className="skills-groups">
        {groups.map((group) => (
          <div className="skill-group reveal" key={group.title}>
            <h3 className="skill-group-title">{group.title}</h3>
            <div className="skill-grid">
              {group.skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  {skill.image ? (
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className={`skill-icon ${skill.invert ? 'invert' : ''}`}
                    />
                  ) : (
                    <span
                      className="skill-letter"
                      style={skill.accent ? { background: skill.accent } : undefined}
                    >
                      {skill.letter}
                    </span>
                  )}
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
