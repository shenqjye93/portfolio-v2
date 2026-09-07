"use client";

import { useEffect, useState } from "react";
import { sections } from "@/lib/site";

export default function Nav() {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer whichever qualifying section sits highest on screen, so
        // scrolling up and down both land on the same answer.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setCurrent(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="mt-14 max-lg:hidden" aria-label="Sections">
      <ul className="flex list-none flex-col gap-1.5 p-0">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              aria-current={current === s.id ? "true" : undefined}
              className="nav-link flex items-center gap-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-overlay0 transition-colors duration-200 ease-disc hover:text-text aria-[current]:text-text"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
