import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Skills from "../pages/Skills";
import Education from "../pages/Education";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const ROLES = [
  "Senior Software Engineer",
  "Frontend Engineer",
  "React & Next.js Developer",
  "Nest.js Backend Engineer",
  "Game Developer",
];

const useTypewriter = (words, typeSpeed = 80, deleteSpeed = 40, pause = 1600) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text !== current) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
    } else if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text !== "") {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
};

const RESUMES = [
  {
    id: "web",
    label: "React / Next.js",
    sub: "Frontend engineering focus",
    icon: "fas fa-code",
    file: "Dhananjay_CV_23_04_26.pdf",
    downloadName: "Dhananjay_Maurya_React_Next.pdf",
    available: true,
  },
  {
    id: "game",
    label: "Game Developer",
    sub: "Casino & multiplayer games focus",
    icon: "fas fa-gamepad",
    file: "Dhananjay_CV_24_04_26_Game.pdf",
    downloadName: "Dhananjay_Maurya_GameDev.pdf",
    available: true,
  },
];

const HeroSection = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const role = useTypewriter(ROLES);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!resumeOpen) return;
    const onDocClick = (e) => {
      if (resumeRef.current && !resumeRef.current.contains(e.target)) {
        setResumeOpen(false);
      }
    };
    const onEsc = (e) => e.key === "Escape" && setResumeOpen(false);
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [resumeOpen]);

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-bg-orb orb-1" />
          <div className="hero-bg-orb orb-2" />
          <div className="hero-bg-grid" />
        </div>

        <div className="hero-inner">
          <div className="hero-text">
            <span className="hero-eyebrow">
              <span className="dot" /> Available for new opportunities
            </span>
            <h1>
              Hi, I'm <span className="highlight">Dhananjay Maurya</span>
            </h1>
            <h2 className="hero-role">
              I build as a{" "}
              <span className="typewriter">
                {role}
                <span className="caret" />
              </span>
            </h2>
            <p className="hero-subtitle">
              Currently building Motor & Health Insurance products at{" "}
              <strong>Paytm (Insurance)</strong> with React.js, Next.js and Nest.js
              — including Backend-for-Frontend services in Node.js. Previously
              shipped 15+ casino and casual games with Cocos Creator, Unity and
              Node.js.
            </p>

            <div className="social-icons">
              <a href="https://github.com/dhanu9721" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:dhanuverma9721@gmail.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>

            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary" onClick={scrollToContact}>
                <i className="fas fa-paper-plane"></i> Contact Me
              </Link>

              <div
                className={`resume-dropdown ${resumeOpen ? "is-open" : ""}`}
                ref={resumeRef}
              >
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setResumeOpen((v) => !v)}
                  aria-haspopup="menu"
                  aria-expanded={resumeOpen}
                >
                  <i className="fas fa-download" /> Download Resume
                  <i className="fas fa-chevron-down chev" />
                </button>

                <ul className="resume-menu" role="menu">
                  {RESUMES.map((r) => (
                    <li key={r.id} role="none">
                      {r.available ? (
                        <a
                          role="menuitem"
                          href={`${process.env.PUBLIC_URL}/images/${r.file}`}
                          download={r.downloadName}
                          onClick={() => setResumeOpen(false)}
                        >
                          <span className="resume-icon"><i className={r.icon} /></span>
                          <span className="resume-text">
                            <strong>{r.label}</strong>
                            <span>{r.sub}</span>
                          </span>
                          <i className="fas fa-arrow-down resume-arrow" />
                        </a>
                      ) : (
                        <span className="resume-item disabled" role="menuitem" aria-disabled="true">
                          <span className="resume-icon"><i className={r.icon} /></span>
                          <span className="resume-text">
                            <strong>{r.label}</strong>
                            <span>{r.sub}</span>
                          </span>
                          <span className="resume-badge">Soon</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="code-snippet">
            <div className="code-toolbar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="code-filename">developer.js</span>
            </div>
            <pre>
              <code>
{`const engineer = {
  name: 'Dhananjay Maurya',
  role: 'SSE — Frontend',
  company: 'Paytm (Insurance)',
  stack: {
    frontend: ['React.js', 'Next.js', 'TypeScript'],
    backend:  ['Nest.js', 'Node.js', 'BFF'],
    games:    ['Cocos Creator', 'Unity']
  },
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable() {
    return this.hardWorker && this.problemSolver;
  }
};`}
              </code>
            </pre>
          </div>
        </div>

        <a href="#about" className="hero-scroll-cue" aria-label="Scroll">
          <span /><span /><span />
        </a>
      </section>

      <div id="about"><About /></div>
      <div id="experience"><Experience /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="education"><Education /></div>
      <div id="contact" ref={contactRef}><Contact /></div>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Dhananjay Maurya. Built with React.</p>
      </footer>

      <button
        className={`scroll-to-top ${showScroll ? "show" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default HeroSection;
