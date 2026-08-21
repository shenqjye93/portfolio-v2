// Highlights the rail nav entry for whatever section is currently in view.
//
// The rootMargin trims the viewport to a band across the upper-middle of the
// screen. Without it, two adjacent sections are both "intersecting" for most
// of a scroll and the highlight flickers between them.

export function initNav() {
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(".nav a[data-section]"),
  );
  if (!links.length) return;

  const byId = new Map(links.map((a) => [a.dataset.section!, a]));
  const targets = links
    .map((a) => document.getElementById(a.dataset.section!))
    .filter((el): el is HTMLElement => Boolean(el));

  let current = "";
  const setCurrent = (id: string) => {
    if (id === current) return;
    current = id;
    for (const [key, link] of byId) {
      if (key === id) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    }
  };

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
}
