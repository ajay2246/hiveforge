"use client";

import * as React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  once?: boolean;
};

export default function Reveal({
  children,
  className = "",
  delayMs = 0,
  once = true,
}: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`hf-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
