  import { useState } from 'react';
  import './Navbar.css';
  import { NavLink, Link } from 'react-router-dom';

  type NavbarProps = {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  };

  export default function App({ darkMode, setDarkMode }: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
      setMenuOpen(false);
    };

    return (
      <header className="portfolio-navbar">
        <nav className="nav-container">

          <a href="#home" className="nav-logo" onClick={closeMenu}>
            <span className="logo-tag">&lt;</span>
            <span>Kenny.dev</span>
            <span className="logo-tag">/&gt;</span>
            <span
              className="status-dot"
              title="Available for work"
            ></span>
          </a>

          <input
            type="checkbox"
            id="nav-toggle"
            className="nav-toggle-checkbox"
            checked={menuOpen}
            onChange={(e) => setMenuOpen(e.target.checked)}
          />

          <label
            htmlFor="nav-toggle"
            className="nav-toggle-label"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            title={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="menu-icon">
              {menuOpen ? '✕' : '☰'}
            </span>
          </label>

          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
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
                onClick={closeMenu}
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
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Skills
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Contact
              </NavLink>
            </li>

            <li className="mobile-theme-item">
              <button
                className="mobile-theme-toggle"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark and light mode"
              >
                <span className="theme-icon">
                  {darkMode ? '☀️' : '🌙'}
                </span>
                <span className="theme-text">
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>
            </li>

          <li className="mobile-cta-item">
            <NavLink
              to="/contact"
              className="nav-cta-btn"
              onClick={closeMenu}
            >
              Hire Me <span>&rarr;</span>
            </NavLink>
          </li>
          </ul>

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark and light mode"
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="theme-toggle-icon">
              {darkMode ? '☀️' : '🌙'}
            </span>
            <span className="theme-toggle-text">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>

          <Link to="/contact" className="nav-cta-btn">
            Hire Me <span>&rarr;</span>
          </Link>

        </nav>
      </header>
    );
  }