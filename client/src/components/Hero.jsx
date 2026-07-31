import heroImage from "../assets/images/hero.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

  <p className="hello">👋 Hello, I'm</p>

  <h1>Ananya Gupta</h1>

  <h2>Full Stack Developer</h2>

  <p className="description">
    Passionate Full Stack Developer skilled in React, Node.js,
    Express.js and MongoDB. I love creating modern,
    responsive and user-friendly web applications.
  </p>

  {/* Buttons */}
  <div className="hero-buttons">
    <a href="/resume.pdf" className="btn">
      Download Resume
    </a>

    <a href="#contact" className="btn-outline">
      Let's Build Something
    </a>
  </div>

  {/* Social Icons - Buttons ke niche */}
  <div className="social-icons">

    <a
      href="https://github.com/Ananya02Gupta"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub />
    </a>

    <a
      href="https://www.linkedin.com/in/ananya-gupta-71792532a/"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin />
    </a>

  </div>

</div>

      <div className="hero-image">
        <img src={heroImage} alt="Ananya" />
      </div>
    </section>
  );
}

export default Hero;