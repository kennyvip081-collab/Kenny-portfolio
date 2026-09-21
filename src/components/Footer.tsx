
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">
        <div className="footer-cta-card">
          <div>
            <h3 className="footer-cta-title">Ready to build something remarkable?</h3>
            <p className="footer-cta-subtitle">Building digital experiences that make an impact.</p>
          </div>
          <div className="footer-cta-buttons">
            <Link to="/projects" className="btn-primary">
              View My Projects
            </Link>
            
            <a href="#contact" className="btn-secondary">
              Let's Work Together
            </a>
          </div>
        </div>

        <div className="footer-main-grid">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="logo-tag">&lt;</span>
              <span>Kenny</span>
              <span className="logo-tag">/&gt;</span>
            </a>
            <p className="footer-desc">
              Frontend Developer focused on building clean, high-performance web applications, responsive user interfaces, and intuitive digital experiences.
            </p>
            <div className="status-badge">
              <span className="status-dot-pulse"></span>
              <span>Available for opportunities</span>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#experience" className="footer-link">Experience</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Get in Touch</h4>
            <p className="footer-contact-item">Email: hamzatkehinde43@gmail.com</p>
            <p className="footer-contact-item">Location: Worldwide / Remote</p>
            <p className="footer-contact-item">Response Time: Within 24 Hours</p>
          </div>

          <div>
            <h4 className="footer-heading">Let's Connect</h4>
            <div className="footer-social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>GitHub</span>
                <span>&rarr;</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>LinkedIn</span>
                <span>&rarr;</span>
              </a>
              <a href="https://wa.me/2348142666934" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>Whatsapp</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">&copy; 2026 Kenny. All rights reserved.</p>
          <p className="footer-credits">Crafted with precision &amp; modern frontend standards.</p>
        </div>
      </div>
    </footer>
  );
}
