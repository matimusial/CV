"use client";

import { useEffect } from "react";

export function DynamicBackground() {
  useEffect(() => {
    const root = document.documentElement;
    const controller = new AbortController();
    let frame = 0;

    updateDynamicBackgroundScroll(root);
    root.style.setProperty("--bg-x", `${Math.round(window.innerWidth * 0.68)}px`);
    root.style.setProperty("--bg-y", `${Math.round(window.innerHeight * 0.28)}px`);

    window.addEventListener("scroll", () => updateDynamicBackgroundScroll(root), {
      passive: true,
      signal: controller.signal,
    });

    window.addEventListener(
      "mousemove",
      (event) => {
        const pointerX = event.clientX;
        const pointerY = event.clientY;

        window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(() => updateDynamicBackgroundPointer(root, pointerX, pointerY));
      },
      { passive: true, signal: controller.signal },
    );

    return () => {
      window.cancelAnimationFrame(frame);
      controller.abort();
    };
  }, []);

  return <div className="dynamic-background" />;
}

function updateDynamicBackgroundScroll(root: HTMLElement) {
  const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
  const progress = window.scrollY / maxScroll;

  root.style.setProperty("--bg-scroll", `${Math.round(progress * 100)}%`);
  root.style.setProperty("--bg-shift", `${Math.round(progress * 220)}px`);
}

function updateDynamicBackgroundPointer(root: HTMLElement, pointerX: number, pointerY: number) {
  root.style.setProperty("--bg-x", `${pointerX}px`);
  root.style.setProperty("--bg-y", `${pointerY}px`);
}
