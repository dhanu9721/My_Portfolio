import React from 'react';
import './Experience.css';
import { FaUserTie } from 'react-icons/fa'; 

const experiences = [
  {
    role: "GAME DEVELOPER",
    company: "Gameium LLp.",
    date: "June 2023 - Present",
  },
  {
    role: "FULL STACK GAME DEVELOPER",
    company: "GamixLabs",
    date: "Nov 2021 - June 2023",
  },
];

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-content">
        {/* Animated Image Container */}
        <div className="animated-image">
        <img src={`${process.env.PUBLIC_URL}/images/expPurple.svg`} alt="Animated Laptop" />
        </div>

        {/* Experience List */}
        <div className="experience-list-container">
         <div className='n'> <h2 >Experiences<hr style={{marginRight:"340px"}}/></h2></div>
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div className="experience-item" key={index}>
                <div className="experience-role">
                <span className="experience-date text-center">{exp.date}</span>
                  <div className="role-icon-container">
                    <FaUserTie className="experience-icon" />
                    <h3>{exp.role}</h3>
                  </div>
          
                  <p>{exp.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
