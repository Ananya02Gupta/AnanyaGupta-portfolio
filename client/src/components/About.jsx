import {
  FaUserGraduate,
  FaLaptopCode,
  FaLocationDot,
} from "react-icons/fa6";

function About() {
  return (
    <section className="about" id="about">

      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <p className="about-text">
  Hello! I'm <strong>Ananya Gupta</strong>, a passionate Full Stack Developer
  and BCA student specializing in Mobile Application & Web Technology.
  I have hands-on experience in building modern, responsive, and scalable
  web applications using React.js, Node.js, Express.js, MongoDB,
  JavaScript, HTML, and CSS.

  <br /><br />

  Through multiple internships in Full Stack and Web Development, I have
  worked on real-world projects, collaborated in professional environments,
  and gained practical experience in frontend and backend development.
  I enjoy solving problems, learning new technologies, and turning ideas
  into user-friendly digital products.

  <br /><br />

  I am currently seeking opportunities where I can contribute my technical
  skills, continue learning from experienced professionals, and grow as a
  Full Stack Developer while building impactful software solutions.
</p>

      <div className="about-grid">

        {/* Education */}
        <div className="about-card">
          <FaUserGraduate className="about-icon" />

          <h3>Education</h3>

          <p>BCA</p>

          <small>Mobile Application & Web Technology</small>
        </div>

        {/* Experience */}
        <div className="about-card">
          <FaLaptopCode className="about-icon" />

          <h3>Experience</h3>

          <p>3 Internships</p>

          <small>Full Stack & Web Development</small>
        </div>

        {/* Location */}
        <div className="about-card">
          <FaLocationDot className="about-icon" />

          <h3>Location</h3>

          <p>India</p>

          <small>Available for Opportunities</small>
        </div>

      </div>

    </section>
  );
}

export default About;