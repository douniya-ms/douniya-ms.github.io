import { useState } from "react";
import { m } from "#/paraglide/messages";
import { getLocale, locales, setLocale } from "#/paraglide/runtime";

export function MenuLocaleSwitcher() {
	const [index, setIndex] = useState(() => Math.max(0, locales.indexOf(getLocale())));

	function choose(next: number) {
		if (next === index) return;
		setIndex(next); // the brackets slide now...
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		// ...and the page switches once they land (setLocale reloads the page)
		window.setTimeout(() => setLocale(locales[next]), reduced ? 0 : 450);
	}

	return (
		<div role="group" aria-label={m.language_label()} className="relative flex w-fit">
			{/* sliding bracket frame, one cell wide */}
			<span
				aria-hidden
				className="pointer-events-none absolute inset-y-0 left-0 w-14 transition-transform duration-500 ease-[cubic-bezier(0.34,1.4,0.64,1)]"
				style={{ transform: `translateX(${index * 100}%)` }}
			>
				<span className="absolute inset-y-0 left-0 w-1.5 border-y border-l border-marine" />
				<span className="absolute inset-y-0 right-0 w-1.5 border-y border-r border-marine" />
			</span>

			{locales.map((locale, i) => (
				<button
					key={locale}
					type="button"
					lang={locale}
					aria-pressed={i === index}
					onClick={() => choose(i)}
					className="type-mono h-11 w-14 uppercase text-marine"
				>
					{locale}
				</button>
			))}
		</div>
	);
}