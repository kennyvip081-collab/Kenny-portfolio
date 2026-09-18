
import './Experience.css';

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <div className="experience-header">
          <span className="experience-badge">Proven Track Record</span>
          <h2 className="experience-title">Experience & Achievements</h2>
          <p className="experience-subtitle">
            A journey of building scalable web applications, mastering frontend systems, and collaborating on impactful user interfaces.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card stat-card-featured">
            <h3 className="stat-number">3+</h3>
            <p className="stat-label">Years Experience</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">20+</h3>
            <p className="stat-label">Projects Completed</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">10+</h3>
            <p className="stat-label">Technologies</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">15+</h3>
            <p className="stat-label">Happy Clients</p>
          </div>
        </div>

        <div className="experience-timeline">
          <div className="experience-card">
            <div className="experience-card-top">
              <div>
                <h3 className="experience-role">Senior Frontend Developer</h3>
                <p className="experience-company">Tech Solutions Inc. / Independent Consultant</p>
              </div>
              <span className="experience-badge-date">2023 - Present</span>
            </div>
            <p className="experience-desc">
              Spearheaded the development of responsive client-facing web applications. Architected modular design systems, optimized Core Web Vitals, and collaborated closely with designers and product managers to deliver seamless digital experiences.
            </p>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">JavaScript (ES6+)</span>
              <span className="tech-tag">Tailwind CSS</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Responsive UI</span>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-card-top">
              <div>
                <h3 className="experience-role">Frontend Web Developer</h3>
                <p className="experience-company">Creative Digital Agency</p>
              </div>
              <span className="experience-badge-date">2022 - 2023</span>
            </div>
            <p className="experience-desc">
              Built interactive landing pages and single-page applications for diverse commercial clients. Implemented clean CSS hover micro-interactions, responsive grids, and cross-browser compatible layouts.
            </p>
            <div className="tech-tags">
              <span className="tech-tag">HTML5</span>
              <span className="tech-tag">CSS3</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">UI/UX Prototyping</span>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-card-top">
              <div>
                <h3 className="experience-role">Junior Web Developer & Designer</h3>
                <p className="experience-company">Freelance Studio</p>
              </div>
              <span className="experience-badge-date">2021 - 2022</span>
            </div>
            <p className="experience-desc">
              Designed brand assets and converted design prototypes into responsive code. Maintained code quality, clean markup, and established accessible UI standards across all deliverables.
            </p>
            <div className="tech-tags">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">Graphic Design</span>
              <span className="tech-tag">Web Standards</span>
            </div>
          </div>
        </div>

        <div className="strengths-container">
          <h3 className="strengths-title">Core Strengths & Technical Highlights</h3>
          <div className="strengths-grid">
            <div className="strength-item">
              <h4 className="strength-name">Pixel-Perfect Execution</h4>
              <p className="strength-desc">Translating complex designs into clean, responsive, and cross-browser frontend layouts.</p>
            </div>
            <div className="strength-item">
              <h4 className="strength-name">High-Performance Code</h4>
              <p className="strength-desc">Ensuring fast load times, minimal script overhead, and smooth 60fps user animations.</p>
            </div>
            <div className="strength-item">
              <h4 className="strength-name">Modern Architecture</h4>
              <p className="strength-desc">Building maintainable, scalable component hierarchies with clean modular CSS structure.</p>
            </div>
          </div>
        </div>

        <div className="experience-buttons">
          <a href="#projects" className="btn-primary">View My Projects</a>
          <a href="#contact" className="btn-secondary">Let's Work Together</a>
        </div>
      </div>
    </section>
  );
}
