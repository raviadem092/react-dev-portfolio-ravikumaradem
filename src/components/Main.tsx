import { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import ravikumaradem from "../assets/images/ravikumaradem.jpeg";

const words = [
  "Software Engineer",
  "Full Stack Developer",
  "React & Node.js Developer",
  "Building Scalable Web Applications",
  "Open Source Enthusiast",
];

function Main(): JSX.Element {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const typingSpeed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = currentWord.substring(0, text.length + 1);
        setText(next);

        if (next === currentWord) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        const next = currentWord.substring(0, text.length - 1);
        setText(next);

        if (next === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <section id="banner">
      <div className="container">
        <div className="about-section">
          <div className="image-wrapper">
            <img src={ravikumaradem} alt="Ravi Kumar Yadav" />
          </div>

          <div className="content">
            <div className="social_icons">
              <a
                href="https://github.com/raviadem092"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/ravikumaradem/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>

            <h1>Ravi Kumar Yadav</h1>

            <p className="typewriter">
              {text}
              <span className="cursor">|</span>
            </p>

            <div className="mobile_social_icons">
              <a
                href="https://github.com/raviadem092"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/ravikumaradem/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
