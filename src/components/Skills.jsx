import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaWordpress,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaSearch,
  FaBullhorn,
  FaBrain,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiElementor,
  SiWoocommerce,
} from "react-icons/si";
import "./../../public/css/skills.css";
const skills = [
  { icon: <FaHtml5 />, name: "HTML5", level: 95 },
  { icon: <FaCss3Alt />, name: "CSS3", level: 95 },
  { icon: <FaJs />, name: "JavaScript", level: 85 },
  { icon: <FaReact />, name: "React", level: 75 },
  { icon: <FaBootstrap />, name: "Bootstrap", level: 95 },
  { icon: <SiTailwindcss />, name: "Tailwind", level: 80 },
  { icon: <FaWordpress />, name: "WordPress", level: 95 },
  { icon: <SiElementor />, name: "Elementor", level: 95 },
  { icon: <SiWoocommerce />, name: "WooCommerce", level: 90 },
  { icon: <FaGitAlt />, name: "Git", level: 80 },
  { icon: <FaGithub />, name: "GitHub", level: 80 },
  { icon: <FaFigma />, name: "Figma", level: 75 },
  { icon: <FaSearch />, name: "Basic SEO", level: 80 },
  { icon: <FaBullhorn />, name: "Social Media", level: 85 },
  { icon: <FaBrain />, name: "AI Tools", level: 90 },
  
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">

        <div className="section-title">
          <h5>MY SKILLS</h5>
          <h2>Technical Skills</h2>
          <p>
            Technologies, CMS platforms, tools and digital skills.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-icon">
                {skill.icon}
              </div>

              <h4>{skill.name}</h4>

              <span>{skill.level}%</span>

              <div className="progress">
                <div
                  className="fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;