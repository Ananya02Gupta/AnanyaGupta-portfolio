import {
  FaBriefcase,
  FaLaptopCode,
  FaCode,
} from "react-icons/fa";

function Experience() {
  return (
    <section className="experience" id="experience">

      <h2 className="section-title">
        My <span>Experience</span>
      </h2>

      <div className="experience-grid">

        <div className="experience-card">
          <FaLaptopCode className="experience-icon" />
          <h3>Full Stack Engineering Intern</h3>
          <h4>Zethata Algorithm Pvt. Ltd.</h4>

          <p>
            Worked on Full Stack Web Development using React.js,
            Node.js, Express.js and MongoDB.
          </p>
          <small className="tech-stack">
            React.js • Node.js • Express.js • MongoDB • Git • REST API
          </small>
        </div>

        <div className="experience-card">
          <FaBriefcase className="experience-icon" />
          <h3>Full Stack Developer Intern</h3>
          <h4>Codec Technologies</h4>

          <p>
            Built responsive web applications and REST APIs using
            React.js, Node.js and MongoDB.
          </p>
          <small className="tech-stack">
            React.js • Node.js • Express.js • MongoDB • Firebase • Git
          </small>
        </div>

        <div className="experience-card">
          <FaCode className="experience-icon" />
          <h3>Web Development Intern</h3>
          <h4>Codec Technologies</h4>

          <p>
            Developed modern and responsive websites using
            HTML, CSS, JavaScript and React.js.
          </p>
          <small className="tech-stack">
            HTML • CSS • JavaScript • React.js • Bootstrap • Git
          </small>
        </div>

      </div>

    </section>
  );
}

export default Experience;