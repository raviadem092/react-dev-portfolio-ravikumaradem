import React, { PropsWithChildren, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props { className?: string; childClassName?: string; transitionDuration?: number; delay?: number; }

export default function FadeIn({ children, className, childClassName }: PropsWithChildren<Props>) {
  const wrapper = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.utils.toArray<HTMLElement>(".page-section-reveal").forEach((section) => {
        gsap.fromTo(section, { autoAlpha: 0, y: 32 }, {
          autoAlpha: 1, y: 0, duration: 0.75, ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 82%", once: true },
        });
      });
    }, wrapper);
    return () => context.revert();
  }, []);

  return <div ref={wrapper} className={className}>
    {React.Children.map(children, (child, index) => <div className={`page-section-reveal ${childClassName || ""}`} key={index}>{child}</div>)}
  </div>;
}
