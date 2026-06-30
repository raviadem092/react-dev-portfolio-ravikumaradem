import { useEffect, useRef, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import ravikumaradem from "../assets/images/ravikumaradem.jpeg";


type CursorPosition = [number, number];

class Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  private ctx: CanvasRenderingContext2D;
  private width: () => number;
  private height: () => number;

  constructor(
    ctx: CanvasRenderingContext2D,
    width: () => number,
    height: () => number
  ) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.x = Math.random() * this.width();
    this.y = Math.random() * this.height();
    this.size = Math.random() * 3 + 1;
    this.vx = (Math.random() - 0.5) * 0.8;
    this.vy = (Math.random() - 0.5) * 0.8;
  }

  draw(): void {
    this.ctx.beginPath();
    this.ctx.fillStyle = "#fff";
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  }

  update(): void {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x <= 0 || this.x >= this.width()) this.vx *= -1;
    if (this.y <= 0 || this.y >= this.height()) this.vy *= -1;
  }
}

function Main(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const cursorRef = useRef<CursorPosition>([-1500, -1500]);
  const particlesRef = useRef<Particle[]>([]);

  const CURSOR_RADIUS = 100;
  const PARTICLE_COUNT = 150;

  const words = [
    "Software Engineer",
    "Full Stack Developer",
    "React & Node.js Developer",
    "Building Scalable Web Applications",
    "Open Source Enthusiast",
  ];

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR: number = window.devicePixelRatio || 1;

    const resizeCanvas = (): void => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * DPR;
      canvas.height = height * DPR;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    resizeCanvas();

    const getWidth = (): number => canvas.width / DPR;
    const getHeight = (): number => canvas.height / DPR;

    particlesRef.current = Array.from(
      { length: PARTICLE_COUNT },
      () => new Particle(ctx, getWidth, getHeight)
    );

    const animate = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const [cx, cy] = cursorRef.current;

      particlesRef.current.forEach((p) => {
        const dx = p.x - cx;
        const dy = p.y - cy;
        const dist = Math.hypot(dx, dy);

        if (dist < CURSOR_RADIUS) {
          ctx.beginPath();
          ctx.strokeStyle = "rgba(255,255,255,0.6)";
          ctx.moveTo(cx, cy);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }

        p.update();
        p.draw();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const onMouseMove = (e: MouseEvent): void => {
      cursorRef.current = [e.clientX, e.clientY];
    };

    const onMouseLeave = (): void => {
      cursorRef.current = [-1500, -1500];
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", resizeCanvas);

    return (): void => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section id="banner">
      <canvas
        ref={canvasRef}
        id="canvas"
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="about-section">
          <div className="image-wrapper">
            <img src={ravikumaradem} alt="Avatar" />
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
