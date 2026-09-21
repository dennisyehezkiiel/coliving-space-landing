"use client";

import { useEffect, useRef, useState } from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined" || !("matchMedia" in window)) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(prefersReducedMotion);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, inView]);

  return { ref, inView };
}
