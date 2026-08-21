// Torchlight that lags behind the cursor instead of tracking it rigidly —
// a thrown disc settles, it does not stop dead.
//
// Two positions are kept: the raw pointer target, and the rendered position
// that eases toward it each frame. The rAF loop parks itself once the two
// converge so an idle page costs nothing.

const EASE = 0.12;          // per-frame fraction of remaining distance
const SETTLE_PX = 0.35;     // below this, snap and stop the loop

export function initTorch(el: HTMLElement) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
  if (reduced.matches || !fine.matches) return;

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let x = targetX;
  let y = targetY;
  let frame = 0;

  const draw = () => {
    el.style.setProperty("--torch-x", `${x.toFixed(1)}px`);
    el.style.setProperty("--torch-y", `${y.toFixed(1)}px`);
  };

  const tick = () => {
    const dx = targetX - x;
    const dy = targetY - y;

    if (Math.abs(dx) < SETTLE_PX && Math.abs(dy) < SETTLE_PX) {
      x = targetX;
      y = targetY;
      draw();
      frame = 0;            // settled: stop burning frames until next move
      return;
    }

    x += dx * EASE;
    y += dy * EASE;
    draw();
    frame = requestAnimationFrame(tick);
  };

  const wake = () => {
    if (!frame) frame = requestAnimationFrame(tick);
  };

  window.addEventListener(
    "pointermove",
    (e) => {
      if (e.pointerType !== "mouse") return;
      targetX = e.clientX;
      targetY = e.clientY;
      wake();
    },
    { passive: true },
  );

  // Fade rather than freeze when the pointer leaves the window.
  document.addEventListener("pointerleave", () => { el.style.opacity = "0"; });
  document.addEventListener("pointerenter", () => { el.style.opacity = "1"; });

  draw();
}
