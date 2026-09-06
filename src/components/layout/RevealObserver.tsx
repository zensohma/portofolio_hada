"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (elements.length === 0) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      elements.forEach((element) => {
        element.classList.add("is-revealed");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    for (const element of elements) {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add("is-revealed");
      } else {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
