import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faAngular,
  faJava,
  faNodeJs,
  faGit,
  faSquareGithub,
  faMicrosoft,
  faBootstrap,
  faHtml5,
  faCss3Alt,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const frontendLabels = [
  "Angular", "React.js", "JavaScript", "TypeScript",
  "HTML5", "CSS3", "Bootstrap", "Responsive UI"
];

const backendLabels = [
  "Node.js", "Express.js", "Java", "REST APIs", "MySQL"
];

const devopsLabels = [
  "Git", "Maven", "Postman", "Azure Fundamentals"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Tech Stack</h1>
        <div className="skills-grid">

          {/* Frontend Development */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Frontend Development</h3>
            <p>
              I build responsive and interactive web interfaces using modern frameworks
              like React and Angular, ensuring smooth user experiences across devices.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {frontendLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
            <div className="brand-icons">
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faCss3Alt} />
              <FontAwesomeIcon icon={faJs} />
              <FontAwesomeIcon icon={faBootstrap} />
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faAngular} />
            </div>
          </div>

          {/* Backend Development */}
          <div className="skill">
            <FontAwesomeIcon icon={faJava} size="3x" />
            <h3>Backend Development</h3>
            <p>
              I develop efficient and secure backend applications using Node.js and Java,
              building REST APIs and integrating databases like MySQL.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {backendLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
            <div className="brand-icons">
              <FontAwesomeIcon icon={faJava} />
              <FontAwesomeIcon icon={faNodeJs} />
              <FontAwesomeIcon icon={faMicrosoft} />
            </div>
          </div>

          {/* DevOps & Tools */}
          <div className="skill">
            <FontAwesomeIcon icon={faSquareGithub} size="3x" />
            <h3>DevOps & Tools</h3>
            <p>
              I automate development and deployment pipelines using Git, Vercel and Azure,
              ensuring streamlined CI/CD processes and optimized workflows.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {devopsLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
            <div className="brand-icons">
              <FontAwesomeIcon icon={faGit} />
              <FontAwesomeIcon icon={faMicrosoft} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;
