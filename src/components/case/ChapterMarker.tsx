import { type ReactNode, useEffect, useRef, useState } from "react";

/**
 * "—— 01 / The intention". Each time it scrolls into view, the text bumps
 * into the rule, nudges it, and springs back, to draw the eye to the new chapter.
 */
export function ChapterMarker({ children }: { children: ReactNode }) {
	const ref = useRef<HTMLDivElement>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;
		// The bottom 55% of the screen is ignored, so the bump fires once the
		// marker rises a little above the middle of the screen. It resets when the
		// marker leaves that zone, so it replays every time the reader comes back.
		const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
			rootMargin: "0px 0px -55% 0px",
		});
		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	return (
		<div ref={ref} data-bump={inView} className="group flex items-center gap-3">
			<span aria-hidden className="h-px w-7 origin-left bg-marine group-data-[bump=true]:animate-marker-rule" />
			<p className="type-mono text-moss-ink group-data-[bump=true]:animate-marker-bump">{children}</p>
		</div>
	);
}
