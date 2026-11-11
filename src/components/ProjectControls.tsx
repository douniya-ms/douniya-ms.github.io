import { NavigationButton } from "#/components/NavigationButton";
import { useWorkNavigation } from "#/components/WorkNavigation";
import { m } from "#/paraglide/messages";

type ProjectControlsProps = {
	/** "onMoss" for the mobile bar: lavender text on the moss background */
	tone?: "default" | "onMoss";
};

/**
 * Figma "Section controls": Previous [←] [→] Next.
 * Both buttons always take their space, so nothing moves between projects:
 * an unavailable direction is hidden (invisible) and disabled, not removed.
 * On mobile the text labels are screen-reader only, to fit the moss bar.
 */
export function ProjectControls({ tone = "default" }: ProjectControlsProps) {
	const { canGoBack, canGoForward, previous, next } = useWorkNavigation();
	const text = tone === "onMoss" ? "text-lavender" : "text-marine";
	const button = `group type-mono flex cursor-pointer items-center gap-2 ${text} disabled:invisible`;

	return (
		<nav aria-label={m.work_controls_label()} className="flex items-center gap-2">
			<button type="button" onClick={previous} disabled={!canGoBack} className={button}>
				<span className="max-lg:sr-only">{m.work_previous()}</span>
				<NavigationButton direction="left" tone={tone} />
			</button>
			<button type="button" onClick={next} disabled={!canGoForward} className={button}>
				<NavigationButton direction="right" tone={tone} />
				<span className="max-lg:sr-only">{m.work_next()}</span>
			</button>
		</nav>
	);
}
