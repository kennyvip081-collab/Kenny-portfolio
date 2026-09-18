
import "./Skill.css";

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <span className="skills-badge">My Capabilities</span>
          <h2 className="skills-title">Skills & Expertise</h2>
          <p className="skills-subtitle">
            A showcase of the modern frontend technologies, tools, and design principles I use to craft polished digital experiences.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-card-top">
              <h3 className="skill-name">HTML</h3>
              <span className="skill-level-tag">Advanced</span>
            </div>
            <p className="skill-desc">
              Writing clean, semantic, and accessible markup structured for high search visibility and responsive layouts.
            </p>
            <div className="skill-indicator-wrapper">
              <div className="skill-indicator-info">
                <span>Proficiency</span>
                <span>95%</span>
              </div>
              <div className="skill-track">
                <div className="skill-bar" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-top">
              <h3 className="skill-name">CSS</h3>
              <span className="skill-level-tag">Advanced</span>
            </div>
            <p className="skill-desc">
              Designing responsive layouts, smooth hover interactions, custom properties, and modern glassmorphic aesthetics.
            </p>
            <div className="skill-indicator-wrapper">
              <div className="skill-indicator-info">
                <span>Proficiency</span>
                <span>90%</span>
              </div>
              <div className="skill-track">
                <div className="skill-bar" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-top">
              <h3 className="skill-name">JavaScript</h3>
              <span className="skill-level-tag">Proficient</span>
            </div>
            <p className="skill-desc">
              Developing interactive UI behaviors, modern ES6+ features, and modular client-side logic.
            </p>
            <div className="skill-indicator-wrapper">
              <div className="skill-indicator-info">
                <span>Proficiency</span>
                <span>85%</span>
              </div>
              <div className="skill-track">
                <div className="skill-bar" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-top">
              <h3 className="skill-name">React</h3>
              <span className="skill-level-tag">Proficient</span>
            </div>
            <p className="skill-desc">
              Architecting scalable component hierarchies, reusable UI blocks, and reactive single-page interfaces.
            </p>
            <div className="skill-indicator-wrapper">
              <div className="skill-indicator-info">
                <span>Proficiency</span>
                <span>88%</span>
              </div>
              <div className="skill-track">
                <div className="skill-bar" style={{ width: '88%' }}></div>
              </div>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-top">
              <h3 className="skill-name">Tailwind CSS</h3>
              <span className="skill-level-tag">Advanced</span>
            </div>
            <p className="skill-desc">
              Rapidly building bespoke, mobile-first design systems with utility classes and cohesive spacing scales.
            </p>
            <div className="skill-indicator-wrapper">
              <div className="skill-indicator-info">
                <span>Proficiency</span>
                <span>92%</span>
              </div>
              <div className="skill-track">
                <div className="skill-bar" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-top">
              <h3 className="skill-name">Graphic Design</h3>
              <span className="skill-level-tag">Creative</span>
            </div>
            <p className="skill-desc">
              Crafting visual assets, harmonious color palettes, balanced negative space, and polished typography.
            </p>
            <div className="skill-indicator-wrapper">
              <div className="skill-indicator-info">
                <span>Proficiency</span>
                <span>82%</span>
              </div>
              <div className="skill-track">
                <div className="skill-bar" style={{ width: '82%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-buttons">
          <a href="#projects" className="btn-primary">View My Projects</a>
          <a href="#contact" className="btn-secondary">Let's Work Together</a>
        </div>
      </div>
    </section>
  );
}
