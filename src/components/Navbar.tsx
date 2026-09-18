
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <header className="portfolio-navbar">
      <nav className="nav-container">

        {/* Brand Logo with Availability Status Dot */}
        <a href="#home" className="nav-logo">
          <span className="logo-tag">&lt;</span>
          <span>Kenny.dev</span>
          <span className="logo-tag">/&gt;</span>
          <span
            className="status-dot"
            title="Available for work"
          ></span>
        </a>

        {/* Mobile Menu Toggle */}
        <input
          type="checkbox"
          id="nav-toggle"
          className="nav-toggle-checkbox"
        />

        <label
          htmlFor="nav-toggle"
          className="nav-toggle-label"
          aria-label="Toggle navigation menu"
        >
          ☰
        </label>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>

          <li>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>

          <li>
            <Link to="/skill" className="nav-link">
              Skills
            </Link>
          </li>

          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        {/* Call To Action Button */}
        <Link to="/#contact" className="nav-cta-btn">
          Hire Me &rarr;
        </Link>

      </nav>
    </header>
  );
}

