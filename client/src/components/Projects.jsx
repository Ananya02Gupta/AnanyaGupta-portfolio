import {
  FaCloudSun,
  FaMoneyBillWave,
  FaImage,
  FaCheckCircle,
  FaCalculator,
  FaGlobe,
  FaLaptopCode,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    icon: <FaMoneyBillWave />,
    title: "Expense Tracker",
    description:
      "A full-stack expense tracker to manage income and expenses with charts, authentication, and budget insights.",
    tech: "React • Firebase • Chart.js",
    github: "https://github.com/Ananya02Gupta/expense-tracker",
    demo: "https://expense-tracker-eight-lovat-42.vercel.app",
  },

  {
    icon: <FaCloudSun />,
    title: "SkyCast Weather",
    description:
      "Modern weather forecasting application with live weather, 5-day forecast, animations and responsive UI.",
    tech: "React • Node.js • Express • OpenWeather API",
    github: "https://github.com/Ananya02Gupta/skycast-weather-app",
    demo: "https://skycast-frontend-seven.vercel.app",
  },

  {
    icon: <FaLaptopCode />,
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website showcasing my skills, internships, projects and contact information.",
    tech: "React • CSS • JavaScript",
    github: "https://github.com/Ananya02Gupta/AnanyaGupta-portfolio.git",
    demo: "https://ananya-gupta-portfolio.vercel.app/",
  },

  {
    icon: <FaImage />,
    title: "Image Gallery",
    description:
      "Responsive image gallery with beautiful layout, hover effects and modern UI.",
    tech: "HTML • CSS • JavaScript",
    github:
      "https://github.com/Ananya02Gupta/CodeAlpha_Image_Gallery",
    demo:
      "https://ananya02gupta.github.io/CodeAlpha_Image_Gallery/",
  },

  {
    icon: <FaCheckCircle />,
    title: "To-Do List",
    description:
      "Simple and responsive task management application to add, complete and delete daily tasks.",
    tech: "HTML • CSS • JavaScript",
    github:
      "https://github.com/Ananya02Gupta/TO-DO-LIST",
    demo:
      "https://ananya02gupta.github.io/TO-DO-LIST/",
  },

  {
    icon: <FaCalculator />,
    title: "Calculator",
    description:
      "Modern calculator with responsive interface supporting all basic arithmetic operations.",
    tech: "HTML • CSS • JavaScript",
    github:
      "https://github.com/Ananya02Gupta/CodeAlpha_Calculator",
    demo:
      "https://ananya02gupta.github.io/CodeAlpha_Calculator/",
  },

  {
    icon: <FaGlobe />,
    title: "My Website",
    description:
      "A responsive website developed using modern web technologies with clean design and user-friendly interface.",
    tech: "HTML • CSS • JavaScript",
    github:
      "https://github.com/Ananya02Gupta/My-website",
    demo:
      "https://ananya02gupta.github.io/My-website/",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">{project.icon}</div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <small>{project.tech}</small>

            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
