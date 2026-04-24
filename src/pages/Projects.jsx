import React, { useState } from 'react';
import './Projects.css';

const img = (name) => `${process.env.PUBLIC_URL}/images/${name}`;

const projects = [
  // ————— Insurance (Paytm) —————
  {
    name: 'Paytm Health Insurance',
    description:
      "Frontend for Paytm's Health Insurance product — shipping features across the health insurance user journey with React.js and Next.js, and building the Backend-for-Frontend (BFF) layer in Node.js / Nest.js to serve tailored APIs.",
    placeholder: { icon: 'fas fa-heart-pulse', gradient: 'linear-gradient(135deg, #00b894 0%, #0984e3 100%)' },
    liveLink: 'https://paytminsurance.co.in',
    tags: ['React', 'Next.js', 'Nest.js', 'Node.js'],
    category: 'Insurance',
  },
  {
    name: 'Paytm Motor Insurance',
    description:
      "Motor (car & bike) insurance purchase and renewal flows at Paytm. Built the frontend with React.js / Next.js and owned the Nest.js BFF layer — API orchestration, data transformation, and integration with downstream services.",
    placeholder: { icon: 'fas fa-car-side', gradient: 'linear-gradient(135deg, #6c5ce7 0%, #ff4d8d 100%)' },
    liveLink: 'https://paytminsurance.co.in',
    tags: ['React', 'Next.js', 'Nest.js', 'Node.js'],
    category: 'Insurance',
  },

  // ————— Games (live demos) —————
  {
    name: 'Evil Love Slot',
    description: 'Romance-themed HTML5 slot game. Reel spin animations, paylines, and polished UI in Cocos Creator.',
    imageUrl: img('slotGame.jpg'),
    liveLink: 'https://dhanu9721.github.io/EvilLoveSlotDemo/',
    githubLink: 'https://github.com/dhanu9721/EvilLoveSlotDemo',
    tags: ['Cocos', 'Slot', 'HTML5'],
    category: 'Game',
  },
  {
    name: 'Life of Luxury Slot',
    description: 'Luxury-themed slot game with refined visuals, big-win sequences and smooth reel mechanics.',
    imageUrl: img('slotGame.jpg'),
    liveLink: 'https://dhanu9721.github.io/LifeOfLuxurySlotDemo/',
    githubLink: 'https://github.com/dhanu9721/LifeOfLuxurySlotDemo',
    tags: ['Cocos', 'Slot', 'HTML5'],
    category: 'Game',
  },
  {
    name: 'Video Poker',
    description: 'Classic video poker with hand evaluation, hold/discard flow and payout table.',
    imageUrl: img('pokerImg.png'),
    liveLink: 'https://dhanu9721.github.io/VideoPokerDemo/',
    githubLink: 'https://github.com/dhanu9721/VideoPokerDemo',
    tags: ['Cocos', 'Poker'],
    category: 'Game',
  },
  {
    name: 'Roulette',
    description: 'Live-style roulette table — spinning wheel, chip placement UX and bet resolution.',
    placeholder: { icon: 'fas fa-circle-notch', gradient: 'linear-gradient(135deg, #c0392b 0%, #000000 100%)' },
    liveLink: 'https://dhanu9721.github.io/RouletteDemo/',
    githubLink: 'https://github.com/dhanu9721/RouletteDemo',
    tags: ['Cocos', 'Casino'],
    category: 'Game',
  },
  {
    name: 'Aviator',
    description: 'Crash-style multiplier game. Fast rising multiplier, cash-out flow and bet history.',
    imageUrl: img('runningGame.png'),
    liveLink: 'https://dhanu9721.github.io/AviatorDemo/',
    githubLink: 'https://github.com/dhanu9721/AviatorDemo',
    tags: ['Cocos', 'Crash'],
    category: 'Game',
  },
  {
    name: "Texas Hold'em Poker",
    description: "Texas Hold'em poker table with full card flow, betting rounds and hand evaluation.",
    imageUrl: img('pokerImg.png'),
    liveLink: 'https://dhanu9721.github.io/TexasPokerDemo/',
    githubLink: 'https://github.com/dhanu9721/TexasPokerDemo',
    tags: ['Cocos', 'Poker', 'Multiplayer'],
    category: 'Game',
  },
  {
    name: 'Fish Shooter Game',
    description: 'Arcade-style fish shooter with physics, scoring and multiple weapon tiers.',
    placeholder: { icon: 'fas fa-fish', gradient: 'linear-gradient(135deg, #00b4db 0%, #0083b0 100%)' },
    liveLink: 'https://dhanu9721.github.io/FishGameCocosDemo/',
    githubLink: 'https://github.com/dhanu9721/FishGameCocosDemo',
    tags: ['Cocos', 'Arcade'],
    category: 'Game',
  },

  // ————— Casual —————
  {
    name: 'Word Puzzle',
    description: 'HTML5 word puzzle with progressive difficulty and clean UX.',
    imageUrl: img('wordPuzzle.png'),
    githubLink: 'https://github.com/dhanu9721',
    tags: ['Cocos', 'HTML5'],
    category: 'Casual',
  },
  {
    name: 'Number Puzzle',
    description: 'Classic sliding number puzzle with smooth tile animations.',
    imageUrl: img('numberPuzzle.jpg'),
    githubLink: 'https://github.com/dhanu9721',
    tags: ['Cocos', 'HTML5'],
    category: 'Casual',
  },
  {
    name: 'Mine Sweeper',
    description: 'The classic minesweeper — rebuilt from scratch in Cocos Creator.',
    imageUrl: img('mineSweeper.png'),
    githubLink: 'https://github.com/dhanu9721',
    tags: ['Cocos', 'HTML5'],
    category: 'Casual',
  },

  // ————— Web —————
  {
    name: 'My Portfolio',
    description: 'This site — built with React, custom design system, smooth reveal animations and fully responsive layouts.',
    imageUrl: img('myPortFolio.png'),
    githubLink: 'https://github.com/dhanu9721/My_Portfolio',
    liveLink: 'https://dhanu9721.github.io/My_Portfolio',
    tags: ['React', 'CSS'],
    category: 'Web',
  },
  {
    name: 'Pixelsage Website',
    description: 'Marketing website for Pixelsage — React-based, work in progress.',
    imageUrl: img('pixelSageSplash.png'),
    githubLink: 'https://github.com/dhanu9721',
    tags: ['React', 'WIP'],
    category: 'Web',
  },
];

const categories = ['All', 'Insurance', 'Game', 'Casual', 'Web'];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const visible =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="projects-container">
      <div className="section-heading reveal">
        <span className="eyebrow">// Things I've built</span>
        <h2>Featured Projects</h2>
        <span className="underline" />
      </div>

      <div className="projects-filter reveal">
        {categories.map((c) => (
          <button
            key={c}
            className={`filter-btn ${filter === c ? 'active' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="projects-list">
        {visible.map((project) => (
          <article className="project-card reveal" key={project.name}>
            <div className="project-image-wrap">
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="project-image"
                />
              ) : (
                <div
                  className="project-placeholder"
                  style={{ background: project.placeholder?.gradient }}
                >
                  <i className={project.placeholder?.icon || 'fas fa-layer-group'} />
                </div>
              )}

              <span className={`project-badge ${project.category.toLowerCase()}`}>
                {project.category}
              </span>

              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-play"
                  aria-label={`Launch ${project.name}`}
                >
                  <i className="fas fa-play" />
                  <span>Play</span>
                </a>
              )}
            </div>

            <div className="project-body">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn primary"
                  >
                    <i className="fas fa-arrow-up-right-from-square" /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn ghost"
                  >
                    <i className="fab fa-github" /> Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
