export function ArrowUpRight({ className }: { className?: string }) {
	return (
		<svg
			aria-hidden
			viewBox="0 0 12 12"
			width="1em"
			height="1em"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.25"
			className={className}
		>
			<path d="M3 9L9 3M4 3h5v5" />
		</svg>
	);
}

/** 15px arrow used inside the 34px navigation buttons. Rotate it for "previous". */
export function ArrowRight({ className }: { className?: string }) {
	return (
		<svg
			aria-hidden
			viewBox="0 0 16 16"
			width="15"
			height="15"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.25"
			className={className}
		>
			<path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
		</svg>
	);
}

/** The 56x9 long arrow next to "View details". */
export function LongArrow({ className }: { className?: string }) {
	return (
		<svg
			aria-hidden
			viewBox="0 0 56 9"
			width="56"
			height="9"
			fill="none"
			stroke="currentColor"
			strokeWidth="1"
			className={className}
		>
			<path d="M0 4.5h55M51 1l4 3.5L51 8" />
		</svg>
	);
}
