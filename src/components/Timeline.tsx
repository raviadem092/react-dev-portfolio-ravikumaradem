import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faAws, faDocker, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import ScrollReveal from "./ScrollReveal";
import "../assets/styles/Timeline.scss";

const experience = [
  {
    period: "2025 — Present",
    role: "Full Stack Software Developer",
    focus: "Cloud-native platform engineering",
    summary: "Building and modernizing cloud-native solutions across AWS and Azure, with an emphasis on dependable services, delivery automation, and maintainable foundations.",
    bullets: ["Hands-on experience supporting workloads across Azure and AWS.", "Building backend service workflows and database-driven integrations for production applications.", "Containerizing services and automating cloud infrastructure and deployments with Terraform and GitHub Actions."],
    stack: ["AWS", "Azure", "Docker", "Amazon ECS", "Terraform", "GitHub Actions", "Databases"],
    icons: [faAws, faDocker, faNodeJs],
  },
  {
    period: "2024 — 2025",
    role: "Staff Engineer Intern",
    focus: "Product engineering",
    summary: "Contributed to full-stack product delivery across web and mobile-facing experiences.",
    bullets: ["Built and maintained features across Angular, React Native, Node.js, and JavaScript.", "Worked across application layers to turn product requirements into maintainable releases."],
    stack: ["Angular", "React Native", "Node.js", "JavaScript"],
    icons: [faAngular, faReact, faNodeJs],
  },
  {
    period: "2023",
    role: "Frontend Developer · Freelancer",
    focus: "Web application development",
    summary: "Delivered responsive, user-focused web interfaces for independent projects.",
    bullets: ["Created clean interfaces and interactive flows using React, JavaScript, HTML, and CSS."],
    stack: ["React", "JavaScript", "HTML5", "CSS3"],
    icons: [faReact],
  },
];

function Timeline() {
  return <section id="history" className="experience-section" aria-labelledby="experience-title">
    <ScrollReveal className="experience-shell">
      <div className="section-heading experience-heading" data-reveal>
        <p className="section-eyebrow">Experience</p>
        <h1 id="experience-title">Engineering systems that keep moving.</h1>
        <p className="section-intro">A career path spanning full-stack product work, backend services, cloud infrastructure, and dependable delivery.</p>
      </div>
      <div className="experience-list">
        {experience.map((item, index) => <article className="experience-card" key={item.role} data-reveal>
          <div className="experience-card__rail"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
          <div className="experience-card__main">
            <div className="experience-card__meta"><p>{item.period}</p><span>{item.focus}</span></div>
            <h2>{item.role}</h2>
            <p className="experience-card__summary">{item.summary}</p>
            <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            <div className="experience-card__footer">
              <div className="tech-chip-row">{item.stack.map((technology) => <span className="tech-chip" key={technology}>{technology}</span>)}</div>
              <div className="experience-icons" aria-hidden="true">{item.icons.map((icon, iconIndex) => <FontAwesomeIcon icon={icon} key={iconIndex} />)}</div>
            </div>
          </div>
        </article>)}
      </div>
    </ScrollReveal>
  </section>;
}

export default Timeline;
