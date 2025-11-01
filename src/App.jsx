import React, { useEffect, useState } from "react";

const projects = [
  {
    id: "blockchain",
    title: "Blockchain Reward Platform",
    subtitle: "Full-stack Web3 DApp — Wallet connect, XP rewards, NFT badges, leaderboard.",
    description: `This project is a blockchain-based reward platform built as a complete full-stack DApp.
Users can connect their crypto wallets, earn XP through on-chain and off-chain actions, mint NFTs at the end of each season, and view their rank on a global leaderboard.`,
    img: "/blockchain.png",
    media: ["/coin-page.mp4"],
    tech: ["TypeScript", "Express", "Next.js", "Solidity", "Ethers.js", "MongoDB"],
  },
  {
    id: "ai-assistant",
    title: "AI Proposal Assistant",
    subtitle: "AI-powered proposal asistant for Freelancers",
    description: `An intelligent content creation assistant that helps writers generate, edit, and optimize their content using advanced language models.
Features include real-time grammar checking, style suggestions, tone adjustment, and content expansion capabilities.
Built with a focus on user experience and seamless integration into existing workflows.`,
    img: "/ai-proposal.png",
    media: ["/dashboard.png", "/generate-proposal.png"],
    tech: ["Python", "FastAPI", "JavaScript", "React", "OpenAI", "Ollama", "Docker", "PostgreSQL"],
  },
  {
    id: "doctor-patient",
    title: "Doctor–Patient Matching Platform",
    subtitle: "End-to-end solution for doctor–patient matching, appointments, and service management.",
    description: `A full-featured doctor–patient matching and appointment management platform, enabling users to find doctors, schedule appointments, manage services, and track payments — all within a seamless, responsive interface.`,
    img: "/doctor-patient.png",
    tech: ["Python", "Django REST Framework", "JavaScript", "React", "Docker", "PostgreSQL"],
  },
  {
    id: "summarizer",
    title: "Abstractive Summarizer API",
    subtitle: "LLM-powered text summarization API built with FastAPI and Docker",
    description: `Developed a microservice for abstractive text summarization using BART-Large with FastAPI and Docker.
Built a robust RESTful API supporting configurable summary length and style, with async endpoints, structured logging, and Swagger docs.
Containerized with Gunicorn for production, showcasing expertise in building and deploying scalable, efficient LLM-based NLP APIs.`,
    img: "/abstractive.png",
    link: "https://github.com/imgeaslikok/abstractive-summarizer-api",
    tech: ["Python", "FastAPI", "OpenAI", "Docker", "PyTest"],
  },
  {
    id: "jitsi",
    title: "Social Networking Platform",
    subtitle: "Real-time video meetings enabled social networking platform.",
    description: `A social networking platform that supports real-time video meetings, personalized recommendations, and user interaction analytics.`,
    img: "/social.png",
    tech: ["Python", "Django", "Websockets", "Jitsi", "PostgreSQL"],
  },
];

function useStyles() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap');
      @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
      
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { 
        font-family: 'Courier Prime', monospace; 
        background: #fff; 
        color: #333; 
        line-height: 1.6;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .app-container {
        width: 100%;
        max-width: 1200px;
      }
      
      .nav {
        display: flex;
        justify-content: flex-end;
        gap: 2rem;
        padding: 2rem 3rem;
        font-size: 0.9rem;
        border-bottom: 1px solid #ddd;
      }
      .nav a {
        color: #666;
        text-decoration: none;
        transition: color 0.2s;
      }
      .nav a:hover {
        color: #000;
      }
      
      .hero-section {
        display: flex;
        padding: 4rem 3rem;
        gap: 4rem;
        align-items: flex-start;
      }
      
      .logo {
        font-size: 5rem;
        font-weight: 700;
        line-height: 0.85;
        letter-spacing: -0.05em;
      }
      
      .logo-subtitle {
        font-size: 0.9rem;
        color: #999;
        font-weight: 400;
        margin-top: 0.5rem;
        letter-spacing: 0;
      }
      
      .intro {
        flex: 1;
        padding-top: 1rem;
      }
      
      .intro h1 {
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 2rem;
      }
      
      .intro-text {
        font-size: 0.95rem;
        color: #555;
        line-height: 1.8;
        margin-bottom: 1.5rem;
      }
      
      .intro-footer {
        font-size: 0.9rem;
        color: #777;
        margin-top: 2rem;
      }
      
      .divider {
        border: none;
        border-top: 1px solid #ddd;
        margin: 3rem 0;
      }
      
      .works-section {
        padding: 3rem 3rem 5rem;
      }
      
      .works-title {
        font-size: 0.9rem;
        color: #666;
        margin-bottom: 2rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      
      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
      }
      
      .project-card {
        cursor: pointer;
        transition: transform 0.2s;
      }
      
      .project-card:hover {
        transform: translateY(-4px);
      }
      
      .project-img {
        width: 100%;
        object-fit: cover;
        background: #f5f5f5;
        border: 1px solid #eee;
        margin-bottom: 0.75rem;
      }
      
      .project-title {
        font-size: 0.9rem;
        color: #333;
        font-weight: 400;
        margin-bottom: 0.5rem;
      }
      
      .tech-bubbles {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin-top: 0.5rem;
      }
      
      .tech-bubble {
        font-size: 0.7rem;
        padding: 0.25rem 0.6rem;
        background: #f0f0f0;
        border: 1px solid #ddd;
        border-radius: 12px;
        color: #666;
      }
      
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        padding: 2rem;
      }
      
      .modal {
        background: #fff;
        max-width: 900px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        border-radius: 12px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: modalSlideIn 0.3s ease-out;
      }
      
      @keyframes modalSlideIn {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .modal-header {
        position: relative;
        padding: 2.5rem 3rem 1.5rem;
        border-bottom: 1px solid #eee;
      }
      
      .modal-close {
        position: absolute;
        top: 1.5rem;
        right: 2rem;
        background: none;
        border: none;
        font-size: 2rem;
        color: #999;
        cursor: pointer;
        line-height: 1;
        transition: color 0.2s;
      }
      
      .modal-close:hover {
        color: #333;
      }
      
      .modal-title {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #000;
      }
      
      .modal-subtitle {
        font-size: 1rem;
        color: #777;
      }
      
      .modal-body {
        padding: 2rem 3rem;
      }
      
      .modal-image {
        width: 100%;
        height: 400px;
        object-fit: cover;
        background: #f5f5f5;
        border: 1px solid #eee;
        border-radius: 8px;
        margin-bottom: 2rem;
      }
      
      .modal-media {
  width: 100%;
  max-height: 60vh;
  object-fit: contain;
  border-radius: 8px;
  background: #000;
  border: 1px solid #ddd;
  display: block;
  margin: 0 auto 1.5rem;
}
      .modal-section {
        margin-bottom: 2rem;
      }
      
      .modal-section-title {
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #999;
        margin-bottom: 1rem;
      }
      
      .modal-description {
        font-size: 0.95rem;
        line-height: 1.8;
        color: #555;
        white-space: pre-line;
      }
      
      .modal-tech-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      
      .modal-tech-item {
        font-size: 0.85rem;
        padding: 0.5rem 1rem;
        background: #f8f8f8;
        border: 1px solid #ddd;
        border-radius: 20px;
        color: #333;
        font-weight: 500;
      }

      .modal-nav {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 2rem;
}
.modal-nav button {
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s;
}

.modal-link-placeholder {
  width: 100%;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  border: 1px dashed #ccc;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.modal-link-display {
  background: #000;
  color: #fff;
  padding: 0.9rem 1.8rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  transition: background 0.3s ease;
}
.modal-note-box {
  width: 100%;
  min-height: 160px;
  background: #fdfdfd;
  border: 1px dashed #ccc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #666;
  font-size: 0.95rem;
  font-style: italic;
  margin-bottom: 2rem;
}

.modal-link-display:hover {
  background: #333;
}

      
      .footer {
        background: #000;
        color: #fff;
        padding: 1.5rem 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.8rem;
      }
      
      .footer-icons {
        display: flex;
        gap: 1.5rem;
      }
      
      .footer-icons a {
        color: #fff;
        text-decoration: none;
        font-size: 1.4rem;
        transition: color 0.2s;
      }
      
      .footer-icons a:hover {
        color: #aaa;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
}

export default function App() {
  useStyles();
  const [selectedProject, setSelectedProject] = useState(null);
  const [mediaIndex, setMediaIndex] = useState(0);

  return (
    <div className="app-container">
      <nav className="nav">
        <a href="#portfolio">Portfolio</a>
      </nav>

      <section className="hero-section">
        <div>
          <div className="logo">ASLI<br />DELAY</div>
          <div className="logo-subtitle">Full-Stack Engineer (AI & Web3 Integration)</div>
        </div>
        <div className="intro">
          <div className="intro-text">
            <p>Full-stack engineer with 5+ years of experience developing scalable APIs, distributed systems, and data-driven applications.</p>
            <p>Recently focused on AI-powered and Web3-integrated products, combining Solidity smart contracts with intelligent backends using Python and Node.js.</p>
            <p>Skilled in React, Next.js, and TypeScript for building modern, responsive interfaces. Passionate about creating end-to-end solutions from architecture to deployment.</p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="works-section">
        <div className="works-title">Recent works</div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
              <img src={project.img} className="project-img" alt={project.title} />
              <div className="project-title">{project.title}</div>
              <div className="tech-bubbles">
                {project.tech.slice(0, 3).map((tech) => (
                  <span key={tech} className="tech-bubble">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <button className="modal-close" onClick={() => setSelectedProject(null)}>&times;</button>
              <h2 className="modal-title">{selectedProject.title}</h2>
              <div className="modal-subtitle">{selectedProject.subtitle}</div>
            </div>
            <div className="modal-body">
              {/* --- Media OR Link Section --- */}
              {selectedProject.media && selectedProject.media.length > 0 ? (
                <>
                  {selectedProject.media[mediaIndex].endsWith(".mp4") ? (
                    <video
                      className="modal-media"
                      src={selectedProject.media[mediaIndex]}
                      controls
                      onError={(e) => {
                      e.target.style.display = "none";
                      console.error("Video failed to load:", selectedProject.media[mediaIndex]);
                    }}
                    />
                  ) : (
                    <img
                      className="modal-media"
                      src={selectedProject.media[mediaIndex]}
                      alt={selectedProject.title}
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  )}
                  {selectedProject.media.length > 1 && (
                    <div className="modal-nav">
                      <button
                        onClick={() =>
                          setMediaIndex(
                            (i) =>
                              (i - 1 + selectedProject.media.length) %
                              selectedProject.media.length
                          )
                        }
                      >
                        ← Prev
                      </button>
                      <button
                        onClick={() =>
                          setMediaIndex((i) => (i + 1) % selectedProject.media.length)
                        }
                      >
                        Next →
                      </button>
                    </div>
                  )}
                </>
              ) : selectedProject.link ? (
                <div className="modal-link-placeholder">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link-display"
                  >
                    <span><i className="fab fa-github github-bg-icon"></i> Visit Repository</span>
                    
                    
                  </a>
                </div>
              ) : (
                <div className="modal-note-box">
                  <p>🔒 Private repository. Available upon request.</p>
                </div>
              )}


              {/* --- About Section --- */}
              <div className="modal-section">
                <div className="modal-section-title">About</div>
                <div className="modal-description">{selectedProject.description}</div>
              </div>

              {/* --- Tech Section --- */}
              <div className="modal-section">
                <div className="modal-section-title">Technologies</div>
                <div className="modal-tech-list">
                  {selectedProject.tech.map((tech) => (
                    <span key={tech} className="modal-tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>



          </div>
        </div>
      )}

      <footer className="footer">
        <div>Copyright © 2025, Aslı Delay.</div>
        <div className="footer-icons">
          <a href="https://github.com/imgeaslikok" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/aslikok" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:delayasli@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}