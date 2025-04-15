import React from 'react';
import './Experience.css';
import { FaUserTie } from 'react-icons/fa'; 

const experiences = [
  {
    role: "BACHELOR DEGREE IN COMPUTER SCIENCE",
    company: "ABESIT College of Engineering.",
    date: " 2018 - 22",
  },
  {
    role: "SENIOR SECONDARY CERTIFICATION EXAMINATION",
    company: "St. Xavier's Ballia",
    date: "2016 - 2018",
  },
  {
    role: "SECONDARY SCHOOL CERTIFICATION EXAMINATION",
    company: "Devasthaly VidyaPeeth",
    date: "2013 - 2015",
  },
];

const Education = () => {
  return (
    <section className="experience-section">
      <div className="experience-content">
        {/* Animated Image Container */}
        <div className="animated-image">
          <img src={`${process.env.PUBLIC_URL}/images/eduPurple.svg`} alt="Animated Laptop" />
        </div>

        {/* Experience List */}
        <div className="experience-list-container">
         <div className='n'> <h2  >Educations<hr style={{marginRight:"340px"}}/></h2></div>
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
                  <p>{exp.percentage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
