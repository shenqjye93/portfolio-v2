"use client";

import { useEffect, useRef } from "react";

const EASE = 0.12; 
const SETTLE_PX = 0.35; 

export default function Torch() {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

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
				frame = 0; // settled: stop burning frames until next move
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

		const onMove = (e: PointerEvent) => {
			if (e.pointerType !== "mouse") return;
			targetX = e.clientX;
			targetY = e.clientY;
			wake();
		};

		// Fade rather than freeze when the pointer leaves the window.
		const onLeave = () => {
			el.style.opacity = "0";
		};
		const onEnter = () => {
			el.style.opacity = "1";
		};

		window.addEventListener("pointermove", onMove, { passive: true });
		document.addEventListener("pointerleave", onLeave);
		document.addEventListener("pointerenter", onEnter);
		draw();

		return () => {
			window.removeEventListener("pointermove", onMove);
			document.removeEventListener("pointerleave", onLeave);
			document.removeEventListener("pointerenter", onEnter);
			if (frame) cancelAnimationFrame(frame);
		};
	}, []);

	return <div ref={ref} className="torch" aria-hidden="true" />;
}
