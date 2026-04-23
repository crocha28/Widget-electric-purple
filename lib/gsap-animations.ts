"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useFadeUp(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 40 });
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [delay]);

  return ref;
}

export function useStaggerChildren(stagger = 0.12) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.children;
    gsap.set(children, { opacity: 0, y: 60 });

    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger,
          ease: "power3.out",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [stagger]);

  return ref;
}

export function useHeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    const headline = el.querySelector("[data-anim='headline']");
    const display = el.querySelector("[data-anim='display']");
    const sub = el.querySelector("[data-anim='sub']");
    const buttons = el.querySelector("[data-anim='buttons']");
    const symbol = el.querySelector("[data-anim='symbol']");

    gsap.set([headline, display, sub, buttons], { opacity: 0, y: 30 });
    if (symbol) gsap.set(symbol, { opacity: 0, scale: 0.8 });

    tl.to(symbol, { opacity: 0.15, scale: 1, duration: 1.2 }, 0)
      .to(headline, { opacity: 1, y: 0, duration: 0.8 }, 0.2)
      .to(display, { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, 0.4)
      .to(sub, { opacity: 1, y: 0, duration: 0.7 }, 0.8)
      .to(buttons, { opacity: 1, y: 0, duration: 0.7 }, 1);

    return () => {
      tl.kill();
    };
  }, []);

  return containerRef;
}

export function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.to(el, {
      y: () => speed * -100,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [speed]);

  return ref;
}
