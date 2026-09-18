
import { Link } from 'react-router-dom';
import './Hero.css';
import Heroimg from '../assets/HERO-IMG.jpg';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-greeting">Hello, I am</span>

          <h1 className="hero-name">Hamzat Kehinde Abdul Salam</h1>

          <h2 className="hero-title">Frontend Developer</h2>

          <p className="hero-description">
            I craft clean, modern, and high-performance web applications.
            Passionate about building responsive user interfaces with
            attention to detail, sleek design, and smooth interactions.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary">
              view my works
            </Link>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-card">
            <img
              src={Heroimg}
              alt="kenny"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
