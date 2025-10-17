import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faNodeJs, 
  faAngular,
  faJs, 
  faHtml5, 
  faCss3Alt 
} from "@fortawesome/free-brands-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Chip from '@mui/material/Chip';

const timelineData = [
  {
    title: "Full Stack Software Developer",
    subtitle: "Hyderabad, India",
    date: "2025 - Present",
    techIcons: [faAngular, faNodeJs],
    techLabels: ["Angular", "Node.js", "MySQL", "Azure"],
    bgColor: "#61dafb",
    color: "#000",
    titleColor: "#0d3c61" // Darker blue for title
  },
  {
    title: "Staff Engineer Intern",
    subtitle: "Hyderabad, India",
    date: "2024 - 2025",
    techIcons: [faAngular,faReact, faNodeJs, faJs],
    techLabels: ["Angular", "React.js", "Node.js", "JavaScript"],
    bgColor: "#8bc34a",
    color: "#000",
    titleColor: "#33691e" // Darker green for title
  },
  {
    title: "Frontend Developer Freelancer",
    subtitle: "Hyderabad, India",
    date: "2023 - 2023",
    techIcons: [faHtml5, faCss3Alt, faJs, faReact],
    techLabels: ["HTML5", "CSS3", "JavaScript", "React"],
    bgColor: "#bc4817ff",
    color: "#fff",
    titleColor: "#873b0bff" // Darker orange/red for title
  }
];

function Timeline() {
  return (
    <div id="history" style={{ padding: "2rem 0" }}>
      <div style={{ margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem", color: "#0a4d71ff" }}>
          Career History
        </h1>
        <VerticalTimeline>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={item.date}
              iconStyle={{ background: item.bgColor, color: item.color }}
              icon={<FontAwesomeIcon icon={item.techIcons[0]} />}
              contentStyle={{ borderTop: `3px solid ${item.bgColor}` }}
            >
              <h3 style={{ fontSize: "1.4rem", fontWeight: 600, color: item.titleColor }}>
                {item.title}
              </h3>
              <h4 style={{ fontSize: "1rem", fontWeight: 400, color: "#555" }}>
                {item.subtitle}
              </h4>
              
              {/* Tech Chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
                {item.techLabels.map((label, i) => (
                  <Chip 
                    key={i} 
                    label={label} 
                    size="small" 
                    style={{ 
                      backgroundColor: item.bgColor, // slight transparency
                      color: item.color,
                      fontWeight: 500
                    }} 
                  />
                ))}
              </div>

              {/* Brand Icons Inline */}
              <div style={{ display: "flex", gap: "0.8rem", marginTop: "1rem" }}>
                {item.techIcons.map((icon, i) => (
                  <FontAwesomeIcon 
                    key={i} 
                    icon={icon} 
                    style={{ fontSize: "1.5rem", color: item.bgColor }} 
                  />
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
