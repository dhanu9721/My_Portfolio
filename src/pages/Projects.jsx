import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Slot Casino Games(Frontend & Backend)',
    description: 'Frontend Developed in Cocos & backend developed in Node js.',
    imageUrl: `${process.env.PUBLIC_URL}/images/slotGame.jpg`,
    githubLink: 'https://github.com/dhanu9721',
  },
  {
    name: 'Multiplayer Fish casino Game(Frontend & Backend)',
    description: 'Frontend Developed in Cocos & backend developed in Node js.',
    imageUrl: `${process.env.PUBLIC_URL}/images/slotGame.jpg`,
    githubLink: 'https://github.com/dhanu9721',
  },
  {
    name: 'Poker Game Multiplayer(Frontend & Backend)',
    description: 'Frontend Developed in Cocos & backend developed in Node js.',
    imageUrl: `${process.env.PUBLIC_URL}/images/pokerImg.png`,
    githubLink: 'https://github.com/dhanu9721',
  },
  {
    name: 'Word Puzzle',
    description: 'Developed using cocos (HTML5)',
    imageUrl: `${process.env.PUBLIC_URL}/images/wordPuzzle.png`,
    githubLink: 'https://github.com/dhanu9721',
  },
  {
    name: 'Number Puzzle',
    description: 'Developed using cocos (HTML5)',
    imageUrl: `${process.env.PUBLIC_URL}/images/numberPuzzle.jpg`,
    githubLink: 'https://github.com/dhanu9721',
  },
  {
    name: 'Mine Sweeper',
    description: 'Developed using cocos (HTML5)',
    imageUrl:` ${process.env.PUBLIC_URL}/images/mineSweeper.png`,
    githubLink: 'https://github.com/dhanu9721',
  },
  {
    name: 'Insta Running Game',
    description: 'Developed using unity',
    imageUrl: `${process.env.PUBLIC_URL}/images/runningGame.png`,
    githubLink: 'https://github.com/dhanu9721',
  },
  {
    name: 'Rolling Ball & Universe',
    description: 'Developed using unity',
    imageUrl: `${process.env.PUBLIC_URL}/images/rollBallImg.png`,
    githubLink: 'https://github.com/dhanu9721',
  },
  // {
  //   name: 'Rummy Backend(In Progress)',
  //   description: 'Description of E-commerce Website...',
  //   imageUrl: `${process.env.PUBLIC_URL}/images/Screenshot (8).png`,
  //   githubLink: 'https://github.com/dhanu9721',
  // },
  // {
  //   name: 'Teen Patti Backend(In Progress)',
  //   description: 'Description of Job Entry Website...',
  //   imageUrl: `${process.env.PUBLIC_URL}/images/Screenshot (9).png`,
  //   githubLink: 'https://github.com/dhanu9721',
  // },
  {
    name: 'My_Portfolio',
    description: 'Developed in React js.',
    imageUrl: `${process.env.PUBLIC_URL}/images/myPortFolio.png`,
    githubLink: 'https://github.com/dhanu9721',
  },
  {
    name: 'Pixelsage-website(In Progress)',
    description: 'Developing using React js',
    imageUrl: `${process.env.PUBLIC_URL}/images/pixelSageSplash.png`,
    githubLink: 'https://github.com/dhanu9721',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="n"><h3>Projects<hr/></h3></div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
            <img src={project.imageUrl} alt={project.name} className="project-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
