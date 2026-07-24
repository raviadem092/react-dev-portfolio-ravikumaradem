import React from "react";
import RecordentThumbnail from "../assets/images/recordent.png";
import FlipYourCoin from "../assets/images/FlipYourCoin.png";
import ecart from "../assets/images/ecart.png";
import financeCalc from "../assets/images/interestDashboard.png";
import makeANote from "../assets/images/makeANote.png";
import "../assets/styles/Project.scss";

function Project() {
    const projects = [
        {
            title: "Recordent",
            image: RecordentThumbnail,
            liveUrl: "https://recordent.com",
            technologies: ["React", "Node.js", "MySQL"],
            description:
                "Contributed to a full-stack financial data platform focused on digitizing credit records and managing loan-related information. Worked across React-based dashboards, backend services, database-driven workflows, and analytics features to support financial data management and reporting.",
        },
        {
            title: "Finance Calculator Dashboard",
            image: financeCalc,
            liveUrl: "https://financecalculatorravikumaradem.vercel.app/",
            technologies: [
                "React",
                "JavaScript",
                "Financial Logic",
                "PDF Export",
            ],
            description:
                "Built an interactive financial calculator dashboard for EMI, loan, and savings calculations. Implemented real-time calculation workflows and PDF report generation, providing users with a simple interface for analyzing and exporting financial results.",
        },
        {
            title: "E-Kart",
            image: ecart,
            liveUrl: "https://e-kart-ravikumaradem.vercel.app/",
            technologies: ["React", "JavaScript", "E-Commerce"],
            description:
                "Developed an e-commerce application focused on product browsing, shopping workflows, and order management. Designed reusable frontend components and implemented application flows to provide a responsive and user-friendly online shopping experience.",
        },
        {
            title: "Make A Note",
            image: makeANote,
            liveUrl: "https://make-a-note-ravikumaradem.vercel.app/",
            technologies: ["React", "JavaScript", "CRUD"],
            description:
                "Built a lightweight note-taking application with essential create, edit, and delete functionality. Focused on a minimal interface and straightforward user experience for fast and distraction-free note management.",
        },
        {
            title: "Make Your Call",
            image: FlipYourCoin,
            liveUrl: "https://makeyourcall.vercel.app/",
            technologies: ["React", "JavaScript", "Analytics"],
            description:
                "Developed an interactive virtual coin-flip application that maintains the latest toss history and provides statistics and analytics based on user activity. Built with React and JavaScript with a focus on interactive UI and real-time state management.",
        },
    ];

    return (
        <section className="projects-container" id="projects">
            <h1>Projects</h1>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={project.image}
                                className="zoom"
                                alt={`${project.title} project thumbnail`}
                                width="100%"
                                height="300"
                            />
                        </a>

                        <div className="project-content">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <h2>{project.title}</h2>
                            </a>

                            <div className="project-technologies">
                                {project.technologies.map(
                                    (technology, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="technology-tag"
                                        >
                                            {technology}
                                        </span>
                                    )
                                )}
                            </div>

                            <p>{project.description}</p>

                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="project-link"
                            >
                                View Project →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;
