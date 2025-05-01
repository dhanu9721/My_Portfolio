import React from 'react';
import './Skills.css';

const skills = [
    { name: 'Javascript', image: `${process.env.PUBLIC_URL}/images/javascript.svg` },
    { name: 'Typescript', image: `${process.env.PUBLIC_URL}/images/TypeScript.svg` },
    { name: 'C#', image: `${process.env.PUBLIC_URL}/images/CSharp.svg` },
    { name: 'Unity', image: `${process.env.PUBLIC_URL}/images/Unity.svg` },
    { name: 'Cocos Creator', image: `${process.env.PUBLIC_URL}/images/cocos-1.svg` },
    { name: 'HTML5 Games', image: `${process.env.PUBLIC_URL}/images/html.svg` },
    { name: 'React Js', image: `${process.env.PUBLIC_URL}/images/react.svg` },
    { name: 'Pixi Js', image: `${process.env.PUBLIC_URL}/images/Pixi.svg` },  
    { name: 'Node Js', image: `${process.env.PUBLIC_URL}/images/Node.js.svg` }, 
    { name: 'Git', image: `${process.env.PUBLIC_URL}/images/git.svg` },
    { name: 'Javascript', image: `${process.env.PUBLIC_URL}/images/javascript.svg` },
    { name: 'Typescript', image: `${process.env.PUBLIC_URL}/images/TypeScript.svg` },
    { name: 'C#', image: `${process.env.PUBLIC_URL}/images/CSharp.svg` },
    { name: 'Unity', image: `${process.env.PUBLIC_URL}/images/Unity.svg` },
    { name: 'Cocos Creator', image: `${process.env.PUBLIC_URL}/images/cocos-1.svg` },
    { name: 'HTML5 Games', image: `${process.env.PUBLIC_URL}/images/html.svg` },
    { name: 'React Js', image: `${process.env.PUBLIC_URL}/images/react.svg` },
    { name: 'Pixi Js', image: `${process.env.PUBLIC_URL}/images/Pixi.svg` },  
    { name: 'Node Js', image: `${process.env.PUBLIC_URL}/images/Node.js.svg` }, 
    { name: 'Git', image: `${process.env.PUBLIC_URL}/images/git.svg` },
  
];

const Skills = () => {
  return (
    <div className='skill'>
       <div className='n'><h3>Skills<hr/></h3></div>
    <div className="skills-container">
     
      <div className="skills-scroll">
      
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  
  );
};

export default Skills;
