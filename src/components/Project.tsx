import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ScrollReveal from "./ScrollReveal";
import RecordentThumbnail from "../assets/images/recordent.png";
import FlipYourCoin from "../assets/images/FlipYourCoin.png";
import ecart from "../assets/images/ecart.png";
import financeCalc from "../assets/images/interestDashboard.png";
import makeANote from "../assets/images/makeANote.png";
import "../assets/styles/Project.scss";

const projects = [
        {
            title: "Cloud-Native Platform Engineering",
            technologies: ["AWS", "Azure", "Docker", "Amazon ECS", "Terraform", "GitHub Actions", "Backend", "Databases"],
            description: "Cloud-native engineering across AWS and Azure: building containerized services, backend and database integrations, infrastructure as code, and automated delivery pipelines. Amazon ECS is one part of a broader scalable deployment approach.",
            featured: true,
        },
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

function Project() {
    return (
        <section className="projects-container" id="projects" aria-labelledby="projects-title">
            <ScrollReveal>
            <div className="section-heading projects-heading" data-reveal>
                <p className="section-eyebrow">Selected work</p>
                <h1 id="projects-title">Projects with purpose.</h1>
                <p className="section-intro">A blend of cloud platform work, product engineering, and practical applications.</p>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <article className={`project-card ${project.featured ? "project-card--featured" : ""}`} key={project.title} data-reveal>
                        {project.image ? <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-image-link" aria-label={`Open ${project.title}`}>
                            <img src={project.image} alt={`${project.title} project preview`} />
                        </a> : <div className="project-featured-visual" aria-hidden="true">
                            <span>Azure</span><i>+</i><strong>AWS</strong>
                            <div className="project-featured-flow"><em>Cloud-native</em><em>Docker</em><em>Terraform</em><em>CI/CD</em></div>
                        </div>}

                        <div className="project-card__content">
                            {project.featured && <span className="featured-label">Current focus</span>}
                            <h2>{project.title}</h2>

                            <div className="project-stack">
                                {project.technologies.map(
                                    (technology, techIndex) => (
                                        <span key={techIndex}>{technology}</span>
                                    )
                                )}
                            </div>

                            <p>{project.description}</p>

                            {project.liveUrl && <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="project-link"
                            >
                                View project <ArrowOutwardIcon fontSize="small" />
                            </a>}
                        </div>
                    </article>
                ))}
            </div>
            </ScrollReveal>
        </section>
    );
}

export default Project;
