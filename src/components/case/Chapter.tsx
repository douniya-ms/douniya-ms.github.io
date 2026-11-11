import type { ReactNode } from "react";

/**
 * One case-study chapter: a full-width band with a hairline on top.
 * The layout inside is up to each page, so chapters can differ freely.
 */
export function Chapter({
	id,
	className = "",
	bordered = true,
	children,
}: {
	id?: string;
	className?: string;
	bordered?: boolean;
	children: ReactNode;
}) {
	return (
		<section
			id={id}
			className={`px-4 py-10 lg:px-(--gutter) lg:py-20 ${bordered ? "border-t border-surface-variant" : ""} ${className}`}
		>
			{children}
		</section>
	);
}

/** The large marine "// question" used to close a thought. */
export function HumanQuestion({ label, children }: { label?: string; children: ReactNode }) {
	return (
		<div className="flex items-start gap-[18px] pt-2">
			<span aria-hidden className="type-mono text-moss-ink">
				//
			</span>
			<div className="flex flex-1 flex-col gap-2.5">
				{label && <p className="type-mono uppercase text-moss-ink">{label}</p>}
				<p className="type-quote text-marine">{children}</p>
			</div>
		</div>
	);
}

/** Body paragraphs. */
export function Narrative({ paragraphs }: { paragraphs: string[] }) {
	return (
		<>
			{paragraphs.map((text) => (
				<p key={text.slice(0, 32)} className="type-body text-ink">
					{text}
				</p>
			))}
		</>
	);
}
