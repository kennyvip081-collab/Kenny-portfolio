
import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function App({ darkMode, setDarkMode }: NavbarProps) {
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/skill"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Skills
            </NavLink>
          </li>

          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        {/* Dark / Light Mode Button */}
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark and light mode"
          title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        {/* Call To Action Button */}
        <Link to="/#contact" className="nav-cta-btn">
          Hire Me &rarr;
        </Link>

      </nav>
    </header>
  );
}

