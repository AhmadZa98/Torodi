"use client";

import { useEffect, useRef } from "react";

/**
 * AnimatedBackground
 * - Subtle, lively background for white UIs
 * - Follows mouse cursor with a soft spotlight
 * - Includes two floating gradient blobs with gentle motion
 * - Non-interactive (pointer-events: none) and very light on CPU
 */
export default function AnimatedBackground() {
  const posRef = useRef({ x: 0.5, y: 0.5 }); // normalized 0..1
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const update = (e: MouseEvent) => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      posRef.current.x = e.clientX / w;
      posRef.current.y = e.clientY / h;
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null;
          const root = document.documentElement;
          root.style.setProperty("--mx", posRef.current.x.toString());
          root.style.setProperty("--my", posRef.current.y.toString());
        });
      }
    };

    // Center by default
    const root = document.documentElement;
    root.style.setProperty("--mx", "0.5");
    root.style.setProperty("--my", "0.5");

    window.addEventListener("mousemove", update, { passive: true });
    return () => {
      window.removeEventListener("mousemove", update as EventListener);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="bg-animated" aria-hidden>
      {/* Spotlight layer (radial gradient driven by CSS vars) */}
      <div className="bg-spotlight" />
      {/* Gradient blobs */}
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
    </div>
  );
}
