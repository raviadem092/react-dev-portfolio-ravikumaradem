import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faAngular,
  faJs,
  faCss3Alt,
  faMicrosoft,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import Chip from "@mui/material/Chip";

const theme = {
  text: "#1f2937",
  muted: "#6b7280",
  cardBg: "#ffffff",
  border: "#e5e7eb",
};

const timelineData = [
  {
    title: "Full Stack Software Developer",
    subtitle: "Hyderabad, India",
    date: "2025 - Present",
    techIcons: [faNodeJs, faAngular, faMicrosoft, faDocker],
    techLabels: ["Angular", "Node.js", "MySQL", "Azure"],
    color: "#2563eb",
  },
  {
    title: "Staff Engineer Intern",
    subtitle: "Hyderabad, India",
    date: "2024 - 2025",
    techIcons: [faNodeJs, faAngular, faReact, faJs],
    techLabels: ["Angular", "React Native", "Node.js", "JavaScript"],
    color: "#f59e0b",
  },
  {
    title: "Frontend Developer Freelancer",
    subtitle: "Hyderabad, India",
    date: "2023",
    techIcons: [faReact, faCss3Alt, faJs],
    techLabels: ["HTML5", "CSS3", "JavaScript", "React"],
    color: "#10b981",
  },
];

function Timeline() {
  return (
    <div id="history" className="timeline-wrapper">
      <h1 className="timeline-title" style={{ textAlign: "center"}}>Career History</h1>

      <VerticalTimeline lineColor="#e5e7eb">
        {timelineData.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          date={item.date}
          dateClassName="timeline-date"
          iconStyle={{ background: item.color, color: "#fff" }}
          icon={<FontAwesomeIcon icon={item.techIcons[0]} />}
          contentStyle={{
            background: theme.cardBg,
            borderTop: `3px solid ${item.color}`,
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            borderRadius: "12px",
          }}
          contentArrowStyle={{
            borderRight: `7px solid ${theme.cardBg}`,
          }}
        >
            <h3 className="timeline-role" style={{ color: theme.text }}>
              {item.title}
            </h3>

            <h4 className="timeline-location" style={{ color: theme.muted }}>
              {item.subtitle}
            </h4>

            {/* Chips */}
            <div className="chip-row">
              {item.techLabels.map((label, i) => (
                <Chip
                  key={i}
                  label={label}
                  size="small"
                  className="tech-chip"
                  style={{
                    borderColor: item.color,
                    color: item.color,
                  }}
                />
              ))}
            </div>

            {/* Icons */}
            <div className="icon-row">
              {item.techIcons.map((icon, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={icon}
                  className="tech-icon"
                  style={{ color: item.color }}
                />
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;