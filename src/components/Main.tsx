import { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import ravikumaradem from "../assets/images/ravikumaradem.jpeg";

const words = [
    "Full Stack Software Engineer",
    "AWS & Azure Developer Associate",
    "Backend & Database Specialist",
    "Docker, Terraform & CI/CD Builder",
    "Full Stack Solutions Architect",
];

type MainProps = { onAsk: (question: string) => void };

function Main({ onAsk }: MainProps): JSX.Element {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [askInput, setAskInput] = useState("");

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
            <form className="hero-ask" onSubmit={(event) => { event.preventDefault(); onAsk(askInput); setAskInput(""); }}>
              <label htmlFor="hero-ask-input">Ask Ravi about his work</label>
              <div className="hero-ask__field">
                <input id="hero-ask-input" value={askInput} onChange={(event) => setAskInput(event.target.value)} placeholder="Ask about cloud, projects, or skills..." />
                <button type="submit" disabled={!askInput.trim()}>Ask <span aria-hidden="true">↗</span></button>
              </div>
            </form>
            <div className="hero-prompts" aria-label="Suggested questions">
              {["Cloud experience", "Featured projects", "Tech stack"].map((prompt) => <button key={prompt} type="button" onClick={() => onAsk(`Tell me about Ravi's ${prompt.toLowerCase()}.`)}>{prompt}</button>)}
            </div>

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
