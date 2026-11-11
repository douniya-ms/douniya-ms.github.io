import type { CSSProperties } from "react";
import { ArrowRight } from "#/components/icons";

/**
 * Figma "Navigation Button": 34px square, 1px marine border, 4px radius.
 * Put it inside an element with the `group` class: when that element is
 * hovered or focused, a marine circle splashes out from the side the arrow
 * points away from, and the arrow nudges forward.
 * tone "onMoss" keeps the arrow lavender (mobile moss bar).
 */
export function NavigationButton({
	direction,
	tone = "default",
}: {
	direction: "left" | "right";
	tone?: "default" | "onMoss";
}) {
	const origin = direction === "right" ? "0% 100%" : "100% 100%";
	const arrow =
		tone === "onMoss"
			? "text-lavender"
			: "text-marine group-hover:text-lavender group-focus-visible:text-lavender";
	return (
		<span
			aria-hidden
			className={`relative grid size-[34px] shrink-0 place-items-center overflow-hidden rounded-chip border border-marine transition-colors duration-300 ${arrow}`}
		>
			<span
				className="absolute inset-0 bg-marine transition-[clip-path] duration-500 ease-[cubic-bezier(0.34,1.4,0.64,1)] [clip-path:circle(0%_at_var(--o))] group-hover:[clip-path:circle(150%_at_var(--o))] group-focus-visible:[clip-path:circle(150%_at_var(--o))]"
				style={{ "--o": origin } as CSSProperties}
			/>
			<ArrowRight
				className={`relative transition-transform duration-300 ${
					direction === "left"
						? "rotate-180 group-hover:-translate-x-0.5"
						: "group-hover:translate-x-0.5"
				}`}
			/>
		</span>
	);
}
