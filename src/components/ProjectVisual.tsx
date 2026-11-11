import type { ProjectCard } from "#/content/projects";

/**
 * Desktop project image, in the same slot and with the same three-slice
 * entry as the About portrait. Keyed by slug so the slices replay when
 * the visitor switches project.
 */
export function ProjectVisual({ project }: { project: ProjectCard }) {
	return (
		// z-[25]: above the column lines (z-20) so the project image stays clean.
		<div className="relative z-[25] flex aspect-[580/682] overflow-hidden lg:max-h-[max(600px,calc(100dvh-209px))] lg:w-[86.3%]">
			{[0, 1, 2].map((i) => (
				<div
					key={`${project.slug}-${i}`}
					className="relative z-10 h-full flex-1 overflow-hidden animate-slice-bounce"
					style={{ animationDelay: `${0.1 + i * 0.08}s` }}
				>
					<img
						src={project.cover}
						alt=""
						className="absolute top-0 h-full w-[300%] max-w-none object-cover"
						style={{ left: `-${i * 100}%` }}
					/>
				</div>
			))}
		</div>
	);
}
