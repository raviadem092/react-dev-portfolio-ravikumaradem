import { ReactNode, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

function ScrollReveal({ children, className = "", stagger = 0.12 }: ScrollRevealProps) {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(targets, { autoAlpha: 0, y: 28 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger,
        scrollTrigger: { trigger: container.current, start: "top 78%", once: true },
      });
    }, container);

    return () => context.revert();
  }, [stagger]);

  return <div ref={container} className={className}>{children}</div>;
}

export default ScrollReveal;
