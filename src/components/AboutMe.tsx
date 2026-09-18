
import '../components/AboutMe.css';
import AboutImg from '../assets/CONTACT-IMG.jpg'

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <span className="about-badge">Get To Know Me</span>
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">
            A quick glimpse into who I am, what drives my work, and what I love doing.
          </p>
        </div>

        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="about-image-card">
              <img
                src={AboutImg}
                alt="Kenny"
                className="about-image"
              />
            </div>
          </div>

          <div className="about-text-area">
            <h3 className="about-intro">
              Hi, I'm <span>Kenny</span>
            </h3>
            <p className="about-bio">
              I am a frontend developer who genuinely enjoys building beautiful, responsive, and user-friendly websites. I love turning creative ideas into functional digital experiences with clean code.
            </p>
            <p className="about-bio">
              Constantly curious, I love learning new web development skills and pushing myself to become a better developer every day. Outside of coding, I am a huge fan of video games, technology, and all things creative.
            </p>

            <div className="about-cards-grid">
              <div className="about-card">
                <h4 className="about-card-title">Frontend Development</h4>
                <p className="about-card-text">Crafting modern interfaces with clean structure and sleek design.</p>
              </div>

              <div className="about-card">
                <h4 className="about-card-title">Continuous Learning</h4>
                <p className="about-card-text">Always picking up new modern skills and refining my coding craft.</p>
              </div>

              <div className="about-card">
                <h4 className="about-card-title">Creative Coding</h4>
                <p className="about-card-text">Blending technology, logic, and creativity into polished web experiences.</p>
              </div>

              <div className="about-card">
                <h4 className="about-card-title">Gaming & Tech</h4>
                <p className="about-card-text">Avid gamer and tech enthusiast inspired by interactive digital worlds.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
